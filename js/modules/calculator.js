const screen = document.getElementById('screen')
const keys = document.getElementById('keys')

let number,
	number2,
	operando = false,
	result = 0,
	oper

screen.textContent = '0'

const calculator = () => {

	if(!keys)
		return

	keys.addEventListener('click', e => {

		const d = e.target.dataset

		if (d.number)
			printScreen(d.number)
		if (d.operator)
			getOpetion(d.operator)
		if (d.action)
			execAction(d.action)

	})
}

const getOpetion = operator => {

	number = Number(screen.textContent)

	operando = true

	screen.textContent = operator
	console.log(number)

	oper = operator
}

const printScreen = content => {
	if(screen.textContent === '0' || operando) {
		screen.innerText = content
	} else if (content === '.' && !screen.textContent.includes('.')) {
		screen.innerText += content
	} else if (content !== '.') {
		screen.innerText += content
	} else {
		null
	}
	operando = false
}

const execAction = action => {
	operando = true
	if (action === 'C') {
		screen.innerText = '0'
		result = 0
		number = 0
		numer2 = 0
	} else {
		number2 = Number(screen.textContent)
		switch (oper) {
			case '*':
				result = number * number2
				break
			case '/':
				number2 = 0 ? result = Infinity : result = parseFloat(number / number2)
				break
			case '+':
				result = number + number2
				break
			case '-':
				result = number - number2
				break
		}
		
		screen.innerText = result
	}

}

export default calculator