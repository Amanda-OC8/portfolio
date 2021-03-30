---
title: Monumentos activos
date: "2020-09-23T08:00:00.000Z"
description: Second Project
summary: A mobile app to explore the monuments Madrid trought activities developed as second project on Iron Hack Bootcamp.
keywords: [CSS3, MongoDB, Handlebars, Node.js, API]
featuredimage:
  src: "./Monuments-Example.png"
  alt: "Monument's list"
defaultLang: ENG
cv: false
---
This is the second project from the Iron Hack Bootcamp. Initially designed as two person project, I made them alone because personal circustamcies with my partner. For this project we must use an external API to manage the data. The project was centered on test our abilities on the back-end at the same time that we continous using our front-end abilities. 

With these limitations, I searched in the open API's from Spain and discovered the data from the Madrid's town council. The data from the monuments location remeberm me when I was a counselor at Scout's Group and make activities with the kids in the city of Alcalá de Henares, that have a large historical places to visit. I thoufht than it is possible combine both and create an app where you can have a list of places and a list of activities that you can make in there. Also, you can know the age, number of participants, materials and type of activity posssible for each place. With all of these, I created *Monumentos activos*, a mobile App.

![Activity list, new activity and activity detail composition](./Activities.png)*Different activities' screens.*

The color scheme of the web was designed using [coolors.co](coolors.co/), a web for colors schemes. We choose the blue and search a palette. The idea is use a color scheme that will be comfortable to the sight for the people that use the dark mode on web pages avoiding big contrasts with a light background with dark letters. Also, the web allow previsualize the color combination for the different types of color blidness for the accesibility of the page. All the app is only aviable in spanish because was designed for the use of people with no dominion of the english.

The principal difficult with the App development is the data. The data from the Madrid's town council are not a rest API as I think. The web page provides a json file with all the data. For this reason, the App load the data from an adapted json file for the manage of the data. As one of the project requirement is the use of an external API. One related API we know is the Google Maps API, that allow locate each monument using the geographical coordinates that appear in the json file.

The back-end part uses three different collection: the monument's list, the activity list and the users. The last one collection is other project requirement: protected routes, for these reason I added users to manage and create activities. Also, we add that only the owner user can modify their activities and manage their favorites monuments. The monument collection is the most basic and is an only-read colection. The activities and the user are the collections that store and manage the monument information. Each monument has their own card with few details and their location. As curiosity, a stats page is aviable to check the distribution of the activities using the number of participants and their age, to know if exists some activity for your interesents to create an other one. 

![Monument detail, monument filter list and stats page](./Monuments.png)*Monument's screens, with a filter and the stats page.*

The front-end part uses bootstrap to make easier the design of the cards and other elements. Various items, as the buttons, are created for the app, to adjust with the color scheme. All the app is desigend for mobiles, but is avaible to use on web browsers. You can access the web on [heroku](https://monumentos-activos.herokuapp.com/) and checks their repo on my [github](https://github.com/Amanda-OC8/APP-Monuments)

###### Technologies: Bootstrap, CSS3, MongoDB, Handlebars, Node.js, API