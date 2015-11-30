	
var express = require('express');
var _ = require('lodash');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var inCar = {}

var carList = [{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2454933288570241,0.6765035814195521],"wheel_vertex":[5,2],"wheel_density":[93.66835466818014,73.90733899363775],"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.6311070790087624},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"chassis_density":151.31245613261882,"is_elite":false,"index":8},"v":2.0658439750871516,"s":0.5164609937717879,"x":1.5493829813153637,"y":2.0685798084432556,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2454933288570241,0.6765035814195521],"wheel_vertex":[5,2],"wheel_density":[93.66835466818014,73.90733899363775],"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.6311070790087624},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"chassis_density":151.31245613261882,"is_elite":false,"index":8},"v":2.0658439750871516,"s":0.5164609937717879,"x":1.5493829813153637,"y":2.0685798084432556,"y2":0}, {"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2854933288570241,0.6765035814195521],"wheel_vertex":[5,5],"wheel_density":[93.66835466818014,123.68011481184887],"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.22073642416466444,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"chassis_density":151.31245613261882,"is_elite":false,"index":17},"v":0.22911751006850235,"s":0.04927258281043061,"x":0.17984492725807172,"y":2.149949798950189,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.3054933288570241,0.2602682381538166],"wheel_vertex":[5,0],"wheel_density":[93.66835466818014,139.33133482672693],"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":1.0729039253775978},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.2539963468425153,"y":-0.6349860747547112},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"chassis_density":299.33377229862924,"is_elite":false,"index":6},"v":2.6486964975505183,"s":0.5423951872117103,"x":2.106301310338808,"y":3.5012399578227846,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.3154933288570241,0.6765035814195521],"wheel_vertex":[5,1],"wheel_density":[93.66835466818014,103.88783743520304],"vertex_list":[{"x":1.1620379954022857,"y":0},{"x":0.39713204243012257,"y":0.8443495777686629},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.4910720718605732,"y":-0.18397789251075158}],"chassis_density":151.31245613261882,"is_elite":false,"index":11},"v":1.3738881017728095,"s":0.2528628408170815,"x":1.121025260955728,"y":2.0367428162082084,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2654933288570241,0.6765035814195521],"wheel_density":[93.66835466818014,103.88783743520304],"wheel_vertex":[5,0],"chassis_density":151.31245613261882,"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"index":23},"v":13.289635602321981,"s":1.1407412534181958,"x":12.148894348903786,"y":2.261848900246744,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.3254933288570241,0.6765035814195521],"wheel_density":[93.66835466818014,103.88783743520304],"wheel_vertex":[5,0],"chassis_density":151.31245613261882,"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"index":29},"v":13.213103855811852,"s":1.1041590965859487,"x":12.108944759225903,"y":2.177634559826042,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2754933288570241,0.6765035814195521],"wheel_density":[93.66835466818014,103.88783743520304],"wheel_vertex":[5,0],"chassis_density":151.31245613261882,"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"index":24},"v":13.267230474759137,"s":1.041929094876372,"x":12.225301379882765,"y":2.2482907065855673,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2554933288570241,0.6765035814195521],"wheel_vertex":[5,0],"wheel_density":[93.66835466818014,103.88783743520304],"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"chassis_density":151.31245613261882,"is_elite":false,"index":10},"v":13.24417684494568,"s":1.0266803755771845,"x":12.217496469368495,"y":2.2751591294581313,"y2":0},{"car_def":{"wheelCount":2,"userId":"Computer","colour":"hsl(360,50%,50%)","wheel_radius":[0.2554933288570241,0.6765035814195521],"wheel_density":[93.66835466818014,103.88783743520304],"wheel_vertex":[5,0],"chassis_density":151.31245613261882,"vertex_list":[{"x":1.0882879746382594,"y":0},{"x":0.12809889796202983,"y":0.11768815669818795},{"x":0,"y":0.5692297853150469},{"x":-1.1715192165537958,"y":0.366324340153923},{"x":-0.533614051497504,"y":0},{"x":-0.5366234012185569,"y":-0.6264797080006111},{"x":0,"y":-0.30711378536034073},{"x":0.7709448092979712,"y":-0.15421138355985847}],"index":22},"v":13.24417684494568,"s":1.0266803755771845,"x":12.217496469368495,"y":2.2751591294581313,"y2":0}];


app.use(express.static(__dirname));
console.log("Server running at "+__dirname);

var port = process.env.PORT;
app.listen(port);
console.log("App listening to port: "+port);

// Add a user's car to the list
app.post('/:user', function(req, res) {
console.log('User:', req.params.user);
    inCar = req.body;
    
    //Check if the given score is higher than the current last place. If it is, put it in the last place and resort
    if(inCar.v > carList[9].v){
    carList[9] = inCar;    
        console.log("Top car made it: "+inCar.v);
        //console.log(inCar.v +" is bigger than "+carList[9]);
        
        //Bubbe sort cuz I'm lasy asf
        for(var k = 9; k>0; k--){
            console.log("iteration: "+k);
            if(carList[k].v > carList[k-1].v){
               // console.log(carList[k].v+" is greater than "+carList[k-1].v);
                var temp = {};
                temp = carList[k];
                carList[k]=carList[k-1];
                carList[k-1] = temp;
            } else {
                //console.log(carList[k].v+" is less than "+carList[k-1].v);
            }
        }
    for(var i = 9; i >= 0; i--){
        console.log("The Car in position number #"+(i+1)+" driven by: "+carList[i].car_def.userId+" made it: "+carList[i].v);
    }
    }
// Use the user's name as the property name
// so it gets overridden each time
//carList[req.params.user] = req.body;
 // console.log(carList);  

res.send();
});

// Send back the list of all the cars
app.get('/cars', function(req, res) {
console.log('Sending full car list');
    
    var carArr = [];
//Make an array of jsut car_def, without scores
    for(var i = 0; i < carList.length; i++){
        carArr.push(carList[i].car_def);
    }

// Strip out just the values of the object into an array
  var cars = _.values(carArr);
  res.send(cars);
});

app.get('/top', function(req, res) {
console.log('Sending Top Scores');
    
// Strip out just the values of the object into an array
  var cars = _.values(carList);
  res.send(cars);
});



/**var server = app.listen(port, '0.0.0.0', function() {
	console.log('Server running.');
});**/