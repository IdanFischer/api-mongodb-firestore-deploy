import { dbConnect } from "./dbConnect.js";
import { service_account } from "../secrets.js";

const COLLECTION_NAME = service_account.COLLECTION;
// Find All Of The Contacts
export async function findAllContacts(req, res) {
    
    const db = dbConnect();
    const collection = await db.collection(COLLECTION_NAME).find({}).limit(5).toArray();
    
    console.table(collection);
    res.send(collection);
}

//Post a Contact
export async function postContact(req, res) {
    const newContact = req.body
    /* { "id": 1, 
    "first_name": "Joesph", 
    "last_name": "Joestar", 
    "email": "Jostar151989@gmail.com, 
    "ip_address":"Vanilla_Ice"}
    "linkedIn": "Joeystary1" */

    const db = dbConnect();
    await db.collection(COLLECTION_NAME).insertOne(newContact)
        .catch(err => {
            res.status(500).send(err)
            return
        })
        res.status(201).send( {message: 'New Contact Inserted'});
}