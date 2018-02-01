import axios from 'axios';

class UserService {

    sendData(full_name, email, password) {
        console.log(full_name, email, password)
        axios.post('http://localhost:5000/users/add', {
            full_name: full_name,
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(error => console.log(error))
    }
}

export default UserService;
