const itemType = document.getElementsByClassName("itemType")
const newItem = document.getElementById("selectedOption")

for (let i = 0; i < itemType.length; i++) {
    itemType[i].addEventListener("click", function (event) {
        event.preventDefault()
        newItem.value = itemType[i].textContent
    });
}