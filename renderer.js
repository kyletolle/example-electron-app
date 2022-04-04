const setButton = document.getElementById('setTitleButton');
const titleInput = document.getElementById('title');
setButton.addEventListener('click', () => {
  const title = titleInput.value;
  window.electronApi.setTitle(title);
});

const openFileButton = document.getElementById('openFileButton');
const filePathElement = document.getElementById('filePath');
openFileButton.addEventListener('click', async () => {
  const filePath = await window.electronApi.openFile();
  filePathElement.innerText = filePath;
});