 var loginArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        function register(){
            event.preventDefault();

            var login = document.getElementById("re").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rpp").value;

            if (login == ""){
                alert("Wpisz login.");
                return ;
            }
            else if (password == ""){
                alert("Wpisz hasło");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Wpisz hasło");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Hasła nie są identyczne");
                return;
            }
            else if(loginArray.indexOf(login) == -1){
                loginArray.push(login);
                passwordArray.push(password);

                alert(login + "  Zarejestrowałeś się. \nTeraz zaloguj się!");

                document.getElementById("re").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rpp").value="";
            }
            else{
                alert(login + " Czy jesteś zarejestrowany?");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var login = document.getElementById("ll").value;
            var password = document.getElementById("lp").value;

            var i = loginArray.indexOf(login);

            if(loginArray.indexOf(login) == -1){
                if (login == ""){
                    alert("Wpisz login");
                    return ;
                }
                alert("Nie ma takiego konta");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Wpisz hasło");
                    return ;
                }
                alert("Hasło nieprawidłowe");
                return ;
            }
            else {
                alert(login + " Jesteś zalogowany. \n Witamy!");

                document.getElementById("ll").value ="";
                document.getElementById("lp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var login = document.getElementById("").value;

            if(loginArray.indexOf(login) == -1){
                if (login == ""){
                    alert("Wpisz login");
                    return ;
                }
                alert("Nie ma takiego konta");
                return ;
            }

            alert("Hasło zmienione na podstawowe 123456qwerty \n Powodzenia!");
            document.getElementById("fe").value ="";
        }