import React from 'react'
import * as d3 from 'd3'
import '../stylesheets/CardTree.css'

const TreeView = function(treeData) {
    const makeTree = d3.tree()
                       .size([window.scrollHeight, window.scrollWidth])
                       .nodeSize([184,272]);
    const root = d3.hierarchy(treeData);
    const treeLayout = makeTree(root);
    const nodes = treeLayout.descendants();

    return (
        <div className='tree-container'>
          {nodes.map((node, i) =>
            <Card key={i} {...node}/> )}
        </div>
    );
}

export const Card = ({data: {type, title, mood}, x, y}) =>
    <section className={type}
      style={{transform: `translate(${y}px, ${x}px)`}}>
        <p className='title'>{title}</p>
        <div className='mood'>{mood}</div>
        <button>remove</button>
    </section>

export default TreeView
