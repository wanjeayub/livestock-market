import express from "express";
import {
  createListing,
  findListingById,
  getListings,
} from "../controllers/listing.contoller.js";
const router = express.Router();
router.post("/add-listing", createListing);
router.get("/get-all", getListings);
router.get("/:id", findListingById);
export default router;
