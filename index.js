let dataDiv = document.querySelector('.images')
let imagesData;

const getImages = async () => {
    const response = await fetch(process.env.API);
    const results = await response.json();
    imagesData = results

    for (let images of imagesData) {
        let imageDiv = document.createElement('img');
        imageDiv.src = images.urls.regular
        dataDiv.append(imageDiv)

    }
}


//Infinite scrolling 
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 10) {
        getImages();

    }
})

getImages();