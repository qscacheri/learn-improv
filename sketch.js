var sketch = function (p) {

	var addBtn = document.getElementById("add");


	var baseUrl = "https://qscacheri.github.io/Sound-Samples/MusyngKite/";
	var sampler = new Tone.Sampler({


		"C1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "C1.mp3",
		"Db1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Db1.mp3",
		"D1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "D1.mp3",
		"Eb1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Eb1.mp3",
		"E1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "E1.mp3",
		"F1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "F1.mp3",
		"Gb1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Gb1.mp3",
		"G1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "G1.mp3",
		"Ab1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Ab1.mp3",
		"A1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "A1.mp3",
		"Bb1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Bb1.mp3",
		"B1": baseUrl + "acoustic_grand_piano" + "-mp3/" + "B1.mp3",

		"C2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "C2.mp3",
		"Db2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Db2.mp3",
		"D2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "D2.mp3",
		"Eb2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Eb2.mp3",
		"E2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "E2.mp3",
		"F2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "F2.mp3",
		"Gb2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Gb2.mp3",
		"G2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "G2.mp3",
		"Ab2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Ab2.mp3",
		"A2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "A2.mp3",
		"Bb2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Bb2.mp3",
		"B2": baseUrl + "acoustic_grand_piano" + "-mp3/" + "B2.mp3",

		"C3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "C3.mp3",
		"Db3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Db3.mp3",
		"D3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "D3.mp3",
		"Eb3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Eb3.mp3",
		"E3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "E3.mp3",
		"F3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "F3.mp3",
		"Gb3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Gb3.mp3",
		"G3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "G3.mp3",
		"Ab3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Ab3.mp3",
		"A3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "A3.mp3",
		"Bb3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Bb3.mp3",
		"B3": baseUrl + "acoustic_grand_piano" + "-mp3/" + "B3.mp3",

		"C4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "C4.mp3",
		"Db4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Db4.mp3",
		"D4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "D4.mp3",
		"Eb4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Eb4.mp3",
		"E4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "E4.mp3",
		"F4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "F4.mp3",
		"Gb4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Gb4.mp3",
		"G4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "G4.mp3",
		"Ab4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Ab4.mp3",
		"A4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "A4.mp3",
		"Bb4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "Bb4.mp3",
		"B4": baseUrl + "acoustic_grand_piano" + "-mp3/" + "B4.mp3"
	})
	var width = window.innerWidth;
	var height = window.innerWidth;
	var blockWidth = window.innerWidth / 8;
	var blockHeight = 50;
	var blockArray = [];
	var blockEnd = {
		x: 10,
		y: 10
	};


	p.setup = function () {
		console.log(width / 8);
		p.createCanvas((window.innerWidth) - width / 8 - 15, (window.innerHeight / 8) * 8);
		p.background(100);
		p.colorMode(p.HSL, 360, 100, 100);
		p.background(0);
		p.textAlign(p.CENTER, p.CENTER);
	}
	p.draw = function () {
		for (var i = 0; i < blockArray.length; i++) {
			//			console.log(i);
			var currentBlock = blockArray[i];
			drawBlock(currentBlock);
		}
	}

	function addBlock(chord, length) {
		var randColor = p.random(50) + 40;
		var newBlock;
		console.log(blockEnd.x);
		if (blockEnd.x + (length * blockWidth) < window.innerWidth) {
			newBlock = {
				text: chord,
				duration: length,
				width: blockWidth * length,
				height: blockHeight,
				x: blockEnd.x,
				y: blockEnd.y,
				color: randColor

			};
			blockEnd.x += blockWidth * length;
		} else {
			blockEnd.x = 10;
			blockEnd.y += blockHeight + 10;
			newBlock = {
				text: chord,
				duration: length,
				width: blockWidth * length,
				height: blockHeight,
				x: blockEnd.x,
				y: blockEnd.y,
				color: randColor

			};
			blockEnd.x += blockWidth * length;
		}
		blockArray.push(newBlock);
	}

	function drawBlock(block) {
		p.fill(216, 100, block.color);
		p.rect(block.x, block.y, block.width, block.height);
		p.fill(0, 0, 100);
		p.text(block.text + " x " + block.duration + " beats", block.x + (block.width / 2), block.y + (block.height / 2));
	}

	addBtn.addEventListener("click", function () {
		addBlock(document.getElementById("form").value, 1);
		document.getElementById("form").value = "";
	});



};

new p5(sketch, 'sketch-container');
