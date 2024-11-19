import Greeting from "./component/Greeting"
import Product from "./component/Product";

function getGreeting() {
  return "Good Morning";
}


function App() {

  // Getting data from backend
  const name = "john";
  const isLoggedIn = false;
  const price = 100;
  const discount = 0.1;
  
  const items = ["Apple", "Banana", "Orange", "Mango", "Jackfruit"];


  const products = [
    {
      imageUrl: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "200",
      name: "Orange"
    },
    {
      imageUrl: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "300",
      name: "Mango"
    },
    {
      imageUrl: "https://images.pexels.com/photos/5620868/pexels-photo-5620868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "400",
      name: "Jackfruit"
    },
    {
      imageUrl: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "450",
      name: "Banana"
    },
    {
      imageUrl: "https://images.pexels.com/photos/2291592/pexels-photo-2291592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "600",
      name: "Date"
    },
    {
      imageUrl: "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "800",
      name: "Apple"
    },
  ]

  const handleClick = () => {
    alert("The product is clicked");
};


  return (
    <>
      
      {/* <ul>
        {
          items.map(item => (
          <li className="text-2xl font-bold" key={item}>{item}</li>
        ))} */}
        
        
        
        {/* <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li> */}
      {/* </ul> */}
      
      
      
      
      
      {/* <Greeting></Greeting> */}
      {/* <h1 className="text=2xl font-bold text-center"> */}
        {/* {getGreeting()} Mr. {name} */}
        {/* {isLoggedIn ? "Welcome Back" : "Please log in"} */}
        {/* <p>Total price: ${price - (price * discount)}</p> */}

        


      {/* </h1> */}

    <div className="container mx-auto grid grid-cols-3 gap-5 py-20"> 
      {
        products.map(product => <Product
          key = {product.price}
          imageUrl={product.imageUrl}   
          price={product.price} 
          name={product.name}
          handleClick1 = {handleClick}>
          <h2>This is a product card</h2>
        </Product>
      )}
    </div>  
    </>
  )
}

export default App


// Rules for JSX
// 1. JSX => Only 1 parent element(Include ina div or section or react fragment <>)
// Self closing tag
// JSX Expression
// class vs className





// JSX = Javascript XML
// JSX extension JS -> HTML code Look a like 



// Components: Building Blocks / Reusable / Props
// 2 Componenets - Functional Component | Class Component - Life cycle method 
// Functional Component => JS Function => JSX

// Props = Properties ? Immutable cant change