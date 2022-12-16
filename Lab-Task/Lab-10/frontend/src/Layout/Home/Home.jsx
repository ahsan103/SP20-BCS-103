import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product/productCard'
import axios from 'axios'
function Home() {
  const [product , setProduct] = useState([]);
  useEffect(()=>{
    fetchData()
    
  },[])
  function fetchData(){
    axios
    .get("http://localhost:4000/api/product")
    .then(res => {
      setProduct(res.data)
    })
    .catch(err => console.error(err));
    console.log(product)
  }
  if(product){
    return (
    
      <div>
        {
          product.map((data)=>{
            return(
              <div key={data._id}>
                <ProductCard img={data.img} title={data.title} price={data.price} id={data._id}/>
              </div>
            )
          })
        }
      </div>
      )
  }
}

export default Home