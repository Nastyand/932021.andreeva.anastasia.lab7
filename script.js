
    document.querySelector(".square_button").addEventListener("click", function(){draw_square(get_number())});
    document.querySelector(".triangle_button").addEventListener("click", function(){draw_triangle(get_number())});
    document.querySelector(".circle_button").addEventListener("click", function(){draw_circle(get_number())});
    

function get_number() 
{
    return Number(document.querySelector('input').value);
}

function draw_square(number) 
{
    if(number>500)
        {
            alert('Нельзя вводить число больше 500')
            return 0;
        }
    const drawingArea = document.querySelector('.drawing_area');
    for (let i = 0; i < number; i++) {

        const square = document.createElement('div');
        square.classList.add('square');

        const size = Math.random() * (250 - 50) + 50; 
        const x = Math.random() * (1600 - size) + 10;
        const y = (Math.random() * (650 - size)) + 70;

        square.style.left = x + 'px';
        square.style.top = y + 'px';
        square.style.width = size + 'px';
        square.style.height = size + 'px';

        let isFirstClick = true; 
        square.addEventListener('click', function () {
            if (isFirstClick) {
                square.style.backgroundColor = 'yellow';
                isFirstClick = false;
            }
             else {
                square.remove();
            }
        });

        drawingArea.appendChild(square);
    }
}


function draw_triangle(number) 
{
    if(number>500)
        {
            alert('Нельзя вводить число больше 500')
            return 0;
        }
    const drawingArea = document.querySelector('.drawing_area');
    for (let i = 0; i < number; i++) {

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const size = Math.random() * (250 - 50) + 50; 
        const x = Math.random() * (1600 - size) + 10;
        const y = (Math.random() * (650 - size)) + 70;

        triangle.style.left = x + 'px';
        triangle.style.top = y + 'px';
        triangle.style.borderLeft = size / 2 + 'px solid transparent';
        triangle.style.borderRight = size / 2 + 'px solid transparent';
        triangle.style.borderBottom = size + 'px solid blue';

        let isFirstClick = true; 
        triangle.addEventListener('click', function () {
            if (isFirstClick) {
                 triangle.style.borderBottom = size + 'px solid yellow';
                isFirstClick = false;
            }
             else {
                triangle.remove();
            }
        });

        drawingArea.appendChild(triangle);
    }
}


function draw_circle(number) 
{
    if(number>500)
        {
            alert('Нельзя вводить число больше 500')
            return 0;
        }
    const drawingArea = document.querySelector('.drawing_area');
    for (let i = 0; i < number; i++) {

        const circle = document.createElement('div');
        circle.classList.add('circle');

        const size = Math.random() * (250 - 50) + 50; 
        const x = Math.random() * (1600 - size) + 10;
        const y = (Math.random() * (650 - size)) + 70;

        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.borderRadius = '50%'; 

        let isFirstClick = true; 
        circle.addEventListener('click', function () {
            if (isFirstClick) {
                 circle.style.backgroundColor = 'yellow';
                isFirstClick = false;
            }
             else {
                circle.remove();
            }
        });

        drawingArea.appendChild(circle);
    }
}