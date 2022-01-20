const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        process.exit();
      }
      if (body === "[]") {
        callback(null, "Breed not found");
        process.exit();
      }
      const data = JSON.parse(body);
      callback(null, data[0]["description"]);
    }
  );
};

module.exports = { fetchBreedDescription };
