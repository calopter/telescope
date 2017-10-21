import React from 'react'
import CardTree from './CardTree.js'
import initTree from '../resources/initTree.json'
import '../stylesheets/App.css'

const App = () =>
    <div className="app">
        <CardTree {...initTree} />
    </div>

export default App
