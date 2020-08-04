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
        tools: ["Breaker Bar", "OBD2 Scanner", "Cordless Screwdriver", "Impact Drill", "Aerator Pro", "Chipper", "Hydraulic Trenchers", "Wheelbarrow", "Nail Gun", "Pressure Washer (3000 PSI)", "Hand Sander", "Table Saw" ]  
    },
    {
        firstName: "Al",
        lastName: "Borland",
        picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.looper.com%2F193669%2Fwhat-happened-to-al-from-home-improvement%2F&psig=AOvVaw3fdC6WaXyiii8mRCuNKdtP&ust=1596133053569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCUh5GJ8-oCFQAAAAAdAAAAABAD",
        tools: ["Dead Blow Hammer", "Oil Filter Pliers", "Cordless Screwdriver", "Rotary Hammer Drill", "Auger", "Handheld Blower", "Large Lawn Mower", "Air Compressor", "Roofing Nailer", "Pressure Washer (3500 PSI)", "Skill Saw", "Table Saw" ] 
    },
    {
        firstName: "Wilson W.",
        lastName: "Wilson",
        picture: "https://2.bp.blogspot.com/-dIcsqsoHY6g/UN0UfY27KNI/AAAAAAAAURM/o6Sxvrh93dI/s1600/tumblr_lmq0olTKan1qlt51qo1_500.jpg",
        tools: ["Floor Jack", "Torque Wrench", "Drillbit Set", "Steel Drillbit Set", "Backpack Leafblower", "Hedge Trimmer", "Lawn Mower", "Bolt Cutters", "Shop Vaccum", "Belt and Disc Sander", "Skill Saw" ] 
    },
    {
        firstName: "Jill",
        lastName: "Taylor",
        picture: "https://i.pinimg.com/originals/52/3f/cd/523fcdf866cb627e121e37cd9ab892e8.jpg",
        tools: ["Jack Stands", "Vise Grips", "Glass Diamond Drillbit Set", "Titanium Drillbit Set", "Cordless Chainsaw", "Hydraulic Auger", "Power Rake", "Grinder", "Telescopic Ladder", "Dewalt Hand Sander", "Table Saw" ] 
    },
    {
        firstName: "Randy",
        lastName: "Taylor",
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpNDJ77ph_wehgVKCf7rWUoEPkUwhvweKqlQ&usqp=CAU",
        tools: ["Multimeter", "Concrete Wet Drill", "Hammer Drill", "Aerator", "Gas Powered Chainsaw", "Hydraulic Tiller", "Pruner", "Leveler", "Pressure Washer (2000 PSI)", "Dry-wall Sander", "Table Saw" ] 
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
        owners: "Tim Taylor",
        picture: "https://static.grainger.com/rp/s/is/image/Grainger/1FX33_AS01",
        price: 3
    },
    {
        category: "Automotive",
        name: "Dead Blow Hammer",
        owners: "Al Borland",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71aXLaDZh5L._AC_SX425_.jpg",
        price: 4

    },
    {
        category: "Automotive",
        name: "Floor Jack",
        owners: "Wilson W. Wilson",
        picture: "https://imavex.vo.llnwd.net/o18/clients/runyonrental/images/4902.jpg",
        price: 5

    },
    {
        category: "Automotive",
        name: "Jack Stands",
        owners: "Jill Taylor",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71FaUHfDdFL._AC_SY355_.jpg",
        price: 3

  },
  {
        category: "Automotive",
        name: "Multimeter",
        owners: "Randy Taylor",
        picture: "https://images-na.ssl-images-amazon.com/images/I/41AtjGn2E8L.jpg",
        price: 5

  },
  {
        category: "Automotive",
        name: "OBD2 Scanner",
        owners: "Tim Taylor",
        picture: "https://images-na.ssl-images-amazon.com/images/I/61ECdxYhR0L._AC_SL1200_.jpg",
        price: 4

  },
  {
        category: "Automotive",
        name: "Oil Filter Pliers",
        owners: "Al Borland",
        picture: "https://images-na.ssl-images-amazon.com/images/I/41X5UEgAnUL._AC_SX355_.jpg",
        price: 3

  },
  {
        category: "Automotive",
        name: "Torque Wrench",
        owners: "Wilson W. Wilson",
        picture: "https://www.carbibles.com/wp-content/uploads/bfi_thumb/neiko-torque-wrench-6s57hogemajenmqso0iv9k5a8w971wvvrupueisnbza.jpg",
        price: 4

  },
  {
        category: "Automotive",
        name: "Vise Grips",
        owners: "Jill Taylor",
        picture: "https://www.irwin.com/uploads/products/large/the-original%E2%84%A2-curved-jaw-locking-pliers-with-wire-cutter-276.jpg",
        price: 3

  },
  {
        category: "Drills",
        name: "Concrete Wet Drill",
        owners: "Randy Taylor",
        picture: "https://i.ebayimg.com/images/g/AJwAAOSwPgxdd2Lc/s-l1600.jpg",
        price: 30

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        owners: "Tim Taylor",
        picture: "https://static.grainger.com/rp/s/is/image/Grainger/34G855_AS01?$mdmain$",
        price: 5

  },
  {
        category: "Drills",
        name: "Cordless Screwdriver",
        owners: "Al Borland",
        picture: "https://images.homedepot-static.com/productImages/c74433c1-bc5c-4ee2-947a-50e42745341c/svn/wen-electric-screwdrivers-49036-64_1000.jpg",
        price: 4

  },
  {
        category: "Drills",
        name: "Drillbit Set",
        owners: "Wilson W. Wilson",
        picture: "https://images.homedepot-static.com/productImages/0fe61d8e-48ec-4773-acce-915b7867d43e/svn/dewalt-twist-drill-bits-dwa1184-64_1000.jpg",
        price: 2

  },
  {
        category: "Drills",
        name: "Glass Diamond Drillbit Set",
        owners: "Jill Taylor",
        picture: "https://images-na.ssl-images-amazon.com/images/I/71h5seLteUL._AC_SL1200_.jpg",
        price: 5

  },
  {
        category: "Drills",
        name: "Hammer Drill",
        owners: "Randy Taylor",
        picture: "https://images-na.ssl-images-amazon.com/images/I/61Xn-Za8MIL._AC_SL1000_.jpg",
        price: 15

  },
  {
        category: "Drills",
        name: "Impact Drill",
        owners: "Tim Taylor",
        picture: "https://m.media-amazon.com/images/I/61RK5VN6+cL._AC_SS350_.jpg",
        price: 15

  },
  {
        category: "Drills",
        name: "Rotary Hammer Drill",
        owners: "Al Borland",
        picture: "https://images.homedepot-static.com/productImages/a9f73181-f79c-42ca-a808-7771ecf87520/svn/milwaukee-rotary-hammers-5262-21-64_1000.jpg",
        price: 15

  },
  {
        category: "Drills",
        name: "Steel Drillbit Set",
        owners: "Wilson W. Wilson",
        picture: "https://images.homedepot-static.com/productImages/d58bb3f9-ff1c-46c1-9285-1e565b54ac0b/svn/drill-america-twist-drill-bits-poukfd5hex-64_1000.jpg",
        price: 5

  },
  {
      category: "Drills",
      name: "Titanium Drillbit Set",
      owners: "Jill Taylor",
      picture: "https://shop.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/4/64896_W3.jpg",
      price: 10

  },
  {
    category: "Lawncare",
    name: "Aerator",
    owners: "Randy Taylor",
    picture: "https://cdnmedia.endeavorsuite.com/images/catalogs/19355/products/detail/23a48061-75f2-4621-8650-3a4e48d90c31.jpg",
    price: 75

},
{
    category: "Lawncare",
    name: "Aerator Pro",
    owners: "Tim Taylor",
    picture: "https://www.classenturfcare.com/wp-content/uploads/2015/07/Classen-PRO-POWERSTEER-Aerator-TA-25DA-facing-right.jpg",
    price: 85

},
{
    category: "Lawncare",
    name: "Auger",
    owners: "Al Borland",
    picture: "https://www.stihlusa.com/WebContent/Images/Product/3016/bt131.png?preset=Product.ProductDetails",
    price: 40

},
{
    category: "Lawncare",
    name: "Backpack Leafblower",
    owners: "Wilson W. Wilson",
    picture: "https://images-na.ssl-images-amazon.com/images/I/81bKoN9DKWL._AC_UX466_.jpg",
    price: 30

},
{
    category: "Lawncare",
    name: "Cordless Chainsaw",
    owners: "Jill Taylor",
    picture: "https://images-na.ssl-images-amazon.com/images/I/71IMn-tBTdL._AC_SY450_.jpg",
    price: 30

},
{
    category: "Lawncare",
    name: "Gas Powered Chainsaw",
    owners: "Randy Taylor",
    picture: "https://images-na.ssl-images-amazon.com/images/I/61p0o1myoqL._AC_SY450_.jpg",
    price: 35

},
{
    category: "Lawncare",
    name: "Chipper",
    owners: "Tim Taylor",
    picture: "https://www.chippersdirect.com/products-image/500/PK0915_83313_.png",
    price: 70

},
{
    category: "Lawncare",
    name: "Handheld Blower",
    owners: "Al Borland",
    picture: "https://www.stihlusa.com/WebContent/Images/Product/2875/bg50.png?preset=Product.ProductDetails",
    price: 20

},
{
    category: "Lawncare",
    name: "Hedge Trimmer",
    owners: "Wilson W. Wilson",
    picture: "https://www.blackanddecker.com/NA/product/images/500x500x72/BEHTS125/BEHTS125_1.jpg",
    price: 15

},
{
    category: "Lawncare",
    name: "Hydraulic Auger",
    owners: "Jill Taylor",
    picture: "https://www.northerntool.com/images/product/400x400/731/73182_400x400.jpg",
    price: 50

},
{
    category: "Lawncare",
    name: "Hydraulic Tiller",
    owners: "Randy Taylor",
    picture: "https://cdn.shopify.com/s/files/1/0067/8549/9194/products/Tiller_-_Gardening_and_earth_moving_24inch_-_Honda_800x.jpg?v=1586545736",
    price: 55

},
{
    category: "Lawncare",
    name: "Hydraulic Trenchers",
    owners: "Tim Taylor",
    picture: "https://www.redroo.com/content/product/full/HT1624_Hydraulic_Trencher-1014-117.jpg",
    price: 60

},
{
    category: "Lawncare",
    name: "Large Lawn Mower",
    owners: "Al Borland",
    picture: "https://www.mowersdirect.com/products-image/500/967-84-46-01_81511_1000.png",
    price: 35

},
{
    category: "Lawncare",
    name: "Lawn Mower",
    owners: "Wilson W. Wilson",
    picture: "https://mobileimages.lowes.com/product/converted/043033/043033587575_09849343.jpg?size=pdhi",
    price: 20

},
{
    category: "Lawncare",
    name: "Power Rake",
    owners: "Jill Taylor",
    picture: "https://static.grainger.com/rp/s/is/image/Grainger/5NLJ1_AS01?$zmmain$",
    price: 10

},
{
    category: "Lawncare",
    name: "Pruner",
    owners: "Randy Taylor",
    picture: "https://m.media-amazon.com/images/I/61mOfD1MuwL._AC_SS350_.jpg",
    price: 25

},
{
    category: "Lawncare",
    name: "Wheelbarrow",
    owners: "Tim Taylor",
    picture: "https://images.homedepot-static.com/productImages/4b701423-fc54-43e6-b436-0cc0404fba97/svn/milwaukee-wheelbarrows-6wbmilhd-64_1000.jpg",
    price: 10

},
{
  category: "Other Tools",
  name: "Air Compressor",
  owners: "Al Borland",
  picture: "https://images-na.ssl-images-amazon.com/images/I/715bxH8p8OL._AC_SY355_.jpg",
  price: 30

},
{
  category: "Other Tools",
  name: "Bolt Cutters",
  owners: "Wilson W. Wilson",
  picture: "https://images-na.ssl-images-amazon.com/images/I/713p8eQsb3L._AC_SX355_.jpg",
  price: 5

},
{
  category: "Other Tools",
  name: "Grinder",
  owners: "Jill Taylor",
  picture: "https://mobileimages.lowes.com/product/converted/885911/885911548977.jpg",
  price: 20

},
{
  category: "Other Tools",
  name: "Leveler",
  owners: "Randy Taylor",
  picture: "https://ae01.alicdn.com/kf/HTB1HVbvA4uTBuNkHFNRq6A9qpXay/Spirit-Level-600mm-Digital-Laser-Level-Ruler-Angle-Gauge-Finder-Horizontal-Vertical-Cross-Line-Laser-Leveler.jpg_q50.jpg",
  price: 5

},
{
  category: "Other Tools",
  name: "Nail Gun",
  owners: "Tim Taylor",
  picture: "https://sc02.alicdn.com/kf/HTB1dAonacfrK1RkSnb4q6xHRFXaO.jpg",
  price: 20

},
{
  category: "Other Tools",
  name: "Roofing Nailer",
  owners: "Al Borland",
  picture: "https://images.homedepot-static.com/productImages/cd1daea9-30d6-4c2b-aeb1-be38b68c834c/svn/dewalt-roofing-nailers-dw45rn-64_1000.jpg",
  price: 20

},
{
  category: "Other Tools",
  name: "Shop Vaccum",
  owners: "Wilson W. Wilson",
  picture: "https://mobileimages.lowes.com/product/converted/026282/026282940162.jpg?size=pdhi",
  price: 15

},
{
  category: "Other Tools",
  name: "Telescopic Ladder",
  owners: "Jill Taylor",
  picture: "https://i5.walmartimages.com/asr/7e2a3a40-7234-4b5a-920a-3861b47b03c5_1.2248ef7b30c0888c850824ba0aace3b5.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
  price: 10

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (2000 PSI)",
  owners: "Randy Taylor",
  picture: "https://images.homedepot-static.com/productImages/20dfdcab-bcce-48c8-b12b-239ce543c7ff/svn/ryobi-electric-pressure-washers-ry141900-64_1000.jpg",
  price: 60

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (3000 PSI)",
  owners: "Tim Taylor",
  picture: "https://images-na.ssl-images-amazon.com/images/I/81NB9Yc1cNL._AC_SY450_.jpg",
  price: 70

},
{
  category: "Pressure Washers",
  name: "Pressure Washer (3500 PSI)",
  owners: "Al Borland",
  picture: "https://objects.blains.com/products/12/600/1259049.jpg",
  price: 75

},
{
  category: "Sanders",
  name: "Belt and Disc Sander",
  owners: "Wilson W. Wilson",
  picture: "https://images-na.ssl-images-amazon.com/images/I/81hrbWAyOsL._AC_SX355_.jpg",
  price: 20

},
{
  category: "Sanders",
  name: "Dewalt Hand Sander",
  owners: "Jill Taylor",
  picture: "https://images-na.ssl-images-amazon.com/images/I/41z1oBml8IL._AC_SY450_.jpg",
  price: 10

},
{
  category: "Sanders",
  name: "Dry-wall Sander",
  owners: "Randy Taylor",
  picture: "https://ak1.ostkcdn.com/images/products/is/images/direct/ce2fbbdb1dbb9957194cd04ddd9e648619b756e4/Gymax-Electric-Drywall-Sander-Adjustable-Variable-Speed-with-Vacuum-and-LED-Light.jpg",
  price: 10

},
{
  category: "Sanders",
  name: "Hand Sander",
  owners: "Tim Taylor", 
  picture: "https://images.homedepot-static.com/productImages/71a2e452-7fa4-4680-8c03-45934ec1f6a4/svn/wal-board-tools-manual-hand-sanders-34-002-64_1000.jpg",
  price: 5

},
{
  category: "Saws",
  name: "Skill Saw",
  owners: "Al Borland",
  picture: "https://www.portercable.com/NA/product/images/250x250x72/PCE300/PCE300_1.jpg",
  price: 15

},
{
  category: "Saws",
  name: "Skill Saw",
  owners: "Wilson W. Wilson",
  picture: "https://mobileimages.lowes.com/product/converted/885911/885911489355.jpg",
  price: 15

},
{
  category: "Saws",
  name: "Table Saw",
  owners: "Jill Taylor",
  picture: "https://mobileimages.lowes.com/product/converted/889265/889265127093.jpg",
  price: 30

},
{
  category: "Saws",
  name: "Table Saw",
  owners: "Randy Taylor",
  picture: "https://mobileimages.lowes.com/product/converted/885911/885911329163.jpg",
  price: 35

},
{
  category: "Saws",
  name: "Table Saw",
  owners: "Tim Taylor",
  picture: "https://images-na.ssl-images-amazon.com/images/I/61ZsrKM9AcL._AC_SL1000_.jpg",
  price: 40

},
{
  category: "Saws",
  name: "Table Saw",
  owners: "Al Borland",
  picture: "https://www.rockler.com/media/catalog/product/cache/3434eb5edc1f5c9809271cab5a58bac7/2/0/20059-01-1000.jpg",
  price: 20

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
