Vue.component('vuetable', {

    template: `
        <table class="table">
            <tbody>
                <tr><th v-for="header in headers" v-text="header"></th></tr>
                <tr v-for="row in rows">
                    <td v-for="item in row">{{item}}</td>
                </tr>
            </tbody>
        </table>
    `,
    data: function(){
        return { 
            headers : ['Name','Gender','Hair'],
            rows : [
                {name:'Simon',gender:'male',hair:'short'},
                {name:'Claire',gender:'female',hair:'long'},
                {name:'Paul',gender:'male',hair:'short'},
                {name:'Enrique',gender:'male',hair:'short'}
            ]
        }
    }

});

new Vue({
    el: '#root'
})