import React from "react";
import "../Expenses/ExpenseItem.css";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  //   Hardcode constanta
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 294.67;

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
}
