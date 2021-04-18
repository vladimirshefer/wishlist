import db from "@/db"
import firebase from "firebase";

export default {
    saveProfile(profile) {
        db.userProfiles
            .doc(firebase.auth().currentUser.uid)
            .set(profile)
            .catch(error => {
                console.error("Could not create or update profile", JSON.stringify(error), error)
            })
    },
    async initUserProfile() {
        let currentUser = firebase.auth().currentUser;

        if (!currentUser) {
            return
        }

        let profile = await this.getUserProfileOrNull(currentUser.uid) || {};

        await db.userProfiles.doc(currentUser.uid).set({
            displayName: profile.displayName || currentUser.displayName,
            photoURL: profile.photoURL || currentUser.photoURL,
        }, {merge: true})
    },
    async getUserProfileOrNull(uid) {
        try {
            return (await db.userProfiles.doc(uid).get()).data() || null
        } catch (e) {
            return null
        }
    }
}
