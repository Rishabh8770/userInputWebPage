/* let age:number = 20;
if(age<50){
    age += 10
} */

interface User {
    name: string;
    id: number;
}
class NewUser {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new NewUser("Rishabh", 123)
console.log(user)