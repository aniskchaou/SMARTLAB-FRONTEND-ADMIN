<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Paiement</h4>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table">
          <thead class="text-primary">
            <th>Nom</th>
            <th>Contact</th>
           
            <th>Paiement</th>
            <th>Date</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>Gaetan Dupuy
</td>
              <td>04.03.73.73.70</td>
              
              <td><p class="bg-success text-white">payé</p></td>
              <td>12/11/2020</td>
               <td><button type="button" data-toggle="modal" data-target="#viewTask" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
              <button type="button" data-toggle="modal" data-target="#editTask" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        </table>

        <button style="float: left;" type="button" class="btn btn-success" data-toggle="modal" data-target="#addPayment">Ajouter</button>
 <div class="modal fade" id="addPayment" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              
            </div>
          </div>
        </div>
      </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "^patient",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
