"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { email } from "zod";


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


type loginUserPayload = {
    email: string;
    password: string;
    remember?: boolean;
};
export const loginUser = async(payload: loginUserPayload)=>{
        const { email, password, remember } = payload;
    // check payload
    if (!email || !password) return null;

    const userCollection = await dbConnect(collections.USERS);
    const user = await userCollection.findOne({ email });
    if(!user) return null;

    const isMatched = await bcrypt.compare(password, user.password);
    if(isMatched){
        return user;
    }else{
        return null;
    }

}