fetch("https://data.climacell.co/v4/timelines?location=27.2046%2C77.4977&fields=temperature&timesteps=1d&units=metric&apikey=fmqXDGLaGG7rhK7il3jfQ0XZotU3vDVb", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

