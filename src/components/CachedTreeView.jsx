import React from "react";
import TreeView from "./TreeView";

const CachedTreeView = ({ treeBranch, onReset }) => {
  const changeTree = (nodeData) => console.log(nodeData);
  const [list, setList] = React.useState([]);

  // React.useEffect(() => {
  //   if (Object.keys(treeBranch).length && treeBranch) {
  //     setList((prev) => [...prev, treeBranch]);
  //   } else {
  //     setList([]);
  //   }
  // }, [treeBranch]);

  return (
    <div className="branchWrapper">
      {treeBranch
        .filter((item) => Object.keys(item).length)
        .map((branch, index) => (
          <div id="treeWrapper" key={`${index} - ${branch.name}`}>
            <TreeView branch={branch} changeTree={changeTree} />
          </div>
        ))}
    </div>
  );
};

export default CachedTreeView;
