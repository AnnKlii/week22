import './App.css';
import Header from './component/Header';
import heroes from './heroes.json';
import Card from './component/Card';



function App() {
  return (
    <div className="App">
      <Header />
      {heroes.map((item, index) => {
        return <Card name={item.name} universe={item.universe} alterego={item.alterego} occupation={item.occupation} friends={item.friends} superpowers={item.superpowers} info={item.info} url={item.url} key={index} />
      })}
    </div>

  );
}

export default App;
