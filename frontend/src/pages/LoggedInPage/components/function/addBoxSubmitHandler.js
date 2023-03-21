import { addBoxInsertFunctionApi } from "../AddBox/addBoxInsertFunctionApi.js";
// This function is called when the user submits the form in the AddBox component.

export const handleSubmit = async (
  inputSwedbank,
  inputAvanza,
  inputNordea,
  inputKameo,
  inputOther,
  event
) => {
  await addBoxInsertFunctionApi(
    inputSwedbank,
    inputAvanza,
    inputNordea,
    inputKameo,
    inputOther
  );
  event.preventDefault();
};
