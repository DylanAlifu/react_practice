import React, { useEffect, useState } from "react";

const SearchUI = () => {
  const [result, setResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  const fetchData = async () => {
    if (searchText.trim() === "") {
      setResult([]);
      return;
    }

    if (cache[searchText]) {
      setResult(cache[searchText]);
    } else {
      const response = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const data = await response.json();
      console.log(data);
      cache[searchText] = data[1];
      setResult(data[1]);
    }
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClear = () => {
    setSearchText("");
    setResult([]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 py-10 px-5">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Search UI</h1>

      <div className="flex flex-row w-full max-w-md mb-6 shadow-sm relative">
        <input
          type="text"
          placeholder="Type something..."
          className="flex-grow p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-none"
          onChange={handleChange}
          value={searchText}
        />
        {searchText.length > 0 && (
          <button
            className="absolute right-[110px] top-[12px] text-gray-300 hover:text-gray-700"
            onClick={handleClear}
          >
            X
          </button>
        )}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600">
          Search
        </button>
      </div>

      {result.length > 0 && (
        <ul className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200">
          {result.map((item, index) => (
            <li key={index} className="p-3 hover:bg-gray-100 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
