<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            };
        },
        /*****************
         * $http            // Every vue instance we create has access to $http via vue resource
         * .then()          // Once this request has been sent and once we did get a response back.
         * response => {}   // get back function to get object
         * .json()          // extract and converts your response into a javascript object
         */
        methods: {
            submit() {
                /**********************************************
                 * Sending a post request to sever
                 **********/
                // this.$http.post('data.json', this.user)
                //     .then(response => {
                //        console.log(response);
                //     }, error => {
                //         console.log(error);
                //     });

                /**********************************************
                 * Sending a post request and save it to DB sever
                 * Reference Doc: https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md
                 **********/
                // this.resource.save({}, this.user);

                /**********************************************
                 * Sending a post request and save it to DB sever to create multiple custom resource
                 **********/
                this.resource.saveAlt(this.user);
            },

            // Get a javascript object with extracted data
            fetchData() {
                this.$http.get('data.json', this.user)
                    .then(response => {
                        return response.json();
                    })
                    // Passing extracted data into users array
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'}
            };
            this.resource = this.$resource('data.json', {}, customActions);
        }
    }
</script>

<style>
</style>
