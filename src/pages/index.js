import React from "react"
import Layout from "../components/layout";
import {graphql, Link} from "gatsby";

export const query = graphql`
    query CityQuery {
        allContentfulCity {
            edges {
                node {
                    name
                    description
                    location {
                        lat
                        lon
                    }
                    gatsbyPath(filePath: "/location/{contentfulCity.name}")
                }
            }
        }
    }
`;

const Home = ({data}) => {
  return (
  	<Layout>
        <h1>Home</h1>
	    <ul>
		    {
			    data.allContentfulCity.edges.map(({node: city}) => (
				    <li key={city.name}>
					    <Link to={city.gatsbyPath}>{city.name}</Link>
					    {city.description} - {city.location.lon} , {city.location.lat}
				    </li>)
			    )
		    }
	    </ul>
    </Layout>
  )
}

export default Home
