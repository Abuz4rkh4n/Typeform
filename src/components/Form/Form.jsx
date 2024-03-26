import { useState } from "react";
import React from "react";
import logo from "../../assets/logo.png";
import Header from "./Header/Header";

const Form = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [showError, setShowError] = useState(false);
  const [isEmpty, setIsEmpty] = useState("");
  const [isEmptyPassword, setIsEmptyPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [radio, setRadio] = useState(false);
  const [choices, setChoices] = useState({
    choice1: "",
    choice2: "",
    choice3: "",
  });

  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsOpen(!isOpen);
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value == "") {
      setIsEmpty("This field cannot be left blank");
      return;
    } else {
      return emailPattern.test(value);
    }
  };

  const validatePassword = (value) => {
    if (value == "") {
      setIsEmptyPassword("This field cannot be left blank");
      return;
    } else {
      const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return passwordPattern.test(value);
    }
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    if (newValue !== "") {
      setIsEmpty("");
      setEmail(newValue);
      setIsValidEmail(validateEmail(newValue));
    } else {
      setEmail(newValue);
      setIsValidEmail(validateEmail(newValue));
    }
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    if (newValue !== "") {
      setIsEmptyPassword("");
      setPassword(newValue);
      setIsValidPassword(validatePassword(newValue));
    } else {
      setPassword(newValue);
      setIsValidPassword(validatePassword(newValue));
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setChoices((prevState) => ({
        choice1: prevState.choice1 === "no" ? "no" : "yes",
        choice2: prevState.choice2 === "no" ? "no" : "yes",
        choice3: prevState.choice3 === "no" ? "no" : "yes",
      }));
    }
  };

  const handleChoiceChange = (name, value) => {
    if (isChecked) {
      setChoices((prevState) => ({
        ...prevState,
        [name]: value === "no" ? "no" : "yes",
      }));
    } else {
      setChoices((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className="">
      <Header />
      <div className="bg-white z-0 lg:rounded-tl-2xl lg:rounded-bl-2xl w-screen lg:w-55% lg:absolute lg:top-0 flex flex-col justify-center items-center h-screen ">
        <div className="flex flex-col justify-center items-center w-2/3 lg:w-my-form">
          <img src={logo} alt="logo" width={180} height={28} />
          <h2 className="font-lato text-my-blue text-2xl text-center my-6">
            Get better data with conversational forms, surveys, quizzes & more.
          </h2>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <input
              className={`border border-my-border rounded-3px px-2 py-2 w-64 mt-4 mb-1
        }`}
              placeholder="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setShowError(true)}
            />
            {!isValidEmail && showError && (
              <div className="flex items-center text-my-alert text-sm font-lato mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-exclamation-circle-fill"
                  viewBox="0 0 16 16"
                  className="mr-1"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                {isEmpty == "" ? "Enter a valid email address" : isEmpty}
              </div>
            )}
            <input
              className="border border-my-border rounded-3px px-2 py-2 w-64 mt-3 mb-1"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => setShowError(true)}
            />
            {!isValidPassword && showError && (
              <div className="flex items-start w-60 text-my-alert text-sm font-lato mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-exclamation-circle-fill"
                  viewBox="0 0 16 16"
                  className="mr-1 mt-1 flex-shrink-0"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                {isEmptyPassword == ""
                  ? "Use 8 or more characters with a mix of letters, numbers and symbols"
                  : isEmptyPassword}
              </div>
            )}
          </form>

          <div className="flex w-64 mt-3">
            <input
              className="h-5 w-5 border flex-shrink-0"
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="font-lato ml-2 text-sm leading-4" htmlFor="terms">
              I agree to Typeform's{" "}
              <a className="underline" href="#">
                Terms of Service
              </a>
              ,{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a className="underline" href="#">
                Data Processing Agreement
              </a>
              .
            </label>
          </div>
          <div className="w-60 flex flex-col items-end">
            <a
              className="flex items-center justify-between w-56 mt-8"
              href="#"
              onClick={handleClick}
            >
              <h3 className="font-lato text-sm">See options</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
                className={`text-black transition-transform transform ${
                  isRotated ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </a>
            <div
              className={`w-56 mt-2 transition-max-h ease duration-700 overflow-hidden ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="mb-3">
                <h3 className="font-lato text-sm">
                  Get useful tips, inspiration, and offers via e-communication.
                </h3>
                <div className="flex items-center mt-2 ml-1">
                  <input
                    className="h-4 w-4 mr-3"
                    type="radio"
                    id="yes1"
                    name="choice1"
                    value="yes"
                    required
                    checked={choices.choice1 === "yes"}
                    onChange={() => handleChoiceChange("choice1", "yes")}
                  />
                  <label className="font-lato text-sm" for="yes">
                    Yes
                  </label>
                  <input
                    className="h-4 w-4 mx-3"
                    type="radio"
                    id="no1"
                    name="choice1"
                    value="no"
                    required
                    checked={choices.choice1 === "no"}
                    onChange={() => handleChoiceChange("choice1", "no")}
                  />
                  <label className="font-lato text-sm" for="no">
                    No
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="font-lato text-sm">
                  Tailor Typeform to my needs based on my activity.{" "}
                  <a className="text-my-blue underline" href="#">
                    See Privacy Policy
                  </a>
                </h3>
                <div className="flex items-center mt-2 ml-1">
                  <input
                    className="h-4 w-4 mr-3"
                    type="radio"
                    id="yes2"
                    name="choice2"
                    value="yes"
                    required
                    checked={choices.choice2 === "yes"}
                    onChange={() => handleChoiceChange("choice2", "yes")}
                  />
                  <label className="font-lato text-sm" for="yes">
                    Yes
                  </label>
                  <input
                    className="h-4 w-4 mx-3"
                    type="radio"
                    id="no2"
                    name="choice2"
                    value="no"
                    required
                    checked={choices.choice2 === "no"}
                    onChange={() => handleChoiceChange("choice2", "no")}
                  />
                  <label className="font-lato text-sm" for="no">
                    No
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="font-lato text-sm">
                  Enrich my data with select third parties for more relevant
                  content.{" "}
                  <a className="text-my-blue underline" href="#">
                    See Privacy Policy
                  </a>
                </h3>
                <div className="flex items-center mt-2 ml-1">
                  <input
                    className="h-4 w-4 mr-3"
                    type="radio"
                    id="yes1"
                    name="choice3"
                    value="yes"
                    required
                    checked={choices.choice3 === "yes"}
                    onChange={() => handleChoiceChange("choice3", "yes")}
                  />
                  <label className="font-lato text-sm" for="yes">
                    Yes
                  </label>
                  <input
                    className="h-4 w-4 mx-3"
                    type="radio"
                    id="no2"
                    name="choice3"
                    value="no"
                    required
                    checked={choices.choice3 === "no"}
                    onChange={() => handleChoiceChange("choice3", "no")}
                  />
                  <label className="font-lato text-sm" for="no">
                    No
                  </label>
                </div>
              </div>
              <h4 className="text-sm text-my-blue">
                You can update your preferences in your Profile at any time
              </h4>
            </div>
          </div>
          <button className="w-60 h-10 rounded-3px bg-my-black font-lato text-white mt-5">
            Create my free account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
