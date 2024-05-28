import { type CoinMetadata } from "@mysten/sui.js/dist/cjs/client";

export type PastTradesType = {
  event: "addLiquidity" | "removeLiquidity" | "collectLiquidityFee";
  eventSeq: string;
  liquidityAmount: string;
  platform: string;
  pool: string;
  poolType: string;
  sender: string;
  timestampMs: number;
  tokenAAmount: string;
  tokenAType: string;
  tokenBAmount: string;
  tokenBType: string;
  txnDigest: string;
  tokenAMetadata: CoinMetadata;
  tokenBMetadata: CoinMetadata;
};
