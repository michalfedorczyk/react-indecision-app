"use strict";

console.log("App.js is running");

var app = {
  title: "App Title",
  subtitle: "App Subtitle",
  data: "Monday",
  options: ["One", "Two"]
};

var user = {
  firstName: "Michał M. Fedorczyk",
  userAge: 18,
  userLocation: "Bisztynek, Warszawa"
};

// JSX JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.data
  ),
  app.options.length > 0 ? "Here are your option" : "No options"
);

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var greetingTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Username: ",
    user.firstName ? user.firstName.toUpperCase() : "Anonymous"
  ),
  user.userAge && user.userAge >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.userAge
  ),
  getLocation(user.userLocation)
);

var appRoot = document.getElementById("app");
var greetingMessage = document.getElementById("greeting");

ReactDOM.render(template, appRoot);
ReactDOM.render(greetingTemplate, greetingMessage);
