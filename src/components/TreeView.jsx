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
  editCashedNodeValue,
}) => (
  <Node
    handleClick={handleClick}
    nodeDatum={nodeDatum}
    foreignObjectProps={foreignObjectProps}
    editCashedNodeValue={editCashedNodeValue}
  />
);

export const Node = ({
  nodeDatum,
  foreignObjectProps,
  editCashedNodeValue,
}) => {
  const [active, setActive] = React.useState({
    value: null,
    status: false,
  });

  const toggleActiveNode = () => {
    setActive((prev) => ({ ...prev, status: !prev.status }));
  
    editCashedNodeValue((prev) => ({ ...prev, value: nodeDatum }));
  };
  const name = nodeDatum.name.substr(0, nodeDatum.name.indexOf(","));
  return (
    <g onClick={toggleActiveNode}>
      <circle r={15} fill={active.status ? "blue" : "black"} />
      <foreignObject {...foreignObjectProps}>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
      </foreignObject>
    </g>
  );
};

const nodeSize = { x: 40, y: 60 };
const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

const TreeView = ({ editCashedNodeValue, branch, cacheMode, changeValue }) => {
  const [nodeClicked, handleOnNodeClick] = React.useState(false);

  return (
    <Tree
      renderCustomNodeElement={(rd3tProps, nodeData) =>
        renderForeignObjectNode({
          ...rd3tProps,
          foreignObjectProps,
          nodeData,
          editCashedNodeValue,
        })
      }
      onNodeClick={handleOnNodeClick}
      // onClick={cacheMode ? changeValue : changeTree}
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
