// Countdown function to calculate days left
function countdown(targetDate, countdownElementId) {
    const today = new Date();
    const [month, day] = targetDate.split('.').map(Number);
    let target = new Date(today.getFullYear(), month - 1, day);

    // If the target date is in the past, adjust it to the next year
    if (target < today) {
        target.setFullYear(today.getFullYear() + 1);
    }

    const difference = target - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Display the countdown
    document.getElementById(countdownElementId).textContent = (`${daysLeft} days left`);
}

// Initialize countdowns for each event
countdown('10.15', 'countdown1');  // INU application
countdown('10.15', 'countdown2');  // GKS application
countdown('11.10', 'countdown3');  // Interview
countdown('1.27', 'countdown4');   // Visa
countdown('3.5', 'countdown5');    // Korea

// Function to toggle color and save state in localStorage
function toggleColor(event) {
    // Select the closest parent with the 'course' class
    const course = event.target.closest('.course');
    const courseId = course.textContent.trim(); // Using the text content as the identifier

    // Toggle the gray class and save state
    if (course.classList.toggle('gray')) {
        localStorage.setItem(courseId, 'gray');
    } else {
        localStorage.removeItem(courseId);
    }
}

// Load state from localStorage on page load
function loadState() {
    document.querySelectorAll('.course').forEach(course => {
        const courseId = course.textContent.trim();
        if (localStorage.getItem(courseId) === 'gray') {
            course.classList.add('gray');
        }
    });
}

// Add event listener to each course block for toggling color on click
document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', toggleColor);
});

// Load saved state on page load
document.addEventListener('DOMContentLoaded', loadState);