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
	let paint = Array.from(document.getElementsByClassName("sections"));
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
		}
	});
});
}


fillPaper(rowsAndColumns);

let color = "black";
const choice = Array.from(document.getElementsByClassName("paint"));
choice.forEach(clr => {
	let idColor = clr.getAttribute("id");
	clr.addEventListener('click', () => {
		color = idColor;
		return color;
	});
});