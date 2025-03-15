import recipes from './recipes.mjs';

//Get Random Recipe
function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));

// Load html
function recipeTemplate(recipe) {
	return `
    <figure class="recipe">
        <div class='recipeFlexBox'>
            <div class="recipeContainer">
                    <img id='recipePicture' img src="${recipe.image}" alt="Image of meal" />
                    <div id="details">
                        <div id="tag">${tagsTemplate(recipe.tags)}</div>
                        <div id="recipeTitle">${recipe.name}</div>
                        
                        <span
                        ${ratingTemplate(recipe.rating)}
                        </span>

                        <div id="description">${recipe.description}</div>
                    </div>
            </div>
        </div>
    </figure>`;
}

// Insert Tags into the html
function tagsTemplate(tags) {
    const html = tags.map(function(tag) {
        return `<li>${tag}</li>
            `;
    }).join('');
    return html;
}

// Insert Ratings into the html
function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
    
    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <=5; i++) {
        //console.log(`I: ${i}`);

        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
		// else output an empty star

        if (i <= rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>
            `;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>
            `;
        }
    }
		
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

// to test
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

// Insert Recipe into the html
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeOutput = document.getElementById('randomRecipe');

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipeHTMLStrings = recipeList.map(recipeTemplate).join('');

	// Set the HTML strings as the innerHTML of our output element.
    recipeOutput.innerHTML = recipeHTMLStrings;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

// We have rendered a list of recipes for the following - to set up for filtering and rendering a list of recipes!

//Filter recipes by the serach query.
function filter(query) {
    const filtered = filterFunction(query);
    // sort by name
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

//Filter matching items from the search input in the name, desc, tag, or ingredient.
function filterFunction(query) {
    const filteredRecipes = recipes.filter(recipe => {
        const nameSearch = recipe.name.toLowerCase().includes(query);
        const descriptionSearch = recipe.description.toLowerCase().includes(query);
        const tagSearch = recipe.tags.some(tag => tag.toLowerCase().includes(query));
        const ingSearch = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));
        return nameSearch || descriptionSearch || tagSearch || ingSearch;
    });
    return filteredRecipes
}

// Get the search input, filter, and render the appropriate recipes. 
function searchHandler(e) {
    e.preventDefault()
    // get the search input
	const searchQuery = document.getElementById('searchBar').value;
    console.log(searchQuery);
    // convert the value in the input to lowercase
    const lowerCaseQuery = searchQuery.toLowerCase();
    console.log(lowerCaseQuery)
    // use the filter function to filter our recipes
    const filteredRecipes = filter(lowerCaseQuery);
    // render the filtered list
    renderRecipes(filteredRecipes);
}

document.getElementById('searchForm').addEventListener('submit', searchHandler);
