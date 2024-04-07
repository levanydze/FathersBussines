import React from "react";
import ContactForm from "../..//components/contactForms/CotactForm/ContactForm";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import imagesJson from "../../json/images.json";
import MapTimes from "@/components/sectionComponents/map&times/MapTimes";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const { headImage, busImage3 } = imagesJson;
  return (
    <div className="fadeOut">
      <PageHeadImage value="CONTSCT US" image={busImage3} short={true} />
      <ContactForm />
    </div>
  );
}
