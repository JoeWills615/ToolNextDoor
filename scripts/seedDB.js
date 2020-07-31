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
        price: 0

    },
    {
        category: "Automotive",
        name: "Dead Blow Hammer",
        picture: "/ToolNextDoor/client/public/img/automotive/deadBlowHammer.jpg",
        price: 0

    },
    {
        category: "Automotive",
        name: "Floor Jack",
        picture: "/ToolNextDoor/client/public/img/automotive/floorJack.jpg",
        price: 0

    },
    {
        category: "Automotive",
        name: "Jack Stands",
        picture: "/ToolNextDoor/client/public/img/automotive/jackStands.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Multimeter",
        picture: "/ToolNextDoor/client/public/img/automotive/multimeter.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "OBD2 Scanner",
        picture: "/ToolNextDoor/client/public/img/automotive/OBD2Scanner.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Oil Filter Pliers",
        picture: "/ToolNextDoor/client/public/img/automotive/oilFilterPliers.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Torque Wrench",
        picture: "/ToolNextDoor/client/public/img/automotive/torqueWrench.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Vise Grips",
        picture: "/ToolNextDoor/client/public/img/automotive/viseGrips.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Concrete Wet Drill",
        picture: "/ToolNextDoor/client/public/img/drills/ConcreteWetDrill01.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        picture: "/ToolNextDoor/client/public/img/drills/CordlessScrewdriver01.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        picture: "/ToolNextDoor/client/public/img/drills/CordlessScrewdriver02.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Drillbit Set",
        picture: "/ToolNextDoor/client/public/img/drills/DrillbitSet01.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Glass Diamond Drillbit Set",
        picture: "/ToolNextDoor/client/public/img/drills/GlassDiamondDrillBitSet.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Hammer Drill",
        picture: "/ToolNextDoor/client/public/img/drills/HammerDrill01.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Impact Drill",
        picture: "/ToolNextDoor/client/public/img/drills/impactDrill.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Rotary Hammer Drill",
        picture: "/ToolNextDoor/client/public/img/drills/rotaryHammerDrill.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Steel Drillbit Set",
        picture: "/ToolNextDoor/client/public/img/drills/StellDrillBitSet.jpg",
        price: 0

  },
  {
      category: "Drills",
      name: "Titanium Drillbit Set",
      picture: "/ToolNextDoor/client/public/img/drills/TitaniumBrillBitSet.jpg",
      price: 0

  },
  {
    category: "Lawncare",
    name: "Aerator",
    picture: "/ToolNextDoor/client/public/img/lawncare/aerator.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Aerator Pro",
    picture: "/ToolNextDoor/client/public/img/lawncare/aeratorPro.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Auger",
    picture: "/ToolNextDoor/client/public/img/lawncare/auger.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Backpack Leafblower",
    picture: "/ToolNextDoor/client/public/img/lawncare/backpackLeafblower.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Cordless Chainsaw",
    picture: "/ToolNextDoor/client/public/img/lawncare/chainsawCordless.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Gas Powered Chainsaw",
    picture: "/ToolNextDoor/client/public/img/lawncare/chainsawGas.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Chipper",
    picture: "/ToolNextDoor/client/public/img/lawncare/chipper.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Handheld Blower",
    picture: "/ToolNextDoor/client/public/img/lawncare/handheldBlower.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hedge Trimmer",
    picture: "/ToolNextDoor/client/public/img/lawncare/hedgeTrimmer.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Auger",
    picture: "/ToolNextDoor/client/public/img/lawncare/hydraulicAuger.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Tiller",
    picture: "/ToolNextDoor/client/public/img/lawncare/hydraulicTiller.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Trenchers",
    picture: "/ToolNextDoor/client/public/img/lawncare/hydraulicTrenchers.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Large Lawn Mower",
    picture: "/ToolNextDoor/client/public/img/lawncare/largerLawnmower.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Lawn Mower",
    picture: "/ToolNextDoor/client/public/img/lawncare/lawnMower.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Power Rake",
    picture: "/ToolNextDoor/client/public/img/lawncare/powerRake.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Pruner",
    picture: "/ToolNextDoor/client/public/img/lawncare/Pruner.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Wheelbarrow",
    picture: "/ToolNextDoor/client/public/img/lawncare/wheelBarrow.jpg",
    price: 0

},
{
  category: "Other Tools",
  name: "",
  picture: "/ToolNextDoor/client/public/img/othertools/.jpg",
  price: 0

},

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
