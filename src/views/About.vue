<template>
    <div class="">

        <div style="color: #fff; text-align: center;">We believe finding great movies shouldn't be so tough.</div>

        <br>
        <a href="https://trakt.tv/" target="_blank" style="text-decoration: none;">
            <div style="color: #fff; text-align: center;">Powered by Trakt</div>
            <v-img
                :src="require('../assets/trakt-wide-white.png')"
                contain
                height="60"
            ></v-img>
        </a>

    </div>
</template>


<script>
export default {
    props: {
        msg: String
    },
};
</script>


<style scoped>

</style>
