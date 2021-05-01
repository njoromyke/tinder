import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://myke:1234@cluster0.wbint.mongodb.net/tinder?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("Mongo db conncected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export default connectDB;
