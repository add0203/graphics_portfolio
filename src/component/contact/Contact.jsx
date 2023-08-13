import React, { useRef, useState } from "react";
import "./Contact.scss";
import linkdinImg from "../../assets/image/linkedin.png";
import contactImg from "../../assets/image/messagesSvg.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const formRef = useRef;
  // const [done, setDone] = useState(false);
  // const handleSubmit = (e) => {
  //   // prevent submit button to reload the page
  //   e.preventDefault();
  //   // Emialjs
  //   // console.log(process.env.YOUR_SERVICE_ID);
  //   // emailjs.sendForm(process.env.YOUR_SERVICE_ID, 'template_5j65og4', formRef.current, 'l91YPoURyLZukp-DP')
  //   emailjs
  //     .sendForm(
  //       "service_o2mxx3e",
  //       "template_5j65og4",
  //       formRef.current,
  //       "l91YPoURyLZukp-DP"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className="contact-container">
      <div className="left">
        <div className="left-container">
          <div className="text">
            <h3>Let’s have a talk</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            {/* <img src={linkdinImg} alt="" /> */}
          </div>
          <img src={contactImg} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="input">
          {/* <form ref={formRef} onSubmit={handleSubmit}> */}
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_name" required />
          <textarea
            placeholder="Type your message here"
            name="message"
            rows="5"
            required
          ></textarea>
          <button>Submit</button>
          {/* <br></br> */}
          {/* {done && "  Email Send, Thank You 😊"} */}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
