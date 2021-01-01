<template>
 <form action="http://lms.teamworktec.com/store/doctor" method="POST">
                    <div class="card-content">

                            <input type="hidden" name="_token" value="p16D8B5PlLnu83FEYSAPA8zDCCf9S8EkN97AO9hp">
                        <div class="row">
                                                                                                                                                                        <div class="input-field col s12 m6">
                                <input id="first_name" type="text" name="name" required="">
                                <label for="first_name" class="">Name</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="ss" type="number" name="mobile" required="">
                                <label for="ss">Your mobile number</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="uu" type="text" name="designation" required="">
                                <label for="uu">Designation</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="oo" type="email" name="email" required="">
                                <label for="oo">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="message5" name="address" class="materialize-textarea" length="320"></textarea>
                                <label for="message5">Your Address</label>
                            </div>
                        </div>

                    </div>
                    <div class="card-action">
                        <button class="waves-effect waves-light btn green" type="submit"><i class="fa fa-check"></i>Save</button>

                    </div>
                    </form>
</template>

<script>
export default {
  name: "AddMedecin",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
