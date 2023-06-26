import React from "react"
import style from './Home.module.css';
import NavBar from "../NavBar/NavBar";




function Home(){

    return(
        <>
        <div className={style.full}>
            <NavBar/>

        </div>
        </>
    )

}

export default Home