let counter = 2
function Add() {
    const add = document.createElement("div");   //  Div element is created
    add.classList = "row form"                  //  Div having class row and mt-2

    //Inner HTML of that div 

    add.innerHTML = `                              
        <div class="mb-3  col">
            <label for="formGroupExampleInput" class="form-label hide">Degree/Board</label>
            <input id="deg${counter}"  type="text" class="form-control degree" required>
            <div id="degErr${counter}"  class="text-danger m-1 error"></div>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label hide">School/Colege</label>
            <input id="clg${counter}" type="text" class="form-control college" required>
             <div id="clgErr${counter}"  class="text-danger m-1 error"></div>
            </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label hide">Start Date</label>
            <input id="strDt${counter}" type="month" class="form-control startDt" required>
              <div id="strDtErr${counter}"  class="text-danger m-1 error"></div>
            </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label hide">Passout Year</label>
            <input id="psDt${counter}" type="month" class="form-control passYr" placeholder="mm/yyyy" required>
                <div id="psDtErr${counter}"  class="text-danger m-1 error"></div>
            </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label hide">Percentage</label>
            <input id="per${counter}" type="number" class="form-control percent" min="0" max="100" step="0.01" placeholder="Don't use % sign" required>
             <div id="perErr${counter}"  class="text-danger m-1 error"></div>
            </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label hide">Backlog</label>
            <input id="bc${counter}" type="number" class="form-control back" min="0" placeholder="If Any">
             <div id="bcErr${counter}"  class="text-danger m-1 error"></div>
            </div>
        <div class="mt-4 col text-center">
                <button type="button" class="delBtn border-0 rounded-circle bg-dark" onclick="Del(this)"> 
                        <i class="text-white fa-solid fa-minus"></i></button>
                 </div>
        <hr>
   `; //By clicking on - button Del function will be call and "this" is the attribute passed to the Del()

    document.getElementById("form").appendChild(add);    //New row will append in id "form"
    counter += 1
};





function Del(ele) {                       // ele = this = element which clicked = button
    let del = ele.parentNode.parentNode   // parent of button is div and parent of that div is row-div
    del.remove();                        // row will be removed
}

