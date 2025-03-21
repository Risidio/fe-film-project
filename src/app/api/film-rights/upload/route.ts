import { NextResponse, NextRequest } from "next/server";
import { BlockchainConfigService } from "../../services/blockchainConfigService";
import { FilmRightsService } from "../../services/filmRightService";

const blockchainConfig = new BlockchainConfigService();
const filmRightsService = new FilmRightsService(blockchainConfig);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { assetURI, assetMetadata, validityPeriod, fee } = body;
        if (!assetURI || !assetMetadata || !validityPeriod || !fee) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        const result = await filmRightsService.uploadAsset(assetURI, assetMetadata, validityPeriod, fee);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        console.error("Error in uploadAsset:", error);
        return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
    }
}
