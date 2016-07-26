
/*
  Online Resume
  Author: Ariel Taveras
 */



 var bio =
 {
   "name": "Ariel Taveras",
   "role": "Engineer",
   "contacts": {
     "mobile": "1234",
     "email": "1233",
     "github": "2342",
     "twitter": "2341"
   },
   "welcomeMessage": "hello",

   "skills": [
   "awsomeness", "stuff", "spaceship", "more stuff"
    ],
    "bioPic": "<img src='images/fry.jpg' class='img-responsive' height='92' width='92'>"
 };


var work = {
  "jobs": [
    {
      "employer": "planet express",
      "title": "delivery boy",
      "dates": "january 3000 - future",
      "description": "who moved my cheese thing to some other place "
    },
    {
      "employer": "planet express",
      "title": "delivery boy",
      "dates": "january 3000 - future",
      "description": "who moved my cheese thing to some other place "
    }
  ]
};

var projects =
{
  "project": [
    {
      "title":"sample project 1",
      "dates":"2014",
      "description": "who moved my stuff to some other place. this is the same description as the other one",
      "images":
      [
        "<img src='images/placeholder.gif'>",
        "asdfasdfasdf"
      ]
    }
  ]
};

var education = {
  "schools": [
    {
      "name":"school 1",
      "location":"ny",
      "degree":"B.S",
      "majors":["cs"],
      "dates": 2013,
      "url": "example.com"
    },
    {
      "name":"school 2",
      "location":"ny",
      "degree":"masters",
      "majors":["cs"],
      "dates": 2013,
      "url": "example.com"
    }
  ],
  "onlineCourses": [
    {
      "title":"JavaScript Syntax",
      "school": "udacity",
      "dates": 2014,
      "url":"udacity.com"
    }
  ]
};



function displayHeader() {

  var name = "Ariel Taveras";
  var formattedName = HTMLheaderName.replace("%data%", name);
  var role = "Web Developer";
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
}



function displayBio() {
  var mobile = HTMLmobile.replace("%data%", "123456");
  var email = HTMLemail.replace("%data%", "123456");
  var github = HTMLgithub.replace("%data%", "123456");
  var location = HTMLlocation.replace("%data%", "123456");
  var blog = HTMLblog.replace("%data%", "123456");
  var twitter = HTMLtwitter.replace("%data%", "123456");
  $("#topContacts").append(mobile);
  $("#topContacts").append(email);
  $("#topContacts").append(twitter);
  $("#topContacts").append(github);
  $("#topContacts").append(blog);
  $("#topContacts").append(location);
  $("#header").append(bio.bioPic);

  $("#footerContacts").append(mobile);
  $("#footerContacts").append(email);
  $("#footerContacts").append(twitter);
  $("#footerContacts").append(github);
  $("#footerContacts").append(blog);
  $("#footerContacts").append(location);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

  }
}

function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

function displayEducation() {
  $("#education").append(HTMLschoolStart);
  for (var school in education.schools) {
      // $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      $(".education-entry").append(formattedName);
      $(".education-entry").append(formattedDates);
      $(".education-entry").append(formattedDegree);
      $(".education-entry").append(formattedLocation);
  }
  for (var course in education.onlineCourses) {
    $("#education").append();
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDates2 = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $(".education-entry").append(formattedTitle);
    $(".education-entry").append(formattedSchool);
    $(".education-entry").append(formattedDates2);
    $(".education-entry").append(formattedURL);
  }
}

function displayProjects() {
  $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", "Project 1");
  $(".project-entry:last").append(formattedTitle);
  var formattedDates = HTMLprojectDates.replace("%data%", "2016");
  $(".project-entry:last").append(formattedDates);
  $(".project-entry:last").append(projects.project[0].images[0]);
}

function displayMap() {
  $("#mapDiv").append(googleMap);
}

displayHeader();
displayEducation();
displayProjects();
displayMap();
displayBio();
displayWork();
