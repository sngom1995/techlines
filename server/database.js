import mongoose from "mongoose";

const connectToMongoDB = async () => {
  mongoose.set("strictQuery", false);
  console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectToMongoDB;
