export default {
    hashcode(string) {
        return Array.from(string).map(it => it.charCodeAt(0)).reduce((a, b) => a + b * 2)
    }
}
