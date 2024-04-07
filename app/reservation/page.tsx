import ReservationContactForm from "../../components/contactForms/ReservationContactForm/ReservationContactForm";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import MapTimes from "../../components/sectionComponents/map&times/MapTimes";

export const metadata = {
  title: "Reservation",
};

export default function Reservation() {
  const { headImage, busImage6 } = imagesJson;

  return (
    <div className="fadeOut">
      <PageHeadImage
        value="Book A Bus And Driver"
        image={busImage6}
        short={false}
      />
      <ReservationContactForm />
      <MapTimes />
    </div>
  );
}
