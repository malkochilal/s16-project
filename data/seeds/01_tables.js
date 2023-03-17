/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("follows").truncate();
  await knex("likes").truncate();
  await knex("comments").truncate();
  await knex("posts").truncate();
  await knex("users").truncate();

  await knex("users").insert([
    {
      username: "Melisa",
      password: 1234,
      email: "melisa@hm.com",
      location: "Kocaeli",
      signup_date: "01/01/2023",

    },
    {
      username: "Hilal",
      password: 1234,
      email: "hilal@hm.com",
      location: "Toronto",
      signup_date: "04/12/2023",

    },
    {
      username: "Andre",
      password: 1234,
      email: "andrea@hm.com",
      location: "Kadıköy",
      signup_date: "04/12/2023",

    },
    {
      username: "Deniz",
      password: 1234,
      email: "deniz@hm.com",
      location: "Kadıköy",
      signup_date: "11/01/2023",

    },
    {
      username: "Karen",
      password: 1234,
      email: "karen@hm.com",
      location: "Kadıköy",
      signup_date: "05/08/2023",

    },
    {
      username: "Sam",
      password: 1234,
      email: "sam@hm.com",
      location: "Kadıköy",
      signup_date: "19/06/2023",

    },
    {
      username: "Mali",
      password: 1234,
      email: "mali@hm.com",
      location: "Toronto",
      signup_date: "02/10/2023",

    },
    {
      username: "Kayra",
      password: 1234,
      email: "kayra@hm.com",
      location: "Kadıköy",
      signup_date: "15/11/2023",

    },
    {
      username: "Fatih",
      password: 1234,
      email: "fatih@hm.com",
      location: "Kadıköy",
      signup_date: "31/12/2023",

    },
    {
      username: "Micheal",
      password: 1234,
      email: "micheal@hm.com",
      location: "kartal",
      signup_date: "15/08/2023",

    },
  ]);
  await knex("posts").insert([
    {
      title: "hey world",
      content: "This is my message",
      location: "Kocaeli",
      post_date: "01/01/2023",
      user_id: 1,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Toronto",
      post_date: "04/12/2023",
      user_id: 2,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      post_date: "04/12/2023",
      user_id: 3,
    },
    {
      title: "hiiii!",
      content: "this is my message",
      location: "Kadıköy",
      post_date: "11/01/2023",
      user_id: 4,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      post_date: "05/08/2023",
      user_id: 5,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      post_date: "19/06/2023",
      user_id: 6,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Toronto",
      post_date: "02/10/2023",
      user_id: 7,
    },
    {
      title: "This is my message",
      content: "This is my message",
      location: "Kadıköy",
      post_date: "15/08/2023",
      user_id: 10,
    },
  ]);
  await knex("comments").insert([
    {
      content: "this is my message",
      comment_date: "01/01/2023",
      location: "Kocaeli",
      post_id: 2,
      user_id: 1,
    },
    {
      content: "message",
      comment_date: "02/01/2023",
      location: "Toronto",
      post_id: 2,
      user_id: 2,
    },
  ]);
  await knex("likes").insert([
    {
      like: "up",
      like_date: "02/01/2023",
      post_id: 1,
      user_id: 2,
    },
  ]);
  await knex("follows").insert([
    {
      follow_status: "true",
      follow_date: "10/02/2023",
      followee_id: 1,
      follower_id: 2,
    },
  ]);
};
