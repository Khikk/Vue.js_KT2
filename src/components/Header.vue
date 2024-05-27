<template>
    <div class="header">
        <div class="text_header">
            <router-link to="/" class="link_head">
                <h2>Home</h2>
            </router-link>
            <router-link to="/users" class="link_head">
                <h2>Users</h2>
            </router-link>
            <router-link to="/profile" class="link_head">
                <h2>Profile</h2>
            </router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
    import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
    .header {
        display: flex;
        margin-bottom: 120px;
        flex-direction: column;

    }

    .link_head{
        font-size: 18px;
        color: black;
        text-decoration-line: none;

    }

    .text_header{
        display: flex;
        justify-content: end;
        flex-direction: row;
        text-align: end;
        gap: 60px;
        
    }
    .text_header:last-child {
        margin-right: 270px;
    }
</style>