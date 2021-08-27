import React,{useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { db } from '../../Firebase';


const EditCategory = () => {

    const params = useParams();
    const history = useHistory();

     console.log(params.id);
     const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [linkAddress, setLinkAddress] = useState("");

    const submitHandler = (e) => {
e.preventDefault();
       db.collection('categories').doc(params.id).update({
        cat:category,
        description:description,
        imgLink:color,
        link:linkAddress 
       })
       .then(()=>{
           alert("Changes have been made successfully")
           history.push("/adminsection");
       })
       .catch((err) => alert(err))
    }

    return (
        <div className="text-white">
        <h1>Edit details</h1> <br /><br />
        <form className="container" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">category</label>
          <input type="text" className="form-control"  aria-describedby="emailHelp" value={category} onChange={(e) => setCategory(e.target.value)} ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">imageLink</label>
          <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">address-bar link name</label>
          <input type="text" className="form-control" value={linkAddress} onChange={(e) => setLinkAddress(e.target.value)} ></input>
        </div>
        
        <button type="submit" className="btn btn-primary">Make Changes</button>
        </form>
        </div>
    )
}

export default EditCategory
