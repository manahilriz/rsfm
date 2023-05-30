const submitData = () => {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let address = document.querySelector('#address').value;

    let e_name = document.querySelector('#e_name');
    let e_email = document.querySelector('#e_email');
    let e_phone = document.querySelector('#e_phone');
    let e_address = document.querySelector('#e_address');

    if (name !=""){
        e_name.innerTEXT ="";
    }
    if (email !=""){
        e_email.innerTEXT ="";
    }
    if (phone !=""){
        e_phone.innerTEXT ="";
    }
    if (address !=""){
        e_address.innerTEXT ="";
    }

    if (name ==""){
        e_name.innerTEXT ="Name is required";
    }
    else if (email ==""){
        e_email.innerTEXT ="Email is required";
    }
    else if (phone ==""){
        e_phone.innerTEXT ="Phone is required";
    }
    else if (address ==""){
        e_address.innerTEXT ="Address is required";
    }else{
        let obj = {
            name:name,
            email:email,
            phone:phone,
            address:address,
        };

        let emp;
        if(localStorage.length == 0){
            emp =[];
        }else {
            let employee =localStorage.getItem("employee");
            emp= JSON.parse(employee);
        }
         
        emp.push(obj);
        localStorage.setItem("employee", JSON.stringify(emp));

            clear();
            showData();
        }
        
    };

    const clear =()=>{
        let name =(document.querySelector('#name').value ="");
        let email =(document.querySelector('#email').value  ="");
        let phone =(document.querySelector('#phone').value  ="") ;
        let address =(document.querySelector('#address').value  ="") ;
    };

    const showData=() =>{
        let employee =localStorage.getItem("employee");
        let emp= JSON.parse(employee);

        let tbody=document.getElementById (`tbody`);
        let tr="";
        for(let i in emp){
            tr += `
           <tr>
           <td>${emp[i].name}</td>
           <td>${emp[i].email}</td>
           <td>${emp[i].phone}</td>
           <td>${emp[i].address}</td>
           <td><a onclick='remove(${i})' class="btn btn-warning text-white">Delete</a></td>

           </tr>
           `;
        }
        tbody.innerHTML =tr;
    };
    showData();

    function remove(index){

        let employee =localStorage.getItem("employee");
        let emp= JSON.parse(employee);

        if(index > -1){
            emp.splice(index ,1);
        }
        localStorage.setItem("employee", JSON.stringify(emp));
        showData();
    }
