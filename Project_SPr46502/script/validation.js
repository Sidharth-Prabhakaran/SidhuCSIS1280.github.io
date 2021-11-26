

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

function addSubject(form){
    var option = form.elements["subjectCount"];
    var gridcount = 10;
    

    for(i = 0 ; i < option.length; i++){
        if(option[i].selected){
            count_sub = option[i].value;
        }
    }
    for (i = 0; i < count_sub; i++) {
        var subjectbox = document.createElement("div");
        var markbox = document.createElement("div");
        tid = "Subject" + (i + 1);
        markid = "Mark" + (i+1);
        subjectbox.innerHTML = "<label for = subjectName >Subject Name : </label><input id=" + tid + " type=\"text\" name=\"subjectname\"  placeholder=\"Subject name\" required>"     
        markbox.innerHTML = "<label for = marks >Marks Obtained : </label><input id=" + markid + " type=\"text\" name=\"marks\"  placeholder=\"Marks Obtained\" required>"
        
        subjectbox.className = "subMarkInput";
        markbox.className = "subMarkInput";
        document.getElementById("fs1").appendChild(subjectbox);
        document.getElementById("fs1").appendChild(markbox);
        for(j=0;j<3;j++){
        var grid = document.createElement("div");
        gridcount ++;
        grid.id = "grid_" + gridcount;
        document.getElementById("gridSection").appendChild(grid);
        }
      }
}

function generate(form){
    document.getElementById("grid_3").innerText = document.getElementById("studName").value;
    document.getElementById("grid_5").innerText = document.getElementById("studentId").value;
    document.getElementById("grid_7").innerText = document.getElementById("date").value;
    //update the Subject names
    for(j=0,k=11;j<count_sub;j++,k+=3)
    {
        document.getElementById("grid_"+k).innerText = document.getElementById("Subject"+(j+1)).value;
        let score = document.getElementById("Mark"+(j+1)).value;
        document.getElementById("grid_"+(k+1)).innerText = score;
        if(score > 90){
            document.getElementById("grid_"+(k+2)).innerText = "A";

        }else if(score<=90 && score > 80){
            document.getElementById("grid_"+(k+2)).innerText = "B";            

        }else if(score <=80 && score > 60){
            document.getElementById("grid_"+(k+2)).innerText = "C";

        }else if(score <= 60 && score >45){
            document.getElementById("grid_"+(k+2)).innerText = "D";

        }else{
            document.getElementById("grid_"+(k+2)).innerText = "F";
            document.getElementById("grid_"+(k+2)).style.color = "red";

        }

    }
}
    

