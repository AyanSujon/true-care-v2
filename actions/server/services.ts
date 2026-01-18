// "use server";

// import { collections, dbConnect } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// export const getProducts = async () => {
//   const services = await dbConnect(collections.SERVICES).find().toArray();
//   return services;
// };

// export const getSingleProduct = async (id) => {
//   if (id.length != 24) {
//     return {};
//   }
//   const query = { _id: new ObjectId(id) };

//   const service = await dbConnect(collections.SERVICES).findOne(query);

//   return { ...service, _id: service._id.toString() } || {};
// };










// "use server";

// import { collections, dbConnect } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// export const getProducts = async () => {
//   const servicesCollection = await dbConnect(collections.SERVICES)
//   const services = await servicesCollection.find().toArray();
//   // Convert _id to string for safe JSON serialization
//   return services.map((service) => ({
//     ...service,
//     _id: service._id.toString(),
//   }));
// };

// export const getSingleProduct = async (id: string) => {
//   // Validate ID properly
//   if (!id || !ObjectId.isValid(id)) {
//     return {};
//   }

//   const query = { _id: new ObjectId(id) };
//   const servicesCollection = await dbConnect(collections.SERVICES)
//   const service = await servicesCollection.findOne(query);

//   // Safely handle not found
//   if (!service) {
//     return {};
//   }

//   return {
//     ...service,
//     _id: service._id.toString(),
//   };
// };



























"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


// Define the TypeScript type for a service document
export interface Service {
  _id: ObjectId;
  name: string;
  price: number;
  description?: string;

}


export const getProducts = async () => {
  const servicesCollection = await dbConnect(collections.SERVICES)
  const services = await servicesCollection.find().toArray();
  // Convert _id to string for safe JSON serialization
  return services.map((service: Service) => ({
    ...service,
    _id: service._id.toString(),
  }));
};

export const getSingleProduct = async (id: string) => {
  // Validate ID properly
  if (!id || !ObjectId.isValid(id)) {
    return {};
  }

  const query = { _id: new ObjectId(id) };
  const servicesCollection = await dbConnect(collections.SERVICES)
  const service = await servicesCollection.findOne(query);

  // Safely handle not found
  if (!service) {
    return {};
  }

  return {
    ...service,
    _id: service._id.toString(),
  };
};




