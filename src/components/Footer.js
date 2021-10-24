import React from "react";

const Footer = () => {
  return (
    <div>
    <br /> <br /> <br />
    <hr style={{color:"white"}} />
    <div className="row">
    <button className="col-md-6 " style={{background:"transparent",color:"white",border:"none",textAlign:"right"}}>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <button className="col-md-6" style={{background:"transparent",color:"white",border:"none",textAlign:"left"}}>Terms of use</button>
    
    </div>
    <div className="text-center text-white mt-5">
    <span style={{color:"orange"}}>Follow the Founders</span>  on <i className="fab fa-twitter"></i>: <a target="_blank" href="https://twitter.com/thekartikey11">@thekartikey11</a>&nbsp;<a target="_blank" href="#">@vipulsharma</a><br /><br />
    <span className="text-white">Copyright &copy; <span style={{color:"orange"}}>Newsletter</span> App</span>
    </div>
    
    </div>
  );
}

export default Footer;