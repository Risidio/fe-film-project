import { Schema, model, models, Document, Types } from 'mongoose';
import { FileData } from "@/types/types";

interface IFileAsset extends FileData, Document {
    userAuthId: string;
    updatedAt: Date;
}

const fileAssetSchema = new Schema<IFileAsset>({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: Date, required: true, default: () => new Date() },
    userAuthId: { type: String, ref: 'User'},
    updatedAt: { type: Date, default: () => new Date() },
});

const FileAsset = models.FileAsset || model<IFileAsset>('FileAsset', fileAssetSchema);

export default FileAsset;