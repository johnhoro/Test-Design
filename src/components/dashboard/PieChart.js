import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

function App(props) {
  const data = {
    labels: ["Swiggy", "Zomato", "Amazon", "EatFit"],
    datasets: [
      {
        label: "# of Votes",
        data: [44, 18, 9, 29],
        backgroundColor: [
          "rgb(236, 134, 57)",
          "rgb(181, 50, 51)",
          "rgb(20, 25, 32)",
          "rgb(216, 50, 118)",
        ],
        borderColor: [
          "rgb(236, 134, 57)",
          "rgb(181, 50, 51)",
          "rgb(20, 25, 32)",
          "rgb(216, 50, 118)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
  };
}

export default connect(mapStateToProps)(App);
