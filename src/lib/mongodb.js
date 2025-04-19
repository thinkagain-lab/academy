import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://thinkagainlab:yO0dwHkBmtzQXF0X@academy.etghupl.mongodb.net/?retryWrites=true&w=majority&appName=Academy";

// Create a MongoClient with a MongoClientOptions object
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// For use in your application
let clientPromise;

async function connectToDatabase() {
  try {
    if (!clientPromise) {
      clientPromise = client.connect();
    }
    return clientPromise;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export { connectToDatabase, client };