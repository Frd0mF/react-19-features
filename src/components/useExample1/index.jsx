import { useState } from "react";
import { Posts } from "./Posts";
import PostsUseEffect from "./PostsUseEffect";

export const UseExample1 = () => {
  const [useFetch, setUseFetch] = useState(true);

  const toggleFetchUse = () => {
    setUseFetch(!useFetch);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleFetchUse}
      >
        {useFetch ? "Switch to Use" : "Switch to Fetch"}
      </button>
      <div className="mt-4">
        {useFetch ? (
          <>
            <p className="text-lg text-blue-600">Using Fetch API</p>
            <PostsUseEffect />
          </>
        ) : (
          <>
            <p className="text-lg text-green-600">Using Use Hook</p>
            <Posts />
          </>
        )}
      </div>
    </div>
  );
};
