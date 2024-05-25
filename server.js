import bodyParser from "body-parser";
import express from "express";
import axios from "axios";
import pg from "pg";
import env from "dotenv";

//Connection to Database Server (Ctreating Database server instance and connect to it)
env.config();
const db = new pg.Client(
    {
user:process.env.POSTGRES_USER,
host:process.env.POSTGRES_HOST,
database:process.env.POSTGRES_DATABASE,
password:process.env.POSTGRES_PASSWORD,
port:process.env.POSTGRES_PASSWORD_PORT
    }
);


db.connect();


// Declaring Variables
const port  = 3000;
const app = express();

var prompts=[
    {
      main_part: 'Debate',
      sub_part: ' the pros and cons of space exploration'
    },
    { main_part: 'Ask', sub_part: ' about the meaning of life' },
    {
      main_part: 'Inquire',
      sub_part: ' about the history of space exploration'
    },
    {
      main_part: 'Outline',
      sub_part: ' the steps to effective problem-solving'
    }
  ];



// Mounting Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));








// Request Handlers
app.get("/", async(req,res)=>
{

try
{
var resp = await db.query("SELECT main_part , sub_part FROM example_prompt ORDER BY RANDOM() LIMIT 4");
prompts=resp.rows;
}
catch (err)
{
  console.log("Error in executing query request");
}

    res.render("homepage.ejs",
    {
       

question:prompts

    });
})



app.post("/chat",async (req,res)=>
{
   
    const question = req.body.question;
 

const response = await axios.post("https://api.openai.com/v1/chat/completions",{
    "messages": [{ "role": "system", "content": "You are a helpful assistant." },
      {"role": "user", "content": `${question}`}],
      "model":"gpt-3.5-turbo-1106",
      "n":1,
      "max_tokens":200
      },
      {
        headers: {'Authorization': process.env.AUTHORISATION_KEY}
      });

      console.log(response.data);
const messageString = JSON.stringify(response.data.choices[0].message);

      const answerObject = JSON.parse(messageString);

   const answer = answerObject.content;

     
          res.render("homepage.ejs",
          {
             

      questionPrompt:question,      
      answerPrompt:answer
      
          });
});



// Setting up the port


app.listen(port, ()=>
{
console.log(`Server is running on port ${port}`)
})


// Declarations objects and Functions



  
// export the app for vercel serverless functions 




