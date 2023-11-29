import express from "express";

import {addBook, getAllBooks, removeBook, updateBook} from "../controllers/booksController.js";

const router=express.Router();

router.post("/add",addBook);

router.use("/remove",removeBook);

router.use("/update",updateBook);

router.use("/all",getAllBooks);

export default router;