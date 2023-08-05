import './style.css';
import './apimanagement.js'
import {Leaderboard} from './scores.js'
import { getData } from './apimanagement.js';


const leaderboard = new Leaderboard();

leaderboard.addScore()
leaderboard.refreshData()
getData()