import { Layout } from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/head";

const endpoint = `https://restcountries.eu/rest/v2/region/`;

export const getServerSideProps = async ({ query }) => {
  const { region } = query;
  const response = await fetch(`${endpoint}${region}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const RegionName = styled.h1`
  padding: 1rem;
  font-size: 3rem;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  li {
    list-style: none;
    padding: 1rem;
    margin: 0 auto;

    h2 {
      font-size: 1.75rem;
    }

    a:hover {
      cursor: pointer;
    }
  }
`;

const Region = ({ data }) => {
  return (
    <Layout>
      <Head>
        <meta name="description" content={`${data[0].region} - Motherlands`} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{data[0].region} - Motherlands</title>
      </Head>
      <RegionName>{data[0].region}</RegionName>
      <List>
        {data.map((country) => (
          <li key={country.alpha3Code}>
            <Link
              passHref
              href={`/${country.region.toLowerCase()}/${country.alpha3Code.toLowerCase()}`}
            >
              <h2>
                <a>{`${country.name}`}</a>
              </h2>
            </Link>
            <Image
              src={country.flag}
              alt={`Flag of ${country.name}`}
              width={250}
              height={250}
              objectFit="contain"
              objectPosition="center"
              loading="eager"
              quality={50}
              placeholder="empty"
            />
          </li>
        ))}
      </List>
    </Layout>
  );
};

export default Region;
