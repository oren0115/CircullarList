class Student {
  constructor(name, nim, gender, grade) {
    this.name = name;
    this.nim = nim;
    this.gender = gender;
    this.grade = grade;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
  }
  insertStudent(student) {
    if (!this.head) {
      this.head = student;
      this.head.next = this.head;
      this.head.prev = this.head;
      return;
    }

    let current = this.head;
    let inserted = false;

    // mencari berdasarkan NIM
    do {
      if (parseInt(student.nim) < parseInt(current.nim)) {
        student.next = current;
        student.prev = current.prev;
        current.prev.next = student;
        current.prev = student;
        if (current === this.head) {
          this.head = student;
        }
        inserted = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);
    if (!inserted) {
      student.next = this.head;
      student.prev = this.head.prev;
      this.head.prev.next = student;
      this.head.prev = student;
    }
  }
  // delete
  deleteStudent(nim) {
    if (!this.head) return false;
    let current = this.head;
    let found = false;
    do {
      if (current.nim === nim) {
        if (current.next === current) {
          this.head = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          if (current === this.head) this.head = current.next;
        }
        found = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);
    return found;
  }

  getAllStudents() {
    const students = [];
    if (!this.head) return students;
    let current = this.head;
    do {
      students.push(current);
      current = current.next;
    } while (current !== this.head);
    return students;
  }
}
module.exports = { Student, CircularDoublyLinkedList };
