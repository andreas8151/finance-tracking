import axios from "axios";


// Function to create a new user
export const CreateUserFunction = async (name, password) => {

  await axios.post("http://localhost:3001/authentication/insertUser", {
    name: name,
    password: password,
  });

  await alert("User created successfully");
};


// path: src/pages/components/LogIn/CreateBox/submitHandlers.js