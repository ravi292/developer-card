alert();
const memeContent = document.getElementById("memeContent")
const imageContent = document.getElementById("imageContnet")


const loadMeme = (title, image_url) => {
    memeContent.innerHTML = title
    imageContent.src =image_url
}

url = "https://meme-api.com/gimme"

const fetchMeme =async () =>{
    const response = await fetch(url)
    const data =  await response.json()
    const image_url = data["url"]
    const title = data["title"]

    loadMeme(title, image_url)
}
