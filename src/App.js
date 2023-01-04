import { useState } from 'react';
import Header from './page/Home/Header/Header';
import Main from './page/Home/Main/Main';
function App() {
  const [count , setCount] = useState(0)
  const [items, setItems] = useState([])
  const [openCard,setOpenCard] = useState(false)
  return (
    <>
    <Header count={count} items={items} setItems={setItems} openCard={openCard} setOpenCard={setOpenCard}/>
    <Main count={count} setCount={setCount} items={items} setItems={setItems} openCard={openCard} setOpenCard={setOpenCard}/>
    </>
  );
}

export default App;
