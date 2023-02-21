const whitePaper = document.getElementById("paper");
const div = document.createElement("div");
const rowsAndColumns = +document.getElementById("modify").value;

function fillPaper(value) {
	for(let i = 1; i <= value; i++) {
		whitePaper.append(div);
	}
}

fillPaper(rowsAndColumns);