<template>
  <form action="http://lms.teamworktec.com/admin/store/patient" method="POST">
                                <input type="hidden" name="_token" value="p16D8B5PlLnu83FEYSAPA8zDCCf9S8EkN97AO9hp">
                                <div class="row">
                                                                                                                                                                                                                                                                                                            <div class="row">

                                            <div class="input-field col s12 m6">
                                                <input id="first_name" type="text" value="" name="name">
                                                <label for="first_name" class="">Name</label>
                                            </div>
                                            <div class="input-field col s12 m6">
                                                <input id="ss" type="text" name="mobile" value="">
                                                <label for="ss" class="">Your mobile number</label>
                                            </div>
                                            <div class="input-field col s12 m6">
                                                <input id="tr" type="text" name="age" value="">
                                                <label for="tr" class="">Age</label>
                                            </div>
                                            <div class="input-field col s12 m6">
                                                <div class="select-wrapper"><span class="caret">▼</span><input type="text" class="select-dropdown" readonly="true" data-activates="select-options-4a88d79c-c414-b66e-c684-6e312626bf07" value="Select Gender"><ul id="select-options-4a88d79c-c414-b66e-c684-6e312626bf07" class="dropdown-content select-dropdown "><li class="disabled "><span>Select Gender</span></li><li class=""><span>Male</span></li><li class=""><span>Female</span></li></ul><select name="gender" data-select-id="4a88d79c-c414-b66e-c684-6e312626bf07" class="initialized">
                                                    <option id="" disabled="" selected="">Select Gender</option>
                                                    <option id="1">Male</option>
                                                    <option id="2">Female</option>
                                                </select></div>
                                                <label>Gender</label>
                                            </div>
                                            <div class="input-field col s12 m6">
                                                <input id="y" type="text" name="occupation" value="">
                                                <label for="y" class="">Occupation</label>
                                            </div>
                                            <div class="input-field col s12 m6">
                                                <input id="oo" type="email" name="email" value="">
                                                <label for="oo" class="">Email</label>
                                            </div>
                                            <div class="input-field col s12">
                                                <textarea id="message5" class="materialize-textarea" length="320" name="address"></textarea>
                                                <label for="message5" class="">Your Address</label>
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
  name: "AddPatient",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
