import  connectDb  from '@/lib/mongodb';
import FileAsset from '@/models/FileAsset';

export async function GET() { 
    await connectDb();
    const userAuthId = '1234'; // get this from the auth service
    try {
        const fileAssets = await FileAsset.find({ userAuthId: userAuthId });
        return Response.json({ fileAssets }, { status: 200 });
    }
    catch (error) {
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        }
    }
}
export async function POST(req: Request) { 
    await connectDb();
    const userAuthId = '1234'; // get this from the auth service
    try {
        const fileData = await req.json();
        const fileAsset = await FileAsset.create({ ...fileData, userAuthId });
        return Response.json({fileAsset}, { status: 201 });
    }
    catch (error) {
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        }
    }
}