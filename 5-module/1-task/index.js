/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const nodes = table.querySelectorAll('[data-available]');
        for (const node of nodes) {
          if (node.dataset.available === "true") {
            node.parentNode.classList.add("available")
          }
          if (node.dataset.available === "false") {
            node.parentNode.classList.add("unavailable")
          }

          }

         let trs = table.querySelectorAll('tbody > tr');
         for (const tr of trs) {
           if (!(tr.classList.contains("unavailable") || tr.classList.contains("available"))) {
console.log(tr.parentNode);
                        tr.setAttribute("hidden", "");

}

       }
       /////////////
       let tds = table.querySelectorAll('td');
       for (const td of tds) {
          if (td.innerHTML === "m"){
            td.parentNode.classList.add("male")
          }
          if (td.innerHTML === "f"){
            td.parentNode.classList.add("female")
          }

         }
//////////////////////////////////
let tds2 = table.querySelectorAll('td');
for (const td2 of tds2) {
   if (parseInt(td2.innerHTML) < 18){
      // console.log(td2);
      td2.parentNode.style.textDecoration = "line-through";
   }

  }

}
