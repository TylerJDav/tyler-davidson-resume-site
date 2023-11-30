import LocalStorageService from "./LocalStorage.service";

let appViewModel = {
  app: {
    header: {
      logo: "/images/favicon.svg",
      title: "Tyler Davidson Resume",
    },
    endpoint: null,
  },
  entities: {
    jobs: {
      entity: "jobs",
      entitySingle: "job",

      options: {
        sortCol: "endDate",
        sortDir: "asc",
        limit: 50,
        offset: 0,
      },

      list: {
        listTitle: "Employment History",
        tableClasses: "table table-dark table-hover mt-2",
        thClasses: "bg-black bg-gradient",
        columns: [
          {
            label: "Title",
            name: "title",
          },
          {
            label: "Employer",
            name: "employer",
          },
          {
            label: "Start Date",
            name: "startDate",
          },
          {
            label: "End Date",
            name: "endDate",
          },
          {
            label: "Achievements",
            name: "achievements",
          },
          {
            label: "Responsibilities",
            name: "responsibilities",
          },
        ],
      },
      data: [
        {
          id: 1,
          title: "Instructional Assistant",
          employer: "Utah Valley University",
          startDate: "August 2023",
          endDate: "Present",
          achievements:
            "Trusted to adhere to FERPA guidelines and given special permission to grade a final exam in the absence of the professor",
          responsibilities:
            "Assigned to one section each of Web Development II, Computer Networks I, and Programming Fundamentals to grade assignments and tutor students",
        },
        {
          id: 2,
          title: "Owner/Videographer/Web Designer",
          employer: "Self/Ironwood Media",
          startDate: "December 2018",
          endDate: "Present",
          achievements:
            "Personally selected to work on projects for clients including Debrah Bonner, Storycrossroads storytelling festival, Utah Valley University, and various local videograpers and documentarians",
          responsibilities:
            "Produce videos and films for clients, reaching new clients through web design and social media marketing",
        },
        {
          id: 3,
          title: "Custodian",
          employer: "Utah Valley University",
          startDate: "March 2020",
          endDate: "July 2023",
          achievements:
            "Regularly consulted on means to improve efficiency and restructuring of assignments with changes in leadership",
          responsibilities:
            "Clean in and around faculty offices, office buildings while upholding PPE and chemical safety protocols",
        },
      ],
    },
    degrees: {
      entity: "degrees",
      entitySingle: "degree",

      options: {
        sortCol: "name",
        sortDir: "asc",
        filterStr: "",
        filterCol: "name",
        limit: 50,
        offset: 0,
      },

      list: {
        listTitle: "Degrees",
        tableClasses: "table table-dark table-hover mt-2",
        thClasses: "bg-black bg-gradient",
        columns: [
          {
            label: "Degree",
            name: "degree",
          },
          {
            label: "Major",
            name: "major",
          },
          {
            label: "Issuer",
            name: "isuer",
          },
          {
            label: "Graduation Date",
            name: "graduationDate",
          },
          {
            label: "GPA",
            name: "gpa",
          },
        ],
      },
      data: [
        {
          id: 1,
          degree: "Bachelor of Science",
          major: "Software Development",
          issuer: "Utah Valley University",
          graduationDate: "December 2023",
          gpa: "3.2",
        },
        {
          id: 2,
          degree: "Associate of Science",
          major: "Computer Science",
          issuer: "Utah Valley University",
          graduationDate: "May 2023",
          gpa: "3.4",
        },
        {
          id: 3,
          degree: "Associate of Applied Science",
          major: "Digital Cinema Production",
          issuer: "Utah Valley University",
          graduationDate: "May 2022",
          gpa: "3.8",
        },
      ],
    },
  },

  getApi: function (entity) {
    return new LocalStorageService(this.entities[entity], entity);
  },
};
export default appViewModel;
