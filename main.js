
var pageCount = 1;
var resultsContainer = document.getElementById('json-container');
var reesultJason = document.getElementsByClassName('btn');
btn.addEventListener("click", function(){
var doRequest = new XMLHttpRequest();
doRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCount+'.json');
doRequest.onload = function(){
  var results = JSON.parse(doRequest.responseText);
  var anotherresults = JSON.stringify(doRequest.responseText);
   //document.write(anotherresults);
   renderHTML(results);
};

doRequest.send();
if (pageCount<=3) {
  pageCount++;
} else {
  btn.classList.add("hide-btn");
}
//pageCount++;
})
function renderHTML(data){
  var htmlString = "";
  for (i = 0; i< data.length; i++) {
    htmlString +="<p>"+ data[i].name + " is "+ data[i].species + "he likes " + data[i].foods.likes[0]+" and "+data[i].foods.likes[1] + " and dislikes "+data[i].foods.dislikes[0]+" and "+data[i].foods.dislikes+"</p>";
    
  }
  resultsContainer.insertAdjacentHTML('beforeend', htmlString);
}
