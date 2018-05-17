$.ajax({
    type: 'POST',
    contentType: 'application/json',
    data: {
        "email": "myEmail@students.berkeley.net",
        "password": "isilly"
    },
    dataType: 'json',
    success: function(data){
        runMySuccessFunction(data);
    },
    error: function(){
        alert("failed");
    },
    url: 'https://slkidsbackend.herokuapp.com/[appName]/api/users'
});

//get a user out of the db
$.ajax({
    type: 'GET',
    dataType: 'json',
    success: function(data){
        runMySuccessFunction(data);
    },
    error: function(){
        alert("failed");
    },
    url: 'https://slkidsbackend.herokuapp.com/[appName]/api/users/' + emailToGet
});


