const posts = [
  /* { id: "1", name: "This first post is about React" },
  { id: "2", name: "This next post is about Preact" },
  { id: "3", name: "We have yet another React post!" },
  { id: "4", name: "This is the fourth and final post" }, */
  {
    id: "1",
    title: "Backend Developer",
    companyName: "Company Name",
    city: "Scherpenheuvel-Zichem, Belgium",
    date: "12/12/2012",
    image: "./images/img-2.jpg",
    filter: [
      {
        location: "Scherpenheuvel-Zichem ",
        type: "Full-Time",
        field: ["Office", "Remote"],
      },
    ],
    info: "More info",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    companyName: "Company Name",
    city: "Liège, Belgium",
    date: "12/12/2012",
    image: "./images/img-8.jpg",
    filter: [
      {
        location: "Liège",
        type: ["Part-Time", "Internship"],
        field: "Full-Remote",
      },
    ],

    info: "More info",
  },
  {
    id: "3",
    title: "Frontend Developer",
    companyName: "Company Name",
    city: "Brussels, Belgium",
    date: "12/12/2012",
    image: "./images/img-4.jpg",
    filter: [
      {
        location: "Brussels",
        type: "Internship",
        field: "Office",
      },
    ],
    info: "More info",
  },
  {
    id: "4",
    title: "UI/UX Designer",
    companyName: "Company Name",
    city: "Anvers, Belgium",
    date: "12/12/2012",
    image: "./images/img-1.jpg",
    filter: [
      {
        location: "Anvers",
        type: ["Full-Time", "Freelance"],
        field: ["Office", "Remote"],
      },
    ],
    info: "More info",
  },
];

export default posts;
