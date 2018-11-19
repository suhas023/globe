# Globe

A simple web app to get basic details of all the countries. The web app is made using Angular 6.

Live Link: https://suhas023.github.io/globe/


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)

## Installation

Type the following commands in your terminal:

```
git clone <url of this repo>
cd globe
npm install
ng start
```
open browser at `localhost:4200` and test the app.


## Usage

### Overview

The app uses restcountries API to fetch the data and display the data in form of cards on the screen.

### Home Screen
- All five continents are shown.
- User can click on any of them, and all countries in that continent will be shown.

### Navbar
Contains
- Basic Logo of the app.
- A search icon.
- If search icon is clicked an input form would take over for user to search.

### Countries
- All countries are displayed in form of cards.
- User can filter the results using filter form. 
- User can further filter by clicking the curency or language in a country. And all countries with matching would appear.

### Country Page
- Basic details about a country is shown here.
Like,
- Languages, population, Lat and Lng, timezones etc. 



## Screenshot
![sample shot](/screenshot/globe.png?raw=true)
