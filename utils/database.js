import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://isiagigeofrey0:Gh1yfZQQLK7Ui44R@share.lxciaxr.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "share",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    connect = true;

    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
