const request = require("request");
const argBreed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${argBreed}`,
  (error, response, body) => {
    if (error) {
      console.log("Request failed");
      console.log("statusCode:", error.code); // Print the response status code if a response was received
      process.exit();
    }
    if (body === "[]") {
      console.log("Breed not found");
      process.exit();
    }
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
);
