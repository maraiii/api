import CourseList from "./components/CourseList";
import StudentCard from "./components/StudentCard";

interface Student {
    name: string;
    age: number;
    grade: string;
    courses: string[];
}

interface DashboardProps {
    students: Student[];
}


export default function Dashboard({ students }: DashboardProps) {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Student Dashboard
            </h1>

            <div className="space-y-8">
                {students.map((student, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                    >
                        <StudentCard
                            name={student.name}
                            age={student.age}
                            grade={student.grade}
                        />
                        <div className="px-6 pb-6">
                            <CourseList courses={student.courses} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}