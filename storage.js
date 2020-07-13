class Storage {
static getSearchedusersFromStorage(){
    // tüm kullanıcıları al

    let users;
    if(localStorage.getItem("searched") === null){
        users = [];
    
    }
    else{
        users = JSON.parse(localStorage.getItem("searched"));
    }
    return users;
}
static addSearchedUserToStorage(username){
    // Kullanıcı Ekle   

    let users = this.getSearchedusersFromStorage();
    // IndexOF
    if(users.indexOf(username) ===-1){
        users.push(username);
    }
    localStorage.setItem("searched",JSON.stringify(users));


}
static clearAllSearchedUsersFromStorage(){
    // Kullacıları silme
     localStorage.removeItem("searched");
}
}