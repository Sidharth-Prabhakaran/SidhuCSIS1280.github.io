

function validate(form){
    var test = document.querySelectorAll("fieldset");
    var marks = 0;
    
    var opt = "";
    
    var option ;
    
    for( i = 0; i < test.length ; i++ ){
        opt = "q" + (i+1);
        option = form.elements[opt];
    for(let node of option){
        if(node.checked && node.value == "True"){
            
            form.elements[test[i].id].style.backgroundColor = "green";
            marks++;
            
        }else if(node.checked && node.value == "False"){
            form.elements[test[i].id].style.backgroundColor = "red";
            
        }
        }
    }
    document.getElementById("score").innerText = " The Marks you have scored is " + marks + " on 7";    
}


    

