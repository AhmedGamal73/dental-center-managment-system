// Counter for monthes
let nav = 0;
let clicked = null;
// Check if the events already exist on local storage before parse it 
// This keep us away from getting undefined if there isn't events in local storage
const p = localStorage.getItem('event');
let patients = p ? JSON.parse(p) : [];

const calendar = document.getElementById('calendar'); 
const btn = document.getElementById('btn')
const weekdays = [
    'Sunday',
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

// function to render to display calendar
const render = () => {
    const dt = new Date();
    
    if(nav !== 0) {
       dt.setMonth(new Date().getMonth() + nav);
    }


    const day = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();


    // Show number of days in the current month
    const daysInMonth = new Date(year, month, 0).getDate();
    // Show first day of the current month
    const firstDayOfMonth = new Date(year, month-1, 1);

    const currnetDayString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    // Get the index of current day.
    const paddingDays = weekdays.indexOf(currnetDayString.split(', ')[0])
    
    // Displaing the current month.
    document.getElementById('monthDisplay').innerHTML = 
        `${dt.toLocaleDateString('en-us', { month: 'long'})}, ${year}`

    //reset the calendar
    calendar.innerHTML = '';

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        daySquare.addEventListener('click', () => {console.log('clicked')});
        if (i > paddingDays) {
            daySquare.innerHTML = i - paddingDays;
            daySquare.addEventListener('click', () => {});
        } else {
            daySquare.classList.add('padding');
        }
        calendar.appendChild(daySquare);
    }
};

const initBtn = () => {
    document.getElementById('nextMonthBtn').addEventListener(('click'), () => {
        nav++;
        render();
    });

    document.getElementById('prevMonthBtn').addEventListener(('click'), () => {
        nav--
        render();
    });
};

initBtn();
render();



