const endPoint = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endPoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((resolve))
    .catch(reject);
});

export default getJoke;
