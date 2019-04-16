<template>
    <v-app>
        <v-toolbar app flat dark color="transparent">
            <v-toolbar-side-icon>
                <v-img
                    :src="require('./assets/logo-hat.png')"
                    contain
                    
                ></v-img>
                <!-- <v-btn class="testbutton">

                </v-btn> -->
                <!-- <v-icon>more_vert</v-icon> -->
            </v-toolbar-side-icon>

            <v-toolbar-title class="white--text">{{NavTitle}}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon large>account_circle</v-icon>
            </v-btn>

        </v-toolbar>
        
        <v-content>

            <HatPicks/>
        </v-content>
    </v-app>
</template>

<script>
import HatPicks from './components/HatPicks'

export default {
    name: 'App',
    components: {
        HatPicks,
    },
    data () { return {
        NavTitle: 'Genius',
    }},
}
</script>


<style scoped>

.testbutton {
    width: 20px; 
    height: 60px;
    background: red;
}

.v-content {
    background: purple;
}

</style>