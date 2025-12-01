const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
savedBookmarks.forEach((url) => {
  list.append(createItem(url));
});

const saveBookmarks = () => {
  const urls = Array.from(list.querySelectorAll("li a")).map(
    (link) => link.href
  );
  localStorage.setItem("bookmarks", JSON.stringify(urls));
};

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

  delBtn.onclick = () => {
    li.remove();
    saveBookmarks();
  };

  editBtn.onclick = () => {
    const newUrl = prompt("Редагувати:", link.href);
    if (newUrl) {
      link.href = newUrl;
      link.textContent = newUrl;
      saveBookmarks();
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
  saveBookmarks();
};
