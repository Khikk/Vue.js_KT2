<template>
    <div class="profile">
        <div class="profile_text">
            <h1>My profile</h1>
        </div>
        <div class="profile_user">
            <div class="profile_card">
            <p>Username: {{ this.response.username }}</p>
            <p>Name: {{ this.response.firstName }}</p>
            <p>LastName: {{ this.response.lastName }}</p>
            <p>Gender: {{ this.response.gender }}</p>
            <p>Email: {{ this.response.email }}</p>
            </div>
            <div class="profile_img">
                <img :src="this.response.image"/>
            </div>
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        response: {},
        error: ''
      }
    },
    mounted() {
      axios.get('https://dummyjson.com/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response) => {
            const data = response.data
            this.response = data
        })
        .catch((error) => {
          console.error(error)
          this.res.message = error.response.data.message
        })
    }
  }
  </script>

  <style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    margin-left: 350px;
  }

  .profile_text {
    font-size: 25px;
  }

  .profile_user{
    display: flex;
    flex-direction: row;
  }

  .profile_card {
    margin-right: 300px;
  }

  .profile_card > p{
    box-shadow: 5px 4px 5px #00000099;
    font-size: 20px;
    margin-bottom: 30px;
    background-color:gainsboro;
    padding: 10px;
    border-radius: 4px;
  }

  .profile_img > img{
    border-radius: 12px;
  }
</style>
