import React, { useState, useCallback } from "react";
import "./App.css";
import { initialState } from "./initData";
import DBTreeView from "./components/DBTreeView";
import CachedTreeView from "./components/CachedTreeView";
import Sidebar from "./components/Sidebar";

const getParent = function (root = [], parent) {
  let res = {};
  if ((!root && !root.length) || false) return null;
  const theRoot = root[0]?.children[0]?.__rd3t.id;
  const theParent = parent?.children[0]?.__rd3t.id;
  if (!theRoot && !theParent) return null;
  if (theRoot === theParent) {
    return (res = { ...theRoot, theParent });
  } else {
    return getParent(root[0]?.children, parent);
  }
};

function App() {
  const [current, setCurrent] = useState("");
  const [show] = useState([]);
  const [data, setData] = useState(initialState);
  const [verify, setVerify] = useState(false);
  const [text, setText] = useState();
  const [treeBranch, setTreeBranch] = React.useState({});
  const [choosedBranch, setChoosedBranch] = React.useState([]);
  const [onApplyLoadedData, setOnClickData] = React.useState([]);
  const [editedNodevalue, editNodeValue] = React.useState(null);

  React.useEffect(() => {
    if (Object.keys(treeBranch).length && treeBranch) {
      // getParent(choosedBranch, treeBranch);
      setChoosedBranch((prev) => [...prev, treeBranch]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeBranch]);

  const handleClick = (nodeData, uniqid) => {
    // const one = { uniqid, ...nodeData };
    // console.log(one);
    setTreeBranch(nodeData);
  };

  const passDataOnClick = () => {
    console.log(choosedBranch);
    setOnClickData(choosedBranch);
  };

  const reset = () => {
    setData(initialState);
    setTreeBranch({});
    setOnClickData([]);
    setChoosedBranch([]);
  };

  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  const traverse = (obj) => {
    if (!obj) return null;

    if (obj.left) {
      traverse(obj.left);
    }

    if (obj.value) {
      let children = [];

      if (obj.left) {
        children = [...children, traverse(obj.left)];
      }

      if (obj.right) {
        children = [...children, traverse(obj.right)];
      }

      return {
        name: String(obj.value),
        children:
          children.length && [traverse(obj.left)].length ? children : [],
      };
    }
    if (obj.right) {
      traverse(obj.right);
    }
  };

  const searchNumber = (value) => {
    var verify = search(value);
    if (verify) {
      setText("Found");
    } else {
      setText("Not Found");
    }
    setVerify(true);
  };

  const search = (value) => {
    var found = false;
    var current = data.root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  };

  const formatData = (data) => {
    const res = Object.keys(data).map((key) => {
      return {
        name: data[key] && data[key].value ? String(data[key].value) : key,
        children: traverse(data.root) ? [traverse(data.root)] : null,
      };
    });

    if (res[0].children) {
      return res[0].children;
    }

    return res;
  };

  function insert(value) {
    let node = new Node(value);
    if (!data.root) setData({ root: node });
    else {
      let current = data.root;
      while (!!current) {
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
    setVerify(false);
    return data;
  }

  return (
    <main className="App">
      <div className="tree-container">
        <CachedTreeView
          treeBranch={onApplyLoadedData}
          onReset={reset}
          editNodeValue={editNodeValue}
        />
        <DBTreeView
          data={formatData(data)}
          handleClick={handleClick}
          onReset={reset}
          treeBranch={onApplyLoadedData}
        />
      </div>

      <Sidebar
        editedNodevalue={editedNodevalue}
        current={current}
        setCurrent={setCurrent}
        insert={insert}
        data={data}
        array={show}
        searchNumber={searchNumber}
        verify={verify}
        text={text}
        reset={reset}
        passDataOnClick={passDataOnClick}
        choosedBranch={choosedBranch}
      />
    </main>
  );
}

export default App;
