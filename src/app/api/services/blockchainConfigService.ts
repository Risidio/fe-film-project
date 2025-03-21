import { ethers } from 'ethers';
import dotenv from "dotenv"

dotenv.config()

export class BlockchainConfigService {
    public provider: ethers.JsonRpcProvider;
    public wallet: ethers.Wallet;

    constructor() {
        const rpcUrl = process.env.RPC_URL
        const privateKey = process.env.PRIVATE_KEY       
        this.provider = new ethers.JsonRpcProvider(rpcUrl);
        this.wallet = new ethers.Wallet(privateKey as string, this.provider);
    }
}
