export interface IUser {
    displayName?: string | null;
    email?: string | null;
    phoneNumber?: number| string | null;
    photoURL?: string | null;
    providerId?: string;
    uid?: string;
    role?: string;
    aid?:number,
    pan?:string,
}
