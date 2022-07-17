const form = document.querySelector('.login-form');
const user = {};

const onSubmitChange = function (event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((v, k) => {
    if (v === '') {
      alert('Всі поля повинні бути заповнені');
    } else if (k === 'email') {
      user.email = v;
    } else if (k === 'password') {
      user.pass = v;
      form.reset()
    }
  });
  
  console.log('user: ', user);
};

form.addEventListener('submit', onSubmitChange);
