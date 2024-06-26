"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import ConnectWallet from "../ConnectWallet";

const Header = () => {
  return (
    <div className="w-full flex justify-start items-center py-3 px-5 border-b-[1px] border-black-400 gap-5">
      <div className="flex justify-start items-center gap-2">
        <Link href="/">
          <div className="flex justify-start items-center gap-2">
            <Image
              src="/assets/images/logo-white.png"
              alt="SuiMate"
              width={40}
              height={40}
              unoptimized={true}
            />
            <div className="flex flex-col items-start justify-center">
              <p className="text-3xl font-semibold text-black-1000 leading-7">
                SuiMate
              </p>
              <p className="text-sm font-normal text-blue-300">
                Copy Trading on Sui
              </p>
            </div>
          </div>
        </Link>
        <a href="https://perps.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium">Perps</p>
        </a>
        <a href="https://spot.suimate.trade" target="_blank" className="ml-10">
          <p className="text-black-900 text-base font-medium">Spot</p>
        </a>
        <p className="text-blue-200 text-base font-medium ml-10">
          Liquidity Supply
        </p>
      </div>
      <div className="flex justify-end items-center relative ml-auto">
        <Link href="/">
          <p className="text-black-900 text-base font-medium w-32 text-center cursor-pointer">
            Home
          </p>
        </Link>

        <div
          className={`absolute bottom-[-25px] w-32 bg-blue-200 h-2 rounded-t transition-all duration-300 left-0`}
        />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Header;
