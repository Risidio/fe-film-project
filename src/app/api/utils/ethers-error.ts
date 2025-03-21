import { ethers } from 'ethers';

/**
 * Extracts the revert reason from an Ethers.js error object.
 * @param error The error object caught in a try/catch block.
 * @returns The revert reason string if available, otherwise "Unknown error".
 */
export function getRevertReason(error: any): string {
    // Check if error.revert.args contains a revert reason
    if (error?.revert && Array.isArray(error.revert.args) && error.revert.args.length > 0) {
        return error.revert.args[0];
    }

    // Attempt to extract the error message from the error string using regex
    if (typeof error.message === 'string') {
        const regex = /execution reverted: \"(.*)\"/;
        const matches = error.message.match(regex);
        if (matches && matches[1]) {
            return matches[1];
        }
    }

    return "Unknown error";
}
