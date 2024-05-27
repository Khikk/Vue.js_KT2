<template>
    <div class="page-container">
      <div class="page-content">
        <div class="page-text">
          <div class="page-title">
            <h2>Home page</h2>
          </div>
          <div class="page-paragraph">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
            <router-link to="/login">
              <div class="page-button">
                <button>Authorization</button>
              </div>
            </router-link>
          </div>
        </div>
        <div class="page-image">
          <img src="../images/overboard.jpg" />
        </div>
      </div>
    </div>
    <router-view></router-view>
  </template>
  
  <script>
  import { RouterView, RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  .page-text {
    display: flex;
    flex-direction: column;
    margin-right: 200px;
  }
  
  .page-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .page-image > img {
    width: 301px;
    height: 290px;
  }
  
  .page-title > h2 {
    font-size: 40px;
  }
  
  .page-paragraph > p {
    font-size: 20px;
    margin-bottom: 40px;
  }
  
  .page-button > button {
    width: 210px;
    height: 52px;
    font-size: 18px;
    background-color: red;
    padding: 12px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    color: white;
  }
  </style>
  