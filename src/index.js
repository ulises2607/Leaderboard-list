import './style.css';
import Leaderboard from './scores';

let leaderboard = new Leaderboard()

leaderboard.addScore()

window.onload = () => {
    leaderboard.loadData();
}