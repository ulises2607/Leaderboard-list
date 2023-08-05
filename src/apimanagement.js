const postGame = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
  const result = await fetch(`${requestURL}/games`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Ulises LeaderBoard',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
  return console.log(result);
};

const id = 'f16M4As9nB2weRqJp1pJ';

const postScore = async (data) => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  const result = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then((json) => console.log(json));
  return result;
};

const getData = async () => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
  const response = await fetch(requestURL);
  const json = await response.json();
  return json.result;
};

export { postGame, postScore, getData };
