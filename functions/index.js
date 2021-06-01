/* eslint-disable eol-last */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51I8UCpF5EXVu3dHNRM8ehKfdpLRQX5xGfSyKuKCXwMPGwORFGXoR5lRKeCOeHB5mV36AFxuPubyctRDvvNQMOUXo00moGUs01G");
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("test"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);