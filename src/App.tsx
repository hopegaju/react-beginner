import ListGroup from "./components/ListGroup"; 
function App(){
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  return <div>
    <ListGroup heading="Cities" items={items} OnSelectItem={(item) => alert(item)} />
  </div>
}

export default App;