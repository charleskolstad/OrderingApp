$(".toggle-tabs").click(function () {
    if ($(this).hasClass('active') == false) {
        $(".content-wrapper section").css('display', "none");
    }
});

$("#btnUserTypes").click(function () {
    $("section").css('display', 'none');
    UserTypeViewAll('load');
});

$("#btnUser").click(function () {
    UsersViewAll();
});

$("#btnCancelUserType").click(function () {
    UserTypeViewAll('load');
});

$("#btnAddUserType").click(function () {
    UserTypeViewAll('add');
});

$("#TypeID_").click(function () {
    UserTypeViewAll('update');
});

$("#btnAddUser").click(function () {
    $("#AllUserDiv").css('display', 'none');
    $("#AddUserDiv").css('display', 'block');
    $("#secUser h2").text('Update Existing User')
});

$("#btnCancelUser").click(function () {
    UsersViewAll();
});

function UserTypeViewAll(action){
    if (action == 'load') {
        $("#secUserType h2").text('User Types')

        $("#secUserType").css('display', 'block');
        $("#secUserType #AddUserTypesDiv").css('display', 'none');
        $("#secUserType #AllUserTypesDiv").css('display', 'block');

        $("#AddUserTypesDiv .form-control").val('');
        $("#btnSaveUserType").val('Submit');
    }
    else if (action == 'add' || action == 'update') {
        if(action == 'add')
            $("#secUserType h2").text('Add User Type');
        else
            $("#secUserType h2").text('Update User Type');

        $("#secUserType").css('display', 'block');
        $("#secUserType #AllUserTypesDiv").css('display', 'none');
        $("#secUserType #AddUserTypesDiv").css('display', 'block');
    }
}

function UsersViewAll()
{
    $("section").css('display', 'none');
    $("#secUser").css('display', 'block');

    $("#AllUserDiv").css('display', 'block');
    $("#AddUserDiv").css('display', 'none');
    $("#secUser h2").text('Users');
}
