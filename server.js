import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.send("Server is ready");
})

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "Diet Advice",
          "content": "My doctor told me to watch my drinking, so now I drink in front of a mirror."
        },
        {
          "id": 2,
          "title": "Late-Night Snack",
          "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
          "id": 3,
          "title": "Tech Troubles",
          "content": "I'm trying to organize a hide and seek tournament, but it's tough to find good players. They're always hiding."
        },
        {
          "id": 4,
          "title": "Social Distancing",
          "content": "My wife just found out I replaced our bed with a trampoline. She hit the roof."
        },
        {
          "id": 5,
          "title": "Investment Strategy",
          "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        }
      ]
      res.send(jokes);
})

app.get('/api/kunal' , (req,res)=>{
    res.send("Kunal Shivhare")
})

const port = process.env.PORT || 3000;

app.listen(port ,()=>{
    console.log(`Server starts at http://localhost:${port}`);
});

