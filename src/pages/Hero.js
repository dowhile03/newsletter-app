import React,{useState} from 'react'
import './Hero.css';
import CategoriesCard from "../components/Categories/CategoriesCard"
import Login from './Login';
import Signup from './Signup';
import { auth } from '../Firebase';
import { useHistory } from 'react-router-dom';

const Hero = () => {   
const [modalShow, setModalShow] = useState(false);
const history = useHistory()
const [signup, setSignUp] = useState(false);

auth.onAuthStateChanged((user) => {
  if(user) {
    history.push(`/newsletter/categories/${user.uid}`)

  }
})
const favouriteHandler = () => {
  auth.onAuthStateChanged((user) => {
    if(!user){
     setModalShow(true)
    }
    else {
        history.push(`/newsletter/categories/${user.uid}/favourites`)
    }
  })

}
    return (
        <section className="hero">
            <nav>
           
            <h1 className="text-white p-3">
            <span style={{ color: "orange" }}></span>Welcome to the world of
            <span style={{ color: "orange" }}> Newsletters!</span>
          </h1>
          <div className="mx-auto">
            <button className="favBtn mx-2" onClick={() => setModalShow(true)}>Login</button>
            <button className="favBtn mx-2" onClick={() => setSignUp(true)}>Signup</button>
            </div>
            <div className="p-5">
            <button className="favBtn" onClick={favouriteHandler}>Favourites</button>
            </div>
           
            </nav>
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        <Signup show={signup} onHide={() => setSignUp(false)}/>
          <CategoriesCard/>
        </section>
    )
}

export default Hero;