import imagesJson from "../../json/images.json";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import TextIntoPhoto from "../../components/sectionComponents/TextIntoPhoto/TextIntoPhoto";

export default function galleryPage() {
  const { busImage2, busImage1 } = imagesJson;

  return (
    <div>
      <PageHeadImage value="GALLERY" image={busImage2} short={false} />
      <TextIntoPhoto
        alt="bus for trip in georgia"
        title="Tbilisi 8h tour Bus + Driver"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque, ex aspernatur fugit necessitatibus iste laborum, illo consequatur sint alias cupiditate vero eveniet! Praesentium suscipit numquam fugiat quas laborum velit!"
        TextIntoPhotoImage={busImage1}
        TextIntoPhotoIcon={null}
        reverse={false}
      />
    </div>
  );
}
