import axios from "axios";

const options = {
  method: "POST",
  url: "https://worldwide-restaurants.p.rapidapi.com/Details",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
    "x-rapidapi-key": "c5e7f3a336mshb1e07f54bd97c53p1b21cajsn390ddb370036",
  },
  data: {
    currency: "ZAR",
    limit: "15",
    language: "en_UK",
    location_id: "15333482",
  },
};

  export default const post =  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error + "there's an error in this api request");
    });


 export default axios.create({
  method: "POST",
  url: "https://worldwide-restaurants.p.rapidapi.com",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
    "x-rapidapi-key": "c5e7f3a336mshb1e07f54bd97c53p1b21cajsn390ddb370036",
  },
  data: {
    currency: "ZAR",
    limit: "15",
    language: "en_UK",
    location_id: "15333482",
  },
});
