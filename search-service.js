const apiKey = 'ab8e6c91';
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&plot=full`;


export default async (title, page = 1) => {
  const url = `${apiUrl}&s=${title}&p=${page}`;
  const responce = await fetch(url);
  const results = await responce.json();

  return results;
};
