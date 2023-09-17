import { MongoClient } from "mongodb";
// Connection URL
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hfistot.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;
let db = {};
const connectToDB = async (app) => {
  try {
    await client.connect();
    console.log("Connected successfully to DB");

  } catch (error) {
    console.log(`cannot connect to DB by ${error}`);
  }
};
export default connectToDB;
