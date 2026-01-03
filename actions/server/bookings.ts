"use server";

import { getServerSession } from "next-auth";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { authOptions } from "@/lib/authOption";

type BookingPayload = {
  serviceId: string;
  date: string; // e.g., "January 15, 2026"
  time: string; // e.g., "02:00 PM"
  duration: number;
  region: string;
  district: string;
  fullAddress: string;
  phone: string;
  notes?: string;
  totalPrice: number;
  name?: string; // optional, only used if not logged in
  email?: string; // optional, only used if not logged in
};

export const submitBooking = async (payload: BookingPayload) => {
  const session = await getServerSession(authOptions);

  let userId: ObjectId | null = null;
  let userEmail: string = payload.email || "";
  let userName: string = payload.name || "";

  const userCollection = await dbConnect(collections.USERS);
  const bookingCollection = await dbConnect(collections.BOOKINGS);

  // If user is logged in → use authenticated data (most secure)
  if (session?.user?.email) {
    const loggedInUser = await userCollection.findOne({ email: session.user.email });

    if (!loggedInUser) {
      return { error: "Authenticated user not found in database" };
    }

    userId = loggedInUser._id;
    userEmail = loggedInUser.email;
    userName = loggedInUser.name || userName; // prefer DB name
  } else {
    // Guest booking: try to find existing user by email, or just save as guest
    if (payload.email) {
      const existingUser = await userCollection.findOne({ email: payload.email });
      if (existingUser) {
        userId = existingUser._id;
        userName = existingUser.name || payload.name || "";
      }
    }
    // If no email or no match → remains guest (userId = null)
  }

  const newBooking = {
    userId: userId || null,
    userEmail,
    userName,
    phone: payload.phone,
    serviceId: new ObjectId(payload.serviceId),
    date: payload.date,
    time: payload.time,
    duration: payload.duration,
    region: payload.region,
    district: payload.district,
    fullAddress: payload.fullAddress,
    notes: payload.notes || "",
    totalPrice: payload.totalPrice,
    status: "pending",
    createdAt: new Date(),
  };

  const result = await bookingCollection.insertOne(newBooking);
console.log( "after submmit" , result)
  if (result.acknowledged) {
    return {
      success: true,
      bookingId: result.insertedId.toString(),
    };
  }

  return { error: "Failed to save booking. Please try again." };
};


