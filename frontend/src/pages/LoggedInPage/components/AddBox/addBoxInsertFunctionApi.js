import axios from "axios";
const name = localStorage.getItem("user");



export const addBoxInsertFunctionApi = async (
  inputSwedbank,
  inputAvanza,
  inputNordea,
  inputKameo,
  inputOther
) => {
  await axios.post("http://localhost:3001/portfolio/insertCash", {
    swedbank: inputSwedbank,
    avanza: inputAvanza,
    nordea: inputNordea,
    kameo: inputKameo,
    other: inputOther,
    name: name,
  });
};
