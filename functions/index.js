import express from "express"
import cors from "cors"
import functions from "firebase-functions"

import { findAllContacts, postContact } from "./src/contacts.js"

const app = express();
app.use( express.json());
app.use( cors() );

// Setup Routes for sure

app.get("/", (req, res) => {
    res.send("Holy crap. 😈 We made a cloud function! Isn't that cool!!")
})

// Find All Of The Contacts
app.get("/findAllContacts", findAllContacts)

//Post a Contact
app.post("/postContact", postContact)

export const api = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true})
//   response.send("Hello from Firebase!")
// })
