import mongoose from "mongoose";

const uri = 'mongodb+srv://yogi:qS5IMJGCaGYlxUsz@cluster0.mhftd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
let conn: any = null;

export const connect = async () => {
    if(conn == null) {
        conn = mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 }).then(() => mongoose);
        await conn;
    }

    return conn;
}