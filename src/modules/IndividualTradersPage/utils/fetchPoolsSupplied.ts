import ApiService from "@/services/apiService";
import { poolsSuppliedStore } from "@/stores/usePoolsSuppliedStore";
import { logger } from "@/utils/Logger";

export const fetchPoolsSupplied = async (address: string) => {
  try {
    poolsSuppliedStore.setState({
      loaded: false,
    });

    const response = await ApiService.getPoolsSupplied(address);

    poolsSuppliedStore.setState({
      poolsSupplied: response.data,
      loaded: true,
    });
  } catch (error) {
    logger.error(error);
  }
};
