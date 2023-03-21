import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { useState } from "react";
import "./budgetBox.css";

function BudgetBox() {
  const [moneyLeft, setMoneyLeft] = useState("");
  const [dayBudget, setDayBudget] = useState("");

  return (
    <div className="budgetBoxContainer">
      <h2>Budget / Day</h2>
      <form
        onSubmit={(event) => {
          const today = new Date();
          const lastDayOfMonth = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0
          );
          const daysLeft = lastDayOfMonth.getDate() - today.getDate();
          setDayBudget(Math.floor(moneyLeft / daysLeft) + "KR");
          event.preventDefault();
        }}
      >
        {" "}
        <Input
          type="text"
          placeholder="budget"
          onChange={(event) => {
            setMoneyLeft(event.target.value);
          }}
        />
        <Button title="Count" type="Submit" />
      </form>
      <h3>{dayBudget}</h3>
    </div>
  );
}

export default BudgetBox;
