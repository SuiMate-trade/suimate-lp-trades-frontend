import React from "react";

import type { Metadata } from "next";

import IndividualTradersModule from "@/modules/IndividualTradersPage";

export const metadata: Metadata = {
  title: "SuiMate - Liquidity Provider",
};

export default function Index() {
  return <IndividualTradersModule />;
}
