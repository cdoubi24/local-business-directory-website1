import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

const techBusinesses = businesses.filter(b => b.category === "Tech");
const container = document.querySelector('.business-card-grid');
renderBusinesses(techBusinesses, container);
