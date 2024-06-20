const Fastify = require("fastify");
const mongoose = require("mongoose");

const app = Fastify();
const port = 3000; // Choose a port for your server

// Replace with your actual MongoDB connection URI
const uri = "mongodb://localhost:27017/playground";
const collectionName = "first_collection";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/api/documents", async (req, reply) => {
  try {
    const MySchema = new mongoose.Schema({
      name: String,
      age: Number,
    });
    const MyModel = mongoose.model(collectionName, MySchema);

    const documents = await MyModel.find({});
    reply.code(200).send(documents); // Send the documents data as JSON
  } catch (err) {
    console.error("Error fetching documents:", err);
    reply.code(500).send("Error fetching documents"); // Handle errors
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${port}`);
});
