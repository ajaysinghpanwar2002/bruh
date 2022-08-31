import React from 'react'
import h from "../images/h.png"
import mon from "../images/mon.png"
import exp from "../images/exp.png"
import react from "../images/react.png"
import nod from "../images/nod.png"
import yooo from "../images/yooo.gif"
// import js from "../images/js.jpg"
// import c from "../images/c.png"
function Home() {
  return (
    <>
      <div>
        <div className='AJ'>
          Hello, I'm Ajay Singh
        </div>
        <div className='BJ'>
          Mern stack developer
        </div>
        <img src={h} alt="" className='himg'></img>
        <img src={mon} alt="" className='mon'></img>
        <img src={exp} alt="" className='exp'></img>
        <img src={react} alt="" className='react'></img>
        <img src={nod} alt="" className='nod'></img>
      </div>
      {/* <div className='skill'>
        My best skills
      </div> */}

      <img src={yooo} alt=" " className='gif'></img>
      {/* <img src={js} alt=" " className='js'></img>
      <img src={c} alt=" " className='c'></img> */}

      <div className='abcd'>
      Languages and Tools:
      </div>
      <div className='skills'>
        <p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50" /> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50" /> </a><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50" height="50" /> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50" /> </a> <a href="https://flutter.dev" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="50" height="50" /> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="50" height="50" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50" /> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50" /> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50" height="50" /> </a> <a href="https://pugjs.org" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/pug.svg" alt="pug" width="50" height="50" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50" /> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="50" height="50" /> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer">  </a>  </p>
      </div>

      <div className='data'>
      <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=ajaysinghpanwar2002&show_icons=true&locale=en&layout=compact" alt="ajaysinghpanwar2002" /></p>
      </div>

    </>
  )
}

export default Home;