export type TopTradersType = {
  totalLiquidityProvided: number;
  totalSwapsMade: number;
  swapData: {
    cetus: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
    kriya: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
    turbos: {
      totalSwapsMade: number;
      totalVolumeSwapped: number;
    };
  };
  lastSwapTimestampMs: number;
  lastLiquidityProvidedTimestampMs: number;
  liquidityFeesCollected: number;
  totalVolumeSwapped: number;
  lastTradedTimestampMs: number;
  totalStaked: number;
  address: string;
  poolsSupplied: {
    tokenAMetadata: {
      decimals: number;
      name: string;
      symbol: string;
      description: string;
      iconUrl: string | null;
      id: string;
    };
    tokenBMetadata: {
      decimals: number;
      name: string;
      symbol: string;
      description: string;
      iconUrl: string | null;
      id: string;
    };
    platform: string;
    tokenAAmount: number;
    tokenAAmountEarned: number;
    tokenAType: string;
    tokenBAmount: number;
    tokenBAmountEarned: number;
    tokenBType: string;
    poolId: string;
  }[];
};
