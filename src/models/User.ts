import {Document, Schema, model, models}  from 'mongoose';

export interface IUser  extends Document {
    userAuthId: string;
    userName: string;
    email: string;
    profilePicture?: string;
    createdAt?: Date;
    updatedAt?: Date;
    
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
    userAuthId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    createdAt: { type: Date, default: () => Date.now(), immutable: true },
    updatedAt: { type: Date, default: () => Date.now() },
});

const User = models.User || model<IUser>('User', UserSchema);

export default User;