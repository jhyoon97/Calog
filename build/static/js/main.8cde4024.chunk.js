(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,o){t.exports=o(27)},,,,,,function(t,e,o){},,,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(11),s=o.n(r),i=(o(18),o(7)),l=o(8),d=o(1),c=o(2),p=o(4),m=o(3),u=o(5),f=o(9),h=o.n(f),v=o(6),P=(o(21),function(t){function e(){var t,o;Object(d.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).handlePostRemove=function(t){var e=o.props,n=e.postId,a=e.onPostRemove;t.stopPropagation(),a(n)},o.handlePostView=function(t){var e=o.props,n=e.postId,a=e.onPostView;t.stopPropagation(),a(n)},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return t.post!==this.props.post}},{key:"render",value:function(){var t=this.handlePostView,e=this.props,o=e.title,n=e.content,r=e.todoContent,s=e.date,i=e.modifyDate,l=(r.reduce(function(t,e){return e.isPerform?++t:t},0)/r.length*100).toFixed(0);return a.a.createElement("li",{className:"PostContent",onClick:t},a.a.createElement("div",null,a.a.createElement("b",{className:"title"},o),a.a.createElement("hr",null),a.a.createElement("p",{className:"upload_date"},s),i?a.a.createElement("p",{className:"upload_date"},"\uc218\uc815 : ",i):null,a.a.createElement("p",{className:"content"},n),r.length>0?a.a.createElement("p",{className:"perform_ratio"},"\uc218\ud589\ub960 ",a.a.createElement("span",null,l,"%"),"\uc758 Todo list"):null))}}]),e}(n.Component)),w=(o(22),function(t){function e(){return Object(d.a)(this,e),Object(p.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return t.posts!==this.props.posts}},{key:"render",value:function(){var t=this.props,e=t.onPostStart,o=t.onPostRemove,n=t.onPostView,r=t.posts.map(function(t){return a.a.createElement(P,{onPostRemove:o,onPostView:n,title:t.title,content:t.content,todoContent:t.todoContent,date:t.date,modifyDate:t.modifyDate,key:t.postId,postId:t.postId,post:t})});return a.a.createElement("section",{className:"PostList"},a.a.createElement("ul",{className:"list_area"},r),a.a.createElement("button",{className:"btn write",onClick:e},"\uae00 \uc791\uc131"))}}]),e}(n.Component)),y=(o(23),o(24),function(t){function e(){var t,o;Object(d.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).handleTodoRemove=function(t){var e=o.props,n=e.todoId,a=e.onTodoRemove;t.stopPropagation(),t.preventDefault(),a(n)},o.handleTodoToggle=function(t){if(o.props.onTodoToggle){var e=o.props,n=e.todoId,a=e.onTodoToggle;t.stopPropagation(),a(n)}},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return t.todo!==this.props.todo}},{key:"render",value:function(){var t=this.handleTodoRemove,e=this.handleTodoToggle,o=this.props,n=o.isOnlyView,r=o.isPerform;return a.a.createElement("li",{className:"TodoItem ".concat(r?"perform":"notPerform"),onClick:e},a.a.createElement("p",null,this.props.children),n?null:a.a.createElement("button",{onClick:t},"Delete"))}}]),e}(n.Component)),E=function(t){function e(){var t,o;Object(d.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).handleTodoAdd=function(t){var e=o.props,n=e.onTodoAdd,a=e.writeForm.todoTitle;t.preventDefault(),n(a)},o.handleKeyPress=function(t){var e=o.props,n=e.onTodoAdd,a=e.writeForm.todoTitle;"Enter"===t.key&&(t.preventDefault(),n(a))},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return t.writeForm!==this.props.writeForm}},{key:"render",value:function(){var t=this.handleTodoAdd,e=this.handleKeyPress,o=this.props,n=o.onPostClose,r=o.onPostWrite,s=o.onPostUpload,i=o.onTodoRemove,l=o.popupMode,d=o.writeForm,c=d.title,p=d.content,m=d.todoTitle,u=d.todoContent.map(function(t){return a.a.createElement(y,{key:t.todoId,todoId:t.todoId,onTodoRemove:i},t.todo)});return a.a.createElement("form",{className:"PostWrite"},a.a.createElement("div",{className:"form_area"},a.a.createElement("input",{name:"title",className:"post_title",value:c,onChange:r,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."}),a.a.createElement("textarea",{name:"content",className:"post_content",type:"text",value:p,onChange:r,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694."}),a.a.createElement("div",{className:"todo_title_area"},a.a.createElement("input",{name:"todoTitle",value:m,onChange:r,onKeyPress:e,placeholder:"\ud56d\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."}),a.a.createElement("button",{onClick:t},"Add")),a.a.createElement("ul",{className:"todo_content_area"},u)),a.a.createElement("div",{className:"btn_group"},a.a.createElement("button",{className:"btn cancel",onClick:n},"\ucde8\uc18c"),a.a.createElement("button",{className:"btn write",onClick:s},"modify"===l?"\uc218\uc815\uc644\ub8cc":"\uac8c\uc2dc")))}}]),e}(n.Component),b=(o(25),function(t){function e(){var t,o;Object(d.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).handlePostRemove=function(t){var e=o.props,n=e.onPostRemove,a=e.viewPostId;t.stopPropagation(),n(a)},o.handlePostModify=function(t){var e=o.props,n=e.onPostModify,a=e.viewPostId,r=e.post,s=r.title,i=r.content,l=r.todoContent;t.stopPropagation(),n({title:s,content:i,todoContent:l},a)},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return t.post!==this.props.post}},{key:"render",value:function(){var t=this.handlePostRemove,e=this.handlePostModify,o=this.props,n=o.onPostClose,r=o.onTodoRemove,s=o.onTodoToggle,i=o.post,l=i.title,d=i.content,c=i.todoContent,p=i.date,m=i.modifyDate,u=c.map(function(t){return a.a.createElement(y,{key:t.todoId,todoId:t.todoId,isOnlyView:!0,isPerform:t.isPerform,onTodoRemove:r,onTodoToggle:s,todo:t},t.todo)}),f=(c.reduce(function(t,e){return e.isPerform?++t:t},0)/c.length*100).toFixed(0);return a.a.createElement("div",{className:"PostView"},a.a.createElement("div",{className:"view_area"},a.a.createElement("h2",{className:"title_area"},l),a.a.createElement("hr",null),a.a.createElement("p",{className:"date"},"\uc791\uc131\uc77c : ",p),m?a.a.createElement("p",{className:"date"},"\uc218\uc815\uc77c : ",m):null,d?a.a.createElement("div",null,a.a.createElement("p",{className:"content_area"},d),a.a.createElement("hr",null)):null,0===c.length?null:a.a.createElement("div",null,a.a.createElement("p",{className:"perform_ratio"},"\uc624\ub298 \ud560 \uc77c\uc758 ",a.a.createElement("span",null,f,"%"),"\ub97c \uc218\ud589\ud558\uc168\uad70\uc694!"),a.a.createElement("ul",{className:"todo_content_area"},u))),a.a.createElement("div",{className:"btn_group"},a.a.createElement("button",{className:"btn remove",onClick:t},"\uc0ad\uc81c"),a.a.createElement("button",{className:"btn modify",onClick:e},"\uc218\uc815"),a.a.createElement("button",{className:"btn cancel",onClick:n},"\ub098\uac00\uae30")))}}]),e}(n.Component)),C=(o(26),function(){for(var t=[],e=0;e<3650;e++){t.push({postId:e,title:"title ".concat(e),content:"content ".concat(e),todoContent:[],date:h()().format("YYYY-MM-DD [/] h:mm:ss A"),modifyDate:void 0});for(var o=0;o<5;o++)t[e].todoContent.push({todoId:o,todo:"\ud560\uc77c ".concat(o),isPerform:!1})}return t}),g=function(t){function e(){var t,o;Object(d.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={popupMode:"",writeForm:{title:"",content:"",todoTitle:"",todoContent:[]},viewPostIndex:-1,viewPostId:-1,modifyPostIndex:-1,modifyPostId:-1,posts:C()},o.postId=o.state.posts.length,o.initState=function(){o.setState({popupMode:"",writeForm:{title:"",content:"",todoTitle:"",todoContent:[]},viewPostIndex:-1,viewPostId:-1,modifyPostIndex:-1,modifyPostId:-1})},o.getDateNow=function(){return h()().format("YYYY-MM-DD [/] h:mm:ss A")},o.handlePostClose=function(t){t.preventDefault(),o.initState()},o.handlePostStart=function(){o.setState({popupMode:"write"})},o.handlePostUpload=function(t){t.preventDefault();var e=o.state.posts,n=o.state.writeForm,a=n.title,r=n.content,s=n.todoContent,i=o.getDateNow();""!==a?""!==r||0!==s.length?(o.initState(),o.setState({posts:e.concat({postId:o.postId++,title:a,content:r,todoContent:s,date:i,modifyDate:void 0})})):alert("\ub0b4\uc6a9 \ub610\ub294 TodoList \ud56d\ubaa9\uc744 \ucd94\uac00\ud574\uc8fc\uc138\uc694."):alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},o.handlePostRemove=function(t){var e=o.state.posts;o.initState(),o.setState({posts:e.filter(function(e){return e.postId!==t})})},o.handlePostWrite=function(t){var e=o.state.writeForm;o.setState({writeForm:Object(l.a)({},e,Object(i.a)({},t.target.name,t.target.value))})},o.handlePostView=function(t){var e=o.state.posts;o.setState({popupMode:"view",viewPostIndex:e.findIndex(function(e){return e.postId===t}),viewPostId:t})},o.handlePostModify=function(t,e){var n=o.state,a=n.writeForm,r=n.posts;o.initState(),o.setState({popupMode:"modify",writeForm:Object(l.a)({},a,t),modifyPostIndex:r.findIndex(function(t){return t.postId===e}),modifyPostId:e})},o.handlePostModifyUpload=function(t){t.preventDefault();var e=o.state.modifyPostIndex,n=o.state.writeForm,a=n.title,r=n.content,s=n.todoContent;""!==a?""!==r||0!==s.length?(o.setState(Object(v.a)(function(t){var n=t.posts[e];n.title=a,n.content=r,n.todoContent=s,n.modifyDate=o.getDateNow()})),o.initState()):alert("\ub0b4\uc6a9 \ub610\ub294 TodoList \ud56d\ubaa9\uc744 \ucd94\uac00\ud574\uc8fc\uc138\uc694."):alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},o.handleTodoAdd=function(t){var e=o.state.writeForm,n=e.todoTitle,a=e.todoContent,r=a.length>0?a[a.length-1].todoId+1:0;""!==n?o.setState(Object(v.a)(function(e){var o=e.writeForm;o.todoTitle="",o.todoContent.push({todoId:r,todo:t,isPerform:!1})})):alert("\ud56d\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.")},o.handleTodoRemove=function(t){o.setState(Object(v.a)(function(e){var o=e.writeForm,n=o.todoContent.findIndex(function(e){return e.todoId===t});o.todoContent.splice(n,1)}))},o.handleTodoToggle=function(t){var e=o.state.viewPostIndex;o.setState(Object(v.a)(function(o){var n=o.posts[e],a=n.todoContent.findIndex(function(e){return e.todoId===t}),r=n.todoContent[a];r.isPerform=!r.isPerform}))},o}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.performRatio,e=this.handlePostClose,o=this.handlePostStart,n=this.handlePostUpload,r=this.handlePostRemove,s=this.handlePostWrite,i=this.handlePostView,l=this.handlePostModify,d=this.handlePostModifyUpload,c=this.handleTodoAdd,p=this.handleTodoRemove,m=this.handleTodoToggle,u=this.state,f=u.popupMode,h=u.writeForm,v=u.viewPostIndex,P=u.viewPostId,y=u.posts;return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null,"Todo")),a.a.createElement(w,{posts:y,onPostStart:o,onPostRemove:r,onPostView:i}),a.a.createElement("div",{className:"popup_wrap ".concat(f?"on":"")},"write"===f?a.a.createElement(E,{onPostClose:e,onPostUpload:n,onPostWrite:s,onTodoAdd:c,onTodoRemove:p,writeForm:h}):"view"===f?a.a.createElement(b,{onPostClose:e,onPostRemove:r,onPostModify:l,onTodoRemove:p,onTodoToggle:m,viewPostId:P,post:y[v],performRatio:t}):"modify"===f?a.a.createElement(E,{onPostClose:e,onPostUpload:d,onPostWrite:s,onTodoAdd:c,onTodoRemove:p,popupMode:f,writeForm:h}):void 0))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.8cde4024.chunk.js.map