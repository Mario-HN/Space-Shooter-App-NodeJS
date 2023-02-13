async function searchUsers(userName) {
    try {
        const response = await fetch(`https://api.github.com/search/users?q=${userName}`);
        const data = await response.json();
        if (!data.items) {
            throw new Error('Array "items" não encontrado na resposta da API');
        }
        const foundUser = data.items.find(user => user.login === userName);
        return !!foundUser;
    } catch (error) {
        return error.message;
    }
}

searchUsers('john').then(result => {
    console.log(result);
});