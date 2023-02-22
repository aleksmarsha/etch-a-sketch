const rowsAndColumns = +document.getElementById("modify").value;

function fillPaper(value) {
	const whitePaper = document.getElementById("paper");
	whitePaper.style.gridTemplateColumns = `repeat(${value}, auto)`;

	for(let i = 1; i <= value * value; i++) {
		const div = document.createElement("div");
		div.id = `section${i}`;
		whitePaper.append(div);
	}
}

fillPaper(rowsAndColumns);