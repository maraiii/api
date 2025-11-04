

interface CourseListProps {
    courses: string[]
}

export default function CourseList({ courses }: CourseListProps) {
    return (
        <div>
            <h1>Courses:</h1>
            <ul className="space-y-2">
                {courses.map((courses, index) => (
                    <li key={index} className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                        {courses}
                    </li>
                ))}
            </ul>
        </div>
    )
}