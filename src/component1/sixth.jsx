import '../styler/sixth.css'
const Sixth = () => {
    return ( 
        <div className='six'>
            <div className='six1'>
             <a href="">ABOUT Us</a>
                <p >Rubixe™ is a global technology company specializing in disruptive<br/>technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process<br/>Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission<br/>to enable businesses to leverage the full potential of disruptive<br/>technologies to stay competitive in the market.</p>
            </div>
            <div className='six2'>
            <div className='six21'>
                {/* <a  href="">MENUS</a> */}
                
            </div>
            <div className='six22'>
            {/* <a  className="an" href="">MENUS</a> */}
                <ul>
                <l1><a  className="an" href="">MENUS</a></l1> 
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Career</a></li>
                </ul>
            </div>
            
        </div>
        <div className='six3'>
            <div className='six31'>
                {/* <a href="">LEARN MORE</a> */}
            </div>
            <div className='six32'>
              <ul>
                <li> <a href="">LEARN MORE</a></li>
              <li> <a href="">About</a></li>
               <li> <a href="">Contact Us</a></li>
              </ul>

            </div>
        </div >
        <div className='six4'>
        {/* <a href="">LEARN MORE</a> */}
            <p>ADDRESS</p>
            <p1>Novel Tech Park, 1st Floor, Hosur Rd, <br/>Kudlu gate, Bengaluru, Karnataka <br/>560068<br/>
Phone: 0804-717-8999<br/>
Email: hi@rubixe.com</p1>
<div className='soc'>
    <p>Social media</p>
    <div className='ina'><a href=""><img  height="20" width="20" src="/images/face.jpg" alt="" /></a>
   <a href=""> <img  height="20" width="20" src="/images/li.jpg" alt="" /></a></div>
    
</div>
        </div>
        
        </div>
    )      
}
 
export default Sixth;