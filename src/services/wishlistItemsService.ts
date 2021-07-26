import db from "@/db";
import firebase from "firebase";
import WishlistItemEntity from "@/db/model/WishlistItemEntity"

class WishlistItemService {

    async edit(id: string, item: WishlistItemEntity): Promise<void> {
        await db.wishlistItems.doc(id).update(WishlistItemService.normalize(item));
    }

    async create(item: WishlistItemEntity): Promise<void> {
        await db.wishlistItems.add(
          {
              ...WishlistItemService.normalize(item),
              uid: firebase.auth().currentUser?.uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }
        )
    }

    async getById(id: string): Promise<WishlistItemEntity | null> {
        const withlistItemPromise = await db.wishlistItems.doc(id).get();
        return withlistItemPromise.data() as WishlistItemEntity;
    }


    private static normalize(item: any): WishlistItemEntity {
        delete item.id;

        if (typeof item.private === "undefined") {
            item.private = false
        } else if (
          typeof item.private === "string"
        ) {
            if (item.private === "false") {
                item.private = false
            } else if (item.private === "true") {
                item.private = true
            } else item.private = !!item.private;
        }

        return item
    }

}

const wishlistItemService = new WishlistItemService()

export default wishlistItemService
