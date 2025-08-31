import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    id : {
        type: Number,
        required: true,
        unique: true,
        select: true,
    },
    name: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    },
    books: {
        type: [Schema.Types.ObjectId],
        ref: "Book",
        required: true,
    },
}, 
{ timestamps: true });

const Author = model("Author", authorSchema);

export default Author;