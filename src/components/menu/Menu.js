import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";

const StyledMenuContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: #542c85;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding-left: 50px;
`;

const StyledSingleMenuItem = styled.div`
	font-size: 16px;
	color: white;
	margin-right: 20px;
`

const Menu = () => {
	return (
		<StyledMenuContainer>
			<StyledSingleMenuItem as={Link} to="/">Home</StyledSingleMenuItem>
			<StyledSingleMenuItem as={Link} to="/about">About</StyledSingleMenuItem>
			<StyledSingleMenuItem as={Link} to="/location">Location</StyledSingleMenuItem>
		</StyledMenuContainer>
	)
}

export default Menu;
