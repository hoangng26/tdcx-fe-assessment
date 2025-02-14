import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, timeout = 300) {
  const [originalValue, setOriginalValue] = useState<T>(value);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(originalValue);
    }, timeout);

    return () => {
      clearTimeout(handler);
    };
  }, [originalValue, timeout]);

  return [debouncedValue, setOriginalValue] as const;
}
