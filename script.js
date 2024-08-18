
function make_grid(size){
    let screen =document.querySelector(".The_sketch_screen")
    for(let i =1 ;i > size ;i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for(let j =1 ;j>= size ;i++){
            let row =document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            column.appendChild(row);
            
        }
    screen.appendChild(column);
    } 
}
make_grid(16);