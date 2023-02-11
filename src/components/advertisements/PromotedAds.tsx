import React, { useEffect, useState } from "react";
import Advertisement from "./Advertisement";
import { StyledPromotedAds, StyledWrapPromotedAds } from "./PromotedAds.style";
import { AddsArray } from "../../data/data";
import { db } from "../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";

const PromotedAds: React.FC = () => {
  const addsCollectionRef = collection(db, "Adds");

  const [adds, setAdds] = useState<any | null>([]);

  const promotedAdds = AddsArray.concat(adds);

  useEffect(() => {
    const getAdds = async () => {
      const data = await getDocs(addsCollectionRef);
      const response = data.docs.map((doc) => {
        const id = doc.id;
        return {
          ...doc.data(),
          id: id,
        };
      });
      setAdds(response);
    };

    getAdds();
  }, []);

  return (
    <StyledWrapPromotedAds>
      <h1>Ogłoszenia promowane</h1>
      <StyledPromotedAds>
        {promotedAdds.map((item) => (
          <Advertisement
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image[0]}
            price={item.price}
            location={item.location}
            date={item.date}
          />
        ))}
      </StyledPromotedAds>
    </StyledWrapPromotedAds>
  );
};

export default PromotedAds;
