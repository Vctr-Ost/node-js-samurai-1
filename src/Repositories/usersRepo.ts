const users = [
    {id: 1, name: 'Andriy', age: 29},
    {id: 2, name: 'Maxim', age: 40},
    {id: 3, name: 'Petro', age: 29},
    {id: 4, name: 'Viacheslav', age: 16},
    {id: 5, name: 'Ivan', age: 29}
]

export const usersRepo = {
    getUsers() {
        return users;
    },
    getSingleUser(id: number) {
        const p = users.filter(i => i.id === id);
        if (p.length === 0) return 404;
        else return p;
    },
    addUser(name: string, age: number) {
        const newUser = {
            id: users[users.length - 1].id + 1,
            name,
            age
        };
        users.push(newUser);
        return 201
    },
    updUserName(id: number, name: string) {
        let isUpd = false;
        users.forEach(el => {
            if (el.id === id) {
                el.name = name;
                isUpd = true;
            }
        });
        if (isUpd) return 201;
        else return 404;
    },
    delUser(id: number) {
        let res = 404;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1);
                res = 200;
            }
        }
        return res;
    }
}