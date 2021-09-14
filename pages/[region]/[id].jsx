import { Layout } from "../../components/Layout";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";

const endpoint = "https://restcountries.eu/rest/v2/alpha/";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const response = await fetch(`${endpoint}${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Country = styled.section`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    ul {
      margin-bottom: 3rem;

      li {
        font-size: 1.5rem;
        list-style: none;
        margin: 0.6rem 0;
      }
    }
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      justify-self: center;
    }
  }
`;

const Id = ({ data }) => {
  const getData = data;
  const population = getData.population;
  const area = getData.area;
  const currencies = getData.currencies[0];
  const getPopulation = new Intl.NumberFormat().format(population);
  const getArea = new Intl.NumberFormat().format(area);

  return (
    <Layout>
      <Head>
        <meta name="description" content={`${getData.name} - Motherlands`} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{getData.name} - Motherlands</title>
      </Head>
      <Country>
        <div>
          <h1>
            {getData.name} ({getData.nativeName})
          </h1>
          <h2>Capital: {getData.capital}</h2>
          <Image
            src={getData.flag}
            alt={`Flag of ${getData.name}`}
            width={300}
            height={300}
            objectFit="contain"
            objectPosition="center"
            loading="eager"
            quality={50}
            placeholder="empty"
          />
        </div>
        <div>
          <ul>
            <li>
              Region: {getData.subregion}, {getData.region}
            </li>
            <li>Population: {getPopulation}</li>
            <li>Denonym: {getData.demonym}</li>
            <li>Others names: {getData.altSpellings.join(", ")}</li>
            <li>Borders with: {getData.borders.join(", ") || "No country"}</li>
            <li>Calling codes: +{getData.callingCodes.join(", ")}</li>
            <li>
              Currency: {currencies.name} ({currencies.symbol} -{" "}
              {currencies.code})
            </li>
            <li>Area: {getArea} km2</li>
            <li>Main language: {getData.languages[0].name}</li>
            <li>Latitude/Longitude: {getData.latlng.join(", ")}</li>
            <li>Local domain: {getData.topLevelDomain}</li>
            <li>Timezone: {getData.timezones.join(", ")}</li>
          </ul>
        </div>
      </Country>
    </Layout>
  );
};

export default Id;
