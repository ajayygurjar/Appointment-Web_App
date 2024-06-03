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
function handleFormSubmit(event){
    event.preventDefault();
    const Username=event.target.username.value;
    const Email=event.target.email.value;
    const Phone=event.target.phone.value;
    const userDetail={
      username:Username,
      email:Email,
      phone:Phone
    }
    
    localStorage.setItem(Email,JSON.stringify(userDetail));
    showOnScreen(userDetail);
  }
  module.exports=handleFormSubmit;
  function showOnScreen(userDetail){
    const parentElem=document.getElementById('listItem');
    const childElem=document.createElement('li')
    childElem.textContent=userDetail.username +'-'+ userDetail.email + '-'+ userDetail.phone
    parentElem.appendChild(childElem);
  }
  