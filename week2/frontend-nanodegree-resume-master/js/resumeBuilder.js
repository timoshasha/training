var bio = {
    "name":"Teboho Moshasha",
    "age": "29",
    "role":"Web Developer",
    "contacts":{
      "mobile":"074-971-8342",
      "email":"moshashati@outlook.com",
      "github":"timoshasha",
      "location":"Milnerton"
      },
      "welcomeMessage":"Welocome to my Profile",
      "skills":["HTML", "Javascript", "SQL","Java","CSS"],
      "picture":"images/king.jpg"
};

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);

var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formatedMobile);

var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formatedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedlocation);

var picture = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(picture);

var message = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(message);

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);
  var skill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#header").append(skill);
  skill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#header").append(skill);
  skill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#header").append(skill);
  var skill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#header").append(skill);
  skill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#header").append(skill);

}


/*
var message = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#main").append(message);
*/


var education = {
  "schools":[
    {
      "name" : "Megabro Computer School",
      "city" : "Cape Town, RSA",
      "degree" : "Certificate in Computer Literecy",
      "majors":["Windows Office"],
      "dates": "2009",
      "url":"https://www.facebook.com/pages/Megabro-Computer-School/313760215301575"
    },
    {
      "name" : "Sout African Army Gymnasium",
      "city" : "Cape Town, RSA",
      "degree" : "Certificate in Officership",
      "majors":["Leadership"],
      "dates": "2013",
      "url":"https://www.facebook.com/SaArmyGymnasiumHeidelberg"

    },
    {
      "name" : "Cape Peninsula University of Technology",
      "city" : "Cape Town, RSA",
      "degree" : "National Diploma Information Technology",
      "majors":["Development Software","Information Systems"],
      "dates": "2013",
      "url":"http/www.cput.ac.za"

    }],
    "onlineCourses" : [
      {
        "title" : "Javascript Syntax",
        "school" : "Udacity",
        "dates":"2015",
        "url":"https://www.udacity.com"
      }
    ]
  }

education.display = function()
{
  for(course in education.schools)
  {
    $("#education").append(HTMLschoolStart);

    var schoolName = HTMLschoolName.replace("%data%", education.schools[course].name);
    $(".education-entry:last").append(schoolName);

    var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[course].degree);
    $(".education-entry:last").append(schoolDegree);

    var schoolDates = HTMLschoolDates.replace("%data%", education.schools[course].dates);
    $(".education-entry:last").append(schoolDates);

    //var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[course].city);
    //$(".education-entry:last").append(schoolLocation);

    if(education.schools[course].majors.length > 0)
    {
      for(major in education.schools[course].majors)
      {
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[course].majors[major]);
        $(".education-entry:last").append(formattedMajors);
      }
    }

  }

  for(online in education.onlineCourses)
    {
      $(".education-entry:last").append(HTMLonlineClasses);
        //console.log(online);
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        $(".education-entry:last").append(onlineTitle);

        var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
        $(".education-entry:last").append(onlineSchool);

        var onlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
        $(".education-entry:last").append(onlineDate);

        var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
        $(".education-entry:last").append(onlineUrl);
    }
}
education.display();





  var work = {
    "jobs": [
        {
            "employer": "Skywalk Innovations",
            "title": "Web Developer",
            "years": "May 2015 - Present",
            "description":"I am responsible of developing Web pages for our clients",
            "location":"Cape Town"
        },
        {
            "employer": "Lieutenent",
            "title": "Sout African Defence Force",
            "years": "April 2012 -Present",
            "description":"Platoon Commander, who is makes sure that the South African Army standards and laws are followed.",
            "location":"Cape Town"
        },
        {
            "employer": "CTS Helpdesk Assistant",
            "title": "Cape peninsula University of Technology",
            "years": "May 2011 - November 2013",
            "description":"Assisting Student who can not log in to institutions system by reseting their password and do the setup for wifi",
            "location":"Capw Town"
        }
    ]
  }


  work.display = function()
  {
    for(job in work.jobs)
    {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      //var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      //$(".work-entry:last").append(formattedLocation);

      var formattedDats = HTMLworkDates.replace("%data%", work.jobs[job].years);
      $(".work-entry:last").append(formattedDats);

      var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formatedDescription);

    }
  }
  work.display();


/*  function locationizer(work_obj)
  {
    var locationArray = [];
    {
      for(job in work.jobs)
      {
        var newLocation = work.jobs[job].location;
        locationArray.push(newLocation);
      }
    }
    return locationArray;
  }
  console.log(locationizer);
  */

  var projects = {
    "projects":[
    {
      "title":"Mock Page",
      "dates":"04 May 2015 - 08 May 2015",
      "description":"I hade make a web page according to the mockup web page that was given to me",
      "images":["images/website.jpg", "images/websites.jpg"]


    },
    {
      "title":"Resume",
      "dates":"11 May 2015 - 15 May 2015",
      "description":"Develop the Resume according to the template given to me",
      "images":["images/page-mock.png", "images/image2.jpg"]

      }
      ]
     }

     projects.display = function()
     {
       for(project in projects.projects)
       {
         $("#projects").append(HTMLprojectStart);

         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
         $(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
         $(".project-entry:last").append(formattedDates);

         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
         $(".project-entry:last").append(formattedDescription);

         if(projects.projects[project].images.length > 0)
         {
           for(image in projects.projects[project].images)
           {
             var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
             $(".project-entry:last").append(formattedImage);
           }
         }
       }
     }

     projects.display();

     function displayFooter()
     {
       var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
       $("#footerContacts").append(formatedMobile);

       var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
       $("#footerContacts").append(formatedEmail);

       var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
       $("#footerContacts").append(formattedGithub);

       var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
       $("#footerContacts").append(formattedlocation);

     }

     displayFooter();

     function inName(name)
     {
       name = name.trim().split("");
       console.log(name);
       name[1] = name[1].toUpperCase();
       name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

       return name[0] + " " + name[1];
     }


     $("#main").append(internationalizeButton);
     $("#mapDiv").append(googleMap);
