import { getUsersFunction } from "../../../../LoginPage/logInFunctionApi";
import { CreateUserFunction } from "../../../../CreateUser/createFunctionApi";

/* ----Submit-handlers-------- */

/* create */
export const handleSubmitCreate = async (inputName, inputPassword, event) => {
  await CreateUserFunction(inputName, inputPassword);
  event.preventDefault();
};

/* login */
export const handleSubmitLogin = async (inputName, inputPassword, event) => {
  getUsersFunction(inputName, inputPassword);
  event.preventDefault();
};
