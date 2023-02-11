import React, { useEffect, useState } from "react";
import { Advertisements } from "../../data/data";
import { useParams } from "react-router-dom";
import Announcement from "./Announcement";
import { newAdvertisement } from "../../types/globalType";
import { db } from "../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import Slider from "../slider/Slider";
import LoadingStuff from "../UI/LoadingStuff";

function AddDesctription() {
  const [newAdvertisement, setNewAdvertisement] = useState<
    (newAdvertisement | undefined)[] | null
  >([]);

  const params = useParams();
  const [Advertisement, setAdvertisement] = useState<newAdvertisement>();

  useEffect(() => {
    if (newAdvertisement![0]) {
      const idAdvertisement = params.id;

      const currentAdvertisement = newAdvertisement?.find(
        (item) => item?.id === idAdvertisement
      );
      setAdvertisement(currentAdvertisement);
    }
  }, [newAdvertisement]);

  useEffect(() => {
    const addsCollectionRef = collection(db, "Adds");
    const getAdds = async () => {
      const data = await getDocs(addsCollectionRef);

      const response = data.docs.map((doc) => {
        const id = doc.id;

        if (doc) {
          return {
            date: 0,
            title: "",
            price: "",
            image: ["", undefined],
            isNegotiating: false,
            category: "",
            description: "",
            location: "",
            userName: "",
            email: "",
            phoneNumber: Number(""),
            ...doc.data(),
            id: id,
          };
        }
      });

      setNewAdvertisement([...Advertisements, ...response]);
    };

    getAdds();
  }, []);

  if (newAdvertisement![0] && Advertisement) {
    return (
      <>
        <Slider image={Advertisement.image} />
        <Announcement data={Advertisement} />
      </>
    );
  } else {
    return <LoadingStuff />;
  }
}

export default AddDesctription;
