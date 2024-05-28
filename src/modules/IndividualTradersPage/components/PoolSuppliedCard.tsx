import React from "react";

import Image from "next/image";
import { PoolsSuppliedType } from "@/types/dataTypes/poolsSupplied";
import { toDecimalString } from "@/utils/parseBignum";
import { capitalizeFirstLetter } from "@/utils/capitaliseFirstLetter";

// import MarketsData from '@/constants/markets';
// import type { TradersMarketDataType } from '@/types/dataTypes/tradersMarketData';
// import { isBignumberPositive, toDecimalString } from "@/utils/parseBignum";

interface IPropType {
  pool: PoolsSuppliedType;
}

const TraderHoldingsCard = (props: IPropType) => {
  const { pool } = props;

  return (
    <div className="w-full flex items-center justify-between bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-1 px-2 rounded-md">
      <div className="flex justify-start items-center gap-2 flex-[1.2] w-full">
        <Image
          src="https://imagedelivery.net/cBNDGgkrsEA-b_ixIp9SkQ/sui.svg/public"
          alt="Sui"
          height={30}
          width={30}
          unoptimized
        />
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-xs text-black-900">
            {pool.tokenAMetadata.symbol}-{pool.tokenBMetadata.symbol} Pool
          </p>
          <p className="text-xs text-black-700">
            {capitalizeFirstLetter(pool.platform)}
          </p>
        </div>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-center gap-0.5">
        <p className="text-sm text-black-900">
          {toDecimalString(pool.tokenAAmount, pool.tokenAMetadata.decimals)}{" "}
          {pool.tokenAMetadata.symbol}
        </p>
        <p className="text-sm text-black-900">
          {toDecimalString(pool.tokenBAmount, pool.tokenBMetadata.decimals)}{" "}
          {pool.tokenBMetadata.symbol}
        </p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-center items-end gap-0.5">
        <p className="text-xs font-semibold text-green-300">
          {toDecimalString(
            pool.tokenAAmountEarned,
            pool.tokenAMetadata.decimals
          )}{" "}
          {pool.tokenAMetadata.symbol}
        </p>
        <p className="text-xs font-semibold text-green-300">
          {toDecimalString(
            pool.tokenBAmountEarned,
            pool.tokenBMetadata.decimals
          )}{" "}
          {pool.tokenBMetadata.symbol}
        </p>
      </div>
    </div>
  );
};

export default TraderHoldingsCard;
