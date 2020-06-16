
function SortableTable(items) {
this.el = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
this.el.appendChild(thead);
this.el.appendChild(tbody);
thead.innerHTML = `
<tr>
<td>name</td>
<td>age</td>
<td>salary</td>
<td>city</td>
</tr>
`;
function render (){
tbody.innerHTML =  items.map (item => {
let row = "";
for (key in item){
  row += `<td>${item[key]}</td>`;
}
return `<tr>${row}</tr>`;
}).join('');
};
render ();

this.sort = (column, desc = false) => {
items = items.sort((a, b) => {
if (column === 0 && desc === true){
  return a.name < b.name ? 1 : -1;
}
if (column === 0){
  return a.name > b.name ? 1 : -1;
}
if (column === 2){
  return a.salary > b.salary ? 1 : -1;
}
})
render ();
}
}


















// /  this.sort = (column, desc = false) => {};
//
