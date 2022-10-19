import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const ACCOUNT_KEY = '30575262-802bd827513eacead1493e6f3';
export const ITEMS_PER_PAGE = 40;

export async function getSearchImage({ value, page = 1 }) {
  const options = {
    params: {
      key: ACCOUNT_KEY,
      q: value,
      page: page,
      per_page: ITEMS_PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
}
