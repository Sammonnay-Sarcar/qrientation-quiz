const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();

app.use(express.static("avenger"));
app.use(express.static("health"));
app.use(express.static("index"));
app.use(express.static("page2"));
app.use(express.static("result pages"));
app.use(express.static("ironman"));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("server started successfully");
});

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/coding", (req, res)=>{
  res.render("quiz");
})
app.get("/robotics", (req,res)=>{
  res.send("Coming Soon...")
})
app.get("/civil", (req,res)=>{
  res.send("Coming Soon...")
})
app.get("/electrical", (req,res)=>{
  res.send("Coming Soon...")
})
var i = 0;
var score = 0;
var questionHealth = [
  {
    question:
      " What is the minimum distance you should have between people that are not members of your household?  ",
    no: 1,
    option: [
      { text: " 2 meters—minimum, but further away is best ",
       value: 4 },
      {
        text: "3 meters ",
        value: 2,
      },
      {
        text: "4 meters ",
        value: 3,
      },
      {
        text: " None, we can still shake hands if they are washed first  ",
        value: 1,
      },
    ],
  },
  {
    question:
      " Which one of these precautions can be put in place to avoid COVID-19?  ",
    no: 2,
    option: [
      {
        text: " Leave non-perishable items (e.g. tins) for 72 hours before touching",
        value: 1,
      },
      {
        text: "Wash hands and surfaces regularly between tasks",
        value: 2,
      },
      {
        text: " Use disinfectant wipes to wipe down items ",
        value: 3,
      },
      {
        text: " All —A and B are precautionary as packaging is low risk, C is essential  ",
        value: 4,
      },
    ],
  },
  {
    question: " Which of these symptoms can happen if you’re depressed? ",
    no: 3,
    option: [
      { text: " Always tired ", value: 4 },
      {
        text: "Hungry all the time",
        value: 3,
      },
      {
        text: " don’t feel tired ",
        value: 2,
      },
      {
        text: " Cheerful  ",
        value: 1,
      },
    ],
  },
  {
    question: " How many minutes should an average person walk a day? ",
    no: 4,
    option: [
      { text: " 30 minutes", value: 4 },
      {
        text: "90 minutes",
        value: 3,
      },
      {
        text: " 20 minutes ",
        value: 2,
      },
      {
        text: " 10 minutes  ",
        value: 1,
      },
    ],
  },
  {
    question: " What is the recommended daily water intake?",
    no: 5,
    option: [
      { text: " 2 litres", value: 4 },
      {
        text: "5 litres",
        value: 3,
      },
      {
        text: " 6 litres",
        value: 2,
      },
      {
        text: " 10 litres  ",
        value: 1,
      },
    ],
  },
];

app.get("/health", (req, res) => {
  res.render("health", { post: questionHealth[i] });
});
app.post("/health", (req, res) => {
   
  if(i < questionHealth.length - 1) {
   
    var response = req.body.answerRadio;
    if (response == 1 || response == 2 || response == 3 || response == 4) {
      score += parseInt(response);
      i = i + 1;
        
      res.redirect("/health");
    }
  }
    else{
      if(score<7){
        res.render("unhealthy");
      }
      else if(score>=7 && score<14){
        res.render("moderatelyhealthy");
      }
      else if(score>=14){
        res.render("resulthealthy");
      }
    }
  
});

