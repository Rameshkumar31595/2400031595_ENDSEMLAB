export interface FacultyMember {
  name: string;
  designation: string;
  email: string;
}

export interface Department {
  name: string;
  hod: string;
  contact: string;
  phone: string;
  faculty: FacultyMember[];
}

export const departmentData: Department = {
  name: "Computer Science & Engineering",
  hod: "Dr. Sriram V",
  contact: "cse@kluniversity.in",
  phone: "+91 9876543210",

  faculty: [
    { name: "Dr. Ramesh K", designation: "Professor", email: "ramesh@kluniversity.in" },
    { name: "Ms. Devi L", designation: "Assistant Professor", email: "devi@kluniversity.in" },
    { name: "Mr. Ajay P", designation: "Associate Professor", email: "ajay@kluniversity.in" },
  ],
};
