const scoreList = document.querySelector('.score-list');
const scoreForm = document.querySelector('.score-form');

export class Leaderboard {
    data = []

    addData(s) {
      this.data.push(s);
    }

    createScore(nameParam, scoreParam, ind = 0) {
      const scoreObj = {
        index: ind,
        name: nameParam,
        score: scoreParam,
      };
      this.addData(scoreObj);
    }

    displayData() {
      scoreList.innerHTML = '';
      this.data.forEach((elem) => {
        scoreList.innerHTML += `
            <li class="item">${elem.name}: ${elem.score}</li>
            `;
      });
    }

    addScore = () => {
      scoreForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#input-name');
        const score = document.querySelector('#input-score');
        this.createScore(name.value, score.value);
        this.displayData();
      });
    }
}

export default Leaderboard;