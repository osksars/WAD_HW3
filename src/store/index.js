import { createStore } from "vuex";

export default createStore({
  state: {
    posts:[
  {
    postId: 1,
    userName: "Ana",
  creationTime: "2026-10-21",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Beautiful day in Tartu! #Tartu #Estonia",
    postPhoto: "src/assets/tartu.webp",
    likes: 12
  },
  {
    postId: 2,
    userName: "Mark",
    creationTime: "2026-10-22",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Does anyone know which room the lab is in today?",
    postPhoto: null,
    likes: 34
  },
  {
    postId: 3,
    userName: "Emma",
    creationTime: "2026-10-23",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Finally found a quiet corner in the library for doing assignments.",
    postPhoto: "src/assets/library.webp",
    likes: 5
  },
  {
    postId: 4,
    userName: "John",
    creationTime: "2026-10-24",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Coffee break between lectures, campus is looking great this week!",
    postPhoto: "src/assets/coffee.jpg",
    likes: 24
  },
  {
    postId: 5,
    userName: "Lisa",
    creationTime: "2026-10-25",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Does anyone want to form a study group for the upcoming exam?",
    postPhoto: null,
    likes: 67
  },
  {
    postId: 6,
    userName: "Peter",
    creationTime: "2026-10-26",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "What a wonderful end of the day!",
    postPhoto: "src/assets/Magnificent_sunset.jpg",
    likes: 33
  },
  {
    postId: 7,
    userName: "Katty",
    creationTime: "2026-10-27",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Does anyone know where I can use a printer?",
    postPhoto: null,
    likes: 9
  },
  {
    postId: 8,
    userName: "Max",
    creationTime: "2026-10-28",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "There is a quiz night today! It's gonna be so good!",
    postPhoto: "src/assets/Moku_Tartu.jpg",
    likes: 11
  },
  {
    postId: 9,
    userName: "Polly",
    creationTime: "2026-10-29",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "So much studying to do before exams!",
    postPhoto: "src/assets/fall_studying.jpg",
    likes: 32
  },
  {
    postId: 10,
    userName: "Alex",
    creationTime: "2026-10-30",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Guys, you absolutely need to go there!",
    postPhoto: "src/assets/Tartu_Estonia.jpg",
    likes: 23
  },
  {
    postId: 11,
    userName: "Mia",
    creationTime: "2026-10-31",
    userPicture: "src/assets/daweid-icon-7797704_1920.png",
    postText: "Does anyone want to join my project group?",
    postPhoto: null,
    likes: 1
  },
  {
      postId: 12,
      userName: "Teo",
      creationTime: "2026-11-01",
      userPicture: "src/assets/daweid-icon-7797704_1920.png",
      postText: "Early mornings are hard, but this view...",
      postPhoto: "src/assets/Mornings_in_Tartu.jpg",
      likes: 56
  }
  ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
