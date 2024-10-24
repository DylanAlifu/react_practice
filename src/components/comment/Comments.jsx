import CommentBox from "./CommentBox";

const data = [
  {
    username: "Ellie",
    comment: "I love this movie, by far the best movie I have ever seen 😍",
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hat_23-2149436195.jpg?t=st=1729652869~exp=1729656469~hmac=583dbc21b2d5221fde11f6bcc8246636e9f45632e0d982ad12c5738baa032912&w=1800",
    replies: [
      {
        username: "Bob",
        comment: "Same here, I ❤️ this movie too",
        img: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611771.jpg?t=st=1729652750~exp=1729656350~hmac=ec69746fe1daaf25aa527d2c283f6c60e5bd6d0bc9a3fac07f6df6eb60589cc3&w=1800",
      },
      {
        username: "Charlie",
        comment:
          "I haven't watched this movie yet, can anyone tell me what this movie is about?",
        img: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?t=st=1729652782~exp=1729656382~hmac=aa9c9f08abd4bc25113919276d3ce7094c584ce988f577bf737879274ff35621&w=1800",
        replies: [
          {
            username: "Alice",
            comment: "This movie is about a Superhero who saves the world 😂",
            img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?t=st=1729652896~exp=1729656496~hmac=ffe9781933a98bfab95e1b69914de14946081cfb36c3c87ae4d7115e174fffaf&w=1800",
          },
        ],
      },
    ],
  },
  {
    username: "John",
    comment: "This is such a great movie",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?t=st=1729652993~exp=1729656593~hmac=163576b75c7adfc7dc4e74bf09e13c13b2fe27467892a30f4d941c087be61061&w=1800",
    replies: [
      {
        username: "Mark",
        comment: "I know right, I love this movie too",
        img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1729652962~exp=1729656562~hmac=5eee103108fb8c9ce292c7db254fbffc14cb258af55ebe0e8be0b97157ff154c&w=1800",
      },
    ],
  },
  {
    username: "Chris",
    comment: "I will watch this movie again 🍿🍿🍿",
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1729652067~exp=1729655667~hmac=c9a4a3fdf0bad821efe9963a327f3a057533889e4c148a6b9ac79e9edccefc13&w=1800",
  },
];

const Comment = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comment;
