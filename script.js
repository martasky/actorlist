fetch("actors.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleActorList(data);
  });

function handleActorList(data) {
  data.forEach(showActor);
}

var hasBeenClicked = {};
var actor_2_movie = {};

function showActor(actor) {
  console.log(actor);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".actorname").textContent = actor.fullname;
  hasBeenClicked[actor.fullname] = false;
  actor_2_movie[actor.fullname] = actor.movie;
  clone.querySelector(".actorname").addEventListener("click", () => {
    console.log("Actor name " + actor.fullname + " was clicked");
    // const template = document.querySelector("template").content;
    // const clone = template.cloneNode(true);
    // // clone.querySelector(".moviename").textContent = actor.movie;
    // var li = document.createElement("li.moviename");
    // li.textContent = actor.movie;
    // document.querySelector(".actorname").appendChild(li);

    hasBeenClicked[actor.fullname] = true;
    console.log(hasBeenClicked);
    console.log(actor_2_movie);
    updateMovies();
  });
  //   clone.querySelector(".moviename").textContent = actor.movie;

  const result = document.querySelector("body").appendChild(clone);

  //   if (actor.fullname == true) {
  //     clone.querySelector(".moviename").textContent = actor.movie;
  //   }
  //   clone.querySelectorAll(".moviename").classList.add("hidden");
}

function updateMovies() {
  const sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    var actorname = section.querySelector("li").innerText;
    if (hasBeenClicked[actorname]) {
      section.querySelector("li").innerText =
        actorname + " - " + actor_2_movie[actorname];
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}
