var sketch = function (p) {

	var playBtn = document.getElementById("play");
	var stopBtn = document.getElementById("stop");
	var resetBtn = document.getElementById("reset");
	var addBtn = document.getElementById("add");
	var rootList = document.getElementById("rootList");
	var qualList = document.getElementById("qualList");
	var beatForm = document.getElementById("beat-form");
	var clickPos = {
	 				set: false,
	 				x:p.mouseX,
	 				y:p.mouseY
	 			};
	// var hue = 216;
	var dragging = false;
	var hue = 0;
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
	var loopStatus = false;
	var sched = [];
	var beats = [];
	var lastTime = 0;
	var tempo = 120;
	var beatTime = 60 / tempo;
	var barTime = beatTime * 4;
	var currentNote;
	var totalNotes = 0;
	var duration = .2;
	var totalTime;
	var maxMeasures = 0;
	var selectedBlock;
	var movingBlock;
	Tone.Buffer.on('load', function () {
		console.log('...done');
		sampler.sync();
		sampler.toMaster();
	})
	
	Tone.Buffer.on('progress', function () {
	})

	Tone.Buffer.on('error', function () {
		console.log('error');
	})

	function noteToNum(note) {


		var noteNum = 0;

		if (note == "C")
			noteNum = 0;
		else if (note == "C#/Db")
			noteNum = 1;
		else if (note == "D")
			noteNum = 2;
		else if (note == "D#/Eb")
			noteNum = 3;
		else if (note == "E")
			noteNum = 4;
		else if (note == "F")
			noteNum = 5;
		else if (note == "F#/Gb")
			noteNum = 6;
		else if (note == "G")
			noteNum = 7;
		else if (note == "G#/Ab")
			noteNum = 8;
		else if (note == "A")
			noteNum = 9;
		else if (note == "A#/Bb")
			noteNum = 10;
		else if (note == "B")
			noteNum = 11;
		return noteNum;
	}

	function convertBeat(beats) {
		var m = 0;
		var b = 0;
		var s = 0;
		m = Math.floor(beats / 4);

		b = Math.floor(beats) - (m * 4);

		s = (beats % 1) * 4;
		return (m + ':' + b + ':' + s);
	}

	function numToNote(note) {

		return notesAndNums[note];
	}

	function findThird(root, q) {
		//            console.log(root + "root");
		var mod;
		if (q == ("major")) {
			mod = 0;
		} else if (q == ("minor")) {
			mod = -1;
		} else if (q == ("diminished")) {
			mod = -1;
		} else if (q == ("augmented")) {
			mod = 0;
		}

		return (root + 4 + mod);
	}

	function findFifth(root, q) {
		var mod;
		if (q == ("major")) {
			mod = 0;
		} else if (q == ("minor")) {
			mod = 0;
		} else if (q == ("diminished")) {
			mod = -1;
		} else if (q == ("augmented")) {
			mod = 1;
		}

		return (root + mod + 7);
	}

	function makeChord(r, q) {

		var root = noteToNum(r);
		var notes = [];
		notes[0] = root + (12 * 5);
		notes[1] = findThird(root, q) + (12 * 5);
		notes[2] = findFifth(root, q) + (12 * 5);
		var noteAndTime;

		for (var i = 0; i < 3; i++) {
			noteAndTime = {
				note: Tone.Frequency(notes[i], "midi").toNote(),
				beats: lastTime
			};

			sched.push(noteAndTime);
			// console.log(noteAndTime.note);
		}
		lastTime += parseFloat(beatForm.value);
		totalNotes += 3;

		if (lastTime % 4 != 0) {
			maxMeasures = Math.floor(lastTime / 4) + 1;
		} else(maxMeasures = lastTime / 4);
		// console.log(maxMeasures + '= max measures');

		Tone.Transport.setLoopPoints(0, maxMeasures + 'm');
	};

	function loopSwitch() {
		loopStatus = !loopStatus;
		// console.log(sampler.loaded);
	}

	function stop() {
		Tone.Transport.cancel();


	}

	function resetf(){
		console.log("reset");
		blockArray  = [];
		console.log(blockArray.length);
		sched = [];
		blockEnd = {
			x: 10,
			y: 10
		};
	}

	function play() {
		console.log("started");
		var time;
		Tone.Transport.loop = true;
		Tone.Transport.start();

		Tone.Transport.bpm.value = tempo;

		Tone.Transport.start();
		if (lastTime % 4 == 0) {
			maxMeasure = lastTime / 4;
		} else {
			maxMeasure = (Math.floor(lastTime / 4) + 1);
		}

		Tone.Transport.setLoopPoints(0, maxMeasure + 'm');

		for (var i = 0; i < totalNotes; i++) {
			time = convertBeat(sched[i].beats);
			sampler.triggerAttackRelease(sched[i].note, '2n', time);
		}

		beatTime = 60 / tempo;
		barTime = beatTime * 4;

		totalTime = lastTime * beatTime;

	}

	function reset() {
		sched = [];
		chordList = [];
	}



	var width = window.innerWidth;
	var height = window.innerWidth;
	var blockWidth = window.innerWidth / 16 - 1;
	var blockHeight = 50;
	var blockArray = [];
	var blockEnd = {
		x: 10,
		y: 10
	};


	p.setup = function () {
		p.createCanvas((window.innerWidth), (window.innerHeight));
		p.background(0);
		p.colorMode(p.HSL, 360, 100, 100);
		p.background(0);
		p.textAlign(p.CENTER, p.CENTER);
	}
	
	p.draw = function () {
		p.background(0, 100, 100);
		for (var i = 0; i < blockArray.length; i++) {
			var currentBlock = blockArray[i];
			drawBlock(currentBlock);
		}

		if (dragging){
			drawMovingBlock();
		}
	}

	 p.mouseDragged = function(){
	 	var over = overBlock(p.mouseX,p.mouseY);
	 		if (over!=-1){
	 			if (clickPos.set == false)
	 			clickPos = {
	 				set: true,
	 				x:p.mouseX,
	 				y:p.mouseY
	 			};

	 			movingBlock = over;
	 			dragging = true;
	 		}
	 		

	}
	p.mouseReleased = function() {
		// console.
			dragging = false;
			clickPos.set = false;
	}

	function drawMovingBlock(){

		var block = blockArray[movingBlock];
		var difX = clickPos.x -  block.x;
		var difY = clickPos.y - block.y;
			p.fill(hue, 100, block.color);
			p.rect(p.mouseX-difX, p.mouseY-difY, block.width, block.height,20);
			p.fill(0, 0, 100);
			p.text(block.text + " x " + block.duration + " beats", (p.mouseX - difX) + (block.width / 2), (p.mouseY - difY) + (block.height / 2));
	}


	p.mousePressed = function(){
		
		if (overBlock(p.mouseX,p.mouseY)!=-1){
			
			console.log("clicked block");
			// selectedBlock = overBlock(p.mouseX,p.mouseY);
			// blockArray[selectedBlock].selected = true;
		

			 if (overBlock(p.mouseX,p.mouseY)==selectedBlock){
				console.log("clicked already selected");
				blockArray[selectedBlock].selected = false;
				selectedBlock = null;


			}

			else if (overBlock(p.mouseX,p.mouseY)!=selectedBlock){
				console.log("clicked new block")
				if (selectedBlock!=null)
				blockArray[selectedBlock].selected = false;
				selectedBlock = overBlock(p.mouseX,p.mouseY);
				blockArray[selectedBlock].selected = true;
			}
		}
		else {
			console.log("did not click block");
			if (selectedBlock!=null)
			blockArray[selectedBlock].selected = false;
		selectedBlock=null;
		}
	}

	function addBlock(chord, length) {
		var randColor = p.random(50) + 40;
		var newBlock;
		if (blockEnd.x + (length * blockWidth) < window.innerWidth) {
			newBlock = {
				text: chord,
				duration: length,
				width: blockWidth * length,
				height: blockHeight,
				x: blockEnd.x,
				y: blockEnd.y,
				color: randColor,
				selected: false

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
				color: randColor,
				selected: false
			};
			blockEnd.x += blockWidth * length;
		}
		blockArray.push(newBlock);
	}

	function drawBlock(block) {
				p.noStroke();

		
		if (block.selected==true){
			// p.noFill()
			p.fill(0, 0, 0);
			p.rect(block.x, block.y, block.width, block.height,20);
			p.fill(hue, 100, block.color);
			p.rect(block.x+4, block.y+4, block.width-8, block.height-8,20);
		}

		else{
			p.fill(hue, 100, block.color);
			p.rect(block.x, block.y, block.width, block.height,20);
		}
		
		p.fill(0, 0, 100);
		p.text(block.text + " x " + block.duration + " beats", block.x + (block.width / 2), block.y + (block.height / 2));
	}

	addBtn.addEventListener("click", function () {
		var root = rootList[rootList.selectedIndex].value;
		var qual = qualList[qualList.selectedIndex].value;
		makeChord(root, qual);
		addBlock(root + qual.substring(0, 3), parseInt(beatForm.value));
	});


	playBtn.addEventListener("click", function () {
		play();
	});
	
	stopBtn.addEventListener("click",function(){
		stop();
	});

	resetBtn.addEventListener("click",function(){
		resetf();
		console.log("reset 2");
	});


	function overBlock(x,y){
		var currentBlock;
		for (var i = 0; i<blockArray.length; i++){
			currentBlock = blockArray[i];
			if (x>currentBlock.x&&x<currentBlock.x+currentBlock.width){
				if (y>currentBlock.y&&y<currentBlock.y+currentBlock.height) {
					return i;
				}
			}
		}
		return -1;
	}
};

new p5(sketch, 'sketch-container');
