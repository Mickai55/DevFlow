"use client";

import React, { BaseSyntheticEvent, useRef, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { AnswersSchema } from "@/lib/validations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { useTheme } from "@/context/ThemeProvider";
import { Button } from "../ui/button";
import Image from "next/image";
import { createAnswer } from "@/lib/actions/answer.action";
import { usePathname } from "next/navigation";
import { toast } from "../ui/use-toast";

interface Props {
  question: string;
  questionId: string;
  authorId: string;
  userId: string;
}

const Answer = ({ question, questionId, authorId, userId }: Props) => {
  const pathname = usePathname();
  const [isSubmitting, setisSubmitting] = useState(false);
  const [isSubmittingAI, setIsSubmittingAI] = useState(false);
  const { mode } = useTheme();
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof AnswersSchema>>({
    resolver: zodResolver(AnswersSchema),
    defaultValues: {
      answer: "",
    },
  });

  async function handleCreateAnswer(values: z.infer<typeof AnswersSchema>) {
    setisSubmitting(true);
    try {
      if (!userId) {
        return toast({
          variant: "destructive",
          title: "Sign in to add answer",
          description: "Please sign in to add answer",
        });
      }
      await createAnswer({
        content: values.answer,
        author: JSON.parse(authorId),
        question: JSON.parse(questionId),
        path: pathname,
      });

      toast({ title: "Answer Added" });

      form.reset();
      const editor = editorRef.current as any;
      if (editor) {
        editor.setContent("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  const generateAIAnswer = async () => {
    if (!authorId) {
      return;
    }
    setIsSubmittingAI(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/chatgpt`,
        {
          method: "POST",
          body: JSON.stringify({
            question,
          }),
        }
      );
      const aiAnswer = await response.json();

      const formattedAnswer = aiAnswer.reply.replace(/\n/g, "<br />");
      if (editorRef.current) {
        const editor = editorRef.current as any;
        editor.setContent(formattedAnswer);
        toast({ title: "AI Answer created" });
        form.setValue(
          "answer",
          // @ts-ignore
          editorRef.current.getContent()
        );
      }
      setIsSubmittingAI(false);

      // Toast...
    } catch (error) {
      setIsSubmittingAI(false);

      toast({ title: "Error when creating AI Answer" });
      console.log(error);
    } finally {
    }
  };

  return (
    <div>
      <div
        className="flex flex-col justify-between gap-5 sm:flex-row
        sm:items-center sm:gap-2"
      >
        <h4 className="paragraph-semibold text-dark-400_light800">
          Write your answer here
        </h4>
        <Button
          className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 
        text-primary-500 shadow-none dark:text-primary-500"
          onClick={generateAIAnswer}
        >
          {isSubmittingAI ? (
            <>Generating...</>
          ) : (
            <>
              <Image
                src="/assets/icons/stars.svg"
                width={12}
                height={12}
                alt="pen"
                className="object-contain"
              />
              Generate AI answer
            </>
          )}
        </Button>
      </div>
      <Form {...form}>
        <form
          className="mt-6 flex w-full flex-col gap-10"
          onSubmit={form.handleSubmit(handleCreateAnswer)}
        >
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormControl className="mt-3.5">
                  <Editor
                    onKeyPress={(e) => {
                      if (editorRef.current)
                        form.setValue(
                          "answer",
                          // @ts-ignore
                          editorRef.current.getContent()
                        );
                    }}
                    onPaste={(e) => {
                      if (editorRef.current)
                        form.setValue(
                          "answer",
                          // @ts-ignore
                          editorRef.current.getContent()
                        );
                    }}
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    initialValue=""
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "undo redo | " +
                        "codesample | bold italic forecolor | alignleft aligncenter | " +
                        "alignright alignjustify | bullist numlist",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                      skin: mode === "dark" ? "oxide-dark" : "oxide",
                      content_css: mode === "dark" ? "dark" : "light",
                    }}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="primary-gradient w-fit text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Answer;
