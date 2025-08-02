import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

const foodBusinesses = businesses.filter(b => b.category === "Food");
const container = document.querySelector('.business-card-grid');
renderBusinesses(foodBusinesses, container);
