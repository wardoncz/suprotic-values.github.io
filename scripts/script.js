// Vytvoreni arrays pro ruzna data
const names = []
const hugeNames = []
const eventNames = []
const exclusiveNames = []
const values = []
const hugeValues = []
const eventValues = []
const exclusiveValues = []
const exists = []
const hugeExists = []
const eventExists = []
const exclusiveExists = []
const photos = []
const hugePhotos = []
const eventPhotos = []
const exclusivePhotos = []

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return
    const data = JSON.parse(xhr.responseText);
    data.forEach(i => {
        const item_name = i.item_name
        const item_value = i.item_value
        const item_exist = i.item_exist
        const item_photos = i.item_photos
        if (item_name.includes("Huge") == true){
            hugeNames.push(item_name)
            hugeValues.push(item_value)
            hugeExists.push(item_exist)
            hugePhotos.push(item_photos)
        }else if (item_name.includes("Event") == true){
            eventNames.push(item_name)
            eventValues.push(item_value)
            eventExists.push(item_exist)
            eventPhotos.push(item_photos)
        }else if (item_name.includes("Exclusive") == true){
            exclusiveNames.push(item_name)
            exclusiveValues.push(item_value)
            exclusiveExists.push(item_exist)
            exclusivePhotos.push(item_photos)
        }else{
            names.push(item_name)
            values.push(item_value)
            exists.push(item_exist)
            photos.push(item_photos)
        }
    })
    const newHugeNames = hugeNames.map(item => item.replace(/-/g, ''));
    let newEventNames = eventNames.map(item => item.replace(/-/g, ''));
    newEventNames = newEventNames.map(item => item.replace(/Event/g, ''));
    let newExclusiveNames = exclusiveNames.map(item => item.replace(/-/g, ''));
    newExclusiveNames = newExclusiveNames.map(item => item.replace(/Exclusive/g, ''));
    const petHugeAmmount = newHugeNames.length;
    const petEventAmmount = newEventNames.length;
    const petExclusiveAmmount = newExclusiveNames.length;
    let valueBoxes = "";
    let boxDone = 0;
    let rows = 1;
    let marginTopNew = 0;
    let petAmmount = 0;
    let petTypeName = "";
    let petTypeValue = 0;
    let petTypeExist = "";
    let petTypePhoto = "";
    var currentPathname = window.location.pathname;
    var folders = currentPathname.split('/');
    var lastFolder = folders[folders.length - 2];
    console.log(lastFolder);
    console.log(newHugeNames)
    console.log(newEventNames)
    console.log(newExclusiveNames)
    console.log(hugeValues)
    console.log(eventValues)
    console.log(exclusiveValues)
    
    if (lastFolder == 'huge-pets'){
        valueBoxes = document.querySelector(".value-boxes-huges");
        petAmmount = petHugeAmmount;
        petTypeName = newHugeNames;
        petTypeValue = hugeValues;
        petTypeExist = hugeExists;
        petTypePhoto = hugePhotos;
    }else if (lastFolder == 'event-pets'){
        valueBoxes = document.querySelector(".value-boxes-events");
        petAmmount = petEventAmmount;
        petTypeName = newEventNames;
        petTypeValue = eventValues;
        petTypeExist = eventExists;
        petTypePhoto = eventPhotos;
    }else if (lastFolder == 'exclusive-pets'){
        valueBoxes = document.querySelector(".value-boxes-exclusives");
        petAmmount = petExclusiveAmmount;
        petTypeName = newExclusiveNames;
        petTypeValue = exclusiveValues;
        petTypeExist = exclusiveExists;
        petTypePhoto = exclusivePhotos;
    }else{
        console.log('zde zadni peti')
    }
    let newDivWidth = '';
    let newDivHeight = '';
    for (let i = 0; i < petAmmount; i++){
        const newDiv = document.createElement("div");
        newDiv.style.marginLeft = boxDone * (newDivWidth + 25) + 'px';
        newDiv.style.marginTop = marginTopNew;
        boxDone++;
        if (boxDone > 2) {
            rows++;
            boxDone = 0;
            marginTopNew = (rows - 1) * (newDivHeight + 25) + 'px'
            valueBoxes.append(newDiv);
            newDivWidth = newDiv.clientWidth;
            newDivHeight = newDiv.clientHeight;
            console.log(newDivWidth);
            const newTextBox = document.createElement("article");
            newDiv.append(newTextBox)
            const newHeader = document.createElement("h1");
            newHeader.textContent = petTypeName[i];
            newTextBox.append(newHeader);
            const newHeaderTwo = document.createElement("h2");
            newHeaderTwo.textContent = petTypeValue[i];
            newTextBox.append(newHeaderTwo);
            const newHeaderThree = document.createElement("h3");
            newHeaderThree.textContent = petTypeExist[i] + ' Exist';
            newTextBox.append(newHeaderThree);
            const newImg = document.createElement("img");
            newImg.src = petTypePhoto[i];
            newDiv.append(newImg);
        }else {
            valueBoxes.append(newDiv);
            newDivWidth = newDiv.clientWidth;
            newDivHeight = newDiv.clientHeight;
            const newTextBox = document.createElement("article");
            newDiv.append(newTextBox)
            const newHeader = document.createElement("h1");
            newHeader.textContent = petTypeName[i];
            newTextBox.append(newHeader);
            const newHeaderTwo = document.createElement("h2");
            newHeaderTwo.textContent = petTypeValue[i];
            newTextBox.append(newHeaderTwo);
            const newHeaderThree = document.createElement("h3");
            newHeaderThree.textContent = petTypeExist[i] + ' Exist';
            newTextBox.append(newHeaderThree);
            const newImg = document.createElement("img");
            newImg.src = petTypePhoto[i];
            newDiv.append(newImg);
        }
    }

    valueBoxes.style.height = (rows - 1) * (newDivHeight + 25) + 'px';
    const home = document.getElementById('home');
    const computedStyle = window.getComputedStyle(valueBoxes);
    const marginTop = parseFloat(computedStyle.marginTop);

    const valueBoxesHeight = valueBoxes.offsetHeight;
    const homeHeight = home.offsetHeight;
    const totalHeight = valueBoxesHeight + marginTop + 64 +'px'
    console.log(valueBoxesHeight);
    console.log(homeHeight);
    console.log(totalHeight);

    if (valueBoxesHeight > 636){
        home.style.setProperty('height', totalHeight);
    } else {
        console.log('Its not bigger')
    }
}

