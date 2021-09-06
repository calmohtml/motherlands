import { useState } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const Home = () => {
  const [country, setCountry] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = `https://restcountries.eu/rest/v2/name/${country}`;

    try {
      const response = await fetch(endpoint);
      const getSearchedCountry = await response.json();
      console.log(getSearchedCountry);
    } catch (error) {
      console.error(error.message);
    }
  };

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
      <Section>
        <label htmlFor="">Search a country...</label>
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            placeholder="Australia"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </form>
      </Section>
    </Layout>
  );
};

export default Home;
