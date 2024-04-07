import imagesJson from "../../json/images.json";
import PageHeadImage from "../../components/anyPageHead/PageHeadImage/PageHeadImage";
import TextIntoPhoto from "../../components/sectionComponents/TextIntoPhoto/TextIntoPhoto";

export default function pricePage() {
  const { busImage2, busImage1, busImage3, busImage6 } = imagesJson;

  return (
    <div>
      <PageHeadImage value="One Day 500 ₾ " image={busImage2} short={false} />
      <TextIntoPhoto
        alt="bus for trip in georgia"
        title="Tbilisi 8h Tour Bus + Driver 500 ₾"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque, ex aspernatur fugit necessitatibus iste laborum, illo consequatur sint alias cupiditate vero eveniet! Praesentium suscipit numquam fugiat quas laborum velit!"
        TextIntoPhotoImage={busImage1}
        TextIntoPhotoIcon={null}
        reverse={false}
      />
      <TextIntoPhoto
        alt="bus for trip in georgia"
        title="Batumi One Week Tour Bus + Driver 3500 ₾"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque, ex aspernatur fugit necessitatibus iste laborum, illo consequatur sint alias cupiditate vero eveniet! Praesentium suscipit numquam fugiat quas laborum velit!"
        TextIntoPhotoImage={busImage3}
        TextIntoPhotoIcon={null}
        reverse={true}
      />
      <TextIntoPhoto
        alt="bus for trip in georgia"
        title="Stepatsminda Two Days Tour Bus + Driver 1000 ₾"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque, ex aspernatur fugit necessitatibus iste laborum, illo consequatur sint alias cupiditate vero eveniet! Praesentium suscipit numquam fugiat quas laborum velit!"
        TextIntoPhotoImage={busImage6}
        TextIntoPhotoIcon={null}
        reverse={false}
      />
    </div>
  );
}
