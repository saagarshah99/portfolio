const skillIcons = [
    ["html5-plain-wordmark", "HTML5"],
    ["css3-plain-wordmark", "CSS3"],
    ["bootstrap-plain-wordmark", "Bootstrap"],
    ["javascript-plain", "JavaScript"],
    ["nodejs-plain-wordmark", "NodeJS"],
    ["react-original-wordmark", "React"],
    ["jquery-plain-wordmark", "jQuery"],
    ["jest-plain", "Jest"],
    ["java-plain-wordmark", "Java"],
    ["python-plain", "Python"],
    ["csharp-plain-wordmark", "C#"],
    ["mysql-plain-wordmark", "SQL"],
    ["linux-plain", "Linux"],
    ["git-plain-wordmark", "Git"],
    ["github-original-wordmark", "GitHub"],
];

// looping through array of objects to output skills icons, title used for tooltips
skillIcons.forEach((skill) => {
    document.querySelector("#skills").innerHTML += `
        <i class="devicon-${skill[0]} colored" title="${skill[1]}"></i>
    `;
})