import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const FakeInfo = [{
  "title": "Vagram",
  "image": "http://dummyimage.com/203x100.png/cc0000/ffffff",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
}, {
  "title": "Cardguard",
  "image": "http://dummyimage.com/191x100.png/ff4444/ffffff",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
}, {
  "title": "Veribet",
  "image": "http://dummyimage.com/112x100.png/ff4444/ffffff",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "title": "Rank",
  "image": "http://dummyimage.com/209x100.png/ff4444/ffffff",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "title": "Tempsoft",
  "image": "http://dummyimage.com/177x100.png/ff4444/ffffff",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}]



export const Slider = () => {
  const Data = useMemo(() => {
    return (
      FakeInfo &&
      FakeInfo.map((x, i) => {
        return (
          <Carousel.Item key={i} interval={1000} className="CarouselItem">
            <img className="d-block w-100"  src={x.image} alt={x.title} />
            <Carousel.Caption>
              <h3 className="titles">{x.title}</h3>
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
