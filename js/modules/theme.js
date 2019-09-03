const buttonsTheme = document.getElementById('buttons-theme')
const colorButton = document.querySelectorAll('.calculator__keys button')

const changeTheme = () => {
	buttonsTheme.addEventListener('click', e => {

		const d = e.target.dataset

		switch (d.theme) {
			case 'first':
				colorButton.forEach(button => {
					button.style.backgroundColor = '#6610f2'
				});
				break
			case 'second':
				colorButton.forEach(button => {
					button.style.backgroundColor = '#20c997'
				});
				break
			default:
				colorButton.forEach(button => {
					button.style.backgroundColor = '#333'
				});
				break;
		}
	})
}

export default changeTheme