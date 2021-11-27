var count_sub;
function validateForm(form){
    // console.log("inside vaidate");
    if(validateName(form) && validateId(form)  && validateDate(form) && validateSubcount(form)&& validateSub(form) && validateMarks(form)){
        generate(form);
    }else{
        
        return false;
    }
}



function validateName(form){
    var name = document.getElementById("studName");
    // console.log(name);
    if(name.validity.valueMissing){  
        name.reportValidity();  
        name.setCustomValidity("Please enter your name here");
        // console.log("name");
        return false;
    }
    else{
        name.reportValidity();
        name.setCustomValidity("");
        return true;
    }
}

function validateId(form){
    var studId = form.elements["studentId"];
    
    if(studId.validity.valueMissing){
        studId.reportValidity();
        studId.setCustomValidity("Please enter your Stud Id");
        // console.log("id");
        return false;
    }
    else if(studId.validity.patternMismatch){
        studId.reportValidity();
        studId.setCustomValidity("Enter a valid 5 digit code");
        // console.log("id");
        return false;
    }
    else{
        studId.reportValidity();
        studId.setCustomValidity("");
        return true;
    }
}
function validateDate(form){
    var date = form.elements["date"];
    
   
    if(date.validity.valueMissing){                 
        date.reportValidity();
        date.setCustomValidity("Please enter the date");
        return false;
        
    }
    else
    {
        date.reportValidity();
        date.setCustomValidity("");
        return true;
    }
} 
function validateSubcount(form){
    var subcount = document.getElementById("subCount");
    if(subcount.validity.valueMissing){
        console.log("subcount");
        subcount.reportValidity();
        subcount.setCustomValidity("Please select the number of Subjects");
        return false;
    }else{
        subcount.reportValidity();
        subcount.setCustomValidity("");
        return true;
    }
}

function validateSub(form){
    for(i=0;i<count_sub;i++){
        var res = true;
        var temp = "Subject" + (i+1);
        element = document.getElementById(temp);
        // console.log(element);

        if(element.validity.valueMissing){
            element.reportValidity();
            element.setCustomValidity("Please enter Subject Name");
            res = false;
        }else{
            element.reportValidity();
            element.setCustomValidity("");
            res = true;
        }
    }
    return res;
}
function validateMarks(form){
    for(i=0;i<count_sub;i++){
        var res = true;
        var temp = "Mark" + (i+1);
        element = document.getElementById(temp);
        // console.log(element);

        if(element.validity.valueMissing){
            element.reportValidity();
            element.setCustomValidity("Please enter Marks");
            res = false;
        }else if(0 > element.value || 100< element.value ){
            element.reportValidity();
            element.setCustomValidity("Mark should be within range(0,100)");
            res =  false;
        }else if (isNaN(element.value)){
            element.reportValidity();
            element.setCustomValidity("Please enter a valid number");
            res = false;
        }
        else{
            element.reportValidity();
            element.setCustomValidity("");
            res =  true;
        }
    }
    return res;

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
        
        subjectbox.className = "subInput";
        markbox.className = "markInput";
        document.getElementById("fs1").appendChild(subjectbox);
        // document.getElementById("fs1").insertBefore(subjectbox, document.getElementById("submitbutton"));
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

    console.log("inside generate");
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
