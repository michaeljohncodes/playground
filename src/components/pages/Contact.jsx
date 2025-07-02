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
      <div className=" contact">
        <form onSubmit={submitData}>
          <h1 className=" text-center text-white font-medium ">CONTACT FORM</h1>
          <fieldset>
            <legend className=" flex gap-[10px] items-center">
              <FaRegUser className=" size-4" /> Full Name{" "}
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
              <MdOutlineMail className=" size-5" />
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
              <BsCalendar2Date className=" size-4" />
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
              placeholder="Enter your Bio Here"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <button type="submit"> Submit </button>
        </form>
      </div>

      <main className=" flex flex-wrap gap-5 bg-gray-300 px-[100px] ">
        {users.map((data, i) => (
          <div className=" flex flex-col bg-black px-[20px] py-[20px] font-light text-white" key={i}>
            <h1>
              <b>Name:</b> {data.fullName}
            </h1>
            <i>
              <b>Email: </b> {data.email}
            </i>
            <i>
              <b>Age: </b> {data.age}
            </i>
            <p>
              <b>Bio:</b> {data.bio}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Contact;
