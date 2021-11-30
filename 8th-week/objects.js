// Regular Objects
const job = {
    title: 'Developer',
    location: 'New York',
    salary: 50000,
}

// Built-int Objects
const tanggal = new Date().toISOString();
console.log(tanggal);

// Initiate a brand new Objects
class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`Hello! I'm ${this.title} and Work in ${this.location} with $${this.salary} salary`)
    }
}

const developer = new Job('Developer', 'New York', 50000);
developer.describe();
console.log(developer);
const chef = new Job('Chef', 'Las Vegas', 35000);
chef.describe();

// Destructuring Arrays & Objects
const userName = ['Chrisna', 'Adhi', 'Pranoto'];

const [ firstName, middleName, lastName ] = userName;
console.log(firstName, middleName, lastName);

const { title: devTitle, location: devLocation, salary: devSalary } = developer;
console.log(devTitle, devLocation, devSalary);

const { title: chefTitle, location: chefLocation, salary: chefSalary } = chef;
console.log(chefTitle, chefLocation, chefSalary);