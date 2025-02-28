let student = {
  name: "Tran Quang Hien",
  age: 27,
  hobbies: ["game", "movie", "music"],
};

function showAllHobbies(student) {
  for (let i = 0; i < student.hobbies.length; i++) {
    console.log(student.hobbies[i]);
  }
}

// Call function showAllHobbies after 3 seconds
setTimeout(() => {
  showAllHobbies(student);
}, 3000);
