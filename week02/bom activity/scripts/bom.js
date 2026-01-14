const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');

        listElement.textContent = input.value;
        deleteButton.textContent = '❌';
        listElement.append(deleteButton);

        deleteButton.addEventListener('click', function() {
            list.removeChild(listElement);
            input.value = '';
        });

        list.append(listElement);
    }
    input.focus();
});

