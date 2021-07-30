import React from 'react'
import Classes from './CategoriesCard.module.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const CategoriesCard = () => {

    let X = Math.random() * 256;
    let Y = Math.random() * 256;
    let Z = Math.random() * 256;
    const randomColor = "rgb(" + X + "," + Y + "," + Z + ")";

    return (
        <div>
        <div className = "container bootstrap snippets bootdeys">
        <div className = "row">
            <div className = "col-md-4 col-sm-6" style = {{marginTop:"30px"}}>
                <div className = {Classes['card-big-shadow']}>
                    <div className={`${Classes.card} ${Classes['card-just-text']}`} data-background="color" data-color="blue" data-radius="none">
                        <div className={Classes.content}>
                            <h6 className={Classes.category}>category</h6>
                            <h4 className={Classes.title}><a href="#">Technology</a></h4>
                            <p className={Classes.description}>What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                        </div>
                    </div> 
                </div>
            </div>
            <div className = "col-md-4 col-sm-6"  style = {{marginTop:"30px"}}>
            <div className = {Classes['card-big-shadow']}>
                <div className={`${Classes.card} ${Classes['card-just-text']}`} data-background="color" data-color="green" data-radius="none">
                    <div className={Classes.content}>
                        <h6 className={Classes.category}>category</h6>
                        <h4 className={Classes.title}><a href="#">Finance</a></h4>
                        <p className={Classes.description}>What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                    </div>
                </div> 
            </div>
        </div>
        <div className = "col-md-4 col-sm-6"  style = {{marginTop:"30px"}}>
        <div className = {Classes['card-big-shadow']}>
            <div className={`${Classes.card} ${Classes['card-just-text']}`} data-background="color" data-color="yellow" data-radius="none">
                <div className={Classes.content}>
                    <h6 className={Classes.category}>category</h6>
                    <h4 className={Classes.title}><a href="#">Programming</a></h4>
                    <p className={Classes.description}>What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> 
        </div>
    </div>

    </div>
    
    </div> 
    </div>
      
        
    )
}

export default CategoriesCard
