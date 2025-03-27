
import connectDb from "@/lib/mongodb";
import User from "@/models/User";


const mockAuthID = '1234'; // get this from the auth service


export async function GET() {
    await connectDb();
    try {
        const user = await User.find({userAuthId: mockAuthID});
        return Response.json({ user }, { status: 200 });
    }
    catch (error) {
        if (error instanceof Error) {
            return Response.json({ error: error.message }, { status: 500 });
        }
    }
}

export async function POST(request: Request) {
    await connectDb();
    const existing = await User.findOne({ userAuthId: mockAuthID });
    if (existing) {
        return Response.json({ error: "User already exists" }, { status: 400 });
    }
    const { userName, email } = await request.json();
    const newUser = await User.create({ userName, email, userAuthId: mockAuthID });
    return Response.json({ newUser }, { status: 201 });
}

