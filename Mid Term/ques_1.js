// const image = document.getElementById('image');
// const imageNumber = document.getElementById('image-number');
// const imagesArray = [
//     'bear.jpg',
//     'bird.jpg',
//     'cat.jpg',
//     'deer.jpg',
//     'dog.jpg',
//     'fox.jpg',
//     'giraffe.jpg',
//     'leopard.jpg',
//     'panda.jpg',
//     'tiger.jpg',
// ];
// let currentImageIndex = 1;
// let imagesArrayLength = imagesArray.length;
// const changeImage = () => {
//     const newImageIndex = currentImageIndex % imagesArrayLength;
//     image.src = `./assets/${imagesArray[newImageIndex]}`;
//     imageNumber.innerText = `Image ${newImageIndex+1}`;
//     currentImageIndex++;
// };
// setInterval(changeImage, 4000);

const form = document.querySelector('form');

const validateForm = (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const birthdate = document.getElementById('birthdate');

    const isUsernameValid = username.value.length > 0 ? true : false;
    if (!isUsernameValid) {
        alert('Enter username');
    }
    const birthdateRegex =
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const isBirthDateValid = birthdateRegex.test(birthdate.value);
    if (!isBirthDateValid) {
        alert('Enter Date in DD-MM-YYYY format');
    }
    console.log(isBirthDateValid);

    function useRegex(input) {
        let regex = '+d{2}([ ]*)d{10}';
        return regex.test(input);
    }

    const phonevalid = useRegex(phone.value);
    if (!phonevalid) {
        alert('Phone number not valid');
    }

    console.log(username);
    console.log(phone);
    console.log(birthdate.value);
};
form.addEventListener('submit', validateForm);
