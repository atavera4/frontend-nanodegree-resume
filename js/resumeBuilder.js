/*
This is empty on purpose! Your code to build the resume will go here.
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
 }


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
  "projects": [
    {
      "title":"sample project 1",
      "dates":"2014",
      "description": "who moved my stuff to some other place. this is the same description as the other one",
      "images":
      [
        "https:/.",
        "https image"
      ]
    }
  ]
}

var education = {
  "schools": [
    {
      "name":"n",
      "location":"ny",
      "degree":"masters",
      "majors":["cs"],
      "dates": 2013,
      "url": "example.com"
    },
    {
      "name":"n",
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



var name = "Ariel Taveras"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



function displayBio() {
  $("#topContacts").append(HTMLmobile);
  $("#topContacts").append(HTMLemail);
  $("#topContacts").append(HTMLtwitter);
  $("#topContacts").append(HTMLgithub);
  $("#topContacts").append(HTMLblog);
  $("#topContacts").append(HTMLlocation);
  $("#header").append(bio.bioPic);



  if(bio.skills.length > 0) {
    HTMLskillsStart
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
  for (job in work.jobs) {
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


displayBio();
displayWork();
