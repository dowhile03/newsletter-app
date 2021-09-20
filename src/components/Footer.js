import React from "react";

const Footer = () => {
  return (
    <div>
    <br /> <br /> <br />
    <hr style={{color:"white"}} />
    <div classNam="row">
    <button className="col-md-6 " style={{background:"transparent",color:"white",border:"none",textAlign:"right"}}>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <button className="col-md-6" style={{background:"transparent",color:"white",border:"none",textAlign:"left"}}>Terms of use</button>
    
    </div>
    <div className="text-center mt-5">
    <span className="text-white">Copyright &copy; <span style={{color:"orange"}}>Newsletter</span> App</span>
    </div>
    
    </div>
  );
}

export default Footer;