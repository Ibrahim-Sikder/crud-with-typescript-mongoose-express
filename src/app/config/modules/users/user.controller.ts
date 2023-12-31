import { Request, Response } from "express";
import { userServices } from "./user.services";



const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const result = await userServices.createUserIntoDB(user)
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
        })
    }

}

export const userControllers = {
    createUser,
}