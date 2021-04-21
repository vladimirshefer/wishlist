import db from "@/db";
import firebase from "firebase";

export default {
    async edit(id, item) {
        await db.wishlistItems.doc(id).update(this.utils.normalize(item));
    },
    async create(item) {
        await db.wishlistItems.add(
            {
                ...this.utils.normalize(item),
                uid: firebase.auth().currentUser.uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
    },
    utils: {
        normalize(item) {
            delete item.id;

            if (typeof item.private === "undefined") {
                item.private = false
            } else if (typeof item.private === "string") {
                if (item.private === "false") {
                    item.private = false
                } else if (item.private === "true") {
                    item.private = true
                } else item.private = !!item.private;
            }

            return item
        }
    }
}
