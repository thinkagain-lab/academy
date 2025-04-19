import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://thinkagainlab:yO0dwHkBmtzQXF0X@academy.etghupl.mongodb.net/?retryWrites=true&w=majority&appName=Academy";

// Enhanced connection options with timeouts and connection pooling
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // Connection timeout settings
  connectTimeoutMS: 10000,       // 10 seconds connection timeout
  socketTimeoutMS: 30000,        // 30 seconds socket timeout
  serverSelectionTimeoutMS: 10000, // 10 seconds server selection timeout
  // Connection pool settings
  maxPoolSize: 10,               // Maintain up to 10 socket connections
  minPoolSize: 1,                // Keep at least 1 connection available
  // Reconnect settings
  heartbeatFrequencyMS: 10000,   // Check server status every 10 seconds
  retryWrites: true,
  retryReads: true
};

// Global promise to reuse connections
let clientPromise;

// Create a cached connection variable for development hot reloading
let cachedClient = null;

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a function to connect to the database
async function connectToDatabase() {
  try {
    // Use the cached client if available
    if (cachedClient) {
      return cachedClient;
    }
    
    console.log("Establishing new MongoDB connection...");
    const client = await clientPromise;
    
    // Test the connection with a ping
    await client.db().command({ ping: 1 });
    console.log("MongoDB connection established successfully");
    
    // Cache the connected client
    cachedClient = client;
    return client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error(`Database connection failed: ${error.message}`);
  }
}

export { connectToDatabase };