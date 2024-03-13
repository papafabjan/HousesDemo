const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000; //no env file yet

app.use(cors());

app.use(express.json());

app.post("/houses", async (req, res) => {
  try {
    const searchTerm = req.body.name.toLowerCase();
    const response = await axios.get(
      "https://wizard-world-api.herokuapp.com/houses"
    );
    const houses = response.data;
    if (houses && houses.length > 0) {
      if (!searchTerm || searchTerm === "") {
        res.json(houses);
      } else {
        const filteredHouses = houses.filter((house) =>
          house.name.toLowerCase().includes(searchTerm)
        );
        console.log(filteredHouses);
        res.json(filteredHouses);
      }
    } else {
      res.status(404).json({ success: false, message: "No houses found" });
    }
  } catch (error) {
    console.error("Error fetching houses:", error);
    res.status(500).json({ error: "Failed to fetch houses" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
