import{r as y,k as d,a as k,f as i,i as I,n as x,o as m}from"./vue.esm-bundler-c7d8a291.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{a as u}from"./chunk-KKE3V3AL-49257385.js";const D={name:"Task",props:{task:{type:Object,required:!0,default:()=>({id:"",state:"",title:""}),validator:a=>["id","state","title"].every(t=>t in a)}},emits:["archive-task","pin-task"],setup(a,{emit:t}){return a=y(a),{classes:d(()=>({"list-item TASK_INBOX":a.task.state==="TASK_INBOX","list-item TASK_PINNED":a.task.state==="TASK_PINNED","list-item TASK_ARCHIVED":a.task.state==="TASK_ARCHIVED"})),isChecked:d(()=>a.task.state==="TASK_ARCHIVED"),archiveTask(){t("archive-task",a.task.id)},pinTask(){t("pin-task",a.task.id)}}}},K=["for","aria-label"],E=["checked","name","id"],P=["for","aria-label"],O=["value","id"],V=["id","aria-label"],B=i("span",{class:"icon-star"},null,-1),j=[B];function H(a,t,e,n,X,z){return m(),k("div",{class:x(n.classes)},[i("label",{for:"checked"+e.task.id,"aria-label":"archiveTask-"+e.task.id,class:"checkbox"},[i("input",{type:"checkbox",checked:n.isChecked,disabled:"",name:"checked"+e.task.id,id:"archiveTask-"+e.task.id},null,8,E),i("span",{class:"checkbox-custom",onClick:t[0]||(t[0]=(...c)=>n.archiveTask&&n.archiveTask(...c))})],8,K),i("label",{for:"title-"+e.task.id,"aria-label":e.task.title,class:"title"},[i("input",{type:"text",readonly:"",value:e.task.title,id:"title-"+e.task.id,name:"title",placeholder:"Input title"},null,8,O)],8,P),n.isChecked?I("",!0):(m(),k("button",{key:0,class:"pin-button",onClick:t[1]||(t[1]=(...c)=>n.pinTask&&n.pinTask(...c)),id:"pinTask-"+e.task.id,"aria-label":"pinTask-"+e.task.id},j,8,V))],2)}const S=C(D,[["render",H]]);D.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:`{
  id: '',
  state: '',
  title: ''
}`}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/Users/yqg/taskbox/src/stories/Task.vue"]};const R={title:"我的/待办项",component:S,tags:["autodocs"],excludeStories:/.*Data$/,argTypes:{onPinTask:{},onArchiveTask:{}}},N={onPinTask:u("pin-task"),onArchiveTask:u("archive-task")},l=a=>({components:{Task:S},setup(){return{args:a,...N}},template:'<Task v-bind="args" />'}),s=l.bind({});s.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const r=l.bind({});r.args={task:{...s.args.task,state:"TASK_PINNED"}};const o=l.bind({});o.args={task:{...s.args.task,state:"TASK_ARCHIVED"}};var T,_,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,p,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,f,A;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Task
  },
  setup() {
    return {
      args,
      ...actionsData
    };
  },
  template: '<Task v-bind="args" />'
})`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const q=["actionsData","Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:o,Default:s,Pinned:r,__namedExportsOrder:q,actionsData:N,default:R},Symbol.toStringTag,{value:"Module"}));export{s as D,S as T,N as a,w as b};
//# sourceMappingURL=Task.stories-50a21442.js.map
