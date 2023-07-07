class MyError extends Error {
    constructor(message,errorName) {
        super(message)
        this.msg = message;
        this.name = errorName;
        Error.captureStackTrace(this, MyError);
    }
};

module.exports = { MyError}