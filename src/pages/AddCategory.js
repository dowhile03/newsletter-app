import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import CategoriesCard from '../components/Categories/CategoriesCard';
import { db, auth } from '../Firebase';

const AddCategory = () => {
    const history = useHistory()
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
        .then(() =>{ alert("done!")
        setCategory("");
        setDescription("");
        setColor("");
        setLinkAddress("");
    })
        .catch(error => alert(error));
    }

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
       <div>
        <h1>Admin section</h1>
        <button onClick={logoutHandler}>Logout</button>
<br /> <br />
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
  <label htmlFor="color" className="form-label">color</label>
  <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)}></input>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">link address</label>
  <input type="text" className="form-control" value={linkAddress} onChange={(e) => setLinkAddress(e.target.value)} ></input>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
<CategoriesCard/>


       </div>
    )
}

export default AddCategory
