document.querySelector("#load-btn").addEventListener("click", async function() {
    const response = await axios.get("contact.txt");
    console.log(response);

    document.querySelector("#content").innerHTML = response.data;

})