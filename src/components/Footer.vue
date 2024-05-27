<template>
    <div class="footer">
        <div class="img_footer">
            <img src="../images/facebook.jpg"/>
            <img src="../images/instagram.jpg"/>
            <img src="../images/twitter.jpg"/>
            <img src="../images/in.jpg"/>
        </div>
        <div class="text_footer">
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 320px;
    }

    .img_footer {
        display: flex;
        gap: 40px;
    }

    .img_footer > img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .text_footer > p{
        color: #2f3357;
    }
</style>