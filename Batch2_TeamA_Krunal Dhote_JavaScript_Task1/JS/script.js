function Add() {
    const add = document.createElement("div");   //  Div element is created
    add.classList = "row mt-2"                     //  Div having class row and mt-2

    //Inner HTML of that div 

    add.innerHTML = `                              
        <div class="mb-3  col">
            <label for="formGroupExampleInput" class="form-label">Degree/Board</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label">School/Colege</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label">Start Date</label>
            <input type="month" class="form-control" required>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label">Passout Year</label>
            <input type="month" class="form-control" placeholder="mm/yyyy" required>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label">Percentage</label>
            <input type="number" class="form-control" min="0" max="100" placeholder="Don't use % sign" required>
        </div>
        <div class="mb-3 col">
            <label for="formGroupExampleInput" class="form-label">Backlog</label>
            <input type="number" class="form-control" min="0" placeholder="If Any">
        </div>
        <div class="mb-3 col text-center">
                <button type="button" class="delBtn border-0 rounded-circle bg-dark" onclick="Del(this)"> 
                        <i class="text-white fa-solid fa-minus"></i></button>
                 </div>
        <hr>
   `; //By clicking on - button Del function will be call and "this" is the attribute passed to the Del()

    document.getElementById("form").appendChild(add);    //New row will append in id "form"
};


function Del(ele) {                       // ele = this = element which clicked = button
    let del = ele.parentNode.parentNode   // parent of button is div and parent of that div is row-div
    del.remove();                        // row will be removed
}



