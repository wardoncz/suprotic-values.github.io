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

    valueBoxes.style.height = rows * (newDivHeight + 25) + 'px';
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