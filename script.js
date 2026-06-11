// 1. DYNAMIC TIME-BASED GREETING FEATURE
function getTechGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "⚡ Good Morning, Welcome to the Hub";
    } else if (hours < 17) {
        greeting = "💻 Good Afternoon, Welcome to the Hub";
    } else {
        greeting = "🌙 Good Evening, Welcome to the Hub";
    }

    // Agar website par greeting element hoga toh usme text daal dega
    const greetingElement = document.getElementById("welcome-greeting");
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// 2. TECH LOGIC & QUOTES GENERATOR FEATURE
const techFacts = [
    "Optimizing code efficiency is the first step toward high performance.",
    "The Internet of Things (IoT) bridges the gap between software and reality.",
    "Clean code always looks like it was written by someone who cares.",
    "Git branches allow seamless parallel development without system conflict.",
    "Automation isn't about replacing work; it's about eliminating repetition."
];

function generateTechFact() {
    const randomIndex = Math.floor(Math.random() * techFacts.length);
    const factElement = document.getElementById("dynamic-fact");
    if (factElement) {
        factElement.textContent = techFacts[randomIndex];
    }
}

// Execute features when the DOM/Page fully loads
document.addEventListener("DOMContentLoaded", () => {
    getTechGreeting();
    generateTechFact();
});