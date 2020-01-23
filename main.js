var url="https://poloniex.com/public?command=returnCurrencies";
var result;
var acceptDelete=true;
async function goo(){
let response = await fetch(url);
let data = await response.json(); 
result= Object.keys(data).map(function(key){
    return data[key];
});

// for(var i = 0; i < result.length; i++){
//     var data = {    
//         name: result[i].name, 
//         humanType: result[i].humanType,
//         currencyType: result[i].currencyType,
//         txFee: result[i].txFee,
//         minConf: result[i].minConf
//       };
// }

    $("#loader").show();


for (var i = 0; i < result.length; i++) {
    
    $("#myList").append(
        `<tr>
       
       <td id="tdname"> ${result[i].name} </td>
       <td> ${result[i].humanType} </td>
       <td> ${result[i].currencyType}</td>
       <td> ${result[i].txFee}</td>
       <td> ${result[i].minConf}</td>
       <td>
       <button onclick="delUser(${i},'${result[i].name}')">Delete</button>
         </td>
               
</tr>`);
}
$("#loader").hide();
}
goo();

function getElements(){
    
    $("#loader").show();

     $("#myList").html("");
     for (var i = 0; i < result.length; i++) {
    
        $("#myList").append(
            `<tr>
           
           <td id="tdname"> ${result[i].name} </td>
           <td> ${result[i].humanType} </td>
           <td> ${result[i].currencyType}</td>
           <td> ${result[i].txFee}</td>
           <td> ${result[i].minConf}</td>
           <td>
           <button onclick="delUser(${i},'${result[i].name}')">Delete</button>
             </td>
                   
    </tr>`);
    }
    $("#loader").hide();
    

           
} 
getElements();


function delUser(index,userName){
   var acceptDelete= confirm(`Are you accept to delete ${userName} ?`);
    if(acceptDelete==true){
    result.splice(index,1);
    getElements();
}
else{
alert("Neatly, if you delete, it will be impossible to return!");
}
}

function search(){
    var inputText=$("#inputSearch").val().toLowerCase();
    if(inputText==""){
        getElements();
    }
    else{
   
        $("#myList").html("");
        $("#loader").show();
    for (var i = 0; i < result.length; i++) {
     

        if((result[i].name).toLowerCase().includes(inputText)){
            $("#myList").append(
                `<tr>
               
               <td id="tdname"> ${result[i].name} </td>
               <td> ${result[i].humanType} </td>
               <td> ${result[i].currencyType}</td>
               <td> ${result[i].txFee}</td>
               <td> ${result[i].minConf}</td>
               <td>
               <button onclick="delUser(${i},'${result[i].name}')">Delete</button>
                 </td>
                       
        </tr>`);
        }
    
    }//for 
   
    $("#loader").hide();
}
}
