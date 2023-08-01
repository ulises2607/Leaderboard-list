import './style.css';
import { Leaderboard } from './scores.js';

const leaderboard = new Leaderboard();

leaderboard.addScore();

window.onload = () => {
  leaderboard.loadData();
};