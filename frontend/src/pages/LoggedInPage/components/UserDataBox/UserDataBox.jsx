import React, { useState, useEffect } from "react";
import { getUserData } from "../function/getUserData";
import { determineColor } from "../function/determineColor";
import "./userDataBox.css";

function UserData() {
  const [userData, setUserData] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    fetchData();
  }, []);

  const accounts = userData
    ? [
        { name: "Swedbank", value: userData.swedbank },
        { name: "Avanza", value: userData.avanza },
        { name: "Nordea", value: userData.nordea },
        { name: "Kameo", value: userData.kameo },
        { name: "Other", value: userData.other },
      ]
    : [];

  // Calculate total value
  let total = 0;
  if (userData) {
    for (let i = 0; i < accounts.length; i++) {
      total += accounts[i].value;
    }
  }

  // determine color

  const totalColor = determineColor(total);

  const accountElements = userData
    ? accounts.map((account) => {
        const color = determineColor(account.value);
        return (
          <div className="userDataRow" key={account.name}>
            <p>{account.name}:</p>
            <p style={{ background: color.color }}>
              {account.value} KR {color.icon}
            </p>
          </div>
        );
      })
    : null;

  return (
    <div className="BoxContainer">
      {userData ? (
        <div>
          <div className="userData">
            <h2>wallet</h2>
            {accountElements}
            <div className="userDataRowTot">
              <p style={{ background: totalColor.color }}>
                Total: {total} KR {totalColor.icon}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UserData;
