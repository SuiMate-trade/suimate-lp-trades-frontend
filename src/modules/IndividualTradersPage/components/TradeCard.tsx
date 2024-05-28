import React from "react";

import Image from "next/image";

// import { SUI_DECIMALS } from '@/constants';
// import MarketsData from '@/constants/markets';
import type { PastTradesType } from "@/types/dataTypes/pastTrades";
import { toDecimalString } from "@/utils/parseBignum";
// import { capitalizeFirstLetter } from '@/utils/capitaliseFirstLetter';
// import { isBignumberPositive, toDecimalString } from '@/utils/parseBignum';

interface IPropType {
  trade: PastTradesType;
}

const txnTypeToTextMap = {
  addLiquidity: "Liquidity Added",
  removeLiquidity: "Liquidity Removed",
  collectLiquidityFee: "Fees Collected",
};

const txnTypeToColorMap = {
  addLiquidity: "text-blue-300",
  removeLiquidity: "text-red-300",
  collectLiquidityFee: "text-green-200",
};

const TradeCard = (props: IPropType) => {
  const { trade } = props;

  return (
    <div
      className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md cursor-pointer"
      onClick={() => {
        window.open(
          `https://suivision.xyz/txblock/${trade.txnDigest}`,
          "_blank"
        );
      }}
    >
      <div className="flex flex-col justify-center items-start w-full flex-[0.6]">
        <p className={`text-sm ${txnTypeToColorMap[trade.event]}`}>
          {txnTypeToTextMap[trade.event]}
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 w-full flex-1">
        <p className="text-sm text-black-900">
          {trade.tokenAMetadata.symbol}-{trade.tokenBMetadata.symbol}
        </p>
      </div>
      <div className="flex justify-center flex-col items-center gap-1 w-full flex-1">
        <p className="text-xs text-black-900">
          {toDecimalString(trade.tokenAAmount, trade.tokenAMetadata.decimals)}{" "}
          {trade.tokenAMetadata.symbol}
        </p>
        <p className="text-xs text-black-900">
          {toDecimalString(trade.tokenBAmount, trade.tokenBMetadata.decimals)}{" "}
          {trade.tokenBMetadata.symbol}
        </p>
      </div>
      <div className="w-full flex justify-end items-center flex-[0.5]">
        <Image
          src={`/assets/images/platforms/${trade.platform}.webp`}
          alt={trade.platform}
          width={28}
          height={28}
          unoptimized
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default TradeCard;
