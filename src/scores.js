import { postScore, getData } from './apimanagement.js';

const scoreList = document.querySelector('.score-list');
const scoreForm = document.querySelector('.score-form');

export class Leaderboard {
  scoreObj = {}

  createScore(nameParam, scoreParam) {
    this.scoreObj = {
      user: nameParam,
      score: scoreParam,
    };
    postScore(this.scoreObj);
  }

  displayData = async () => {
    scoreList.innerHTML = '';
    try {
      const data = await getData();
      data.forEach((elem) => {
        scoreList.innerHTML += `
              <li class="item">${elem.user}: ${elem.score}</li>
          `;
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Listeging refresh button
  refreshData = () => {
    const refresh = document.querySelector('.btn-refresh');
    refresh.addEventListener('click', () => {
      this.displayData();
    });
  }

  // Listening submit button
  addScore = async () => {
    scoreForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('#input-name');
      const score = document.querySelector('#input-score');
      this.createScore(name.value, score.value);
    });
  }
}

export default Leaderboard;