const inputbox = document.getElementById("input-box"); // "input-box" आईडी वाले एलिमेंट को पकड़ता है
const listcontainer = document.getElementById("list-container"); // "list-container" आईडी वाले एलिमेंट को पकड़ता है

function addTask() {
    if (inputbox.value === '') { // यदि "input-box" में कोई मान नहीं है तो
        alert("add task please !"); // सूचना: कृपया कार्य जोड़ें!
    } else {
        let li = document.createElement("li"); // एक नया आइटम बनाता है
        li.innerHTML = inputbox.value; // आइटम में दिए गए मान को सेट करता है
        listcontainer.appendChild(li); // "list-container" में आइटम जोड़ता है
        let span = document.createElement("span"); // एक नया स्पैन बनाता है
        span.innerHTML = "\u00D7"; // "×" चिह्न को सेट करता है
        li.appendChild(span); // आइटम में स्पैन जोड़ता है
    }
    savedata();
    inputbox.value = ''; // "input-box" में मान को खाली करता है
     // डेटा को सहेजता है
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // यदि क्लिक किया गया एलिमेंट "LI" है तो
        e.target.classList.toggle("checked"); // "checked" क्लास को टॉगल करता है
        savedata(); // डेटा को सहेजता है
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // माता-पिता एलिमेंट को हटाता है
        savedata(); // डेटा को सहेजता है
    }
    return false; // फाल्स लौटाता है
});

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML); // "data" कुंजी के साथ डेटा को स्थानीय स्टोरेज में सेट करता है
}

function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data"); // स्थानीय स्टोरेज से "data" को प्राप्त करता है और "list-container" में सेट करता है
}

showtask(); // showtask() फ़ंक्शन को कॉल करता है
