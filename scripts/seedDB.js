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
        picture: "https://static.grainger.com/rp/s/is/image/Grainger/1FX33_AS01",
        price: 0

    },
    {
        category: "Automotive",
        name: "Dead Blow Hammer",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71aXLaDZh5L._AC_SX425_.jpg",
        price: 0

    },
    {
        category: "Automotive",
        name: "Floor Jack",
        picture: "https://imavex.vo.llnwd.net/o18/clients/runyonrental/images/4902.jpg",
        price: 0

    },
    {
        category: "Automotive",
        name: "Jack Stands",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71FaUHfDdFL._AC_SY355_.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Multimeter",
        picture: "https://images-na.ssl-images-amazon.com/images/I/41AtjGn2E8L.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "OBD2 Scanner",
        picture: "https://images-na.ssl-images-amazon.com/images/I/61ECdxYhR0L._AC_SL1200_.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Oil Filter Pliers",
        picture: "https://images-na.ssl-images-amazon.com/images/I/41X5UEgAnUL._AC_SX355_.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Torque Wrench",
        picture: "https://www.carbibles.com/wp-content/uploads/bfi_thumb/neiko-torque-wrench-6s57hogemajenmqso0iv9k5a8w971wvvrupueisnbza.jpg",
        price: 0

  },
  {
        category: "Automotive",
        name: "Vise Grips",
        picture: "https://www.irwin.com/uploads/products/large/the-original%E2%84%A2-curved-jaw-locking-pliers-with-wire-cutter-276.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Concrete Wet Drill",
        picture: "https://i.ebayimg.com/images/g/AJwAAOSwPgxdd2Lc/s-l1600.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        picture: "https://static.grainger.com/rp/s/is/image/Grainger/34G855_AS01?$mdmain$",
        price: 0

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        picture: "https://images.homedepot-static.com/productImages/c74433c1-bc5c-4ee2-947a-50e42745341c/svn/wen-electric-screwdrivers-49036-64_1000.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Drillbit Set",
        picture: "https://images.homedepot-static.com/productImages/0fe61d8e-48ec-4773-acce-915b7867d43e/svn/dewalt-twist-drill-bits-dwa1184-64_1000.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Glass Diamond Drillbit Set",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71h5seLteUL._AC_SL1200_.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Hammer Drill",
        picture: "https://images-na.ssl-images-amazon.com/images/I/61Xn-Za8MIL._AC_SL1000_.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Impact Drill",
        picture: "https://m.media-amazon.com/images/I/61RK5VN6+cL._AC_SS350_.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Rotary Hammer Drill",
        picture: "https://images.homedepot-static.com/productImages/a9f73181-f79c-42ca-a808-7771ecf87520/svn/milwaukee-rotary-hammers-5262-21-64_1000.jpg",
        price: 0

  },
  {
        category: "Drills",
        name: "Steel Drillbit Set",
        picture: "https://images.homedepot-static.com/productImages/d58bb3f9-ff1c-46c1-9285-1e565b54ac0b/svn/drill-america-twist-drill-bits-poukfd5hex-64_1000.jpg",
        price: 0

  },
  {
      category: "Drills",
      name: "Titanium Drillbit Set",
      picture: "https://shop.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/4/64896_W3.jpg",
      price: 0

  },
  {
    category: "Lawncare",
    name: "Aerator",
    picture: "https://cdnmedia.endeavorsuite.com/images/catalogs/19355/products/detail/23a48061-75f2-4621-8650-3a4e48d90c31.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Aerator Pro",
    picture: "https://www.classenturfcare.com/wp-content/uploads/2015/07/Classen-PRO-POWERSTEER-Aerator-TA-25DA-facing-right.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Auger",
    picture: "https://www.stihlusa.com/WebContent/Images/Product/3016/bt131.png?preset=Product.ProductDetails",
    price: 0

},
{
    category: "Lawncare",
    name: "Backpack Leafblower",
    picture: "https://images-na.ssl-images-amazon.com/images/I/81bKoN9DKWL._AC_UX466_.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Cordless Chainsaw",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71IMn-tBTdL._AC_SY450_.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Gas Powered Chainsaw",
    picture: "https://images-na.ssl-images-amazon.com/images/I/61p0o1myoqL._AC_SY450_.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Chipper",
    picture: "https://www.chippersdirect.com/products-image/500/PK0915_83313_.png",
    price: 0

},
{
    category: "Lawncare",
    name: "Handheld Blower",
    picture: "https://www.stihlusa.com/WebContent/Images/Product/2875/bg50.png?preset=Product.ProductDetails",
    price: 0

},
{
    category: "Lawncare",
    name: "Hedge Trimmer",
    picture: "https://www.blackanddecker.com/NA/product/images/500x500x72/BEHTS125/BEHTS125_1.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Auger",
    picture: "https://www.northerntool.com/images/product/400x400/731/73182_400x400.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Tiller",
    picture: "https://cdn.shopify.com/s/files/1/0067/8549/9194/products/Tiller_-_Gardening_and_earth_moving_24inch_-_Honda_800x.jpg?v=1586545736",
    price: 0

},
{
    category: "Lawncare",
    name: "Hydraulic Trenchers",
    picture: "https://www.redroo.com/content/product/full/HT1624_Hydraulic_Trencher-1014-117.jpg",
    price: 0

},
{
    category: "Lawncare",
    name: "Large Lawn Mower",
    picture: "https://www.mowersdirect.com/products-image/500/967-84-46-01_81511_1000.png",
    price: 0

},
{
    category: "Lawncare",
    name: "Lawn Mower",
    picture: "https://mobileimages.lowes.com/product/converted/043033/043033587575_09849343.jpg?size=pdhi",
    price: 0

},
{
    category: "Lawncare",
    name: "Power Rake",
    picture: "https://static.grainger.com/rp/s/is/image/Grainger/5NLJ1_AS01?$zmmain$",
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
  name: "Air Compressor",
  picture: "/ToolNextDoor/client/public/img/othertools/aircompressor.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Bolt Cutters",
  picture: "/ToolNextDoor/client/public/img/othertools/BoltCutters01.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Grinder",
  picture: "/ToolNextDoor/client/public/img/othertools/grinder.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Leveler",
  picture: "/ToolNextDoor/client/public/img/othertools/leveler.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Nail Gun",
  picture: "/ToolNextDoor/client/public/img/othertools/nailGun.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Roofing Nailer",
  picture: "/ToolNextDoor/client/public/img/othertools/roofingNailer.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Shop Vaccum",
  picture: "/ToolNextDoor/client/public/img/othertools/shopVaccum.jpg",
  price: 0

},
{
  category: "Other Tools",
  name: "Telescopic Ladder",
  picture: "/ToolNextDoor/client/public/img/othertools/telescopicLadder.jpg",
  price: 0

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (2000 PSI)",
  picture: "/ToolNextDoor/client/public/img/pressureWashers/PressureWasher2000PSI.jpg",
  price: 0

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (3000 PSI)",
  picture: "/ToolNextDoor/client/public/img/pressureWashers/PressureWasher3000PSI.jpg",
  price: 0

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (3500 PSI)",
  picture: "/ToolNextDoor/client/public/img/pressureWashers/PressureWasher3500PSI.jpg",
  price: 0

},
{
  category: "Sanders",
  name: "Belt and Disc Sander",
  picture: "/ToolNextDoor/client/public/img/sanders/beltAndDiscSander.jpg",
  price: 0

},
{
  category: "Sanders",
  name: "Dewalt Hand Sander",
  picture: "/ToolNextDoor/client/public/img/sanders/dewaltHandSander.jpg",
  price: 0

},
{
  category: "Sanders",
  name: "Dry-wall Sander",
  picture: "/ToolNextDoor/client/public/img/sanders/dryWallSander.jpg",
  price: 0

},
{
  category: "Sanders",
  name: "Hand Sander",
  picture: "/ToolNextDoor/client/public/img/sanders/handSander.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Skill Saw",
  picture: "/ToolNextDoor/client/public/img/saws/SkillSaw01.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Skill Saw",
  picture: "/ToolNextDoor/client/public/img/saws/SkillSaw02.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Table Saw",
  picture: "/ToolNextDoor/client/public/img/saws/TableSaw01.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Table Saw",
  picture: "/ToolNextDoor/client/public/img/saws/TableSaw02.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Table Saw",
  picture: "/ToolNextDoor/client/public/img/saws/TableSaw03.jpg",
  price: 0

},
{
  category: "Saws",
  name: "Table Saw",
  picture: "/ToolNextDoor/client/public/img/saws/TableSaw04.jpg",
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
