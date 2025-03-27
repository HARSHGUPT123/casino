$ = jQuery

$(document).ready(function() {
    $(".form-submit").click(function() {
        const userfirstInput = document.getElementById("nameInput").value;
        const userlastInput = document.getElementById("lastInput").value;
        const usermobileInput = document.getElementById("numberInput").value;
        const useremailInput = document.getElementById("emailInput").value;
        document.getElementById("visibleData").innerHTML = `<div class='content'>
        <div class='backend-firstname'>${userfirstInput}</div>
        <div class='backend-lastname'>${userlastInput}</div>
        <div class='backend-mobilename'>${usermobileInput}</div>
        <div class='backend-emailname'>${useremailInput}</div></div>`;
    });
});


