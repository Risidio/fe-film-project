import { ethers } from 'ethers';
import dotenv from "dotenv"
import { BlockchainConfigService } from './blockchainConfigService';
import { getRevertReason } from '../utils/ethers-error';

dotenv.config()

export class FilmRightsService {
    private contract: ethers.Contract;

    constructor(private blockchainConfig: BlockchainConfigService) {
        const contractAddress = process.env.FILM_NFT_CONTRACT_ADDRESS
        if (!contractAddress) {
            throw new Error('FILM_RIGHTS_CONTRACT_ADDRESS is not defined');
        }

        const abi = [
            // 🎬 Creator Registration
            'function registerCreator(address creator) external',
            'function revokeCreator(address creator) external',
            'function registerSelf() external payable',

            // 🎥 Asset Management
            'function uploadAsset(string calldata assetURI, string calldata assetMetadata, uint48 validityPeriod) external payable returns (uint256)',
            'function issueRights(address creator, string calldata assetURI, string calldata assetMetadata, uint48 validityPeriod) external returns (uint256)',

            // 🔄 License Management
            'function renewRights(uint256 tokenId, uint48 additionalTime) external payable',
            'function deactivateRights(uint256 tokenId) external',
            'function reactivateRights(uint256 tokenId) external',

            // 📊 View Functions
            'function isRightsValid(uint256 tokenId) external view returns (bool)',
            'function getAssetCreator(string calldata assetURI) external view returns (address)',
            'function getCreatorAssets(address creator) external view returns (uint256[])',
            'function getAssetTokenId(string calldata assetURI) external view returns (uint256)',

            // 💰 Fee Management
            'function setbaseRightsFee(uint256 newFee) external',
            'function toggleFees(bool enabled) external',
            'function withdrawFees() external',

            // 🎭 Rights Transfers
            'function transferFrom(address from, address to, uint256 tokenId) external',
        ];

        this.contract = new ethers.Contract(contractAddress, abi, blockchainConfig.wallet);
    }

    // 🎬 Creator Registration
    async registerCreator(creator: string) {
        try {
            const tx = await this.contract.registerCreator(creator);
            await tx.wait();
            return { message: 'Creator registered successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to register creator: ${reason}`);
        }
    }

    async registerSelf(fee: string) {
        try {
            const tx = await this.contract.registerSelf({ value: ethers.parseEther(fee) });
            await tx.wait();
            return { message: 'Creator registered successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to self-register creator: ${reason}`);
        }
    }

    async revokeCreator(creator: string) {
        try {
            const tx = await this.contract.revokeCreator(creator);
            await tx.wait();
            return { message: 'Creator revoked successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to revoke creator: ${reason}`);
        }
    }

    // 🎥 Asset Management
    async uploadAsset(assetURI: string, assetMetadata: string, validityPeriod: number, fee: string) {
        try {
            const tx = await this.contract.uploadAsset(assetURI, assetMetadata, validityPeriod, { value: ethers.parseEther(fee) });
            const receipt = await tx.wait();
            return { message: 'Asset uploaded successfully', receipt };
        } catch (error: any) {
            const reason = getRevertReason(error)
            throw new Error(reason);
        }
    }

    async issueRights(creator: string, assetURI: string, assetMetadata: string, validityPeriod: number) {
        try {
            const tx = await this.contract.issueRights(creator, assetURI, assetMetadata, validityPeriod);
            const receipt = await tx.wait();
            return { message: 'Rights issued successfully', receipt };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to issue rights: ${reason}`);
        }
    }

    // 🔄 License Management
    async renewRights(tokenId: number, additionalTime: number, fee: string) {
        try {
            const tx = await this.contract.renewRights(tokenId, additionalTime, { value: ethers.parseEther(fee) });
            await tx.wait();
            return { message: 'Rights renewed successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to renew rights: ${reason}`);
        }
    }

    async deactivateRights(tokenId: number) {
        try {
            const tx = await this.contract.deactivateRights(tokenId);
            await tx.wait();
            return { message: 'Rights deactivated successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to deactivate rights: ${reason}`);
        }
    }

    async reactivateRights(tokenId: number) {
        try {
            const tx = await this.contract.reactivateRights(tokenId);
            await tx.wait();
            return { message: 'Rights reactivated successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to reactivate rights: ${reason}`);
        }
    }

    // 📊 View Functions
    async isRightsValid(tokenId: number) {
        try {
            return await this.contract.isRightsValid(tokenId);
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to check rights validity: ${reason}`);
        }
    }

    async getAssetCreator(assetURI: string) {
        try {
            return await this.contract.getAssetCreator(assetURI);
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to get asset creator: ${reason}`);
        }
    }

    async getCreatorAssets(creator: string) {
        try {
            const assets: BigInt[] = await this.contract.getCreatorAssets(creator);
            console.log(assets)
            return { assets: assets.map((asset) => asset.toString())}
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to get creator assets: ${reason}`);
        }
    }

    async getAssetTokenId(assetURI: string) {
        try {
            const tokenId: BigInt = await this.contract.getAssetTokenId(assetURI);
            return { tokenId: tokenId.toString() }
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to get asset token ID: ${reason}`);
        }
    }

    // 💰 Fee Management
    async setBaseRightsFee(newFee: string) {
        try {
            const tx = await this.contract.setbaseRightsFee(ethers.parseEther(newFee));
            await tx.wait();
            return { message: 'Base rights fee updated successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to set base rights fee: ${reason}`);
        }
    }

    async toggleFees(enabled: boolean) {
        try {
            const tx = await this.contract.toggleFees(enabled);
            await tx.wait();
            return { message: 'Fees toggled successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to toggle fees: ${reason}`);
        }
    }

    async withdrawFees() {
        try {
            const tx = await this.contract.withdrawFees();
            await tx.wait();
            return { message: 'Fees withdrawn successfully' };
        } catch (error: any) {
            const reason = getRevertReason(error)
            throw new Error(reason);
        }
    }

    // 🎭 Rights Transfers
    async transferRights(tokenId: number, to: string) {
        try {
            const tx = await this.contract.transferFrom(this.blockchainConfig.wallet.address, to, tokenId);
            await tx.wait();
            return { message: 'Rights transferred successfully' };
        } catch (error) {
            const reason = getRevertReason(error)
            throw new Error(`Failed to transfer rights: ${reason}`);
        }
    }
}
