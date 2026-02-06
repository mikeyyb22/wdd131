const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

// process each entry named chapter
chaptersArray.forEach(chap => {
    displayList(chap);
});


button.addEventListener('click', function() {
    if (input.value != '') {            // make sure the input is not empty
    displayList(input.value);           // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);    // add the chapter to the array
    setChapterList();                   // update the localStorage with the new array
    input.value = '';                   // clear the input
    input.focus();                      // set the focus back to the input
    }
});

function displayList(item) {
    let listElement = document.createElement('li');
    let deleteButton = document.createElement('button');

    listElement.textContent = item;
    deleteButton.textContent = '❌';
    listElement.append(deleteButton);

    deleteButton.addEventListener('click', function() {
        list.removeChild(listElement);
        input.value = '';
    });

    list.append(listElement);
    input.focus();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chap) {
    chap = chap.slice(0, chap.length - 1); // slices off last character
    chaptersArray = chaptersArray.filter((item) => item != chap);
    setChapterList();
}