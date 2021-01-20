<template>
 <form  method="POST">
                    <div class="card-content">

                          
                        <div class="row">
                                     <label for="first_name" class="">Nom</label>                                                                                                                                      <div class="col-md-12">
                                <input class="form-control" id="first_name" type="text" name="name" required="">
                               
                            </div>
                            <div class="col-md-12">
                            <label for="ss">Mobile</label>
                                <input class="form-control" id="ss" type="number" name="mobile" required="">
                                
                            </div>
                            <div class="col-md-12">
                            <label for="uu">Désignation</label>
                                <input class="form-control" id="uu" type="text" name="designation" required="">
                                
                            </div>
                            <div class="col-md-12">
                            <label for="oo">Email</label>
                                <input class="form-control" id="oo" type="email" name="email" required="">
                                
                            </div>
                            <div class="col-md-12">
                            <label for="message5">Your Address</label>
                                <textarea class="form-control" id="message5" name="address"  length="320"></textarea>
                                
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
  name: "AddMedecin",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
