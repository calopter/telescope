import '../../stylesheets/APP.scss'

const Card = ({type, title, mood}) =>
    <section className={type}>
        <p ref="title">{title}</p>
        <div className="mood">{mood}</div>
        <button>remove</button>
    </section>

const CardList = (...cards) =>
    <div className="card-list">
        {cards.map((card, i) =>
          <Card key={i} {...card} />
        )} 
    </div>

const CardTree = ({cards, children}) =>
    <div className="tree">
        <div className="card-list">
            {cards.map((card, i) =>
                <Card key={i} {...card} />
            )}
        </div>
        <div className="children-call">
            {(children.length) ?
                children.map(child =>
                  <CardTree {...child} />
                ) :
              <div className="leaf"></div>
            }
        </div>
    </div>

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
        <CardTree {...initTree} />
    </div>

export default App
