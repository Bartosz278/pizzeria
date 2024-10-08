import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="m-2 w-24 rounded-full px-4 py-2 text-center font-semibold transition-all duration-300 placeholder:text-stone-400 focus:w-36 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
