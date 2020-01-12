<template>
<div>
  <h1>资产页面</h1>
  <h1>8939843</h1>

  <el-row type='flex' align='middle' :gutter='50'>
    <el-col :span='4'>
      <span class="label">编码：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->

    <el-col :span='4'>
      <span class="label">商品分组：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->

    <el-col :span='4'>
      <span class="label">商品类型：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->
  </el-row>

  <el-row>
    <div>99998</div>
  </el-row>

  <hr>

  <el-button type="primary" icon="el-icon-check">搜索</el-button>


  <hr>

  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机">
      </el-table-column>
    </el-table>

</div>
</template>


<script>
export default {
  data: function() {
    return {
      tableData: [
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        },
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        },
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        }
      ]
    }
  }
}
</script>

<style>
.label {
  display: block;
  text-align: right;
}
</style>
