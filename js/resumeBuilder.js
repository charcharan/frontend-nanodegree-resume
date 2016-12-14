// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */
// //  // $("#main").append(["A.V Sai Charan"]);
// //  var name="A.V Sai Charan";
// // var awesomethought="I am Sai and I am awesome";
// // console.log(awesomethought);
// // var funthought=awesomethought.replace("awesome","fun");
// // console.log(funthought);
// // // $("#main").append(funthought);
// // formattedname=HTMLheaderName.replace("%data%", name);
// // formattedrole=HTMLheaderRole.replace("%data%","Software Engineer");
// // $("#header").prepend(formattedrole);
// // $("#header").prepend(formattedname);
// var bio = {
//   "name" : "A.V Sai Charan",
//   "role" : "Software Engineer",
//   "contactinfo": "+919032265051",
// };
// formattedname=HTMLheaderName.replace("%data%",bio.name);
// formattedrole=HTMLheaderRole.replace("%data%",bio.role);
// // $("#header").prepend(bio.contactinfo);
// $("#header").prepend(formattedrole);
// $("#header").prepend(formattedname);
var education = {
    "schools": [{
        "name": "NNEMS",
        "location": "nellore",
        "degree": "SSC",
        "majors": ["Maths", "science", "English", "Social Studies"],
        "dates": "14-04-2007",
        "url": "www.nnems.edu"
    }, {
        "name": "RSREC",
        "location": "kavali",
        "degree": "B.tech",
        "majors": ["Electronics", "VLSI", "Signal Processing"],
        "dates": "14-04-2013",
        "url": "www.rsrec.in"
    }],
    "onlineCourses": {
        "title": "frontend web developer nanodegree",
        "school": "Udacity",
        "dates": "24-10-2016",
        "url": "https://udacity.com"
    }
};
var bio = {
    "name": "A.V Sai Charan",
    "role": "Student",
    "skills": ["programming", "teaching", "HTML", "CSS"],
    "welcomeMessage": "Hey guys, All is Well",
    "biopic": "images/fry.jpg",
    "display": "function",
    "contacts": {
        "mobile": "+919032265051",
        "email": "charan49075@gmail.com",
        "github": "charcharan",
        "location": "Nellore"
    }
};
var projects = {
    "projects": [{
        "title": "animal trading card project",
        "dates": "25/10/2016",
        "description": "Created a flamingo trading card, with its biological specifications and some funny facts",
        "images": ["images/flamingo.jpg", "images/flamingo1.jpg"]
    }, {
        "title": "portfolio project",
        "dates": "14/11/2016",
        "description": "it will give a glimpse about my udacity nano degree program",
        "images": ["images/portfolio.jpg", "images/port1.jpg"]
    }]
};
var work = {
    "jobs": [{
        "title": "project-trainee",
        "dates": "25/10/2014",
        "employer": "SNSS Technologies",
        "description": "Developing a projects which are helpful to the environment",
        "location": "Hyderabad"
    }, {
        "title": "Lab-technician",
        "dates": "14/11/2015",
        "employer": "Thiagarajar College of Engineering",
        "description": "Maintaing the every day lab duties in TCE",
        "location": "Madurai"
    }]
};
bio.display = function() {
    var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedmsg);
    var formattedmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").prepend(formattedmail);
    var formattednum = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").prepend(formattednum);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").prepend(formattedgithub);
    var formattedloc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").prepend(formattedloc);
    var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedrole);
    formattedname = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedname);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbiopic);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedskills);
        }
    }
};
bio.display();
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $("#workExperience").append(formattedlocation);
        var formatteddate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formatteddate);
        var formatteddescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formatteddescription);
    }
};
work.display();
projects.display = function() {
    for (var project2 = 0; project2 < projects.projects.length; project2++) {
        $("#project").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project2].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project2].dates);
        $(".project-entry:last").append(formattedDates);
        var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[project2].description);
        $(".project-entry:last").append(formatteddescription);
        if (projects.projects[project2].images.length > 0) {
            for (var image = 0; image < projects.projects[project2].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project2].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();
education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedName);
        var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedLoc);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formatteddegree);
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedmajor);
        var formatteddate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formatteddate);
        var formattedurl = HTMLschoolURL.replace("%data%", education.schools[edu].url);
        $(".education-entry:last").append(formattedurl);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
    $(".education-entry:last").append(formattedTitle);
    var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
    $(".education-entry:last").append(formattedschool);
    var formatteddate1 = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
    $(".education-entry:last").append(formatteddate1);
    var formattedurl1 = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
    $(".education-entry:last").append(formattedurl1);
};
education.display();
$("#mapDiv").append(googleMap);
// var formattedmail = HTMLemail.replace("%data%", bio.contacts[0].email);
// $("#footerContacts:last").append(formattedmail);
// var formattednum = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
// $("#footerContacts:last").append(formattednum);
// var formattedgithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
// $("#footerContacts:last").append(formattedgithub);
// var formattedloc = HTMLlocation.replace("%data%", bio.contacts[0].location);
// $("#footerContacts:last").append(formattedloc);
