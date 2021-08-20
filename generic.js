//output current year in footer
document.getElementById("output-year").innerHTML = new Date().getFullYear();
        
//scroll/navigate to absolute top or bottom of page
const goToPageTop = () =>
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    typeWriter("#software-developer", "Software Developer");
}
const goToPageBottom = () =>
{
    // window.scrollTo(0,document.body.scrollHeight);
    location.href = "#portfolio-section";
    typeWriter("#development-portfolio", "Development Portfolio");
}

//show top scroll button when user scrolls down at least 20px from top of document
const scrollFunction = () =>
{
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        btnScrollToTop.style.display = "block";
    } 
    else {btnScrollToTop.style.display = "none";}
}
window.onscroll = () => scrollFunction();

//output alert message which specified colour depending on type at top of page
const outputAlert = (message, alertColour) =>
{
    var alertDiv = document.getElementById("output-alert");
    alertDiv.innerHTML = message;
    alertDiv.style.color = alertColour;
    alertDiv.style.fontWeight = "Bold";

    goToPageTop();
}

//open given link in new tab
const linkNewTab = (url, linkType) => 
{
    if(linkType === "GitHub") url = "https://github.com/saagarshah99/"+url;
    window.open(url, '_blank').focus();
};

//takes a selector and piece of text and slowly outputs each character (typing effect)
const typeWriter = (selector, txt, i) =>
{
    const selectedText = document.querySelector(selector);
    
    if(i === undefined) i = 0;
    if(i === 0) selectedText.innerHTML = "";
    if (i < txt.length) 
    {
        selectedText.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100, selector, txt, i);
    }
    else selectedText.innerHTML += "<span class='blink-text'> |</a>";
}

//created array to invoke typewriter for multiple headings upon page load
const linkHeadingArr = [["#software-developer", "Software Developer"], 
["#development-portfolio", "Development Portfolio"]];
for (let i = 0; i < Object.keys(linkHeadingArr).length; i++) 
{
    typeWriter(linkHeadingArr[i][0], linkHeadingArr[i][1]);    
}