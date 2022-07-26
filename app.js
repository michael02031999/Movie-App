let apiKey = "90b736a83a752b748314c94c41104f17";

let searchbar = document.getElementById("searchbar");

searchbar.addEventListener("keypress", searchMovie);

async function searchMovie(e) {
  if (e.key === "Enter") {
    console.log(searchbar.value);
    let searchResults = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=90b736a83a752b748314c94c41104f17&language=en-US&".concat(
        "query=",
        searchbar.value,
        "&page=1&include_adult=false"
      )
    );
    let data = await searchResults.json();

    let actualSearchResults = data["results"];

    let configuration = await fetch(
      "https://api.themoviedb.org/3/configuration?api_key=90b736a83a752b748314c94c41104f17"
    ).then((result) => {
      return result.json();
    });

    let secureBase = configuration["images"]["secure_base_url"];
    let posterSize = configuration["images"]["poster_sizes"][3];
    //let posterPath = data["poster_path"];

    let URLS = [];

    console.log(actualSearchResults.length);
    for (let i = 0; i < actualSearchResults.length; i++) {
      URLS.push(
        "".concat(secureBase, posterSize, actualSearchResults[i]["poster_path"])
      );
    }

    let allImages = document.querySelectorAll(".movieImg");
    let movieContainers = document.querySelectorAll(".movieContainer");
    let descriptionContainer = document.querySelectorAll(
      ".descriptionContainer"
    );

    /*descriptionContainer[0].style.display = "flex";
    descriptionContainer[0].style.zIndex = "1";*/

    for (let i = URLS.length; i < movieContainers.length; i++) {
      movieContainers[i].style.display = "none";
    }

    let arrayOFVotingAverage = [];
    let arrayOfVotingAverageDivs = [];

    let arrayOfOverviews = [];

    let arrayOfOverviewDivs = [];

    let arrayOfTitles = [];
    let arrayOfMovieTitleDivs = [];

    for (let i = 0; i < actualSearchResults.length; i++) {
      arrayOfTitles.push(actualSearchResults[i]["title"]);
      arrayOfOverviews.push(actualSearchResults[i]["overview"]);
      arrayOFVotingAverage.push(actualSearchResults[i]["vote_average"]);

      /*arrayOfMovieTitleDivs.push(document.createElement("div"));
        arrayOfOverviewDivs.push(document.createElement("div"));
        arrayOfVotingAverageDivs.push(document.createElement("div"));*/
    }

    for (let i = 0; i < URLS.length; i++) {
      movieContainers[i].style.display = "flex";
      allImages[i].src = URLS[i];
      allImages[i].alt = arrayOfTitles[i];

      descriptionContainer[i].style.position = "absolute";
      descriptionContainer[i].style.bottom = "0px";
    }

    let allMovieTitlesDiv = document.querySelectorAll(".movieTitle");
    let allMovieRatingSpans = document.querySelectorAll(".movieRating");
    let allHoverDescriptionDiv = document.querySelectorAll(".hoverDescription");

    for (let j = 0; j < arrayOfTitles.length; j++) {
      allMovieTitlesDiv[j].innerHTML = arrayOfTitles[j];
      allMovieRatingSpans[j].innerHTML = arrayOFVotingAverage[j];
      allHoverDescriptionDiv[j].innerHTML = arrayOfOverviews[j];
    }
  }
}

/*async function getmovies() {
  let popularMoviesResponse = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=90b736a83a752b748314c94c41104f17&language=en-US&page=1"
  );
  let data = await popularMoviesResponse.json();
  let { results } = data;
  //console.log(data["results"][0]["vote_average"]);
  //console.log(results[0]);
  let votingAverage = results[0]["vote_average"];
  let overview = results[0]["overview"];
  document.getElementById("movieRating").textContent = votingAverage;
  document.getElementById("hoverDescription").innerHTML = overview;
  document.getElementById("movieTitle").textContent = results[0]["title"];
  let configuration = await fetch(
    "https://api.themoviedb.org/3/configuration?api_key=90b736a83a752b748314c94c41104f17"
  ).then((result) => {
    return result.json();
  });
  let baseURL = configuration["images"]["secure_base_url"];
  let posterSize = configuration["images"]["poster_sizes"][3];
  let posterPath = results[0]["poster_path"];
  let url = "".concat(baseURL, posterSize, posterPath);
  document.getElementById("movieImg1").src = url;
}
getmovies();*/

