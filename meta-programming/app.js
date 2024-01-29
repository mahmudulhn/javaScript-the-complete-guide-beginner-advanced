//Library
const uid = Symbol();
console.log(uid);

const user = {
    [uid]: 'p1',
    name: 'max',
    age: 22,
    [Symbol.toStringTag]: 'User'
};

user[uid] = 'p3';

//app
user.id = 'p2';

console.log(user[Symbol('uid')]);

console.log(Symbol('uid') === Symbol('uid'));

console.log(user.toString());

const company = {
    // curEmployee: 0,
    employees: ['max', 'manu', 'anna'],

    // next() {
    //     if (this.curEmployee >= this.employees.length) {
    //         return { value: this.curEmployee, done: true };
    //     }

    //     const returnValue = {
    //         value: this.employees[this.curEmployee],
    //         done: false
    //     };

    //     this.curEmployee++;
    //     return returnValue;
    // },

    [Symbol.iterator]: function* employeeGenerator() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};

// let employee = company.next();

// while (!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

for (const employee of company) {
    console.log(employee);
}

console.log([...company]);

const persons = ['max', 'manu'];

console.log(persons);

//

const course = {
    title: 'js'
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title;
    }
});

// Reflect.deleteProperty(course, 'title');

console.log(course);

const courseHandler = {
    get(obj, propertyName) {
        console.log(propertyName);
        return obj[propertyName] || 'Not Found';
    },
    set(obj, propertyName, newValue) {
        obj[propertyName] = newValue;
    }
}

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.rating);