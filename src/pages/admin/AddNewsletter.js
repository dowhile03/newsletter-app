import React,{useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Search from "../../components/Search/Search" ;
import { db, auth } from '../../Firebase';

const AddNewsletter = () => {
  const params = useParams()
    const history = useHistory()
    const [auther, setAuther] = useState("");
    const [newsletterName, setNewsLetterName] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [linkAddress, setLinkAddress] = useState("");
    const [isfree, setIsfree] = useState(true);
    const [isWeekly,setWeekly] = useState(false);
    const [isMonthly,setIsMonthly] = useState(false);
    const [isAnually,setIsAnually] = useState(false);
    const [description, setDescription] = useState("");
    const [addTags, setAddTags] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        db.collection('categories')
        .doc(`${params.id}`)
        .collection('newletter')
        .add({
            auther:auther,
            newsletterName:newsletterName,
            img_link:imgLink,
            link:linkAddress,
            isfree:isfree,
            isMonthly:isMonthly,
            isWeekly:isWeekly,
            isAnually:isAnually,
            description: description
        })
        .then(() =>{ alert("done!")
        setAuther("");
        setNewsLetterName("");
        setImgLink("");
        setLinkAddress("");
        setDescription("")
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
  <label htmlFor="company" className="form-label">Name of the newsletter</label>
  <input type="text" className="form-control" value={newsletterName} onChange={(e) => setNewsLetterName(e.target.value)}></input>
</div>
<div className="mb-3">
  <label htmlFor="company" className="form-label">Description</label>
  <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></input>
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
  <label htmlFor="address" className="form-label">Is the newsletter free</label>
<button type="button" className="btn btn-primary" onClick={() => {setIsfree(!isfree); }}>{(isfree)? "True":"False"}</button>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">Is the newsletter weekly</label>
<button type="button" className="btn btn-primary" onClick={() => {setWeekly(!isWeekly); }}>{(isWeekly)? "True":"False"}</button>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">Is the newsletter monthly</label>
<button type="button" className="btn btn-primary" onClick={() => {setIsMonthly(!isMonthly); }}>{(isMonthly)? "True":"False"}</button>
</div>
<div className="mb-3">
  <label htmlFor="address" className="form-label">Is the newsletter free</label>
<button type="button" className="btn btn-primary" onClick={() => {setIsAnually(!isAnually); }}>{(isAnually)? "True":"False"}</button>
</div>
<div>
<input type="text" className="form-control"></input>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
<Search placeholder={"Enter the newsletter to search"}/>
</div>
    )
}

export default AddNewsletter
