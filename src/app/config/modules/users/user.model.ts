import { Schema, model } from "mongoose";
import { Users, userAddress, userHobbies, userName, userOrders } from "./user.interface";

const userNameScheam = new Schema<userName>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})
const userHobbiesSchema = new Schema<userHobbies>({
    competetiveProgramming: {
        type: String,
        required: true,
    },
    contributingTechCommunities: {
        type: String,
        required: true,
    },
})
const userAddressSchema = new Schema<userAddress>({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})

const userOrdersSchema = new Schema<userOrders>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
})


const userSchema = new Schema<Users>({
    userId: {
        type: Number,
        unique: true,
        required: true,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    fullName: userNameScheam,
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    hobbies: userHobbiesSchema,
    address: userAddressSchema,
    orders: userOrdersSchema,
})

export const UsersModel = model<Users>('Users', userSchema)