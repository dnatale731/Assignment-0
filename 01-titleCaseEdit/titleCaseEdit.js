function titleCaseEdit(title) {
  // Insert code here;
  let editedTitle = title.toLowerCase()
  editedTitle = editedTitle.split(" ")
  
  for(let i = 0; i < editedTitle.length; i++) {
    editedTitle[i] = editedTitle[i].charAt(0).toUpperCase() + editedTitle[i].slice(1);
  }
  
  return editedTitle.join(" ")
}

// Do not edit this line;
module.exports = titleCaseEdit;