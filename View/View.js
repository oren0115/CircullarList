// File: view/View.js

class View {
  static showMenu() {
    console.log("CIRCULAR DOUBLY LINKED LIST");
    console.log("===========================");
    console.log("1. INSERT DATA");
    console.log("2. HAPUS DATA");
    console.log("3. CETAK DATA");
    console.log("4. EXIT");
    process.stdout.write("PILIH(1-4): ");
  }

  static displayMessage(message) {
    console.log(message);
  }

  static displayStudents(students) {
    if (students.length === 0) {
      console.log("Tidak ada data mahasiswa.");
      return;
    }
    console.log("\nData Mahasiswa:");
    console.log("========================");
    students.forEach((student) => {
      console.log(`Nama  : ${student.name}`);
      console.log(`NIM   : ${student.nim}`);
      console.log(`Gender: ${student.gender}`);
      console.log(`Nilai : ${student.grade}`);
      console.log("------------------------");
    });
  }
}

module.exports = View;
