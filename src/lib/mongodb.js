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
  socketTimeoutMS: 45000,        // 45 seconds socket timeout
  serverSelectionTimeoutMS: 15000, // 15 seconds server selection timeout
  // Connection pool settings
  maxPoolSize: 10,               // Maintain up to 10 socket connections
  minPoolSize: 1,                // Keep at least 1 connection available
  // Reconnect settings
  heartbeatFrequencyMS: 10000,   // Check server status every 10 seconds
  retryWrites: true,
  retryReads: true
};

// Create the client instance
const client = new MongoClient(uri, options);

// Global promise for connection reuse
let clientPromise;

// Cached client to avoid reconnecting on every request
let cachedClient = null;

// Export a function to connect to the database
async function connectToDatabase() {
  try {
    // Use the cached client if available
    if (cachedClient) {
      return cachedClient;
    }
    
    console.log("Establishing new MongoDB connection...");
    
    // Initialize the promise if it doesn't exist yet
    if (!clientPromise) {
      clientPromise = client.connect();
    }
    
    // Await the connection
    const connectedClient = await clientPromise;
    
    // Test the connection with a ping and a reasonable timeout
    await Promise.race([
      connectedClient.db().command({ ping: 1 }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Database ping timeout after 5s')), 5000)
      )
    ]);
    
    console.log("MongoDB connection established successfully");
    
    // Cache the connected client
    cachedClient = connectedClient;
    return connectedClient;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    
    // Reset the promise and cached client on error to force a new connection attempt
    clientPromise = null;
    cachedClient = null;
    
    throw new Error(`Database connection failed: ${error.message}`);
  }
}

export { connectToDatabase };