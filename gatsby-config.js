require("dotenv").config({
	path: `.env`,
});

module.exports = {
    plugins: [
	    `gatsby-plugin-styled-components`,
	    {
		    resolve: `gatsby-source-contentful`,
		    options: {
			    spaceId: process.env.CONTENTFUL_SPACE_ID,
			    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		    }
	    }
    ]
}
