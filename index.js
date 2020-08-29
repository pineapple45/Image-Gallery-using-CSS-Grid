// let editIcon = document.querySelectorAll('.edit-icon-gallery');
let dropdown = document.getElementById('list-holder');
let container = document.querySelector('.container');
let imagesContainer = document.querySelectorAll('.img-container');
let revertBtn = document.getElementById('revert-btn');
let imgSrc = document.getElementById('src-input');
let imgDetail = document.getElementById('detail-input');
let addBtn = document.querySelector('.add-btn');


//Aquire list items which will provide class names
let original = document.getElementById('#original');
let big = document.getElementById("#big");
let horizontal = document.getElementById("#horizontal");
let vertical = document.getElementById("#vertical");
let large = document.getElementById('#large');
let horizontalLarge = document.getElementById('#horizontal-large');
let verticalLarge = document.getElementById('#vertical-large');
let space = document.getElementById('#space');
let spaceHorizontal = document.getElementById('#space-horizontal');
let spaceVertical = document.getElementById('#space-vertical');
let xl = document.getElementById('#xl');
let horizontalExtraLarge = document.getElementById('#horizontal-xl');
let verticalExtraLarge = document.getElementById('#vertical-xl');
let xxl = document.getElementById('#xxl');
let xxxl = document.getElementById('#xxxl');

for(i = 1;i<=localStorage.length;i++)
{
    var innerDiv = document.createElement('div');
    innerDiv.className = `img-container ${(JSON.parse(localStorage.getItem(i))).appliedClass}`;
    innerDiv.setAttribute('value',(JSON.parse(localStorage.getItem(i))).imageDetail);
    innerDiv.id = i;
    var innerImage = document.createElement('img');
    innerImage.className = 'gallery-images';
    innerImage.src = (JSON.parse(localStorage.getItem(i))).srcValue;
    innerImage.alt = `image_${i}`;
    //edit icon injection

    var editIconAnchor = document.createElement('a');
    editIconAnchor.className = "edit-icon-gallery";
    editIconAnchor.href = "#";
    var editIconI = document.createElement('i');
    editIconI.className = "fas fa-edit";
    //delete icon injection
    var deleteIconAnchor = document.createElement('a');
    deleteIconAnchor.className = "delete-icon-gallery";
    deleteIconAnchor.href = "#";
    var deleteIconI = document.createElement('i');
    deleteIconI.className = "fas fa-trash-alt";

    //Appending
    editIconAnchor.appendChild(editIconI);
    innerDiv.appendChild(innerImage);
    innerDiv.appendChild(editIconAnchor);

    deleteIconAnchor.append(deleteIconI);
    innerDiv.appendChild(deleteIconAnchor);

    //final append
    container.appendChild(innerDiv)
}

revertBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    for(i = 1;i<=localStorage.length;i++){
        let storageObject = JSON.parse(localStorage.getItem(i));
        storageObject.appliedClass = "";
        localStorage.setItem(i, JSON.stringify(storageObject));
    }
    location.reload();
})


//take input details

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    let srcValue = imgSrc.value;
    let imageDetail = imgDetail.value;
    let storageId = localStorage.length + 1;
    let storageObject = {
        srcValue:srcValue,
        imageDetail:imageDetail,
        appliedClass: "",
    }


    localStorage.setItem(storageId, JSON.stringify(storageObject));
    console.log((JSON.parse(localStorage.getItem(localStorage.length))));
    location.reload();
})


let editIcon = document.querySelectorAll('.edit-icon-gallery');
let deleteIcon = document.querySelectorAll('.delete-icon-gallery');

editIcon.forEach(icon =>{
    icon.addEventListener('click',(event) =>{
        event.preventDefault();
        icon.parentNode.appendChild(dropdown);
        dropdown.classList.toggle('add');
    });
}) 

deleteIcon.forEach(icon =>{
    icon.addEventListener('click',() =>{
        let parent = icon.parentElement;
      
        let delatableObject = JSON.stringify(localStorage.getItem(parent.id));
        let storageObjects = JSON.parse(JSON.stringify(localStorage));

        
        for(i = 1;i<= localStorage.length;i++){
         if(delatableObject === JSON.stringify(storageObjects[i])){
             for(j = i;j<=localStorage.length;j++){
                 storageObjects[j] = storageObjects[j+1];
             }
             delete storageObjects[localStorage.length];
             break;
         }
        }

        let count = localStorage.length;

        localStorage.clear();

        for(i = 1;i<=count-1;i++){
            localStorage.setItem(i,storageObjects[i])
        }

        location.reload();
    })
})


original.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(original);
})

big.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(big);

})

horizontal.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(horizontal);
 })


vertical.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(vertical);
})

large.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(large);
})

horizontalLarge.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(horizontalLarge);
})

verticalLarge.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(verticalLarge);
})

space.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(space);
})

spaceHorizontal.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(spaceHorizontal);
})

spaceVertical.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(spaceVertical);
})

xl.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(xl);
})

horizontalExtraLarge.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(horizontalExtraLarge);
})

verticalExtraLarge.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(verticalExtraLarge);
})

xxl.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(xxl);
})


xxxl.addEventListener("click",(e)=>{
    e.preventDefault();
    updateStorage(xxxl);
})

function updateStorage(addableClass){
    let parent = addableClass.parentElement.parentElement;
    let srcValue = JSON.parse(localStorage.getItem(parent.id)).srcValue;
    let imageDetail = JSON.parse(localStorage.getItem(parent.id)).imageDetail;
    let storageObject = {
        srcValue:srcValue,
        imageDetail:imageDetail,
        appliedClass: "",
    }
    if(parent.classList.contains(addableClass.innerHTML.toLowerCase()) === false){
        storageObject.appliedClass = addableClass.innerHTML.toLowerCase();
        localStorage.setItem(parent.id,JSON.stringify(storageObject));

    }
    else{
        storageObject.appliedClass = "";
        localStorage.setItem(parent.id,JSON.stringify(storageObject));

    }
    location.reload();
}