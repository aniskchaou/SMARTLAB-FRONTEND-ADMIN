<template>
  <div id="app" >
    <div class="wrapper" v-if="this.$route.path !== '/'">
      <div class="sidebar" data-color="white" data-active-color="danger" >
        <div class="logo">
         
            <div class="logo-image-big">
              <img src="@/assets/img/logo.png" />
            </div>
         
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav">
            <li >
              <router-link active-class="active" to="/dashboard">
                <i class="nc-icon nc-bank"></i>
                <p>Tableau de bord</p>
              </router-link>
            </li>
            <li>
              <router-link active-class="active" to="/patient">
                <i class="nc-icon nc-diamond"></i>
                <p>Patient</p>
              </router-link>
            </li>
            <li>
              <router-link active-class="active" to="/analyse">
                <i class="nc-icon nc-pin-3"></i>
                <p>Analyse</p>
              </router-link>
            </li>
            <li>
              <router-link active-class="active" to="/payment">
                <i class="nc-icon nc-bell-55"></i>
                <p>Paiement</p>
              </router-link>
            </li>
         
            <li>
              <router-link active-class="active" to="/medecin">
                <i class="nc-icon nc-tile-56"></i>
                <p>Medecin</p>
              </router-link>
            </li>
            <li>
              <router-link active-class="active" to="/configuration">
                <i class="nc-icon nc-caps-small"></i>
                <p>Configuration</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-panel">
        <!-- Navbar -->
      
        <Headerbar/>
        <!-- End Navbar -->
        <div class="content">
          <div class="row">
            <div class="col-md-12">
              <router-view />
            </div>
          </div>
        </div>
            <Footer/>
      </div>
    </div>




  <div  v-if="this.$route.path === '/'">
   <Login/>
  </div>



    <!--   Core JS Files   -->
    <script type="application/javascript" src="js/core/jquery.min.js"></script>
    <script type="application/javascript" src="js/core/popper.min.js"></script>
    <script
      type="application/javascript"
      src="js/core/bootstrap.min.js"
    ></script>
    <script
      type="application/javascript"
      src="js/plugins/perfect-scrollbar.jquery.min.js"
    ></script>
    <!--  Google Maps Plugin    -->

    <!-- Chart JS -->
    <script
      type="application/javascript"
      src="js/plugins/chartjs.min.js"
    ></script>
    <!--  Notifications Plugin    -->
    <script
      type="application/javascript"
      src="js/plugins/bootstrap-notify.js"
    ></script>
    <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc -->
    <script
      type="application/javascript"
      src="js/paper-dashboard.min.js?v=2.0.1"
    ></script>
    <!-- Paper Dashboard DEMO methods, don't include it in your project! -->
    <script type="application/javascript" src="demo/demo.js"></script>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Headerbar from '@/components/Headerbar.vue';
import login from '@/components/login.vue';

export default {
  name: "App",
  components: {
    'Headerbar': Headerbar,
    'Footer': Footer,
    'Login': login,
    }
};
</script>

<style>
@import "assets/css/bootstrap.min.css";
@import "assets/css/google-api.css";
@import "assets/css/font-awesome.min.css";
@import "assets/css/paper-dashboard.css";
@import "assets/demo/demo.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active{
    font-weight: bold;
    font-size:large;
    background-color: #fd7e14;
    color: #fd7e14;
  }
</style>