let rowCounter=1
let Data=[]
function FormSubmit(event) {

    event.preventDefault();     //To Not Resfresh the Page
    var details = {}   //empty array for getting details to show on console
    let name, db, emailId, addressDetail, grYr;

    first=fname.value.trim()
    last=lname.value.trim()
    //Name
    name = fname.value.trim() + " " + lname.value.trim();
    var nameCheck = /^[A-Za-z]+$/

    //Email
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    emailId = email.value;

    //Address
    addressDetail = address.value.trim();

    //Graduation Year
    grYr = new Date(graduationYear.value).getFullYear();


    //Validations for name
    //Not using if else ladder because of showing all error on one click
    validationCounter = true
    if (!nameCheck.test(first)) {
        document.getElementById("fnameErr").innerHTML = 'First Name is Invalid!'
        fname.focus()
        validationCounter = false
    } else {
        document.getElementById("fnameErr").innerHTML = ''
    }
    if (!nameCheck.test(last)) {
        document.getElementById("lnameErr").innerHTML = 'Last Name is Invalid!'
        lname.focus();
        validationCounter = false
    } else {
        document.getElementById("lnameErr").innerHTML = ''
    }
    if (dob.value == "") {    //Date of Birth
        document.getElementById("dobErr").innerHTML = 'Date Of Birth is Invalid!'
        dob.focus();
        validationCounter = false
    } else {
        document.getElementById("dobErr").innerHTML = ''
    }
    if (!mailformat.test(emailId)) {       //Validations for email
        document.getElementById("mailErr").innerHTML = "Invalid Mail Id"
        email.focus();
        validationCounter = false
    } else {
        document.getElementById("mailErr").innerHTML = ''
    }
    if (addressDetail == "") {       //Address
        document.getElementById("addressErr").innerHTML = 'Address is Invalid!'
        address.focus();
        validationCounter = false
    } else {
        document.getElementById("addressErr").innerHTML = ''
    }
    if (graduationYear.value == "") {    //Graduation Year
        document.getElementById("grYrErr").innerHTML = 'Graduation year is Invalid!'
        graduationYear.focus();
        validationCounter = false
    } else {
        document.getElementById("grYrErr").innerHTML = ''
    }





    //creating arrays using class
  

    for (let i = 0; i < counter; i++) {

        var degree = document.getElementById(`deg${i}`)
        var college = document.getElementById(`clg${i}`)
        var startDt = document.getElementById(`strDt${i}`)
        var passYr = document.getElementById(`psDt${i}`)
        var percent = document.getElementById(`per${i}`)
        var back = document.getElementById(`bc${i}`)

        if (document.getElementById(`deg${i}`)) {
            if (degree.value == "") {
                document.getElementById(`degErr${i}`).innerHTML = "Degree can't be empty!"
                degree.focus()
                validationCounter = false
            } else {
                document.getElementById(`degErr${i}`).innerHTML = ""
            }

            if (college.value == "") {
                document.getElementById(`clgErr${i}`).innerHTML = "College Name can't be empty!"
                college.focus()
                validationCounter = false
            } else {
                document.getElementById(`clgErr${i}`).innerHTML = ""
            }

            if (startDt.value == "") {
                document.getElementById(`strDtErr${i}`).innerHTML = "Start Date can't be empty!"
                degree.focus()
                validationCounter = false
            } else {
                document.getElementById(`strDtErr${i}`).innerHTML = ""
            }

            if (passYr.value == "") {
                document.getElementById(`psDtErr${i}`).innerHTML = "PassOut Year can't be empty!"
                startDt.focus()
                validationCounter = false
            } else {
                document.getElementById(`psDtErr${i}`).innerHTML = ""
            }

            if (percent.value == "") {
                document.getElementById(`perErr${i}`).innerHTML = "Percent can't be empty!"
                percent.focus()
                validationCounter = false
            }else if (percent.value < 0) {
                document.getElementById(`perErr${i}`).innerHTML="Percent can't be Negative!"
                percent.focus()
                validationCounter = false
            }else if (percent.value > 100) {
                document.getElementById(`perErr${i}`).innerHTML="Percent can't be greater than 100!"
                percent.focus()
                validationCounter = false
            }
             else {
                document.getElementById(`perErr${i}`).innerHTML = ""
            }

            if (back.value == "") {
                document.getElementById(`bcErr${i}`).innerHTML = "Backlog can't be empty!"
                back.focus()
                validationCounter = false
            }else if (back.value < 0) {
                document.getElementById(`bcErr${i}`).innerHTML = "Backlog can't be Negative!"
                back.focus()
                validationCounter = false
            } else {
                document.getElementById(`bcErr${i}`).innerHTML = ""
            }

        }
    }


    if (validationCounter == true) {

        //slice is used for only print date not time
        db = new Date(dob.value).toUTCString().slice(0,16);  //utc format
    //console.clear()
        details.id = rowCounter
        details.Name = name
        details.DOB = db
        details.Email = emailId
        details.Address = addressDetail
        details.GraduationYear = grYr

        Education = []

        for (let i = 0; i < counter; i++) {
            var degree = document.getElementById(`deg${i}`)
            var college = document.getElementById(`clg${i}`)
            var startDt = document.getElementById(`strDt${i}`)
            var passYr = document.getElementById(`psDt${i}`)
            var percent = document.getElementById(`per${i}`)
            var back = document.getElementById(`bc${i}`)

            if(degree){
                let education = {
                    "Degree": degree.value,
                    "College": college.value,
                    "StratDate": startDt.value,
                    "PassoutYear": passYr.value,
                    "Percentage": percent.value,
                    "Backlog": back.value,
                }
                Education.push(education)  //adding object to array      
            }
        }


        details.Education = Education
        document.getElementById("alertValidation").innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Your Form is Submited!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

       Data.push(details)
       console.log(Data);
       //For printing data in table

        document.getElementById("hide-table").style.display = "block";
        printData(details)
        let f= document.getElementById("StudentForm")
        f.reset()



    } else {
        document.getElementById("alertValidation").innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Please Feel The Form Correctly!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

    }
}



function printData(details){
         
    const addData=document.createElement('tr')
    addData.setAttribute('id',`Data${rowCounter}`)

    addData.innerHTML=`
            <td>${details.id}</td>
            <td>${details.Name}</td>
            <td>${details.DOB}</td>
            <td>${details.Email}</td>
            <td>${details.Address}</td>
            <td>${details.GraduationYear}</td>
            <td>
    <button class="btn btn-primary m-1" onclick="edit(${details.id})"><i class="fas fa-edit"></i> Edit</button>
    <button class="btn btn-primary m-1" onclick="view(${details.id})"><i class="fa-solid fa-eye"></i> View</button>
            </td>
        `
        document.getElementById("tableBody").appendChild(addData)
        rowCounter+=1        
}


