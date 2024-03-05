
import './App.css'
import User from './components/User'
import Details from './components/Details'

function App() {

  const cours = 'React';
  const actorsTab = ['zendaya','thimothy Chalamet']

  return(
    <>
      <User cours={cours}/>
      <Details id={42} title={'Dune 2'} synopsis={"C'etait beacoup trop bien"} actors = {actorsTab}/>
    </>
  
  )
}
 

export default App
