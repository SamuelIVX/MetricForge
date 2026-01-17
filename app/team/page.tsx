import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, List, LayoutGrid, Columns } from "lucide-react"
import Link from "next/link"

// Mock data
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
  }
]

export default function MainTeamPage(){
    return (

        <div className="space-y-3">

          {teamMembers.map((member) => (

            <Card 
            key={member.id}
            className="bg-[#262626] border-[#404040] hover:border-[#505050] transition-colors cursor-pointer"
            >
            <Link href={`/team/${member.id}`}>

                <CardContent className="p-4">

                    <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4 flex-1">

                        <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-[#404040] text-white">
                            {member.initials}
                        </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                        <h3 className="font-semibold text-white">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>

                        </div>
                    </div>
                    
                    <div className="flex items-center gap-8">

                        <div className="text-center">
                        <p className="text-lg font-bold text-blue-500">{member.activeTasks}</p>
                        <p className="text-xs text-muted-foreground">Active</p>
                        </div>

                        <div className="text-center">
                        <p className="text-lg font-bold text-green-500">{member.completedTasks}</p>
                        <p className="text-xs text-muted-foreground">Done</p>
                        </div>

                        <div className="text-center">
                        <p className="text-lg font-bold text-purple-500">{member.commits}</p>
                        <p className="text-xs text-muted-foreground">Commits</p>
                        </div>

                        <Badge 
                        variant="outline"
                        className={
                            member.availability === "Available" 
                            ? "text-green-500 border-green-500/30 bg-green-500/10" 
                            : member.availability === "In Meeting"
                            ? "text-amber-500 border-amber-500/30 bg-amber-500/10"
                            : "text-gray-500 border-gray-500/30 bg-gray-500/10"
                        }
                        >
                        {member.availability}
                        </Badge>

                        <ChevronRight className="h-5 w-5 text-muted-foreground" />

                    </div>

                    </div>

                </CardContent>
            </Link>

            </Card>
          ))}
          
        </div>

    )
}