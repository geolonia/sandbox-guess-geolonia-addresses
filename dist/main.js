/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={402:function(e,t){!function(e){"use strict";var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}function i(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function a(e){var t={exports:{}};return e(t,t.exports),t.exports}var o=Object.defineProperty({default:{零:"〇",壱:"一",壹:"一",弐:"二",弍:"二",貳:"二",貮:"二",参:"三",參:"三",肆:"四",伍:"五",陸:"六",漆:"七",捌:"八",玖:"九",拾:"十",廿:"二十",陌:"百",佰:"百",阡:"千",仟:"千",萬:"万"}},"__esModule",{value:!0}),l=Object.defineProperty({default:{〇:0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,"０":0,"１":1,"２":2,"３":3,"４":4,"５":5,"６":6,"７":7,"８":8,"９":9}},"__esModule",{value:!0}),s=a((function(e,t){function n(e){if(e.match(/^[0-9]+$/))return Number(e);let n=r(e),i=0;for(const e in t.smallNumbers){const r=new RegExp(`(.*)${e}`),a=n.match(r);if(a){let r=1;a[1]&&(r=a[1].match(/^[0-9]+$/)?Number(a[1]):l.default[a[1]]),i+=r*t.smallNumbers[e],n=n.replace(a[0],"")}}if(n)if(n.match(/^[0-9]+$/))i+=Number(n);else for(let e=0;e<n.length;e++){const t=n[e],r=n.length-e-1;i+=l.default[t]*10**r}return i}function r(e){return e.replace(/[０-９]/g,(e=>String.fromCharCode(e.charCodeAt(0)-65248)))}Object.defineProperty(t,"__esModule",{value:!0}),t.zen2han=t.n2kan=t.kan2n=t.splitLargeNumber=t.normalize=t.smallNumbers=t.largeNumbers=void 0,t.largeNumbers={兆:1e12,億:1e8,万:1e4},t.smallNumbers={千:1e3,百:100,十:10},t.normalize=function(e){for(const t in o.default){const n=new RegExp(t,"g");e=e.replace(n,o.default[t])}return e},t.splitLargeNumber=function(e){let r=e;const i={};for(const e in t.largeNumbers){const t=new RegExp(`(.+)${e}`),a=r.match(t);a?(i[e]=n(a[1]),r=r.replace(a[0],"")):i[e]=0}return i["千"]=r?n(r):0,i},t.kan2n=n,t.n2kan=function(e){const n=Object.keys(l.default);let r=e,i="";for(const e in t.smallNumbers){const a=Math.floor(r/t.smallNumbers[e]);a&&(r-=a*t.smallNumbers[e],i=1===a?`${i}${e}`:`${i}${n[a]}${e}`)}return r&&(i=`${i}${n[r]}`),i},t.zen2han=r})),u=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.findKanjiNumbers=t.number2kanji=t.kanji2number=void 0,t.kanji2number=function(e){if((e=s.normalize(e)).match("〇")||e.match(/^[〇一二三四五六七八九]+$/)){for(const t in l.default){const n=new RegExp(t,"g");e=e.replace(n,l.default[t].toString())}return Number(e)}{let t=0;const n=s.splitLargeNumber(e);for(const e in s.largeNumbers)n[e]&&(t+=s.largeNumbers[e]*n[e]);if(!Number.isInteger(t)||!Number.isInteger(n["千"]))throw new TypeError("The attribute of kanji2number() must be a Japanese numeral as integer.");return t+n["千"]}},t.number2kanji=function(e){if(!e.toString().match(/^[0-9]+$/))throw new TypeError("The attribute of number2kanji() must be integer.");Object.keys(l.default);let t=e,n="";for(const e in s.largeNumbers){const r=Math.floor(t/s.largeNumbers[e]);r&&(t-=r*s.largeNumbers[e],n=`${n}${s.n2kan(r)}${e}`)}return t&&(n=`${n}${s.n2kan(t)}`),n},t.findKanjiNumbers=function(e){const t="([0-9０-９]*)|([〇一二三四五六七八九壱壹弐弍貳貮参參肆伍陸漆捌玖]*)",n=`((${t})(千|阡|仟))?((${t})(百|陌|佰))?((${t})(十|拾))?(${t})?`,r=new RegExp(`((${n}兆)?(${n}億)?(${n}(万|萬))?${n})`,"g"),i=e.match(r);return i?i.filter((e=>!(e.match(/^[0-9０-９]+$/)||!e.length||"兆"===e||"億"===e||"万"===e||"萬"===e))):[]}})),h="https://geolonia.github.io/japanese-addresses/api/ja",c={japaneseAddressesApi:h,townCacheSize:1e3},f=function(e){for(var t=u.findKanjiNumbers(e),n=0;n<t.length;n++)e=e.replace(t[n],u.kanji2number(t[n]));return e},p=function(e){return e.replace(/[Ａ-Ｚａ-ｚ０-９]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)}))},g=[{pref:"香川県",city:"仲多度郡まんのう町",town:"勝浦",pattern:"^字?家6",result:"家六"},{pref:"愛知県",city:"あま市",town:"西今宿",pattern:"^字?梶村1",result:"梶村一"},{pref:"香川県",city:"丸亀市",town:"原田町",pattern:"^字?東三分1",result:"東三分一"}],d="亞,圍,壹,榮,驛,應,櫻,假,會,懷,覺,樂,陷,歡,氣,戲,據,挾,區,徑,溪,輕,藝,儉,圈,權,嚴,恆,國,齋,雜,蠶,殘,兒,實,釋,從,縱,敍,燒,條,剩,壤,釀,眞,盡,醉,髓,聲,竊,淺,錢,禪,爭,插,騷,屬,對,滯,擇,單,斷,癡,鑄,敕,鐵,傳,黨,鬪,屆,腦,廢,發,蠻,拂,邊,瓣,寶,沒,滿,藥,餘,樣,亂,兩,禮,靈,爐,灣,惡,醫,飮,營,圓,歐,奧,價,繪,擴,學,罐,勸,觀,歸,犧,擧,狹,驅,莖,經,繼,缺,劍,檢,顯,廣,鑛,碎,劑,參,慘,絲,辭,舍,壽,澁,肅,將,證,乘,疊,孃,觸,寢,圖,穗,樞,齊,攝,戰,潛,雙,莊,裝,藏,續,體,臺,澤,膽,彈,蟲,廳,鎭,點,燈,盜,獨,貳,霸,賣,髮,祕,佛,變,辯,豐,飜,默,與,譽,謠,覽,獵,勵,齡,勞,壓,爲,隱,衞,鹽,毆,穩,畫,壞,殼,嶽,卷,關,顏,僞,舊,峽,曉,勳,惠,螢,鷄,縣,險,獻,驗,效,號,濟,册,棧,贊,齒,濕,寫,收,獸,處,稱,奬,淨,繩,讓,囑,愼,粹,隨,數,靜,專,踐,纖,壯,搜,總,臟,墮,帶,瀧,擔,團,遲,晝,聽,遞,轉,當,稻,讀,惱,拜,麥,拔,濱,竝,辨,舖,襃,萬,譯,豫,搖,來,龍,壘,隸,戀,樓,鰺,鶯,蠣,攪,竈,灌,諫,頸,礦,蘂,靱,賤,壺,礪,檮,濤,邇,蠅,檜,儘,藪,籠,彌".split(/,/),v="亜,囲,壱,栄,駅,応,桜,仮,会,懐,覚,楽,陥,歓,気,戯,拠,挟,区,径,渓,軽,芸,倹,圏,権,厳,恒,国,斎,雑,蚕,残,児,実,釈,従,縦,叙,焼,条,剰,壌,醸,真,尽,酔,髄,声,窃,浅,銭,禅,争,挿,騒,属,対,滞,択,単,断,痴,鋳,勅,鉄,伝,党,闘,届,脳,廃,発,蛮,払,辺,弁,宝,没,満,薬,余,様,乱,両,礼,霊,炉,湾,悪,医,飲,営,円,欧,奥,価,絵,拡,学,缶,勧,観,帰,犠,挙,狭,駆,茎,経,継,欠,剣,検,顕,広,鉱,砕,剤,参,惨,糸,辞,舎,寿,渋,粛,将,証,乗,畳,嬢,触,寝,図,穂,枢,斉,摂,戦,潜,双,荘,装,蔵,続,体,台,沢,胆,弾,虫,庁,鎮,点,灯,盗,独,弐,覇,売,髪,秘,仏,変,弁,豊,翻,黙,与,誉,謡,覧,猟,励,齢,労,圧,為,隠,衛,塩,殴,穏,画,壊,殻,岳,巻,関,顔,偽,旧,峡,暁,勲,恵,蛍,鶏,県,険,献,験,効,号,済,冊,桟,賛,歯,湿,写,収,獣,処,称,奨,浄,縄,譲,嘱,慎,粋,随,数,静,専,践,繊,壮,捜,総,臓,堕,帯,滝,担,団,遅,昼,聴,逓,転,当,稲,読,悩,拝,麦,抜,浜,並,弁,舗,褒,万,訳,予,揺,来,竜,塁,隷,恋,楼,鯵,鴬,蛎,撹,竃,潅,諌,頚,砿,蕊,靭,賎,壷,砺,梼,涛,迩,蝿,桧,侭,薮,篭,弥".split(/,/),m=d.map((function(e,t){return[e+"|"+v[t],e,v[t]]})),y=function(e){var t=e;return function(e){for(var t=e,n=0;n<m.length;n++){var r=m[n],i=r[0],a=r[1],o=r[2];t=t.replace(new RegExp(i,"g"),"("+a+"|"+o+")")}return t}(t=t.replace(/三栄町|四谷三栄町/g,"(三栄町|四谷三栄町)").replace(/鬮野川|くじ野川|くじの川/g,"(鬮野川|くじ野川|くじの川)").replace(/通り|とおり/g,"(通り|とおり)").replace(/埠頭|ふ頭/g,"(埠頭|ふ頭)").replace(/番町|番丁/g,"(番町|番丁)").replace(/大冝|大宜/g,"(大冝|大宜)").replace(/穝|さい/g,"(穝|さい)").replace(/杁|えぶり/g,"(杁|えぶり)").replace(/薭|稗|ひえ|ヒエ/g,"(薭|稗|ひえ|ヒエ)").replace(/[之ノの]/g,"[之ノの]").replace(/[ヶケが]/g,"[ヶケが]").replace(/[ヵカか力]/g,"[ヵカか力]").replace(/[ッツっつ]/g,"[ッツっつ]").replace(/[ニ二]/g,"[ニ二]").replace(/[ハ八]/g,"[ハ八]").replace(/塚|塚/g,"(塚|塚)").replace(/釜|竈/g,"(釜|竈)").replace(/條|条/g,"(條|条)").replace(/狛|拍/g,"(狛|拍)").replace(/藪|薮/g,"(藪|薮)").replace(/渕|淵/g,"(渕|淵)").replace(/エ|ヱ|え/g,"(エ|ヱ|え)").replace(/曾|曽/g,"(曾|曽)").replace(/舟|船/g,"(舟|船)").replace(/莵|菟/g,"(莵|菟)").replace(/市|巿/g,"(市|巿)"))},b=w;function w(e){var t=this;if(t instanceof w||(t=new w),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var n=0,r=arguments.length;n<r;n++)t.push(arguments[n]);return t}function x(e,t,n){var r=t===e.head?new A(n,null,t,e):new A(n,t,t.next,e);return null===r.next&&(e.tail=r),null===r.prev&&(e.head=r),e.length++,r}function j(e,t){e.tail=new A(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function k(e,t){e.head=new A(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function A(e,t,n,r){if(!(this instanceof A))return new A(e,t,n,r);this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null}w.Node=A,w.create=w,w.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,n=e.prev;return t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null,t},w.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},w.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},w.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)j(this,arguments[e]);return this.length},w.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)k(this,arguments[e]);return this.length},w.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},w.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},w.prototype.forEach=function(e,t){t=t||this;for(var n=this.head,r=0;null!==n;r++)e.call(t,n.value,r,this),n=n.next},w.prototype.forEachReverse=function(e,t){t=t||this;for(var n=this.tail,r=this.length-1;null!==n;r--)e.call(t,n.value,r,this),n=n.prev},w.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)n=n.next;if(t===e&&null!==n)return n.value},w.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)n=n.prev;if(t===e&&null!==n)return n.value},w.prototype.map=function(e,t){t=t||this;for(var n=new w,r=this.head;null!==r;)n.push(e.call(t,r.value,this)),r=r.next;return n},w.prototype.mapReverse=function(e,t){t=t||this;for(var n=new w,r=this.tail;null!==r;)n.push(e.call(t,r.value,this)),r=r.prev;return n},w.prototype.reduce=function(e,t){var n,r=this.head;if(arguments.length>1)n=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");r=this.head.next,n=this.head.value}for(var i=0;null!==r;i++)n=e(n,r.value,i),r=r.next;return n},w.prototype.reduceReverse=function(e,t){var n,r=this.tail;if(arguments.length>1)n=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");r=this.tail.prev,n=this.tail.value}for(var i=this.length-1;null!==r;i--)n=e(n,r.value,i),r=r.prev;return n},w.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next;return e},w.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev;return e},w.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new w;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var r=0,i=this.head;null!==i&&r<e;r++)i=i.next;for(;null!==i&&r<t;r++,i=i.next)n.push(i.value);return n},w.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new w;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var r=this.length,i=this.tail;null!==i&&r>t;r--)i=i.prev;for(;null!==i&&r>e;r--,i=i.prev)n.push(i.value);return n},w.prototype.splice=function(e,t,...n){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var r=0,i=this.head;null!==i&&r<e;r++)i=i.next;var a=[];for(r=0;i&&r<t;r++)a.push(i.value),i=this.removeNode(i);for(null===i&&(i=this.tail),i!==this.head&&i!==this.tail&&(i=i.prev),r=0;r<n.length;r++)i=x(this,i,n[r]);return a},w.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var r=n.prev;n.prev=n.next,n.next=r}return this.head=t,this.tail=e,this};try{!function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}(w)}catch(e){}const N=Symbol("max"),$=Symbol("length"),S=Symbol("lengthCalculator"),E=Symbol("allowStale"),R=Symbol("maxAge"),O=Symbol("dispose"),C=Symbol("noDisposeOnSet"),T=Symbol("lruList"),M=Symbol("cache"),_=Symbol("updateAgeOnGet"),P=()=>1;const I=(e,t,n)=>{const r=e[M].get(t);if(r){const t=r.value;if(L(e,t)){if(z(e,r),!e[E])return}else n&&(e[_]&&(r.value.now=Date.now()),e[T].unshiftNode(r));return t.value}},L=(e,t)=>{if(!t||!t.maxAge&&!e[R])return!1;const n=Date.now()-t.now;return t.maxAge?n>t.maxAge:e[R]&&n>e[R]},U=e=>{if(e[$]>e[N])for(let t=e[T].tail;e[$]>e[N]&&null!==t;){const n=t.prev;z(e,t),t=n}},z=(e,t)=>{if(t){const n=t.value;e[O]&&e[O](n.key,n.value),e[$]-=n.length,e[M].delete(n.key),e[T].removeNode(t)}};class K{constructor(e,t,n,r,i){this.key=e,this.value=t,this.length=n,this.now=r,this.maxAge=i||0}}const D=(e,t,n,r)=>{let i=n.value;L(e,i)&&(z(e,n),e[E]||(i=void 0)),i&&t.call(r,i.value,i.key,e)};var F=new class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[N]=e.max||1/0;const t=e.length||P;if(this[S]="function"!=typeof t?P:t,this[E]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number");this[R]=e.maxAge||0,this[O]=e.dispose,this[C]=e.noDisposeOnSet||!1,this[_]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[N]=e||1/0,U(this)}get max(){return this[N]}set allowStale(e){this[E]=!!e}get allowStale(){return this[E]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[R]=e,U(this)}get maxAge(){return this[R]}set lengthCalculator(e){"function"!=typeof e&&(e=P),e!==this[S]&&(this[S]=e,this[$]=0,this[T].forEach((e=>{e.length=this[S](e.value,e.key),this[$]+=e.length}))),U(this)}get lengthCalculator(){return this[S]}get length(){return this[$]}get itemCount(){return this[T].length}rforEach(e,t){t=t||this;for(let n=this[T].tail;null!==n;){const r=n.prev;D(this,e,n,t),n=r}}forEach(e,t){t=t||this;for(let n=this[T].head;null!==n;){const r=n.next;D(this,e,n,t),n=r}}keys(){return this[T].toArray().map((e=>e.key))}values(){return this[T].toArray().map((e=>e.value))}reset(){this[O]&&this[T]&&this[T].length&&this[T].forEach((e=>this[O](e.key,e.value))),this[M]=new Map,this[T]=new b,this[$]=0}dump(){return this[T].map((e=>!L(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[T]}set(e,t,n){if((n=n||this[R])&&"number"!=typeof n)throw new TypeError("maxAge must be a number");const r=n?Date.now():0,i=this[S](t,e);if(this[M].has(e)){if(i>this[N])return z(this,this[M].get(e)),!1;const a=this[M].get(e).value;return this[O]&&(this[C]||this[O](e,a.value)),a.now=r,a.maxAge=n,a.value=t,this[$]+=i-a.length,a.length=i,this.get(e),U(this),!0}const a=new K(e,t,i,r,n);return a.length>this[N]?(this[O]&&this[O](e,t),!1):(this[$]+=a.length,this[T].unshift(a),this[M].set(e,this[T].head),U(this),!0)}has(e){if(!this[M].has(e))return!1;const t=this[M].get(e).value;return!L(this,t)}get(e){return I(this,e,!0)}peek(e){return I(this,e,!1)}pop(){const e=this[T].tail;return e?(z(this,e),e.value):null}del(e){z(this,this[M].get(e))}load(e){this.reset();const t=Date.now();for(let n=e.length-1;n>=0;n--){const r=e[n],i=r.e||0;if(0===i)this.set(r.k,r.v);else{const e=i-t;e>0&&this.set(r.k,r.v,e)}}}prune(){this[M].forEach(((e,t)=>I(this,t,!1)))}}({max:c.townCacheSize,maxAge:6048e5}),H=void 0,B={},G=void 0,q={},J={},W={},X=void 0,Q=function(e){return G=e},V=function(e,t){var n=B[e];if(void 0!==n)return n;t.sort((function(e,t){return t.length-e.length}));var r=t.map((function(e){var t="^"+y(e);return e.match(/(町|村)$/)&&(t="^"+y(e).replace(/(.+?)郡/,"($1郡)?")),[e,t]}));return B[e]=r,r},Y=function(e,t){return n(void 0,void 0,void 0,(function(){var n,i,a;return r(this,(function(r){switch(r.label){case 0:return void 0!==(i=q[n=e+"-"+t])?[2,i]:[4,oe.fetch(["",encodeURI(e),encodeURI(t)+".json"].join("/"))];case 1:return[4,r.sent().json()];case 2:return a=r.sent(),[2,q[n]=a]}}))}))},Z=function(e,t,i){return n(void 0,void 0,void 0,(function(){var n,a,o,l;return r(this,(function(r){switch(r.label){case 0:return void 0!==(a=J[n=e+"-"+t+"-"+i])?[2,a]:[4,oe.fetch(["",encodeURI(e),encodeURI(t),encodeURI(i+".json")].join("/"))];case 1:o=r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,o.json()];case 3:return l=r.sent(),[3,5];case 4:return r.sent(),l=[],[3,5];case 5:return[2,J[n]=l]}}))}))},ee=function(e,t,i){return n(void 0,void 0,void 0,(function(){var n,a,o,l;return r(this,(function(r){switch(r.label){case 0:return void 0!==(a=W[n=e+"-"+t+"-"+i])?[2,a]:[4,oe.fetch(["",encodeURI(e),encodeURI(t),encodeURI(i),encodeURI("住居表示.json")].join("/"))];case 1:o=r.sent(),r.label=2;case 2:return r.trys.push([2,4,,5]),[4,o.json()];case 3:return l=r.sent(),[3,5];case 4:return r.sent(),l=[],[3,5];case 5:return l.sort((function(e,t){return(t.gaiku+"-"+t.jyukyo).length-(e.gaiku+"-"+e.jyukyo).length})),[2,W[n]=l]}}))}))},te=function(e,i){return n(void 0,void 0,void 0,(function(){var n,a,o,l,s,h,c,p,g,d,v;return r(this,(function(r){switch(r.label){case 0:return void 0!==(n=F.get(e+"-"+i))?[2,n]:[4,Y(e,i)];case 1:for(a=r.sent(),o=new Set(a.map((function(e){return e.town}))),l=[],s=i.match(/^京都市/),h=0,c=a;h<c.length;h++)p=c[h],l.push(p),-1!==(g=p.town).indexOf("町")&&(d=g.replace(/(?!^町)町/g,""),s||o.has(d)||o.has("大字"+d)||(m=void 0,(m=g.match(/.町/g))&&u.findKanjiNumbers(m[0]).length>0)||l.push(t(t({},p),{originalTown:g,town:d})));return l.sort((function(e,t){var n=e.town.length,r=t.town.length;return e.town.startsWith("大字")&&(n-=2),t.town.startsWith("大字")&&(r-=2),r-n})),v=l.map((function(e){var t=y(e.town.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g,"[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]").replace(/大?字/g,"(大?字)?").replace(/([壱一二三四五六七八九十]+)(丁目?|番(町|丁)|条|軒|線|(の|ノ)町|地割|号)/g,(function(e){var t=[];if(t.push(e.toString().replace(/(丁目?|番(町|丁)|条|軒|線|(の|ノ)町|地割|号)/,"")),e.match(/^壱/))t.push("一"),t.push("1"),t.push("１");else{var n=e.replace(/([一二三四五六七八九十]+)/g,(function(e){return f(e)})).replace(/(丁目?|番(町|丁)|条|軒|線|(の|ノ)町|地割|号)/,"");t.push(n.toString())}return"("+t.join("|")+")((丁|町)目?|番(町|丁)|条|軒|線|の町?|地割|号|[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━])"})));return[e,t]})),F.set(e+"-"+i,v),[2,v]}var m}))}))};var ne=i(Object.freeze({__proto__:null,default:function(e,t){return t=t||{},new Promise((function(n,r){var i=new XMLHttpRequest,a=[],o=[],l={},s=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:s,headers:{keys:function(){return a},entries:function(){return o},get:function(e){return l[e.toLowerCase()]},has:function(e){return e.toLowerCase()in l}}}};for(var u in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){a.push(t=t.toLowerCase()),o.push([t,n]),l[t]=l[t]?l[t]+","+n:n})),n(s())},i.onerror=r,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(u,t.headers[u]);i.send(t.body||null)}))}})),re=self.fetch||(self.fetch=ne.default||ne),ie=c,ae={level:3},oe={fetch:function(e){var t=new URL(""+ie.japaneseAddressesApi+e).toString();return ie.geoloniaApiKey&&(t+="?geolonia-api-key="+ie.geoloniaApiKey),re(t)}},le=function(e,t,i){return n(void 0,void 0,void 0,(function(){var n,a,o,l,s,u,h,c,f,p,g,d;return r(this,(function(r){switch(r.label){case 0:return e=e.trim().replace(/^大字/,""),[4,te(t,i)];case 1:for(n=r.sent(),a=["^"],i.match(/^京都市/)&&a.push(".*"),o=0,l=a;o<l.length;o++)for(s=l[o],u=0,h=n;u<h.length;u++)if(c=h[u],f=c[0],p=c[1],g=new RegExp(""+s+p),d=e.match(g))return[2,{town:f.originalTown||f.town,addr:e.substr(d[0].length),lat:f.lat,lng:f.lng}];return[2]}}))}))},se=function(e,t,i,a){return n(void 0,void 0,void 0,(function(){var n,o,l,s,u,h,c,f,p,g;return r(this,(function(r){switch(r.label){case 0:return[4,Promise.all([Z(t,i,a),ee(t,i,a)])];case 1:if(n=r.sent(),o=n[0],l=n[1],0===o.length)return[2,null];if(s=e.match(/^([1-9][0-9]*)-([1-9][0-9]*)/)){if(u=s[1],h=s[2],c=u+"-"+h,f=l.find((function(e){return e.gaiku+"-"+e.jyukyo===c})))return g=e.replace(c,"").trim(),[2,{gaiku:u,jyukyo:h,addr:g,lat:f.lat,lng:f.lng}];if(p=o.find((function(e){return e.gaiku===u})))return g=e.replace(p.gaiku,"").trim(),[2,{gaiku:u,addr:g,lat:p.lat,lng:p.lng}]}return[2,null]}}))}))},ue=ie,he=function(e,i){return void 0===i&&(i=ae),n(void 0,void 0,void 0,(function(){var a,o,l,s,c,d,v,m,y,b,w,x,j,k,A,N,$,S,E,R,O,C,T,M,_,P,I,L;return r(this,(function(U){switch(U.label){case 0:return((a=t(t({},ae),i)).geoloniaApiKey||ie.geoloniaApiKey)&&(a.level=8,a.geoloniaApiKey&&(ie.geoloniaApiKey=a.geoloniaApiKey),ie.japaneseAddressesApi===h&&(ie.japaneseAddressesApi="https://japanese-addresses.geolonia.com/next/ja")),o=e.normalize("NFC").replace(/　/g," ").replace(/ +/g," ").replace(/([０-９Ａ-Ｚａ-ｚ]+)/g,(function(e){return p(e)})).replace(/([0-9０-９一二三四五六七八九〇十百千][-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━])|([-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━])[0-9０-９一二三四五六七八九〇十]/g,(function(e){return e.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g,"-")})).replace(/(.+)(丁目?|番(町|地|丁)|条|軒|線|(の|ノ)町|地割)/,(function(e){return e.replace(/ /g,"")})).replace(/(.+)((郡.+(町|村))|((市|巿).+(区|區)))/,(function(e){return e.replace(/ /g,"")})).replace(/.+?[0-9一二三四五六七八九〇十百千]-/,(function(e){return e.replace(/ /g,"")})),l="",s="",c="",d=null,v=null,m=0,y=null,[4,n(void 0,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return void 0!==G?[2,G]:[4,oe.fetch(".json")];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),[2,Q(e)]}}))}))];case 1:for(b=U.sent(),w=Object.keys(b),x=function(e){return H||(H=e.map((function(e){var t=e.replace(/(都|道|府|県)$/,"");return[e,"^"+t+"(都|道|府|県)?"]})))}(w),j=function(e,t){if(void 0!==X)return X;var n=e.map((function(e){return e.replace(/[都|道|府|県]$/,"")}));for(var r in X=[],t)for(var i=0;i<t[r].length;i++)for(var a=t[r][i],o=0;o<n.length;o++)0===a.indexOf(n[o])&&X.push([""+r+a,"^"+a]);return X}(w,b),T=0;T<j.length;T++)if(k=j[T],A=k[0],N=k[1],I=o.match(N)){o=o.replace(new RegExp(N),A);break}for(T=0;T<x.length;T++)if($=x[T],E=$[0],P=$[1],I=o.match(P)){l=E,o=o.substring(I[0].length);break}if(l)return[3,6];for(E in S=[],b)for(O=b[E],C=V(E,O),o=o.trim(),T=0;T<C.length;T++)R=C[T],_=R[0],P=R[1],(I=o.match(P))&&S.push({pref:E,city:_,addr:o.substring(I[0].length)});return 1!==S.length?[3,2]:(l=S[0].pref,[3,6]);case 2:T=0,U.label=3;case 3:return T<S.length?[4,le(S[T].addr,S[T].pref,S[T].city)]:[3,6];case 4:U.sent()&&(l=S[T].pref),U.label=5;case 5:return T++,[3,3];case 6:if(l&&a.level>=2)for(O=b[l],C=V(l,O),o=o.trim(),T=0;T<C.length;T++)if(M=C[T],_=M[0],P=M[1],I=o.match(P)){s=_,o=o.substring(I[0].length);break}return s&&a.level>=3?[4,le(o,l,s)]:[3,8];case 7:(y=U.sent())&&(c=y.town,o=y.addr,d=parseFloat(y.lat),v=parseFloat(y.lng),(Number.isNaN(d)||Number.isNaN(v))&&(d=null,v=null)),c&&(o=o.replace(/^-/,"").replace(/([0-9]+)(丁目)/g,(function(e){return e.replace(/([0-9]+)/g,(function(e){return u.number2kanji(Number(e))}))})).replace(/(([0-9〇一二三四五六七八九十百千]+)(番地?)([0-9〇一二三四五六七八九十百千]+)号)\s*(.+)/,"$1 $5").replace(/([0-9〇一二三四五六七八九十百千]+)(番地?)([0-9〇一二三四五六七八九十百千]+)号?/,"$1-$3").replace(/([0-9〇一二三四五六七八九十百千]+)番地?/,"$1").replace(/([0-9〇一二三四五六七八九十百千]+)の/g,"$1-").replace(/([0-9〇一二三四五六七八九十百千]+)[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g,(function(e){return f(e).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g,"-")})).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]([0-9〇一二三四五六七八九十百千]+)/g,(function(e){return f(e).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g,"-")})).replace(/([0-9〇一二三四五六七八九十百千]+)-/,(function(e){return f(e)})).replace(/-([0-9〇一二三四五六七八九十百千]+)/,(function(e){return f(e)})).replace(/-[^0-9]+([0-9〇一二三四五六七八九十百千]+)/,(function(e){return f(p(e))})).replace(/([0-9〇一二三四五六七八九十百千]+)$/,(function(e){return f(e)})).trim()),U.label=8;case 8:return o=function(e,t,n,r){for(var i=r,a=0;a<g.length;a++){var o=g[a];o.pref===e&&o.city===t&&o.town===n&&(i=i.replace(new RegExp(o.pattern),o.result))}return i}(l,s,c,o),a.level>3&&y&&c?[4,se(o,l,s,c)]:[3,10];case 9:y=U.sent(),U.label=10;case 10:return y&&(d=parseFloat(y.lat),v=parseFloat(y.lng)),(Number.isNaN(d)||Number.isNaN(v))&&(d=null,v=null),l&&(m+=1),s&&(m+=1),c&&(m+=1),L={pref:l,city:s,town:c,addr:o,lat:d,lng:v,level:m},y&&"gaiku"in y&&(L.addr=y.addr,L.gaiku=y.gaiku,L.level=7),y&&"jyukyo"in y&&(L.jyukyo=y.jyukyo,L.level=8),[2,L]}}))}))};e.config=ue,e.normalize=he,Object.defineProperty(e,"__esModule",{value:!0})}(t)},811:(e,t,n)=>{"use strict";n.r(t),n.d(t,{closest:()=>a,distance:()=>i});const r=new Uint32Array(65536),i=(e,t)=>{if(e.length<t.length){const n=t;t=e,e=n}return 0===t.length?e.length:e.length<=32?((e,t)=>{const n=e.length,i=t.length,a=1<<n-1;let o=-1,l=0,s=n,u=n;for(;u--;)r[e.charCodeAt(u)]|=1<<u;for(u=0;u<i;u++){let e=r[t.charCodeAt(u)];const n=e|l;e|=(e&o)+o^o,l|=~(e|o),o&=e,l&a&&s++,o&a&&s--,l=l<<1|1,o=o<<1|~(n|l),l&=n}for(u=n;u--;)r[e.charCodeAt(u)]=0;return s})(e,t):((e,t)=>{const n=t.length,i=e.length,a=[],o=[],l=Math.ceil(n/32),s=Math.ceil(i/32);for(let e=0;e<l;e++)o[e]=-1,a[e]=0;let u=0;for(;u<s-1;u++){let l=0,s=-1;const h=32*u,c=Math.min(32,i)+h;for(let t=h;t<c;t++)r[e.charCodeAt(t)]|=1<<t;for(let e=0;e<n;e++){const n=r[t.charCodeAt(e)],i=o[e/32|0]>>>e&1,u=a[e/32|0]>>>e&1,h=n|l,c=((n|u)&s)+s^s|n|u;let f=l|~(c|s),p=s&c;f>>>31^i&&(o[e/32|0]^=1<<e),p>>>31^u&&(a[e/32|0]^=1<<e),f=f<<1|i,p=p<<1|u,s=p|~(h|f),l=f&h}for(let t=h;t<c;t++)r[e.charCodeAt(t)]=0}let h=0,c=-1;const f=32*u,p=Math.min(32,i-f)+f;for(let t=f;t<p;t++)r[e.charCodeAt(t)]|=1<<t;let g=i;for(let e=0;e<n;e++){const n=r[t.charCodeAt(e)],l=o[e/32|0]>>>e&1,s=a[e/32|0]>>>e&1,u=n|h,f=((n|s)&c)+c^c|n|s;let p=h|~(f|c),d=c&f;g+=p>>>i-1&1,g-=d>>>i-1&1,p>>>31^l&&(o[e/32|0]^=1<<e),d>>>31^s&&(a[e/32|0]^=1<<e),p=p<<1|l,d=d<<1|s,c=d|~(u|p),h=p&u}for(let t=f;t<p;t++)r[e.charCodeAt(t)]=0;return g})(e,t)},a=(e,t)=>{let n=1/0,r=0;for(let a=0;a<t.length;a++){const o=i(e,t[a]);o<n&&(n=o,r=a)}return t[r]}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=n(402),{distance:t}=n(811),r=document.getElementById("form"),i=document.getElementById("list");r.addEventListener("submit",(async n=>{n.preventDefault();const r=n.currentTarget.input.value;if(!r)return;const a=await e.normalize(r);if(a.level>=2){i.innerHTML="";const e=a.town+a.addr,n=await fetch(`https://geolonia.github.io/japanese-addresses/api/ja/${a.pref}/${a.city}.json`),r=(await n.json()).map((n=>{const r=Math.max(e.length,n.town.length),i=Math.abs(r-t(e,n.town))/r;return{...n,score:i}})).filter((e=>e.score>0));if(r.sort(((e,t)=>t.score-e.score)),r.length>0)for(const e of r){const t=document.createElement("li");t.textContent=`${e.town} (スコア: ${e.score})`,i.append(t)}else{const e=document.createElement("li");e.textContent="候補が見つかりませんでした",i.append(e)}}}))})()})();