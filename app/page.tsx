import FourBox from "../components/sectionComponents/FourBoxes/FourBox";
import imagesJson from "../json/images.json";
import PhotoText from "../components/sectionComponents/PhotoText/PhotoText";
import Dashboard from "../components/animations/SliderPeople/Dashboard";
import ImageTextButton from "@/components/HomePageHeads/ImageTextButton/ImageTextButton";

export default function Home() {
  const { headImage, busImage1 } = imagesJson;
  return (
    <main className="fadeOut">
      <ImageTextButton
        image={headImage}
        alt="pizza"
        title="Most Comfortable Transportation For Your Trip In Georgia"
        text="აქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდა"
        button="Book a Trip"
        buttonValue="/reservation"
      />

      <PhotoText
        image={busImage1}
        title1="Leader's Word"
        title2="Best Experience For Your Gerogian Trip"
        text="აქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდააქ დავწეროთ ნებისმიერი რამე რაც გინდა"
        sign="Khvicha Levanidze"
      />
      <Dashboard />
      <FourBox />
    </main>
  );
}
