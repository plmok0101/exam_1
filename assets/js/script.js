
$(document).ready(function(){
    $(".popupButton").click(function(){
        if($(this).hasClass("facebook")){
            window.open("https://ko-kr.facebook.com/","fecebookPopup","width=800, height=800");
        }
        if($(this).hasClass("google")){
            window.open("https://www.google.co.kr/","GooglePopup","width=800, height=800");
        }
    })

    $("#form").submit(function(){
        var check_email = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        var inputEmail = $("#email").val();
        var inputPassword = $("#password").val();

        if($("#email").val() == ""){
                alert("이메일을 입력해주세요.");
                $("#email").focus();
                return false;
        }
        if(!check_email.test($("#email").val())){
            alert("이메일형식에 맞게 입력해주세요");
            $("#email").focus();
            return false;
        }
            
        if($("#password").val() == ""){
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return false;
        }

        $.getJSON('assets/json/login.json', function(data){
            var email;
            var password; 
            $.each(data, function(i, item){
                email = (item.email);
                password = (item.password);
            })
            console.log(email);
            console.log(password);
            console.log(inputEmail);
            console.log(inputPassword);
            if(email == inputEmail){
                if(password == inputPassword){
                    alert("로그인 되었습니다.");
                }else{
                    alert("비밀번호가 올바르지 않습니다.");
                }
            }else{
                alert("이메일이 올바르지 않습니다");
            }
        })
    })
})
