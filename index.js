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


/*const form = document.querySelector('form');
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
*/


//saving user detail on server 

/*function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/9c90f64d9b0848d7b34aa18008744e7c/appointmentData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
  });

  editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });
}

// Do not touch code below
module.exports = handleFormSubmit;
*/



//fetching user on screen from network
// Write your code below:
/*  function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/b56b8560ffb3496999c451f78967d33f/appointmentData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
window.addEventListener(DOMContentLoaded,()=>{
  axios.get("https://crudcrud.com/api/b56b8560ffb3496999c451f78967d33f/appointmentData")
    .then((response)=>{
    for(var i=0;i<response.data.length;i++){
      console.log(response)
      displayUserOnscreen(response.data[i])
    }
  })
  .catch((error)=>{
    console.log(error)
      })
})
function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
  });

  editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });
}



// Do not touch the code below
module.exports = handleFormSubmit;


*/


// delete user from screen
/*
function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value
  };

  axios.post('https://crudcrud.com/api/b56b8560ffb3496999c451f78967d33f/appointmentData', userDetails)
      .then(response => displayUserOnScreen(response.data))
      .catch(error => console.error(error));

  // Clearing the input fields
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://crudcrud.com/api/b56b8560ffb3496999c451f78967d33f/appointmentData')
      .then(response => {
          response.data.forEach(user => displayUserOnScreen(user));
      })
      .catch(error => console.error(error));
});

function displayUserOnScreen(userDetails) {
  const userList = document.querySelector("ul");;
  const userItem = document.createElement('li');
  userItem.textContent = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteUser(userDetails, userItem));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editUser(userDetails, userItem));
  userItem.appendChild(editBtn);

  userList.appendChild(userItem);
}

function deleteUser(userDetails, userItem) {
  axios.delete(`https://crudcrud.com/api/b56b8560ffb3496999c451f78967d33f/appointmentData/${userDetails._id}`)
      .then(() => {
          userItem.remove();
      })
      .catch(error => console.error(error));
}

function editUser(userDetails, userItem) {
  document.getElementById('username').value = userDetails.username;
  document.getElementById('email').value = userDetails.email;
  document.getElementById('phone').value = userDetails.phone;

  deleteUser(userDetails, userItem);
}
  */


 // editing user detail from server

 function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value
  };

  axios
  .post('https://crudcrud.com/api/f59c6bfb2000409d8ccddf098baf4ef3/appointmentData', userDetails)
      .then(response => displayUserOnScreen(response.data))
      .catch(error => console.error(error));

  // Clearing the input fields
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  axios
  .get('https://crudcrud.com/api/f59c6bfb2000409d8ccddf098baf4ef3/appointmentData')
      .then(response => {
          response.data.forEach(user => displayUserOnScreen(user));
      })
      .catch(error => console.error(error));
});

function displayUserOnScreen(userDetails) {
  const userList = document.querySelector("ul");
  userList.innerHTML =`<li><p>${userDetails.username} - ${userDetails.email} - ${userDetails.phone}</p></li>` 

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteUser(userDetails, userItem));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => editUser(userDetails, userItem));
  userItem.appendChild(editBtn);

  userList.appendChild(userItem);
}

function deleteUser(userDetails, userItem) {
  axios
  .delete(`https://crudcrud.com/api/f59c6bfb2000409d8ccddf098baf4ef3/appointmentData/${userDetails._id}`)
      .then(() => {
          userItem.remove();
      })
      .catch(error => console.error(error));
}

function editUser(userDetails, userItem) {
  document.getElementById('username').value = userDetails.username;
  document.getElementById('email').value = userDetails.email;
  document.getElementById('phone').value = userDetails.phone;

  deleteUser(userDetails, userItem,userDetails._id);
}