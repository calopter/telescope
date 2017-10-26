import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import { makeRemoveCard } from '../actions'
import '../stylesheets/CardTree.css'

const TreeView = (treeData) => {
    const makeTree = d3.tree()
                       .size([window.scrollWidth, window.scrollHeight])
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

let Card = ({dispatch, data: {id, type, title, mood}, x, y}) =>
    <section className={`${type}-card`}
      style={{transform: `translate(${y}px, ${x}px)`}}>
        <p className='title'>{title}</p>
        <div className='mood'>{mood}</div>
        <button onClick={() => dispatch(makeRemoveCard(id))}>
          [x]
        </button>
    </section>

Card = connect()(Card)

export default TreeView
