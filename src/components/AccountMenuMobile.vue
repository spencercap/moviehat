<template>
    <div class="menuContainer active">

        <div class="userInfo">
            <div class="profilePicture"></div>
            <div class="userName">Jessamyn Violet</div>
            <div class="userLocation">Venice, CA</div>
        </div>

        <div class="menuOptions">
            <router-link to="/login">Profile</router-link>
            <router-link to="/login">Settings</router-link>
            <router-link to="/login">Sign out</router-link>
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
        // no bus imports, just use this.$bus.$on and this.$bus.$emit

        // bus.$on('accountMenuToggle', evnt => {
        //     console.log('get account menu toggle trigger');
        //     this.toggleAcountMenu();
        // });

    },

    methods: {
        // toggleAcountMenu() {
        //     console.log('toggling account menu');
        //     document.querySelector('.menuContainer').classList.toggle('active');
        // },
    },
    
};
</script>


<style scoped>

.profilePicture {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 10px auto;

    background: #D8D8D8;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.40);
}

.userName {
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    margin: 10px;
    text-align: center;
}

.userLocation {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
    text-align: center;
}

</style>
