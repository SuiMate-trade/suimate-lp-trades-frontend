"use client";

import React, { useEffect } from "react";
import TraderHeader from "./components/TraderHeader";
import { usePathname } from "next/navigation";
import ComingSoon from "./components/ComingSoon";
import TradersStats from "./components/TraderStats";
import TradersPoolsSupplied from "./components/TradersPoolsSupplied";
import PastTrades from "./components/PastTrades";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { fetchPastTrades } from "./utils/fetchPastTrades";
import { fetchTradersStats } from "./utils/fetchTradersStats";
import { fetchPoolsSupplied } from "./utils/fetchPoolsSupplied";
import fetchUserData from "../HomePage/utils/fetchUserData";

const IndividualTradersModule = () => {
  const pathname = usePathname();
  const address = pathname.split("/").pop() || "";

  const account = useCurrentAccount();

  useEffect(() => {
    if (address) {
      fetchPastTrades(address);
      fetchTradersStats(address);
      fetchPoolsSupplied(address);
    }
  }, [address]);

  useEffect(() => {
    if (account?.address) fetchUserData(account?.address);
  }, [account?.address]);

  return (
    <div className="w-full flex flex-col items-center justify-start h-[calc(100vh-116px)]">
      <TraderHeader address={address} />
      <div className="w-full flex items-stretch justify-center h-full">
        <ComingSoon />
        <div className="w-full h-full border-x-[1px] border-black-400 flex flex-col items-center justify-start">
          <TradersStats />
          <TradersPoolsSupplied />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start">
          <PastTrades />
        </div>
      </div>
    </div>
  );
};

export default IndividualTradersModule;
