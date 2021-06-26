import axios from "axios";

export const HandleLogin = (values) => {
  axios
    .post(
      BaseUrl,
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

export const handleRegister = (values) => {
  axios
    .post(
      BaseUrl,
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
