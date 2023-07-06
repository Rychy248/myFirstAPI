

const person = {
    firstName: "John",
    lastName: "Doe",
    lang: "",
    get lang() {
        return this.language;
    },
    set lang(lang) {
        this.language = lang;
    }
};

module.exports = { person }