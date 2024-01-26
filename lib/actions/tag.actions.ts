"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types.d";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    if (!user) {
      throw new Error("User not found");
    }

    // Find interactions for the user and group by tags
    // Interaction...

    return [
      { _id: "1", name: "test" },
      { _id: "2", name: "test2" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
