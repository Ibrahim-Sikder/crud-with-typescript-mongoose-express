export type userName = {
    firstName: string,
    lastName: string,
}
export type userHobbies = {
    competetiveProgramming: string,
    contributingTechCommunities: string,
}
export type userAddress = {
    street: string,
    city: string,
    country: string,
}
export type userOrders = {
    productName: string,
    price: number,
    quantity: number,
}

export type Student = {
    userId: number,
    userName: string,
    password: string,
    fullName: userName,
    age: number,
    email: string,
    isActive: boolean,
    hobbies: userHobbies,
    address: userAddress,
    orders: userOrders,

};
