var flagsCanvas = document.getElementById("flags");
var flags = flagsCanvas.getContext("2d");

//example.fillRect(x_pos, y_pos, width, height)

//Belgium
flags.fillRect(0, 0, 300, 150);
flags.fillStyle = "black";
flags.fillRect(0, 0, 100, 150);
flags.fillStyle = "yellow";
flags.fillRect(100, 0, 100, 150);
flags.fillStyle = "red";
flags.fillRect(200, 0, 100, 150);

//Netherlands
flags.fillRect(310, 0, 300, 150);
flags.fillStyle = "white";
flags.fillRect(310, 50, 300, 100);
flags.fillStyle = "blue";
flags.fillRect(310, 100, 300, 100);

//Germany
flags.fillRect(620, 0, 300, 150);
flags.fillStyle = "black";
flags.fillRect(620, 0, 300, 50);
flags.fillStyle = "red";
flags.fillRect(620, 50, 300, 50);
flags.fillStyle = "#FECE00";
flags.fillRect(620, 100, 300, 50);

//France
flags.fillRect(930, 0, 300, 150);
flags.fillStyle = "blue";
flags.fillRect(930, 0, 100, 150);
flags.fillStyle = "white";
flags.fillRect(1030, 0, 100, 150);
flags.fillStyle = "red";
flags.fillRect(1130, 0, 100, 150);

// Small Flags
var flagsCanvas2 = document.getElementById("flags2");
var flags2 = flagsCanvas2.getContext("2d");

//Belgium
flags2.fillRect(0, 0, 150, 75);
flags2.fillStyle = "black";
flags2.fillRect(0, 0, 50, 75);
flags2.fillStyle = "yellow";
flags2.fillRect(50, 0, 50, 75);
flags2.fillStyle = "red";
flags2.fillRect(100, 0, 50, 75);

//Netherlands
flags2.fillRect(160, 0, 150, 75);
flags2.fillStyle = "white";
flags2.fillRect(160, 25, 150, 75);
flags2.fillStyle = "blue";
flags2.fillRect(160, 50, 150, 75);

//Germany
flags2.fillRect(320, 0, 150, 75);
flags2.fillStyle = "black";
flags2.fillRect(320, 0, 150, 75);
flags2.fillStyle = "red";
flags2.fillRect(320, 25, 150, 75);
flags2.fillStyle = "#FECE00";
flags2.fillRect(320, 50, 150, 75);

//France
flags2.fillRect(480, 0, 150, 75);
flags2.fillStyle = "blue";
flags2.fillRect(480, 0, 50, 75);
flags2.fillStyle = "white";
flags2.fillRect(530, 0, 50, 75);
flags2.fillStyle = "red";
flags2.fillRect(580, 0, 50, 75);
