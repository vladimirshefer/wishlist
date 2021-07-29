export default {
    hashcode(string) {
        if (!string) return 0;
        return Array.from(string).map(it => it.charCodeAt(0)).reduce((a, b) => a + b * 2)
    }
}
