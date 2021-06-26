import axios from "axios";

export const HandleLogin = async (values) => {
  await axios
    .post(
      "https://demo5074840.mockable.io/form" ,
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
HandleLogin();
export const handleRegister = async (values) => {
 await axios
    .post(
      " https://demo5074840.mockable.io/form " ,
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
