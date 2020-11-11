# Webstacks Sample Project
This is a sample website built on **React**, **Gatsby** and **Contentful**. The website is hosted on https://vigorous-morse-f378fc.netlify.app/

### Build instructions
After cloning, install the necesary packages with `npm install`. With this completed, run
`gatsby build` or `npm run build` to launch the web application locally. The site can then be found at `localhost:8000`.

### Application Description
The head of the website is the index and layout.
The layout contains the Header and Card List components, which each have their own CSS modules and Contentful GraphQL data queries.
The Card List contains 3 Card components. 

The CMS has two Content Models, one for the Color Cards and another for the Header Colors.
The Color Card has its title (which is unique and required), as well as a description and image.
The Header Color only has a title. 

### Todo
* Work on better scalability for various screens and mobile. This would include:
  * Dynamic multicolor background instead of the current static one
  * More flexible CSS with less reliance on absolute units (or use a separate CSS extension)
  * Header always on one line with text scaling to keep it that way
  * Cards either in a row of three or column of three, skipping over 2 rows and columns
* Create an image component instead of using `gatsby-image` everytime an image needs to be placed
* Combine the two Contentful GraphQL queries into one at the top-level of the application, and pass down the data

