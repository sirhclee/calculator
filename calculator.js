
const result= document.getElementById("result"); // 
const container= document.getElementById("container"); // 
const containerOperator = document.getElementById("containerOperator");
const history = document.getElementById("history");

var a = '';
var b = '';
var c = ''; 
var equals = false ; 
var calc = 0; 
var reset = true; 

function operate(){
    document.getElementById("result").innerHTML="";
    let test = document.createElement("div");
    test.style.backgroundColor = 'lightgrey';
    test.style.width = '100px';
    test.style.height = '20px'; 
    test.textContent = a + b + c; 
    if (equals){
        if (b=='+'){console.log(b); calc= +a + +c;}
        else if (b=='-'){calc = +a - +c;}
        else if (b=='/'){calc= (+a / +c).toFixed(2);}
        else if (b=='*'){calc = (a * +c).toFixed(2);}
        equals = false; 
        let historyLog = document.createElement("div");
        historyLog.textContent = `${a} ${b} ${c} = ${calc}`; 
        history.appendChild(historyLog).className = "result";
        
        a = calc;
        b = '';  
        c = ''; 
        reset = true; 
        test.textContent =  calc;
        test.style.color = 'green';
        
        }     
    else test.style.color = 'grey';

    result.appendChild(test).className = "result";

};

function makeNumbers(rows, cols){
    container.style.gridTemplateRows = `repeat(${rows},50px)`; // For each row, set to row width based on .grid class width 
    container.style.gridTemplateColumns = `repeat(${cols},50px)`; // Repeat for col
    let i = 1; 
    let numbers =[1,2,3,4,5,6,7,8,9,0,'.','C']
    for (num=0; num<(rows*cols); num++ ){ //Number buttons
        let cell = document.createElement("button"); //creates new div element for each cell (numbers)
        cell.textContent = numbers[num];
        i++; 
        cell.addEventListener('click', () => {
                if (cell.textContent=='C'){a='';b='';c='';}
                else if (b==''){
                    if (reset){a = cell.textContent}
                    else if (cell.textContent != '.'){
                        a += cell.textContent 
                    }
                    else { if (!a.includes('.'))
                        {a +='.'; }}
                ;}
                else { if (cell.textContent != '.'){
                    c += cell.textContent
                    }
                    else { if (!c.includes('.'))
                        {c +='.'; }}}
                operate();
                reset = false; 
            } ); 
        container.appendChild(cell).className = "button"; //Adds element to parent
    };
    
    let j = ['+','-','*', '/','='];
    containerOperator.style.gridTemplateRows = '25px 25px 25px 25px 50px'; // For each row, set to row width based on .grid class width 
    containerOperator.style.gridTemplateColumns = `65px`;  // 150 
    
    // containerOperator.style.fontSize = 'large';
    for (num=0; num<j.length; num++){
        let cell = document.createElement("button"); //creates new div element for each cell 
        cell.textContent = j[num];
        cell.addEventListener('click', () => {
            if (cell.textContent!='='){
                b=cell.textContent;
                console.log(b)

            }
            else(equals = true )
            operate();
       }
       )
    
        containerOperator.appendChild(cell).className = "button"; //Adds element to parent         
    }
};

operate(a,b,c, equals); 
makeNumbers(4, 3); 

