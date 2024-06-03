// Step:-1 Understanding Local Storage

// function storeInLocalStorage(event){
//     event.preventDefault();
//     const Username=event.target.username.value;
//     const Email=event.target.email.value;
//     const Phone=event.target.phone.value;
//     localStorage.setItem('Username',Username);
//     localStorage.setItem('Email',Email);
//     localStorage.setItem('Phone',Phone);
//   }
//   module.exports=storeInLocalStorage;

// Step:-2 Correct Way to Store Data in Local Storage


// Write your code below:
// function handleFormSubmit(event){
//     event.preventDefault();
//     const Username=event.target.username.value;
//     const Email=event.target.email.value;
//     const Phone=event.target.phone.value;
//     const userDetail={
//       username:Username,
//       email:Email,
//       phone:Phone
//     }
//     localStorage.setItem('User Details',JSON.stringify(userDetail));
//   }
//   module.exports=handleFormSubmit;
  

//Step:-3 how to scale 
//ou were able to store single user's details in the local storage. 
//But this is not scalable. Every time you add a new user, the older user gets removed. 
//Try to solve this problem in this task.



// Write your code below:
// function handleFormSubmit(event){
//     event.preventDefault();
//     const Username=event.target.username.value;
//     const Email=event.target.email.value;
//     const Phone=event.target.phone.value;
//     const userDetail={
//       username:Username,
//       email:Email,
//       phone:Phone
//     }
    
//     localStorage.setItem(Email,JSON.stringify(userDetail));
//     showOnScreen(userDetail);
//   }
//   module.exports=handleFormSubmit;
//   function showOnScreen(userDetail){
//     const parentElem=document.getElementById('listItem');
//     const childElem=document.createElement('li')
//     childElem.textContent=userDetail.username +'-'+ userDetail.email + '-'+ userDetail.phone
//     parentElem.appendChild(childElem);
//   }
  

//Step:-4 Having Delete Functionality

// Write your code below:
// function handleFormSubmit(event) {
//     event.preventDefault();
//     const username = event.target.username.value;
//     const email = event.target.email.value;
//     const phone = event.target.phone.value;
  
//     const obj = {
//       username, 
//       email,
//       phone
//     }
//     localStorage.setItem(obj.email, JSON.stringify(obj));
//     displayUser(obj)
//   } 
  
//   function displayUser(obj) {
//     const parentElement = document.getElementById('listOfItems')
//     const childElement = document.createElement('li')
//     childElement.textContent = obj.username + " - " + obj.email + " - " + obj.phone
    
//     const delBtn = document.createElement('input');
//     delBtn.type = 'button'
//     delBtn.value = 'Delete'
  
//    delBtn.onclick = () => {
//      localStorage.removeItem(obj.email);
//       parentElement.removeChild(childElement)
//    }
//     childElement.appendChild(delBtn);
//     parentElement.appendChild(childElement);
    
//   }
  
//   module.exports = handleFormSubmit


//Step:-5 Having Edit Functionality

// Write your code below:
const form = document.querySelector('form');
function handleFormSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username,
    email,
    phone
  }
  localStorage.setItem(obj.email, JSON.stringify(obj));
  displayUser(obj);
}

function displayUser(obj) {
  const ul = document.getElementById("listOfItems");
  const li = document.createElement('li');
  li.textContent = obj.username + " - " + obj.email + " - " + obj.phone;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', delFun);
  
  function delFun() {
    ul.removeChild(li);
    localStorage.removeItem(obj.email);
  }
  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";

  editBtn.addEventListener('click', editFun);

  function editFun() {
    ul.removeChild(li);
    localStorage.removeItem(obj.email);

    document.getElementById('username').value = obj.username;
    document.getElementById('email').value = obj.email;
    document.getElementById('phone').value = obj.phone;
  }
  li.appendChild(delBtn);
  li.appendChild(editBtn);
  ul.appendChild(li);
}
module.exports = handleFormSubmit;