import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logoONG from "../assets/LOGO-SOMOSMAS.png";

const validationSchema = Yup.object({
  email: Yup.string().email("put a valid email").required("required!!"),
  password: Yup.string().min(6).max(15).required("required!!"),
});

const Login = React.memo(() => {
  const [email_password, setEmail_Password] = useState({});
  const [btnDisable, setBtnDisable] = useState(false);

  async function onSubmit(values) {
    setBtnDisable(true);
    setEmail_Password({
      email: values.email,
      email: values.password,
    });
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
  });

  const fontStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Georgia, seri",
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={formik.handleSubmit}
        style={{
          minWidth: "250px",
          maxWidth: "300PX",
          backgroundColor: "#c5d5e6",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <img src={logoONG} style={{ height: "100px", width: "100px" }}></img>

        <div className="form-group w-100">
          <p style={fontStyle}>Email address</p>
          <input
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          <div
            className="text-danger text-uppercase"
            style={{ fontWeight: "bold" }}
          >
            {formik.errors.email}
          </div>
        </div>

        <div className="form-group w-100">
          <p style={fontStyle}>Password</p>
          <input
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <div
            className="text-danger text-uppercase"
            style={{ fontWeight: "bold" }}
          >
            {formik.errors.password}
          </div>
        </div>

        <div>
          <button
            disabled={btnDisable}
            type="submit"
            className="btn btn-primary m-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
});

export default Login;
