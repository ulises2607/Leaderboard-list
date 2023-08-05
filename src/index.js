import './style.css';
import { getData } from './apimanagement.js';
import { Leaderboard } from './scores.js';

const leaderboard = new Leaderboard();

leaderboard.addScore();
leaderboard.refreshData();
getData();