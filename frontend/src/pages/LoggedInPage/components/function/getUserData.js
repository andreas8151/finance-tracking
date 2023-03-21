import axios from "axios";

// Function to get user from the database

export const getUserData = async () => {
  const user = localStorage.getItem("user");

  const response = await axios.get(
    "http://localhost:3001/authentication/getUser"
  );
  const data = response.data;

  const userMatch = data.filter((account) => {
    return account.name === user;
  });

  return userMatch[0];
};
