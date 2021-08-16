import React, { useEffect, useState } from "react";
import "./App.css";
import CachedTreeView from "./components/CachedTreeView";
import DBTreeView from "./components/DBTreeView";
import Sidebar from "./components/Sidebar";
import { initialState } from "./initData";
import {
  comparator,
  extractId,
  formatData,
  searchParentsConnection,
  searchInTree,
} from "./utils";

function App() {
  const [current, setCurrent] = useState("");
  const [data, setData] = useState(initialState);
  const [treeBranch, setTreeBranch] = useState({});
  const [choosedBranch, setChoosedBranch] = useState([]);
  const [onApplyLoadedData, setOnClickBranchData] = useState([]);
  const [cashedNodeValue, editCashedNodeValue] = useState(null);

  useEffect(() => {
    if (Object.keys(treeBranch).length) {
      setChoosedBranch((prev) => {
        let id = extractId(treeBranch);
        let activeNode = { id, name: treeBranch.name };
        searchInTree(data, treeBranch);
        searchParentsConnection(formatData(data), prev, activeNode);

        return comparator({
          targetList: prev,
          node: activeNode,
          source: formatData(data),
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeBranch]);

  const handleChange = (e) => editCashedNodeValue(e);
  const handleClick = (nodeData) => {
    const id = extractId(nodeData);
    setTreeBranch({ ...nodeData, id });
  };
  const passBranchDataOnClick = () => setOnClickBranchData(choosedBranch);
  const reset = () => {
    setData(initialState);
    setTreeBranch({});
    setOnClickBranchData([]);
    setChoosedBranch([]);
  };

  return (
    <main className="App">
      <div className="tree-container">
        <CachedTreeView
          treeBranch={onApplyLoadedData}
          onReset={reset}
          editCashedNodeValue={editCashedNodeValue}
        />
        <DBTreeView
          data={formatData(data)}
          handleClick={handleClick}
          onReset={reset}
          treeBranch={onApplyLoadedData}
        />
      </div>

      <Sidebar
        editCashedNodeValue={handleChange}
        cashedNodeValue={cashedNodeValue}
        current={current}
        setCurrent={setCurrent}
        onApplyLoadedData={onApplyLoadedData}
        reset={reset}
        passBranchDataOnClick={passBranchDataOnClick}
        choosedBranch={choosedBranch}
      />
    </main>
  );
}

export default App;
