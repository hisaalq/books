import { Router } from "express";
import { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } from "../controllers/authors.controller";

const authorsRouter = Router();

authorsRouter.post("/", createAuthor);
authorsRouter.get("/", getAuthors);
authorsRouter.get("/:id", getAuthorById);
authorsRouter.put("/:id", updateAuthor);
authorsRouter.delete("/:id", deleteAuthor);

export default authorsRouter;