import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/playground";

async function connectToMongo() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
  }
}

const MySchema = new mongoose.Schema({ name: String, age: Number });
const MyModel = mongoose.model("first_collection", MySchema);

async function createDocument(name: string, age: number) {
  try {
    const newDoc = new MyModel({ name, age });
    await newDoc.save();
    console.log("Document saved!", newDoc);
    console.log("Exiting...");
  } catch (err) {
    console.log("Error creating document: ", err);
  }
}

async function main() {
  await connectToMongo();
  await createDocument("Jackson", 35);
  await mongoose.connection.close();
}

main().catch((error) => console.log("Error in main function: ", error));
