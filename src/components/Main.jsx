import React from 'react'

export default function Main() {
  return (
    <>
    <div className='box' style={{backgroundColor:"#003b95",width:"100%",height:"350px"}}>
        <div className='Header d-flex aling-items-center ' style={{width:"100%",height:"50px"}}>
            <h1 style={{color:"white", marginLeft:"400px"}}>Booking.com</h1>
            <h4 style={{color:"white",marginLeft:"300px",marginTop:"8px"}}>INR</h4>
            <i style={{color:"white",marginLeft:"50px",marginTop:"15px"}} class="fa-regular fa-circle-question"></i>
            <h4 style={{color:"white",marginLeft:"50px",marginTop:"6px"}}>List your property</h4>
            <button className='btn btn-light'style={{marginLeft:"50px",marginTop:"8px",color:"blue"}}> Register</button>
            <button className='btn btn-light'style={{marginLeft:"50px",marginTop:"8px",color:"blue"}} > Login</button>
        </div>
        <div className='d-flex aling-items-center mt-4'>
        <button className='btn  d-flex p-3 'style={{marginLeft:"400px",height:"50px",color:"white"}}> <i class="fa-solid fa-hotel"></i><p style={{marginLeft:"10px"}}>Stay</p></button>
        <button className='btn  d-flex p-3' style={{marginLeft:"20px",height:"50px",color:"white"}}> <i class="fa-solid fa-plane-departure"></i><p style={{marginLeft:"10px"}}>Flights</p></button>
        </div>
        <h1 style={{color:"white", marginLeft:"400px",marginTop:"50px"}}>Find your next stay</h1>
        <h3 style={{color:"white", marginLeft:"400px",marginTop:"10px"}}>Search deals on hotels, homes, and much more...</h3>
    </div>
    <div style={{ marginLeft:"400px",backgroundColor:"gold",width:"50%",height:"50px",borderRadius:"8px",marginTop:"-25px"}}className='Header d-flex aling-items-center p-1'>
        <input placeholder='  Where are you going?' type="text" name="" id="" style={{borderRadius:"8px",width:"300px",}} className='ms-2'/>
        <input placeholder='  Check in - check out' type="text" name="" id=""  style={{borderRadius:"8px",width:"200px"}} className='ms-2' />

        <input placeholder='   2 adults . 0 children . 1 room' type="text" name="" id=""  style={{borderRadius:"8px",width:"300px"}} className='ms-2' />
        <button className='btn btn-primary ms-3' style={{width:"100px"}}>Search</button>
    </div>
     
    <div class="form-check mt-3" style={{ marginLeft:"400px"}}>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I'm traveling for work
  </label>
  </div>
    <div style={{ marginLeft:"400px",width:"50%",height:"150px",borderRadius:"8px"}} className='mt-5 border ' >
        <h3 className='m-4'>Book and save 7% on Rentalcars.com in vouchers</h3>
        <a href="" className='ms-4'>See promotion details</a>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3" alt="" style={{width:"210px",marginLeft:"748px",marginTop:"-100px",borderRadius:"8px"}} />
    </div>
    <div style={{ marginLeft:"400px"}} className='mt-5'>
    <h3>Offers</h3>
    <h4>Promotions, deals, and special offers for you</h4>
    </div>
    <div style={{ marginLeft:"400px",width:"50%",height:"150px",borderRadius:"8px",position:"absolute"}} className=' promo mt-2 border  '>
     <h4 className='m-3'>Seize the moment!</h4>
     <h5 className='ms-3'>Save 15% or more when you book and stay before October 1, 2024</h5>
     <button className='btn btn-primary ms-3 '>Find Getaway Deals</button>
     <img src="https://www.savingbrights.com/wp-content/uploads/2024/01/istockphoto-1160947136-612x612-1.jpg" alt="" style={{width:"210px",marginLeft:"748px",marginTop:"-140px",borderRadius:"8px"}}/>

    </div>
   
    
    </>
  )
}
