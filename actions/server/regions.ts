



// "use server";

// import { collections, dbConnect } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// export const getProducts = async () => {
//   const regionsCollection = await dbConnect(collections.REGIONS)
//   const services = await  regionsCollection.find().toArray();
//   // Convert _id to string for safe JSON serialization
//   return services.map((region) => ({
//     ...region,
//     _id: region._id.toString(),
//   }));
// };

// export const getSingleProduct = async (id: string) => {
//   // Validate ID properly
//   if (!id || !ObjectId.isValid(id)) {
//     return {};
//   }

//   const query = { _id: new ObjectId(id) };
//   const regionsCollection = await dbConnect(collections.REGIONS)
//   const region = await regionsCollection.findOne(query);

//   // Safely handle not found
//   if (!region) {
//     return {};
//   }

//   return {
//     ...region,
//     _id: region._id.toString(),
//   };
// };








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