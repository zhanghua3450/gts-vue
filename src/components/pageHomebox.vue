<template>
    <el-card class="box-card home-card" v-if="boxData.listData.length">
        <div slot="header" class="clearfix">
            <span style="line-height:28px;" >{{boxData.title}}</span>
            <div class="fr">

                <el-dropdown >
                    <el-button type="primary" size="small"><i class="el-icon-edit"></i></el-button>
                    
                    <el-dropdown-menu slot="dropdown" class="home-card-dropdown">
                        <el-dropdown-item >
                            <div v-on:click="setSort('all')">所有状态</div>
                        </el-dropdown-item>
                        <el-dropdown-item v-for="item in statesList" >
                            <div v-on:click="setSort(item)">{{item}}</div>
                        </el-dropdown-item>
                        
                    </el-dropdown-menu>
                </el-dropdown>
                <router-link :to="boxData.more" class="link-item" v-if="boxData.more"><el-button type="primary" size="small" ><i class="el-icon-more"></i></el-button></router-link>
            </div>
        </div>
        <div v-for="list in boxData.listData" class="text item" v-if="statusShow=='all' || statusShow==list.status">
            #{{list.id}} <strong class="">{{list.urgent}}</strong> <router-link :to="list.url">{{list.name}}</router-link> (<el-tag type="warning" class="ml5 mr5">{{list.status}}</el-tag> <strong v-if="list.endTime">{{list.endTime}}</strong> )
        </div>
    </el-card>
</template>

<style lang="less">
    .home-card{margin: 20px 10px;
        .el-card__header{padding:5px 10px; font-weight: bold; font-size: 14px; }
        .el-card__body{font-size: 14px; padding: 10px; line-height: 40px;
            a{color: #333; text-decoration: none;
                &:hover{color: #f60;}
            }
        }
        &-dropdown{font-size: 12px; padding: 0;}
    }
  
</style>



<script>

export default {
    data () {
        return {
            statusShow:'all'
        }
    },
    props:['boxData'],
    mounted(){

    },
    methods:{
        setSort:function(text){
            this.statusShow = text
        }
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


