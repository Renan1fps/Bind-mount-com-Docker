import express from "express";

const app = express();

app.use(express.json());

app.get("/docker", async (req, res)=> {
  const user = [
    {
      name: 'Docker',
      password: 'hash'
    },
    {
      name: 'Node.js',
      password: 'hash'
    },
    {
      name: 'React.js',
      password: 'hash'
    },
    {
      name: 'Next.js',
      password: 'hash'
    },
  ];
  res.status(200).json(user);
});

app.listen(3030, ()=> console.log("Running"));

//comando linux abaixo:
//docker run -d -p 3030:3030 --name bind-container -v ${pwd}:/www/app/ bind:v1
