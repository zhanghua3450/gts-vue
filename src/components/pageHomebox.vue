<template>
    <el-card class="box-card home-card" v-if="boxData.listData.length">
        <div slot="header" class="clearfix">
            <span style="line-height:28px;" >{{boxData.title}}</span>
            <div class="fr">

                <el-dropdown >
                    <el-button type="primary" size="small"><i class="el-icon-edit"></i></el-button>
                    
                    <el-dropdown-menu slot="dropdown" class="home-card-dropdown">
                        <el-dropdown-item v-for="item in statesList">
                            {{item}}
                        </el-dropdown-item>
                        
                    </el-dropdown-menu>
                </el-dropdown>
                <router-link :to="boxData.more" class="link-item" v-if="boxData.more"><el-button type="primary" size="small" ><i class="el-icon-more"></i></el-button></router-link>
            </div>
        </div>
        <div v-for="list in boxData.listData" class="text item">
            #{{list.id}} <strong class="">{{list.urgent}}</strong> <router-link :to="list.url">{{list.name}}</router-link> (<el-tag class="ml5 mr5">{{list.status}}</el-tag> <strong v-if="list.endTime">{{list.endTime}}</strong>)
        </div>
    </el-card>
</template>

<style lang="less">
    
  
</style>



<script>

export default {
    data () {
        return {
          
        }
    },
    props:['boxData'],
    mounted(){

    },
    computed:{
        statesList:function(){
            let statusList = [];
            let setStatus = new Set();

            this.boxData.listData.forEach(function(i,v){
                setStatus.add(i.status);
            });
            for(let i of setStatus){
                statusList.push(i);
            }
            return statusList;
        }
    }
}
</script>


