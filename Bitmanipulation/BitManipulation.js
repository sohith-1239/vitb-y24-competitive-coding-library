class BitManipulation {
    static getBit(n, k) {
        return ((BigInt(n) >> BigInt(k)) & 1n);
    }

    static setBit(n, k) {
        return ((1n << BigInt(k)) | BigInt(n));
    }

    static clearBit(n, k) {
        return (BigInt(n) & ~(1n << BigInt(k)));
    }

    static toggleBit(n, k) {
        return (BigInt(n) ^ (1n << BigInt(k)));
    }

    static isPowerOfTwo(n) {
        const bigN = BigInt(n);
        return (bigN > 0n && (bigN & (bigN - 1n)) === 0n);
    }

    countSetBits(n) {
        let bigN = BigInt(n);
        let count = 0n;
        while (bigN > 0n) {
            bigN = bigN & (bigN - 1n);
            count++;
        }
        return count; // Returns a BigInt
    }
}
