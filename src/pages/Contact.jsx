import React from "react";
import contact_img from "../contact.svg";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const form = useRef();
  const handleNameChange = (e) => {
    setFullName(e.target.value);
    setError("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setError("");
  };
  const validEmail = (email) => {
    // Use a regular expression to check if the email is in the correct format
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const clearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (fullName === "" || email === "" || message === "") {
      setError("Please fill all the fields !");
    } else if (!validEmail(email)) {
      setError("Please use a valid email !");
    } else {
      emailjs
        .sendForm(
          "service_27mgsbx",
          "template_x40d0re",
          form.current,
          "Sennz2x22pLxmz_Rj"
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              Swal.fire(
                "Message sent !",
                "Your message was sent successfully",
                "success"
              );
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
      clearForm();
    }
  };

  return (
    <div className="grid py-16 items-center grid-cols-2">
      <div className="justify-self-center">
        <img className="" src={contact_img} width={300} alt="" />
      </div>
      <div className="form w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8">👋 Contact us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <input
              name="fullName"
              type="text"
              placeholder="Full name"
              className="input input-bordered"
              value={fullName}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-control">
            <input
              name="email"
              type="text"
              placeholder="your email"
              className="input input-bordered my-4"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-control">
            <textarea
              name="message"
              rows={3}
              className="textarea textarea-bordered"
              placeholder="your message here"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <p className="flex-1 flex items-center align-middle text-base mt-4 font-semibold leading-4 text-red-500">
            {error !== "" && (
              <FaTimesCircle className="inline-block mr-2 text-red-500 text-lg" />
            )}
            {error}
          </p>
          <button
            type="submit"
            className="btn btn-secondary w-full text-white btn-active mt-5"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
