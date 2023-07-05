/**
 * Represents the information of a student.
 */
interface Student {
	firstName: string; // The first name of the student.
	lastName: string; // The last name of the student.
	age: number; // The age of the student.
	location: string; // The location of the student.
}

// Create two student objects
const firstStudent: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 26,
	location: "Germany"
};

const secondStudent: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 22,
	location: "England"
};

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

/**
 * Renders the student information in a table.
 * @param students - An array of student objects.
 */
function renderStudentsTable(students: Student[]): void {
	students.forEach((student) => {
		const row = table.insertRow();
		const firstNameCell = row.insertCell(0);
		const locationCell = row.insertCell(1);

		firstNameCell.innerHTML = student.firstName;
		locationCell.innerHTML = student.location;
	});
}

// Render the students table
renderStudentsTable(studentsList);

