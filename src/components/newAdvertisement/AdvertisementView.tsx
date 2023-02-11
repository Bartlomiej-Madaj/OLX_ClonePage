import React, { useContext, useEffect, useState } from "react";
import AdvertisementContext from "../../store/advertisement-context";
import Announcement from "../addDescription/Announcement";
import Slider from "../slider/Slider";
import { StyledBackdrop } from "../UI/Backdrop";
import { StyledAdvertisementView } from "./AdvertisementView.style";

function AdvertisementView() {
  const advertisementViewCtx = useContext(AdvertisementContext);
  const statusCtx = useContext(AdvertisementContext);

  const [advertisementView, setAdvertisementView] = useState({
    id: "",
    date: "",
    title: "",
    price: "",
    isNegotiating: false,
    category: "",
    image: ["/images/adds/bugatti.jpg"],
    description: "",
    location: "",
    userName: "",
    email: "",
    phoneNumber: Number.parseInt(""),
  });

  useEffect(() => {
    setAdvertisementView(advertisementViewCtx.advertisementData);
  }, [advertisementViewCtx.advertisementData]);

  return (
    <>
      <StyledBackdrop onClick={() => statusCtx.changeDropStatus(false)} />
      <StyledAdvertisementView>
        {advertisementView.image[0] && (
          <Slider image={advertisementView.image} />
        )}
        <Announcement data={advertisementView} />
      </StyledAdvertisementView>
    </>
  );
}

export default AdvertisementView;
