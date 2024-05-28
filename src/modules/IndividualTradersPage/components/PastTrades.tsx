import React from "react";
import TradeCard from "./TradeCard";

import usePastTradesStore from "@/stores/usePastTradesStore";
import Spinner from "@/components/Spinner";

const PastTrades = () => {
  const { trades, loaded } = usePastTradesStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-[100%] overflow-hidden">
      <p className="text-base text-black-800">Past Liquidity Trades</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-black-700 w-full flex-[0.6] text-left">
          Txn Type
        </p>
        <p className="text-sm text-black-700 w-full flex-1 text-center">Pool</p>
        <p className="text-sm text-black-700 w-full flex-1 text-center">
          Coins
        </p>
        <p className="text-sm text-black-700 w-full flex-[0.5] text-end">
          Platform
        </p>
      </div>
      {loaded ? (
        <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
          {trades.map((trade) => (
            <TradeCard trade={trade} key={trade.txnDigest} />
          ))}
        </div>
      ) : (
        <div className="w-full h-28 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default PastTrades;
