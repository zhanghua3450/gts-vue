<template>
    <div>
        <page-head></page-head>
        
        <div class="mainContent">
            <el-row  type="flex">
                <el-col :span="12"> 
                    <page-homebox :box-data="waitMySolveBug"></page-homebox>            
                </el-col>        
            </el-row>
        </div>
        
    </div>
</template>

<style lang="less" >
   
    .home-card{margin: 20px 10px;
        .el-card__header{padding:5px 10px; font-weight: bold; font-size: 14px; }
        .el-card__body{font-size: 12px; padding: 10px; line-height: 30px;}
        &-dropdown{font-size: 12px; padding: 0;}
    }
</style>

<script>
import pageHead from '../components/page-head';
import pageHomebox from '../components/pageHomebox';

export default {
  name: 'app',
  data(){
    return{
        waitMySolveBug: {"title":"待我解决的BUG","more":"bug","listData":[
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"}
            ]
        }
    }
  },
  components: {
    pageHead,pageHomebox
  },
  mounted(){
   
  }
}
</script>


