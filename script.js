
let size =32
let screen =document.querySelector(".The_sketch_screen")

function the_game(){
        let btn=document.querySelector("#btn")
        
        for(let i =1 ;i <= size ;i++){
            let column = document.createElement("div");
            column.classList.add("column");
            column.style.height=16*size
            for(let j =1 ;j<= size ;j++){
                let row =document.createElement("div");
                row.classList.add("row");
                //row.style.padding = "16px" ;
                row.style.border = "2px black" ;
                column.appendChild(row);
                
            }
        screen.appendChild(column);
        } 
    
    
        screen.addEventListener("mouseover", (e)=>{
            pixel=e.target;
            pixel.style.backgroundColor ="black";})
        
        
    
   
}
the_game()
//function take_size(){
//    size = prompt("inter size")}
btn.addEventListener("click",()=>{{
            size = prompt("inter size and make sure it`s between 1 and one 100")
            while (size<=0||size>100){
                size=prompt("please right a valid value 1-100")
            }
            screen.innerHTML=""
            the_game()
            }})            