const users = [
  {
    userID: "Batuhan",
    post: "post 1",
  },
  {
    userID: "Semiz",
    post: "post 2",
  },
  {
    userID: "Samet",
    post: "post 3",
  },
  {
    userID: "Samet",
    post: "post 4",
  },
  {
    userID: "Samet",
    post: "post 5",
  }
];


function getUsersID(){
    setTimeout(() => {
        return 5;
    }, 1000);
}

function getpostIDByPost(userID){
    setTimeout(() => {
        users.forEach(user => {
            if(user.userID === userID){
                console.log(user.post)
            }
        })
    }, 500);
}



let userID = getUsersID();
getpostIDByPost(userID);

