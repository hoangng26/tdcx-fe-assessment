import StorageService from "@/services/StorageService";
import { useCallback, useEffect, useState } from "react";

function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(() => {
    const savedCount = StorageService.getItem("counter");
    return savedCount ? parseInt(savedCount, 10) : initialValue;
  });

  useEffect(() => {
    StorageService.setItem("counter", count.toString());
  }, [count]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
