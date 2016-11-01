<template>
    <div>
        <page-head></page-head>
        
        <el-row  type="flex">
            <el-col :span="15"> 
                <el-card class="box-card home-card" >
                    <div slot="header" class="clearfix">
                        <span style="line-height:28px;">卡片名称</span>
                        <div class="fr">
                            <el-dropdown >
                                <span class="el-dropdown-link">
                                    <i class="el-icon-caret-bottom el-icon-setting"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                    <el-dropdown-item>狮子头</el-dropdown-item>
                                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                    <el-dropdown-item>双皮奶</el-dropdown-item>
                                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div v-for="o in 4" class="text item">
                    {{'列表内容 ' + o }}
                    </div>
                </el-card>
            
            </el-col>


            <el-col :span="9">
                <el-card class="box-card home-card" >
                  <div slot="header" class="clearfix">
                    <span style="line-height:28px;">卡片名称</span>
                    <el-button class="fr" size="small" type="primary">操作按钮</el-button>
                  </div>
                  <div v-for="o in 4" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>


            </el-col>

        </el-row>
        
    </div>
</template>

<style lang="less" >
    .home-card{margin: 20px 10px;
        .el-card__header{padding:5px 10px;}
    }
</style>

<script>
import pageHead from '../components/page-head'

export default {
  name: 'app',
  data(){
    return{
        navList:[]
    }
  },
  components: {
    pageHead
  },
  mounted(){
   
  }
}
</script>


