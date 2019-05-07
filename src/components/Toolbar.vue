<template>
    <div class="toolbarWrapper">

        <div class="menuCircle left" :class="{ active: MenuMobileActive }"></div>
        <div class="menuCircle right" :class="{ active: AccountMenuMobileActive }"></div>

        <!-- <div class="menuCircleContainer right" :class="{ active: AccountMenuMobileActive }">
            <div class="circle"></div>
        </div> -->

        <transition name="fade">
            <AccountMenuMobile v-if="AccountMenuMobileActive"/>
        </transition>

        <transition name="fade">
            <MenuMobile v-if="MenuMobileActive"/>
        </transition>

        <v-toolbar app flat dark color="transparent">
            <v-toolbar-side-icon @click="toggleMenu()">
                <v-img
                    :src="require('../assets/logo-hat.png')"
                    contain
                    
                ></v-img>
                <!-- <v-btn class="testbutton">

                </v-btn> -->
                <!-- <v-icon>more_vert</v-icon> -->
            </v-toolbar-side-icon>

            <transition name="fade">
                <v-toolbar-title v-if="!(AccountMenuMobileActive || MenuMobileActive)" class="white--text">{{NavTitle}}</v-toolbar-title>
            </transition>

            <v-spacer></v-spacer>

            <v-btn icon @click="toggleAccountMenu()">
                <v-icon large>account_circle</v-icon>
            </v-btn>

        </v-toolbar>

    </div>
    
</template>


<script>
import MenuMobile from './MenuMobile';
import AccountMenuMobile from './AccountMenuMobile';

export default {
    props: {
        NavTitle: String
    },

    components: {
        MenuMobile,
        AccountMenuMobile,
    },

    watch: {
        '$route' () {
            this.MenuMobileActive = false;
            this.AccountMenuMobileActive = false;
            this.$bus.$emit('menuOpen', false);
        }
    },

    data () { return {
        AccountMenuMobileActive: false,
        MenuMobileActive: false,
    }},

    methods: {
        toggleMenu() {
            this.AccountMenuMobileActive = false;
            if (this.MenuMobileActive) {
                this.MenuMobileActive = false;
                this.$bus.$emit('menuOpen', false);
            }
            else {
                this.MenuMobileActive = true;
                this.$bus.$emit('menuOpen', true);
            }
        },
        toggleAccountMenu() {
            this.MenuMobileActive = false;
            if (this.AccountMenuMobileActive) {
                this.AccountMenuMobileActive = false;
                this.$bus.$emit('menuOpen', false);
            }
            else {
                this.AccountMenuMobileActive = true;
                this.$bus.$emit('menuOpen', true);
            }
        },
    },
    
};
</script>


<style>

.menuContainer {
    --toolbar-height: 56px;
    
    position: fixed;
    width: 100vw;
    /* height: 100%; */
    top: var(--toolbar-height);
    height: calc( 100% - var(--toolbar-height) );
    padding: 10px;

    transition-duration: 200ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 1001;
}

.menuOptions {
    display: flex;
    flex-direction: column;

    width: 380px;
    max-width: 100%;
    padding: 10px;
    padding-bottom: 2em;
}

.menuOptions > * {
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    padding: 10px 20px;
    line-height: 36px;
    text-decoration: none;
    transition-duration: 200ms;
}

.menuOptions > *:hover {
    opacity: 0.7;
}


.menuCircleContainer {
    width: 36px;
    height: 36px;
    margin: 10px;

    position: absolute;
    top: 0;
    /* width: 0px;
    height: 0px; */
    background: transparent;
    
    
    transition: transform 200ms ease-in-out, width 200ms ease-in-out, height 200ms ease-in-out;
}
.menuCircleContainer.right {
    right: 0;
}
.menuCircleContainer > .circle {
    background: #4d4d4d;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    box-shadow: inset -1px -1px 6px rgba(0, 0, 0, 0.5);
    opacity: 0.6;
}

.menuCircle {
    position: fixed;
    top: 0;
    /* width: 0px;
    height: 0px; */
    width: 230px;
    height: 230px;
    background: transparent;
    border-radius: 50%;
    box-shadow: none;
    opacity: 0.6;
    transition: background 300ms ease-in-out, transform 200ms ease-in-out, width 200ms ease-in-out, height 200ms ease-in-out, box-shadow 400ms ease-in-out;
}
.menuCircle.active {
    background: #4d4d4d;
    box-shadow: inset -1px -1px 6px rgba(0, 0, 0, 0.5);
    width: 230px;
    height: 230px;
}
.menuCircle.left {
    left: 0;
    transform: translate(-50%, -50%);
}
.menuCircle.right {
    right: 0;
    transform: translate(50%, -50%);
    /* transform: translate( calc(100vw - 50% ), -50%); */
}


.foot {
    position: absolute;
    bottom: 0;
    
    color: #fff;
    opacity: 0.65;
    padding: 1em;
    font-weight: 500px;
    
    /* margin-top: auto; */
    /* justify-self: flex-end; */
}






</style>
