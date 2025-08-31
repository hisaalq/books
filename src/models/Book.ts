import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
}, { timestamps: true });

const Book = model("Book", bookSchema);

export default Book;