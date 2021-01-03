import {Link} from "gatsby";
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
		<StyledSubMenu>
			<StyledSingleCityItem as={Link} to="/location/los-angeles">Los Angeles</StyledSingleCityItem>
			<StyledSingleCityItem as={Link} to="/location/san-francisco">San Francisco</StyledSingleCityItem>
			<StyledSingleCityItem as={Link} to="/location/oakland">Oakland</StyledSingleCityItem>
		</StyledSubMenu>
	)
}

export default Submenu;
