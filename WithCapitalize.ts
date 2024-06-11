interface IUserInfo{
    name:string;
    address:string;
    contactNo:string;
    pincode?:string;
    email?:string;
}

// === Required to Make new type helper
/**
 * {
 *   userName:string;
 *   userAddress:string;
 *   userContactNo:string;
 *   userPincode?:string;
 *   userEmail?:string;
 * }
 * 
 */

type MakeCapitalize<T> = {[K in keyof T as K extends string ? `user${Capitalize<K>}` : never]: T[K]};


type IUserInfoWithCapitalize = MakeCapitalize<IUserInfo>;