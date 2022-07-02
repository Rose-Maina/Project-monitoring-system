# PROJECT-MONITORING-SYSTEM
# Application Name: 
A Public Infrastructure Monitoring System
# Author's Name: 
Rose Maina
# Description of the Project
This project focussed on providing users with comprehensive information on various public infrasructure projects. The aim of the site is to provide every user with an understanding of the projects in terms of their aims, the planned start and finsih dates, the current project status, and a comparison of the budget and actual costs used in the projects.

# The Project Setup Instructions
## The Project's Objectives

- Develop a website that provides comprehensive information to the stakeholders on various public projects. 
- Allow the users specifically project managers to provide updated progress reports on the projects. an abil

## Introduction

In this project, data is to be retrieved from a pubic API on the ongoing projects. the underling code is to pass functions into an event listener when called, send a 'fetch' request, then the data will be displayed after retrieval.


## Scenario
Imagine you are looking to build a frontend database that specializes in public projects. the initial step is seeking for information for an the website's API, creating the HTML code, styling with CSS and a achieving web functionality through Javascript. 


## Getting Started

The JSON server was first kept up an running through the `json-server --watch db.json` to see the API data collected. Then the heroku application was deployed in order to create a public API


## Creating the HTML

In `index.html`, the goal is creating a the basic webpage for the site. To this effect, the structure was mainly to have a title for the site, a description of what the site has, the projects and the respective information from the API. 

Instead of having a hard-coded site, the code would make use of the ID and class selectors used in the styling with CSS and attaining functionality in Javascript.

A Submit Form was also included in which the project managers could add information on the project and it will appear below it after clicking on Submit.

The  primary task of getting ths form to work entaiked adding an event listener for capturing the form data and overriding its default behavior, fetching the data that the user has typed on the form and displaying the data on the page.

## Styling through CSS
this webpage was styled through CSS with the use of the ID and class selectors or other differenrt tags depending on how they appeared in the HTML code.

## Creating the Javascript Code

The JS code was mainly focussed on having functions that could capture user input and also customize the fetch requests from the public API. to display the retrieved data in the page, the HTML comprised of a `div` element with an id, `"projectNames"` which contained the filler information.

All together, the project's code would be concluded in the `index.html`, `style.css` and `index.js` files.


## Conclusion

In this project, the main goal of capturing user input via event listeners, using `fetch` requests,
and DOM manipulation, it became possible to update the webpage content as a user requests it. Although
this won't be the case for all events, we also overrode HTML's default behavior.


# The Link to the live site on GitHub Pages 

https://rose-maina.github.io/Project-monitoring-system/

# Copyright and License Information
MIT License

Copyright (c) [2022] [Rose-Maina] [https://fierce-forest-94320.herokuapp.com/items]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.

