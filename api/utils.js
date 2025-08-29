const fs = require("fs");

// Function to read and retrieve user data by username
function getUserDataByUsername(username) {
  const storageFilePath = "./storage/account.json";
  const accounts = fs.readFileSync(storageFilePath, "utf-8");
  const data = JSON.parse(accounts);
  return data[username];
}

module.exports = { getUserDataByUsername };
