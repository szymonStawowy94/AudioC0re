import React from 'react';
import {graphql} from "gatsby";
import Layout from "../../components/layout";

export const query = graphql`
    query City ($id: String = "") {
        contentfulCity (id: {eq: $id}) {
            name
            description
            location {
                lat
                lon
            }
        }
    }`;

export default function City({data}) {
	return (
		<Layout isSubmenuVisible>
			<h1>{data.contentfulCity.name}</h1>
			<h2>
				{data.contentfulCity.description}
			</h2>
			<h3>
				lat: {data.contentfulCity.location.lat} , lon: {data.contentfulCity.location.lon}
			</h3>
		</Layout>
	)
}
