import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '35888485-ef78d2b3836896c1b6f2f0b14';

const perPage = 12;

export const fetchImg = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  console.log(response);
  return response.data;
};
export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
