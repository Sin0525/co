let img;
let slider;
let ppmValues;

function preload() {
  img = loadImage('world.jpg');
}

function setup() {
  createCanvas(600, 350);
  
  slider = createSlider(2002, 2022, 2002, 1);
  slider.position(100, height - 20);
  slider.style('-webkit-appearance', 'none');
  slider.style('background-color', 'black');
  slider.style('thumb-style', 'black');
  slider.style('height', '3px');
  slider.style('width', '400px');
  slider.style('cursor', 'pointer');
  
  ppmValues = [
    373.4,  // 2002
    375.6,  // 2003
    377.7,  // 2004
    379.9,  // 2005
    381.9,  // 2006
    383.8,  // 2007
    385.6,  // 2008
    387.4,  // 2009
    389.9,  // 2010
    391.6,  // 2011
    393.8,  // 2012
    396.7,  // 2013
    398.9,  // 2014
    400.8,  // 2015
    404.0,  // 2016
    406.8,  // 2017
    408.5,  // 2018
    411.1,  // 2019
    414.2,  // 2020
    416.8,  // 2021
    419.1   // 2022
  ];
  
  textAlign(CENTER);
  textSize(16);
}

function draw() {
  background(255);

  image(img, 0, 0, width, 300);

  let year = slider.value();

  let colorValue = map(year, 2002, 2022, 255, 0);
  

  let ppm = ppmValues[year - 2002];
  
  noStroke();
  fill(255, 165, 0, 130 - colorValue); // Using orange color with varying transparency
  rect(0, 0, width, 300); 
  

  fill(0);
  text('2002', 50, height - 15);
  text('2022', width - 50, height - 15);
  text(year, width / 2, height - 30);
  
  text(`CO2: ${ppm} ppm`, width / 2, height - 50);
}
