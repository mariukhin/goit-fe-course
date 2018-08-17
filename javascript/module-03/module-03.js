const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    const minLgth = 4;
    const maxLgth = 16;
    const valid = login.length >= minLgth && login.length <= maxLgth;

    if(valid){
        return true;
    }else{
        return false;
    }
};

const isLoginUnique = function(allLogins, login) {
    allLogins = logins;
    const notValid = false;
    const valid = true;
    if(allLogins.includes(login)){
        return notValid;
    }else{
        return valid;
    }
};

const addLogin = function(login) {
    if(isLoginValid(login)){
        if(isLoginUnique(logins,login)){
            logins.push(login);
            console.log("Логин успешно добавлен");
        }else{
            console.log("Такой логин уже используется!");
        }
    }else{
        console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    }
};

addLogin('Ajax');
addLogin('robotGoogles');
addLogin('Zod');
addLogin('jqueryisextremelyfast');