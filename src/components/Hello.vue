<template>
   <div>
     <el-row>
       <el-col :span="24">
           <div class="header">
               <div class="logo">
                   <img src="../assets/img/logo.png" height="47" width="243">
               </div>
               <nav>
                   <ul>
                       <li>
                           <router-link to="home">我的视图</router-link>
                       </li>
                       
                   </ul>
               </nav>
               <div class="nav-icon"></div>
           </div>
       </el-col>
   </el-row>
   </div>
</template>

<script>
export default {

  data () {
    return {
     
    }
  }
}
</script>

<style scoped lang="less">
 .header{height: 60px; padding: 0 10px; background-color: #198789; overflow: hidden;
      .logo{margin: 5px 10px 0 0; float: left;}
      
  }
</style>
