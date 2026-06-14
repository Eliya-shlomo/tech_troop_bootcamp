const validate = function() {
    
    const nameInput = document.getElementById("name");
    const salaryInput = document.getElementById("salary");
    const birthdayInput = document.getElementById("birthday");
    const phoneInput = document.getElementById("phone");
    const messagesDiv = document.getElementById("messages");

    
    const name = nameInput.value;
    const salary = parseInt(salaryInput.value) || 0; 
    const birthday = birthdayInput.value;
    const phone = phoneInput.value;

    messagesDiv.style.color = "red";

   
    if (name.length <= 2) {
        messagesDiv.innerHTML = "השם חייב להיות ארוך מ-2 תווים";
        return; 
    }

    if (salary < 10000 || salary > 16000) {
        messagesDiv.innerHTML = "השכר חייב להיות בין 10,000 ל-16,000";
        return;
    }

    if (birthday === "") {
        messagesDiv.innerHTML = "חובה להזין תאריך לידה";
        return;
    }

    if (phone.length !== 10) {
        messagesDiv.innerHTML = "מספר הטלפון חייב להכיל בדיוק 10 ספרות";
        return;
    }

    messagesDiv.style.color = "green";
    messagesDiv.innerHTML = "הטופס נשלח בהצלחה! 🎉";
};

const btn = document.getElementById("submitBtn");
btn.onclick = validate;