const getTextHighlight = function () {
  let content = document.getElementById("text").innerHTML;
  let textSearch = document.getElementById("getText").value;
  let position = content.toLowerCase().indexOf(textSearch.toLowerCase());
  let newContent = "";

  while (position !== -1) {
    newContent = content.slice(0, position);
    newContent = `<span style = "background-color : red ">${content.slice(position, position + textSearch.length)}</span>`;
    position = content.toLowerCase().indexOf(textSearch.toLowerCase(), position + textSearch.length);
  }
  newContent = content.slice(position + textSearch.length);
  content = newContent;
}