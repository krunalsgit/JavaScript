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
        console.clear()
        db = new Date(dob.value).toUTCString();  //utc format

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

        console.log(details);

    } else {
        console.clear()
        document.getElementById("alertValidation").innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Please Feel The Form Correctly!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

    }

}

