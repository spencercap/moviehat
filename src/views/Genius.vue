<template>
    <div class="">
        <p>the genius picks page</p>
        <input type="text" placeholder="Spider-Man"/>
    </div>
</template>


<script>
export default {
    props: {
        msg: String
    },

    created() {
        console.log(this.$route);
        // TODO get movie selections from query string like so: 
        // http://192.168.1.11:8080/home?m1=54321&m2=9589345&m3=177123 
        // 
        
    },
};
</script>


<style scoped>
input {
    font-family: 'SF Text';
    font-weight: 600;
    font-size: 24px;
}
</style>
