const newItemInput = document.getElementById("new-item-input");
const addBtn = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", addItem);

function addItem() {
	const newItemText = newItemInput.value;
	if (newItemText !== "") {
		const newItem = document.createElement("li");
		newItem.innerText = newItemText;
		newItem.addEventListener("click", completeItem);
		const deleteBtn = document.createElement("button");
		deleteBtn.innerText = "Delete";
		deleteBtn.classList.add("delete-btn");
		deleteBtn.addEventListener("click", deleteItem);
		newItem.appendChild(deleteBtn);
		itemList.appendChild(newItem);
		newItemInput.value = "";
	}
}

function completeItem(event) {
	event.target.classList.toggle("completed");
}

function deleteItem(event) {
	const item = event.target.parentNode;
	itemList.removeChild(item);
}
