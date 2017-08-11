Vue.component('vuetable', {

    template: `
        <div>
            Search <input name="query" v-model="searchQuery">
            <table class="table">
                <tbody>
                    <tr><th 
                    v-for="header in headers" 
                    v-text="header"
                    @click="sort(header)"
                    ></th></tr>
                    <tr v-for="row in rows">
                        <td v-for="item in row">{{item}}</td>
                    </tr>
                    <tr><td>{{searchQuery}}</td></tr>
                </tbody>
            </table>
        </div>
    `,
    data: function(){
        return {
            headers : ['Name','Gender','Hair'],
            rows : [
                {name:'Simon',gender:'male',hair:'short'},
                {name:'Claire',gender:'female',hair:'long'},
                {name:'Paul',gender:'male',hair:'short'},
                {name:'Enrique',gender:'male',hair:'short'}
            ],
            searchQuery: ''
        }
    },
    methods: {
        sort: function(value) {
            alert(value)
        }
    },
    computed: {
        
    }

});

new Vue({
    el: '#root'
})