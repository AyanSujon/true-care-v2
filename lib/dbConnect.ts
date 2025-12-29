const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI!;
const dbName = process.env.DB_NAME!;
export const collections= {
    SERVICES: "services",
    USERS: "users",

}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// export const dbConnect=(cname)=>{
//     return client.db(dbName).collection(cname);
// }
let isConnected = false;

export const dbConnect = async (cname: string) => {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db(dbName).collection(cname);
};


