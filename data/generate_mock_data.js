// Start json-server: json-server --watch db.json

import { faker } from '@faker-js/faker';
import fs from 'fs';

const services = ['S3', 'EC2', 'Lambda', 'DynamoDB', 'RDS', 'CloudFront'];
const statuses = ['Pending', 'Done', 'Todo', 'Ignored'];
const priorities = ['High', 'Medium', 'Low'];

// Generate team members
const teamMembers = Array.from({ length: 15 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(['Senior Developer', 'DevOps Engineer', 'Backend Developer', 'Frontend Developer']),
  team: faker.helpers.arrayElement(['Frontend', 'Backend', 'DevOps']),
  activeTasks: faker.number.int({ min: 3, max: 20 }),
  completedTasks: faker.number.int({ min: 20, max: 80 }),
  commits: faker.number.int({ min: 50, max: 300 }),
  linesOfCode: faker.number.int({ min: 5000, max: 50000 }),
  availability: faker.helpers.arrayElement(['Available', 'In Meeting', 'Away']),
  joinedDate: faker.date.past({ years: 2 }).toISOString().split('T')[0]
}));

// Generate tasks
const tasks = Array.from({ length: 50 }, (_, i) => ({
  taskId: `TASK-${String(i + 1).padStart(3, '0')}`,
  title: `${faker.helpers.arrayElement(services)} ${faker.helpers.arrayElement(['configuration', 'policy', 'security', 'optimization'])} issue`,
  status: faker.helpers.arrayElement(statuses),
  priority: faker.helpers.arrayElement(priorities),
  confidenceRate: `${faker.number.int({ min: 70, max: 99 })}%`,
  reviewer: faker.helpers.arrayElement(teamMembers).id,
  service: faker.helpers.arrayElement(services),
  createdDate: faker.date.recent({ days: 30 }).toISOString()
}));

// Generate AWS cost data
const months = ['January', 'February', 'March', 'April', 'May', 'June'];
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