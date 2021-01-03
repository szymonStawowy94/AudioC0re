import React from "react"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"
import Menu from "./menu/Menu";
import Submenu from "./menu/Submenu";

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
	html {
	
		box-sizing: border-box;
		overflow-x: hidden;
	}
	body {
		width: 100%;
		padding: 0;
		margin: 0;
		background-color: white;
		-webkit-tap-highlight-color: transparent;
		color: #542c85;
	    font-family: 'Montserrat';
	}
	
	button {
		&:focus {
			outline: none;
		}
	}
	
	a {
		text-decoration:none;
		color:unset;
		&:focus {
			outline: none;
		}
	}
	
	*, *::before, *::after{
		box-sizing: border-box;
	}
	
	button {
	background-color: transparent;
	}
	
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
	}
	
	p {
		margin: 0;
		padding: 0;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
`;

const StyledContentWrapper = styled.div`
	padding: 50px;
`
export default function Layout({ children, isSubmenuVisible }) {
	return (
		<>
			<GlobalStyle/>
			<Menu/>
			{isSubmenuVisible && <Submenu/>}
			<StyledContentWrapper>
				{children}
			</StyledContentWrapper>
		</>
	)
}
