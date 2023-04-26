console.log('Happy hacking :)')

const app = document.querySelector('#app');
app.className = 'flex flex-col items-center justify-center flex-nowrap';

const titleContainer = document.createElement('div');
titleContainer.className = 'flex flex-col items-center justify-center flex-nowrap mt-5';

const title = document.createElement('h1');
title.innerText = 'Lazy Loader';
title.className = 'text-center w-full text-4xl font-bold';

titleContainer.appendChild(title);

const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'flex flex-row items-center justify-around w-9/12 flex-wrap mt-5';

const addImage = document.createElement('button');
addImage.innerText = 'Add Image';
addImage.className = 'bg-blue-500 hover:bg-blue-700 text-white w-1/4 font-bold py-2 px-4 rounded-xl m-2';

const deleteImages = document.createElement('button');
deleteImages.innerText = 'Delete Images';
deleteImages.className = 'bg-red-500 hover:bg-red-700 text-white w-1/4 font-bold py-2 px-4 rounded-xl m-2';

buttonsContainer.append(addImage, deleteImages);


const imagesContainer = document.createElement('div');
imagesContainer.className = 'flex flex-col items-center justify-around w-9/12 flex-wrap mt-5';

app.append(titleContainer, buttonsContainer, imagesContainer);

let agregadas = 0;
let cargadas = 0;

const loadImage = (ele) => {
    const images = [
        "https://ojitos369.com/media/images/twice/mina/extra/mina-81.jpg",
        "https://ojitos369.com/media/images/twice/mina/extra/mina-79.jpg",
        "https://ojitos369.com/media/images/twice/mina/extra/mina-77.jpg",
        "https://ojitos369.com/media/images/twice/mina/extra/mina-71.jpg",
        "https://ojitos369.com/media/images/twice/mina/extra/mina-70.jpg",
        "https://ojitos369.com/media/images/twice/subunits/misamo/bouquet-5717.png",
    ];
    ele.className = 'w-1/4 mt-8 h-auto';

    const newImage = document.createElement('img');
    const randomImage = images[Math.floor(Math.random() * images.length)];
    newImage.src = randomImage;
    newImage.className = 'w-100'
    ele.appendChild(newImage);
    cargadas++;
    console.log(`Imagenes agregadas: ${agregadas} - Imagenes cargadas: ${cargadas}`);
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }, 500);
        }
    });
});

const addImageAction = () => {
    const tempImage = document.createElement('div');
    tempImage.className = 'w-1/4 h-48 m-8 bg-blue-700';
    imagesContainer.appendChild(tempImage);

    observer.observe(tempImage);
    
    // tempImage.addEventListener('load', () => { console.log('loaded')});

    agregadas++;
    console.log(`Imagenes agregadas: ${agregadas} - Imagenes cargadas: ${cargadas}`);
}


const deleteImagesAction = () => {
    const allImages = imagesContainer.querySelectorAll('img');
    const divs = imagesContainer.querySelectorAll('div');
    allImages.forEach(image => image.remove());
    divs.forEach(image => image.remove());
}


addImage.addEventListener('click', addImageAction);
deleteImages.addEventListener('click', deleteImagesAction);