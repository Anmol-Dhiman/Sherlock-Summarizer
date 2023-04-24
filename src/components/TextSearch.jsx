import React, { useEffect, useState } from "react";
import { useGetTextSummaryMutation } from "../service/article";
import { copy, linkIcon, loader, tick, textIcon, send } from "../assets";
import Summary from "./Summary";

const TextSearch = () => {
  const [getTextSummary] = useGetTextSummaryMutation();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState({
    summary: "",
  });
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsFetching(true);

    const { data } = await getTextSummary({
      data: input,
    });

    setIsFetching(false);
    if (data?.summary) {
      const newData = { ...summary, summary: data.summary };
      setSummary(newData);
    } else {
      setError(data.error);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={textIcon}
            alt="text-icon"
            className="absolute left-0 my-2 ml-3 w-5  "
          />

          <input
            type="text"
            placeholder="Enter the article"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            className="url_input" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button type="submit" className="submit_btn">
            <img
              src={send}
              alt="link-icon"
              className="absolute left-0 my-2 ml-2 w-5"
            />
          </button>
        </form>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error}
            </span>
          </p>
        ) : (
          summary.summary && <Summary summary={summary.summary} />
        )}
      </div>
    </section>
  );
};

export default TextSearch;
