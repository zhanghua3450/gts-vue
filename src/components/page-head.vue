<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="page-header">
                    <div class="logo">
                        <img src="../assets/img/logo.png">
                    </div>
                    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
                        <el-menu-item index="home" >我的视图</el-menu-item>
                        <template  v-for="item in menulist">
                            <el-submenu  v-if="item.items.length" :index="item.url">
                                <template slot="title" >{{item.name}}</template>
                                <el-menu-item :index="list.url" v-for="list in item.items">{{list.name}}</el-menu-item>
                            </el-submenu>
                        </template>
                      
                    </el-menu>
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

                <!-- <div class="header">
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
                </div> -->
            </el-col>
        </el-row>


        <el-row>
            <el-col :span="24">
             dsfsadf
            </el-col>
        </el-row>

   </div>
</template>

<style lang="less">
    @head-height: 50px;
    @common-color: #198789;
    .page-header{ background-color:@common-color; height: @head-height;
        .logo{margin: 5px 10px 0 0; float: left;
            img{height: 40px; width: auto;}
        }
        .el-menu--dark{float: left; height: @head-height; background-color: @common-color;
            .el-menu-item{height:@head-height; line-height:@head-height;border-bottom:none;color: #fff;
                &:hover{background-color:darken(@common-color,10%); border-bottom:none;}
                &.is-active{color: lighten(@common-color,10%);}
            }
            .el-submenu{
                .el-submenu__title{ color: #fff; height:@head-height; line-height:@head-height; border-bottom:none;
                    &:hover{background-color:darken(@common-color,10%); border-bottom:none;}
                    .el-submenu__icon-arrow {color: #fff;}
                }
                &>.el-menu{top:  @head-height+5;padding: 0;
                    .el-menu-item{ line-height: 40px; height: 40px; font-size: 12px;
                        &.is-active{color: @common-color;}
                    }

                }
                &.is-active{
                    .el-submenu__title{border-bottom: 5px solid  lighten(@common-color,10%);}
                }
            } 
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


