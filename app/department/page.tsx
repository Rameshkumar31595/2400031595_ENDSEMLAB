// @ts-nocheck
import { departmentData } from "../data/department";

export const metadata = {
  title: "Department Info | KL University",
};

export default function DepartmentPage() {
  const dept = departmentData;

  return (
    <div className="min-h-screen bg-white text-black p-6 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* Department Header */}
        <h1 className="text-4xl font-bold mb-6">
          {dept.name} Department
        </h1>

        <div className="space-y-2 text-lg">
          <p>
            <span className="font-semibold">HOD:</span> {dept.hod}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {dept.contact}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {dept.phone}
          </p>
        </div>

        {/* Faculty Title */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          Faculty Members
        </h2>

        {/* Faculty Cards */}
        <div className="space-y-4">
          {dept.faculty.map((f, index) => (
            <div
              key={index}
              className="bg-white border p-5 rounded-lg shadow-md"
            >
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Name:</span> {f.name}
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Designation:</span> {f.designation}
              </p>
              <p className="text-gray-800 text-lg">
                <span className="font-semibold">Email:</span> {f.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
