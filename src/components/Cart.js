import React from 'react'
import Offers from "./Offers";
import Navbar from "./Navbar";
import Email from './Email'
import Footer from './Footer'
import axios from 'axios';
import {useEffect,useState} from 'react'
const Cart = () => {
const [Cart ,setCart] =useState([])
  useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/carts`);
       console.log(res.data.products)
      const ProductsId=res.data.products.map((product)=>product.productId)
      console.log(ProductsId)
      const productDetails = await Promise.all(
        ProductsId.map( async(productId) => {
          console.log(productId)
          const productRes = await axios.get(`http://localhost:5000/products/${productId}`);
          console.log( productRes.data.product)
          return productRes.data.product;
          //64c3ccb10d3ce64de665524a
          //64c3430401b6dc096a055b7a
        })

      );
      console.log(productDetails)
      setCart(productDetails)
    } catch (err) {}
  };
  getProducts();
}, []);
  return (
   <>
    <Offers />
     <Navbar />
     <div class="container">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="" width="72" height="57"/>
      <h2>Your cart</h2>
     
    </div>
    <div class="py-5 text-center">
    <div class="row g-5">
      <div class="col-md-5 col-lg-12 order-md-last">
        
        <ul class="list-group mb-3">
          {Cart?.map((item)=>(
 <li class="list-group-item">
 <div>
     <div class="row">
         <div class="col-md-6">
         <h4 class="my-0 mb-5">{item.title}</h4>
   <img src={item.img} class="img-fluid" width='200' height='200'/>
         </div>
         <div class="col-md-6 ">
       
         <small class="text-body-secondary ms-5 mt-5 col-5 h5 position-absolute  start-50 translate-middle" style={{top:'50px'}}> {item.desc.slice(0,50)}</small>
         <span class="text-body-secondary h5  position-absolute top-50 start-50 translate-middle" >Price: {item.price}</span>
         <button class="btn btn-outline-success btn-md mb-5 position-absolute bottom-0 start-50 translate-middle-x">Continue Shipping</button>
         </div>
     
     </div>
    
 </div>

</li>
          ))}
         
       
        </ul>

       
          <div class="input-group d-flex justify-content-center">
            <button class="btn btn-success col-6 btn-lg">Total:2000 </button>
           </div>
       
      </div>
      </div>
      </div>
      </main>
      </div>
     <Email/>
     <Footer/>
   </>
  )
}

export default Cart