var sketch = function (p) {

	var addBtn = document.getElementById("add");
	var chordForm = document.getElementById("form");
	var beatForm = document.getElementById("beat-form");

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


	Tone.Buffer.on('load', function () {
		console.log('...done');
		sampler.sync();
		sampler.toMaster();


	})

	Tone.Buffer.on('progress', function () {
		console.log('loading...');
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

	function numToNote(note) {

		return notesAndNums[note];
	}

	function convertBeat(beats) {
		return beatConvert[beats];

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

	function makeChord(q, r) {

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
			console.log(noteAndTime.note);
		}
		lastTime += parseFloat(beatBox.value);
		totalNotes += 3;

		if (lastTime % 4 != 0) {
			maxMeasures = Math.floor(lastTime / 4) + 1;
		} else(maxMeasures = lastTime / 4);
		console.log(maxMeasures + '= max measures');

		Tone.Transport.setLoopPoints(0, maxMeasures + 'm');
	};

	function loopSwitch() {
		loopStatus = !loopStatus;
		console.log(sampler.loaded);
	}

	function pause() {
		Tone.Transport.stop();

	}

	function playNote() {
		var measure;
		var beat;
		//            Tone.Transport.setLoopPoints(0, "2m");
		Tone.Transport.loop = true;
		Tone.Transport.start();

		for (var i = 0; i < totalNotes; i++) {

			if (sched[i].beats % 4 == 0) {
				measure = sched[i].beats / 4 + 'm';
				sampler.triggerAttackRelease(sched[i].note, '8n', measure);
			} else {
				measure = Math.floor(sched[i].beats / 4);
				beat = sched[i].beats % 4;
				console.log('m = ' + measure);
				console.log('n = ' + beat);
				sampler.triggerAttackRelease(sched[i].note, '8n', Tone.TimeBase(beat, 'n') + Tone.TimeBase(measure, 'm'));
			}
		}


		tempo = tempoBox.value;
		Tone.Transport.bpm.value = tempo;

		beatTime = 60 / tempo;
		barTime = beatTime * 4;

		totalTime = lastTime * beatTime;

	}

	function addChord() {
		beatTime = 60 / tempo;
		barTime = beatTime * 4;
		quality = qualList.options[qualList.selectedIndex].value;
		root = rootList.options[rootList.selectedIndex].value;
		makeChord(quality, root);
		chordList.push(root + " " + quality);
	}

	function reset() {
		sched = [];
		chordList = [];
	}



	var width = window.innerWidth;
	var height = window.innerWidth;
	var blockWidth = window.innerWidth / 12;
	var blockHeight = 50;
	var blockArray = [];
	var blockEnd = {
		x: 10,
		y: 10
	};


	p.setup = function () {
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
		addBlock(chordForm.value, parseInt(beatForm.value));
		chordForm.value = "";
		beatForm.value = "";
		addChord()
	});



};

new p5(sketch, 'sketch-container');
