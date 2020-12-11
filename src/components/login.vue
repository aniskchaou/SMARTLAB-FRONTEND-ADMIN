<template>

     
       
                 
        
<div class="col-md-3" style="position: absolute;left: 37%;">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title"><img src="@/assets/img/logo.png" /></h4>
      </div>
      <div class="card-body">
            <form >
                
                    
                      <div class="form-group">
                        <label>Utilisateur</label>
                        <input type="text" class="form-control"  placeholder="Company" value="admin">
                      </div>
                
                    
                      <div class="form-group">
                        <label>Mot de passe</label>
                        <input type="password" class="form-control" placeholder="Username" value="admin">
                      </div>
              
                   
              
                    <div class="update ml-auto mr-auto">
                      <router-link to="/dashboard" type="submit" class="btn btn-primary btn-round">Connexion</router-link>
                    </div>
          
                </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
