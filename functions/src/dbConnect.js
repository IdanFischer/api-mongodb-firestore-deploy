import { MongoClient } from "mongodb";
import { service_account } from "../secrets.js";


export function dbConnect() {
    const client = new MongoClient(service_account.URI);
    return client.db(service_account.DB)
}
