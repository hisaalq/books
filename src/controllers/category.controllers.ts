import { Request, Response, NextFunction } from "express";
import Category from "../models/Category";

export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await Category.find().populate("books");
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

export const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findById(req.params.id).populate("books");
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
};

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("books");
        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        next(error);
    }
};