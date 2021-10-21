'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs',[
  {
    d:1,
    ame:"Lowkey",
    enre:"R & B",
    uestStarId:6,
    createdAt: "2021-10-21T22:16:08.296Z",
    updatedAt: "2021-10-21T22:16:08.296Z"
  },
  {
    id: 2,
    name: "La La Lost You",
    genre: "R & B",
    GuestStarId: 6,
    createdAt: "2021-10-21T22:16:59.603Z",
    updatedAt: "2021-10-21T22:16:59.603Z"
  },
  {
    id: 3,
    name: "Coming Home",
    genre: "R & B",
    GuestStarId: 6,
    createdAt: "2021-10-21T22:17:11.235Z",
    updatedAt: "2021-10-21T22:17:11.235Z"
  },
  {
    id: 4,
    name: "California",
    genre: "Rap",
    GuestStarId: 6,
    createdAt: "2021-10-21T22:17:22.126Z",
    updatedAt: "2021-10-21T22:17:22.126Z"
  },
  {
    id: 5,
    name: "Every Summertime",
    genre: "R & B",
    GuestStarId: 6,
    createdAt: "2021-10-21T22:17:37.039Z",
    updatedAt: "2021-10-21T22:17:37.039Z"
  },
  {
    id: 6,
    name: "Leave The Door Open",
    genre: "Pop",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:18:01.579Z",
    updatedAt: "2021-10-21T22:18:01.579Z"
  },
  {
    id: 7,
    name: "Locked out of heaven",
    genre: "R & B",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:18:12.524Z",
    updatedAt: "2021-10-21T22:18:12.524Z"
  },
  {
    id: 8,
    name: "When I Was Your Man",
    genre: "Junkies",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:18:46.295Z",
    updatedAt: "2021-10-21T22:18:46.295Z"
  },
  {
    id: 9,
    name: "Talking to the moon",
    genre: "R & B",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:19:03.081Z",
    updatedAt: "2021-10-21T22:19:03.081Z"
  },
  {
    id: 10,
    name: "That's What I Like",
    genre: "R & B",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:19:41.653Z",
    updatedAt: "2021-10-21T22:19:41.653Z"
  },
  {
    id: 11,
    name: "Wonderwall",
    genre: "Fox",
    GuestStarId: 4,
    createdAt: "2021-10-21T22:20:24.415Z",
    updatedAt: "2021-10-21T22:20:24.415Z"
  },
  {
    id: 12,
    name: "Don't Look Back In Anger",
    genre: "Fox",
    GuestStarId: 4,
    createdAt: "2021-10-21T22:20:42.955Z",
    updatedAt: "2021-10-21T22:20:42.955Z"
  },
  {
    id: 13,
    name: "Stop Crying Your Heart Out",
    genre: "Fox",
    GuestStarId: 4,
    createdAt: "2021-10-21T22:21:01.074Z",
    updatedAt: "2021-10-21T22:21:01.074Z"
  },
  {
    id: 14,
    name: "Bahasa Kalbu",
    genre: "Pop",
    GuestStarId: 5,
    createdAt: "2021-10-21T22:22:11.572Z",
    updatedAt: "2021-10-21T22:22:11.572Z"
  },
  {
    id: 15,
    name: "Usai Di Sini",
    genre: "Pop",
    GuestStarId: 5,
    createdAt: "2021-10-21T22:22:23.189Z",
    updatedAt: "2021-10-21T22:22:23.189Z"
  },
  {
    id: 16,
    name: "Kali Kedua",
    genre: "Pop",
    GuestStarId: 5,
    createdAt: "2021-10-21T22:22:33.972Z",
    updatedAt: "2021-10-21T22:22:33.972Z"
  },
  {
    id: 17,
    name: "Serba Salah",
    genre: "Pop",
    GuestStarId: 5,
    createdAt: "2021-10-21T22:22:48.569Z",
    updatedAt: "2021-10-21T22:22:48.569Z"
  },
  {
    id: 18,
    name: "Do I Wanna Know",
    genre: "Rock",
    GuestStarId: 3,
    createdAt: "2021-10-21T22:23:22.784Z",
    updatedAt: "2021-10-21T22:23:22.784Z"
  },
  {
    id: 19,
    name: "Why'd You Only Call Me When Your High",
    genre: "Rock",
    GuestStarId: 3,
    createdAt: "2021-10-21T22:23:52.365Z",
    updatedAt: "2021-10-21T22:23:52.365Z"
  },
  {
    id: 20,
    name: "I Wanna Be Yours",
    genre: "R & B",
    GuestStarId: 3,
    createdAt: "2021-10-21T22:24:05.872Z",
    updatedAt: "2021-10-21T22:24:05.872Z"
  },
  {
    id: 21,
    name: "R U Mine?",
    genre: "Fox",
    GuestStarId: 3,
    createdAt: "2021-10-21T22:24:21.403Z",
    updatedAt: "2021-10-21T22:24:21.403Z"
  },
  {
    id: 22,
    name: "Lazy Song",
    genre: "R & B",
    GuestStarId: 2,
    createdAt: "2021-10-21T22:25:11.569Z",
    updatedAt: "2021-10-21T22:25:11.569Z"
  }
] , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
