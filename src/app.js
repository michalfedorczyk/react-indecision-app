console.log("App.js is running");

var app = {
  title: "App Title",
  subtitle: "App Subtitle",
  data: "Monday",
  options: ["One", "Two"],
};

var user = {
  firstName: "Michał M. Fedorczyk",
  userAge: 18,
  userLocation: "Bisztynek, Warszawa",
};

// JSX JavaScript XML
var template = (
  <div>
    <p>{app.title}</p>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.data}</p>
    {app.options.length > 0 ? "Here are your option" : "No options"}
  </div>
);

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var greetingTemplate = (
  <div>
    <h1>
      Username: {user.firstName ? user.firstName.toUpperCase() : "Anonymous"}
    </h1>
    {user.userAge && user.userAge >= 18 && <p>Age: {user.userAge}</p>}
    {getLocation(user.userLocation)}
  </div>
);

var appRoot = document.getElementById("app");
var greetingMessage = document.getElementById("greeting");

ReactDOM.render(template, appRoot);
ReactDOM.render(greetingTemplate, greetingMessage);
