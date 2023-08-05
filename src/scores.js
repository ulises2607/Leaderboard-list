
import { postGame,postScore, getData } from "./apimanagement";

const scoreList = document.querySelector('.score-list');
const scoreForm = document.querySelector('.score-form');

export class Leaderboard {

    // updateData(){
    //   data = []
    //   data = getData().forEach(e => data.push(e))
    //   console.log('data actualizada: ', this.data);
    // }

    createScore(nameParam, scoreParam, ind = 0) {
      const scoreObj = {
        user: nameParam,
        score: scoreParam,
      };
      postScore(scoreObj);
    }

    displayData = async() => {
      
      scoreList.innerHTML = '';
      try {
        const data = await getData();
        data.forEach((elem) => {
            scoreList.innerHTML += `
                <li class="item">${elem.user}: - ${elem.score}</li>
            `;
            console.log('elementos: ', elem);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    refreshData = () => {
      const refresh = document.querySelector('.btn-refresh')
      refresh.addEventListener('click', () => {
        this.displayData()

      })
    }
    //Listening submit button
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