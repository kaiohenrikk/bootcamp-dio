function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Kaio', 'Admin');
usuarios.set('Lana', 'User');
usuarios.set('Marta', 'Admin');

console.log(getAdmins(usuarios));