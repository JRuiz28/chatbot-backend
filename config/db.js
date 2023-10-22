import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB connected successfully in: ${url}`);

  } catch (error) {
    console.log(`error: ${error.message}`);
    // Force process's ending
    process.exit(1);
  }
}

export default connectionDB;
