## Notes

### Date

March 26, 2020

### Location of deployed application

Production Url: http://very-cool-weather-app.surge.sh/

Github Url: https://github.com/colesanderson/weather-app

### Time spent

10 hours

### Assumptions made

-   First, I looked at the API to see what data was available for me to use on the web app.
-   After that I wrote down all the features that I wanted to include in the web app with the data.
-   I then Googled "weather web app design" and found two to three designs that I liked and used them as inspiration to create my own design with the features that I wanted to include.
-   Drew my own wireframe on paper for my design to move from desktop -> mobile.
-   Started coding from there!
-   For this app I used Tailwind css, I have been exploring more with this lately, sorry if the html code is bloated with tailwind classes :)

### Stretch goals attempted

-   Added Cloud count to background.
-   Added colour background based on the temperature (need some work with colour choices).
-   Would have liked to add Geolocation to get the user's location; however, I would need more time to work on that.

### Instructions to run assignment locally

To run the project locally:

1. Clone or download https://github.com/colesanderson/weather-app
2. Installing all the dependencies of project, run `npm install` or `yarn install`
3. Run `npm start` to run the app in the development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### What did you not include in your solution that you want us to know about?

-   For tailwind CSS, I imported all the tailwind CSS in the CSS file without any of the webpack with post-css to use autoprefixer (support all browsers) and purgecss (to remove all unused classes).
-   Add a focus style to search input.
-   Refactor some reduant code.
-   Add Prop types to ensure pass right types
-   Add more comments and fix naming in the code to make it easier for other devs to jump into the code
-   Add search results from city options API to output cities to avoid "no city found"
-   Move api into backend to protect API key and set up env variable for API key
-   Add geolocation based on users location

### Other information about your submission that you feel it's important that we know if applicable.

-   Icons from https://material.io/resources/icons/?style=baseline
