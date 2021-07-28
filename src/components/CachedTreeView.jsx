import React from "react";
import TreeView from "./TreeView";

const CachedTreeView = ({ treeBranch, editNodeValue }) => {
  // const changeTree = (nodeData) => console.log(nodeData);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    if (Object.keys(treeBranch).length && treeBranch) {
      setList((prev) => [...prev, treeBranch]);
    } else {
      setList([]);
    }
  }, [treeBranch]);

  return (
    <div className="branchWrapper">
      {treeBranch
        .filter((item) => Object.keys(item).length)
        .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i)
        // .filter(
        //   (v, i, a) =>
        //     a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
        // )
        .map((branch, index) => {
          return (
            <div id="treeWrapper" key={`${index} - ${branch.id}`}>
              <TreeView branch={branch} editNodeValue={editNodeValue} />
            </div>
          );
        })}
    </div>
  );
};

export default CachedTreeView;
