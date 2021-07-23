import React, { useEffect, useState } from "react";
import { getContacts } from "../../services/contactService";
import ContactData from "../../components/ContactData";
import MapComponent from "./componets/Map";

function Index() {
  const [data, setData] = useState("");

  useEffect(() => {
    getContacts().then((d) => {
      if (d === false) setData(null);
      else setData(d.data);
    });
  }, []);

  return (
    <div>
      <MapComponent />
      <ContactData data={data} />
    </div>
  );
}

export default Index;
