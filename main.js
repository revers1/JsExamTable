var url="https://poloniex.com/public?command=returnCurrencies";
var result;
var acceptDelete=0;
async function goo(){
let response = await fetch(url);
let data = await response.json(); 
result= Object.keys(data).map(function(key){
    return data[key];
});
for (var i = 0; i < result.length; i++) {
    
    $("#myList").append(
        `<tr>
       
       <td> ${result[i].name} </td>
       <td> ${result[i].humanType} </td>
       <td> ${result[i].currencyType}</td>
       <td> ${result[i].txFee}</td>
       <td> ${result[i].minConf}</td>
       <td>
       <button onclick="delUser(${i})">Delete</button>
         </td>
               
</tr>);`);
}

}
goo();

function getElements(){


     $("#myList").html("");
     for (var i = 0; i < result.length; i++) {
    
        $("#myList").append(
            `<tr>
           
           <td> ${result[i].name} </td>
           <td> ${result[i].humanType} </td>
           <td> ${result[i].currencyType}</td>
           <td> ${result[i].txFee}</td>
           <td> ${result[i].minConf}</td>
           <td>
           <button onclick="delUser(${i})">Delete</button>
             </td>
                   
    </tr>);`);
    }
           
} 
getElements();


function delUser(index){

    
    result.splice(index,1);
    getElements();

}
