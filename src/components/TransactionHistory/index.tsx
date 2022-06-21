import React, { FC } from "react";
import "./style.css";
interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}
interface IProps {
  transactions: Array<ITransaction>;
}
export const TransactionHistory: FC<IProps> = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((el: ITransaction) => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}

        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
