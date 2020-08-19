const songs = document.querySelectorAll("ul > li");

for (const song of songs) {
    song.classList.add("green");
    song.setAttribute("class", "green")
}