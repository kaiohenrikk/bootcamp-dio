fetch("https://imdb8.p.rapidapi.com/auto-complete?q=horror", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "5ab6fd4cadmsh884683d5e9ab6fep1d881cjsnfe176bb42629"
	}
})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<img class= "box-filme" src = "${poster}">`;
        document.querySelector('.item').innerHTML += movie;
    })
})
.catch(err => {
	console.error(err);
});