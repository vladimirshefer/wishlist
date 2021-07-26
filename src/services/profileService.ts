import db from "@/db"
import firebase from "firebase";
import UserProfileEntity from "@/db/model/UserProfileEntity";

class UserProfileService {

    saveProfile(profile: UserProfileEntity): void {
        db.userProfiles
          .doc(firebase.auth().currentUser?.uid)
          .set(profile, {merge: true})
          .catch(error => {
              console.error("Could not create or update profile", JSON.stringify(error), error)
          })
    }

    async initUserProfile(): Promise<void> {
        const currentUser = firebase.auth().currentUser;

        if (!currentUser) {
            return
        }

        const profile = await this.getUserProfileOrNull(currentUser.uid);

        await db.userProfiles.doc(currentUser.uid).set({
            displayName: profile?.displayName || currentUser.displayName,
            photoURL: profile?.photoURL || currentUser.photoURL,
        }, {merge: true})
    }

    async getUserProfileOrNull(uid: string): Promise<UserProfileEntity | null> {
        try {
            const userProfileSnapshot = await db.userProfiles.doc(uid).get();
            return (userProfileSnapshot.data() as UserProfileEntity) || null
        } catch (e) {
            return null
        }
    }
}

const userProfileService = new UserProfileService();

export default userProfileService
