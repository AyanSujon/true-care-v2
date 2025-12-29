"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";


type UserPayload = {
    email: string;
    password: string;
    name?: string;
};

export const postUser = async (payload: UserPayload) => {
    const { email, password, name } = payload;
    // check payload
    if (!email || !password) return null;

    // check user
    // const isExist = await dbConnect(collections.USERS).findOne({email});
    const userCollection = await dbConnect(collections.USERS);
    const isExist = await userCollection.findOne({ email });
    if (isExist) {
        return null;
    }
    // create user
    const newUser = {
        provider: "credentials",
        name,
        email,
        password: await bcrypt.hash(password, 14),
        role: "user",
    };
    // insert user

    // const result = await dbConnect(collections.USERS).insertOne(newUser); 
    const result = await userCollection.insertOne(newUser);

    if (result.acknowledged) {
        return {
            ...result, insertedId: result.insertedId.toString(),
        };
    };
};


