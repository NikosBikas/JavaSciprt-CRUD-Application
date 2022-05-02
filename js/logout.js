function logOut() {
    let isExecuted = confirm("Are you sure you want to logout?");
    if (isExecuted)
    location.replace("index.html");
    else {
        return;
    }
  };