//For showing id in alert
function edit(id){
    let r= document.getElementById(`Data${id}`)

    DateOB= new Date(r.children[2].innerHTML)
    DateOBy=DateOB.getFullYear() 
    DateOBm=(DateOB.getMonth()+1).toString().padStart(2,0)  //Months are started from 0 i.e. +1 used
    DateOBd=DateOB.getDate().toString().padStart(2,0)

    r.children[1].innerHTML=`<input id="name${id}" value="${r.children[1].innerHTML}"  type="text" class="form-control" placeholder="Name" required pattern="[a-zA-Z]+ [a-zA-Z]"></input>
    <div id="nameErr${id}" class="text-danger m-1"></div>`
    r.children[2].innerHTML=`<input id="dob${id}" value="${DateOBy}-${DateOBm}-${DateOBd}"  type="date" class="form-control" required>
    <div id="dobErr${id}" class="text-danger m-1"></div>`
    r.children[3].innerHTML=`<input id="email${id}" value="${r.children[3].innerHTML}"  type="email" class="form-control"
    placeholder="example@gmail.com" required> 
    <div id="mailErr${id}" class="text-danger m-1"></div>`
    r.children[4].innerHTML=`<input id="address${id}" value="${r.children[4].innerHTML}"  type="" class="form-control" placeholder="Address" required>
    <div id="addressErr${id}" class="text-danger m-1"></div>`
    r.children[5].innerHTML=`<input id="graduationYear${id}" value="${r.children[5].innerHTML}-06"  type="month" class="form-control" required>
    <div id="grYrErr${id}" class="text-danger m-1"></div>`
    r.children[6].innerHTML=`<button class="btn btn-primary" onclick="update(${id})"><i class="fa-solid fa-arrows-rotate"></i> Update</button>
   `


    // alert("Id Is : "+id)

}
function view(id){
    alert("Id Is : "+id)
}


function update(t){
    let name=document.getElementById(`name${t}`).value
    let dob=document.getElementById(`dob${t}`).value
    let email=document.getElementById(`email${t}`).value
    let address=document.getElementById(`address${t}`).value
    let grYr=document.getElementById(`graduationYear${t}`).value

    var nameCheck = /^[a-zA-Z]+ [a-zA-Z]+$/

    //Email
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //Validations for name
    //Not using if else ladder because of showing all error on one click
    validationCounterTb = true
    if (!nameCheck.test(name)) {
        document.getElementById(`nameErr${t}`).innerHTML = 'Name is Invalid!'
        validationCounterTb = false
    } else {
        document.getElementById(`nameErr${t}`).innerHTML = ''
    }
    if (dob == "") {    //Date of Birth
        document.getElementById(`dobErr${t}`).innerHTML = 'Date Of Birth is Invalid!'
        validationCounterTb = false
    } else {
        document.getElementById(`dobErr${t}`).innerHTML = ''
    }
    if (!mailformat.test(email)) {       //Validations for email
        document.getElementById(`mailErr${t}`).innerHTML = "Invalid Mail Id"
        validationCounterTb = false
    } else {
        document.getElementById(`mailErr${t}`).innerHTML = ''
    }
    if (address == "") {       //Address
        document.getElementById(`addressErr${t}`).innerHTML = 'Address is Invalid!'
        validationCounterTb = false
    } else {
        document.getElementById(`addressErr${t}`).innerHTML = ''
    }
    if (grYr == "") {    //Graduation Year
        document.getElementById(`grYrErr${t}`).innerHTML = 'Graduation year is Invalid!'
        validationCounterTb = false
    } else {
        document.getElementById(`grYrErr${t}`).innerHTML = ''
    }

    
    if(validationCounterTb==true){
        db = new Date(dob).toUTCString().slice(0,16); 
        gr = new Date(grYr)
        Data[t-1].Name=name
        Data[t-1].DOB=db
        Data[t-1].Email=email
        Data[t-1].Address=address
        Data[t-1].GraduationYear=grYr
        
        let r= document.getElementById(`Data${t}`)
        r.children[1].innerHTML=name
        r.children[2].innerHTML=db
        r.children[3].innerHTML=email
        r.children[4].innerHTML=address
        r.children[5].innerHTML=gr.getFullYear()
        r.children[6].innerHTML=`<button class="btn btn-primary m-1" onclick="edit(${t})"><i class="fas fa-edit"></i> Edit</button>
        <button class="btn btn-primary m-1" onclick="view(${t})"><i class="fa-solid fa-eye"></i> View</button>
                </td>
            `
        console.log(Data);   
    }

}
