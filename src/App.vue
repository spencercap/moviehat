<template>
    <v-app>
        <Toolbar :NavTitle="inNavTitle" />
        

        <v-content>

            <transition name="fade">
                <router-view v-if="!menuOpen"/>
            </transition>

        </v-content>
    </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
    name: 'App',
    components: {
        Toolbar,
    },
    data () { return {
        inNavTitle: 'Home',
        menuOpen: false,
    }},
    created() {
        this.$bus.$on('menuOpen', bool => {
            this.menuOpen = bool;
        });
    },
    watch: {
        '$route' () {
            this.inNavTitle = this.$route.meta.NavTitle;
        }
    },
}
</script>


<style>

.testbutton {
    width: 20px; 
    height: 60px;
    background: red;
}

.v-content {
    background-image: linear-gradient(209deg, rgba(241, 76, 240, 0.32) 0%, rgba(227,69,244,0.00) 71%), linear-gradient(164deg, rgb(100, 148, 137) 0%, #4F4A50 35%, #18081A 100%);
}


.fade-enter-active {
    transition: opacity .2s linear 0.1s;
}
.fade-leave-active {
    transition: opacity .1s linear;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>