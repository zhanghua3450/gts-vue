<template>
   <div>
       <el-row>
         <el-col :span="24">
             <div class="header">
                 <div class="logo">
                     <img src="../assets/img/logo.png">
                 </div>
                 <nav>
                     <ul>
                         <li v-for="item in menulist">
                             <router-link :to="item.url" >{{item.name}}</router-link>
                         </li>
                         
                     </ul>
                 </nav>
                 <div class="nav-icon">
                     
                    <el-dropdown menu-align="start" >
                      <span class="el-dropdown-link" >
                            <i class="el-icon-more"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item  v-for="item in quickMenu"><router-link :to="item.url"  class="link-item">{{item.name}}</router-link></el-dropdown-item>
                       
                      </el-dropdown-menu>
                    </el-dropdown>

                    <el-dropdown menu-align="start"  >
                      <span class="el-dropdown-link">
                            <i class="el-icon-edit"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item><router-link to="edite" class="link-item">修改密码</router-link></el-dropdown-item>
                        <el-dropdown-item><router-link to="close" class="link-item">退出账号</router-link></el-dropdown-item>
                        
                      </el-dropdown-menu>
                    </el-dropdown>
                 </div>
             </div>
         </el-col>
     </el-row>
   </div>
</template>

<style scoped lang="less">
    @head-height: 40px;
    @common-color: #198789;
  .header{height: @head-height; padding: 0 10px; background-color:@common-color; overflow: hidden;
      .logo{margin: 5px 10px 0 0; float: left;
        img{height: 30px; width: auto;}
      }
      li{line-height: @head-height; float: left; font-size: 14px;}
      a{color: #fff; text-decoration: none; display: block; width: auto; float: left; padding: 0 10px;
        &:hover{background-color:darken(@common-color,10%);}
        &.active{background-color:darken(@common-color,10%);}
      }
      .nav-icon{float: right; line-height:@head-height; 
        .el-dropdown-link{display: block; padding: 0 10px;color: #fff; cursor: pointer;
            &:hover{background-color:darken(@common-color,10%);}
        }
        
      }
  }
  .link-item{color:#333; font-size: 12px; text-decoration: none;}
  .el-dropdown__menu{padding:0;}
</style>



<script>

export default {
    data () {
        return {
            menulist:[],
            quickMenu:[]
        }
    },
    mounted(){
        this.$http({
            url:'/api/json/menu.json',
            method:'GET'
        }).then((response) => {
           
            response.data.menuList.forEach((item, index) => {this.menulist.push(item)});
            response.data.quickMenu.forEach((item, index) => {this.quickMenu.push(item)})
        })
       
    } 
}
</script>


