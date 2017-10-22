import { connect } from 'react-redux'
import CardTree from './CardTree'

const App = connect(state => state)(CardTree)

export default App
