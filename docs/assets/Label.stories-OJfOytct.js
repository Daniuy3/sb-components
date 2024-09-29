import{j as v}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const f=({label:o,size:x="h1",allCaps:g=!1,color:C="text-primary",fontColor:z})=>v.jsxs("span",{className:`${x} ${z||C}`,children:[g?o.toLocaleUpperCase():o," "]});f.__docgenInfo={description:"",methods:[],displayName:"Label",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"",defaultValue:{value:'"h1"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"",defaultValue:{value:'"text-primary"',computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q={title:"UI/MyLabel",component:f,tags:["UI","Label","autodocs"],argTypes:{label:{description:"The text to display in the label"},size:{description:"The size of the label",control:{type:"select",options:["normal","h1","h2","h3"]}},fontColor:{description:"A custom color for the label"},color:{description:"The color of the label",control:{type:"select",options:["text-primary","text-secondary","text-tertiary"]}},allCaps:{description:"to capitalize the label",control:{type:"boolean"}}},parameters:{layout:"centered"}},e={args:{label:"Hello",size:"h1"}},a={args:{label:"all caps",size:"h1",allCaps:!0}},r={args:{label:"Secondary label",size:"h1",color:"text-secondary"}},t={args:{label:"Custom color",size:"h1",fontColor:"red"}};var l,s,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Hello",
    size: "h1"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "all caps",
    size: "h1",
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    size: "h1",
    color: "text-secondary"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,h,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Custom color",
    size: "h1",
    fontColor: "red"
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const L=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,t as CustomColor,r as Secondary,L as __namedExportsOrder,q as default};
