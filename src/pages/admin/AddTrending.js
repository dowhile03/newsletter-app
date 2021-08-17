import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { db, auth } from '../../Firebase';

const AddTrending = () => {
    const history = useHistory()
    const [auther, setAuther] = useState("");
    const [comapany, setCompany] = useState("");
    const [linkAddress, setLinkAddress] = useState("");
      const [cost, setCost] = useState("");
      const [category, setCategory] = useState("");
      const [nameNewsletter, setNameNewsletter] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();

        db.collection('trending-newsletters')
        .add({
            name:nameNewsletter,
            auther:auther,
            company:comapany,
            link:linkAddress,
            cost: cost,
            category:category
        })
        .then(() =>{ alert("done!")
        setAuther("");
        setCompany("");
        setLinkAddress("");
        setCost("");
        setCategory("");
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
       <div className="text-white">
        <h1>Admin section</h1>
        <button onClick={logoutHandler}>Logout</button>
<br /> <br />
<form className="container" onSubmit={submitHandler}>
<div className="mb-3">
  <label htmlFor="author" className="form-label">Name of Newsletter</label>
  <input type="text" className="form-control"   value={nameNewsletter} onChange={(e) => setNameNewsletter(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="author" className="form-label">Author</label>
  <input type="text" className="form-control"   value={auther} onChange={(e) => setAuther(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="company" className="form-label">Company</label>
  <input type="text" className="form-control" value={comapany} onChange={(e) => setCompany(e.target.value)}></input>
</div>

<div className="mb-3">
  <label htmlFor="address" className="form-label">image LInk</label>
  <input type="text" className="form-control" value={linkAddress} onChange={(e) => setLinkAddress(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="cost" className="form-label">Cost</label>
  <input type="text" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="cost" className="form-label">Category</label>
  <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} ></input>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
}

export default AddTrending
