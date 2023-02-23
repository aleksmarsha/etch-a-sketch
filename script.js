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