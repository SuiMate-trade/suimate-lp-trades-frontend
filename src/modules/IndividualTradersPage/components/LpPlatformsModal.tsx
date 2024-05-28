"use client";

import React from "react";

import CustomModal from "@/components/CustomModal";
import Image from "next/image";

interface IPropType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const LpPlatformsModal = (props: IPropType) => {
  const { isOpen, setIsOpen } = props;

  return (
    <CustomModal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <div className="flex w-full p-4 bg-black-100 border-[1px] border-black-400 rounded-lg flex-col items-start justify-center gap-2">
        <p className="text-base font-bold text-black-900">
          Protocols on Sui with Liquidity Pools
        </p>
        <div
          className="mt-2 w-full flex items-center justify-start gap-2 bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-2 px-2 rounded-md cursor-pointer"
          onClick={() => {
            window.open(
              "https://app.cetus.zone/pool/list/?chain=sui",
              "_blank"
            );
          }}
        >
          <Image
            src="/assets/images/platforms/cetus.webp"
            alt="Cetus"
            width={30}
            height={30}
            unoptimized
            className="rounded-full"
          />
          <p className="text-base text-black-1000">Cetus</p>
          <Image
            src="/assets/images/external.svg"
            alt="external"
            width={20}
            height={20}
            className="ml-auto"
          />
        </div>
        <div
          className="mt-2 w-full flex items-center justify-start gap-2 bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-2 px-2 rounded-md cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.app.kriya.finance/spot/liquidity",
              "_blank"
            );
          }}
        >
          <Image
            src="/assets/images/platforms/kriya.webp"
            alt="Cetus"
            width={30}
            height={30}
            unoptimized
            className="rounded-full"
          />
          <p className="text-base text-black-1000">KriyaDEX</p>
          <Image
            src="/assets/images/external.svg"
            alt="external"
            width={20}
            height={20}
            className="ml-auto"
          />
        </div>
        <div
          className="mt-2 w-full flex items-center justify-start gap-2 bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-2 px-2 rounded-md cursor-pointer"
          onClick={() => {
            window.open(
              "https://app.turbos.finance/#/pools?tab=pool",
              "_blank"
            );
          }}
        >
          <Image
            src="/assets/images/platforms/turbos.webp"
            alt="Cetus"
            width={30}
            height={30}
            unoptimized
            className="rounded-full"
          />
          <p className="text-base text-black-1000">Turbos Finance</p>
          <Image
            src="/assets/images/external.svg"
            alt="external"
            width={20}
            height={20}
            className="ml-auto"
          />
        </div>
        <div
          className="mt-2 w-full flex items-center justify-start gap-2 bg-black-200 border-[1px] border-transparent hover:border-black-500 transition-all duration-200 py-2 px-2 rounded-md cursor-pointer"
          onClick={() => {
            window.open("https://aftermath.finance/pools", "_blank");
          }}
        >
          <Image
            src="/assets/images/platforms/aftermath.webp"
            alt="Cetus"
            width={30}
            height={30}
            unoptimized
            className="rounded-full"
          />
          <p className="text-base text-black-1000">Aftermath Finance</p>
          <Image
            src="/assets/images/external.svg"
            alt="external"
            width={20}
            height={20}
            className="ml-auto"
          />
        </div>
      </div>
    </CustomModal>
  );
};

export default LpPlatformsModal;
