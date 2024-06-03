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
    localStorage.setItem('User Details',JSON.stringify(userDetail));
  }
  module.exports=handleFormSubmit;
  