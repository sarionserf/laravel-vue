/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var j=["require","exports","vs/base/common/platform","vs/base/common/path","vs/base/common/process","fs","vs/base/node/terminalEncoding","child_process","vs/nls!vs/platform/environment/node/argv","vs/platform/environment/node/argv","vs/platform/environment/node/stdin","os","vs/platform/environment/node/wait","vs/nls","vs/nls!vs/server/remoteCli","minimist","vs/server/remoteCli","url","http"],V=function(F){for(var t=[],y=0,E=F.length;y<E;y++)t[y]=j[F[y]];return t};define(j[2],V([0,1]),function(F,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isLittleEndian=t.OS=t.OperatingSystem=t.setImmediate=t.translationsConfigFile=t.locale=t.Language=t.language=t.userAgent=t.platform=t.isIOS=t.isWeb=t.isNative=t.isLinuxSnap=t.isLinux=t.isMacintosh=t.isWindows=t.PlatformToString=t.Platform=t.isElectronSandboxed=t.globals=void 0;const y="en";let E=!1,d=!1,M=!1,D=!1,O=!1,A=!1,P=!1,$,k=y,L,m;t.globals=typeof self=="object"?self:typeof global=="object"?global:{};let c;typeof t.globals.vscode!="undefined"&&typeof t.globals.vscode.process!="undefined"?c=t.globals.vscode.process:typeof process!="undefined"&&(c=process);const b=typeof c?.versions?.electron=="string"&&c.type==="renderer";if(t.isElectronSandboxed=b&&c?.sandboxed,typeof navigator=="object"&&!b)m=navigator.userAgent,E=m.indexOf("Windows")>=0,d=m.indexOf("Macintosh")>=0,P=(m.indexOf("Macintosh")>=0||m.indexOf("iPad")>=0||m.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0,M=m.indexOf("Linux")>=0,A=!0,$=navigator.language,k=$;else if(typeof c=="object"){E=c.platform==="win32",d=c.platform==="darwin",M=c.platform==="linux",D=M&&!!c.env.SNAP&&!!c.env.SNAP_REVISION,$=y,k=y;const i=c.env.VSCODE_NLS_CONFIG;if(i)try{const a=JSON.parse(i),s=a.availableLanguages["*"];$=a.locale,k=s||y,L=a._translationsConfigFile}catch(a){}O=!0}else console.error("Unable to resolve platform.");var p;(function(i){i[i.Web=0]="Web",i[i.Mac=1]="Mac",i[i.Linux=2]="Linux",i[i.Windows=3]="Windows"})(p=t.Platform||(t.Platform={}));function T(i){switch(i){case 0:return"Web";case 1:return"Mac";case 2:return"Linux";case 3:return"Windows"}}t.PlatformToString=T;let I=0;d?I=1:E?I=3:M&&(I=2),t.isWindows=E,t.isMacintosh=d,t.isLinux=M,t.isLinuxSnap=D,t.isNative=O,t.isWeb=A,t.isIOS=P,t.platform=I,t.userAgent=m,t.language=k;var e;(function(i){function a(){return t.language}i.value=a;function s(){return t.language.length===2?t.language==="en":t.language.length>=3?t.language[0]==="e"&&t.language[1]==="n"&&t.language[2]==="-":!1}i.isDefaultVariant=s;function f(){return t.language==="en"}i.isDefault=f})(e=t.Language||(t.Language={})),t.locale=$,t.translationsConfigFile=L,t.setImmediate=function(){if(t.globals.setImmediate)return t.globals.setImmediate.bind(t.globals);if(typeof t.globals.postMessage=="function"&&!t.globals.importScripts){let s=[];t.globals.addEventListener("message",u=>{if(u.data&&u.data.vscodeSetImmediateId)for(let v=0,g=s.length;v<g;v++){const C=s[v];if(C.id===u.data.vscodeSetImmediateId){s.splice(v,1),C.callback();return}}});let f=0;return u=>{const v=++f;s.push({id:v,callback:u}),t.globals.postMessage({vscodeSetImmediateId:v},"*")}}if(typeof c?.nextTick=="function")return c.nextTick.bind(c);const a=Promise.resolve();return s=>a.then(s)}();var n;(function(i){i[i.Windows=1]="Windows",i[i.Macintosh=2]="Macintosh",i[i.Linux=3]="Linux"})(n=t.OperatingSystem||(t.OperatingSystem={})),t.OS=d||P?2:E?1:3;let r=!0,l=!1;function o(){if(!l){l=!0;const i=new Uint8Array(2);i[0]=1,i[1]=2,r=new Uint16Array(i.buffer)[0]===(2<<8)+1}return r}t.isLittleEndian=o}),define(j[4],V([0,1,2]),function(F,t,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.arch=t.nextTick=t.platform=t.env=t.cwd=void 0;let E;if(typeof y.globals.vscode!="undefined"&&typeof y.globals.vscode.process!="undefined"){const d=y.globals.vscode.process;E={get platform(){return d.platform},get arch(){return d.arch},get env(){return d.env},cwd(){return d.cwd()},nextTick(M){return(0,y.setImmediate)(M)}}}else typeof process!="undefined"?E={get platform(){return process.platform},get arch(){return process.arch},get env(){return process.env},cwd(){return process.env.VSCODE_CWD||process.cwd()},nextTick(d){return process.nextTick(d)}}:E={get platform(){return y.isWindows?"win32":y.isMacintosh?"darwin":"linux"},get arch(){},nextTick(d){return(0,y.setImmediate)(d)},get env(){return{}},cwd(){return"/"}};t.cwd=E.cwd,t.env=E.env,t.platform=E.platform,t.nextTick=E.nextTick,t.arch=E.arch}),define(j[3],V([0,1,4]),function(F,t,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delimiter=t.sep=t.toNamespacedPath=t.parse=t.format=t.extname=t.basename=t.dirname=t.relative=t.resolve=t.join=t.isAbsolute=t.normalize=t.posix=t.win32=void 0;const E=65,d=97,M=90,D=122,O=46,A=47,P=92,$=58,k=63;class L extends Error{constructor(n,r,l){let o;typeof r=="string"&&r.indexOf("not ")===0?(o="must not be",r=r.replace(/^not /,"")):o="must be";const i=n.indexOf(".")!==-1?"property":"argument";let a=`The "${n}" ${i} ${o} of type ${r}`;a+=`. Received type ${typeof l}`,super(a),this.code="ERR_INVALID_ARG_TYPE"}}function m(e,n){if(typeof e!="string")throw new L(n,"string",e)}function c(e){return e===A||e===P}function b(e){return e===A}function p(e){return e>=E&&e<=M||e>=d&&e<=D}function T(e,n,r,l){let o="",i=0,a=-1,s=0,f=0;for(let u=0;u<=e.length;++u){if(u<e.length)f=e.charCodeAt(u);else{if(l(f))break;f=A}if(l(f)){if(!(a===u-1||s===1))if(s===2){if(o.length<2||i!==2||o.charCodeAt(o.length-1)!==O||o.charCodeAt(o.length-2)!==O){if(o.length>2){const v=o.lastIndexOf(r);v===-1?(o="",i=0):(o=o.slice(0,v),i=o.length-1-o.lastIndexOf(r)),a=u,s=0;continue}else if(o.length!==0){o="",i=0,a=u,s=0;continue}}n&&(o+=o.length>0?`${r}..`:"..",i=2)}else o.length>0?o+=`${r}${e.slice(a+1,u)}`:o=e.slice(a+1,u),i=u-a-1;a=u,s=0}else f===O&&s!==-1?++s:s=-1}return o}function I(e,n){if(n===null||typeof n!="object")throw new L("pathObject","Object",n);const r=n.dir||n.root,l=n.base||`${n.name||""}${n.ext||""}`;return r?r===n.root?`${r}${l}`:`${r}${e}${l}`:l}t.win32={resolve(...e){let n="",r="",l=!1;for(let o=e.length-1;o>=-1;o--){let i;if(o>=0){if(i=e[o],m(i,"path"),i.length===0)continue}else n.length===0?i=y.cwd():(i=y.env[`=${n}`]||y.cwd(),(i===void 0||i.slice(0,2).toLowerCase()!==n.toLowerCase()&&i.charCodeAt(2)===P)&&(i=`${n}\\`));const a=i.length;let s=0,f="",u=!1;const v=i.charCodeAt(0);if(a===1)c(v)&&(s=1,u=!0);else if(c(v))if(u=!0,c(i.charCodeAt(1))){let g=2,C=g;for(;g<a&&!c(i.charCodeAt(g));)g++;if(g<a&&g!==C){const q=i.slice(C,g);for(C=g;g<a&&c(i.charCodeAt(g));)g++;if(g<a&&g!==C){for(C=g;g<a&&!c(i.charCodeAt(g));)g++;(g===a||g!==C)&&(f=`\\\\${q}\\${i.slice(C,g)}`,s=g)}}}else s=1;else p(v)&&i.charCodeAt(1)===$&&(f=i.slice(0,2),s=2,a>2&&c(i.charCodeAt(2))&&(u=!0,s=3));if(f.length>0)if(n.length>0){if(f.toLowerCase()!==n.toLowerCase())continue}else n=f;if(l){if(n.length>0)break}else if(r=`${i.slice(s)}\\${r}`,l=u,u&&n.length>0)break}return r=T(r,!l,"\\",c),l?`${n}\\${r}`:`${n}${r}`||"."},normalize(e){m(e,"path");const n=e.length;if(n===0)return".";let r=0,l,o=!1;const i=e.charCodeAt(0);if(n===1)return b(i)?"\\":e;if(c(i))if(o=!0,c(e.charCodeAt(1))){let s=2,f=s;for(;s<n&&!c(e.charCodeAt(s));)s++;if(s<n&&s!==f){const u=e.slice(f,s);for(f=s;s<n&&c(e.charCodeAt(s));)s++;if(s<n&&s!==f){for(f=s;s<n&&!c(e.charCodeAt(s));)s++;if(s===n)return`\\\\${u}\\${e.slice(f)}\\`;s!==f&&(l=`\\\\${u}\\${e.slice(f,s)}`,r=s)}}}else r=1;else p(i)&&e.charCodeAt(1)===$&&(l=e.slice(0,2),r=2,n>2&&c(e.charCodeAt(2))&&(o=!0,r=3));let a=r<n?T(e.slice(r),!o,"\\",c):"";return a.length===0&&!o&&(a="."),a.length>0&&c(e.charCodeAt(n-1))&&(a+="\\"),l===void 0?o?`\\${a}`:a:o?`${l}\\${a}`:`${l}${a}`},isAbsolute(e){m(e,"path");const n=e.length;if(n===0)return!1;const r=e.charCodeAt(0);return c(r)||n>2&&p(r)&&e.charCodeAt(1)===$&&c(e.charCodeAt(2))},join(...e){if(e.length===0)return".";let n,r;for(let i=0;i<e.length;++i){const a=e[i];m(a,"path"),a.length>0&&(n===void 0?n=r=a:n+=`\\${a}`)}if(n===void 0)return".";let l=!0,o=0;if(typeof r=="string"&&c(r.charCodeAt(0))){++o;const i=r.length;i>1&&c(r.charCodeAt(1))&&(++o,i>2&&(c(r.charCodeAt(2))?++o:l=!1))}if(l){for(;o<n.length&&c(n.charCodeAt(o));)o++;o>=2&&(n=`\\${n.slice(o)}`)}return t.win32.normalize(n)},relative(e,n){if(m(e,"from"),m(n,"to"),e===n)return"";const r=t.win32.resolve(e),l=t.win32.resolve(n);if(r===l||(e=r.toLowerCase(),n=l.toLowerCase(),e===n))return"";let o=0;for(;o<e.length&&e.charCodeAt(o)===P;)o++;let i=e.length;for(;i-1>o&&e.charCodeAt(i-1)===P;)i--;const a=i-o;let s=0;for(;s<n.length&&n.charCodeAt(s)===P;)s++;let f=n.length;for(;f-1>s&&n.charCodeAt(f-1)===P;)f--;const u=f-s,v=a<u?a:u;let g=-1,C=0;for(;C<v;C++){const w=e.charCodeAt(o+C);if(w!==n.charCodeAt(s+C))break;w===P&&(g=C)}if(C!==v){if(g===-1)return l}else{if(u>v){if(n.charCodeAt(s+C)===P)return l.slice(s+C+1);if(C===2)return l.slice(s+C)}a>v&&(e.charCodeAt(o+C)===P?g=C:C===2&&(g=3)),g===-1&&(g=0)}let q="";for(C=o+g+1;C<=i;++C)(C===i||e.charCodeAt(C)===P)&&(q+=q.length===0?"..":"\\..");return s+=g,q.length>0?`${q}${l.slice(s,f)}`:(l.charCodeAt(s)===P&&++s,l.slice(s,f))},toNamespacedPath(e){if(typeof e!="string")return e;if(e.length===0)return"";const n=t.win32.resolve(e);if(n.length<=2)return e;if(n.charCodeAt(0)===P){if(n.charCodeAt(1)===P){const r=n.charCodeAt(2);if(r!==k&&r!==O)return`\\\\?\\UNC\\${n.slice(2)}`}}else if(p(n.charCodeAt(0))&&n.charCodeAt(1)===$&&n.charCodeAt(2)===P)return`\\\\?\\${n}`;return e},dirname(e){m(e,"path");const n=e.length;if(n===0)return".";let r=-1,l=0;const o=e.charCodeAt(0);if(n===1)return c(o)?e:".";if(c(o)){if(r=l=1,c(e.charCodeAt(1))){let s=2,f=s;for(;s<n&&!c(e.charCodeAt(s));)s++;if(s<n&&s!==f){for(f=s;s<n&&c(e.charCodeAt(s));)s++;if(s<n&&s!==f){for(f=s;s<n&&!c(e.charCodeAt(s));)s++;if(s===n)return e;s!==f&&(r=l=s+1)}}}}else p(o)&&e.charCodeAt(1)===$&&(r=n>2&&c(e.charCodeAt(2))?3:2,l=r);let i=-1,a=!0;for(let s=n-1;s>=l;--s)if(c(e.charCodeAt(s))){if(!a){i=s;break}}else a=!1;if(i===-1){if(r===-1)return".";i=r}return e.slice(0,i)},basename(e,n){n!==void 0&&m(n,"ext"),m(e,"path");let r=0,l=-1,o=!0,i;if(e.length>=2&&p(e.charCodeAt(0))&&e.charCodeAt(1)===$&&(r=2),n!==void 0&&n.length>0&&n.length<=e.length){if(n===e)return"";let a=n.length-1,s=-1;for(i=e.length-1;i>=r;--i){const f=e.charCodeAt(i);if(c(f)){if(!o){r=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(f===n.charCodeAt(a)?--a==-1&&(l=i):(a=-1,l=s))}return r===l?l=s:l===-1&&(l=e.length),e.slice(r,l)}for(i=e.length-1;i>=r;--i)if(c(e.charCodeAt(i))){if(!o){r=i+1;break}}else l===-1&&(o=!1,l=i+1);return l===-1?"":e.slice(r,l)},extname(e){m(e,"path");let n=0,r=-1,l=0,o=-1,i=!0,a=0;e.length>=2&&e.charCodeAt(1)===$&&p(e.charCodeAt(0))&&(n=l=2);for(let s=e.length-1;s>=n;--s){const f=e.charCodeAt(s);if(c(f)){if(!i){l=s+1;break}continue}o===-1&&(i=!1,o=s+1),f===O?r===-1?r=s:a!==1&&(a=1):r!==-1&&(a=-1)}return r===-1||o===-1||a===0||a===1&&r===o-1&&r===l+1?"":e.slice(r,o)},format:I.bind(null,"\\"),parse(e){m(e,"path");const n={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return n;const r=e.length;let l=0,o=e.charCodeAt(0);if(r===1)return c(o)?(n.root=n.dir=e,n):(n.base=n.name=e,n);if(c(o)){if(l=1,c(e.charCodeAt(1))){let g=2,C=g;for(;g<r&&!c(e.charCodeAt(g));)g++;if(g<r&&g!==C){for(C=g;g<r&&c(e.charCodeAt(g));)g++;if(g<r&&g!==C){for(C=g;g<r&&!c(e.charCodeAt(g));)g++;g===r?l=g:g!==C&&(l=g+1)}}}}else if(p(o)&&e.charCodeAt(1)===$){if(r<=2)return n.root=n.dir=e,n;if(l=2,c(e.charCodeAt(2))){if(r===3)return n.root=n.dir=e,n;l=3}}l>0&&(n.root=e.slice(0,l));let i=-1,a=l,s=-1,f=!0,u=e.length-1,v=0;for(;u>=l;--u){if(o=e.charCodeAt(u),c(o)){if(!f){a=u+1;break}continue}s===-1&&(f=!1,s=u+1),o===O?i===-1?i=u:v!==1&&(v=1):i!==-1&&(v=-1)}return s!==-1&&(i===-1||v===0||v===1&&i===s-1&&i===a+1?n.base=n.name=e.slice(a,s):(n.name=e.slice(a,i),n.base=e.slice(a,s),n.ext=e.slice(i,s))),a>0&&a!==l?n.dir=e.slice(0,a-1):n.dir=n.root,n},sep:"\\",delimiter:";",win32:null,posix:null},t.posix={resolve(...e){let n="",r=!1;for(let l=e.length-1;l>=-1&&!r;l--){const o=l>=0?e[l]:y.cwd();m(o,"path"),o.length!==0&&(n=`${o}/${n}`,r=o.charCodeAt(0)===A)}return n=T(n,!r,"/",b),r?`/${n}`:n.length>0?n:"."},normalize(e){if(m(e,"path"),e.length===0)return".";const n=e.charCodeAt(0)===A,r=e.charCodeAt(e.length-1)===A;return e=T(e,!n,"/",b),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),n?`/${e}`:e)},isAbsolute(e){return m(e,"path"),e.length>0&&e.charCodeAt(0)===A},join(...e){if(e.length===0)return".";let n;for(let r=0;r<e.length;++r){const l=e[r];m(l,"path"),l.length>0&&(n===void 0?n=l:n+=`/${l}`)}return n===void 0?".":t.posix.normalize(n)},relative(e,n){if(m(e,"from"),m(n,"to"),e===n||(e=t.posix.resolve(e),n=t.posix.resolve(n),e===n))return"";const r=1,l=e.length,o=l-r,i=1,a=n.length-i,s=o<a?o:a;let f=-1,u=0;for(;u<s;u++){const g=e.charCodeAt(r+u);if(g!==n.charCodeAt(i+u))break;g===A&&(f=u)}if(u===s)if(a>s){if(n.charCodeAt(i+u)===A)return n.slice(i+u+1);if(u===0)return n.slice(i+u)}else o>s&&(e.charCodeAt(r+u)===A?f=u:u===0&&(f=0));let v="";for(u=r+f+1;u<=l;++u)(u===l||e.charCodeAt(u)===A)&&(v+=v.length===0?"..":"/..");return`${v}${n.slice(i+f)}`},toNamespacedPath(e){return e},dirname(e){if(m(e,"path"),e.length===0)return".";const n=e.charCodeAt(0)===A;let r=-1,l=!0;for(let o=e.length-1;o>=1;--o)if(e.charCodeAt(o)===A){if(!l){r=o;break}}else l=!1;return r===-1?n?"/":".":n&&r===1?"//":e.slice(0,r)},basename(e,n){n!==void 0&&m(n,"ext"),m(e,"path");let r=0,l=-1,o=!0,i;if(n!==void 0&&n.length>0&&n.length<=e.length){if(n===e)return"";let a=n.length-1,s=-1;for(i=e.length-1;i>=0;--i){const f=e.charCodeAt(i);if(f===A){if(!o){r=i+1;break}}else s===-1&&(o=!1,s=i+1),a>=0&&(f===n.charCodeAt(a)?--a==-1&&(l=i):(a=-1,l=s))}return r===l?l=s:l===-1&&(l=e.length),e.slice(r,l)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===A){if(!o){r=i+1;break}}else l===-1&&(o=!1,l=i+1);return l===-1?"":e.slice(r,l)},extname(e){m(e,"path");let n=-1,r=0,l=-1,o=!0,i=0;for(let a=e.length-1;a>=0;--a){const s=e.charCodeAt(a);if(s===A){if(!o){r=a+1;break}continue}l===-1&&(o=!1,l=a+1),s===O?n===-1?n=a:i!==1&&(i=1):n!==-1&&(i=-1)}return n===-1||l===-1||i===0||i===1&&n===l-1&&n===r+1?"":e.slice(n,l)},format:I.bind(null,"/"),parse(e){m(e,"path");const n={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return n;const r=e.charCodeAt(0)===A;let l;r?(n.root="/",l=1):l=0;let o=-1,i=0,a=-1,s=!0,f=e.length-1,u=0;for(;f>=l;--f){const v=e.charCodeAt(f);if(v===A){if(!s){i=f+1;break}continue}a===-1&&(s=!1,a=f+1),v===O?o===-1?o=f:u!==1&&(u=1):o!==-1&&(u=-1)}if(a!==-1){const v=i===0&&r?1:i;o===-1||u===0||u===1&&o===a-1&&o===i+1?n.base=n.name=e.slice(v,a):(n.name=e.slice(v,o),n.base=e.slice(v,a),n.ext=e.slice(o,a))}return i>0?n.dir=e.slice(0,i-1):r&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null},t.posix.win32=t.win32.win32=t.win32,t.posix.posix=t.win32.posix=t.posix,t.normalize=y.platform==="win32"?t.win32.normalize:t.posix.normalize,t.isAbsolute=y.platform==="win32"?t.win32.isAbsolute:t.posix.isAbsolute,t.join=y.platform==="win32"?t.win32.join:t.posix.join,t.resolve=y.platform==="win32"?t.win32.resolve:t.posix.resolve,t.relative=y.platform==="win32"?t.win32.relative:t.posix.relative,t.dirname=y.platform==="win32"?t.win32.dirname:t.posix.dirname,t.basename=y.platform==="win32"?t.win32.basename:t.posix.basename,t.extname=y.platform==="win32"?t.win32.extname:t.posix.extname,t.format=y.platform==="win32"?t.win32.format:t.posix.format,t.parse=y.platform==="win32"?t.win32.parse:t.posix.parse,t.toNamespacedPath=y.platform==="win32"?t.win32.toNamespacedPath:t.posix.toNamespacedPath,t.sep=y.platform==="win32"?t.win32.sep:t.posix.sep,t.delimiter=y.platform==="win32"?t.win32.delimiter:t.posix.delimiter}),define(j[6],V([0,1,7,2]),function(F,t,y,E){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resolveTerminalEncoding=void 0;const d={"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","863":"cp863","865":"cp865","866":"cp866","869":"cp869","936":"cp936","1252":"cp1252"};function M(P){const $=P.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();return D[$]||$}const D={ibm866:"cp866",big5:"cp950"},O="utf8";async function A(P){let $;const k=process.env.VSCODE_CLI_ENCODING;k?(P&&console.log(`Found VSCODE_CLI_ENCODING variable: ${k}`),$=Promise.resolve(k)):E.isWindows?$=new Promise(m=>{P&&console.log('Running "chcp" to detect terminal encoding...'),(0,y.exec)("chcp",(c,b,p)=>{if(b){P&&console.log(`Output from "chcp" command is: ${b}`);const T=Object.keys(d);for(const I of T)if(b.indexOf(I)>=0)return m(d[I])}return m(void 0)})}):$=new Promise(m=>{P&&console.log('Running "locale charmap" to detect terminal encoding...'),(0,y.exec)("locale charmap",(c,b,p)=>m(b))});const L=await $;return P&&console.log(`Detected raw terminal encoding: ${L}`),!L||L.toLowerCase()==="utf-8"||L.toLowerCase()===O?O:M(L)}t.resolveTerminalEncoding=A}),define(j[8],V([13,14]),function(F,t){return F.create("vs/platform/environment/node/argv",t)}),define(j[9],V([0,1,15,2,8]),function(F,t,y,E,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildVersionMessage=t.buildHelpMessage=t.formatOptions=t.parseArgs=t.OPTIONS=void 0;const M={o:(0,d.localize)(0,null),e:(0,d.localize)(1,null),t:(0,d.localize)(2,null)};t.OPTIONS={diff:{type:"boolean",cat:"o",alias:"d",args:["file","file"],description:(0,d.localize)(3,null)},add:{type:"boolean",cat:"o",alias:"a",args:"folder",description:(0,d.localize)(4,null)},goto:{type:"boolean",cat:"o",alias:"g",args:"file:line[:character]",description:(0,d.localize)(5,null)},"new-window":{type:"boolean",cat:"o",alias:"n",description:(0,d.localize)(6,null)},"reuse-window":{type:"boolean",cat:"o",alias:"r",description:(0,d.localize)(7,null)},wait:{type:"boolean",cat:"o",alias:"w",description:(0,d.localize)(8,null)},waitMarkerFilePath:{type:"string"},locale:{type:"string",cat:"o",args:"locale",description:(0,d.localize)(9,null)},"user-data-dir":{type:"string",cat:"o",args:"dir",description:(0,d.localize)(10,null)},help:{type:"boolean",cat:"o",alias:"h",description:(0,d.localize)(11,null)},"extensions-dir":{type:"string",deprecates:"extensionHomePath",cat:"e",args:"dir",description:(0,d.localize)(12,null)},"extensions-download-dir":{type:"string"},"builtin-extensions-dir":{type:"string"},"list-extensions":{type:"boolean",cat:"e",description:(0,d.localize)(13,null)},"show-versions":{type:"boolean",cat:"e",description:(0,d.localize)(14,null)},category:{type:"string",cat:"e",description:(0,d.localize)(15,null),args:"category"},"install-extension":{type:"string[]",cat:"e",args:"extension-id[@version] | path-to-vsix",description:(0,d.localize)(16,null)},"uninstall-extension":{type:"string[]",cat:"e",args:"extension-id",description:(0,d.localize)(17,null)},"enable-proposed-api":{type:"string[]",cat:"e",args:"extension-id",description:(0,d.localize)(18,null)},version:{type:"boolean",cat:"t",alias:"v",description:(0,d.localize)(19,null)},verbose:{type:"boolean",cat:"t",description:(0,d.localize)(20,null)},log:{type:"string",cat:"t",args:"level",description:(0,d.localize)(21,null)},status:{type:"boolean",alias:"s",cat:"t",description:(0,d.localize)(22,null)},"prof-startup":{type:"boolean",cat:"t",description:(0,d.localize)(23,null)},"prof-append-timers":{type:"string"},"no-cached-data":{type:"boolean"},"prof-startup-prefix":{type:"string"},"prof-v8-extensions":{type:"boolean"},"disable-extensions":{type:"boolean",deprecates:"disableExtensions",cat:"t",description:(0,d.localize)(24,null)},"disable-extension":{type:"string[]",cat:"t",args:"extension-id",description:(0,d.localize)(25,null)},sync:{type:"string",cat:"t",description:(0,d.localize)(26,null),args:["on","off"]},"inspect-extensions":{type:"string",deprecates:"debugPluginHost",args:"port",cat:"t",description:(0,d.localize)(27,null)},"inspect-brk-extensions":{type:"string",deprecates:"debugBrkPluginHost",args:"port",cat:"t",description:(0,d.localize)(28,null)},"disable-gpu":{type:"boolean",cat:"t",description:(0,d.localize)(29,null)},"ms-enable-electron-run-as-node":{type:"boolean"},"max-memory":{type:"string",cat:"t",description:(0,d.localize)(30,null),args:"memory"},telemetry:{type:"boolean",cat:"t",description:(0,d.localize)(31,null)},remote:{type:"string"},"folder-uri":{type:"string[]",cat:"o",args:"uri"},"file-uri":{type:"string[]",cat:"o",args:"uri"},"locate-extension":{type:"string[]"},extensionDevelopmentPath:{type:"string[]"},extensionDevelopmentKind:{type:"string[]"},extensionTestsPath:{type:"string"},extensionEnvironment:{type:"string"},debugId:{type:"string"},debugRenderer:{type:"boolean"},"inspect-ptyhost":{type:"string"},"inspect-brk-ptyhost":{type:"string"},"inspect-search":{type:"string",deprecates:"debugSearch"},"inspect-brk-search":{type:"string",deprecates:"debugBrkSearch"},"export-default-configuration":{type:"string"},"install-source":{type:"string"},driver:{type:"string"},logExtensionHostCommunication:{type:"boolean"},"skip-release-notes":{type:"boolean"},"skip-welcome":{type:"boolean"},"disable-telemetry":{type:"boolean"},"disable-updates":{type:"boolean"},"disable-keytar":{type:"boolean"},"disable-workspace-trust":{type:"boolean"},"disable-crash-reporter":{type:"boolean"},"crash-reporter-directory":{type:"string"},"crash-reporter-id":{type:"string"},"skip-add-to-recently-opened":{type:"boolean"},"unity-launch":{type:"boolean"},"open-url":{type:"boolean"},"file-write":{type:"boolean"},"file-chmod":{type:"boolean"},"driver-verbose":{type:"boolean"},"install-builtin-extension":{type:"string[]"},force:{type:"boolean"},"do-not-sync":{type:"boolean"},trace:{type:"boolean"},"trace-category-filter":{type:"string"},"trace-options":{type:"string"},"force-user-env":{type:"boolean"},"force-disable-user-env":{type:"boolean"},"open-devtools":{type:"boolean"},__sandbox:{type:"boolean"},logsPath:{type:"string"},"no-proxy-server":{type:"boolean"},"no-sandbox":{type:"boolean",alias:"sandbox"},"proxy-server":{type:"string"},"proxy-bypass-list":{type:"string"},"proxy-pac-url":{type:"string"},"js-flags":{type:"string"},inspect:{type:"string"},"inspect-brk":{type:"string"},nolazy:{type:"boolean"},"force-device-scale-factor":{type:"string"},"force-renderer-accessibility":{type:"boolean"},"ignore-certificate-errors":{type:"boolean"},"allow-insecure-localhost":{type:"boolean"},"log-net-log":{type:"string"},vmodule:{type:"string"},_urls:{type:"string[]"},_:{type:"string[]"}};const D={onUnknownOption:()=>{},onMultipleValues:()=>{}};function O(c,b,p=D){const T={},I=[],e=[];for(let o in b){const i=b[o];i.alias&&(T[o]=i.alias),i.type==="string"||i.type==="string[]"?(I.push(o),i.deprecates&&I.push(i.deprecates)):i.type==="boolean"&&(e.push(o),i.deprecates&&e.push(i.deprecates))}const n=y(c,{string:I,boolean:e,alias:T}),r={},l=n;r._=n._.map(o=>String(o)).filter(o=>o.length>0),delete l._;for(let o in b){const i=b[o];i.alias&&delete l[i.alias];let a=l[o];i.deprecates&&l.hasOwnProperty(i.deprecates)&&(a||(a=l[i.deprecates]),delete l[i.deprecates]),typeof a!="undefined"&&(i.type==="string[]"?a&&!Array.isArray(a)&&(a=[a]):i.type==="string"&&Array.isArray(a)&&(a=a.pop(),p.onMultipleValues(o,a)),r[o]=a),delete l[o]}for(let o in l)p.onUnknownOption(o);return r}t.parseArgs=O;function A(c,b){let p="";return b.args&&(Array.isArray(b.args)?p=` <${b.args.join("> <")}>`:p=` <${b.args}>`),b.alias?`-${b.alias} --${c}${p}`:`--${c}${p}`}function P(c,b){let p=0,T=[];for(const r in c){const l=c[r],o=A(r,l);p=Math.max(p,o.length),T.push([o,l.description])}let I=p+2+1;if(b-I<25)return T.reduce((r,l)=>r.concat([`  ${l[0]}`,`      ${l[1]}`]),[]);let e=b-I-1,n=[];for(const r of T){let l=r[0],o=k(r[1],e),i=$(I-l.length-2);n.push("  "+l+i+o[0]);for(let a=1;a<o.length;a++)n.push($(I)+o[a])}return n}t.formatOptions=P;function $(c){return" ".repeat(c)}function k(c,b){let p=[];for(;c.length;){let T=c.length<b?c.length:c.lastIndexOf(" ",b),I=c.slice(0,T).trim();c=c.slice(T),p.push(I)}return p}function L(c,b,p,T,I=!0){const e=process.stdout.isTTY&&process.stdout.columns||80;let n=[`${c} ${p}`];n.push(""),n.push(`${(0,d.localize)(32,null)}: ${b} [${(0,d.localize)(33,null)}][${(0,d.localize)(34,null)}...]`),n.push(""),I&&(E.isWindows?n.push((0,d.localize)(35,null,b)):n.push((0,d.localize)(36,null,b)),n.push(""));const r={};for(const l in T){const o=T[l];if(o.description&&o.cat){let i=r[o.cat];i||(r[o.cat]=i={}),i[l]=o}}for(let l in r){const o=l;let i=r[o];i&&(n.push(M[o]),n.push(...P(i,e)),n.push(""))}return n.join(`
`)}t.buildHelpMessage=L;function m(c,b){return`${c||(0,d.localize)(37,null)}
${b||(0,d.localize)(38,null)}
${process.arch}`}t.buildVersionMessage=m}),define(j[10],V([0,1,5,11,3,6]),function(F,t,y,E,d,M){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readFromStdin=t.getStdinFilePath=t.stdinDataListener=t.hasStdinWithoutTty=void 0;function D(){try{return!process.stdin.isTTY}catch($){}return!1}t.hasStdinWithoutTty=D;function O($){return new Promise(k=>{const L=()=>k(!0);setTimeout(()=>{process.stdin.removeListener("data",L),k(!1)},$),process.stdin.once("data",L)})}t.stdinDataListener=O;function A(){return d.join(E.tmpdir(),`code-stdin-${Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,3)}`)}t.getStdinFilePath=A;async function P($,k){const L=y.createWriteStream($);let m=await(0,M.resolveTerminalEncoding)(k);const c=await new Promise((p,T)=>{F(["iconv-lite-umd"],p,T)});c.encodingExists(m)||(console.log(`Unsupported terminal encoding: ${m}, falling back to UTF-8.`),m="utf8");const b=c.getDecoder(m);process.stdin.on("data",p=>L.write(b.write(p))),process.stdin.on("end",()=>{const p=b.end();typeof p=="string"&&L.write(p),L.end()}),process.stdin.on("error",p=>L.destroy(p)),process.stdin.on("close",()=>L.close())}t.readFromStdin=P}),define(j[12],V([0,1,5,11,3]),function(F,t,y,E,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createWaitMarkerFile=void 0;function M(D){const O=(0,d.join)((0,E.tmpdir)(),Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,10));try{return y.writeFileSync(O,""),D&&console.log(`Marker file for --wait created: ${O}`),O}catch(A){D&&console.error(`Failed to create marker file for --wait: ${A}`);return}}t.createWaitMarkerFile=M}),define(j[16],V([0,1,5,17,7,18,4,3,9,12,10]),function(F,t,y,E,d,M,D,O,A,P,$){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.main=void 0;const k=w=>{switch(w){case"user-data-dir":case"extensions-dir":case"export-default-configuration":case"install-source":case"driver":case"extensions-download-dir":case"builtin-extensions-dir":case"telemetry":return!1;default:return!0}},L=w=>{switch(w){case"version":case"help":case"folder-uri":case"file-uri":case"add":case"diff":case"wait":case"goto":case"reuse-window":case"new-window":case"status":case"install-extension":case"uninstall-extension":case"list-extensions":case"force":case"show-versions":case"category":return!0;default:return!1}},m=process.env.VSCODE_IPC_HOOK_CLI,c=process.env.VSCODE_CLIENT_COMMAND,b=process.env.VSCODE_CLIENT_COMMAND_CWD,p=process.env.VSCODE_CLI_AUTHORITY,T=process.env.VSCODE_STDIN_FILE_PATH;function I(w,z){if(!m&&!c){console.log("Command is only available in WSL or inside a Visual Studio Code terminal.");return}const N={...A.OPTIONS},G=c?k:L;for(const S in A.OPTIONS){const _=S;G(_)||delete N[_]}m&&(N.openExternal={type:"boolean"});const K={onMultipleValues:(S,_)=>{console.error(`Option ${S} can only be defined once. Using value ${_}.`)},onUnknownOption:S=>{console.error(`Ignoring option ${S}: not supported for ${w.executableName}.`)}},h=(0,A.parseArgs)(z,N,K),R=p?f:S=>S;if(h.help){console.log((0,A.buildHelpMessage)(w.productName,w.executableName,w.version,N,!0));return}if(h.version){console.log((0,A.buildVersionMessage)(w.version,w.commit));return}if(m&&h.openExternal){n(h._);return}let B=(h["folder-uri"]||[]).map(R);h["folder-uri"]=B;let Y=(h["file-uri"]||[]).map(R);h["file-uri"]=Y;let X=h._,J=!1;for(let S of X)S==="-"?J=!0:s(S,R,B,Y);if(h._=[],J&&Y.length===0&&B.length===0&&(0,$.hasStdinWithoutTty)())try{let S=T;S||(S=(0,$.getStdinFilePath)(),(0,$.readFromStdin)(S,!!h.verbose)),s(S,R,B,Y),h.wait=!0,h["skip-add-to-recently-opened"]=!0,console.log(`Reading from stdin via: ${S}`)}catch(S){console.log(`Failed to create file to read via stdin: ${S.toString()}`)}h.extensionDevelopmentPath&&(h.extensionDevelopmentPath=h.extensionDevelopmentPath.map(S=>R(a(S).href))),h.extensionTestsPath&&(h.extensionTestsPath=R(a(h.extensionTestsPath).href));const Z=h["crash-reporter-directory"];if(Z!==void 0&&!Z.match(/^([a-zA-Z]:[\\\/])/)){console.log(`The crash reporter directory '${Z}' must be an absolute Windows path (e.g. c:/crashes)`);return}if(p&&(h.remote=p),c){if(h["install-extension"]!==void 0||h["uninstall-extension"]!==void 0||h["list-extensions"]){const W=[];h["install-extension"]?.forEach(U=>W.push("--install-extension",U)),h["uninstall-extension"]?.forEach(U=>W.push("--uninstall-extension",U)),["list-extensions","force","show-versions","category"].forEach(U=>{const Q=h[U];Q!==void 0&&W.push(`--${U}=${Q}`)}),d.fork((0,O.join)(__dirname,"main.js"),W,{stdio:"inherit"}).on("error",U=>console.log(U));return}let S=[];for(let W in h){let H=h[W];if(typeof H=="boolean")H&&S.push("--"+W);else if(Array.isArray(H))for(let U of H)S.push(`--${W}=${U.toString()}`);else H&&S.push(`--${W}=${H.toString()}`)}const _=(0,O.extname)(c);if(_===".bat"||_===".cmd"){const W=b||(0,D.cwd)();h.verbose&&console.log(`Invoking: cmd.exe /C ${c} ${S.join(" ")} in ${W}`),d.spawn("cmd.exe",["/C",c,...S],{stdio:"inherit",cwd:W})}else{const W=(0,O.dirname)(c),H={...process.env,ELECTRON_RUN_AS_NODE:"1"};S.unshift("--ms-enable-electron-run-as-node"),S.unshift("resources/app/out/cli.js"),h.verbose&&console.log(`Invoking: ${c} ${S.join(" ")} in ${W}`),d.spawn(c,S,{cwd:W,env:H,stdio:["inherit"]})}}else{if(z.length===0){console.log((0,A.buildHelpMessage)(w.productName,w.executableName,w.version,N,!0));return}if(h.status){r({type:"status"}).then(_=>{console.log(_)});return}if(h["install-extension"]!==void 0||h["uninstall-extension"]!==void 0||h["list-extensions"]){r({type:"extensionManagement",list:h["list-extensions"]?{showVersions:h["show-versions"],category:h.category}:void 0,install:l(h["install-extension"]),uninstall:l(h["uninstall-extension"]),force:h.force}).then(_=>{console.log(_)});return}if(!Y.length&&!B.length){console.log("At least one file or folder must be provided.");return}let S;if(h.wait){if(!Y.length){console.log("At least one file must be provided to wait for.");return}S=(0,P.createWaitMarkerFile)(h.verbose)}r({type:"open",fileURIs:Y,folderURIs:B,diffMode:h.diff,addMode:h.add,gotoLineMode:h.goto,forceReuseWindow:h["reuse-window"],forceNewWindow:h["new-window"],waitMarkerFilePath:S}),S&&e(S)}}t.main=I;async function e(w){for(;y.existsSync(w);)await new Promise(z=>setTimeout(z,1e3))}function n(w){let z=[];for(let N of w)try{/^(http|https|file):\/\//.test(N)?z.push(E.parse(N).href):z.push(a(N).href)}catch(G){console.log(`Invalid url: ${N}`)}z.length&&r({type:"openExternal",uris:z})}function r(w){return new Promise(z=>{const N=JSON.stringify(w);if(!m){console.log("Message "+N),z("");return}const G={socketPath:m,path:"/",method:"POST"},K=M.request(G,h=>{const R=[];h.setEncoding("utf8"),h.on("data",B=>{R.push(B)}),h.on("error",()=>o("Error in response")),h.on("end",()=>{z(R.join(""))})});K.on("error",()=>o("Error in request")),K.write(N),K.end()})}function l(w){return w?.map(z=>/\.vsix$/i.test(z)?a(z).href:z)}function o(w){console.error("Unable to connect to VS Code server."),console.error(w),process.exit(1)}const i=process.env.PWD||(0,D.cwd)();function a(w){return w=w.trim(),w=(0,O.resolve)(i,w),E.pathToFileURL(w)}function s(w,z,N,G){let K=a(w),h=z(K.href);try{let R=y.lstatSync(y.realpathSync(w));R.isFile()?G.push(h):R.isDirectory()?N.push(h):w==="/dev/null"&&G.push(h)}catch(R){R.code==="ENOENT"?G.push(h):console.log(`Problem accessing file ${w}. Ignoring file`,R)}}function f(w){return w.replace(/^file:\/\//,"vscode-remote://"+p)}let[,,u,v,g,C,...q]=process.argv;I({productName:u,version:v,commit:g,executableName:C},q)})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/core/vs/server/remoteCli.js.map
