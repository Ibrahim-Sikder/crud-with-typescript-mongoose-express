import { Request, Response } from "express";



const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;

        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: user
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