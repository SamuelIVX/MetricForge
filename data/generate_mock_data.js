/*
 npm run generate-data 
 npm run mock-api
*/
import { faker } from '@faker-js/faker';
import fs from 'fs';

const services = ['S3', 'EC2', 'Lambda', 'DynamoDB', 'RDS', 'CloudFront'];
const statuses = ['Pending', 'Done', 'Todo', 'Ignored'];
const priorities = ['High', 'Medium', 'Low'];
const role = [
  'Senior Developer', 
  'DevOps Engineer', 
  'Software Engineer', 
  'Tech Lead', 
  "Automation Tester", 
  "Data Engineer", 
  "Frontend Developer", 
  "Backend Developer", 
  "Product Manager"
];
const team = ['Frontend', 'Backend', 'DevOps'];
const availability = ['Available', 'In Meeting', 'Away'];
const type = ['configuration', 'policy', 'security', 'optimization'];
const months = ['January', 'February', 'March', 'April', 'May', 'June'];

const NUMBER_OF_MEMBERS = 15
const NUMBER_OF_TASKS = 50

const fullNames = []
function generateNames(){
   for (let i = 0; i < NUMBER_OF_MEMBERS; i++) {
      fullNames.push([faker.person.firstName(), faker.person.lastName()]);
   }

   return fullNames;
}
generateNames();

// Generate team members
const teamMembers = Array.from({ length: NUMBER_OF_MEMBERS }, (_, i) => ({
  id: `user-${i + 1}`,
  firstName: fullNames[i][0],
  lastName: fullNames[i][1],
  email: faker.internet.email({firstName: fullNames[i][0], lastName: fullNames[i][1]}),
  location: `${faker.location.city}, ${faker.location.state({abbreviated: true})}`,
  role: faker.helpers.arrayElement(role),
  team: faker.helpers.arrayElement(team),
  activeTasks: faker.number.int({ min: 1, max: 3 }),
  completedTasks: faker.number.int({ min: 5, max: 20 }),
  commits: faker.number.int({ min: 3, max: 12 }),
  linesOfCode: faker.number.int({ min: 500, max: 3000 }),
  availability: faker.helpers.arrayElement(availability),
  joinedDate: faker.date.past({ years: 2 }).toISOString().split('T')[0]
}));

// Generate tasks
const tasks = Array.from({ length: NUMBER_OF_TASKS }, (_, i) => ({
  taskId: `TASK-${String(i + 1).padStart(3, '0')}`,
  title: `${faker.helpers.arrayElement(services)} ${faker.helpers.arrayElement(type)} issue`,
  status: faker.helpers.arrayElement(statuses),
  priority: faker.helpers.arrayElement(priorities),
  confidenceRate: `${faker.number.int({ min: 0, max: 99 })}%`,
  reviewer: Math.random() <= .40 ? faker.helpers.arrayElement(teamMembers).firstName : "",
  service: faker.helpers.arrayElement(services),
  createdDate: faker.date.recent({ days: 30 }).toISOString()
}));

// Generate AWS cost data
const awsCosts = months.flatMap(month => 
  services.map(service => ({
    month,
    service,
    cost: faker.number.float({ min: 100, max: 1000, precision: 0.01 }),
    usage: faker.number.int({ min: 1000, max: 10000 })
  }))
);

// Save data as an object
const db = {
  teamMembers,
  tasks,
  awsCosts
};

// db.json: Write mock data to db.json (powered by json-server)
// JSON.stringify : Convert the JSON object into a JSON string top mimick a RESTFUL API
// null : There is no need to be replaced
// 2 : A whitespace of 2 for better readability
fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('✅ Mock data generated!');