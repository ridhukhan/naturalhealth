import { Routes,Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Nav/Navbar'
import saffron1 from "../src/assets/saffron1.jpeg"
import saffron2 from "./assets/saffron2.jpeg"
import saffron3 from "./assets/saffron3.jpeg"
import Success from './Pages/Success'

import saffron4 from "./assets/saffron4.jpeg"
import saffron5 from "./assets/saffron5.jpg"
import saffron6 from "./assets/saffron6.jpg"
import saffron7 from "./assets/saffron7.jpg"
import saffron8 from "./assets/saffron8.jpg"
import { useRef, useState } from 'react'
import axios from 'axios'

function Home() {
  const price =1400
  const [quantity,setQuantity]=useState(1)
const formRef = useRef(null)
const navigate =useNavigate()

const handleorderclick=()=>{
  formRef.current.scrollIntoView({
    behavior:"smooth"
  })
}
const submitOrder = async  (e)=>{
  e.preventDefault();

  const name =e.target.name.value;
  const phone =e.target.phone.value;
  const address =e.target.address.value;
  const quantity=e.target.quantity.value;
  const price=e.target.price.value;

 await  axios.post("https://backend-5zfe.onrender.com/order",{

  name,
  phone,
  address,
  quantity,
  price
});
e.target.reset()
navigate("/success")

}
  return (
   <div>


<Navbar/>
<div className='saffron1'>

<img src={saffron1} alt="saffron1" />

</div>
<button className='button1' onClick={handleorderclick}>Order Now</button>
<div className='saffron2'>
  <img src={saffron2} alt="saffron2" />

  <h2  style={{textAlign:"center", color:"black",  backgroundColor:"yellow", margin:"5%", borderRadius:"19px", boxShadow:"4px 7px 15px black"}}>Saffron time develop প্রোডাক্ট<br /> এর উপকারিতা :</h2>

<ul>
  <li>দ্রুত বীর্যপাত বন্ধ করবে।</li>
<li>বীর্য পাতলাকে ঘাড় করবে৷</li>
<li>মিলনে সময় বাড়াবে ২৫-৩৫ মিনিট ।</li>
<li>প্রথম বার সহ-বাস করার পর দ্বিতীয় বার সহবাস
করার মত ভাল ফিলিংস আসবে।</li>
<li>রাতে ২-৩ বার সহবাস করতে পারবেন।</li>
<li>হরমোন বৃদ্ধি করবে।</li>
<li>শুক্রাণুর উৎপাদন করবে।</li>
<li>লিঙ্গ মোটা ও লম্বা করবে।</li>
<li>উত্তানজনিত সমস্যা দূর করবে।</li>
<li>গোপনাঙ্গের শীথিলতাদূর করে।
নিস্তেজতা দূর করে।</li>
</ul>
<button className='button1'  onClick={handleorderclick}>Order Now</button>

</div>
<h4 style={{textAlign:"center"}}>
  বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ <br />(BCSIR) থেকে ল্যাব টেস্ট, তাই শরীরের জন্য শতভাগ নিরাপদ
</h4>
<img src={saffron4} alt="saffron4" className='saffron4'/>
<div className='bbq'>
  <img src={saffron3} alt="saffron3"  className='saffron3'/>
  <h2>আমদের থেকে কেন কিনবেন?</h2>
<ul>
<li>আমরা দিচ্ছি 100% অরজিনাল প্রোডাক্ট।</li>
<li>100% ন্যাচারাল এবং প্রাকৃতিক উপাদান দ্বারা তৈরি করা টাইম ডেভেলপ প্রোডাক্ট।</li>
<li>শতভাগ প্রাকৃতিক কেমিক্যাল মুক্ত।</li>
<li>প্রোডাক্ট হাতে পাওয়ার পরে যাচাই বাছাই করে মূল্য পরিশোধ করতে পারবেন।</li>
<li>শতভাগ প্রাকৃতিক 100% সাইড এফেক্ট পার্শ্ব প্রতিক্রিয়া মুক্ত</li>
<li>রাতে ২-৩ বার সহবাস করতে পারবেন।</li>

</ul>
<button className='button1'  onClick={handleorderclick}>Order Now</button>

</div>
<h2 style={{textAlign:"center"}}>আমাদের শত শত <br />হ্যাপি কাস্টমারের মধ্যে কিছু রিভিউ:</h2>
<div className='rivew'>
  <img src={saffron6} alt="saffron6" />
  <img src={saffron7} alt="saffron7" />
  <img src={saffron8} alt="saffron8" />
  <img src={saffron5} alt="saffron5" />


</div>
<div className='pricet'>
  <h3>রেগুলার মূল্য <span className='tk2100'>২১০০ টাকা।</span></h3>
  <h2>অফার মূল্য ১৪০০ টাকা।</h2>
  <h2 className='lastt'>সারা বাংলাদেশে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি</h2>
</div>
<div className='data'>

  <h3>নিচের ফর্মটি পূরণ করে অর্ডার করুন</h3>
  <form onSubmit={submitOrder} action="" method="" className='userform' ref={formRef}>

<input type="text" placeholder='আপনার নাম' name='name' required/>
<input type="text" placeholder='আপনার নাম্বার' name='phone'  required/>
<input type="text" placeholder='জেলা থানা এলাকা' name='address'  required/>

<h2>QUANTITY:</h2>
<div className='incb'>
<button onClick={()=>setQuantity(quantity+1)} >+</button>
<h3   >{quantity}</h3>
<button    onClick={()=>setQuantity(quantity>1 ? quantity-1 : quantity)}>-</button>
</div>

<h2>PRICE:{price*quantity}</h2>
<button type="submit"  className='button1'>অর্ডার কনফার্ম করুন</button>






  </form>
</div>

   </div>
  )
}




function App(){

  return(

    <Routes>

      <Route path='/'  element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
    </Routes>
  )
}
export default App