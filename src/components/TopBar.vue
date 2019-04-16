<template>
    <header class="flexer">

        <div class="flexer left">
            <div class="icon menu"></div>
            <span class="navItem current">{{ NavTitle }}</span>
        </div>

        <!-- <div class="middle">
            <span>genius</span>
        </div> -->

        <div class="right">
            <div class="icon account"></div>
        </div>

    </header>
</template>


<script>
export default {
    props: {
        
    },
    data() { return {
        NavTitle: 'Genius',
    }},

};
</script>


<style scoped>
header {
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
}

header > div {
    
}

.icon {
    width: 50px;
    height: 50px;
    margin: 5px 10px;
}

.icon.menu {
    background: #000;
}

.icon.account {
    border-radius: 50%;
    background: white;
}

.navItem {
    color: #fff;
    font-family: 'SF Text';
    font-weight: 600;
    font-size: 26px;
    margin: 0 10px;
}

</style>
