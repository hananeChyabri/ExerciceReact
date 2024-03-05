
import './App.css'
import ListProduit from './components/ListProduit.jsx';
import { nanoid } from 'nanoid';


function App() {

  const produittist = [
    {id: nanoid(), nom: 'Lait', prix: 25 , EnPromo: true},
    {id: nanoid(), nom: 'Chocolat', prix: 15 , EnPromo: false},
    {id: nanoid(), nom: 'riz', prix: 25 , EnPromo: true},
    {id: nanoid(), nom: 'Lait', prix: 25 , EnPromo: false},
    {id: nanoid(), nom: 'pates', prix: 7 , EnPromo: true},
  ]

 

  return (
    <ListProduit produits={produittist} />
  )

}

export default App
