import React from "react";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import Dashboard from "../..//components/animations/SliderPeople/Dashboard";
import MapTimes from "../..//components/sectionComponents/map&times/MapTimes";
import TwoTextAbout from "../..//components/sectionComponents/TwoTextAbout/TwoTextAbout";
import PhotoText from "../..//components/sectionComponents/PhotoText/PhotoText";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const { headImage, busImage4 } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="ABOUT US" image={busImage4} short={true} />
      {/* <TwoTextAbout />
      <PhotoText
        image={chef}
        title1="Leader's Word"
        title2="MADE FOR FUTURE"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum beatae, sapiente dolorem veniam doloribus eum harum rerum nemo pariatur numquam repellat dicta non architecto voluptas quasi molestiae! Commodi, molestiae?"
        sign="Levani Levanidze"
      /> */}
      {/* <FramerSlider /> */}
      {/* <Dashboard /> */}
      <MapTimes />
    </div>
  );
}
