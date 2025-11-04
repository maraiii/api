import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StudentCard from "./components/StudentCard";
import CourseList from "./components/CourseList";
import Dashboard from "./Dashboard";

const queryClient = new QueryClient();

function App() { //function declaration not arrow function nor FC
  const students = [
    { name: "Ana Costa", age: 15, grade: "9º Ano" },
    { name: "Pedro Oliveira", age: 16, grade: "10º Ano" },
    { name: "Carla Rodrigues", age: 17, grade: "11º Ano" },
    { name: "Lucas Almeida", age: 18, grade: "12º Ano" }
  ];
  const students2 = [
    { name: "Fiza", age: 13, grade: "A+", courses: ["Math", "Science", "Python"] },
    { name: "Alissa", age: 12, grade: "A", courses: ["AI", "Scratch", "Design"] }
  ];

  const courses = [
    "Math", "Science", "Programming"
  ]

  return (
    <><div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Estudantes</h1>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          grade={student.grade} />
      ))}

      <div>
        {<CourseList courses={courses} />}

      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <StudentCard name="Ali" age={14} grade="B+" />
        <div className="px-6 pb-6">
          <CourseList courses={["Scratch", "Electronics", "Robotics"]} />
        </div>
      </div>
    </div>
      <Dashboard students={students2} />
    </>
  );
}


export default App;
