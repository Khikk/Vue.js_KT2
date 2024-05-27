<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Авторизация</h2>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="auth-field">
          <label for="login">Login:</label>
          <input type="text" id="login" v-model="login" />
        </div>
        <div class="auth-field">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="auth-button">
          <button type="submit">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      login: '',
      password: '',
      errorMessage: null,
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault(); 
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: this.login,
          password: this.password,
        });

        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          this.$router.replace('/profile');
        } else {
          this.errorMessage = 'Неправильный логин или пароль';
        }
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Ошибка авторизации';
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px #00000099;
  width: 335px;
  height: 335px;
}

.auth-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

}

.auth-header > p{
  margin-right: 30px;
  padding-left: 10px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.auth-field label {
  color: #00000099;
  font-size: 18px;
  margin-bottom: 5px;
}

.auth-field input {
  width: 152px;
  height: 29px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px grey;
  border: none;
  padding: 8px;
}

.auth-button {
  display: flex;
  background-color: rgb(145, 143, 142);
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.auth-button button {
  background-color: white;
  border: none;
  color: #00000099;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