/*async function movie2() {
  let movie2 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=90b736a83a752b748314c94c41104f17&language=en-US&page=1"
  ).then((result) => {
    return result.json();
  });
  let results = movie2["results"];
  let movieTitle = movie2["results"][1]["title"];
  let votingAverage = movie2["results"][1]["vote_average"];
  let overview = movie2["results"][1]["overview"];

  document.getElementById("movieTitle2").textContent = movieTitle;
  document.getElementById("movieRating2").textContent = votingAverage;
  document.getElementById("hoverDescription2").innerHTML = overview;

  let configuration = await fetch(
    "https://api.themoviedb.org/3/configuration?api_key=90b736a83a752b748314c94c41104f17"
  ).then((result) => {
    return result.json();
  });

  let baseURL = configuration["images"]["secure_base_url"];
  let posterSize = configuration["images"]["poster_sizes"][3];
  let posterPath = results[1]["poster_path"];
  let url = "".concat(baseURL, posterSize, posterPath);
  document.getElementById("movieImg2").src = url;
}
movie2();*/

async function movie3() {
  let movie2 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=90b736a83a752b748314c94c41104f17&language=en-US&page=1"
  ).then((result) => {
    return result.json();
  });

  let results = movie2["results"];

  let configuration = await fetch(
    "https://api.themoviedb.org/3/configuration?api_key=90b736a83a752b748314c94c41104f17"
  ).then((result) => {
    return result.json();
  });

  let secureBase = configuration["images"]["secure_base_url"];
  let posterSize = configuration["images"]["poster_sizes"][3];
  let posterPath = results[2]["poster_path"];

  let URLS = [];

  for (let i = 0; i < results.length; i++) {
    URLS.push("".concat(secureBase, posterSize, results[i]["poster_path"]));
  }

  let allImages = document.querySelectorAll(".movieImg");

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].src = URLS[i];
  }

  /*let imgs = URLS.map((URL) => {
    let img = new Image();
    img.src = URL;
    document.body.appendChild(img);
    return img;
  });*/

  let arrayOFVotingAverage = [];
  let arrayOfVotingAverageDivs = [];

  let arrayOfOverviews = [];

  let arrayOfOverviewDivs = [];

  let arrayOfTitles = [];
  let arrayOfMovieTitleDivs = [];

  for (let i = 0; i < results.length; i++) {
    arrayOfTitles.push(results[i]["title"]);
    arrayOfOverviews.push(results[i]["overview"]);
    arrayOFVotingAverage.push(results[i]["vote_average"]);

    /*arrayOfMovieTitleDivs.push(document.createElement("div"));
    arrayOfOverviewDivs.push(document.createElement("div"));
    arrayOfVotingAverageDivs.push(document.createElement("div"));*/
  }

  let allMovieTitlesDiv = document.querySelectorAll(".movieTitle");
  let allMovieRatingSpans = document.querySelectorAll(".movieRating");
  let allHoverDescriptionDiv = document.querySelectorAll(".hoverDescription");

  for (let j = 0; j < allMovieTitlesDiv.length; j++) {
    allMovieTitlesDiv[j].innerHTML = arrayOfTitles[j];
    allMovieRatingSpans[j].innerHTML = arrayOFVotingAverage[j];
    allHoverDescriptionDiv[j].innerHTML = arrayOfOverviews[j];
  }

  //arrayOfMovieTitleDivs[0].innerHTML = arrayOfTitles[0];
  //let parentDiv = document.getElementById("descriptionContainer3");
  //parentDiv.prepend(arrayOfMovieTitleDivs[0]);
}

movie3();
