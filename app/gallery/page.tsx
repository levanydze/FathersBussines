import imagesJson from "../../json/images.json";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";

export default function galleryPage() {
  const { headImage, busImage2 } = imagesJson;

  return (
    <div>
      <PageHeadImage value="Galley" image={busImage2} short={true} />
    </div>
  );
}
