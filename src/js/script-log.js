 var loginArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        var regBox = document.getElementById("register");
        var forgetBox = document.getElementById("forgot");

        var loginTab = document.getElementById("");
        var regTab = document.getElementById("");



        function register(){
            event.preventDefault();

            var login = document.getElementById("").value;
            var password = document.getElementById("").value;
            var passwordRetype = document.getElementById("").value;

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

                document.getElementById("").value ="";
                document.getElementById("").value="";
                document.getElementById("").value="";
            }
            else{
                alert(login + " Czy jesteś zarejestrowany?");
                return ;
            }
        }
        function login(){
            event.preventDefault();

            var login = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

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

                document.getElementById("").value ="";
                document.getElementById("").value="";
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