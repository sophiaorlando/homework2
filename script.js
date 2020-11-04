$(document).ready(function () {

  const skillsArr = [
    "HTML",
    "CSS",
    "Javascript",
    "jQuery",
    "Bootstrap",
    "Foundation",
    "Responsive Design",
    "Node.js",
    "AJAX",
    "ES6",
    "React.js",
    "SQL",
    "Express",
    "MERN Stack",
    "MongoDB",
    "Product Management",
    "PHP",
    "Github",
    "Heroku",
    "Product Management",
    "Product Management",
  ]

  for (let index = 0; index < skillsArr.length; index++) {
    const skill = skillsArr[index];
    var something = $('<button/>').attr({
      "type": "button", "class": "btn skillBtn btn-block", "data-container": "body",
      "data-toggle": "popover", "data-placement": "top", "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    }).text(skill);
    $("#item").append(something);

  }
  $('[data-toggle="popover"]').popover();


});


