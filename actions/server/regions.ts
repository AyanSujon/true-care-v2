



"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getRegions = async () => {
  const regionsCollection = await dbConnect(collections.REGIONS);
  const regions = await regionsCollection.find({}).toArray();

  return regions.map((region) => ({
    ...region,
    _id: region._id.toString(),
  }));
};

export const getSingleRegion = async (id: string) => {
  if (!id || !ObjectId.isValid(id)) {  // ← Fixed: is_valid (lowercase)
    return {}; // or null / throw new Error("Invalid ID")
  }

  const query = { _id: new ObjectId(id) };
  const regionsCollection = await dbConnect(collections.REGIONS);
  const region = await regionsCollection.findOne(query);

  if (!region) {
    return {}; // or null
  }

  return {
    ...region,
    _id: region._id.toString(),
  };
};