// scripts/categories/clothing.js
import { businesses } from "../main/data/businesses.js";
import { renderBusinesses } from "../utils/renderBusinesses.js";

const clothingBusinesses = businesses.filter(b => b.category === "Clothing");
const container = document.querySelector('.business-card-grid');
renderBusinesses(clothingBusinesses, container);
