const categoryList = document.querySelectorAll("#categories li.item");
const categoryAmount = categoryList.length;
console.log(`Number of categories:`, categoryAmount);
categoryList.forEach(category => {
  const categoryTitle = category.querySelector("h2");
  const categoryName = categoryTitle.textContent;
  const listElement = category.querySelectorAll("ul li");
  const elementAmount = listElement.length;
  console.log(`Category:`, categoryName);
  console.log(`Elements:`, elementAmount);
});
