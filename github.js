class Github{
    constructor(url) {
        this.url = "https://api.github.com/users/"
    }
    async getGithubData(username){
        const responseUSer = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username+ "/repos")
        
        const userData = await responseUSer.json();
        const repoData = await responseRepo.json();

        return {
            user:userData,
            repo:repoData
        }
    }
}