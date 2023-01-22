import '../styler/fifth.css'
import { useState ,useEffect} from 'react';


const Fifth = () => {
    let [Name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [mobileNumber,setMobile]=useState("")
    let[error,setError]=useState(false)
   
    let handleSubmit=(e)=>{
        e.preventDefault()
        if(Name.length==0||email.length==0||mobileNumber.length==0){
            setError(true)
        }
    
    let data={Name,email,mobileNumber}
    // console.log(data);
    fetch('http://localhost:3000/database',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })

     alert('register successfully')
}
    return ( 
        <div className="fifth">
            <div className="fifth1">
                <h1>GET IN TOUCH</h1>
                <p>please complete the form and we will<br/> get back to you</p>
            </div>
            <div className="fifth2">
                <form action="" onSubmit={handleSubmit}>
                    <label className='priya1' htmlFor="">Name</label>
                    <br/>
                    
                    <input type="text" name="name"   required  value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"  />
                  <br/>
                  
                  <label className='priya1' htmlFor="">Email*</label>
                  <br/>
                    <input type="email"  required value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder="Email address"/>
                    <br/>
                 <label className='priya' htmlFor="">Mobile Number</label>
                 <br/>
                 <input type="tel"  minlength="10" maxlength="10"  required value={mobileNumber} onChange={(e)=>setMobile(e.target.value)}placeholder="mobilenumber" />
                 <br/>
                 <button type='submit'>Register Now</button>
                </form>
            </div>
        </div>
     );
}
 
export default Fifth;