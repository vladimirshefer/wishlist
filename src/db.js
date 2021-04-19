import firebase from "firebase";

require("@/init/firebase");

function collection(collectionPath) {
    return firebase.firestore().collection(collectionPath);
}

export default {
    wishlistItems: collection("wishlistItems"),
    userProfiles: collection("userProfiles"),
    subscriptions: collection("subscriptions"),
}
