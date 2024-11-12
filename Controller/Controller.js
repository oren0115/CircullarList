// File: controller/Controller.js

const { Student, CircularDoublyLinkedList } = require("../Model/Student");
const View = require("../View/View");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Controller {
  constructor() {
    this.studentList = new CircularDoublyLinkedList();
  }

  start() {
    View.showMenu();
    rl.on("line", (input) => {
      switch (input.trim()) {
        case "1":
          this.insertData();
          break;
        case "2":
          this.deleteData();
          break;
        case "3":
          this.printData();
          break;
        case "4":
          this.exit();
          break;
        default:
          View.displayMessage("Pilihan tidak valid. Coba lagi.");
          View.showMenu();
      }
    });
  }

  insertData() {
    rl.question("Masukkan Nama: ", (name) => {
      rl.question("Masukkan NIM: ", (nim) => {
        rl.question("Masukkan Gender: ", (gender) => {
          rl.question("Masukkan Nilai: ", (grade) => {
            const newStudent = new Student(name, nim, gender, grade);
            this.studentList.insertStudent(newStudent);
            View.displayMessage("Data berhasil ditambahkan.");
            View.showMenu();
          });
        });
      });
    });
  }

  deleteData() {
    rl.question("Masukkan NIM yang ingin dihapus: ", (nim) => {
      if (this.studentList.deleteStudent(nim)) {
        View.displayMessage("Data berhasil dihapus.");
      } else {
        View.displayMessage("Data tidak ditemukan.");
      }
      View.showMenu();
    });
  }

  printData() {
    const students = this.studentList.getAllStudents();
    View.displayStudents(students);
    View.showMenu();
  }

  exit() {
    View.displayMessage("Terima kasih!");
    rl.close();
  }
}

module.exports = Controller;
