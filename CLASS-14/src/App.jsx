import './App.css'
import ClickCounter from './components/ClickCounter'
import FormExample from './components/FormExample'
import InputHandler from './components/InputHandler'
import MultipleEventHandling from './components/MultipleEventHandling'
import ParameterPassingExample from './components/ParameterPassingExample'
import ProductList from './components/ProductList'

function App() {
  

  return (
    <>
      <ProductList/>
      <FormExample/>
      <MultipleEventHandling/>
      <ParameterPassingExample />
      <InputHandler/>
      <ClickCounter/>
    </>
  )
}

export default App
