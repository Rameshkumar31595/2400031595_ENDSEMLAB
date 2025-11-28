import { departmentData } from "../data/department";

export async function getStaticProps() {
  return {
    props: {
      dept: departmentData,
    },
  };
}

export default function DepartmentPage({ dept }) {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        {dept.name} Department
      </h1>

      <p><strong>HOD:</strong> {dept.hod}</p>
      <p><strong>Email:</strong> {dept.contact}</p>
      <p><strong>Phone:</strong> {dept.phone}</p>

      <h2 style={{ marginTop: "20px" }}>Faculty Members</h2>

      {dept.faculty.map((f, index) => (
        <div key={index}
             style={{
               border: "1px solid #ccc",
               padding: "15px",
               borderRadius: "8px",
               marginBottom: "10px",
               background: "#fff",
             }}>
          <p><strong>Name:</strong> {f.name}</p>
          <p><strong>Designation:</strong> {f.designation}</p>
          <p><strong>Email:</strong> {f.email}</p>
        </div>
      ))}
    </div>
  );
}
