import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const FakeInfo = [
  {
    title:
      "Legend of the Red Dragon (a.k.a. New Legend of Shaolin, The) (Hong Xi Guan: Zhi Shao Lin wu zu)",
    image: "http://dummyimage.com/225x100.png/cc0000/ffffff",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    title: "Cat Run 2",
    image: "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  },
  {
    title: "Pan Tadeusz: The Last Foray in Lithuania (Pan Tadeusz)",
    image: "http://dummyimage.com/118x100.png/dddddd/000000",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  },
  {
    title: "Face",
    image: "http://dummyimage.com/143x100.png/cc0000/ffffff",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    title: "Cimarron",
    image: "http://dummyimage.com/145x100.png/dddddd/000000",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    title: "Blue",
    image: "http://dummyimage.com/164x100.png/dddddd/000000",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "Hollywoodland",
    image: "http://dummyimage.com/205x100.png/dddddd/000000",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    title: "A Christmas Kiss",
    image: "http://dummyimage.com/244x100.png/dddddd/000000",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  },
  {
    title: "Mysteries of Lisbon (Mistérios de Lisboa)",
    image: "http://dummyimage.com/104x100.png/cc0000/ffffff",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    title: "American Gigolo",
    image: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
];

export const Slider = () => {
  const Data = useMemo(() => {
    return (
      FakeInfo &&
      FakeInfo.map((x) => {
        return (
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={x.image} alt={x.title} />
            <Carousel.Caption>
              <h3>{x.title}</h3>
              <p>{x.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    );
  }, []);
  return (
    <React.Fragment>
      <Carousel>{Data}</Carousel>
    </React.Fragment>
  );
};
