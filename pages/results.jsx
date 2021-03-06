import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";

const Results = () => {
  /* const [country, setCountry] = useState(""); */

  /* const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = `https://restcountries.eu/rest/v2/name/${country}`;

    try {
      const router = useRouter();
      const response = await fetch(endpoint);
      const getSearchedCountry = await response.json();
      console.log(getSearchedCountry);
      if (typeof window !== "undefined") {
        router.push("/new/url");
      }
    } catch (error) {
      console.error(error.message);
    }
  }; */

  const Section = styled.section`
    display: grid;
    height: 80vh;
    place-content: center;

    label {
      font-size: 2rem;
      font-weight: 700;
    }
  `;

  return (
    <Layout>
      <Head>
        <meta name="description" content="Home - Motherlands" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Results - Motherlands</title>
      </Head>
      <Section>
        {/* <label htmlFor="country">Search a country...</label>
        <form onSubmit={handleSubmit} action="">
          <input
            id="country"
            type="text"
            placeholder="Australia"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </form> */}
      </Section>
    </Layout>
  );
};

export default Results;
