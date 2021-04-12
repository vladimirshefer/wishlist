export const wishlistItems = {
    utils: {
        normalize(item) {
            if (typeof item.private === "undefined") {
                item.private = false
            } else if (typeof item.private === "string") {
                if (item.private === "false") {
                    item.private = false
                } else if (item.private === "true") {
                    item.private = true
                } else if (!item.private) {
                    item.private = false
                } else {
                    item.private = true
                }
            }

            return item
        }
    }
}
