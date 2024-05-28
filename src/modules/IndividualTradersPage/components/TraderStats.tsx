"use client";

import React from "react";

import useTradersStats from "@/stores/useTradersStats";
import numberWithCommas from "@/utils/numberWithComma";
import usePoolsSuppliedStore from "@/stores/usePoolsSuppliedStore";
import { DateTime } from "luxon";
// import { isBignumberPositive, toDecimalString } from "@/utils/parseBignum";

const TradersStats = () => {
  const { stats } = useTradersStats();
  const { poolsSupplied } = usePoolsSuppliedStore();

  return (
    <div className="w-full flex flex-col items-center justify-start gap-3 pt-3">
      <div className="w-full flex items-center justify-between border-b-[1px] border-black-400 px-3 pb-1">
        <div className="flex flex-col items-start justify-center">
          <p className="text-base text-black-800">Liquidity Supplied</p>
          <p className="text-3xl font-semibold text-black-1000">
            ${numberWithCommas(stats.totalLiquidityProvided.toFixed(2))}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-base text-black-800">Fee Rewards Earned</p>
          <p className={`text-3xl font-semibold text-green-300`}>
            ${numberWithCommas(stats.liquidityFeesCollected.toFixed(2))}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-3 px-3 border-b-[1px] border-black-400 pb-3">
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Total Pools Supplied</p>
          <p className="text-sm text-black-900">{poolsSupplied.length}</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-black-700">Last Txn Made At</p>
          <p className="text-sm text-black-900">
            {DateTime.fromMillis(
              stats.lastLiquidityProvidedTimestampMs
            ).toFormat("hh:mm a, dd LLL yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradersStats;
