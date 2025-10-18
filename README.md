Frontend Wizards - Stage 0: Testable Profile Card

This project is a solution for the Stage 0 task of the Frontend Wizards challenge. It's a fully responsive, accessible, and testable profile card built with semantic HTML, modern CSS, and vanilla JavaScript, adhering to the principle of separation of concerns.

✨ Live Demo

You can view the live project hosted on GitHub Pages here:

https://emmavoen.github.io/stage-0-frontend/

✅ Core Features

Semantic HTML: The structure is built with meaningful tags like <article>, <section>, <nav>, and <figure> for better accessibility and SEO.

Responsive Design: The layout adapts seamlessly to mobile, tablet, and desktop screens using modern CSS Grid and Flexbox.

Accessible: All interactive elements are keyboard-focusable with clear :focus-visible styles, and the avatar includes a descriptive alt attribute.

Testable: Every required element includes a data-testid attribute for easy targeting by automated testing frameworks.

Dynamic Content: The "Current Time" field is updated in real-time using vanilla JavaScript to always show the current Date.now() value.

Dark Mode Support: The design respects the user's system preferences (prefers-color-scheme) for a comfortable viewing experience in any environment.

Separation of Concerns: The code is cleanly organized into three separate files: index.html (structure), style.css (presentation), and script.js (behavior).

🚀 Running Locally

To run this project on your local machine, follow these simple steps:

Clone the repository:

git clone https://github.com/Emmavoen/stage-0-frontend.git


Navigate to the project directory:

cd stage-0-frontend


Open the HTML file:
Simply open the index.html file in your favorite web browser. No special servers or build steps are required.

🛠️ Technologies Used

HTML5

CSS3

CSS Variables

Flexbox

Grid

Media Queries

Vanilla JavaScript

No external frameworks or libraries were used for the core functionality, as per the task requirements.
