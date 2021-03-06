var _courses = [
    {
        "id": "c1",
        "subjectCode": "CSE",
        "courseNumber": "101",
        "credits": 3,
        "title": "Typing in Vi",
        "description": "Knowing vi is valuable because it wis available on all Unix-based systems. This class will make you a vi expert."
    },
    {
        "id": "c2",
        "subjectCode": "CSE",
        "courseNumber": "142",
        "credits": 3,
        "title": "Computer Programming I",
        "description": "Learn to type variables, functions, data structures, and more."
    },
    {
        "id": "c3",
        "subjectCode": "CSE",
        "courseNumber": "200",
        "credits": 5,
        "title": "Hakka Skillz",
        "description": "Hakka skillz are the ninja skillz of computaz. Without'em you ain't nothin but spreadsheetz and social media."
    },
    {
        "id": "c4",
        "subjectCode": "CSE",
        "courseNumber": "210",
        "credits": 5,
        "title": "Spreadsheets and Social Media",
        "description": "Covers pivot tables, formulae, tweeting, tumblr, and other staples of modern computing."
    },
    {
        "id": "c5",
        "subjectCode": "CSE",
        "courseNumber": "222",
        "credits": 2,
        "title": "Networks",
        "description": "Learn how TCP/IP networks and the Internets works."
    },
    {
        "id": "c6",
        "subjectCode": "CSE",
        "courseNumber": "311",
        "credits": 3,
        "title": "Software Design and Implementation",
        "description": "Explores concepts and techniques for design and construction of reliable and maintainable software systems in modern high-level languages; program structure and design; program-correctness approaches, including testing; and event-driven programming (e.g., graphical user interface). Includes substantial project and software-team experience. Prerequisite: CSE 143."
    },
    {
        "id": "c7",
        "subjectCode": "PHYS",
        "courseNumber": "101",
        "credits": 3,
        "title": "Physical Science By Inquiry",
        "description": "Laboratory-based development of concepts and reasoning skills. Develops problem-solving techniques and scientific method in a large group setting."
    },
    {
        "id": "c8",
        "subjectCode": "PHYS",
        "courseNumber": "105",
        "credits": 4,
        "title": "Facilitated Group Inquiry II",
        "description": "Laboratory-based development of concepts and reasoning skills. Develops problem-solving techniques and scientific method in a large group setting."
    },
    {
        "id": "c9",
        "subjectCode": "PHYS",
        "courseNumber": "106",
        "credits": 5,
        "title": "Facilitated Group Inquiry III",
        "description": "Laboratory-based development of concepts and reasoning skills. Develops problem-solving techniques and scientific method in a large group setting."
    },
    {
        "id": "c10",
        "subjectCode": "PHYS",
        "courseNumber": "110",
        "credits": 4,
        "title": "Liberal Arts Physics",
        "description": "Basic concepts of physics presented with emphasis on their origin and their impact on society and the Western intellectual tradition. Primarily for students in the arts, humanities, and social sciences."
    },
    {
        "id": "c11",
        "subjectCode": "PHYS",
        "courseNumber": "114",
        "credits": 5,
        "title": "Light and Color",
        "description": "Compares past explanation of certain familiar natural phenomena with present understandings. Lamps and lighting, outdoor light, optical devices, color vision, perspective, paints, and pigments. Quantitative comparison critical to the course, but college-level mathematics background not required. Intended for non-science students."
    },
    {
        "id": "c12",
        "subjectCode": "PHYS",
        "courseNumber": "210",
        "credits": 2,
        "title": "General Physics",
        "description": "Basic principles of physics presented without use of calculus. Suitable for students majoring in technically oriented fields other than engineering or the physical sciences. Mechanics. Credit is not given for both PHYS 114 and PHYS 121."
    }
];


var _matches = function(completeString, subString) {
  var isMatch = false;
  if (! subString || ! completeString) {
    return isMatch;
  }
  return completeString.indexOf(subString) > -1 ? true : false;
};

/*
 * This is where code to interact with remote services goes.
 */
module.exports = {
    /*
     * This returns a course given an id.
     */
    getCourse: function(id) {
        var course = {};
        for (var i = 0; i < _courses.length; i++) {
            if (_courses[i].id == id) {
                course = _courses[i];
                break;
            }
        }
        return(course);
    },

    deleteCourse: function(id) {
        for (var i = 0; i < _courses.length; i++) {
            if (_courses[i].id == id) {
                index = i;
                _courses.splice(index, 1);
                break;
            }
        }
    },

    /*
     * Performs a search for courses.
     */
    findCourses: function(serachString) {
      //  Search subject code, title, and description.
      var courses = [];

      for (var i = 0; i < _courses.length; i++) {
        var course = _courses[i];
        if (_matches(course.title, serachString) ||
            _matches(course.subjectCode, serachString) ||
            _matches(course.courseNumber, serachString)) {
          courses.push(course);
        }
      }
      return(courses);
    },

    saveCourse: function(course) {
        //  Not sure what this one should return. Validation messages? Void or throw?
    }
};
