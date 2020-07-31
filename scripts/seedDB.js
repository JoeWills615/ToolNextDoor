const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tool_next_door"
);

const ownerSeed = [
    {
        firstName: "Tim",
        lastName: "Taylor",
        picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb7%2F38%2F13%2Fb738131ba6f19ad533674da28184f68b.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F339951471845660657%2F&tbnid=Do28J67A3fzAlM&vet=12ahUKEwilzZnpiPPqAhVET1MKHdWKCH8QMygHegUIARDUAQ..i&docid=pZyJsJwTw8xy8M&w=2009&h=3013&q=tim%20the%20tool%20man%20&ved=2ahUKEwilzZnpiPPqAhVET1MKHdWKCH8QMygHegUIARDUAQ",
        tools: []  
    },
    {
        firstName: "Al",
        lastName: "Borland",
        picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.looper.com%2F193669%2Fwhat-happened-to-al-from-home-improvement%2F&psig=AOvVaw3fdC6WaXyiii8mRCuNKdtP&ust=1596133053569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCUh5GJ8-oCFQAAAAAdAAAAABAD",
        tools: [] 
    },
    {
      firstName: "Wilson W.",
      lastName: "Wilson",
      picture: "https://2.bp.blogspot.com/-dIcsqsoHY6g/UN0UfY27KNI/AAAAAAAAURM/o6Sxvrh93dI/s1600/tumblr_lmq0olTKan1qlt51qo1_500.jpg",
      tools: [] 
    },
    {
      firstName: "Jill",
      lastName: "Taylor",
      picture: "https://i.pinimg.com/originals/52/3f/cd/523fcdf866cb627e121e37cd9ab892e8.jpg",
      tools: [] 
    },
    {
      firstName: "Randy",
      lastName: "Taylor",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpNDJ77ph_wehgVKCf7rWUoEPkUwhvweKqlQ&usqp=CAU",
      tools: [] 
    },

];
console.log(db);
db.Owner.remove({})
  .then(() => db.Owner.collection.insertMany(ownerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    console.log(data.result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // const tim = db.Owner.findOne({ firstName: "Tim" })
  // tim._id

 const toolSeed = [
    {
        category: "Automotive",
        name: "Breaker Bar",
        picture: "/ToolNextDoor/client/public/img/automotive/breakerBar.jpg",
        price: 0,
        _owner: ""

    },
    {
        category: "Automotive",
        name: "Dead Blow Hammer",
        picture: "/ToolNextDoor/client/public/img/automotive/deadBlowHammer.jpg",
        price: 0,
        _owner: ""

    },
    {
        category: "Automotive",
        name: "Floor Jack",
        picture: "/ToolNextDoor/client/public/img/automotive/floorJack.jpg",
        price: 0,
        _owner: ""

    },
    {
      category: "Automotive",
      name: "Jack Stands",
      picture: "/ToolNextDoor/client/public/img/automotive/jackStands.jpg",
      price: 0,
      _owner: ""

  },
  {
      category: "Automotive",
      name: "Multimeter",
      picture: "/ToolNextDoor/client/public/img/automotive/multimeter.jpg",
      price: 0,
      _owner: ""

  },
  {
      category: "Automotive",
      name: "OBD2 Scanner",
      picture: "/ToolNextDoor/client/public/img/automotive/OBD2Scanner.jpg",
      price: 0,
      _owner: ""

  },
  {
      category: "Automotive",
      name: "Oil Filter Pliers",
      picture: "/ToolNextDoor/client/public/img/automotive/oilFilterPliers.jpg",
      price: 0,
      _owner: ""

  },
  {
      category: "Automotive",
      name: "Torque Wrench",
      picture: "/ToolNextDoor/client/public/img/automotive/torqueWrench.jpg",
      price: 0,
      _owner: ""

  },
  {
      category: "Automotive",
      name: "Vise Grips",
      picture: "/ToolNextDoor/client/public/img/automotive/viseGrips.jpg",
      price: 0,
      _owner: ""

  }

];

console.log(db);
db.Tool.remove({})
  .then(() => db.Tool.collection.insertMany(toolSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    console.log(data.result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
