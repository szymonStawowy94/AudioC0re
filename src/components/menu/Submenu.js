import {graphql, Link, StaticQuery} from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledSubMenu = styled.div`
	width: 100%;
	height: 40px;
	background-color: #8a4baf;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
    padding: 0 50px;
`

const StyledSingleCityItem = styled.div`
	margin-right: 20px;
  `;

const Submenu = () => {
	return (
		<StaticQuery query={graphql`
			query AllCityeQuery {
				allContentfulCity {
						edges {
							node {
								name
								 gatsbyPath(filePath: "/location/{contentfulCity.name}")
							}
					}
				}
			}
			`}
             render={data => {
                const allCities = (data?.allContentfulCity?.edges) || '';
                return(
					<StyledSubMenu>
						{allCities.map(({node: city}) => (
							<StyledSingleCityItem as={Link} to={city.gatsbyPath}>{city.name}</StyledSingleCityItem>
						))}
					</StyledSubMenu>)}}/>
	)
};


export default Submenu;
