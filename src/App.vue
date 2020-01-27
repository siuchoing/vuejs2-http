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
                users: []
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
                this.$http.post('https://vuejs2-http-7e7ef.firebaseio.com/data.json', this.user)
                    .then(response => {
                       console.log(response);
                    }, error => {
                        console.log(error);
                    });

                //console.log(this.user);
            },

            // Get a javascript object with extracted data
            fetchData() {
                this.$http.get('https://vuejs2-http-7e7ef.firebaseio.com/data.json', this.user)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    });
            }
        }
    }
</script>

<style>
</style>
