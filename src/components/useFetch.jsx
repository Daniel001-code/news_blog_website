import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, SetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resources");
        }
        return res.json();
      })
      .then((data) => {
        SetData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          //   console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
}
