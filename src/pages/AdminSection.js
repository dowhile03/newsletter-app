import React,{useState} from 'react'
import { db } from '../Firebase';

const AdminSection = () => {

    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [linkAddress, setLinkAddress] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        db.collection('categories').add({
            cat:category,
            description:description,
            color:color,
            link:linkAddress
        })
        .then(() => alert("done!"))
        .catch(error => alert(error));
    }

    const logoutHandler = () => {

    }

    return (
       <div>
        <h1>Admin section</h1>
        <button onClick={logoutHandler}>Logout</button>
<br /> <br />
<form className="container" onSubmit={submitHandler}>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">category</label>
  <input type="text" className="form-control"  aria-describedby="emailHelp" value={category} onChange={(e) => setCategory(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">description</label>
  <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">color</label>
  <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}></input>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">link address</label>
  <input type="text" className="form-control" value={linkAddress} onChange={(e) => setLinkAddress(e.target.value)} ></input>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>


       </div>
    )
}

export default AdminSection
