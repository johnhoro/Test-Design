import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { connect } from "react-redux";

const options = ["All", "Amazon", "Swiggy", "Zomato", "EatFit"];

function Filter(props) {
  const [isShowDate, setIsShowDate] = useState(true);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  console.log(state);

  function handleDate() {
    setIsShowDate(!isShowDate);
  }
  const [channel, setChannel] = useState(options[0]);

  function handleChannel(e) {
    switch (channel) {
      case "all":
        return props.dispatch({ type: "channel", payload: 0 });
      case "Amazon":
        return props.dispatch({ type: "channel", payload: 1 });
      case "Swiggy":
        return props.dispatch({ type: "channel", payload: 2 });
      case "Zomato":
        return props.dispatch({ type: "channel", payload: 3 });
      default:
        return props.dispatch({ type: "channel", payload: 4 });
    }
  }

  return (
    <div className="filter flex align-center">
      {isShowDate ? (
        <div onClick={handleDate} className="flex align-center">
          <p>Date-Range: </p>
          <input type="date" />
        </div>
      ) : (
        <div className="date-box">
          <DateRangePicker
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            onChange={(item) => setState([item.selection])}
          />
          <p onClick={handleDate}>❌</p>
        </div>
      )}
      <div>
        <label htmlFor="Channel">Channel:</label>
        <select
          onChange={(e) => {
            setChannel(e.target.value);
          }}
          className="w-150p"
          name="channel"
        >
          {options.map((elm, i) => (
            <option key={i} data-id={i} value={i}>
              {elm}
            </option>
          ))}
        </select>
      </div>
      {props.currentPage !== "dashboard" ? (
        <form className="margin-l">
          <label htmlFor="Orders">Orders:</label>
          <select
            onChange={(e) => {
              setChannel(e.target.value);
            }}
            className="w-150p"
            name=""
          >
            <option value="All">All</option>
            <option value="Amazon">Reconciled</option>
            <option value="Swiggy">Not Reconciled</option>
            <option value="Zomato">Missing in Channel</option>
            <option value="EatFit">Missing in MB</option>
          </select>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    currentPage: state.currentPage,
  };
}

export default connect(mapStateToProps)(Filter);
