let number1 = document.querySelector('.num1')
let number2 = document.querySelector('.num2')
let number3 = document.querySelector('.num3')
let number4 = document.querySelector('.num4')
let number5 = document.querySelector('.num5')
let number6 = document.querySelector('.num6')
let number7 = document.querySelector('.num7')
let number8 = document.querySelector('.num8')
let number9 = document.querySelector('.num9')
let number0 = document.querySelector('.num0')
let add = document.querySelector('.add')
let mult = document.querySelector('.mult')
let divic = document.querySelector('.divic')
let sub = document.querySelector('.sub')
let equal = document.querySelector('.equal')
let dot = document.querySelector('.dot')
let removeC = document.querySelector('.remove-elementC')
let removeR = document.querySelector('.remove-elementR')
let input = document.querySelector('h2')
let son = 0
let num2 = ''
let sum1 = 0

number1.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '1'
		num2 = num2.slice(0,1) + '1' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '1'	
	}
	else if((input.textContent).length <15) {
		input.textContent += '1'
		num2 += '1'
	}
})
number2.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '2'
		num2 = num2.slice(0,1) + '2' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '2'	
	}
	else if((input.textContent).length <15) {
		input.textContent += '2'
		num2 +='2'
	}
})
number3.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '3'
		num2 = num2.slice(0,1) + '3' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '3'	
	}
	else if((input.textContent).length <15) {
		input.textContent += '3'
		num2 +='3'
	}
		})
number4.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '4'
		num2 = num2.slice(0,1) + '4' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '4'	
	}
	else if((input.textContent).length <15) {
		input.textContent += '4'
		num2 +='4'
	}
})
number5.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '5'
		num2 = num2.slice(0,1) + '5' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.' ){
		input.textContent = ''
		input.textContent += '5'	
	}
	else if ((input.textContent).length < 15) {
		input.textContent += '5'
		num2 +='5'
	}
})
number6.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '6'
		num2 = num2.slice(0,1) + '6' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '6'	
	}
	else if ((input.textContent).length < 15) {
		input.textContent += '6'
		num2 +='6'
	}
})
number7.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '7'
		num2 = num2.slice(0,1) + '7' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '7'	
	}
	else if ((input.textContent).length < 15) {
		input.textContent += '7'
		num2 +='7'
	}
})
number8.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '8'
		num2 = num2.slice(0,1) + '8' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '8'	
			}
			else if ((input.textContent).length < 15) input.textContent += '8'
			num2 +='8'
		})
number9.addEventListener('click', (event) => {
	if (num2[1] == '0' && num2[2] !='.'){
		input.textContent = (input.textContent).slice(0,(input.textContent).indexOf(num2[1])) + (input.textContent).slice((input.textContent).indexOf(num2[1])+1) + '9'
		num2 = num2.slice(0,1) + '9' + num2.slice(2)
	}
	else if (input.textContent[0] =='0' && input.textContent[1] !='.'){
		input.textContent = ''
		input.textContent += '9'	
	}
	else if ((input.textContent).length < 15) input.textContent += '9'
	num2 +='9'
})

number0.addEventListener('click', (event) => {
	if (input.textContent.slice(0,2) != '0'&& num2[1] != '0'){
		input.textContent += '0'
		num2 +='0'
	}
})

add.addEventListener('click', (event) => {
	if ((input.textContent.includes("*") ||input.textContent.includes("/") || input.textContent.includes("-"))||input.textContent.includes("+")){
		son = 0
		if (input.textContent.slice(-1) =='+'||input.textContent.slice(-1) =='*'||input.textContent.slice(-1) =='/'||input.textContent.slice(-1) =='-' )
			input.textContent = input.textContent.slice(0, -1)
		else if('+-*/'.includes(input.textContent[0])) son = 0
		else son = 1
	}
	if (son == 0){
		if (num2 != '-'&& num2 != '+' && num2 != '*' && num2 != '/')
			sum1 = num2
		if ((input.textContent).length <15) input.textContent += '+'
	    son  = 1
	    num2 = '+'
	    doted = 0
	}
})

