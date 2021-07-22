import React from "react";
import Tree from "react-d3-tree";

export const TreeView = ({ changeTree, branch }) => {
  return (
    <>
      <Tree
        onClick={changeTree}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#d16ba5",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "2rem",
                },
              },
            },
            leafNode: {
              circle: {
                fill: "#5ffbf1",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "2rem",
                },
              },
            },
          },
        }}
        collapsible={false}
        // orientation="vertical"
        translate={{
          x: 20,
          y: 350,
          scale: 0.2,
        }}
        data={branch}
      />
      <Tree
        onClick={changeTree}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#d16ba5",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "2rem",
                },
              },
            },
            leafNode: {
              circle: {
                fill: "#5ffbf1",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "2rem",
                },
              },
            },
          },
        }}
        collapsible={false}
        // orientation="vertical"
        translate={{
          x: 20,
          y: 350,
          scale: 0.2,
        }}
        data={branch}
      />
    </>
  );
};

const CachedTreeView = ({ treeBranch, onReset }) => {
  const changeTree = (nodeData) => console.log(nodeData);
  const [list, setList] = React.useState([]);

  React.useEffect(() => setList((prev) => [...prev, treeBranch]), [treeBranch]);

  console.log(list);

  return (
    <div className="branchWrapper">
      {list
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
