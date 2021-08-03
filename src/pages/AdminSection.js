import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../Firebase';

const AdminSection = () => {
  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
}

  return (
    <div className="text-center">
    <div className="text-center mt-4 mb-4" >
    <button type="button" className="btn btn-primary btn-lg"  onClick={()=>{history.push("/addcategory")}}>Add Category</button>
    </div>
   
    <button type="button" className="btn btn-secondary" onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default AdminSection
