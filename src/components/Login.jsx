import { useContext, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});

  const { handleToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Email"
        name="email"
        id=""
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter password"
        name="password"
        id=""
      />
      <button
        onClick={() => {
          try {
            fetch("reqres.in/api/login", {
              method: "POST",
              body: JSON.stringify(form),
            });
            handleToken("2323234");
            navigate(-1);
          } catch {
              //
          }
        }}
      >
        Sign in
      </button>
    </div>
  );
};
