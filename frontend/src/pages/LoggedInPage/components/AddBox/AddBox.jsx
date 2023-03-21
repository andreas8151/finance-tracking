import { useState } from "react";
import { handleSubmit } from "../function/addBoxSubmitHandler";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import "../UserDataBox/userDataBox.css";
import "./addBox.css";

function AddContainer() {
  const [inputSwedbank, setInputSwedbank] = useState("");
  const [inputAvanza, setInputAvanza] = useState("");
  const [inputNordea, setInputNordea] = useState("");
  const [inputKameo, setInputKameo] = useState("");
  const [inputOther, setInputOther] = useState("");

  /* ----handelSubmit----- */
  const handleSub = (event) => {
    handleSubmit(
      inputSwedbank,
      inputAvanza,
      inputNordea,
      inputKameo,
      inputOther,
      event
    );
  };

  return (
    <div className="BoxContainer">
      <h2 className="hTwo">Add to wallet</h2>
      <form onSubmit={handleSub}>
        <Input
          type="text"
          placeholder="Swedbank"
          onChange={(event) => {
            setInputSwedbank(event.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Avanza"
          onChange={(event) => {
            setInputAvanza(event.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Nordea"
          onChange={(event) => {
            setInputNordea(event.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Kameo"
          onChange={(event) => {
            setInputKameo(event.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Other"
          onChange={(event) => {
            setInputOther(event.target.value);
          }}
        />
        <Button title="Add" type="Submit" />
      </form>
    </div>
  );
}

export default AddContainer;
