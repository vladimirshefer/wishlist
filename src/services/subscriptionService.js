import db from "@/db"

export default {
    async subscribe(subscriberId, subjectUserId) {
        try {
            await db.subscriptions
                .doc(`${subscriberId}_${subjectUserId}`)
                .set({
                    subscriber: subscriberId,
                    subject: subjectUserId,
                }, {merge: true})
        } catch (e) {
            console.error(`Could not subscribe ${subscriberId} on ${subjectUserId}`, JSON.stringify(e), e)
        }
    },
    async unsubscribe(subscriberId, subjectUserId) {
        try {
            await db.subscriptions
                .doc(`${subscriberId}_${subjectUserId}`)
                .delete()
        } catch (e) {
            console.error(`Could not unsubscribe ${subscriberId} from ${subjectUserId}`, JSON.stringify(e), e)
        }
    },
    async getSubscriptionOrNull(subscriberId, subjectUserId) {
        if (subscriberId === subjectUserId) return null;

        try {
            let documentId = `${subscriberId}_${subjectUserId}`;
            return (await db.subscriptions.doc(documentId).get()).data() || null;
        } catch (e) {
            console.error(e);
            return null
        }
    },
}
