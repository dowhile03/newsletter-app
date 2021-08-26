import React,{useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Search from '../../components/Search';
import { db, auth } from '../../Firebase';

const AddNewsletter = () => {
  const params = useParams()
    const history = useHistory()
    const [auther, setAuther] = useState("");
    const [comapany, setCompany] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [linkAddress, setLinkAddress] = useState("");
      const [cost, setCost] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();

        db.collection('categories')
        .doc(`${params.id}`)
        .collection('newletter')
        .add({
            auther:auther,
            company:comapany,
            img_link:imgLink,
            link:linkAddress,
            cost: cost
        })
        .then(() =>{ alert("done!")
        setAuther("");
        setCompany("");
        setImgLink("");
        setLinkAddress("");
        setCost("");
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
  <label htmlFor="author" className="form-label">Author/company name</label>
  <input type="text" className="form-control"   value={auther} onChange={(e) => setAuther(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="company" className="form-label">name of the newsletter</label>
  <input type="text" className="form-control" value={comapany} onChange={(e) => setCompany(e.target.value)}></input>
</div>
<div className="mb-3">
  <label htmlFor="color" className="form-label">Image Link</label>
  <input type="text" className="form-control" value={imgLink} onChange={(e) => setImgLink(e.target.value)}></input>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">link to the blog</label>
  <input type="text" className="form-control" value={linkAddress} onChange={(e) => setLinkAddress(e.target.value)} ></input>
</div>
<div className="mb-3">
  <label htmlFor="cost" className="form-label">Cost</label>
  <input type="text" className="form-control" value={cost} onChange={(e) => setCost(e.target.value)} ></input>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
<Search placeholder={"Enter the newsletter to search"}/>
</div>
    )
}

export default AddNewsletter
