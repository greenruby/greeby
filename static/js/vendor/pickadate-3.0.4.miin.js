/*!
 * pickadate.js v3.0.4, 2013/05/25
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */
window.Picker=function(e,t,n){function r(i,o,a,s){function c(){return r._.node("div",r._.node("div",r._.node("div",r._.node("div",f.component.nodes(u.open),m.box),m.wrap),m.frame),m.holder)}function l(e){e.stopPropagation(),"focus"==e.type&&f.$root.addClass(m.focused),f.open()}if(!i)return r;var u={id:Math.abs(~~(1e9*Math.random()))},d=a?e.extend(!0,{},a.defaults,s):s||{},m=e.extend({},r.klasses(),d.klass),p=e(i),h=function(){return this.start()},f=h.prototype={constructor:h,$node:p,start:function(){return u&&u.start?f:(u.methods={},u.start=!0,u.open=!1,u.type=i.type,i.autofocus=i==document.activeElement,i.type="text",i.readOnly=!0,f.component=new a(f,d),f.$root=e(r._.node("div",c(),m.picker)).on({focusin:function(e){f.$root.removeClass(m.focused),e.stopPropagation()},mousedown:function(e){e.target!=f.$root.children()[0]&&e.stopPropagation()},click:function(t){var n=t.target,o=n.attributes.length?e(n):e(n).closest("[data-pick]"),a=o.data();n!=f.$root.children()[0]&&(t.stopPropagation(),f.$root.find(document.activeElement).length||i.focus(),a.nav&&!o.hasClass(m.navDisabled)?f.set("highlight",f.component.item.highlight,{nav:a.nav}):r._.isInteger(a.pick)&&!o.hasClass(m.disabled)?f.set("select",a.pick).close(!0):a.clear&&f.clear().close(!0))}}),f._hidden=d.formatSubmit?e("<input type=hidden name="+i.name+(d.hiddenSuffix||"_submit")+(p.data("value")?' value="'+r._.trigger(f.component.formats.toString,f.component,[d.formatSubmit,f.component.item.select])+'"':"")+">")[0]:n,p.addClass(m.input).on("focus.P"+u.id+" click.P"+u.id,l).on("change.P"+u.id,function(){f._hidden&&(f._hidden.value=i.value?r._.trigger(f.component.formats.toString,f.component,[d.formatSubmit,f.component.item.select]):"")}).on("keydown.P"+u.id,function(e){var t=e.keyCode,r=/^(8|46)$/.test(t);return 27==t?(f.close(),!1):((32==t||r||!u.open&&f.component.key[t])&&(e.preventDefault(),e.stopPropagation(),r?f.clear().close():f.open()),n)}).val(p.data("value")?r._.trigger(f.component.formats.toString,f.component,[d.format,f.component.item.select]):i.value).after(f.$root,f._hidden).data(o,f),f.on({start:f.component.onStart,render:f.component.onRender,stop:f.component.onStop,open:f.component.onOpen,close:f.component.onClose,set:f.component.onSet}).on({start:d.onStart,render:d.onRender,stop:d.onStop,open:d.onOpen,close:d.onClose,set:d.onSet}),i.autofocus&&f.open(),f.trigger("start").trigger("render"))},render:function(){return f.$root.html(c()),f.trigger("render")},stop:function(){return u.start?(f.close(),f._hidden&&f._hidden.parentNode.removeChild(f._hidden),f.$root.remove(),p.removeClass(m.input).off(".P"+u.id).removeData(o),i.type=u.type,i.readOnly=!1,f.trigger("stop"),u.methods={},u.start=!1,f):f},open:function(e){return u.open?f:(p.addClass(m.active),f.$root.addClass(m.opened),e!==!1&&(u.open=!0,p.focus(),t.on("click.P"+u.id+" focusin.P"+u.id,function(e){e.target!=i&&e.target!=document&&f.close()}).on("keydown.P"+u.id,function(e){var t=e.keyCode,n=f.component.key[t],o=e.target;27==t?f.close(!0):o!=i||!n&&13!=t?f.$root.find(o).length&&13==t&&(e.preventDefault(),o.click()):(e.preventDefault(),n?r._.trigger(f.component.key.go,f,[n]):f.$root.find("."+m.highlighted).hasClass(m.disabled)||f.set("select",f.component.item.highlight).close())})),f.trigger("open"))},close:function(e){return e&&(p.off("focus.P"+u.id).focus(),setTimeout(function(){p.on("focus.P"+u.id,l)},0)),p.removeClass(m.active),f.$root.removeClass(m.opened+" "+m.focused),u.open&&(u.open=!1,t.off(".P"+u.id)),f.trigger("close")},clear:function(){return f.set("clear")},set:function(e,t,n){var i,o,a=r._.isObject(e),s=a?e:{};if(e){a||(s[e]=t);for(i in s)o=s[i],f.component.item[i]&&f.component.set(i,o,n||{}),("select"==i||"clear"==i)&&p.val("clear"==i?"":r._.trigger(f.component.formats.toString,f.component,[d.format,f.component.get(i)])).trigger("change");f.render()}return f.trigger("set",s)},get:function(e,t){return e=e||"value",null!=u[e]?u[e]:"value"==e?i.value:f.component.item[e]?"string"==typeof t?r._.trigger(f.component.formats.toString,f.component,[t,f.component.get(e)]):f.component.get(e):n},on:function(e,t){var n,i,o=r._.isObject(e),a=o?e:{};if(e){o||(a[e]=t);for(n in a)i=a[n],u.methods[n]=u.methods[n]||[],u.methods[n].push(i)}return f},trigger:function(e,t){var n=u.methods[e];return n&&n.map(function(e){r._.trigger(e,f,[t])}),f}};return new h}return r.klasses=function(e){return e=e||"picker",{picker:e,opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},r._={group:function(e){for(var t,n="",i=r._.trigger(e.min,e);r._.trigger(e.max,e,[i])>=i;i+=e.i)t=r._.trigger(e.item,e,[i]),n+=r._.node(e.node,t[0],t[1],t[2]);return n},node:function(e,t,n,r){return t?(t=Array.isArray(t)?t.join(""):t,n=n?' class="'+n+'"':"",r=r?" "+r:"","<"+e+n+r+">"+t+"</"+e+">"):""},lead:function(e){return(10>e?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isObject:function(e){return{}.toString.call(e).indexOf("Object")>-1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&0===e%1}},r.extend=function(t,n){e.fn[t]=function(i,o){var a=this.data(t);return"picker"==i?a:a&&"string"==typeof i?(r._.trigger(a[i],a,[o]),this):this.each(function(){var o=e(this);o.data(t)||new r(this,t,n,i)})},e.fn[t].defaults=n.defaults},r}(jQuery,jQuery(document));
/*!
 * Date picker for pickadate.js v3.0.4
 * http://amsul.github.io/pickadate.js/date.htm
 */
(function(){function e(e,t){var r=this,i=e.$node.data("value");r.settings=t,r.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"navigate create validate",view:"create validate viewset",disable:"flipItem",enable:"flipItem"},r.item={},r.item.disable=(t.disable||[]).slice(0),r.item.enable=-function(e){return e[0]===!0?e.shift():-1}(r.item.disable),r.set("min",t.min).set("max",t.max).set("now").set("select",i||e.$node[0].value||r.item.now,{format:i?t.formatSubmit:t.format,data:!!i}),r.key={40:7,38:-7,39:1,37:-1,go:function(e){r.set("highlight",[r.item.highlight.year,r.item.highlight.month,r.item.highlight.date+e],{interval:e}),this.render()}},e.on("render",function(){e.$root.find("."+t.klass.selectMonth).on("change",function(){e.set("highlight",[e.get("view").year,this.value,e.get("highlight").date]),e.$root.find("."+t.klass.selectMonth).focus()}),e.$root.find("."+t.klass.selectYear).on("change",function(){e.set("highlight",[this.value,e.get("view").month,e.get("highlight").date]),e.$root.find("."+t.klass.selectYear).focus()})}).on("open",function(){e.$root.find("button, select").attr("disabled",!1)}).on("close",function(){e.$root.find("button, select").attr("disabled",!0)})}var t=7,r=6;e.prototype.set=function(e,t,r){var i=this;return i.item["enable"==e?"disable":"flip"==e?"enable":e]=i.queue[e].split(" ").map(function(n){return t=i[n](e,t,r)}).pop(),"select"==e?i.set("highlight",i.item.select,r):"highlight"==e?i.set("view",i.item.highlight,r):("flip"==e||"min"==e||"max"==e||"disable"==e||"enable"==e)&&i.item.select&&i.item.highlight&&i.set("select",i.item.select,r).set("highlight",i.item.highlight,r),i},e.prototype.get=function(e){return this.item[e]},e.prototype.create=function(e,t,r){var i,n=this;return t=void 0===t?e:t,t==-1/0||1/0==t?i=t:t=Picker._.isObject(t)&&Picker._.isInteger(t.pick)?t.obj:Array.isArray(t)?new Date(t[0],t[1],t[2]):Picker._.isInteger(t)||Picker._.isDate(t)?n.normalize(new Date(t),r):n.now(e,t,r),{year:i||t.getFullYear(),month:i||t.getMonth(),date:i||t.getDate(),day:i||t.getDay(),obj:i||t,pick:i||t.getTime()}},e.prototype.now=function(e,t,r){return t=new Date,r&&r.rel&&t.setDate(t.getDate()+r.rel),this.normalize(t,r)},e.prototype.navigate=function(e,t,r){if(Picker._.isObject(t)){for(var i=new Date(t.year,t.month+(r&&r.nav?r.nav:0),1),n=i.getFullYear(),a=i.getMonth(),o=t.date;new Date(n,a,o).getMonth()!==a;)o-=1;t=[n,a,o]}return t},e.prototype.normalize=function(e){return e.setHours(0,0,0,0),e},e.prototype.measure=function(e,t){var r=this;return t?Picker._.isInteger(t)&&(t=r.now(e,t,{rel:t})):t="min"==e?-1/0:1/0,t},e.prototype.viewset=function(e,t){return this.create([t.year,t.month,1])},e.prototype.validate=function(e,t,r){var i,n,a,o,s=this,l=t,c=r&&r.interval?r.interval:1,u=-1===s.item.enable,d=s.item.min,h=s.item.max,m=u&&s.item.disable.filter(function(e){if(Array.isArray(e)){var r=s.create(e).pick;t.pick>r?i=!0:r>t.pick&&(n=!0)}return Picker._.isInteger(e)}).length;if(!u&&s.disabled(t)||u&&s.disabled(t)&&(m||i||n)||t.pick<=d.pick||t.pick>=h.pick)for(u&&!m&&(!n&&c>0||!i&&0>c)&&(c*=-1);s.disabled(t)&&(Math.abs(c)>1&&(t.month<l.month||t.month>l.month)&&(t=l,c=Math.abs(c)/c),t.pick<=d.pick?(a=!0,c=1):t.pick>=h.pick&&(o=!0,c=-1),!a||!o);)t=s.create([t.year,t.month,t.date+c]);return t},e.prototype.disabled=function(e){var t=this,r=t.item.disable.filter(function(r){return Picker._.isInteger(r)?e.day===(t.settings.firstDay?r:r-1)%7:Array.isArray(r)?e.pick===t.create(r).pick:void 0}).length;return e.pick<t.item.min.pick||e.pick>t.item.max.pick||-1===t.item.enable?!r:r},e.prototype.parse=function(e,t,r){var i=this,n={};if(!t||Picker._.isInteger(t)||Array.isArray(t)||Picker._.isDate(t)||Picker._.isObject(t)&&Picker._.isInteger(t.pick))return t;if(!r||!r.format)throw"Need a formatting option to parse this..";return i.formats.toArray(r.format).map(function(e){var r=i.formats[e],a=r?Picker._.trigger(r,i,[t,n]):e.replace(/^!/,"").length;r&&(n[e]=t.substr(0,a)),t=t.substr(a)}),[n.yyyy||n.yy,+(n.mm||n.m)-(r.data?1:0),n.dd||n.d]},e.prototype.formats=function(){var e=function(e,t,r){var i=e.match(/\w+/)[0];return r.mm||r.m||(r.m=t.indexOf(i)),i.length};return{d:function(e,t){return e?Picker._.digits(e):t.date},dd:function(e,t){return e?2:Picker._.lead(t.date)},ddd:function(e,t){return e?getFirstWordLength(e):this.settings.weekdaysShort[t.day]},dddd:function(e,t){return e?getFirstWordLength(e):this.settings.weekdaysFull[t.day]},m:function(e,t){return e?Picker._.digits(e):t.month+1},mm:function(e,t){return e?2:Picker._.lead(t.month+1)},mmm:function(t,r){var i=this.settings.monthsShort;return t?e(t,i,r):i[r.month]},mmmm:function(t,r){var i=this.settings.monthsFull;return t?e(t,i,r):i[r.month]},yy:function(e,t){return e?2:(""+t.year).slice(2)},yyyy:function(e,t){return e?4:t.year},toArray:function(e){return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(e,t){var r=this;return r.formats.toArray(e).map(function(e){return Picker._.trigger(r.formats[e],r,[0,t])||e.replace(/^!/,"")}).join("")}}}(),e.prototype.flipItem=function(e,t){var r=this,i=r.item.disable,n=-1===r.item.enable;return"flip"==t?r.item.enable=n?1:-1:!n&&"enable"==e||n&&"disable"==e?i=r.removeDisabled(i,t):(!n&&"disable"==e||n&&"enable"==e)&&(i=r.addDisabled(i,t)),i},e.prototype.addDisabled=function(e,t){var r=this;return t.map(function(t){r.filterDisabled(e,t).length||e.push(t)}),e},e.prototype.removeDisabled=function(e,t){var r=this;return t.map(function(t){e=r.filterDisabled(e,t,1)}),e},e.prototype.filterDisabled=function(e,t,r){var i=Array.isArray(t);return e.filter(function(e){var n=!i&&t===e||i&&Array.isArray(e)&&""+t==""+e;return r?!n:n})},e.prototype.nodes=function(e){var i=this,n=i.settings,a=i.item.now,o=i.item.select,s=i.item.highlight,l=i.item.view,c=i.item.disable,u=i.item.min,d=i.item.max,h=function(e){return n.firstDay&&e.push(e.shift()),Picker._.node("thead",Picker._.group({min:0,max:t-1,i:1,node:"th",item:function(t){return[e[t],n.klass.weekdays]}}))}((n.showWeekdaysFull?n.weekdaysFull:n.weekdaysShort).slice(0)),m=function(e){return Picker._.node("div"," ",n.klass["nav"+(e?"Next":"Prev")]+(e&&l.year>=d.year&&l.month>=d.month||!e&&l.year<=u.year&&l.month<=u.month?" "+n.klass.navDisabled:""),"data-nav="+(e||-1))},p=function(t){return n.selectMonths?Picker._.node("select",Picker._.group({min:0,max:11,i:1,node:"option",item:function(e){return[t[e],0,"value="+e+(l.month==e?" selected":"")+(l.year==u.year&&u.month>e||l.year==d.year&&e>d.month?" disabled":"")]}}),n.klass.selectMonth,e?"":"disabled"):Picker._.node("div",t[l.month],n.klass.month)},y=function(){var t=l.year,r=n.selectYears===!0?5:~~(n.selectYears/2);if(r){var i=u.year,a=d.year,o=t-r,s=t+r;if(i>o&&(s+=i-o,o=i),s>a){var c=o-i,h=s-a;o-=c>h?h:c,s=a}return Picker._.node("select",Picker._.group({min:o,max:s,i:1,node:"option",item:function(e){return[e,0,"value="+e+(t==e?" selected":"")]}}),n.klass.selectYear,e?"":"disabled")}return Picker._.node("div",t,n.klass.year)};return Picker._.node("div",m()+m(1)+p(n.showMonthsShort?n.monthsShort:n.monthsFull)+y(),n.klass.header)+Picker._.node("table",h+Picker._.node("tbody",Picker._.group({min:0,max:r-1,i:1,node:"tr",item:function(e){var r=n.firstDay&&0===i.create([l.year,l.month,1]).day?-7:0;return[Picker._.group({min:t*e-l.day+r+1,max:function(){return this.min+t-1},i:1,node:"td",item:function(e){return e=i.create([l.year,l.month,e+(n.firstDay?1:0)]),[Picker._.node("div",e.date,function(t){return t.push(l.month==e.month?n.klass.infocus:n.klass.outfocus),a.pick==e.pick&&t.push(n.klass.now),o&&o.pick==e.pick&&t.push(n.klass.selected),s&&s.pick==e.pick&&t.push(n.klass.highlighted),(c&&i.disabled(e)||e.pick<u.pick||e.pick>d.pick)&&t.push(n.klass.disabled),t.join(" ")}([n.klass.day]),"data-pick="+e.pick)]}})]}})),n.klass.table)+Picker._.node("div",Picker._.node("button",n.today,n.klass.buttonToday,"data-pick="+a.pick+(e?"":" disabled"))+Picker._.node("button",n.clear,n.klass.buttonClear,"data-clear=1"+(e?"":" disabled")),n.klass.footer)},e.defaults=function(e){return{monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",format:"d mmmm, yyyy",klass:{table:e+"table",header:e+"header",navPrev:e+"nav--prev",navNext:e+"nav--next",navDisabled:e+"nav--disabled",month:e+"month",year:e+"year",selectMonth:e+"select--month",selectYear:e+"select--year",weekdays:e+"weekday",day:e+"day",disabled:e+"day--disabled",selected:e+"day--selected",highlighted:e+"day--highlighted",now:e+"day--today",infocus:e+"day--infocus",outfocus:e+"day--outfocus",footer:e+"footer",buttonClear:e+"button--clear",buttonToday:e+"button--today"}}}(Picker.klasses().picker+"__"),Picker.extend("pickadate",e)})();
/*!
 * Time picker for pickadate.js v3.0.4
 * http://amsul.github.io/pickadate.js/time.htm
 */
(function(){function e(e,t){var i=this,r=e.$node.data("value");i.settings=t,i.queue={interval:"i",min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"create validate",view:"create validate",disable:"flipItem",enable:"flipItem"},i.item={},i.item.interval=t.interval||30,i.item.disable=(t.disable||[]).slice(0),i.item.enable=-function(e){return e[0]===!0?e.shift():-1}(i.item.disable),i.set("min",t.min).set("max",t.max).set("now").set("select",r||e.$node[0].value||i.item.min,{format:r?t.formatSubmit:t.format}),i.key={40:1,38:-1,39:1,37:-1,go:function(e){i.set("highlight",i.item.highlight.pick+e*i.item.interval,{interval:e*i.item.interval}),this.render()}},e.on("render",function(){var r=e.$root.children(),n=r.find("."+t.klass.viewset);n.length?r[0].scrollTop=~~(n.position().top-2*n[0].clientHeight):console.warn("Nothing to viewset with",i.item.view)}).on("open",function(){e.$root.find("button").attr("disable",!1)}).on("close",function(){e.$root.find("button").attr("disable",!0)})}var t=24,i=60,r=12,n=t*i;e.prototype.set=function(e,t,i){var r=this;return r.item["enable"==e?"disable":"flip"==e?"enable":e]=r.queue[e].split(" ").map(function(n){return t=r[n](e,t,i)}).pop(),"select"==e?r.set("highlight",r.item.select,i):"highlight"==e?r.set("view",r.item.highlight,i):"interval"==e?r.set("min",r.item.min,i).set("max",r.item.max,i):("flip"==e||"min"==e||"max"==e||"disable"==e||"enable"==e)&&r.item.select&&r.item.highlight&&("min"==e&&r.set("max",r.item.max,i),r.set("select",r.item.select,i).set("highlight",r.item.highlight,i)),r},e.prototype.get=function(e){return this.item[e]},e.prototype.create=function(e,r,o){var a=this;return r=void 0===r?e:r,Picker._.isObject(r)&&Picker._.isInteger(r.pick)?r=r.pick:Array.isArray(r)?r=+r[0]*i+ +r[1]:Picker._.isInteger(r)||(r=a.now(e,r,o)),"max"==e&&a.item.min.pick>r&&(r+=n),r=a.normalize(r,o),{hour:~~(t+r/i)%t,mins:(i+r%i)%i,time:(n+r)%n,pick:r}},e.prototype.now=function(e,t){var r=new Date,n=r.getHours()*i+r.getMinutes();return Picker._.isInteger(t)?t+="min"==e&&0>t&&0===n?2:1:t=1,t*this.item.interval+n},e.prototype.normalize=function(e){return e-((0>e?this.item.interval:0)+e%this.item.interval)},e.prototype.measure=function(e,r,n){var o=this;return r?r===!0||Picker._.isInteger(r)?r=o.now(e,r,n):Picker._.isObject(r)&&Picker._.isInteger(r.pick)&&(r=o.normalize(r.pick,n)):r="min"==e?[0,0]:[t-1,i-1],r},e.prototype.validate=function(e,t,i){var r=this,n=i&&i.interval?i.interval:r.item.interval;return r.disabled(t)&&(t=r.shift(t,n)),t=r.scope(t),r.disabled(t)&&(t=r.shift(t,-1*n)),t},e.prototype.disabled=function(e){var t=this,i=t.item.disable.filter(function(i){return Picker._.isInteger(i)?e.hour==i:Array.isArray(i)?e.pick==t.create(i).pick:void 0}).length;return-1===t.item.enable?!i:i},e.prototype.shift=function(e,t){for(var i=this;i.disabled(e)&&(e=i.create(e.pick+=t||i.item.interval),!(e.pick<=i.item.min.pick||e.pick>=i.item.max.pick)););return e},e.prototype.scope=function(e){var t=this.item.min.pick,i=this.item.max.pick;return this.create(e.pick>i?i:t>e.pick?t:e)},e.prototype.parse=function(e,t,r){var n=this,o={};if(!t||Picker._.isInteger(t)||Array.isArray(t)||Picker._.isDate(t)||Picker._.isObject(t)&&Picker._.isInteger(t.pick))return t;if(!r||!r.format)throw"Need a formatting option to parse this..";return n.formats.toArray(r.format).map(function(e){var i=n.formats[e],r=i?Picker._.trigger(i,n,[t,o]):e.replace(/^!/,"").length;i&&(o[e]=t.substr(0,r)),t=t.substr(r)}),+o.i+i*(+(o.H||o.HH)||+(o.h||o.hh)%12+(/^p/i.test(o.A||o.a)?12:0))},e.prototype.formats={h:function(e,t){return e?Picker._.digits(e):t.hour%r||r},hh:function(e,t){return e?2:Picker._.lead(t.hour%r||r)},H:function(e,t){return e?Picker._.digits(e):""+t.hour},HH:function(e,t){return e?Picker._.digits(e):Picker._.lead(t.hour)},i:function(e,t){return e?2:Picker._.lead(t.mins)},a:function(e,t){return e?4:n/2>t.time%n?"a.m.":"p.m."},A:function(e,t){return e?2:n/2>t.time%n?"AM":"PM"},toArray:function(e){return e.split(/(h{1,2}|H{1,2}|i|a|A|!.)/g)},toString:function(e,t){var i=this;return i.formats.toArray(e).map(function(e){return Picker._.trigger(i.formats[e],i,[0,t])||e.replace(/^!/,"")}).join("")}},e.prototype.flipItem=function(e,t){var i=this,r=i.item.disable,n=-1===i.item.enable;return"flip"==t?i.item.enable=n?1:-1:!n&&"enable"==e||n&&"disable"==e?r=i.removeDisabled(r,t):(!n&&"disable"==e||n&&"enable"==e)&&(r=i.addDisabled(r,t)),r},e.prototype.addDisabled=function(e,t){var i=this;return t.map(function(t){i.filterDisabled(e,t).length||e.push(t)}),e},e.prototype.removeDisabled=function(e,t){var i=this;return t.map(function(t){e=i.filterDisabled(e,t,1)}),e},e.prototype.filterDisabled=function(e,t,i){var r=Array.isArray(t);return e.filter(function(e){var n=!r&&t===e||r&&Array.isArray(e)&&""+t==""+e;return i?!n:n})},e.prototype.i=function(e,t){return Picker._.isInteger(t)&&t>0?t:this.item.interval},e.prototype.nodes=function(e){var t=this,i=t.settings,r=t.item.select,n=t.item.highlight,o=t.item.view,a=t.item.disable;return Picker._.node("ul",Picker._.group({min:t.item.min.pick,max:t.item.max.pick,i:t.item.interval,node:"li",item:function(e){return e=t.create(e),[Picker._.trigger(t.formats.toString,t,[Picker._.trigger(i.formatLabel,t,[e])||i.format,e]),function(s,c){return r&&r.pick==c&&s.push(i.klass.selected),n&&n.pick==c&&s.push(i.klass.highlighted),o&&o.pick==c&&s.push(i.klass.viewset),a&&t.disabled(e)&&s.push(i.klass.disabled),s.join(" ")}([i.klass.listItem],e.pick),"data-pick="+e.pick]}})+Picker._.node("li",Picker._.node("button",i.clear,i.klass.buttonClear,"data-clear=1"+(e?"":" disable"))),i.klass.list)},e.defaults=function(e){return{clear:"Clear",format:"h:i A",interval:30,klass:{picker:e+" "+e+"--time",holder:e+"__holder",list:e+"__list",listItem:e+"__list-item",disabled:e+"__list-item--disabled",selected:e+"__list-item--selected",highlighted:e+"__list-item--highlighted",viewset:e+"__list-item--viewset",now:e+"__list-item--now",buttonClear:e+"__button--clear"}}}(Picker.klasses().picker),Picker.extend("pickatime",e)})();
/*!
 * Legacy browser support
 */
Array.isArray||(Array.isArray=function(t){return"[object Array]"=={}.toString.call(t)}),[].map||(Array.prototype.map=function(t,r){for(var e=this,n=e.length,i=Array(n),a=0;n>a;a++)a in e&&(i[a]=t.call(r,e[a],a,e));return i}),[].filter||(Array.prototype.filter=function(t){if(null==this)throw new TypeError;var r=Object(this),e=r.length>>>0;if("function"!=typeof t)throw new TypeError;for(var n=[],i=arguments[1],a=0;e>a;a++)if(a in r){var o=r[a];t.call(i,o,a,r)&&n.push(o)}return n}),[].indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError;var r=Object(this),e=r.length>>>0;if(0===e)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!=n?n=0:0!==n&&1/0!=n&&n!=-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=e)return-1;for(var i=n>=0?n:Math.max(e-Math.abs(n),0);e>i;i++)if(i in r&&r[i]===t)return i;return-1});/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * http://blog.stevenlevithan.com/archives/cross-browser-split
 */
var nativeSplit=String.prototype.split,compliantExecNpcg=void 0===/()??/.exec("")[1];String.prototype.split=function(t,r){var e=this;if("[object RegExp]"!==Object.prototype.toString.call(t))return nativeSplit.call(e,t,r);var n,i,a,o,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),c=0;for(t=RegExp(t.source,p+"g"),e+="",compliantExecNpcg||(n=RegExp("^"+t.source+"$(?!\\s)",p)),r=void 0===r?-1>>>0:r>>>0;(i=t.exec(e))&&(a=i.index+i[0].length,!(a>c&&(l.push(e.slice(c,i.index)),!compliantExecNpcg&&i.length>1&&i[0].replace(n,function(){for(var t=1;arguments.length-2>t;t++)void 0===arguments[t]&&(i[t]=void 0)}),i.length>1&&i.index<e.length&&Array.prototype.push.apply(l,i.slice(1)),o=i[0].length,c=a,l.length>=r)));)t.lastIndex===i.index&&t.lastIndex++;return c===e.length?(o||!t.test(""))&&l.push(""):l.push(e.slice(c)),l.length>r?l.slice(0,r):l};
