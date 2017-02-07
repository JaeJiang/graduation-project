<template>
  <div class=page>
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>

import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'


export default {
  name: 'app',
  data: function () {
    return {
      xxx: 'MAMA'
    } 
  },
  components:{Topbar,ResumeEditor,ResumePreview}
  }
</script>

<style>
  .page{
    height:100vh;
    display:flex;
    flex-direction:column;
    background:#FAB646;
  }
  .page>main{
    flex-grow: 1;
  }
  .page>main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top:16px;
    margin-bottom:16px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-self: center;
    width:100%;
  }

  #resumeEditor{
    width:35%;
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
  #resumePreview{
    flex-grow:1;
    margin-left: 16px;
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
</style>
