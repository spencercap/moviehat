<template>
    <div class="" style="display: grid; margin: 0.5em;">
        <p>the genius picks page</p>
        
        <input type="text" id="param01" placeholder="Spider-Man, James Dean, etc." v-model="param01" @keyup="search('01', param01)"/>
        <div v-for="(item, index) in result01" :key="`result01-${index}`">
            <div v-if="item.type == 'person' ">{{ item.person.name }} (person)</div>
            <div v-else-if="item.type == 'list' ">{{ item.list.name }} (list)</div>
            <div v-else-if="item.type == 'movie' ">{{ item.movie.title }} ({{item.movie.year}})</div>
            <div v-else-if="item.type == 'show' ">{{ item.show.title }} ({{item.show.year}})</div>
            <div v-else>unknown item type</div>
        </div>

        <input type="text" id="param02" placeholder="Spider-Man, James Dean, etc." v-model="param02" @keyup="search('02', param02)"/>
        <div v-for="(item, index) in result02" :key="`result02-${index}`">
            <div v-if="item.type == 'person' ">{{ item.person.name }} (person)</div>
            <div v-else-if="item.type == 'list' ">{{ item.list.name }} (list)</div>
            <div v-else-if="item.type == 'movie' ">{{ item.movie.title }} ({{item.movie.year}})</div>
            <div v-else-if="item.type == 'show' ">{{ item.show.title }} ({{item.show.year}})</div>
            <div v-else>unknown item type</div>
        </div>

        <input type="text" id="param03" placeholder="Spider-Man, James Dean, etc." v-model="param03" @keyup="search('03', param03)"/>
        <div v-for="(item, index) in result03" :key="`result03-${index}`">
            <div v-if="item.type == 'person' ">{{ item.person.name }} (person)</div>
            <div v-else-if="item.type == 'list' ">{{ item.list.name }} (list)</div>
            <div v-else-if="item.type == 'movie' ">{{ item.movie.title }} ({{item.movie.year}})</div>
            <div v-else-if="item.type == 'show' ">{{ item.show.title }} ({{item.show.year}})</div>
            <div v-else>unknown item type</div>
        </div>

    </div>
</template>


<script>
export default {
    name: 'genius',
    props: {
        msg: String
    },

    data() {
        return {
            param01: '',
            param02: '',
            param03: '',

            result01: [],
            result02: [],
            result03: [],
        }
    },

    created() {
        console.log(this.$route);
        // TODO get movie selections from query string like so: 
        // http://192.168.1.11:8080/home?m1=54321&m2=9589345&m3=177123 
        // 
        
    },

    methods: {

        search(key, param) {
            // console.log('searching for: ' + param);

            if (param) {
                let url = 'https://api.trakt.tv/search/movie,show,person,list?query=' + encodeURI(param);
                // console.log(url);
                var clientId = '3209254b69adcdc56c21b7c9c70ddd9f772fe893faca6ff3dba24561d223e587';

                this.$axios.get( url, {
                        headers: { 
                            "Content-Type": "application/json",
                            "trakt-api-version": "2", 
                            "trakt-api-key": clientId,
                        }
                    })
                    .then( res => {
                        let result = 'result'+key;
                        this[result] = res.data;
                    })
                .catch( e => console.log(e));
            }

        }

    },

};
</script>


<style scoped>
input {
    font-family: 'SF Text';
    font-weight: 600;
    font-size: 24px;
    width: 300px;
    color: #fff;
    border: 1px solid #fff;
}
input::placeholder {
    color: #e6e6e68f;
}
</style>
