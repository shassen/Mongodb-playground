import mongoose from "mongoose";

console.log("Successfully entered findAndLogDocs file...");

async function main() {
  const uri = "mongodb://localhost:27017/playground";
  const collectionName = "first_collection";
  const MySchema = new mongoose.Schema({
    name: String,
    age: Number,
    test: String,
  });
  try {
    await mongoose.connect(uri);

    const MyModel = mongoose.model(collectionName, MySchema);

    const documents = await MyModel.find({});

    console.log("Found documents: ");
    documents.forEach((doc) => console.log(doc));
  } catch (err) {
    console.log("Error fetching documents: ", err);
  } finally {
    await mongoose.connection.close();
  }
}

main().catch((err) => console.log("Error in main function: ", err));
