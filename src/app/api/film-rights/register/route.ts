import { NextResponse, NextRequest } from "next/server";
import { BlockchainConfigService } from "../../services/blockchainConfigService";
import { FilmRightsService } from "../../services/filmRightService";

const blockchainConfig = new BlockchainConfigService();
const filmRightsService = new FilmRightsService(blockchainConfig);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { creator } = body;
        if (!creator) {
            return NextResponse.json({ error: "Creator address is required" }, { status: 400 });
        }
        const result = await filmRightsService.registerCreator(creator);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        console.error("Error in registerCreator:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
