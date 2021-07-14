import React, { useMemo } from "react";
import "./Members.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaFacebook,FaInstagram} from "react-icons/fa"

const fakeData = [
  {
    name: "Voltsillam",
    image: "images/members/CeciliaMendez.jpeg",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    facebookUrl: "Cis Woman",
    instagramUrl: "Neither",
  },
  {
    name: "Bamity",
    image: "images/members/Marco Fernandez.jpg",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    facebookUrl: "Transgender Man",
    instagramUrl: "Bigender",
  },
  {
    name: "Flowdesk",
    image: "images/members/María Garcia.jpg",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. ",
    facebookUrl: "Transgender Female",
    instagramUrl: "Transgender Person",
  },
  {
    name: "Tempsoft",
    image: "images/members/María Irola.jpg",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    facebookUrl: "Female to Male",
    instagramUrl: "Trans",
  },
  {
    name: "Sub-Ex",
    image: "images/members/Marita Gomez.jpeg",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    facebookUrl: "Transsexual Woman",
    instagramUrl: "Androgyne",
  },
  {
    name: "Tres-Zap",
    image: "images/members/Miriam Rodriguez.jpg",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    facebookUrl: "Transgender Man",
    instagramUrl: "Androgynous",
  },
  {
    name: "Zontrax",
    image: "images/members/Rodrigo Fuente.jpg",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    facebookUrl: "Gender Variant",
    instagramUrl: "Transsexual Female",
  },
];

export const Members = () => {
  let member = useMemo(() => {
    return fakeData.map((x) => {
      return (
        <div className="col-md-4 text-center ">
          <div className="card my-2 py-3">
            <img
              className=" card-img-top mx-auto rounded-circle coverImg sizeImg"
              src={x.image}
              alt={x.name}
            />
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text">{x.description}</p>
              <a href={x.facebookUrl} className="btn btn-primary">
                <FaFacebook/>
              </a>
              
              <a  href={x.instagramUrl} className="btn btn-primary mx-3">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>
      );
    });
  }, []);
  return (
    <div className="container">
      <div className="row">{member}</div>
    </div>
  );
};
