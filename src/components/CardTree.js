import React from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import { makeRemoveCard } from '../actions'
import NewCard from './NewCard'
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

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { addCard: false }
  }

  render() {
    const {dispatch, data: {id, type, title, mood}, x, y} = this.props
    const position = {transform: `translate(${y}px, ${x}px)`}
    const cardBody = (
          <div>
            <button onClick={() => this.setState({addCard: true})}>add child</button>
            <p className='title'>{title}</p>
            <div className='mood'>{mood}</div>
            <button onClick={() => dispatch(makeRemoveCard(id))}>
              [x]
            </button>
          </div>
    )

    return (
      <div className={`${type}-card`} style={position}>
        { this.state.addCard ? 
            <NewCard targId={id} 
                     onAdd={() => this.setState({addCard: false})}/> :
            cardBody }
      </div>
    )
  }
}

Card = connect()(Card)

export default TreeView
