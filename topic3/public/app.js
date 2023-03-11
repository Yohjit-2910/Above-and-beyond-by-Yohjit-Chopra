
// document.body.style.zoom="100%"
// $(document).ready(function() {
//     $('#login-form').submit(function(event) {
//         event.preventDefault();
//         var username = $('#username').val();
//         var password = $('#password').val();
//         // Check username and password and redirect to appropriate page
//     });
// });
    
// const users = JSON.parse(localStorage.getItem('users')) || [];

// $('#add-user').on('click', function() {
//     const user = $('#new-username').val();
//     const pass = $('#new-password').val();
//     const company = $('#Company').val();
//     const model = $('#Model').val();
//     const year = $('#Year').val();
//     const seater = $('#Seater').val();
//     users.push({ user, pass, company, model, year, seater });
//     localStorage.setItem('users', JSON.stringify(users));
//     // console.log(devices);
//     location.href = '/login';
//   });



// $('#login_click').on('click', function() {
//     const username = $('#username').val();
//     const password = $('#password').val();

//     for (var i = 0; i < users.length; i++) {
//         if (users[i].user === username && users[i].pass === password) {

//             if(username == "1" && password =="1")
//             {

//             }


//             // $('#table tbody').append(`
//             // <tr>
//             //     <td>${users[i].company}</td>
//             //     <td>${users[i].model}</td>
//             //     <td>${users[i].year}</td>
//             //     <td>${users[i].seater}</td>
//             // </tr>`
//             // );

//             // document.getElementById("data-user").innerHTML='hi';

//             console.log(users[i].company);
//             console.log(users[i].model);
//             console.log(users[i].year);
//             console.log(users[i].seater);

//             location.href = '/data';

//             return console.log("true");
//         }
//     }
//     alert("Enter the correct Username or Password");
//     return console.log("false");
    
// });

const users = [];

users.push({ user: "1", pass: "1" });
users.push({ user: "2", pass: "2" });
users.push({ user: "3", pass: "3" });


document.body.style.zoom="100%"
$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();
        if(username == "Yohjit" && password =="Yohjit")
        {
            $('#user1-page').removeClass('hidden');
            $('#login-form').addClass('hidden');

            $('#main-branch').addClass('hidden');
            $('#sub-branch').removeClass('hidden');

            $('#body-page').addClass('full-page-magic');
            $('#body-page').removeClass('full-page');

        }
        else if(username == "Mayank" && password =="Mayank")
        {
            $('#user2-page').removeClass('hidden');
            $('#login-form').addClass('hidden');

            $('#main-branch').addClass('hidden');
            $('#sub-branch').removeClass('hidden');

            $('#body-page').addClass('full-page-magic');
            $('#body-page').removeClass('full-page');
        }
        else if(username == "Ishaan" && password =="Ishaan")
        {
            $('#user3-page').removeClass('hidden');
            $('#login-form').addClass('hidden');

            $('#main-branch').addClass('hidden');
            $('#sub-branch').removeClass('hidden');

            $('#body-page').addClass('full-page-magic');
            $('#body-page').removeClass('full-page');
        }
        else
        {
            alert("Enter the correct Username or Password");
        }

    });
});