xhr.open("GET", `https://items-api-c7wz.onrender.com/items`)
xhr.send()

// script.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll('[class^="value-boxes-"] article'); // Select all articles within div elements
    let found = false;

    sections.forEach(section => {
        const h1 = section.querySelector('h1'); // Look for h1 tag within the article
        if (h1 && h1.textContent.toLowerCase().includes(searchTerm)) {
            found = true;
            searchResults.innerHTML = ''; // Clear previous search results
            h1.classList.add('highlighted');
            scrollToSection(section);

            setTimeout(() => {
                h1.classList.add('fade-out-animation');

                // Remove both classes after the animation completes
                setTimeout(() => {
                    h1.classList.remove('highlighted', 'fade-out-animation');
                }, 2000); // Adjust the duration to match the animation duration
            }, 1000); // Adjust the delay as needed

        }
    });

    if (!found) {
        alert(`No pet found with the name: ${searchTerm}`);
    }
}

function scrollToSection(section) {
    let position = 0;
    if (window.innerWidth > 1023){
        position = section.getBoundingClientRect().top + window.scrollY - 350;
        console.log('PC/Tablet')
    } else if (window.innerWidth > 768 && window.innerWidth < 821) {
        position = section.getBoundingClientRect().top + window.scrollY - 400;
        console.log('Tablet')
    } else if (window.innerWidth > 479){
        position = section.getBoundingClientRect().top + window.scrollY - 200;
        console.log('Mobil - siroky')
    } else if (window.innerWidth > 319){
        position = section.getBoundingClientRect().top + window.scrollY - 300;
        console.log('Mobil - vysoky')
    } else {
        console.log('Bad width')
        position = section.getBoundingClientRect().top + window.scrollY - 100;
    }
    console.log(window.innerWidth)
    console.log(position)
    window.scrollTo({
        top: position,
        behavior: 'smooth'
    });
}


