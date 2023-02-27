const rowsAndColumns = +document.getElementById("modify").value;

function fillPaper(value) {
	const whitePaper = document.getElementById("paper");
	whitePaper.innerHTML = "";
	whitePaper.style.gridTemplateColumns = `repeat(${value}, auto)`;
	for(let i = 1; i <= value * value; i++) {
		const div = document.createElement("div");
		div.id = `section${i}`;
		div.classList.add("sections");
		whitePaper.append(div);
	}

	document.getElementById("slider").innerHTML = `Value: <strong>${value}</strong>`;

	let paint = Array.from(document.getElementsByClassName("sections"));

	paint.forEach(msd => {
		msd.addEventListener('mousedown', () => {
		mouse = true;
		});
	});

	paint.forEach(msp => {
		msp.addEventListener('mouseup', () => {
		mouse = false;
		});
	});
	
	paint.forEach(pnt => {
	pnt.addEventListener('click', () => {
		if (color === "black") {
			pnt.style.backgroundColor = color;
		} else if (color === "rainbow") {
			let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
			pnt.style.backgroundColor = randomColor;
		} else if (color === "shadow" && pnt.style.backgroundColor) {
			randomShadow = Math.floor(Math.random() * 101);
			pnt.style.filter = `opacity(${randomShadow}%)`;
		} else if (color === "pick") {
			pnt.style.backgroundColor = pick;
		} else if (color === "white" && pnt.style.backgroundColor) {
			pnt.removeAttribute("style");
		}
	});

	pnt.addEventListener('mouseenter', () => {
		if(mouse){
		if (color === "black") {
			pnt.style.backgroundColor = color;
		} else if (color === "rainbow") {
			let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
			pnt.style.backgroundColor = randomColor;
		} else if (color === "shadow" && pnt.style.backgroundColor) {
			randomShadow = Math.floor(Math.random() * 101);
			pnt.style.filter = `opacity(${randomShadow}%)`;
		} else if (color === "pick") {
			pnt.style.backgroundColor = pick;
		} else if (color === "white" && pnt.style.backgroundColor) {
			pnt.removeAttribute("style");
		}
		}
	});	
});
}

let mouse = false;
let color = "black";

fillPaper(rowsAndColumns);

const choice = Array.from(document.getElementsByClassName("paint"));
choice.forEach(clr => {
	let idColor = clr.getAttribute("id");
	clr.addEventListener('click', () => {
		color = idColor;
		if (color === "space") {
			Array.from(document.getElementsByClassName("sections")).forEach(psc => {
			psc.removeAttribute("style");
			});
		}
		return color;
	});
});

let pick = "";
function pickColor(choice) {
	pick = choice;
	return pick;
}

document.getElementById("sub").addEventListener('click', () => {
	let subs = +document.getElementById("modify").value;
	document.getElementById("modify").value = subs - 1;
	fillPaper(document.getElementById("modify").value);
});

document.getElementById("add").addEventListener('click', () => {
	let plus = +document.getElementById("modify").value;
	document.getElementById("modify").value = plus + 1;
	fillPaper(document.getElementById("modify").value);
});