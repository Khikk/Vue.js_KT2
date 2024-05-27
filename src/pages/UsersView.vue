<template>
    <div class="user">
          <div 
            v-for="user in users" 
            :key="user.id"
            class="card_user"
            >
            <router-link :to="'/profile/' + user.id" class="users_list">
                    <p>{{ user.firstName }}</p>
                    <p>{{ user.lastName }}</p>
                    <p>{{ user.maidenName }}</p>
                <div class="email">
                    <h3>{{ user.email }}</h3>
                </div>
            </router-link>
          </div>
      </div>
    <router-view></router-view>
  </template>
  
  <script>
  import axios from 'axios';
  import {RouterView, RouterLink} from 'vue-router'
  
  export default {
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          this.users = response.data.users;
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
      }
    }
  };
  </script>
  
  <style>
    .user{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }

    .users_list{
      color: black;
      text-decoration-line: none;
    }

    .card_user{
        display: flex;
        flex-direction: row;
        width: 530px;
        padding-left: 18px;
        margin-bottom: 27px;
        background-color:gainsboro;
        border-radius: 20px;
        box-shadow: 5px 5px 5px #00000099;


    }

    .card_user > p {
        display: flex;
        justify-content: left;
        text-align: left;
        font-size: 20px;
        color: black;
    }

    .email > h3 {
        display: flex;
        text-align: right;

    }
  </style>
  