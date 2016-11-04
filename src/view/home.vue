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
                {"id":"14816","urgent":"","name":"  bug添加一个bug责任人申诉的额外流程 ","status":"已完成","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":" 在项目组需求统计和项目需求统计 新增统计字段","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"外包bug阿斯顿发送到发生","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
                {"id":"14816","urgent":"","name":"  bug添加一个bug责任人申诉的额外流程 ","status":"待解决","endTime":"2016-10-29","url":"bug/detail?id=14816&p=32"},
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


