const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
// [END import]
// [START addMessage]
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
// [START addMessageTrigger]
exports.checkAccess = functions.https.onRequest(async (req, res) => {
    // [END addMessageTrigger]
    // Grab the text parameter.
    // Send back a message that we've successfully written the message
    const IP =
        req.headers["x-real-ip"] ||
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
        ""
    const writeResult = await admin.firestore().collection('messages').add({ query: req.query, ua: req.headers['user-agent'], IP });
    res.status(403).json({ result: `Wrong password for the given Document. Trace ${writeResult.id}` });
    // [END adminSdkAdd]
});