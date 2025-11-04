
interface StudentCardProps {
    name: string,
    age: number,
    grade: string
}

export default function StudentCard({ name, age, grade }: StudentCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Student Card:</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-2xl font-bold text-gray-800">{name}</p>
                        <p className="text-gray-600">Name</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-green-600">{age}</p>
                        <p className="text-gray-600">Idade</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-green-600">{grade}</p>
                        <p className="text-gray-600">Grade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}