let itemList=[];
let addItem=()=>{
    let item =document.getElementById("todo").value;
    itemList.push(item);
    console.log(itemList);
    document.getElementById("todo").value="";
    getItem();
}
let getItem=()=>{
    let empty="";
    let s=0;
    itemList.forEach(function(value,index){
    s+=1;
    empty+="<tr><td>"+(index+1)+"</td><td>"+value+"</td><td><button onclick='deleteItem()'>Remove</button></td></tr>"
    document.getElementById("tbl").innerHTML=empty;})
}

function deleteItem(id){
itemList.splice(id,1);
getItem();
}
document.getElementById('btn').addEventListener("click",addItem);