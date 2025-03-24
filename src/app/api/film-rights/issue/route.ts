import { BlockchainConfigService } from "@/app/api/services/blockchainConfigService";
import { FilmRightsService } from "@/app/api/services/filmRightService";
import { NextResponse, NextRequest } from "next/server";

const blockchainConfig = new BlockchainConfigService();
const filmRightsService = new FilmRightsService(blockchainConfig);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { creator, assetURI, assetMetadata, validityPeriod } = body;
        if (!creator || !assetURI || !assetMetadata || !validityPeriod) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        const result = await filmRightsService.issueRights(creator, assetURI, assetMetadata, validityPeriod);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        console.error("Error in issueRights:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