var j=0;
var questionAvenger=[
  {question:" If you were a superhero which of the following would be your go-to weapon?",
  no:1,
  option:[
          {
              text:"SHIELD",
              value:1
          },
          {
              text:"MYSTIC ARTS",
              value:2
          },
          {
              text:"WEB SHOOTER",
              value:4
          },
          {
              text:"MJOLNIR",
              value:3
          },
          {
              text:"JARVIS",
              value:0
          }
]
},
  {question:" Which of these Marvel villains would you like to have a fight with?",
  no:2,
  option:[
          {text:"ULTRON",
           value:0
          },
          {
              text:"GREEN GOBLIN",
              value:4
          },
          {
              text:"HELA",
              value:3
          },
          {
              text:"DORMAMMU",
              value:2
          },
          {
              text:"WINTER SOLDIER",
              value:1
          }
]
},
    {question:" Which one of these characters would you like to team up with?",
    no:3,
  option:[
          {text:"FALCON",
           value:1
          },
          {
              text:"LOKI",
              value:3
          },
          {
              text:"STAR LORD",
              value:0
          },
          {
              text:"NED",
              value:4
          },
{
              text:"WONG",
              value:2
   }
]
    },
    {question:" Do you enjoy the spotlight?",
    no:4,
    option:[
          {text:"Only if it’s necessary",
           value:1
          },
          {
              text:"Whatever man",
              value:3
          },
          {
              text:"Yes absolutely",
              value:0
          },
          {
              text:"I avoid spotlight",
              value:4
          },
{
              text:"I’m beyond all of that",
              value:2
   }
]
},
{
      question:" Who would you rather go out with?",
      no:5,
      option:[
          {text:"Peggy Carter",
           value:1
          },
          {
              text:"Jane Foster",
              value:3
          },
          {
              text:"Pepper Potts",
              value:0
          },
          {
              text:"Mary Jane",
              value:4
          },
{
              text:"Christine Palmer",
              value:2
   }
]
},
]
var avengerList=[
  {
    link:"ironMan.jpeg",
    name: "Iron Man",
    strength:0,
    text:"Well buddy, welcome to team Stark. You have the best resemblance with Iron Man. Your sense of humor and capability to work fine even under pressure will help you reach new heights. Kudos!!",
    heading:"I AM IRON MAN"
  },
  {
    link:"captainAmerica.jpeg",
    name: "Captain America",
    strength:0,
    text:"You sure can. Your determination, strength and focus make you a lot like Captain America. You never do a half hearted work and you make sure that you have got your friends’ back. And remember, you owe Peggy a dance!!",
    heading:"I CAN DO THIS ALL DAY"
  },
  {
    link:"drStrange.jpeg",
    name: "Dr. Strange",
    strength:0,
    text:"You are a perfectionist. You can master everything you learn. After all, you are the Sorcerer Supreme. Your dedication towards work is commendable but in spite of your  apparent rude exterior, you put your friends first.",
    heading:"DORMAMMU , I HAVE COME TO BARGAIN."
  },
  {
    link:"thor.jpeg",
    name: "Thor",
    strength:0,
    text:"Oh you pure hearted soul!! You are always worthy and you are capable of doing everything and anything you want. You cannot always work in a team but you can very well lead one.",
    heading:"I’D RATHER BE A GOOD MAN THAN A GREAT KING"
  },
  
  {
    link:"spiderMan.jpeg",
    name:"Spider Man",
    strength:0,
    text:"Oh did you get bit by a spider yet? ‘Cause you definitely are Spider-man. You mess things up at times, but you are the most active person during crisis. And your Spider-tingle, gets you going every time. We hope you save MJ or Gwen in every universe that exists.",
    heading:"THIS IS MY GIFT, MY CURSE. WHO AM I? I’M SPIDER-MAN."
  }
]
app.get("/avenger", (req, res) => {
  res.render("avenger", { post: questionAvenger[j] });
});
app.post("/avenger", (req, res) => {
   
  if(j < questionAvenger.length - 1) {
   
    var response = req.body.answerRadio;
    response = parseInt(response);
    console.log(response);
    avengerList[response].strength += 1;
    j +=1;
    res.redirect("/avenger");
  }
    else{
      var max=0;
      var result=avengerList[0];
      for(var x=0;x<avengerList.length;x++){
        if(avengerList[x].strength>max){
          result= avengerList[x];
        }
      }
      res.render("ironMan", {post:result});
    }
  
});