import React from "react";

const Sidebar = ({
  // verify,
  // text,
  // array,
  // searchNumber,
  // current,
  // setCurrent,
  // insert,
  // data,
  onApplyLoadedData,
  reset,
  passBranchDataOnClick,
  choosedBranch,
  cashedNodeValue,
  // editCashedNodeValue,
}) => {
  const name =
    typeof cashedNodeValue === "string"
      ? cashedNodeValue
      : cashedNodeValue?.value.name || "";
  const getValue = name.substring(0, name.indexOf(","));

  const extractId = cashedNodeValue?.value.name;
  const id = extractId
    ? extractId.substring(extractId.length - 37).substring(0, 36)
    : "";

  const [inputValue, setCustomValue] = React.useState({
    value: getValue,
    id,
  });

  const [editedList, setEditedList] = React.useState([]);

  const pushList = () => {
    setEditedList((prev) => {
      if (!inputValue.value || !inputValue.id) return;
      // console.log(prev);
      // let isEqualValueInArray =
      //   prev &&
      //   prev.every(
      //     (element) =>
      //       element.id === inputValue.id && element.value === inputValue.value
      //   );
      // if (isEqualValueInArray) return;
      // if (prev) {
      //   console.log(prev);
      return [...prev, inputValue];
      // }
    });
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (value) {
      setCustomValue((prev) => ({ ...prev, value, id }));
    }
  };

  React.useEffect(() => {
    if (getValue) {
      setCustomValue((prev) => ({ ...prev, value: getValue, id }));
    }
    //reset
  }, [getValue, id]);

  return (
    <div className="sidebar-wrapper">
      <button
        className="next-node-button fullwidth next-node"
        // disabled={!cashedNodeValue}
        onClick={pushList}
      >
        Edit Node value
      </button>
      <input
        className="next-node-input  next-node"
        type="text"
        name="custom"
        value={inputValue.value}
        // onChange={(e) => setCustomValue(e.target.value)}
        onChange={handleChange}
        placeholder="Change node value"
      />
      <button
        className="next-node-button fullwidth next-node"
        onClick={() => console.log(editedList)}
        disabled={Boolean(!onApplyLoadedData.length)}
      >
        {">>Apply changes to db>>"}
      </button>
      <button className="next-node-button fullwidth next-node" onClick={reset}>
        Reset changes
      </button>
      <button
        className="next-node-to-cash  next-node"
        onClick={passBranchDataOnClick}
        disabled={Boolean(!choosedBranch.length)}
      >
        {"<<Download to the Cash<<"}
      </button>
      {/* <input
        className="next-node-input  next-node"
        type="number"
        name="current"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        placeholder="Enter node to the tree"
      /> */}
      {/* <button
        className="next-node-button fullwidth next-node"
        disabled={!current || isNaN(current)}
        onClick={() => {
          insert(parseInt(current, 10));
          setCurrent("");
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default Sidebar;
