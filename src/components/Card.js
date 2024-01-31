import React,{useState,useRef,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatchCart,useCart} from './ContextReducer'
export default function Card(props) {
  let dispatch= useDispatchCart();
  let data=useCart();
  const priceRef=useRef();
 let options= props.options;
 let priceOptions = Object.keys(options);
 let navigate = useNavigate()
 const [qty, setQty] = useState(1)
 const [size, setSize] = useState("")


 let foodItem = props.item;

 const handleClick = () => {
   if (!localStorage.getItem("token")) {
     navigate("/login")
   }
 }
 const handleQty = (e) => {
   setQty(e.target.value);
 }
 const handleOptions = (e) => {
   setSize(e.target.value);
 }

const handleAddToCart =async()=>{

  let food = []
  for (const item of data) {
    if (item.id === props.foodItem._id) {
      food = item;

      break;
    }
  }
  console.log(food)
  console.log(new Date())
  if (food !== []) {
    if (food.size === size) {
      await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
      return
    }
    else if (food.size !== size) {
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size ,img: props.imgSrc})
      console.log("Size different so simply ADD one more to the list")
      return
    }
    return
  }

await dispatch({ type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
}
useEffect(() => {
  setSize(priceRef.current.value)
}, [])

let finalPrice = qty * parseInt(options[size]); 
  return (
    <div>
       <div><div className ="card" style={{backgroundColor: 'black', color: 'white',"width": "18rem","maxHeight":"360px", border: '0.5px solid grey'}}>
  <img src={props.foodItem.img} className ="card-img-top" alt="..." style={{height: "120px", objectFit:"fill"}}/>
  <div className ="card-body">
    <h5 className ="card-title">{props.foodItem.name}</h5>

    <div className= 'container w-100'>
        <select className='m-2 h-100  bg-success rounded'onChange={(e)=>setQty(e.target.value)}>
            {Array.from (Array (6),(e,i)=>{
                return(
                    <option key={i+1} value= {i+1}>{i+1} </option>
                )
            })}
        </select>
        <select className='m-2 h-100   bg-success rounded text-black rounded" style={{ select: "#FF0000" }}'  ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
         {
          priceOptions.map((data)=>{
            return <option key={data} value={data}>{data}</option>
          })
         }
        </select>
        <div className='d-inline h-100'>
        ₹{finalPrice}/-
        </div>
    </div>
    <hr>
    </hr>
   
     
  
    <button className ={`btn btn-success justify center ms-1`}onClick ={handleAddToCart}>Add To Cart</button>

   
  </div>
</div>
</div>
    </div>
  )
}
