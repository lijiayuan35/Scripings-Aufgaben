var mein_semester = {

  veranstaltung:[
   { 
	titel: "Einführung Webtechnologien",
    sws: 2,
    credits:2,
    workload:45
    },

   {
	title:"Scriptings",
	sws:2,
	credits:3,
    workload:90
	},
   {
	title:"vvvv",
	sws:2,
	credits:2,
    workload:90
	},
   {
	title:"Read & Write",
	sws:2,
	credits:3,
    workload:90
    },
   {
	title:"Ästhetik der Globalisierung",
	sws:2,
	credits:3,
    workload:90
    },
   ]
};
mein_semester.student={
	name:"Jiayuan Li",
	studiegang: "Interface Design",
	studiesemester: 3,
	welches: "WS",
    jahr: "2012/2013",
	};
      
JSON.stringify(mein_semester);
      
var jsoned_semester = JSON.stringify (mein_semester);
      
JSON.parse(jsoned_semester);
      
      