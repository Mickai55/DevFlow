"use client";

import { downvoteAnswer, upvoteAnswer } from "@/lib/actions/answer.action";
import { viewQuestion } from "@/lib/actions/interaction.action";
import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/question.action";
import { toggleSaveQuestion } from "@/lib/actions/user.action";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: string[];
  hasupVoted: boolean;
  downvotes: string[];
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved,
}: Props) => {
  const path = usePathname();
  const router = useRouter();

  async function handleSave() {
    await toggleSaveQuestion({
      userId: JSON.parse(userId),
      questionId: JSON.parse(itemId),
      path,
    });
  }
  async function handleVote(action: string) {
    if (!userId) {
      return;
    }
    if (action === "upvote") {
      if (type === "Question") {
        await upvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path,
        });
      } else if (type === "Answer") {
        await upvoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path,
        });
      }
      // todo show a toast
      return;
    }

    if (action === "downvote") {
      if (type === "Question") {
        await downvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path,
        });
      } else if (type === "Answer") {
        await downvoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path,
        });
      }
      // todo show a toast
      return;
    }
  }

  useEffect(() => {
    viewQuestion({
      questionId: JSON.parse(itemId),
      userId: userId ? JSON.parse(userId) : undefined,
    });
  }, [itemId, type, userId, router]);

  return (
    <div>
      <div className="flex gap-5">
        <div className="flex gap-2.5">
          <div className="flex-center gap-1.5">
            <Image
              src={`/assets/icons/${hasupVoted ? "upvoted" : "upvote"}.svg`}
              alt="upvote"
              width={18}
              height={18}
              className="cursor-pointer"
              onClick={() => handleVote("upvote")}
            />
            <div
              className="flex-center background-light700_dark400
            min-w-[18px] rounded-sm p-1"
            >
              <p className="subtle-medium text-dark400_light900">
                {formatAndDivideNumber(upvotes.length)}
              </p>
            </div>
          </div>

          <div className="flex-center gap-1.5">
            <Image
              src={`/assets/icons/${
                hasdownVoted ? "downvoted" : "downvote"
              }.svg`}
              alt="downvote"
              width={18}
              height={18}
              className="cursor-pointer"
              onClick={() => handleVote("downvote")}
            />
            <div
              className="flex-center background-light700_dark400
            min-w-[18px] rounded-sm p-1"
            >
              <p className="subtle-medium text-dark400_light900">
                {formatAndDivideNumber(downvotes.length)}
              </p>
            </div>
          </div>
        </div>

        {type === "Question" && (
          <Image
            src={`/assets/icons/${hasSaved ? "star-filled" : "star-red"}.svg`}
            alt="star"
            width={18}
            height={18}
            className="cursor-pointer"
            onClick={() => handleSave()}
          />
        )}
      </div>
    </div>
  );
};

export default Votes;
