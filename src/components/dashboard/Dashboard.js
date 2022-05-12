import PieChart, { data } from "./PieChart";
import BarChart from "./BarChart";
import dashboard from "../../data/data.json";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

let allData = dashboard;
console.log(allData);

function Dashboard(props) {
  const [channel, setChannel] = useState(props.channel);

  useEffect(() => {
    setChannel(props.channel);
    console.log(props.channel, channel);
  }, [channel]);

  return (
    <div className="container">
      {allData[channel].map((elm) => (
        <div className=" dashboard flex justify-bw align-center">
          <div className="order">
            <h1>{elm.allOrders}</h1>
            <p>ALL ORDERS</p>
          </div>
          <div>
            <h1>₹ {elm.paidByUser}</h1>
            <p>Paid by Users</p>
          </div>
          <div>
            <h1>₹ {elm.commission}</h1>
            <p>Commission</p>
          </div>
          <div>
            <h1>₹ {elm.govtTax}</h1>
            <p>Govt. Tax</p>
          </div>
          <div>
            <h1>₹ {elm.netPayable}</h1>
            <p>Net Payable</p>
          </div>
        </div>
      ))}
      <section className="flex justify-bw">
        <div className="pie-box">
          <div className="flex justify-bw">
            <p>Order Distribution</p>
            <div className="flex align-center">
              <p>Orders</p>
              <i class="fa-solid fa-toggle-off"></i>
              <p>Amount</p>
            </div>
          </div>
          <PieChart />
        </div>
        <div className="pie-box">
          <p>Product Distribution</p>
        </div>
        <div className="pie-box">
          <p>Brand Distribution</p>
        </div>
      </section>
      <section>
        <div className="bar-box">
          <BarChart />
        </div>
      </section>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
  };
}

export default connect(mapStateToProps)(Dashboard);
