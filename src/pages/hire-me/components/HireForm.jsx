import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
// import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HireForm = () => {
  let navigate = useNavigate();
  const form = useRef();
  const jobType = ["Website", "UX/UI Design", "App Development"];

  const [errorMessage, setErrorMessage] = useState({});
  const [disabled, setDisabled] = useState(false);

  // send function
  const handleValidation = () => {
    let errors = {};
    if (!form.current.name.value) {
      errors.name = "Name is required.";
    }

    if (!form.current.description.value) {
      errors.description = "Message is required.";
    }
    // validate email is the right format
    if (
      !/\S+@\S+\.\S+/.test(form.current.email.value) ||
      !form.current.email.value
    ) {
      errors.email = "Please enter a valid email address";
    }
    return errors;
  };

  const handleSend = (e) => {
    e.preventDefault();

    setDisabled(true);
    setErrorMessage(handleValidation());

    if (Object.keys(errorMessage).length === 0) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              setDisabled(false);
              console.log(form.current.job);
              navigate("/");
              toast.success("Message sent successfully!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          },
          (err) => {
            setDisabled(false);

            toast.error("Something went wrong please try again later.", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            console.log(err);
          }
        );
    }
    setDisabled(false);
  };

  return (
    <Form
      ref={form}
      className="form-container p-3 flex-column"
      onSubmit={handleSend}
    >
      <Form.Group className="mb-3" controlId="formJob">
        <Form.Label>I would like a</Form.Label>
        <div className="d-flex justify-content-space-between w-100 flex-wrap">
          {jobType.map((job) => (
            <Form.Check
              key={job}
              type="checkbox"
              id="job"
              name="job"
              value={job}
              className="form-btn"
              label={job}
            />
          ))}
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Eg: Ragnar Lothbrok"
          className={errorMessage.name && "error"}
        />
        {errorMessage.name && (
          <Form.Text className="pg-">Name Required</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Eg: rlothbrok@vmail.com"
          className={errorMessage.email && "error"}
        />
        {errorMessage.email && (
          <Form.Text className="pg-">Email Required</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          type="text"
          placeholder="Need a website to help me count my plunder from the Brits."
          className={`text-area ${errorMessage.description && "error"}`}
        />
        {errorMessage.description && (
          <Form.Text className="pg-">Description Required</Form.Text>
        )}
      </Form.Group>

      <Button type="submit" className="submit-btn" disabled={disabled}>
        Submit
      </Button>
    </Form>
  );
};

export default HireForm;
