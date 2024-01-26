const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userId = 'u123';
    const user = {
        name: 'Max',
        age: 30
    }
    document.cookie = `uid=${userId}; max-age=2`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retBtn.addEventListener('click', () => {
    console.log(document.cookie);
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    })
    console.log(data[1].split('=')[1]);
});