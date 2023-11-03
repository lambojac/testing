const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 9000;

app.get('/getRandomNumber', (req, res) => {
  // Generate a random four-digit number
  const randomFourDigitNumber = getRandomFourDigitNumber();

  // Send the random number as JSON
  res.json({ randomNumber: randomFourDigitNumber });
});

function getRandomFourDigitNumber() {
  // Generate a random number between 1000 and 9999 (inclusive)
  return Math.floor(1000 + Math.random() * 9000);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
