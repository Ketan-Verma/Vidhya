let Data;
fetch('https://api.npoint.io/085c71c5360766098f32').then(function (response) {

	// The API call was successful!
	if (response.ok) {
		return response.json();
	}

	// There was an error
	return Promise.reject(response);

}).then(function (data) {
	// This is the JSON from our response
	// console.log(data);
    showData(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
function showData(Data) {
    this.data = Data;
    for(let x =0 ; x<this.data.length;x++){
        this.date = this.data[x].date;
        this.name = this.data[x].name;
        this.type = this.data[x].type;
        this.article = this.data[x].article;
        this.heading = this.data[x].heading;
        addCard(this.heading,this.date,this.subheading,this.article,this.type)
        // console.log(this.data);
    }
    
}
function addCard(_HEADING,_DATE,_SUB,_ARTICLE,_type){
    const cardContainer =document.querySelector(".small-container");
    const card = document.createElement("div");
    const heading = document.createElement("h3");
    const subHeading = document.createElement("h4");
    const date = document.createElement("p");
    const article = document.createElement("p");

    card.classList.add(_type);
    card.classList.add("small");
    card.classList.add("card");
    cardContainer.append(card);
    card.append(heading);
    heading.id ="small-heading";
    card.append(date);
    date.id="date";
    card.append(subHeading);
    card.append(article);
    article.id="article";
    heading.innerText=_HEADING;
    date.innerText=_DATE;
    subHeading.innerText=_SUB
    article.innerHTML=_ARTICLE;
}