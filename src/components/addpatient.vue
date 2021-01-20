<template>
  <form  method="POST">
                               
                                <div class="row">
                                                                                                                                                                                                                                                                                                            <div class="row">

                                            <div class="col-md-12">
                                                <label for="first_name" class="">Nom</label>
                                                <input class="form-control" id="first_name" type="text" value="" name="name">
                                               
                                            </div>
                                            <div class="col-md-12">
                                                
                                                <label for="ss" class="">Mobile</label>
                                                <input class="form-control" id="ss" type="text" name="mobile" value="">
                                            </div>
                                            <div class="col-md-12">
                                               
                                                <label for="tr" class="">Age</label>
                                                 <input class="form-control" id="tr" type="text" name="age" value="">
                                            </div>
                                            <div class="col-md-12">
                                                <label>Sexe</label>
                                                <div class="select-wrapper">
                                                  <select class="form-control">
                                                    <option id="" disabled="" selected="">Select Gender</option>
                                                    <option id="1">Male</option>
                                                    <option id="2">Female</option>
                                                </select></div>
                                            
                                            </div>
                                            <div class="col-md-12">
                                            <label for="y" class="">Occupation</label>
                                                <input class="form-control" id="y" type="text" name="occupation" value="">
                                                
                                            </div>
                                            <div class="col-md-12">
                                            <label for="oo" class="">Email</label>
                                                <input class="form-control" id="oo" type="email" name="email" value="">
                                                
                                            </div>
                                            <div class="col-md-12">
                                              <label for="message5" class="">Adresse</label>
                                                <textarea id="message5" class="form-control" length="320" name="address"></textarea>
                                              
                                            </div>
                                        </div>

                                </div>
                                <div class="card-action">
                                    <button class="waves-effect waves-light btn green" type="submit"><i class="fa fa-check"></i>Savegarder</button>
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
