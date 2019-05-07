<template>
    <v-app>
        <Toolbar/>

        <!-- <MenuMobile/> -->
        <!-- <AccountMenuMobile/> -->

        
        <v-content>

            <transition name="fade">
                <router-view v-if="!menuOpen"/>
            </transition>

            <!-- <Home/>
            <HatPicks/> -->

        </v-content>
    </v-app>
</template>

<script>
import HatPicks from './components/HatPicks';
import MenuMobile from './components/MenuMobile';
import AccountMenuMobile from './components/AccountMenuMobile';
import Toolbar from './components/Toolbar';

import { bus } from './main.js';

export default {
    name: 'App',
    components: {
        HatPicks,
        MenuMobile,
        AccountMenuMobile,
        Toolbar,
    },
    data () { return {
        // NavTitle: 'Genius',
        menuOpen: false,
    }},
    created() {
        this.$bus.$on('menuOpen', bool => {
            this.menuOpen = bool;
        });
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