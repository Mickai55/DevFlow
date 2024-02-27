"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { ProfileSchema } from "@/lib/validations";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.action";

interface Props {
  clerkId: string;
  user: string;
}

const Profile = ({ clerkId, user }: Props) => {
  const parsedUser = JSON.parse(user);
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: parsedUser.name || "",
      username: parsedUser.username || "",
      bio: parsedUser.bio || "",
      portfolioWebsite: parsedUser.portfolioWebsite || "",
      location: parsedUser.location || "",
    },
  });
  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    setisSubmitting(true);
    try {
      await updateUser({
        clerkId,
        updateData: {
          name: values.name,
          username: values.username,
          bio: values.bio,
          portfolioWebsite: values.portfolioWebsite || "",
          location: values.location,
        },
        path: pathname,
      });
      router.back();
    } catch (error) {
      console.log(error);
    } finally {
      setisSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-9 flex flex-col w-full gap-9"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Name <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="no-focus paragraph-regular light-border-2 
                background-light800_dark300 text-dark300_light700 border min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Username <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your username"
                  className="no-focus paragraph-regular light-border-2 
                background-light800_dark300 text-dark300_light700 border min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="portfolioWebsite"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Portfolio Link
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="Your portfolio URL"
                  className="no-focus paragraph-regular light-border-2 
                background-light800_dark300 text-dark300_light700 border min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Location
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your location"
                  className="no-focus paragraph-regular light-border-2 
                background-light800_dark300 text-dark300_light700 border min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="space-y-3.5">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Bio
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your bio"
                  className="no-focus paragraph-regular light-border-2 
                background-light800_dark300 text-dark300_light700 border min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-7 flex justify-end">
          <Button
            type="submit"
            className="primary-gradient w-fit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Profile;
