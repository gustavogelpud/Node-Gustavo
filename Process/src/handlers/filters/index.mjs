import { Router } from "express";
import applyFiltersHandler from "./applyFiltersHandler.mjs";

const router = Router();

router.get("/", (req, res) => {
    res.send("ok images get");
})

router.post("/", applyFiltersHandler);

export const test = () => {}

export default router;
