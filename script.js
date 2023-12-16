//input
const searchInput = document.getElementById("musicInput")
//ul
const resultsList = document.getElementById("results")
//button
const searchBtn = document.getElementById("inputBtn")
//form
const searchForm = document.getElementById("searchForm")


const getMusic = () => {
    const query = searchInput.value

    
    fetch(`https://api.lyrics.ovh/suggest/${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        let songName = "";  // Initialize an empty string to concatenate results

        for (let i = 0; i < 5; i++) {
            songName += `<li> <strong>${data.data[i].title}</strong> <br/> ${data.data[0].artist.name}</li>`;
        }

        // Set the concatenated HTML string to the resultsList element
        resultsList.innerHTML = songName;
        
        
    })
    .catch(error => console.log(error))
}

searchBtn.addEventListener("click", getMusic)
//enter button to search
searchForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); //This is to prevent default form submission
        getMusic();
    }
})

