import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";

const Contact = () => {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [users, setUsers] = useState([]);

  const submitData = (e) => {
    e.preventDefault();

    setUsers([...users, { fullName, email, age, bio }]);
    // setUsers([...users, {name:fullName, email:email, bio:bio}])

    setfullName("");
    setEmail("");
    setAge("");
    setBio("");
  };

  return (
    <div>
      <h1 className=" text-center font-medium ">This is the Contact Page</h1>
      <div className=" contact">
        <form onSubmit={submitData}>
          <h1 className=" text-center text-white font-bold ">CONTACT FORM</h1>
          <fieldset>
            <legend className=" flex gap-[10px] items-center">
              <FaRegUser /> Full Name{" "}
            </legend>
            <input
              type="text"
              value={fullName}
              onChange={(e) => {
                setfullName(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <legend className=" flex gap-[10px] items-center">
              {" "}
              <MdOutlineMail />
              Email{" "}
            </legend>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <legend className=" flex gap-[10px] items-center">
              <BsCalendar2Date />
              Age{" "}
            </legend>
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Enter your bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <button type="submit"> Submit </button>
        </form>
      </div>

      <main className=" flex flex-wrap gap-5">
        {users.map((data, i) => (
          <div className="bg-amber-100 px-[20px] font-light" key={i}>
            <h1>
              <b>Name: {data.fullName} </b>
            </h1>
            <i>
              <b>Email: {data.email} </b>
            </i>
            <p>
              <b>Bio: {data.bio}</b>
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Contact;
