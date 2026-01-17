import MemberCard from "./member_card/page"

// Mock Data
const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    initials: "JD",
    role: "Senior Developer",
    activeTasks: 12,
    completedTasks: 48,
    commits: 156,
    status: "Active",
    availability: "Available",
    team: "Frontend"
  },
  {
    id: "2",
    name: "Alice Johnson",
    initials: "AJ",
    role: "DevOps Engineer",
    activeTasks: 8,
    completedTasks: 62,
    commits: 203,
    status: "Active",
    availability: "In Meeting",
    team: "DevOps"
  },
  {
    id: "3",
    name: "Bob Smith",
    initials: "BS",
    role: "Backend Developer",
    activeTasks: 15,
    completedTasks: 41,
    commits: 189,
    status: "Active",
    availability: "Available",
    team: "Backend"
  },
  {
    id: "4",
    name: "Carol White",
    initials: "CW",
    role: "Frontend Developer",
    activeTasks: 6,
    completedTasks: 55,
    commits: 142,
    status: "Active",
    availability: "Away",
    team: "Frontend"
  },
  {
    id: "5",
    name: "David Lee",
    initials: "DL",
    role: "Backend Developer",
    activeTasks: 10,
    completedTasks: 38,
    commits: 167,
    status: "Active",
    availability: "Available",
    team: "Backend"
  },
  {
    id: "6",
    name: "Emma Davis",
    initials: "ED",
    role: "DevOps Engineer",
    activeTasks: 7,
    completedTasks: 44,
    commits: 178,
    status: "Active",
    availability: "Available",
    team: "DevOps"
  },
  {
    id: "7",
    name: "John Doe",
    initials: "JD",
    role: "Senior Developer",
    activeTasks: 12,
    completedTasks: 48,
    commits: 156,
    status: "Active",
    availability: "Available",
    team: "Frontend"
  },
  {
    id: "8",
    name: "Alice Johnson",
    initials: "AJ",
    role: "DevOps Engineer",
    activeTasks: 8,
    completedTasks: 62,
    commits: 203,
    status: "Active",
    availability: "In Meeting",
    team: "DevOps"
  },
  {
    id: "9",
    name: "Bob Smith",
    initials: "BS",
    role: "Backend Developer",
    activeTasks: 15,
    completedTasks: 41,
    commits: 189,
    status: "Active",
    availability: "Available",
    team: "Backend"
  },
  {
    id: "10",
    name: "Carol White",
    initials: "CW",
    role: "Frontend Developer",
    activeTasks: 6,
    completedTasks: 55,
    commits: 142,
    status: "Active",
    availability: "Away",
    team: "Frontend"
  },
]

export default function MainTeamPage() {
  return (

    <div className="space-y-3">

      {teamMembers.map((member) => (
        <MemberCard key={member.id} {...member} />
      ))}

    </div>

  )
}