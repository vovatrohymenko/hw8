const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

const createItem = (url) => {
  const li = document.createElement("li");

  const link = document.createElement("a");
  link.href = url;
  link.textContent = url;
  link.target = "_blank";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Редагувати";

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("delete");

  delBtn.onclick = () => li.remove();

  editBtn.onclick = () => {
    const newUrl = prompt("Редагувати:", link.href);
    if (newUrl) {
      link.href = newUrl;
      link.textContent = newUrl;
    }
  };

  li.append(link, editBtn, delBtn);
  return li;
};

addBtn.onclick = () => {
  const url = input.value.trim();
  if (!url) return;

  list.append(createItem(url));
  input.value = "";
};
