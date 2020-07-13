// Element secimi 
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const git = new Github();
const ui = new UI();
eventLİsteners();
function eventLİsteners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",allSearched);
}
function getData(e){
    let username = nameInput.value.trim();

    if (username === "") {
        alert("Lütfen geçerli bir kullanıcı adı girin")
    }
    else{

     git.getGithubData(username)
     .then(response => {
         if(response.user.message ==="Not Found"){
             ui.showError("Kullanıcı bulunamadı")
             
         }
         else {
             ui.addSerachedUserUI(username);
             Storage.addSearchedUserToStorage(username);
             ui.showUserInfo(response.user);
             ui.showRepoInfo(response.repo)
        }
     })
     .catch(err=> ui.showError(err))
     
     
    }
    ui.clearInput();// input temizleme
    e.preventDefault();
}
function clearAllSearched(){
    // tüm arananları temizleme

    if(confirm("Emin Misiniz ?")){
        // Silme
        Storage.clearAllSearchedUsersFromStorage();// Storagean temizleme
        ui.clearAllSearchedUI();
    }
}
function allSearched(){
    let users = Storage.getSearchedusersFromStorage();
    let result = "";
    users.forEach(user=>{
        result += `
        <li class="list-group-item">${user}</li>
        `;

    });
    lastUsers.innerHTML = result;
}