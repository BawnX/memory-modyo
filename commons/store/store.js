import { useState, useEffect } from "react";

const useStore = (store, callback) => {
  const result = store(callback);
  const [data, setData] = useState(result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