sub.addEventListener('click', (event) => {
	if (input.textContent.includes("+")|| input.textContent.includes("*")||input.textContent.includes("/")||input.textContent.includes("-")){
		son = 0
		if (input.textContent.slice(-1) =='+'||input.textContent.slice(-1) =='*'||input.textContent.slice(-1) =='/'||input.textContent.slice(-1) =='-' )
			input.textContent = input.textContent.slice(0, -1)
		else if(('+-*/'.includes(input.textContent[0]))) son = 0
		else son = 1
	}
	if (son == 0 ){
		if (num2 != '-' && num2 != '+' && num2 != '*' && num2 != '/')
			sum1 = num2
		if(input.textContent.length <15) input.textContent += '-'
	    son  = 1
	    num2 = '-'
	    doted = 0
	}
})

divic.addEventListener('click', (event) => {
	if (input.textContent.includes("+") || input.textContent.includes("*") || input.textContent.includes("-")||input.textContent.includes("/")){
		son = 0
		if (input.textContent.slice(-1) =='+'||input.textContent.slice(-1) =='*'||input.textContent.slice(-1) =='/'||input.textContent.slice(-1) =='-' )
			input.textContent = input.textContent.slice(0, -1)
		else if(('+-*/').includes(input.textContent[0])) son = 0
		else son = 1
	}
	if (son == 0){
		if (num2 != '-'&& num2 != '+' && num2 != '*' && num2 != '/')
			sum1 = num2
		if (input.textContent.length <15) input.textContent += '/'
	    son  = 1
	    num2 = '/'
	    doted = 0
	}
})

mult.addEventListener('click', (event) => {
	if (input.textContent.includes("+")||input.textContent.includes("/") || input.textContent.includes("-")||input.textContent.includes("*")){
		son = 0
		if (input.textContent.slice(-1) =='+'||input.textContent.slice(-1) =='*'||input.textContent.slice(-1) =='/'||input.textContent.slice(-1) =='-' )
			input.textContent = input.textContent.slice(0, -1)
		else if (('+-*/').includes(input.textContent[0])) son = 0
		else son = 1
	}
	if (son == 0){
		if (num2 != '-'&& num2 != '+' && num2 != '*' && num2 != '/') sum1 = num2
		if(input.textContent.length <15) input.textContent += '*'
	    son  = 1
	    num2 = '*'
	    doted = 0
	}
})

let doted = 0
equal.addEventListener('click', (event) => {
	if (num2[0] == '+' && num2.length > 1) input.textContent = (parseFloat(sum1) + parseFloat(num2.slice(1)))
	else if (num2[0] == '-' && num2[1] != '') input.textContent = (((parseFloat(sum1)*10) - (parseFloat(num2.slice(1))*10)) /10).toString().slice(0,10)
	else if (num2[0] == '*' && num2[1] != '') input.textContent = ((parseFloat(sum1)*10) * (parseFloat(num2.slice(1))*10)) /100
	else if (num2[0] == '/' && num2[1] != '') input.textContent = ((parseFloat(sum1) / parseFloat(num2.slice(1))).toString()).slice(0,10)
	sum1 = ''
	num2 = input.textContent
	son = 0
})

dot.addEventListener('click',(event) => {
	if ((!(input.textContent.includes('.')) || !num2.includes('.')) && doted ==0 && input.textContent != ''){
		num2 += '.'
		if (num2[1] == '.' && ('+-*/').includes(num2[0])) input.textContent += '0.'
		else input.textContent += '.'
		doted += 1
	}
})
removeC.addEventListener('click',(event) => {
	input.textContent = ''
	num2 = ''
	sum1 = ''
	doted = 0
	son = 0
})
removeR.addEventListener('click',(event)=>{
	input.textContent = (input.textContent).slice(0,-1)
	if (num2.length > 1) num2 = num2.slice(0,-1)
	if ((input.textContent) == '') num2 = ''
	son = 0
})

	




