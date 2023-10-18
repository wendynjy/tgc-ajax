document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#load-image-btn").addEventListener("click", async function() {
        const artwork = await loadArtwork();
        const artworkDiv = document.querySelector("#artwork");
        artworkDiv.innerHTML = `<h1>${artwork.title}</h1>
        <img class ="${artwork.class}" src="${artwork.image_url}"/>`
    });
});

async function loadArtwork() {
    const response = await axios.get("artwork.json");
    return response.data;
}