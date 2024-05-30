"use client";

import React from "react";

import { useCurrentAccount } from "@mysten/dapp-kit";
import Avatar from "boring-avatars";
import Image from "next/image";
import Link from "next/link";
import { DateTime } from "luxon";

import PrimaryButton from "@/components/PrimaryButton";
import useFavoriteTradersStore from "@/stores/useFavoriteTradersStore";
import getEllipsisTxt from "@/utils/getEllipsisText";
import CoinsList from "@/constants/coinsList";
import { TopTradersType } from "@/types/dataTypes/topTraders";

import { addToFavorite, removeFromFavorite } from "../utils/modifyFavorites";
import numberWithCommas from "@/utils/numberWithComma";
import { notification } from "antd";
import { toDecimalString } from "@/utils/parseBignum";

interface IPropType {
  trader: TopTradersType;
}

const TraderCard = (props: IPropType) => {
  const { trader } = props;
  const { favoriteTraders } = useFavoriteTradersStore();
  const account = useCurrentAccount();

  return (
    <div className="w-full p-4 rounded-md bg-black-200 flex flex-col items-center justify-center gap-3 border-2 border-transparent border-black-300 hover:border-black-500 transition-all duration-300">
      <div className="w-full flex justify-start items-center gap-2">
        <Avatar
          size={40}
          name={trader.address}
          variant="beam"
          colors={["#96ceb4", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <p className="text-black-800 text-sm">
          {getEllipsisTxt(trader.address, 6, 5)}
        </p>
        <div className="w-px h-5 bg-black-500" />
        <Image src="/assets/images/sui.svg" alt="sui" width={20} height={20} />
        <Image
          src={
            favoriteTraders.includes(trader.address)
              ? "/assets/images/star-filled.svg"
              : "/assets/images/star.svg"
          }
          alt="Favourite"
          className="ml-auto cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            if (!account?.address) {
              notification.error({
                message: "Please connect your wallet to perform this action",
              });
              return;
            }

            if (!favoriteTraders.includes(trader.address)) {
              addToFavorite(account?.address, trader.address);
            } else {
              removeFromFavorite(account?.address, trader.address);
            }
          }}
        />
        <Link href={`/traders/${trader.address}`}>
          <Image
            src="/assets/images/chevron.svg"
            alt="Favourite"
            className="cursor-pointer -rotate-90"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* <div className="w-full -mt-8 -mb-5">
          <TraderCardChart />
        </div> */}
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-sm text-black-800">Total Liquidity Supplied</p>
        <p className={`text-3xl font-semibold text-green-300`}>
          ${numberWithCommas(trader.totalLiquidityProvided.toFixed(2))}
        </p>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-sm text-black-700">Total Fees Collected</p>
          <p className="text-base text-black-900">
            ${numberWithCommas(trader.liquidityFeesCollected.toFixed(2))}
          </p>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <p className="text-sm text-black-700">Last Txn At</p>
          <p className="text-base text-black-900">
            {DateTime.fromMillis(
              trader.lastLiquidityProvidedTimestampMs
            ).toFormat("hh:mm a, MM/dd/yyyy")}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <p className="text-sm text-black-700">Most Supplied Pools:</p>
        <div className="flex w-full items-start justify-center gap-5">
          {trader.poolsSupplied.map((pool) => (
            <div
              key={pool.poolId}
              className="flex flex-col items-center justify-center gap-0.5"
            >
              <div className="flex justify-center items-center gap-0.5">
                <Image
                  src={
                    CoinsList.find(
                      (c) => c.symbol === pool.tokenAMetadata?.symbol
                    )?.iconUrl ||
                    pool.tokenAMetadata?.iconUrl ||
                    ""
                  }
                  alt={pool.tokenAMetadata?.symbol}
                  width={28}
                  height={28}
                  unoptimized
                  className="rounded-full"
                />
                <Image
                  src={
                    CoinsList.find(
                      (c) => c.symbol === pool.tokenBMetadata?.symbol
                    )?.iconUrl ||
                    pool.tokenBMetadata?.iconUrl ||
                    ""
                  }
                  alt={pool.tokenBMetadata?.symbol}
                  width={28}
                  height={28}
                  unoptimized
                  className="rounded-full"
                />
              </div>
              <p className="text-xs text-black-800 text-center mt-1 mb-1">
                {pool.tokenAMetadata?.symbol}-{pool.tokenBMetadata?.symbol} Pool{" "}
                <br /> ({pool.platform})
              </p>
              <p className="text-xs text-blue-200 font-semibold text-center">
                {toDecimalString(
                  pool.tokenAAmount,
                  pool.tokenAMetadata?.decimals
                )}{" "}
                {pool.tokenAMetadata?.symbol}
              </p>
              <p className="text-xs text-blue-200 font-semibold text-center">
                {toDecimalString(
                  pool.tokenBAmount,
                  pool.tokenBMetadata?.decimals
                )}{" "}
                {pool.tokenBMetadata?.symbol}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-1">
        <Link href={`/traders/${trader.address}`} className="w-2/3">
          <PrimaryButton>
            <p className="text-sm text-black-900">View All Trades</p>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default TraderCard;
