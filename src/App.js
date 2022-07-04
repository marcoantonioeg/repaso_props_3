import React from 'react'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      {/*Product name, description, price */}
      <Product name="Amazon echo" description="Your AI system" price={59.99}/>
       {/*Product name, description, price */}
       <Product name="Iphone 12" description="The best Iphone" price={1200}/>
        {/*Product name, description, price */}
        <Product name="Macbook pro" description="Your favorite computer" price={2500}/>
         {/*Product name, description, price */}
    </div>
  )
}

export default App