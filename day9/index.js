class A {
	constructor(name, rollNumber, address, mobileNumber) {
		this.name = name;
		this.rollNumber = rollNumber;
		this.address = address;
		this.mobileNumber = mobileNumber;
	}
}
const students = [
	new A("Ansh", 1, "Delhi", "9876543210"),
	new A("Rachit", 2, "Mumbai", "9876543211"),
	new A("Naman", 3, "Pune", "9876543212"),
	new A("Prateek", 4, "Jaipur", "9876543213"),
	new A("Naveen", 5, "Chennai", "9876543214")
];
students.forEach((student) => {
	console.log(student);
});
console.table(students);
class StudentRecord {
  static collegeName = "AIML College";
  static totalStudents = 0;
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
    StudentRecord.totalStudents += 1;
  }
  static displayStudentInfo() {
    console.log("College:", StudentRecord.collegeName);
    console.log("Total Students:", StudentRecord.totalStudents);
  }
}
const s1 = new StudentRecord("Aarav", 101);
const s2 = new StudentRecord("Meera", 102);
StudentRecord.displayStudentInfo();
console.log("Student 1:", s1);
console.log("Student 2:", s2);


//question 1

