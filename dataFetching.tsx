import axios from "axios";
import { Image as Img } from "@mantine/core";
import { AnimalImage } from "./variables";

const getShuffledArr = (arr: any[]) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export const fetchImageData = async () => {
  let newAnimalImages: AnimalImage[] = [];

  // Compile array of promises
  let animalImagesPromises: any = [];

  // Add other animals API promises
  for (let i = 1; i <= 8; i++) {
    animalImagesPromises.push(
      axios.get("https://dog.ceo/api/breeds/image/random")
    );
  }

  // Fetch all image data,
  // Start by fetching target data - Fox image
  await axios
    .get("https://randomfox.ca/floof")
    .then((res) => {
      // Promise 
      return new Promise<string>(function(resolve, reject){
        var img = new Image()
        img.src = res.data.image
  
        // Format target image data - imageURL: {img}
        img.onload = () => resolve(res.data.image) 
        
      }).then((link: string) => {
        newAnimalImages.push({
          imageURL: link,
          isTarget: true,
          component: getImageComponent(res.data.image),
        });
      })
      
    })
    .then(async () => {
      await Promise.all(animalImagesPromises).then((res) => {
        // Format all images - imageURL: {img}
        res.forEach((result) => {
          newAnimalImages.push({
            imageURL: result.data.message,
            component: getImageComponent(result.data.message),
          });
        });
      });
    })
    .catch((err) => console.log("Error in fetching image data: ", err));

  return getShuffledArr(newAnimalImages);
};

const getImageComponent = (imageURL: string) => {
  let image = (
    <Img
      height={150}
      radius="sm"
      src={imageURL}
      alt="Random animal image"
      style={{ cursor: "pointer" }}
    />
  );
  return image;
};
