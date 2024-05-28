import { type CoinMetadata } from "@mysten/sui.js/dist/cjs/client";

export type PoolsSuppliedType = {
  tokenAMetadata: CoinMetadata;
  tokenBMetadata: CoinMetadata;
  platform: string;
  tokenAAmount: number;
  tokenAAmountEarned: number;
  tokenAType: string;
  tokenBAmount: number;
  tokenBAmountEarned: number;
  tokenBType: string;
  poolId: string;
};
