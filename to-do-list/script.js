let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group")
let inputArr = [];

addBtn.onclick = function (e) {
    let inputVal = input.value;
    if (inputVal) {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between");

        let firstDiv = document.createElement("div");
        firstDiv.classList.add("d-flex", "justify-content-start")

        let checkSpan = document.createElement("span");
        checkSpan.style.alignSelf = "center";
        checkSpan.classList.add("input-group-text", "p-0")

        let check = document.createElement("input");
        check.classList.add("form-check-input", "mt-0")
        check.type = "checkbox";
        check.name = "check";
        check.id = "check";
        //check.style.backgroundColor ="green"
        check.addEventListener("click", updateItem);


        let spanInput = document.createElement("span");

        listItem.appendChild(firstDiv);
        firstDiv.appendChild(checkSpan);
        checkSpan.appendChild(check);
        firstDiv.appendChild(spanInput);
        let date = new Date();
        spanInput.innerHTML = inputVal+` <sup>${date.toLocaleDateString('tr-TR')}/${date.toLocaleTimeString('tr-TR')}</sup>`;
        spanInput.classList.add("ms-2")


        let secondDiv = document.createElement("div");

        let spanBtn = document.createElement("span");
        spanBtn.classList.add("badge", "bg-danger", "delete");
        spanBtn.style.cursor = "pointer";
        spanBtn.innerHTML = "X";
        spanBtn.addEventListener("click", deleteItem)
        let tick = document.createElement("span");
        tick.classList.add("secondDiv")


        listItem.appendChild(secondDiv);
        secondDiv.appendChild(tick);
        secondDiv.appendChild(spanBtn);

        list.appendChild(listItem)



        input.value = ""
    }
}


function deleteItem(e) {
    let parentListItem = e.target.parentElement.parentNode
    //  let grandParentList = e.target.parentElement.parentNode
    //  grandParentList.removeChild(parentListItem);
    parentListItem.remove()
}


function updateItem(e) {
    let parentItem = e.target.parentElement.parentNode.parentNode
    console.log(parentItem)
    parentItem.style.transition = "all 1s ease"
    if (e.target.checked) {
        parentItem.classList.remove()
        
        parentItem.classList.add("bg-success", "text-light")
        let secDiv = parentItem.lastChild.firstChild
        secDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16"><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/></svg>`
        secDiv.style.color=""
        let dates = parentItem.firstChild.lastChild.lastChild
        let date = new Date();
        dates.innerHTML = `${date.toLocaleDateString('tr-TR')}/${date.toLocaleTimeString('tr-TR')}`
    } else {
        parentItem.classList.remove("bg-success")
        parentItem.classList.add("bg-secondary")
        let secDiv = parentItem.lastChild.firstChild
        secDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16"><path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/></svg>`;
        secDiv.style.color="red"
        
    }



}
let dates = new Date()

console.log(dates.getUTCMonth())




// localStorage.setItem("user","halit")
// let username = localStorage.getItem("user")
// console.log(username)