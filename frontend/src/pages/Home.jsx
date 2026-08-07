import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "./products";

function Home() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("home-page");

    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  return (
    <>
      {query ? (
        <Products />
      ) : (
        <>
          <Hero />
          <Categories />
        </>
      )}
    </>
  );
}

export default Home;