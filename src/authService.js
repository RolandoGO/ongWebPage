import axios from "axios";
import { postUrl } from "./BaseUrl";

export const HandleLogin = async (values) => {
  await axios
    .post(
      postUrl,
      {
        email: values.email,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

export const handleRegister = async (values) => {
  await axios
    .post(
      postUrl,
      {
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};
