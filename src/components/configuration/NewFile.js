import { useState } from "react";

function NewFile() {
  let [addRow, setAddRow] = useState(1);
  return (
    <>
      <div className="upload">
        <div className="upload-box">
          <h2>Upload New File</h2>
          <p>Select files to upload</p>
          {Array.from(new Array(addRow)).map((_, i) => (
            <form className="flex justify-bw">
              <select className="w-150p" name="cars">
                <option value="All">Channel</option>
                <option value="Amazon">Amazon</option>
                <option value="Swiggy">Swiggy</option>
                <option value="Zomato">Zomato</option>
                <option value="EatFit">EatFit</option>
              </select>
              <input type="tex" />
              <button className="browse-btn">Browse</button>
            </form>
          ))}
          <p
            onClick={() => {
              setAddRow(addRow + 1);
            }}
            className="add-row"
          >
            + Add Row
          </p>
        </div>

        <div className="flex justify-end">
          <button className="browse-btn margin-r">Cancle</button>
          <button className="browse-btn margin-r">Upload & Reconcile</button>
        </div>
      </div>
    </>
  );
}

export default NewFile;
