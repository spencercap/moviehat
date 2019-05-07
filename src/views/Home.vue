<template>
    <div class="HomeContainer">

        <div>Home Page</div>

    </div>
</template>


<script>
export default {
    props: {
        msg: String
    },
    data () { return {

    }},
    created() {
        console.log(this.$route);
        // TODO get movie selections from query string like so: 
        // http://192.168.1.11:8080/home?m1=54321&m2=9589345&m3=177123 
        // 

        console.log(this.$bus.actualHeight); // you can use the bus as state management too since its a whole other vue inst
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
