import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const FakeInfo = [
  {
    title: "Vagram",
    image:
      "https://i.pinimg.com/originals/52/b6/e2/52b6e237bf1155a8109ead35b2b808d5.jpg",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    title: "Cardguard",
    image:
      "https://www.xtrafondos.com/descargar.php?id=5846&resolucion=3840x2160",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    title: "Veribet",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    title: "Rank",
    image:
      "https://i.pinimg.com/originals/51/5b/13/515b135f9ed38bb7e2b5856b7192f674.jpg",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    title: "Tempsoft",
    image: "https://fondosmil.com/fondo/2292.jpg",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
];

const intervalAnimation = 3500

export const Slider = () => {
  const Data = useMemo(() => {
    return (
      FakeInfo &&
      FakeInfo.map((x, i) => {
        return (
          <Carousel.Item key={i} interval={intervalAnimation} >
            <img className="d-block w-100" src={x.image} alt={x.title} />
            <Carousel.Caption>
              <h3 className="titles ">{x.title}</h3>
              <p className="subtitles">{x.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    );
  }, []);

  return (
    <React.Fragment>
      <Carousel  fade>{Data}</Carousel>
    </React.Fragment>
  );
};
