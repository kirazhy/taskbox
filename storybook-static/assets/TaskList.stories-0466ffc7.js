import{T as B,D as t,a as F}from"./Task.stories-50a21442.js";import{r as K,k as u,a as l,F as p,m as g,o as r,f as s,j as V,e as q,g as T}from"./vue.esm-bundler-c7d8a291.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./chunk-KKE3V3AL-49257385.js";import"./_commonjsHelpers-87174ba5.js";const x={name:"TaskList",components:{Task:B},props:{tasks:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["archive-task","pin-task"],setup(e,{emit:m}){return e=K(e),{isEmpty:u(()=>e.tasks.length===0),tasksInOrder:u(()=>[...e.tasks.filter(a=>a.state==="TASK_PINNED"),...e.tasks.filter(a=>a.state!=="TASK_PINNED")]),onArchiveTask(a){m("archive-task",a)},onPinTask(a){m("pin-task",a)}}}},O={class:"list-items"},W=s("span",{class:"glow-checkbox"},null,-1),j=s("span",{class:"glow-text"},[s("span",null,"Loading"),T(),s("span",null,"cool"),T(),s("span",null,"state")],-1),C=[W,j],U={key:1,class:"list-items"},Y=s("div",{class:"wrapper-message"},[s("span",{class:"icon-check"}),s("p",{class:"title-message"},"You have no tasks"),s("p",{class:"subtitle-message"},"Sit back and relax")],-1),z=[Y];function G(e,m,a,i,J,M){const b=q("Task");return r(),l("div",O,[a.loading?(r(),l(p,{key:0},g(6,c=>s("div",{key:c,class:"loading-item"},C)),64)):i.isEmpty?(r(),l("div",U,z)):(r(!0),l(p,{key:2},g(i.tasksInOrder,c=>(r(),V(b,{key:c.id,task:c,onArchiveTask:i.onArchiveTask,onPinTask:i.onPinTask},null,8,["task","onArchiveTask","onPinTask"]))),128))])}const I=w(x,[["render",G]]);x.__docgenInfo={displayName:"TaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/Users/yqg/taskbox/src/stories/TaskList.vue"]};const ss={component:I,title:"我的/待办列表",tags:["autodocs"],decorators:[()=>({template:'<div style="margin: 3em;"><story/></div>'})],argTypes:{onPinTask:{},onArchiveTask:{}}},H=e=>({components:{TaskList:I},setup(){return{args:e,...F}},template:'<TaskList v-bind="args" />'}),n=H.bind({});n.args={tasks:[{...t.args.task,id:"1",title:"Task 1"},{...t.args.task,id:"2",title:"Task 2"},{...t.args.task,id:"3",title:"Task 3"},{...t.args.task,id:"4",title:"Task 4"},{...t.args.task,id:"5",title:"Task 5"},{...t.args.task,id:"6",title:"Task 6"}]};const d={name:"带有置顶任务",args:{tasks:[...n.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},o={name:"加载中",args:{tasks:[],loading:!0}},k={name:"空列表",args:{...o.args,loading:!1}};var h,_,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    TaskList
  },
  setup() {
    return {
      args,
      ...TaskStories.actionsData
    };
  },
  template: '<TaskList v-bind="args" />'
})`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var v,y,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '带有置顶任务',
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var D,E,L;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '加载中',
  args: {
    tasks: [],
    loading: true
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,S,P;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '空列表',
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(P=(S=k.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const as=["Default","WithPinnedTasks","Loading","Empty"];export{n as Default,k as Empty,o as Loading,d as WithPinnedTasks,as as __namedExportsOrder,ss as default};
//# sourceMappingURL=TaskList.stories-0466ffc7.js.map
