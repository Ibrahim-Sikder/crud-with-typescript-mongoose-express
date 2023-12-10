import { Users } from "./user.interface";
import { UsersModel } from "./user.model";




const createUserIntoDB = async (userData: Users) => {

    const user = new UsersModel(userData);
    const result = await user.save();

}

export const userServices = {
    createUserIntoDB,
}