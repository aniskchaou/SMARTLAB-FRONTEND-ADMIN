<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Configuration</h4>
    </div>
    <div class="card-body">
        <div class="form-group">
                        <label>Nom entreprise</label>
                        <input type="text" class="form-control"  placeholder="Company" value="admin">
                      </div>
                
                    
                      <div class="form-group">
                        <label>Email entreprise</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>

                      <div class="form-group">
                        <label>Adresse entreprise</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>

                      <div class="form-group">
                        <label>Langue</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>


                      <div class="form-group">
                        <label>Devise</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>

                      <div class="form-group">
                        <label>Fuseau horaire</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>


              
                   
              
                    <div class="update ml-auto mr-auto">
                      <router-link to="/dashboard" type="submit" class="btn btn-primary btn-round">Enregistrer</router-link>
                    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "configuration",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
