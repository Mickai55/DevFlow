"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types";
import Interaction from "@/database/interaction.model";
import User from "@/database/user.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    await connectToDatabase();

    const { questionId, userId } = params;
    await Question.findByIdAndUpdate(questionId, {
      $inc: {
        views: 0.5,
      },
    });
    // console.log(userId);
    // if (userId) {
    //   const userObj = await User.findOne({ clerkId: userId });
    //   console.log(userObj);

    //   const existingInteraction = await Interaction.findOne({
    //     user: userObj._id,
    //     action: "view",
    //     question: questionId,
    //   });
    //   if (!existingInteraction) {
    //     await Interaction.create({
    //       user: userObj._id,
    //       action: "view",
    //       question: questionId,
    //     });
    //   } else {
    //     console.log("Interaction already exists");
    //   }
    // }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
