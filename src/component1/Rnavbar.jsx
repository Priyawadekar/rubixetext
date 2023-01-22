import '../styler/rnavbar.css';
const Rnavbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav">
            <img width="250" src="/images/rlogo.png" alt="" />
        </div>
        <div className="lists">
            <ul>
                <li><a href="https://www.rubixe.com/">HOME</a></li>
                <li><a href="https://www.rubixe.com/services/">SERVICE</a></li>
                <li><a href="">PRODUCTS</a></li>
                <li><a href="">AI INTERNSHIP</a></li>
                <li><a href="">CAREER</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT US</a></li>
            </ul>
        </div>
        </div>
     );
}
 
export default Rnavbar;