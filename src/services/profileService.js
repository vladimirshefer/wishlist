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
    /**
     * @param uid User id
     * @param actionWithUpdatedProfile What to do with profile on receive or updates
     * @returns {() => void} Function which should be called to stop receiving updates of profile.
     */
    subscribeOnProfileByUserId(uid, actionWithUpdatedProfile) {
        return db.userProfiles.doc(uid)
            .onSnapshot(
                profile => {
                    actionWithUpdatedProfile(profile.data())
                },
                error => {
                    console.error(error)
                    actionWithUpdatedProfile(null);
                },
            )
    },
    async initUserProfile(uid) {
        if (await this.getUserProfileOrNull(uid) === null) {
            await db.userProfiles.doc(uid).set({})
        }
    },
    async getUserProfileOrNull(uid) {
        try {
            return (await db.userProfiles.doc(uid).get()).data()
        } catch (e) {
            return null
        }
    }
}
