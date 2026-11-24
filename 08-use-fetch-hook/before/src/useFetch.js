import { useEffect, useState } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    setError(null);
    setData(null);

    const controller = new AbortController();

    async function loadData() {
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Status code: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setStatus("fetched");
      } catch (error) {
        if (error.name === "AbortError") {
          return; // 这是主动取消，不当作请求失败
        }
        setError(error);
        setStatus("error");
        setData(null);
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, error, status };
}
