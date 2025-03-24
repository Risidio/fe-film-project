import { BlockchainConfigService } from "@/app/api/services/blockchainConfigService";
import { FilmRightsService } from "@/app/api/services/filmRightService";
import { NextResponse, NextRequest } from "next/server";

const blockchainConfig = new BlockchainConfigService();
const filmRightsService = new FilmRightsService(blockchainConfig);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { tokenId } = body;
        if (!tokenId) {
            return NextResponse.json({ error: "tokenId is required" }, { status: 400 });
        }
        const result = await filmRightsService.reactivateRights(tokenId);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        console.error("Error in reactivateRights:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
