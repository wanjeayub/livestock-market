import Listing from "../models/listing.model.js";

export const createListing = async (req, res) => {
  try {
    const newListing = await Listing.create(req.body);
    return res.status(201).json(newListing);
  } catch (error) {
    console.log(error.message);
  }
};

export const getListings = async (req, res) => {
  try {
    const allListings = await Listing.find({});
    return res.status(200).json(allListings);
  } catch (error) {
    console.log(error);
  }
};
export const findListingById = async (req, res) => {
  try {
    const listingFound = await Listing.findById(req.params.id);
    if (!listingFound) {
      return res.status(404).send("listing not found");
    } else {
      res.status(200).json(listingFound);
    }
  } catch (error) {
    console.log(error);
  }
};
