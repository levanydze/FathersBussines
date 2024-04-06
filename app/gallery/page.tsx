import imagesJson from "../../json/images.json";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";

export default function galleryPage() {
  const { headImage, pizza1High, chef } = imagesJson;

  return (
    <div>
      <PageHeadImage value="ABOUT US" image={headImage} short={true} />
    </div>
  );
}
