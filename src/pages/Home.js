import React from "react";
import Layout from "./../components/Layout/Layout";
import { Form, Link } from "react-router-dom";
import Banner from "../images/bgWell.jpg";
import "../styles/HomeStyles.css";
import "../components/Layout/Form"
import FormModal from "../components/Layout/Form";
import { useEffect } from "react";

const Home = () => {
  // useEffect(() => {
  //   if (window && document) {
  //     const script = document.createElement('script')
  //     const body = document.getElementsByTagName('body')[0]
  //     script.src = 'https://code.getmdl.io/1.3.0/material.min.js'
  //     body.appendChild(script)
  //     script.addEventListener('load', () => {
  //       // window.hbspt.forms.create({
  //       //   // this example embeds a Hubspot form into a React app but you can tweak it for your use case
  //       //   // any code inside this 'load' listener will run after the script is appended to the page and loaded in the client
  //       // })
  //     })
  //   }
  // }, [])
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Your Well Wisher</h1>
          <p>Your first friend <br/> <br/> who never forget your special occasion !!</p>  
            <Link>
               <button onClick={handleClickOpen}>Subscribe</button>
            </Link>
        </div>
      </div>
      
    </Layout>
    {
      open && <FormModal/>
    }
    </>
  );
};

export default Home;
