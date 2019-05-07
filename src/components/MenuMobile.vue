<template>
    <div class="menuContainer active">

        <input class="searchField" type="text" placeholder="Search">

        <div class="menuOptions">
            <router-link to="/genius">Genius</router-link>
            <div class="option">Watchlists</div>
            <router-link to="/home">Community</router-link>
            <router-link to="/home">Discover</router-link>
        </div>
        
        <div class="foot">
            <span>Legal • About</span>
        </div>

    </div>
</template>


<script>
export default {
    props: {
        msg: String
    },

    data () { return {
        // NavTitle: 'Genius',
    }},

    created() {

        // bus.$on('menuToggle', evnt => {
        //     console.log('get menu toggle trigger');
        //     this.toggleMenu();
        // });

    },

    methods: {
        // toggleMenu() {
        //     console.log('toggling menu');
        //     document.querySelector('.menuContainer').classList.toggle('active');
        // },

        hi() {
            console.log('hellooo');
        }
    },
    
};
</script>


<style scoped>

.searchField {
    background: #fff;
    width: 380px;
    max-width: 100%;
    padding: 10px 1em;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgba(255,255,255,0.30), inset 0 1px 3px 0 rgba(0,0,0,0.50);
    font-weight: 500;
    font-size: 24px;
    color: rgba(51, 51, 51, 0.6);
    letter-spacing: 0;
}
.searchField:focus {
    outline: none;
}

</style>
