import Author from "../models/Author";
import { Request, Response, NextFunction } from "express";

export const getAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await Author.find().populate("books");
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};

export const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const author = await Author.findById(req.params.id).populate("books");
        res.status(200).json(author);
    } catch (error) {
        next(error);
    }
};

export const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
    } catch (error) {
        next(error);
    }
};

export const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("books");
        if (req.body.books) {
            await Author.findByIdAndUpdate(req.params.id, { $push: { books: req.body.books } });
        }
        res.status(200).json({ message: "Author updated successfully", author });
    } catch (error) {
        next(error);
    }
};

export const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Author.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
        next(error);
    }
};