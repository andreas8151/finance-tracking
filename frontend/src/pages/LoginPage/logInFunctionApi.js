import axios from "axios";

// Function to get all users from the database and compare them with the input
export const getUsersFunction = async (inputName, inputPassword) => {
  const response = await axios.get(
    "http://localhost:3001/authentication/getUser"
  );
  const data = response.data;
  console.log(
    "🚀 ~ file: logInFunctionApi.js:9 ~ getUsersFunction ~ data:",
    data
  );

  const userMatch = data.filter((user) => {
    return user.name === inputName && user.password === inputPassword;
  });
  console.log("🚀 ~ file: logInFunctionApi.js:17 ~ userMatch ~ userMatch:", userMatch)

  if (userMatch.length > 0) {
    window.location.href = "/LoggedInPage";
    localStorage.setItem("user", userMatch[0].name);
  } else {
    alert("Wrong username or password");
  }
};
