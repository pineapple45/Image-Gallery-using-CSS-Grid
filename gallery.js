const nextBtn = document.querySelector('.modal-next-icon')
const prevBtn = document.querySelector('.modal-prev-icon')
const crossIcon = document.querySelector('.modal-cross-icon');
const modal = document.querySelector('.modal');
const galleryCardContainers = document.querySelectorAll('.gallery-card-containers')
const galleryImages = document.querySelectorAll('.gallery-images');
const imagesContainers = document.querySelectorAll('.img-container');
const infoBtn = document.getElementById('info-btn-container');
const infoBox = document.getElementById('info-box');

infoBox.classList.add('close-info-box');

infoBtn.addEventListener('click',() =>{
  if(infoBox.classList.contains('close-info-box')){
    infoBox.classList.remove('close-info-box');
    infoBox.classList.add('open-info-box');
  }
  else if(infoBox.classList.contains('open-info-box')){
    infoBox.classList.remove('open-info-box');
    infoBox.classList.add('close-info-box');
  }
})

crossIcon.addEventListener('click',() =>{
  modal.classList.remove('open-modal')
  modal.classList.add('close-modal')
})


imagesContainers.forEach((container,index) =>{
    let slide = document.createElement('div');
    slide.className = 'slides';

    let modalImageContainer = document.createElement('div');
    modalImageContainer.className = 'modal-img-container';

    let modalTitleContainer = document.createElement('div');
    modalTitleContainer.className = 'modal-title-container';

    let modalImage = document.createElement('img');
    modalImage.className = 'modal-img';
    modalImage.src = container.firstChild.src;
    modalImage.alt = `image_${index}`;

    let modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.innerHTML = container.getAttribute('value');

    slide.appendChild(modalImageContainer);
    slide.appendChild(modalTitleContainer);
    modalImageContainer.appendChild(modalImage);
    modalTitleContainer.appendChild(modalTitle);
    modal.appendChild(slide);

})


const slides = document.querySelectorAll('.slides')


let startSlide = '';


galleryImages.forEach((image,i) =>{
  image.addEventListener('click',() =>{
    startSlide = i;
    getCurrentSlide(i);

  })
})


nextBtn.addEventListener('click',() =>{
  plusSlide(1);
});

prevBtn.addEventListener('click',() =>{
  plusSlide(-1)
});

document.addEventListener('keydown',(e) =>{
  if(e.keyCode === 39 || e.keyCode === 38){
    plusSlide(1);
  }
  else if(e.keyCode === 37 || e.keyCode === 40){
    plusSlide(-1)
  }
})

function getCurrentSlide(i){
  slides.forEach((slide,j) =>{
    if(i != j){
      slide.classList.remove('slide');
      slide.classList.add('no-slide');
    }
  })
  slides[i].classList.remove('no-slide');
  slides[i].classList.add('slide');
  modal.classList.remove('close-modal');
  modal.classList.add('.open-modal');
}



function plusSlide(i){
  startSlide = startSlide+i;
  slides.forEach((slide,j) =>{
    if(startSlide != j){
      slide.classList.remove('slide');
      slide.classList.add('no-slide');
    }
  })

  if(startSlide === slides.length){
    startSlide = 0;
  }
  else if(startSlide === -1){
    startSlide = slides.length-1;
  }

  slides[startSlide].classList.remove('no-slide');
  slides[startSlide].classList.add('slide');
  modal.classList.add('.open-modal');
}
