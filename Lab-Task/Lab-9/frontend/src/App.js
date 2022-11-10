
import './app.css'
import {useState , useEffect} from 'react'
import axios from 'axios'
function App() {
  const [product , setProduct] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/api/products').then((res)=>{
      setProduct(res.data)
    }).catch((e)=>{
      console.log(e)
    })
  },[])
  console.log(product)
  return (
    <div className="App">
      <div className='main'>
      {
        product.map((data)=>{
          return(
            <div className='card'>
                 <h3>{data.name}</h3>
                 <p>{data.detail}</p>
                 <p>{data.price}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
