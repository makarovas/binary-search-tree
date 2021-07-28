import React from "react";
import Tree from "react-d3-tree";

const nodeStyle = ({ click }) => ({
  nodes: {
    node: {
      name: {
        stroke: "white",
        strokeWidth: 1,
        fontSize: "larger",
        fill: click ? "green" : "white",
      },
    },
    leafNode: {
      name: {
        stroke: "white",
        strokeWidth: 1,
        fontSize: "larger",
        fill: "white",
      },
    },
  },
});

const renderForeignObjectNode = ({
  nodeDatum,
  foreignObjectProps,
  handleClick,
}) => (
  <Node
    handleClick={handleClick}
    nodeDatum={nodeDatum}
    foreignObjectProps={foreignObjectProps}
  />
);

export const Node = ({ nodeDatum, foreignObjectProps, handleClick }) => {
  const [state, toggleState] = React.useState(false);
  console.log(nodeDatum);
  const handleClickState = () => {
    // toggleState((prev) => !prev);
    // // handleClick(nodeDatum, uniqid);
    // handleClick(nodeDatum);
  };
  const name = nodeDatum.name.substr(0, nodeDatum.name.indexOf(","));
  return (
    <g onClick={handleClickState}>
      <circle r={15} fill={state ? "blue" : "black"}>
        {/* <span style={{ display: "none" }}>{uniqid}</span> */}
      </circle>

      <foreignObject {...foreignObjectProps}>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
      </foreignObject>
    </g>
  );
};

const TreeView = ({ changeTree, branch }) => {
  const [nodeClicked, handleOnNodeClick] = React.useState(false);
  const nodeSize = { x: 40, y: 60 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return (
    <Tree
      renderCustomNodeElement={(rd3tProps, nodeData) =>
        renderForeignObjectNode({
          ...rd3tProps,
          foreignObjectProps,
          nodeData,
        })
      }
      onNodeClick={handleOnNodeClick}
      onClick={changeTree}
      styles={{
        nodes: {
          node: {
            circle: {
              fill: nodeClicked ? "black" : "#d16ba5",
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
      translate={{
        x: 100,
        y: 60,
        scale: 0.5,
      }}
      zoom={0.8}
      separation={{ siblings: 0.5, nonSiblings: 0.5 }}
      data={branch}
    />
  );
};

export default TreeView;
