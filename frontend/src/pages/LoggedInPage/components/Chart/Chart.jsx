import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { getUserData } from "../function/getUserData";

function Chart() {
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

  return (
    <div className="BoxContainer">
      {accounts.length > 0 && (
        <Pie
          data={{
            labels: accounts.map((account) => account.name),
            datasets: [
              {
                label: "Accounts",
                data: accounts.map((account) => account.value),
                backgroundColor: [
                  "#Ffa8B8",
                  "#b3E1EA",
                  "#F2ECCE",
                  "#dfb7E5",
                  "#b5a4DA",
                ],
                borderColor: ["black"],
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
                labels: {
                  color: "rgba(0, 0, 0, 0.776)",
                  font: {
                    size: 18,
                  },
                  padding: 13,
                },
              },
              chart: {
                size: 100,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
