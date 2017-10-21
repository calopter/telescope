import React from 'react'
import * as d3 from 'd3'
import './App.css'

const TreeView = function(treeData) {
    const makeTree = d3.tree(); //.size([1000, 1000]);
    const root = d3.hierarchy(treeData);
    const treeLayout = makeTree(root);
    const nodes = treeLayout.descendants();

    return (
        <div className="tree-container">
          {nodes.map((node, i) =>
            <Card key={i} 
              style={{transform: `translate(${node.x}px, ${node.y}px)`}}
              {...node} />
          )}
        </div>
    );
}

const Card = ({type, title, mood}) =>
    <section className={type}>
        <p className="title">{title}</p>
        <div className="mood">{mood}</div>
        <button>remove</button>
    </section>

const root = {
    type: "period-card",
    title: "ecce app",
    mood: "light"
}

const init = [
  {
    type: "period-card",
    title: "node1",
    mood: "light"
  },
  {
    type: "period-card",
    title: "node2",
    mood: "light"
  },
  {
    type: "period-card",
    title: "node3",
    mood: "light"
  }
]

const initTree = {
  cards: [root],
  children: [
    {
      cards: init,
      children: []
    }
  ]
}

const App = () =>
    <div className="app">
        <Card {...root} />
    </div>

export default App
