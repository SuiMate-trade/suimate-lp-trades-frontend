import Spinner from "@/components/Spinner";
import usePoolsSuppliedStore from "@/stores/usePoolsSuppliedStore";
import React from "react";
import PoolSuppliedCard from "./PoolSuppliedCard";

// import useTradersMarketsDataStore from "@/stores/useTradersMarketDataStore";

// import MarketsTradedCard from "./MarketsTradedCard";

const TradersPoolsSupplied = () => {
  const { poolsSupplied, loaded } = usePoolsSuppliedStore();

  return (
    <div className="w-full flex flex-col items-start justify-start p-3 gap-3 max-h-full overflow-hidden">
      <p className="text-base text-black-800">Current Pools Supplied</p>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm w-full flex-[1.2] text-left text-black-700">
          Pool
        </p>
        <p className="text-sm w-full flex-1 text-center text-black-700">
          Supply
        </p>
        <p className="text-sm w-full flex-1 text-end text-black-700">
          Rewards Claimed
        </p>
      </div>
      {loaded ? (
        <div className="w-full flex flex-col items-center justify-start gap-2 max-h-full overflow-y-auto">
          {poolsSupplied.map((pool) => (
            <PoolSuppliedCard key={pool.poolId} pool={pool} />
          ))}
        </div>
      ) : (
        <div className="w-full h-20 flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default TradersPoolsSupplied;
