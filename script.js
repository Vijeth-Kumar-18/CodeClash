// Upload Resources
document.getElementById('resource-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('resource-file');
    const fileName = fileInput.value.split('\\').pop();
    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    document.querySelector('#resource-list ul').appendChild(listItem);
    fileInput.value = '';
});

// Post Announcements
document.getElementById('announcement-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const announcementText = document.getElementById('announcement-text').value;
    const listItem = document.createElement('li');
    listItem.textContent = announcementText;
    document.querySelector('#announcement-list ul').appendChild(listItem);
    document.getElementById('announcement-text').value = '';
});

// Add Assignments
document.getElementById('assignment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('assignment-title').value;
    const deadline = document.getElementById('assignment-deadline').value;
    const listItem = document.createElement('li');
    listItem.textContent = `${title} - Due: ${deadline}`;
    document.querySelector('#assignment-list ul').appendChild(listItem);
    document.getElementById('assignment-title').value = '';
    document.getElementById('assignment-deadline').value = '';
});

// Progress Overview
const grades = [
    { assignment: 'Math Homework', grade: 'A', feedback: 'Excellent work!' },
    { assignment: 'Science Project', grade: 'B+', feedback: 'Good job!' }
];

const progressList = document.querySelector('#progress-list ul');
grades.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${item.assignment}</strong> - Grade: ${item.grade} <br> Feedback: ${item.feedback}`;
    progressList.appendChild(listItem);
});
