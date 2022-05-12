import dashboard from "../../data/data.json";

function Orders() {
  let order = dashboard[5].orders;
  console.log(order);
  return (
    <>
      <section>
        <div className="order">
          <div className="flex justify-bw export align-center">
            <button>Export List</button>
            <p>Showing 1-100 of 2,86,988</p>
            <div className="flex">
              <form action="">
                <label for="search">Search: </label>
                <select className="w-150p" name="search">
                  <option value="All">Order ID</option>
                  <option value="Amazon">Reconciled</option>
                  <option value="Swiggy">Not Reconciled</option>
                  <option value="Zomato">Missing in Channel</option>
                  <option value="EatFit">Missing in MB</option>
                </select>
                <input type="text" placeholder="Enter transaction ID" />
              </form>
            </div>
          </div>
          <ul className="flex order-nav justify-bw">
            <li>Order ID</li>
            <li>Order Status</li>
            <li>Date</li>
            <li>Channel</li>
            <li>Customer Payable</li>
            <li>Commission</li>
            <li>Charges</li>
            <li>Taxes</li>
            <li>Net-Receivable</li>
            <li>Reconcile Status</li>
          </ul>
          <div>
            {order.map((elm, i) => (
              <ul key={i} className="flex justify-bw">
                <li className="order-id">{elm.id} </li>
                <li>{elm.orderStatus}</li>
                <li>{elm.date}</li>
                <li>{elm.channel}</li>
                <li>{elm.payable}</li>
                <li> {elm.commission}</li>
                <li> {elm.charges}</li>
                <li> {elm.taxes}</li>
                <li> {elm.netReceivable}</li>
                <li>{elm.status}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Orders;
