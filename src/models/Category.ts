import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    books: {
        type: [Schema.Types.ObjectId],
        ref: "Book",
    },
}, { timestamps: true });

const Category = model("Category", categorySchema);

export default Category;