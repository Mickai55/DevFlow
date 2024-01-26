import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    throw new Error("Please add your Mongo URI to .env.local");
  }
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev-flow",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
