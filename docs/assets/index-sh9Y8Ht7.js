var o0=Object.defineProperty;var a0=(s,e,t)=>e in s?o0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var hn=(s,e,t)=>a0(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="170",vo={ROTATE:0,DOLLY:1,PAN:2},po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c0=0,gf=1,l0=2,Om=1,Fm=2,lr=3,br=0,Fn=1,Ci=2,jr=0,yo=1,Yu=2,xf=3,vf=4,u0=5,Ms=100,h0=101,d0=102,f0=103,p0=104,m0=200,_0=201,g0=202,x0=203,$u=204,ju=205,v0=206,y0=207,M0=208,S0=209,b0=210,E0=211,T0=212,A0=213,w0=214,Ku=0,Zu=1,Ju=2,Do=3,Qu=4,eh=5,th=6,nh=7,Bm=0,R0=1,C0=2,Kr=0,P0=1,L0=2,D0=3,km=4,I0=5,N0=6,U0=7,yf="attached",O0="detached",zm=300,Io=301,No=302,ih=303,rh=304,Pl=306,Is=1e3,Hr=1001,ul=1002,Bn=1003,Hm=1004,ma=1005,ii=1006,qc=1007,_r=1008,Er=1009,Vm=1010,Gm=1011,ka=1012,pd=1013,Ns=1014,Di=1015,Ja=1016,md=1017,_d=1018,Uo=1020,Wm=35902,Xm=1021,qm=1022,mi=1023,Ym=1024,$m=1025,Mo=1026,Oo=1027,gd=1028,xd=1029,jm=1030,vd=1031,yd=1033,Yc=33776,$c=33777,jc=33778,Kc=33779,sh=35840,oh=35841,ah=35842,ch=35843,lh=36196,uh=37492,hh=37496,dh=37808,fh=37809,ph=37810,mh=37811,_h=37812,gh=37813,xh=37814,vh=37815,yh=37816,Mh=37817,Sh=37818,bh=37819,Eh=37820,Th=37821,Zc=36492,Ah=36494,wh=36495,Km=36283,Rh=36284,Ch=36285,Ph=36286,za=2300,Ha=2301,Vl=2302,Mf=2400,Sf=2401,bf=2402,F0=2500,B0=0,Zm=1,Lh=2,k0=3200,z0=3201,Jm=0,H0=1,pr="",Xt="srgb",bn="srgb-linear",Ll="linear",St="srgb",Xs=7680,Ef=519,V0=512,G0=513,W0=514,Qm=515,X0=516,q0=517,Y0=518,$0=519,Dh=35044,Tf="300 es",gr=2e3,hl=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const So=Math.PI/180,Fo=180/Math.PI;function Ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function fn(s,e,t){return Math.max(e,Math.min(t,s))}function Md(s,e){return(s%e+e)%e}function j0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function K0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ta(s,e,t){return(1-t)*s+t*e}function Z0(s,e,t,n){return Ta(s,e,1-Math.exp(-t*n))}function J0(s,e=1){return e-Math.abs(Md(s,e*2)-e)}function Q0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nx(s,e){return s+Math.random()*(e-s)}function ix(s){return s*(.5-Math.random())}function rx(s){s!==void 0&&(Af=s);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(s){return s*So}function ox(s){return s*Fo}function ax(s){return(s&s-1)===0&&s!==0}function cx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:So,RAD2DEG:Fo,generateUUID:Ii,clamp:fn,euclideanModulo:Md,mapLinear:j0,inverseLerp:K0,lerp:Ta,damp:Z0,pingpong:J0,smoothstep:Q0,smootherstep:ex,randInt:tx,randFloat:nx,randFloatSpread:ix,seededRandom:rx,degToRad:sx,radToDeg:ox,isPowerOfTwo:ax,ceilPowerOfTwo:cx,floorPowerOfTwo:lx,setQuaternionFromProperEuler:ux,normalize:yt,denormalize:Pi};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],w=i[2],A=i[5],b=i[8];return r[0]=o*_+a*M+c*w,r[3]=o*m+a*S+c*A,r[6]=o*p+a*x+c*b,r[1]=l*_+u*M+h*w,r[4]=l*m+u*S+h*A,r[7]=l*p+u*x+h*b,r[2]=d*_+f*M+g*w,r[5]=d*m+f*S+g*A,r[8]=d*p+f*x+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new Qe;function e_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hx(){const s=Va("canvas");return s.style.display="block",s}const wf={};function _a(s){s in wf||(wf[s]=!0,console.warn(s))}function dx(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function px(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(s.r=bo(s.r),s.g=bo(s.g),s.b=bo(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pr?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rf=[.64,.33,.3,.6,.15,.06],Cf=[.2126,.7152,.0722],Pf=[.3127,.329],Lf=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[bn]:{primaries:Rf,whitePoint:Pf,transfer:Ll,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:Cf,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Rf,whitePoint:Pf,transfer:St,toXYZ:Lf,fromXYZ:Df,luminanceCoefficients:Cf,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let qs;class mx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Va("canvas")),qs.width=e.width,qs.height=e.height;const n=qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _x=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wl(i[o].image)):r.push(Wl(i[o]))}else r=Wl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gx=0;class cn extends Hs{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Hr,i=Hr,r=ii,o=_r,a=mi,c=Er,l=cn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ii(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zm;cn.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,i=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,w=(p+1)/2,A=(u+d)/4,b=(h+_)/4,R=(g+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=b/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=b/r,i=R/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xx extends Hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new t_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends xx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class n_ extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vx extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),A=Math.atan2(w,p*M);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*M;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new I,If=new ji;class Ni{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bi):bi.fromBufferAttribute(r,o),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),nc.subVectors(this.max,ia),Ys.subVectors(e.a,ia),$s.subVectors(e.b,ia),js.subVectors(e.c,ia),Lr.subVectors($s,Ys),Dr.subVectors(js,$s),as.subVectors(Ys,js);let t=[0,-Lr.z,Lr.y,0,-Dr.z,Dr.y,0,-as.z,as.y,Lr.z,0,-Lr.x,Dr.z,0,-Dr.x,as.z,0,-as.x,-Lr.y,Lr.x,0,-Dr.y,Dr.x,0,-as.y,as.x,0];return!ql(t,Ys,$s,js,nc)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,Ys,$s,js,nc))?!1:(ic.crossVectors(Lr,Dr),t=[ic.x,ic.y,ic.z],ql(t,Ys,$s,js,nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nr=[new I,new I,new I,new I,new I,new I,new I,new I],bi=new I,tc=new Ni,Ys=new I,$s=new I,js=new I,Lr=new I,Dr=new I,as=new I,ia=new I,nc=new I,ic=new I,cs=new I;function ql(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){cs.fromArray(s,r);const a=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yx=new Ni,ra=new I,Yl=new I;class Ji{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Yl)),this.expandByPoint(ra.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ir=new I,$l=new I,rc=new I,Ir=new I,jl=new I,sc=new I,Kl=new I;class $o{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$l.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub($l);const r=e.distanceTo(t)*.5,o=-this.direction.dot(rc),a=Ir.dot(this.direction),c=-Ir.dot(rc),l=Ir.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($l).addScaledVector(rc,d),f}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const n=ir.dot(this.direction),i=ir.dot(ir)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,n,i,r){jl.subVectors(t,e),sc.subVectors(n,e),Kl.crossVectors(jl,sc);let o=this.direction.dot(Kl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);const c=a*this.direction.dot(sc.crossVectors(Ir,sc));if(c<0)return null;const l=a*this.direction.dot(jl.cross(Ir));if(l<0||c+l>o)return null;const u=-a*Ir.dot(Kl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mx,e,Sx)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Nr.crossVectors(n,Kn),Nr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Nr.crossVectors(n,Kn)),Nr.normalize(),oc.crossVectors(Kn,Nr),i[0]=Nr.x,i[4]=oc.x,i[8]=Kn.x,i[1]=Nr.y,i[5]=oc.y,i[9]=Kn.y,i[2]=Nr.z,i[6]=oc.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],w=n[15],A=i[0],b=i[4],R=i[8],y=i[12],v=i[1],P=i[5],N=i[9],B=i[13],W=i[2],X=i[6],q=i[10],Y=i[14],V=i[3],te=i[7],L=i[11],he=i[15];return r[0]=o*A+a*v+c*W+l*V,r[4]=o*b+a*P+c*X+l*te,r[8]=o*R+a*N+c*q+l*L,r[12]=o*y+a*B+c*Y+l*he,r[1]=u*A+h*v+d*W+f*V,r[5]=u*b+h*P+d*X+f*te,r[9]=u*R+h*N+d*q+f*L,r[13]=u*y+h*B+d*Y+f*he,r[2]=g*A+_*v+m*W+p*V,r[6]=g*b+_*P+m*X+p*te,r[10]=g*R+_*N+m*q+p*L,r[14]=g*y+_*B+m*Y+p*he,r[3]=M*A+S*v+x*W+w*V,r[7]=M*b+S*P+x*X+w*te,r[11]=M*R+S*N+x*q+w*L,r[15]=M*y+S*B+x*Y+w*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,S=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,w=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=t*M+n*S+i*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=M*b,e[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=S*b,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*b,e[8]=x*b,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=w*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,M=c*l,S=c*u,x=c*h,w=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+x)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*b,i[9]=(m-M)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ks.set(i[0],i[1],i[2]).length();const o=Ks.set(i[4],i[5],i[6]).length(),a=Ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ei.copy(this);const l=1/r,u=1/o,h=1/a;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=u,Ei.elements[5]*=u,Ei.elements[6]*=u,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,t.setFromRotationMatrix(Ei),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=gr){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===gr)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hl)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=gr){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,f=(n+i)*u;let g,_;if(a===gr)g=(o+r)*h,_=-2*h;else if(a===hl)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ks=new I,Ei=new Ke,Mx=new I(0,0,0),Sx=new I(1,1,1),Nr=new I,oc=new I,Kn=new I,Nf=new Ke,Uf=new ji;class Ki{constructor(e=0,t=0,n=0,i=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const Of=new I,Zs=new ji,rr=new Ke,ac=new I,sa=new I,Ex=new I,Tx=new ji,Ff=new I(1,0,0),Bf=new I(0,1,0),kf=new I(0,0,1),zf={type:"added"},Ax={type:"removed"},Js={type:"childadded",child:null},Zl={type:"childremoved",child:null};class Ut extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new Ki,n=new ji,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Qe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ac.copy(e):ac.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(sa,ac,this.up):rr.lookAt(ac,sa,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Zs.setFromRotationMatrix(rr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ax),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new I,sr=new I,Jl=new I,or=new I,Qs=new I,eo=new I,Hf=new I,Ql=new I,eu=new I,tu=new I,nu=new mt,iu=new mt,ru=new mt;class pi{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ti.subVectors(i,t),sr.subVectors(n,t),Jl.subVectors(e,t);const o=Ti.dot(Ti),a=Ti.dot(sr),c=Ti.dot(Jl),l=sr.dot(sr),u=sr.dot(Jl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,or)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,or.x),c.addScaledVector(o,or.y),c.addScaledVector(a,or.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,t),iu.fromBufferAttribute(e,n),ru.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(nu,r.x),o.addScaledVector(iu,r.y),o.addScaledVector(ru,r.z),o}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),sr.subVectors(e,t),Ti.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ti.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Qs.subVectors(i,n),eo.subVectors(r,n),Ql.subVectors(e,n);const c=Qs.dot(Ql),l=eo.dot(Ql);if(c<=0&&l<=0)return t.copy(n);eu.subVectors(e,i);const u=Qs.dot(eu),h=eo.dot(eu);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Qs,o);tu.subVectors(e,r);const f=Qs.dot(tu),g=eo.dot(tu);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(eo,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Hf.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Hf,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Qs,o).addScaledVector(eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},cc={h:0,s:0,l:0};function su(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=Md(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=su(o,r,e+1/3),this.g=su(o,r,e),this.b=su(o,r,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=i_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return at.fromWorkingColorSpace(_n.copy(this),e),Math.round(fn(_n.r*255,0,255))*65536+Math.round(fn(_n.g*255,0,255))*256+Math.round(fn(_n.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Xt){at.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(cc);const n=Ta(Ur.h,cc.h,t),i=Ta(Ur.s,cc.s,t),r=Ta(Ur.l,cc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ue;Ue.NAMES=i_;let wx=0;class qi extends Hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ii(),this.name="",this.blending=yo,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=ju,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$u&&(n.blendSrc=this.blendSrc),this.blendDst!==ju&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xr extends qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new I,lc=new We;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dh&&(e.usage=this.usage),e}}class r_ extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class s_ extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vn extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rx=0;const ci=new Ke,ou=new Ut,to=new I,Zn=new Ni,oa=new Ni,rn=new I;class En extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?s_:r_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vn(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Zn.min,oa.min),Zn.expandByPoint(rn),rn.addVectors(Zn.max,oa.max),Zn.expandByPoint(rn)):(Zn.expandByPoint(oa.min),Zn.expandByPoint(oa.max))}Zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)rn.fromBufferAttribute(a,l),c&&(to.fromBufferAttribute(e,l),rn.add(to)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;const l=new I,u=new I,h=new I,d=new We,f=new We,g=new We,_=new I,m=new I;function p(R,y,v){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[R].add(_),a[y].add(_),a[v].add(_),c[R].add(m),c[y].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,y=M.length;R<y;++R){const v=M[R],P=v.start,N=v.count;for(let B=P,W=P+N;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new I,x=new I,w=new I,A=new I;function b(R){w.fromBufferAttribute(i,R),A.copy(w);const y=a[R];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),x.crossVectors(A,y);const P=x.dot(c[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,y=M.length;R<y;++R){const v=M[R],P=v.start,N=v.count;for(let B=P,W=P+N;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vf=new Ke,ls=new $o,uc=new Ji,Gf=new I,hc=new I,dc=new I,fc=new I,au=new I,pc=new I,Wf=new I,mc=new I;class bt extends Ut{constructor(e=new En,t=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){pc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(au.fromBufferAttribute(h,e),o?pc.addScaledVector(au,u):pc.addScaledVector(au.sub(t),u))}t.add(pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(uc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(uc,Gf)===null||ls.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Vf.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Vf),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=S;x<w;x+=3){const A=a.getX(x),b=a.getX(x+1),R=a.getX(x+2);i=_c(this,p,e,n,l,u,h,A,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=_c(this,o,e,n,l,u,h,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=S;x<w;x+=3){const A=x,b=x+1,R=x+2;i=_c(this,p,e,n,l,u,h,A,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,x=m+2;i=_c(this,o,e,n,l,u,h,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Cx(s,e,t,n,i,r,o,a){let c;if(e.side===Fn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===br,a),c===null)return null;mc.copy(a),mc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(mc);return l<t.near||l>t.far?null:{distance:l,point:mc.clone(),object:s}}function _c(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,hc),s.getVertexPosition(c,dc),s.getVertexPosition(l,fc);const u=Cx(s,e,t,n,hc,dc,fc,Wf);if(u){const h=new I;pi.getBarycoord(Wf,hc,dc,fc,h),i&&(u.uv=pi.getInterpolatedAttribute(i,a,c,l,h,new We)),r&&(u.uv1=pi.getInterpolatedAttribute(r,a,c,l,h,new We)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};pi.getNormal(hc,dc,fc,d.normal),u.face=d,u.barycoord=h}return u}class jo extends En{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Vn(l,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(h,2));function g(_,m,p,M,S,x,w,A,b,R,y){const v=x/b,P=w/R,N=x/2,B=w/2,W=A/2,X=b+1,q=R+1;let Y=0,V=0;const te=new I;for(let L=0;L<q;L++){const he=L*P-B;for(let Ie=0;Ie<X;Ie++){const tt=Ie*v-N;te[_]=tt*M,te[m]=he*S,te[p]=W,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=A>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ie/b),h.push(1-L/R),Y+=1}}for(let L=0;L<R;L++)for(let he=0;he<b;he++){const Ie=d+he+X*L,tt=d+he+X*(L+1),j=d+(he+1)+X*(L+1),ee=d+(he+1)+X*L;c.push(Ie,tt,ee),c.push(tt,j,ee),V+=6}a.addGroup(f,V,y),f+=V,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=Bo(s[t]);for(const i in n)e[i]=n[i]}return e}function Px(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function o_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Lx={clone:Bo,merge:Cn};var Dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class a_ extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new I,Xf=new We,qf=new We;class In extends a_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class Nx extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new In(no,io,e,t);i.layers=this.layers,this.add(i);const r=new In(no,io,e,t);r.layers=this.layers,this.add(r);const o=new In(no,io,e,t);o.layers=this.layers,this.add(o);const a=new In(no,io,e,t);a.layers=this.layers,this.add(a);const c=new In(no,io,e,t);c.layers=this.layers,this.add(c);const l=new In(no,io,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class c_ extends cn{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Io,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ux extends Us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new c_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jo(5,5,5),r=new ns({name:"CubemapFromEquirect",uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:jr});r.uniforms.tEquirect.value=t;const o=new bt(i,r),a=t.minFilter;return t.minFilter===_r&&(t.minFilter=ii),new Nx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const cu=new I,Ox=new I,Fx=new Qe;class dr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cu.subVectors(n,t).cross(Ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fx.getNormalMatrix(e),i=this.coplanarPoint(cu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ji,gc=new I;class bd{constructor(e=new dr,t=new dr,n=new dr,i=new dr,r=new dr,o=new dr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+u,m+g,x+M).normalize(),n[3].setComponents(c-o,d-u,m-g,x-M).normalize(),n[4].setComponents(c-a,d-h,m-_,x-S).normalize(),t===gr)n[5].setComponents(c+a,d+h,m+_,x+S).normalize();else if(t===hl)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gc.x=i.normal.x>0?e.max.x:e.min.x,gc.y=i.normal.y>0?e.max.y:e.min.y,gc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bx(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Dl extends En{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let S=0;S<l;S++){const x=S*h-r;g.push(x,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const S=M+l*p,x=M+l*(p+1),w=M+1+l*(p+1),A=M+1+l*p;f.push(S,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,by=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ky=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:kx,alphahash_pars_fragment:zx,alphamap_fragment:Hx,alphamap_pars_fragment:Vx,alphatest_fragment:Gx,alphatest_pars_fragment:Wx,aomap_fragment:Xx,aomap_pars_fragment:qx,batching_pars_vertex:Yx,batching_vertex:$x,begin_vertex:jx,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:Jx,bumpmap_pars_fragment:Qx,clipping_planes_fragment:ev,clipping_planes_pars_fragment:tv,clipping_planes_pars_vertex:nv,clipping_planes_vertex:iv,color_fragment:rv,color_pars_fragment:sv,color_pars_vertex:ov,color_vertex:av,common:cv,cube_uv_reflection_fragment:lv,defaultnormal_vertex:uv,displacementmap_pars_vertex:hv,displacementmap_vertex:dv,emissivemap_fragment:fv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:_v,envmap_fragment:gv,envmap_common_pars_fragment:xv,envmap_pars_fragment:vv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Lv,envmap_vertex:Mv,fog_vertex:Sv,fog_pars_vertex:bv,fog_fragment:Ev,fog_pars_fragment:Tv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:wv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Iv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Uv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Fv,lights_fragment_begin:Bv,lights_fragment_maps:kv,lights_fragment_end:zv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Vv,logdepthbuf_pars_vertex:Gv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:qv,map_particle_fragment:Yv,map_particle_pars_fragment:$v,metalnessmap_fragment:jv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Zv,morphcolor_vertex:Jv,morphnormal_vertex:Qv,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:ry,normal_pars_vertex:sy,normal_vertex:oy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:uy,iridescence_pars_fragment:hy,opaque_fragment:dy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:_y,dithering_pars_fragment:gy,roughnessmap_fragment:xy,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:My,shadowmap_vertex:Sy,shadowmask_pars_fragment:by,skinbase_vertex:Ey,skinning_pars_vertex:Ty,skinning_vertex:Ay,skinnormal_vertex:wy,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:Py,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Iy,uv_pars_fragment:Ny,uv_pars_vertex:Uy,uv_vertex:Oy,worldpos_vertex:Fy,background_vert:By,background_frag:ky,backgroundCube_vert:zy,backgroundCube_frag:Hy,cube_vert:Vy,cube_frag:Gy,depth_vert:Wy,depth_frag:Xy,distanceRGBA_vert:qy,distanceRGBA_frag:Yy,equirect_vert:$y,equirect_frag:jy,linedashed_vert:Ky,linedashed_frag:Zy,meshbasic_vert:Jy,meshbasic_frag:Qy,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:oM,meshphong_frag:aM,meshphysical_vert:cM,meshphysical_frag:lM,meshtoon_vert:uM,meshtoon_frag:hM,points_vert:dM,points_frag:fM,shadow_vert:pM,shadow_frag:mM,sprite_vert:_M,sprite_frag:gM},ge={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ki={basic:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Cn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Cn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Cn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Cn([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Cn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Cn([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Cn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Cn([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Cn([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Cn([ge.lights,ge.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ki.physical={uniforms:Cn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const xc={r:0,b:0,g:0},hs=new Ki,xM=new Ke;function vM(s,e,t,n,i,r,o){const a=new Ue(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const x=g(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Pl)?(u===void 0&&(u=new bt(new jo(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Bo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),hs.copy(S.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(hs)),u.material.toneMapped=at.getTransfer(x.colorSpace)!==St,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new bt(new Dl(2,2),new ns({name:"BackgroundMaterial",uniforms:Bo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(xc,o_(s)),n.buffers.color.setClear(xc.r,xc.g,xc.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function yM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(v,P,N,B,W){let X=!1;const q=h(B,N,P);r!==q&&(r=q,l(r.object)),X=f(v,B,N,W),X&&g(v,B,N,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,P,N,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,P,N){const B=N.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let q=X[B];return q===void 0&&(q=d(c()),X[B]=q),q}function d(v){const P=[],N=[],B=[];for(let W=0;W<t;W++)P[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,P,N,B){const W=r.attributes,X=P.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){const L=W[V];let he=X[V];if(he===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),L===void 0||L.attribute!==he||he&&L.data!==he.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(v,P,N,B){const W={},X=P.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){let L=X[V];L===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const he={};he.attribute=L,L&&L.data&&(he.data=L.data),W[V]=he,q++}r.attributes=W,r.attributesNum=q,r.index=B}function _(){const v=r.newAttributes;for(let P=0,N=v.length;P<N;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const N=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;N[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),W[v]!==P&&(s.vertexAttribDivisor(v,P),W[v]=P)}function M(){const v=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==v[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function S(v,P,N,B,W,X,q){q===!0?s.vertexAttribIPointer(v,P,N,W,X):s.vertexAttribPointer(v,P,N,B,W,X)}function x(v,P,N,B){_();const W=B.attributes,X=N.getAttributes(),q=P.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let te=W[Y];if(te===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const L=te.normalized,he=te.itemSize,Ie=e.get(te);if(Ie===void 0)continue;const tt=Ie.buffer,j=Ie.type,ee=Ie.bytesPerElement,xe=j===s.INT||j===s.UNSIGNED_INT||te.gpuType===pd;if(te.isInterleavedBufferAttribute){const ne=te.data,Ee=ne.stride,we=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve,ne.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,he/V.locationSize,j,L,Ee*ee,(we+he/V.locationSize*Ve)*ee,xe)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,te.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ne=0;ne<V.locationSize;ne++)S(V.location+ne,he/V.locationSize,j,L,he*ee,he/V.locationSize*ne*ee,xe)}}else if(q!==void 0){const L=q[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(V.location,L);break;case 3:s.vertexAttrib3fv(V.location,L);break;case 4:s.vertexAttrib4fv(V.location,L);break;default:s.vertexAttrib1fv(V.location,L)}}}}M()}function w(){R();for(const v in n){const P=n[v];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[v.id]}function b(v){for(const P in n){const N=n[P];if(N[v.id]===void 0)continue;const B=N[v.id];for(const W in B)u(B[W].object),delete B[W];delete N[v.id]}}function R(){y(),o=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function MM(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function SM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==mi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Er&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Di&&!R)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function bM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new dr,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,S=M*4;let x=p.clippingState||null;c.value=x,x=u(g,d,S,f);for(let w=0;w!==S;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function EM(s){let e=new WeakMap;function t(o,a){return a===ih?o.mapping=Io:a===rh&&(o.mapping=No),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ih||a===rh)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ux(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ed extends a_{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mo=4,Yf=[.125,.215,.35,.446,.526,.582],Ss=20,lu=new Ed,$f=new Ue;let uu=null,hu=0,du=0,fu=!1;const gs=(1+Math.sqrt(5))/2,ro=1/gs,jf=[new I(-gs,ro,0),new I(gs,ro,0),new I(-ro,0,gs),new I(ro,0,gs),new I(0,gs,-ro),new I(0,gs,ro),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,hu,du),this._renderer.xr.enabled=fu,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Ja,format:mi,colorSpace:bn,depthBuffer:!1},i=Kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(r)),this._blurMaterial=AM(r,e,t)}return i}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,lu)}_sceneToCubeUV(e,t,n,i){const a=new In(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($f),u.toneMapping=Kr,u.autoClear=!1;const f=new xr({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new bt(new jo,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy($f),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;vc(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Io||e.mapping===No;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;vc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,lu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jf[(i-r-1)%jf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const p=[];let M=0;for(let b=0;b<Ss;++b){const R=b/_,y=Math.exp(-R*R/2);p.push(y),b===0?M+=y:b<m&&(M+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],w=3*x*(i>S-mo?i-S+mo:0),A=4*(this._cubeSize-x);vc(t,w,A,3*x,2*x),c.setRenderTarget(t),c.render(h,lu)}}function TM(s){const e=[],t=[],n=[];let i=s;const r=s-mo+1+Yf.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-mo?c=Yf[o-s+mo-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,R=A>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(y,_*g*A),S.set(d,m*g*A);const v=[A,A,A,A,A,A];x.set(v,p*g*A)}const w=new En;w.setAttribute("position",new Bt(M,_)),w.setAttribute("uv",new Bt(S,m)),w.setAttribute("faceIndex",new Bt(x,p)),e.push(w),i>mo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kf(s,e,t){const n=new Us(s,e,t);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function AM(s,e,t){const n=new Float32Array(Ss),i=new I(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Zf(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Jf(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ih||c===rh,u=c===Io||c===No;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ih(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Ih(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function RM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_a("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function CM(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){const w=M[S+0],A=M[S+1],b=M[S+2];d.push(w,A,A,b,b,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const w=S+0,A=S+1,b=S+2;d.push(w,A,A,b,b,w)}}else return;const m=new(e_(d)?s_:r_)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function PM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function DM(s,e,t){const n=new WeakMap,i=new mt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*A*4*h),R=new n_(b,w,A,h);R.type=Di,R.needsUpdate=!0;const y=x*4;for(let P=0;P<h;P++){const N=p[P],B=M[P],W=S[P],X=w*A*4*P;for(let q=0;q<N.count;q++){const Y=q*y;g===!0&&(i.fromBufferAttribute(N,q),b[X+Y+0]=i.x,b[X+Y+1]=i.y,b[X+Y+2]=i.z,b[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(B,q),b[X+Y+4]=i.x,b[X+Y+5]=i.y,b[X+Y+6]=i.z,b[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(W,q),b[X+Y+8]=i.x,b[X+Y+9]=i.y,b[X+Y+10]=i.z,b[X+Y+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new We(w,A)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function IM(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class u_ extends cn{constructor(e,t,n,i,r,o,a,c,l,u=Mo){if(u!==Mo&&u!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mo&&(n=Ns),n===void 0&&u===Oo&&(n=Uo),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const h_=new cn,Qf=new u_(1,1),d_=new n_,f_=new vx,p_=new c_,ep=[],tp=[],np=new Float32Array(16),ip=new Float32Array(9),rp=new Float32Array(4);function Ko(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ep[i];if(r===void 0&&(r=new Float32Array(i),ep[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Il(s,e){let t=tp[e];t===void 0&&(t=new Int32Array(e),tp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function NM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function BM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;rp.set(n),s.uniformMatrix2fv(this.addr,!1,rp),nn(t,n)}}function kM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ip.set(n),s.uniformMatrix3fv(this.addr,!1,ip),nn(t,n)}}function zM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;np.set(n),s.uniformMatrix4fv(this.addr,!1,np),nn(t,n)}}function HM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function XM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function jM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qf.compareFunction=Qm,r=Qf):r=h_,t.setTexture2D(e||r,i)}function KM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||f_,i)}function ZM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||p_,i)}function JM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||d_,i)}function QM(s){switch(s){case 5126:return NM;case 35664:return UM;case 35665:return OM;case 35666:return FM;case 35674:return BM;case 35675:return kM;case 35676:return zM;case 5124:case 35670:return HM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function eS(s,e){s.uniform1fv(this.addr,e)}function tS(s,e){const t=Ko(e,this.size,2);s.uniform2fv(this.addr,t)}function nS(s,e){const t=Ko(e,this.size,3);s.uniform3fv(this.addr,t)}function iS(s,e){const t=Ko(e,this.size,4);s.uniform4fv(this.addr,t)}function rS(s,e){const t=Ko(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sS(s,e){const t=Ko(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function oS(s,e){const t=Ko(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aS(s,e){s.uniform1iv(this.addr,e)}function cS(s,e){s.uniform2iv(this.addr,e)}function lS(s,e){s.uniform3iv(this.addr,e)}function uS(s,e){s.uniform4iv(this.addr,e)}function hS(s,e){s.uniform1uiv(this.addr,e)}function dS(s,e){s.uniform2uiv(this.addr,e)}function fS(s,e){s.uniform3uiv(this.addr,e)}function pS(s,e){s.uniform4uiv(this.addr,e)}function mS(s,e,t){const n=this.cache,i=e.length,r=Il(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||h_,r[o])}function _S(s,e,t){const n=this.cache,i=e.length,r=Il(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||f_,r[o])}function gS(s,e,t){const n=this.cache,i=e.length,r=Il(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||p_,r[o])}function xS(s,e,t){const n=this.cache,i=e.length,r=Il(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||d_,r[o])}function vS(s){switch(s){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return cS;case 35668:case 35672:return lS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return xS}}class yS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QM(t.type)}}class MS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vS(t.type)}}class SS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function sp(s,e){s.seq.push(e),s.map[e.id]=e}function bS(s,e,t){const n=s.name,i=n.length;for(pu.lastIndex=0;;){const r=pu.exec(n),o=pu.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){sp(t,l===void 0?new yS(a,s,e):new MS(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new SS(a),sp(t,h)),t=h}}}class Jc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);bS(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function op(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const ES=37297;let TS=0;function AS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ap=new Qe;function wS(s){at._getMatrix(ap,at.workingColorSpace,s);const e=`mat3( ${ap.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case Ll:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+AS(s.getShaderSource(e),o)}else return i}function RS(s,e){const t=wS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CS(s,e){let t;switch(e){case P0:t="Linear";break;case L0:t="Reinhard";break;case D0:t="Cineon";break;case km:t="ACESFilmic";break;case N0:t="AgX";break;case U0:t="Neutral";break;case I0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new I;function PS(){at.getLuminanceCoefficients(yc);const s=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function DS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ga(s){return s!==""}function lp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(s){return s.replace(NS,OS)}const US=new Map;function OS(s,e){let t=et[e];if(t===void 0){const n=US.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}const FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(s){return s.replace(FS,BS)}function BS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Om?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function zS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Io:case No:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function VS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bm:e="ENVMAP_BLENDING_MULTIPLY";break;case R0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function GS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kS(t),l=zS(t),u=HS(t),h=VS(t),d=GS(t),f=LS(t),g=DS(r),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(m=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[dp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?et.tonemapping_pars_fragment:"",t.toneMapping!==Kr?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,RS("linearToOutputTexel",t.outputColorSpace),PS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=Nh(o),o=lp(o,t),o=up(o,t),a=Nh(a),a=lp(a,t),a=up(a,t),o=hp(o),a=hp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,x=M+p+a,w=op(i,i.VERTEX_SHADER,S),A=op(i,i.FRAGMENT_SHADER,x);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(A).trim();let X=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,A);else{const Y=cp(i,w,"vertex"),V=cp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Y+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(A),R=new Jc(i,_),y=IS(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,ES)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let XS=0;class qS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YS(e),t.set(e,n)),n}}class YS{constructor(e){this.id=XS++,this.code=e,this.usedTimes=0}}function $S(s,e,t,n,i,r,o){const a=new Sd,c=new qS,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,P,N,B){const W=N.fog,X=B.geometry,q=y.isMeshStandardMaterial?N.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),V=Y&&Y.mapping===Pl?Y.image.height:null,te=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=L!==void 0?L.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let tt,j,ee,xe;if(te){const ve=ki[te];tt=ve.vertexShader,j=ve.fragmentShader}else tt=y.vertexShader,j=y.fragmentShader,c.update(y),ee=c.getVertexShaderID(y),xe=c.getFragmentShaderID(y);const ne=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,nt=!!y.map,Xe=!!y.matcap,Le=!!Y,U=!!y.aoMap,Tt=!!y.lightMap,Fe=!!y.bumpMap,k=!!y.normalMap,Te=!!y.displacementMap,ct=!!y.emissiveMap,Re=!!y.metalnessMap,C=!!y.roughnessMap,E=y.anisotropy>0,G=y.clearcoat>0,Q=y.dispersion>0,J=y.iridescence>0,K=y.sheen>0,de=y.transmission>0,ae=E&&!!y.anisotropyMap,me=G&&!!y.clearcoatMap,$e=G&&!!y.clearcoatNormalMap,ie=G&&!!y.clearcoatRoughnessMap,oe=J&&!!y.iridescenceMap,Ne=J&&!!y.iridescenceThicknessMap,De=K&&!!y.sheenColorMap,ye=K&&!!y.sheenRoughnessMap,Ze=!!y.specularMap,Oe=!!y.specularColorMap,ht=!!y.specularIntensityMap,D=de&&!!y.transmissionMap,ue=de&&!!y.thicknessMap,$=!!y.gradientMap,Z=!!y.alphaMap,le=y.alphaTest>0,fe=!!y.alphaHash,Be=!!y.extensions;let dt=Kr;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(dt=s.toneMapping);const zt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:j,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:bn,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Xe,envMap:Le,envMapMode:Le&&Y.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Tt,bumpMap:Fe,normalMap:k,displacementMap:d&&Te,emissiveMap:ct,normalMapObjectSpace:k&&y.normalMapType===H0,normalMapTangentSpace:k&&y.normalMapType===Jm,metalnessMap:Re,roughnessMap:C,anisotropy:E,anisotropyMap:ae,clearcoat:G,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:oe,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:Ze,specularColorMap:Oe,specularIntensityMap:ht,transmission:de,transmissionMap:D,thicknessMap:ue,gradientMap:$,opaque:y.transparent===!1&&y.blending===yo&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:fe,combine:y.combine,mapUv:nt&&_(y.map.channel),aoMapUv:U&&_(y.aoMap.channel),lightMapUv:Tt&&_(y.lightMap.channel),bumpMapUv:Fe&&_(y.bumpMap.channel),normalMapUv:k&&_(y.normalMap.channel),displacementMapUv:Te&&_(y.displacementMap.channel),emissiveMapUv:ct&&_(y.emissiveMap.channel),metalnessMapUv:Re&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(y.sheenRoughnessMap.channel),specularMapUv:Ze&&_(y.specularMap.channel),specularColorMapUv:Oe&&_(y.specularColorMap.channel),specularIntensityMapUv:ht&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:ue&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(nt||Z),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===St,decodeVideoTextureEmissive:ct&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===St,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ci,flipSided:y.side===Fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&y.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)v.push(P),v.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const v=g[y.type];let P;if(v){const N=ki[v];P=Lx.clone(N.uniforms)}else P=y.uniforms;return P}function w(y,v){let P;for(let N=0,B=u.length;N<B;N++){const W=u[N];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new WS(s,v,y,r),u.push(P)),P}function A(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function b(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function jS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function KS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||KS),n.length>1&&n.sort(d||fp),i.length>1&&i.sort(d||fp)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ZS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new pp,s.set(n,[o])):i>=r.length?(o=new pp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function JS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function QS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let eb=0;function tb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nb(s){const e=new JS,t=QS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Ke,o=new Ke;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,w=0,A=0,b=0;l.sort(tb);for(let y=0,v=l.length;y<v;y++){const P=l[y],N=P.color,B=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);b++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(N).multiplyScalar(B),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[_]=q;const Y=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(N).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Y=P.shadow,V=t.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=b,n.version=eb++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function mp(s){const e=new nb(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ib(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new mp(s),e.set(i,[a])):r>=o.length?(a=new mp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class rb extends qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cb(s,e,t){let n=new bd;const i=new We,r=new We,o=new mt,a=new rb({depthPacking:z0}),c=new sb,l={},u=t.maxTextureSize,h={[br]:Fn,[Fn]:br,[Ci]:Ci},d=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new En;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Om;let p=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(jr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==lr&&this.type===lr,W=p===lr&&this.type!==lr;for(let X=0,q=A.length;X<q;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,V.mapSize.y=r.y)),V.map===null||B===!0||W===!0){const he=this.type!==lr?{minFilter:Bn,magFilter:Bn}:{};V.map!==null&&V.map.dispose(),V.map=new Us(i.x,i.y,he),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const L=V.getViewportCount();for(let he=0;he<L;he++){const Ie=V.getViewport(he);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),N.viewport(o),V.updateMatrices(Y,he),n=V.getFrustum(),x(b,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===lr&&M(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,P)};function M(A,b){const R=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Us(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,R,f,_,null)}function S(A,b,R,y){let v=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=R.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=v.uuid,B=b.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let X=W[B];X===void 0&&(X=v.clone(),W[B]=X,b.addEventListener("dispose",w)),v=X}if(v.visible=b.visible,v.wireframe=b.wireframe,y===lr?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=R}return v}function x(A,b,R,y,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===lr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const X=B.groups;for(let q=0,Y=X.length;q<Y;q++){const V=X[q],te=W[V.materialIndex];if(te&&te.visible){const L=S(A,te,y,v);A.onBeforeShadow(s,A,b,R,B,L,V),s.renderBufferDirect(R,null,B,L,A,V),A.onAfterShadow(s,A,b,R,B,L,V)}}}else if(W.visible){const X=S(A,W,y,v);A.onBeforeShadow(s,A,b,R,B,X,null),s.renderBufferDirect(R,null,B,X,A,null),A.onAfterShadow(s,A,b,R,B,X,null)}}const N=A.children;for(let B=0,W=N.length;B<W;B++)x(N[B],b,R,y,v)}function w(A){A.target.removeEventListener("dispose",w);for(const R in l){const y=l[R],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const lb={[Ku]:Zu,[Ju]:th,[Qu]:nh,[Do]:eh,[Zu]:Ku,[th]:Ju,[nh]:Qu,[eh]:Do};function ub(s,e){function t(){let D=!1;const ue=new mt;let $=null;const Z=new mt(0,0,0,0);return{setMask:function(le){$!==le&&!D&&(s.colorMask(le,le,le,le),$=le)},setLocked:function(le){D=le},setClear:function(le,fe,Be,dt,zt){zt===!0&&(le*=dt,fe*=dt,Be*=dt),ue.set(le,fe,Be,dt),Z.equals(ue)===!1&&(s.clearColor(le,fe,Be,dt),Z.copy(ue))},reset:function(){D=!1,$=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,$=null,Z=null,le=null;return{setReversed:function(fe){if(ue!==fe){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const dt=le;le=null,this.setClear(dt)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?ne(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(fe){$!==fe&&!D&&(s.depthMask(fe),$=fe)},setFunc:function(fe){if(ue&&(fe=lb[fe]),Z!==fe){switch(fe){case Ku:s.depthFunc(s.NEVER);break;case Zu:s.depthFunc(s.ALWAYS);break;case Ju:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Qu:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){le!==fe&&(ue&&(fe=1-fe),s.clearDepth(fe),le=fe)},reset:function(){D=!1,$=null,Z=null,le=null,ue=!1}}}function i(){let D=!1,ue=null,$=null,Z=null,le=null,fe=null,Be=null,dt=null,zt=null;return{setTest:function(ve){D||(ve?ne(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(ve){ue!==ve&&!D&&(s.stencilMask(ve),ue=ve)},setFunc:function(ve,Ae,Je){($!==ve||Z!==Ae||le!==Je)&&(s.stencilFunc(ve,Ae,Je),$=ve,Z=Ae,le=Je)},setOp:function(ve,Ae,Je){(fe!==ve||Be!==Ae||dt!==Je)&&(s.stencilOp(ve,Ae,Je),fe=ve,Be=Ae,dt=Je)},setLocked:function(ve){D=ve},setClear:function(ve){zt!==ve&&(s.clearStencil(ve),zt=ve)},reset:function(){D=!1,ue=null,$=null,Z=null,le=null,fe=null,Be=null,dt=null,zt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,w=null,A=null,b=new Ue(0,0,0),R=0,y=!1,v=null,P=null,N=null,B=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let te=null,L={};const he=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),tt=new mt().fromArray(he),j=new mt().fromArray(Ie);function ee(D,ue,$,Z){const le=new Uint8Array(4),fe=s.createTexture();s.bindTexture(D,fe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<$;Be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ue+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return fe}const xe={};xe[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(Do),Fe(!1),k(gf),ne(s.CULL_FACE),U(jr);function ne(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Ee(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function we(D,ue){return h[D]!==ue?(s.bindFramebuffer(D,ue),h[D]=ue,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ve(D,ue){let $=f,Z=!1;if(D){$=d.get(ue),$===void 0&&($=[],d.set(ue,$));const le=D.textures;if($.length!==le.length||$[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Be=le.length;fe<Be;fe++)$[fe]=s.COLOR_ATTACHMENT0+fe;$.length=le.length,Z=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Z=!0);Z&&s.drawBuffers($)}function nt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Xe={[Ms]:s.FUNC_ADD,[h0]:s.FUNC_SUBTRACT,[d0]:s.FUNC_REVERSE_SUBTRACT};Xe[f0]=s.MIN,Xe[p0]=s.MAX;const Le={[m0]:s.ZERO,[_0]:s.ONE,[g0]:s.SRC_COLOR,[$u]:s.SRC_ALPHA,[b0]:s.SRC_ALPHA_SATURATE,[M0]:s.DST_COLOR,[v0]:s.DST_ALPHA,[x0]:s.ONE_MINUS_SRC_COLOR,[ju]:s.ONE_MINUS_SRC_ALPHA,[S0]:s.ONE_MINUS_DST_COLOR,[y0]:s.ONE_MINUS_DST_ALPHA,[E0]:s.CONSTANT_COLOR,[T0]:s.ONE_MINUS_CONSTANT_COLOR,[A0]:s.CONSTANT_ALPHA,[w0]:s.ONE_MINUS_CONSTANT_ALPHA};function U(D,ue,$,Z,le,fe,Be,dt,zt,ve){if(D===jr){_===!0&&(Ee(s.BLEND),_=!1);return}if(_===!1&&(ne(s.BLEND),_=!0),D!==u0){if(D!==m||ve!==y){if((p!==Ms||x!==Ms)&&(s.blendEquation(s.FUNC_ADD),p=Ms,x=Ms),ve)switch(D){case yo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yu:s.blendFunc(s.ONE,s.ONE);break;case xf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,w=null,A=null,b.set(0,0,0),R=0,m=D,y=ve}return}le=le||ue,fe=fe||$,Be=Be||Z,(ue!==p||le!==x)&&(s.blendEquationSeparate(Xe[ue],Xe[le]),p=ue,x=le),($!==M||Z!==S||fe!==w||Be!==A)&&(s.blendFuncSeparate(Le[$],Le[Z],Le[fe],Le[Be]),M=$,S=Z,w=fe,A=Be),(dt.equals(b)===!1||zt!==R)&&(s.blendColor(dt.r,dt.g,dt.b,zt),b.copy(dt),R=zt),m=D,y=!1}function Tt(D,ue){D.side===Ci?Ee(s.CULL_FACE):ne(s.CULL_FACE);let $=D.side===Fn;ue&&($=!$),Fe($),D.blending===yo&&D.transparent===!1?U(jr):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function k(D){D!==c0?(ne(s.CULL_FACE),D!==P&&(D===gf?s.cullFace(s.BACK):D===l0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),P=D}function Te(D){D!==N&&(q&&s.lineWidth(D),N=D)}function ct(D,ue,$){D?(ne(s.POLYGON_OFFSET_FILL),(B!==ue||W!==$)&&(s.polygonOffset(ue,$),B=ue,W=$)):Ee(s.POLYGON_OFFSET_FILL)}function Re(D){D?ne(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+X-1),te!==D&&(s.activeTexture(D),te=D)}function E(D,ue,$){$===void 0&&(te===null?$=s.TEXTURE0+X-1:$=te);let Z=L[$];Z===void 0&&(Z={type:void 0,texture:void 0},L[$]=Z),(Z.type!==D||Z.texture!==ue)&&(te!==$&&(s.activeTexture($),te=$),s.bindTexture(D,ue||xe[D]),Z.type=D,Z.texture=ue)}function G(){const D=L[te];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function ye(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Ze(D,ue){let $=l.get(ue);$===void 0&&($=new WeakMap,l.set(ue,$));let Z=$.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(ue,D.name),$.set(D,Z))}function Oe(D,ue){const Z=l.get(ue).get(D);c.get(ue)!==Z&&(s.uniformBlockBinding(ue,Z,D.__bindingPointIndex),c.set(ue,Z))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},te=null,L={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,w=null,A=null,b=new Ue(0,0,0),R=0,y=!1,v=null,P=null,N=null,B=null,W=null,tt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Ee,bindFramebuffer:we,drawBuffers:Ve,useProgram:nt,setBlending:U,setMaterial:Tt,setFlipSided:Fe,setCullFace:k,setLineWidth:Te,setPolygonOffset:ct,setScissorTest:Re,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:oe,texImage3D:Ne,updateUBOMapping:Ze,uniformBlockBinding:Oe,texStorage2D:$e,texStorage3D:ie,texSubImage2D:K,texSubImage3D:de,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:De,viewport:ye,reset:ht}}function _p(s,e,t,n){const i=hb(n);switch(t){case Xm:return s*e;case Ym:return s*e;case $m:return s*e*2;case gd:return s*e/i.components*i.byteLength;case xd:return s*e/i.components*i.byteLength;case jm:return s*e*2/i.components*i.byteLength;case vd:return s*e*2/i.components*i.byteLength;case qm:return s*e*3/i.components*i.byteLength;case mi:return s*e*4/i.components*i.byteLength;case yd:return s*e*4/i.components*i.byteLength;case Yc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(s,16)*Math.max(e,8)/4;case sh:case ah:return Math.max(s,8)*Math.max(e,8)/2;case lh:case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Ah:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Km:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ch:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(s){switch(s){case Er:case Vm:return{byteLength:1,components:1};case ka:case Gm:case Ja:return{byteLength:2,components:1};case md:case _d:return{byteLength:2,components:4};case Ns:case pd:case Di:return{byteLength:4,components:1};case Wm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function db(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):Va("canvas")}function _(C,E,G){let Q=1;const J=Re(C);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Q*J.width),de=Math.floor(Q*J.height);h===void 0&&(h=g(K,de));const ae=E?g(K,de):h;return ae.width=K,ae.height=de,ae.getContext("2d").drawImage(C,0,0,K,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+de+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,E,G,Q,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=E;if(E===s.RED&&(G===s.FLOAT&&(K=s.R32F),G===s.HALF_FLOAT&&(K=s.R16F),G===s.UNSIGNED_BYTE&&(K=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.R8UI),G===s.UNSIGNED_SHORT&&(K=s.R16UI),G===s.UNSIGNED_INT&&(K=s.R32UI),G===s.BYTE&&(K=s.R8I),G===s.SHORT&&(K=s.R16I),G===s.INT&&(K=s.R32I)),E===s.RG&&(G===s.FLOAT&&(K=s.RG32F),G===s.HALF_FLOAT&&(K=s.RG16F),G===s.UNSIGNED_BYTE&&(K=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RG8UI),G===s.UNSIGNED_SHORT&&(K=s.RG16UI),G===s.UNSIGNED_INT&&(K=s.RG32UI),G===s.BYTE&&(K=s.RG8I),G===s.SHORT&&(K=s.RG16I),G===s.INT&&(K=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGB8UI),G===s.UNSIGNED_SHORT&&(K=s.RGB16UI),G===s.UNSIGNED_INT&&(K=s.RGB32UI),G===s.BYTE&&(K=s.RGB8I),G===s.SHORT&&(K=s.RGB16I),G===s.INT&&(K=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),G===s.UNSIGNED_INT&&(K=s.RGBA32UI),G===s.BYTE&&(K=s.RGBA8I),G===s.SHORT&&(K=s.RGBA16I),G===s.INT&&(K=s.RGBA32I)),E===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),E===s.RGBA){const de=J?Ll:at.getTransfer(Q);G===s.FLOAT&&(K=s.RGBA32F),G===s.HALF_FLOAT&&(K=s.RGBA16F),G===s.UNSIGNED_BYTE&&(K=de===St?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,E){let G;return C?E===null||E===Ns||E===Uo?G=s.DEPTH24_STENCIL8:E===Di?G=s.DEPTH32F_STENCIL8:E===ka&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ns||E===Uo?G=s.DEPTH_COMPONENT24:E===Di?G=s.DEPTH_COMPONENT32F:E===ka&&(G=s.DEPTH_COMPONENT16),G}function w(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bn&&C.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),v(E)}function R(C){const E=n.get(C);if(E.__webglInit===void 0)return;const G=C.source,Q=d.get(G);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(Q).length===0&&d.delete(G)}n.remove(C)}function y(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const G=C.source,Q=d.get(G);delete Q[E.__cacheKey],o.memory.textures--}function v(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)s.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else s.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Q]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,J=G.length;Q<J;Q++){const K=n.get(G[Q]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let P=0;function N(){P=0}function B(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const G=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,E);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function q(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function Y(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function V(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ee(G,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const te={[Is]:s.REPEAT,[Hr]:s.CLAMP_TO_EDGE,[ul]:s.MIRRORED_REPEAT},L={[Bn]:s.NEAREST,[Hm]:s.NEAREST_MIPMAP_NEAREST,[ma]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[qc]:s.LINEAR_MIPMAP_NEAREST,[_r]:s.LINEAR_MIPMAP_LINEAR},he={[V0]:s.NEVER,[$0]:s.ALWAYS,[G0]:s.LESS,[Qm]:s.LEQUAL,[W0]:s.EQUAL,[Y0]:s.GEQUAL,[X0]:s.GREATER,[q0]:s.NOTEQUAL};function Ie(C,E){if(E.type===Di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===qc||E.magFilter===ma||E.magFilter===_r||E.minFilter===ii||E.minFilter===qc||E.minFilter===ma||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,te[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,te[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,te[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,L[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==ma&&E.minFilter!==_r||E.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function tt(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const K=W(E);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[K].usedTimes++;const de=J[C.__cacheKey];de!==void 0&&(J[C.__cacheKey].usedTimes--,de.usedTimes===0&&y(E)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return G}function j(C,E,G){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);const J=tt(C,E),K=E.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+G);const de=n.get(K);if(K.version!==de.__version||J===!0){t.activeTexture(s.TEXTURE0+G);const ae=at.getPrimaries(at.workingColorSpace),me=E.colorSpace===pr?null:at.getPrimaries(E.colorSpace),$e=E.colorSpace===pr||ae===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=_(E.image,!1,i.maxTextureSize);ie=ct(E,ie);const oe=r.convert(E.format,E.colorSpace),Ne=r.convert(E.type);let De=S(E.internalFormat,oe,Ne,E.colorSpace,E.isVideoTexture);Ie(Q,E);let ye;const Ze=E.mipmaps,Oe=E.isVideoTexture!==!0,ht=de.__version===void 0||J===!0,D=K.dataReady,ue=w(E,ie);if(E.isDepthTexture)De=x(E.format===Oo,E.type),ht&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,oe,Ne,null));else if(E.isDataTexture)if(Ze.length>0){Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,ue,De,Ze[0].width,Ze[0].height);for(let $=0,Z=Ze.length;$<Z;$++)ye=Ze[$],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,oe,Ne,ye.data):t.texImage2D(s.TEXTURE_2D,$,De,ye.width,ye.height,0,oe,Ne,ye.data);E.generateMipmaps=!1}else Oe?(ht&&t.texStorage2D(s.TEXTURE_2D,ue,De,ie.width,ie.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,oe,Ne,ie.data)):t.texImage2D(s.TEXTURE_2D,0,De,ie.width,ie.height,0,oe,Ne,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,Ze[0].width,Ze[0].height,ie.depth);for(let $=0,Z=Ze.length;$<Z;$++)if(ye=Ze[$],E.format!==mi)if(oe!==null)if(Oe){if(D)if(E.layerUpdates.size>0){const le=_p(ye.width,ye.height,E.format,E.type);for(const fe of E.layerUpdates){const Be=ye.data.subarray(fe*le/ye.data.BYTES_PER_ELEMENT,(fe+1)*le/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,fe,ye.width,ye.height,1,oe,Be)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ie.depth,oe,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,De,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,ie.depth,oe,Ne,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,De,ye.width,ye.height,ie.depth,0,oe,Ne,ye.data)}else{Oe&&ht&&t.texStorage2D(s.TEXTURE_2D,ue,De,Ze[0].width,Ze[0].height);for(let $=0,Z=Ze.length;$<Z;$++)ye=Ze[$],E.format!==mi?oe!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,oe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,$,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ye.width,ye.height,oe,Ne,ye.data):t.texImage2D(s.TEXTURE_2D,$,De,ye.width,ye.height,0,oe,Ne,ye.data)}else if(E.isDataArrayTexture)if(Oe){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,ie.width,ie.height,ie.depth),D)if(E.layerUpdates.size>0){const $=_p(ie.width,ie.height,E.format,E.type);for(const Z of E.layerUpdates){const le=ie.data.subarray(Z*$/ie.data.BYTES_PER_ELEMENT,(Z+1)*$/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,oe,Ne,le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,Ne,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,oe,Ne,ie.data);else if(E.isData3DTexture)Oe?(ht&&t.texStorage3D(s.TEXTURE_3D,ue,De,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,Ne,ie.data)):t.texImage3D(s.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,oe,Ne,ie.data);else if(E.isFramebufferTexture){if(ht)if(Oe)t.texStorage2D(s.TEXTURE_2D,ue,De,ie.width,ie.height);else{let $=ie.width,Z=ie.height;for(let le=0;le<ue;le++)t.texImage2D(s.TEXTURE_2D,le,De,$,Z,0,oe,Ne,null),$>>=1,Z>>=1}}else if(Ze.length>0){if(Oe&&ht){const $=Re(Ze[0]);t.texStorage2D(s.TEXTURE_2D,ue,De,$.width,$.height)}for(let $=0,Z=Ze.length;$<Z;$++)ye=Ze[$],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,oe,Ne,ye):t.texImage2D(s.TEXTURE_2D,$,De,oe,Ne,ye);E.generateMipmaps=!1}else if(Oe){if(ht){const $=Re(ie);t.texStorage2D(s.TEXTURE_2D,ue,De,$.width,$.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Ne,ie)}else t.texImage2D(s.TEXTURE_2D,0,De,oe,Ne,ie);m(E)&&p(Q),de.__version=K.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ee(C,E,G){if(E.image.length!==6)return;const Q=tt(C,E),J=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);const K=n.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);const de=at.getPrimaries(at.workingColorSpace),ae=E.colorSpace===pr?null:at.getPrimaries(E.colorSpace),me=E.colorSpace===pr||de===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!$e&&!ie?oe[Z]=_(E.image[Z],!0,i.maxCubemapSize):oe[Z]=ie?E.image[Z].image:E.image[Z],oe[Z]=ct(E,oe[Z]);const Ne=oe[0],De=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),Ze=S(E.internalFormat,De,ye,E.colorSpace),Oe=E.isVideoTexture!==!0,ht=K.__version===void 0||Q===!0,D=J.dataReady;let ue=w(E,Ne);Ie(s.TEXTURE_CUBE_MAP,E);let $;if($e){Oe&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ze,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){$=oe[Z].mipmaps;for(let le=0;le<$.length;le++){const fe=$[le];E.format!==mi?De!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ze,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,De,ye,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ze,fe.width,fe.height,0,De,ye,fe.data)}}}else{if($=E.mipmaps,Oe&&ht){$.length>0&&ue++;const Z=Re(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,De,ye,oe[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,oe[Z].width,oe[Z].height,0,De,ye,oe[Z].data);for(let le=0;le<$.length;le++){const Be=$[le].image[Z].image;Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Be.width,Be.height,De,ye,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ze,Be.width,Be.height,0,De,ye,Be.data)}}else{Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ye,oe[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,De,ye,oe[Z]);for(let le=0;le<$.length;le++){const fe=$[le];Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,De,ye,fe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ze,De,ye,fe.image[Z])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),K.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function xe(C,E,G,Q,J,K){const de=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),me=S(G.internalFormat,de,ae,G.colorSpace),$e=n.get(E),ie=n.get(G);if(ie.__renderTarget=E,!$e.__hasExternalTextures){const oe=Math.max(1,E.width>>K),Ne=Math.max(1,E.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,me,oe,Ne,E.depth,0,de,ae,null):t.texImage2D(J,K,me,oe,Ne,0,de,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),k(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,ie.__webglTexture,0,Fe(E)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,ie.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(C,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=x(E.stencilBuffer,J),de=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Fe(E);k(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,K,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,K,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,K,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,C)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const K=Q[J],de=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),me=S(K.internalFormat,de,ae,K.colorSpace),$e=Fe(E);G&&k(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,me,E.width,E.height):k(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const J=Q.__webglTexture,K=Fe(E);if(E.depthTexture.format===Mo)k(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(E.depthTexture.format===Oo)k(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(C){const E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=s.createRenderbuffer(),ne(E.__webglDepthbuffer[Q],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ne(E.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(C,E,G){const Q=n.get(C);E!==void 0&&xe(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&we(C)}function nt(C){const E=C.texture,G=n.get(C),Q=n.get(E);C.addEventListener("dispose",b);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[ae][me]=s.createFramebuffer()}else G.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)G.__webglFramebuffer[ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(de)for(let ae=0,me=J.length;ae<me;ae++){const $e=n.get(J[ae]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const me=J[ae];G.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const $e=r.convert(me.format,me.colorSpace),ie=r.convert(me.type),oe=S(me.internalFormat,$e,ie,me.colorSpace,C.isXRRenderTarget===!0),Ne=Fe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,oe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(s.TEXTURE_CUBE_MAP,E);for(let ae=0;ae<6;ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)xe(G.__webglFramebuffer[ae][me],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else xe(G.__webglFramebuffer[ae],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ae=0,me=J.length;ae<me;ae++){const $e=J[ae],ie=n.get($e);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Ie(s.TEXTURE_2D,$e),xe(G.__webglFramebuffer,C,$e,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m($e)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),Ie(ae,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)xe(G.__webglFramebuffer[me],C,E,s.COLOR_ATTACHMENT0,ae,me);else xe(G.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,ae,0);m(E)&&p(ae),t.unbindTexture()}C.depthBuffer&&we(C)}function Xe(C){const E=C.textures;for(let G=0,Q=E.length;G<Q;G++){const J=E[G];if(m(J)){const K=M(C),de=n.get(J).__webglTexture;t.bindTexture(K,de),p(K),t.unbindTexture()}}}const Le=[],U=[];function Tt(C){if(C.samples>0){if(k(C)===!1){const E=C.textures,G=C.width,Q=C.height;let J=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(C),ae=E.length>1;if(ae)for(let me=0;me<E.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<E.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const $e=n.get(E[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,s.NEAREST),c===!0&&(Le.length=0,U.length=0,Le.push(s.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(K),U.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<E.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const $e=n.get(E[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Fe(C){return Math.min(i.maxSamples,C.samples)}function k(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ct(C,E){const G=C.colorSpace,Q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==bn&&G!==pr&&(at.getTransfer(G)===St?(Q!==mi||J!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=k}function fb(s,e){function t(n,i=pr){let r;const o=at.getTransfer(i);if(n===Er)return s.UNSIGNED_BYTE;if(n===md)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_d)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vm)return s.BYTE;if(n===Gm)return s.SHORT;if(n===ka)return s.UNSIGNED_SHORT;if(n===pd)return s.INT;if(n===Ns)return s.UNSIGNED_INT;if(n===Di)return s.FLOAT;if(n===Ja)return s.HALF_FLOAT;if(n===Xm)return s.ALPHA;if(n===qm)return s.RGB;if(n===mi)return s.RGBA;if(n===Ym)return s.LUMINANCE;if(n===$m)return s.LUMINANCE_ALPHA;if(n===Mo)return s.DEPTH_COMPONENT;if(n===Oo)return s.DEPTH_STENCIL;if(n===gd)return s.RED;if(n===xd)return s.RED_INTEGER;if(n===jm)return s.RG;if(n===vd)return s.RG_INTEGER;if(n===yd)return s.RGBA_INTEGER;if(n===Yc||n===$c||n===jc||n===Kc)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$c)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sh||n===oh||n===ah||n===ch)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lh||n===uh||n===hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lh||n===uh)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dh||n===fh||n===ph||n===mh||n===_h||n===gh||n===xh||n===vh||n===yh||n===Mh||n===Sh||n===bh||n===Eh||n===Th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ph)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_h)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Th)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Ah||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Zc)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Km||n===Rh||n===Ch||n===Ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Uo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class pb extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new cn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ns({vertexShader:_b,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Dl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends Hs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new xb,m=t.getContextAttributes();let p=null,M=null;const S=[],x=[],w=new We;let A=null;const b=new In;b.viewport=new mt;const R=new In;R.viewport=new mt;const y=[b,R],v=new pb;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=S[j];return ee===void 0&&(ee=new mu,S[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=S[j];return ee===void 0&&(ee=new mu,S[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=S[j];return ee===void 0&&(ee=new mu,S[j]=ee),ee.getHandSpace()};function B(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const xe=S[ee];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let j=0;j<S.length;j++){const ee=x[j];ee!==null&&(x[j]=null,S[j].disconnect(ee))}P=null,N=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,M=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Us(f.framebufferWidth,f.framebufferHeight,{format:mi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,xe=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Oo:Mo,xe=m.stencil?Uo:Ns);const Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Us(d.textureWidth,d.textureHeight,{format:mi,type:Er,depthTexture:new u_(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(j){for(let ee=0;ee<j.removed.length;ee++){const xe=j.removed[ee],ne=x.indexOf(xe);ne>=0&&(x[ne]=null,S[ne].disconnect(xe))}for(let ee=0;ee<j.added.length;ee++){const xe=j.added[ee];let ne=x.indexOf(xe);if(ne===-1){for(let we=0;we<S.length;we++)if(we>=x.length){x.push(xe),ne=we;break}else if(x[we]===null){x[we]=xe,ne=we;break}if(ne===-1)break}const Ee=S[ne];Ee&&Ee.connect(xe)}}const q=new I,Y=new I;function V(j,ee,xe){q.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const ne=q.distanceTo(Y),Ee=ee.projectionMatrix.elements,we=xe.projectionMatrix.elements,Ve=Ee[14]/(Ee[10]-1),nt=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],Tt=(we[8]+1)/we[0],Fe=Ve*U,k=Ve*Tt,Te=ne/(-U+Tt),ct=Te*-U;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Re=Ve+Te,C=nt+Te,E=Fe-ct,G=k+(ne-ct),Q=Xe*nt/C*Re,J=Le*nt/C*Re;j.projectionMatrix.makePerspective(E,G,Q,J,Re,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,xe=j.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),v.near=R.near=b.near=ee,v.far=R.far=b.far=xe,(P!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,N=v.far),b.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,v.layers.mask=b.layers.mask|R.layers.mask;const ne=j.parent,Ee=v.cameras;te(v,ne);for(let we=0;we<Ee.length;we++)te(Ee[we],ne);Ee.length===2?V(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),L(j,v,ne)};function L(j,ee,xe){xe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let he=null;function Ie(j,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ne=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let we=0;we<xe.length;we++){const Ve=xe[we];let nt=null;if(f!==null)nt=f.getViewport(Ve);else{const Le=h.getViewSubImage(d,Ve);nt=Le.viewport,we===0&&(e.setRenderTargetTextures(M,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(M))}let Xe=y[we];Xe===void 0&&(Xe=new In,Xe.layers.enable(we),Xe.viewport=new mt,y[we]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(nt.x,nt.y,nt.width,nt.height),we===0&&(v.matrix.copy(Xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Xe)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=h.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&_.init(e,we,i.renderState)}}for(let xe=0;xe<S.length;xe++){const ne=x[xe],Ee=S[xe];ne!==null&&Ee!==void 0&&Ee.update(ne,ee,l||o)}he&&he(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const tt=new l_;tt.setAnimationLoop(Ie),this.setAnimationLoop=function(j){he=j},this.dispose=function(){}}}const ds=new Ki,yb=new Ke;function Mb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,o_(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,ds.copy(x),ds.x*=-1,ds.y*=-1,ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(ds)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function l(M,S){let x=i[M.id];x===void 0&&(g(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function u(M){const S=h();M.__bindingPointIndex=S;const x=s.createBuffer(),w=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],x=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,b=x.length;A<b;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=R.length;y<v;y++){const P=R[y];if(f(P,A,y,w)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<B.length;X++){const q=B[X],Y=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,N+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,S,x,w){const A=M.value,b=S+"_"+x;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const R=w[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const S=M.uniforms;let x=0;const w=16;for(let b=0,R=S.length;b<R;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let v=0,P=y.length;v<P;v++){const N=y[v],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=B.length;W<X;W++){const q=B[W],Y=_(q),V=x%w,te=V%Y.boundary,L=V+te;x+=te,L!==0&&w-L<Y.storage&&(x+=w-L),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Y.storage}}}const A=x%w;return A>0&&(x+=w-A),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class bb{constructor(e={}){const{canvas:t=hx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Kr,this.toneMappingExposure=1;const x=this;let w=!1,A=0,b=0,R=null,y=-1,v=null;const P=new mt,N=new mt;let B=null;const W=new Ue(0);let X=0,q=t.width,Y=t.height,V=1,te=null,L=null;const he=new mt(0,0,q,Y),Ie=new mt(0,0,q,Y);let tt=!1;const j=new bd;let ee=!1,xe=!1;const ne=new Ke,Ee=new Ke,we=new I,Ve=new mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Le(){return R===null?V:1}let U=n;function Tt(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const O="webgl2";if(U=Tt(O,T),U===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,k,Te,ct,Re,C,E,G,Q,J,K,de,ae,me,$e,ie,oe,Ne,De,ye,Ze,Oe,ht,D;function ue(){Fe=new RM(U),Fe.init(),Oe=new fb(U,Fe),k=new SM(U,Fe,e,Oe),Te=new ub(U,Fe),k.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ct=new LM(U),Re=new jS,C=new db(U,Fe,Te,Re,k,Oe,ct),E=new EM(x),G=new wM(x),Q=new Bx(U),ht=new yM(U,Q),J=new CM(U,Q,ct,ht),K=new IM(U,J,Q,ct),De=new DM(U,k,C),ie=new bM(Re),de=new $S(x,E,G,Fe,k,ht,ie),ae=new Mb(x,Re),me=new ZS,$e=new ib(Fe),Ne=new vM(x,E,G,Te,K,f,c),oe=new cb(x,K,k),D=new Sb(U,ct,k,Te),ye=new MM(U,Fe,ct),Ze=new PM(U,Fe,ct),ct.programs=de.programs,x.capabilities=k,x.extensions=Fe,x.properties=Re,x.renderLists=me,x.shadowMap=oe,x.state=Te,x.info=ct}ue();const $=new vb(x,U);this.xr=$,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(q,Y,!1))},this.getSize=function(T){return T.set(q,Y)},this.setSize=function(T,O,z=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Y=O,t.width=Math.floor(T*V),t.height=Math.floor(O*V),z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(T,O,z){q=T,Y=O,V=z,t.width=Math.floor(T*z),t.height=Math.floor(O*z),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,O,z,H){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,O,z,H),Te.viewport(P.copy(he).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,O,z,H){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,O,z,H),Te.scissor(N.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){Te.setScissorTest(tt=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,O=!0,z=!0){let H=0;if(T){let F=!1;if(R!==null){const re=R.texture.format;F=re===yd||re===vd||re===xd}if(F){const re=R.texture.type,se=re===Er||re===Ns||re===ka||re===Uo||re===md||re===_d,pe=Ne.getClearColor(),Me=Ne.getClearAlpha(),ke=pe.r,Ye=pe.g,be=pe.b;se?(g[0]=ke,g[1]=Ye,g[2]=be,g[3]=Me,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=ke,_[1]=Ye,_[2]=be,_[3]=Me,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),$e.dispose(),Re.dispose(),E.dispose(),G.dispose(),K.dispose(),ht.dispose(),D.dispose(),de.dispose(),$.dispose(),$.removeEventListener("sessionstart",_e),$.removeEventListener("sessionend",qe),Ce.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=ct.autoReset,O=oe.enabled,z=oe.autoUpdate,H=oe.needsUpdate,F=oe.type;ue(),ct.autoReset=T,oe.enabled=O,oe.autoUpdate=z,oe.needsUpdate=H,oe.type=F}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const O=T.target;O.removeEventListener("dispose",Be),dt(O)}function dt(T){zt(T),Re.remove(T)}function zt(T){const O=Re.get(T).programs;O!==void 0&&(O.forEach(function(z){de.releaseProgram(z)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,z,H,F,re){O===null&&(O=nt);const se=F.isMesh&&F.matrixWorld.determinant()<0,pe=$n(T,O,z,H,F);Te.setMaterial(H,se);let Me=z.index,ke=1;if(H.wireframe===!0){if(Me=J.getWireframeAttribute(z),Me===void 0)return;ke=2}const Ye=z.drawRange,be=z.attributes.position;let je=Ye.start*ke,ft=(Ye.start+Ye.count)*ke;re!==null&&(je=Math.max(je,re.start*ke),ft=Math.min(ft,(re.start+re.count)*ke)),Me!==null?(je=Math.max(je,0),ft=Math.min(ft,Me.count)):be!=null&&(je=Math.max(je,0),ft=Math.min(ft,be.count));const gt=ft-je;if(gt<0||gt===1/0)return;ht.setup(F,H,pe,z,Me);let Yt,xt=ye;if(Me!==null&&(Yt=Q.get(Me),xt=Ze,xt.setIndex(Yt)),F.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Le()),xt.setMode(U.LINES)):xt.setMode(U.TRIANGLES);else if(F.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*Le()),F.isLineSegments?xt.setMode(U.LINES):F.isLineLoop?xt.setMode(U.LINE_LOOP):xt.setMode(U.LINE_STRIP)}else F.isPoints?xt.setMode(U.POINTS):F.isSprite&&xt.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))xt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,tr=F._multiDrawCounts,vt=F._multiDrawCount,Si=Me?Q.get(Me).bytesPerElement:1,Ws=Re.get(H).currentProgram.getUniforms();for(let jn=0;jn<vt;jn++)Ws.setValue(U,"_gl_DrawID",jn),xt.render(Pe[jn]/Si,tr[jn])}else if(F.isInstancedMesh)xt.renderInstances(je,gt,F.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,tr=Math.min(z.instanceCount,Pe);xt.renderInstances(je,gt,tr)}else xt.render(je,gt)};function ve(T,O,z){T.transparent===!0&&T.side===Ci&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,At(T,O,z),T.side=br,T.needsUpdate=!0,At(T,O,z),T.side=Ci):At(T,O,z)}this.compile=function(T,O,z=null){z===null&&(z=T),p=$e.get(z),p.init(O),S.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let se=0;se<re.length;se++){const pe=re[se];ve(pe,z,F),H.add(pe)}else ve(re,z,F),H.add(re)}),S.pop(),p=null,H},this.compileAsync=function(T,O,z=null){const H=this.compile(T,O,z);return new Promise(F=>{function re(){if(H.forEach(function(se){Re.get(se).currentProgram.isReady()&&H.delete(se)}),H.size===0){F(T);return}setTimeout(re,10)}Fe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ae=null;function Je(T){Ae&&Ae(T)}function _e(){Ce.stop()}function qe(){Ce.start()}const Ce=new l_;Ce.setAnimationLoop(Je),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(T){Ae=T,$.setAnimationLoop(T),T===null?Ce.stop():Ce.start()},$.addEventListener("sessionstart",_e),$.addEventListener("sessionend",qe),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,R),p=$e.get(T,S.length),p.init(O),S.push(p),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(Ee),xe=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,xe),m=me.get(T,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&ze(re,O,-1/0,x.sortObjects)}ze(T,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,L),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&Ne.addToRenderList(m,T),this.info.render.frame++,ee===!0&&ie.beginShadows();const z=p.state.shadowsArray;oe.render(z,T,O),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const re=O.cameras;if(F.length>0)for(let se=0,pe=re.length;se<pe;se++){const Me=re[se];it(H,F,T,Me)}Xe&&Ne.render(T);for(let se=0,pe=re.length;se<pe;se++){const Me=re[se];Gt(m,T,Me,Me.viewport)}}else F.length>0&&it(H,F,T,O),Xe&&Ne.render(T),Gt(m,T,O);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,O),ht.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ze(T,O,z,H){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){H&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const se=K.update(T),pe=T.material;pe.visible&&m.push(T,se,pe,z,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const se=K.update(T),pe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ve.copy(se.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const Me=se.groups;for(let ke=0,Ye=Me.length;ke<Ye;ke++){const be=Me[ke],je=pe[be.materialIndex];je&&je.visible&&m.push(T,se,je,z,Ve.z,be)}}else pe.visible&&m.push(T,se,pe,z,Ve.z,null)}}const re=T.children;for(let se=0,pe=re.length;se<pe;se++)ze(re[se],O,z,H)}function Gt(T,O,z,H){const F=T.opaque,re=T.transmissive,se=T.transparent;p.setupLightsView(z),ee===!0&&ie.setGlobalState(x.clippingPlanes,z),H&&Te.viewport(P.copy(H)),F.length>0&&Ct(F,O,z),re.length>0&&Ct(re,O,z),se.length>0&&Ct(se,O,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function it(T,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Us(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ja:Er,minFilter:_r,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],se=H.viewport||P;re.setSize(se.z,se.w);const pe=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Ne.render(z);const Me=x.toneMapping;x.toneMapping=Kr;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ee===!0&&ie.setGlobalState(x.clippingPlanes,H),Ct(T,z,H),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let be=0,je=O.length;be<je;be++){const ft=O[be],gt=ft.object,Yt=ft.geometry,xt=ft.material,Pe=ft.group;if(xt.side===Ci&&gt.layers.test(H.layers)){const tr=xt.side;xt.side=Fn,xt.needsUpdate=!0,Zt(gt,z,H,Yt,xt,Pe),xt.side=tr,xt.needsUpdate=!0,Ye=!0}}Ye===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(pe),x.setClearColor(W,X),ke!==void 0&&(H.viewport=ke),x.toneMapping=Me}function Ct(T,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,re=T.length;F<re;F++){const se=T[F],pe=se.object,Me=se.geometry,ke=H===null?se.material:H,Ye=se.group;pe.layers.test(z.layers)&&Zt(pe,O,z,Me,ke,Ye)}}function Zt(T,O,z,H,F,re){T.onBeforeRender(x,O,z,H,F,re),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,O,z,H,T,re),F.transparent===!0&&F.side===Ci&&F.forceSinglePass===!1?(F.side=Fn,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,T,re),F.side=br,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,T,re),F.side=Ci):x.renderBufferDirect(z,O,H,F,T,re),T.onAfterRender(x,O,z,H,F,re)}function At(T,O,z){O.isScene!==!0&&(O=nt);const H=Re.get(T),F=p.state.lights,re=p.state.shadowsArray,se=F.state.version,pe=de.getParameters(T,F.state,re,O,z),Me=de.getProgramCacheKey(pe);let ke=H.programs;H.environment=T.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Be),ke=new Map,H.programs=ke);let Ye=ke.get(Me);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===se)return _t(T,pe),Ye}else pe.uniforms=de.getUniforms(T),T.onBeforeCompile(pe,x),Ye=de.acquireProgram(pe,Me),ke.set(Me,Ye),H.uniforms=pe.uniforms;const be=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ie.uniform),_t(T,pe),H.needsLights=Tn(T),H.lightsStateVersion=se,H.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ye,H.uniformsList=null,Ye}function wt(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Jc.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function _t(T,O){const z=Re.get(T);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function $n(T,O,z,H,F){O.isScene!==!0&&(O=nt),C.resetTextureUnits();const re=O.fog,se=H.isMeshStandardMaterial?O.environment:null,pe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bn,Me=(H.isMeshStandardMaterial?G:E).get(H.envMap||se),ke=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ye=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color;let gt=Kr;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=Yt!==void 0?Yt.length:0,Pe=Re.get(H),tr=p.state.lights;if(ee===!0&&(xe===!0||T!==v)){const ai=T===v&&H.id===y;ie.setState(H,T,ai)}let vt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==tr.state.version||Pe.outputColorSpace!==pe||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Me||H.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==ke||Pe.vertexTangents!==Ye||Pe.morphTargets!==be||Pe.morphNormals!==je||Pe.morphColors!==ft||Pe.toneMapping!==gt||Pe.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,Pe.__version=H.version);let Si=Pe.currentProgram;vt===!0&&(Si=At(H,O,F));let Ws=!1,jn=!1,ta=!1;const Dt=Si.getUniforms(),Oi=Pe.uniforms;if(Te.useProgram(Si.program)&&(Ws=!0,jn=!0,ta=!0),H.id!==y&&(y=H.id,jn=!0),Ws||v!==T){Te.buffers.depth.getReversed()?(ne.copy(T.projectionMatrix),fx(ne),px(ne),Dt.setValue(U,"projectionMatrix",ne)):Dt.setValue(U,"projectionMatrix",T.projectionMatrix),Dt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Cr=Dt.map.cameraPosition;Cr!==void 0&&Cr.setValue(U,we.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&Dt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,jn=!0,ta=!0)}if(F.isSkinnedMesh){Dt.setOptional(U,F,"bindMatrix"),Dt.setOptional(U,F,"bindMatrixInverse");const ai=F.skeleton;ai&&(ai.boneTexture===null&&ai.computeBoneTexture(),Dt.setValue(U,"boneTexture",ai.boneTexture,C))}F.isBatchedMesh&&(Dt.setOptional(U,F,"batchingTexture"),Dt.setValue(U,"batchingTexture",F._matricesTexture,C),Dt.setOptional(U,F,"batchingIdTexture"),Dt.setValue(U,"batchingIdTexture",F._indirectTexture,C),Dt.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Dt.setValue(U,"batchingColorTexture",F._colorsTexture,C));const na=z.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&De.update(F,z,Si),(jn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,Dt.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Oi.envMap.value=Me,Oi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Oi.envMapIntensity.value=O.environmentIntensity),jn&&(Dt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Lt(Oi,ta),re&&H.fog===!0&&ae.refreshFogUniforms(Oi,re),ae.refreshMaterialUniforms(Oi,H,V,Y,p.state.transmissionRenderTarget[T.id]),Jc.upload(U,wt(Pe),Oi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Jc.upload(U,wt(Pe),Oi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dt.setValue(U,"center",F.center),Dt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Dt.setValue(U,"normalMatrix",F.normalMatrix),Dt.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ai=H.uniformsGroups;for(let Cr=0,Pr=ai.length;Cr<Pr;Cr++){const _f=ai[Cr];D.update(_f,Si),D.bind(_f,Si)}}return Si}function Lt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,z){Re.get(T.texture).__webglTexture=O,Re.get(T.depthTexture).__webglTexture=z;const H=Re.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const z=Re.get(T);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,z=0){R=T,A=O,b=z;let H=!0,F=null,re=!1,se=!1;if(T){const Me=Re.get(T);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Me.__hasExternalTextures)C.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Me.__boundDepthTexture!==be){if(be!==null&&Re.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(se=!0);const Ye=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?F=Ye[O][z]:F=Ye[O],re=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?F=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?F=Ye[z]:F=Ye,P.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else P.copy(he).multiplyScalar(V).floor(),N.copy(Ie).multiplyScalar(V).floor(),B=tt;if(Te.bindFramebuffer(U.FRAMEBUFFER,F)&&H&&Te.drawBuffers(T,F),Te.viewport(P),Te.scissor(N),Te.setScissorTest(B),re){const Me=Re.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,z)}else if(se){const Me=Re.get(T.texture),ke=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,ke)}y=-1},this.readRenderTargetPixels=function(T,O,z,H,F,re,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){Te.bindFramebuffer(U.FRAMEBUFFER,pe);try{const Me=T.texture,ke=Me.format,Ye=Me.type;if(!k.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-H&&z>=0&&z<=T.height-F&&U.readPixels(O,z,H,F,Oe.convert(ke),Oe.convert(Ye),re)}finally{const Me=R!==null?Re.get(R).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,O,z,H,F,re,se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(pe=pe[se]),pe){const Me=T.texture,ke=Me.format,Ye=Me.type;if(!k.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-H&&z>=0&&z<=T.height-F){Te.bindFramebuffer(U.FRAMEBUFFER,pe);const be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,z,H,F,Oe.convert(ke),Oe.convert(Ye),0);const je=R!==null?Re.get(R).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,je);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dx(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(be),U.deleteSync(ft),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,z=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(T.image.width*H),re=Math.floor(T.image.height*H),se=O!==null?O.x:0,pe=O!==null?O.y:0;C.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,se,pe,F,re),Te.unbindTexture()},this.copyTextureToTexture=function(T,O,z=null,H=null,F=0){T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let re,se,pe,Me,ke,Ye,be,je,ft;const gt=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(re=z.max.x-z.min.x,se=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,ke=z.min.y,Ye=z.isBox3?z.min.z:0):(re=gt.width,se=gt.height,pe=gt.depth||1,Me=0,ke=0,Ye=0),H!==null?(be=H.x,je=H.y,ft=H.z):(be=0,je=0,ft=0);const Yt=Oe.convert(O.format),xt=Oe.convert(O.type);let Pe;O.isData3DTexture?(C.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const tr=U.getParameter(U.UNPACK_ROW_LENGTH),vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Si=U.getParameter(U.UNPACK_SKIP_PIXELS),Ws=U.getParameter(U.UNPACK_SKIP_ROWS),jn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const ta=T.isDataArrayTexture||T.isData3DTexture,Dt=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Oi=Re.get(T),na=Re.get(O),ai=Re.get(Oi.__renderTarget),Cr=Re.get(na.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,ai.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Pr=0;Pr<pe;Pr++)ta&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,F,Ye+Pr),T.isDepthTexture?(Dt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,F,ft+Pr),U.blitFramebuffer(Me,ke,re,se,be,je,re,se,U.DEPTH_BUFFER_BIT,U.NEAREST)):Dt?U.copyTexSubImage3D(Pe,F,be,je,ft+Pr,Me,ke,re,se):U.copyTexSubImage2D(Pe,F,be,je,ft+Pr,Me,ke,re,se);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Dt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pe,F,be,je,ft,re,se,pe,Yt,xt,gt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,F,be,je,ft,re,se,pe,Yt,gt.data):U.texSubImage3D(Pe,F,be,je,ft,re,se,pe,Yt,xt,gt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,be,je,re,se,Yt,xt,gt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,be,je,gt.width,gt.height,Yt,gt.data):U.texSubImage2D(U.TEXTURE_2D,F,be,je,re,se,Yt,xt,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,tr),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Si),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ws),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jn),F===0&&O.generateMipmaps&&U.generateMipmap(Pe),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,O,z=null,H=null,F=0){return T.isTexture!==!0&&(_a("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],O=arguments[3],F=arguments[4]||0),_a('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,z,H,F)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,Te.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class Ad{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Ad(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m_ extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new I;class wd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gp=new I,xp=new mt,vp=new mt,Tb=new I,yp=new Ke,Mc=new I,_u=new Ji,Mp=new Ke,gu=new $o;class Ab extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_u.copy(this.boundingSphere),_u.applyMatrix4(i),e.ray.intersectsSphere(_u)!==!1&&(Mp.copy(i).invert(),gu.copy(e.ray).applyMatrix4(Mp),!(this.boundingBox!==null&&gu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===O0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xp.fromBufferAttribute(i.attributes.skinIndex,e),vp.fromBufferAttribute(i.attributes.skinWeight,e),gp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vp.getComponent(r);if(o!==0){const a=xp.getComponent(r);yp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Tb.copy(gp).applyMatrix4(yp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class __ extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class g_ extends cn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Bn,u=Bn,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sp=new Ke,wb=new Ke;class Rd{constructor(e=[],t=[]){this.uuid=Ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:wb;Sp.multiplyMatrices(a,t[r]),Sp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new g_(t,e,e,mi,Di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new __),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Uh extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new Ke,bp=new Ke,Sc=[],Ep=new Ni,Rb=new Ke,aa=new bt,ca=new Ji;class Cb extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),Ep.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Ep)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),ca.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,so),bp.multiplyMatrices(n,so),aa.matrixWorld=bp,aa.raycast(e,Sc);for(let o=0,a=Sc.length;o<a;o++){const c=Sc[o];c.instanceId=r,c.object=this,t.push(c)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new g_(new Float32Array(i*this.count),i,this.count,gd,Di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cd extends qi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dl=new I,fl=new I,Tp=new Ke,la=new $o,bc=new Ji,xu=new I,Ap=new I;class Pd extends Ut{constructor(e=new En,t=new Cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)dl.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dl.distanceTo(fl);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(i),bc.radius+=r,e.ray.intersectsSphere(bc)===!1)return;Tp.copy(i).invert(),la.copy(e.ray).applyMatrix4(Tp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),S=Ec(this,e,la,c,p,M);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Ec(this,e,la,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Ec(this,e,la,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ec(this,e,la,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ec(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(dl.fromBufferAttribute(o,i),fl.fromBufferAttribute(o,r),t.distanceSqToSegment(dl,fl,xu,Ap)>n)return;xu.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(xu);if(!(c<e.near||c>e.far))return{distance:c,point:Ap.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const wp=new I,Rp=new I;class x_ extends Pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)wp.fromBufferAttribute(t,i),Rp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+wp.distanceTo(Rp);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pb extends Pd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ld extends qi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cp=new Ke,Oh=new $o,Tc=new Ji,Ac=new I;class v_ extends Ut{constructor(e=new En,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(i),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;Cp.copy(i).invert(),Oh.copy(e.ray).applyMatrix4(Cp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ac.fromBufferAttribute(h,m),Pp(Ac,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ac.fromBufferAttribute(h,g),Pp(Ac,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pp(s,e,t,n,i,r,o){const a=Oh.distanceSqToPoint(s);if(a<t){const c=new I;Oh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const wc=new I,Rc=new I,vu=new I,Cc=new pi;class Lb extends En{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(So*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Cc;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Cc.getNormal(vu),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const S=(M+1)%3,x=h[M],w=h[S],A=Cc[u[M]],b=Cc[u[S]],R=`${x}_${w}`,y=`${w}_${x}`;y in d&&d[y]?(vu.dot(d[y].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(b.x,b.y,b.z)),d[y]=null):R in d||(d[R]={index0:l[M],index1:l[S],normal:vu.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];wc.fromBufferAttribute(a,_),Rc.fromBufferAttribute(a,m),f.push(wc.x,wc.y,wc.z),f.push(Rc.x,Rc.y,Rc.z)}this.setAttribute("position",new Vn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dd extends En{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-S),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=u[p][M+1],x=u[p][M],w=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||c<Math.PI)&&f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends qi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jm,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qi extends Tr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Db(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ib(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function y_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Qa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nb extends Qa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sf:r=e,a=2*t-n;break;case bf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sf:o=e,c=2*n-t;break;case bf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+M*o[l+w]+S*o[c+w]+x*o[h+w];return r}}class Ub extends Qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Ob extends Qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class er{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pc(t,this.TimeBufferType),this.values=Pc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pc(e.times,Array),values:Pc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ub(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case za:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Db(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}er.prototype.TimeBufferType=Float32Array;er.prototype.ValueBufferType=Float32Array;er.prototype.DefaultInterpolation=Ha;class Zo extends er{constructor(e,t,n){super(e,t,n)}}Zo.prototype.ValueTypeName="bool";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=za;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class M_ extends er{}M_.prototype.ValueTypeName="color";class ko extends er{}ko.prototype.ValueTypeName="number";class Fb extends Qa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ji.slerpFlat(r,0,o,l-a,o,l,c);return r}}class zo extends er{InterpolantFactoryMethodLinear(e){return new Fb(this.times,this.values,this.getValueSize(),e)}}zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;class Jo extends er{constructor(e,t,n){super(e,t,n)}}Jo.prototype.ValueTypeName="string";Jo.prototype.ValueBufferType=Array;Jo.prototype.DefaultInterpolation=za;Jo.prototype.InterpolantFactoryMethodLinear=void 0;Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends er{}Ho.prototype.ValueTypeName="vector";class Bb{constructor(e="",t=-1,n=[],i=F0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(zb(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(er.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Ib(c);c=Lp(c,1,u),l=Lp(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ko(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];y_(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new ko(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Ho,f+".position",d,"pos",i),n(zo,f+".quaternion",d,"rot",i),n(Ho,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ko;case"vector":case"vector2":case"vector3":case"vector4":return Ho;case"color":return M_;case"quaternion":return zo;case"bool":case"boolean":return Zo;case"string":return Jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function zb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kb(s.type);if(s.times===void 0){const t=[],n=[];y_(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Vr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Hb{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Vb=new Hb;class Vs{constructor(e){this.manager=e!==void 0?e:Vb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class Gb extends Error{constructor(e,t){super(e),this.response=t}}class pl extends Vs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:n,onError:i});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ar[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{_+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,b=u.length;A<b;A++){const R=u[A];R.onProgress&&R.onProgress(w)}p.enqueue(x),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Gb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Vr.add(e,l);const u=ar[e];delete ar[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=ar[e];if(u===void 0)throw this.manager.itemError(e),l;delete ar[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wb extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Va("img");function c(){u(),Vr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class S_ extends Vs{constructor(e){super(e)}load(e,t,n,i){const r=new cn,o=new Wb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Nl extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Xb extends Nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yu=new Ke,Dp=new I,Ip=new I;class Id{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qb extends Id{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yb extends Nl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Np=new Ke,ua=new I,Mu=new I;class $b extends Id{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),Mu.copy(n.position),Mu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mu),n.updateMatrixWorld(),i.makeTranslation(-ua.x,-ua.y,-ua.z),Np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Np)}}class b_ extends Nl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $b}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jb extends Id{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nd extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new jb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Aa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kb extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vr.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Vr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vr.add(e,c),r.manager.itemStart(e)}}const Ud="\\[\\]\\.:\\/",Zb=new RegExp("["+Ud+"]","g"),Od="[^"+Ud+"]",Jb="[^"+Ud.replace("\\.","")+"]",Qb=/((?:WC+[\/:])*)/.source.replace("WC",Od),eE=/(WCOD+)?/.source.replace("WCOD",Jb),tE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),nE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),iE=new RegExp("^"+Qb+eE+tE+nE+"$"),rE=["material","materials","bones","map"];class sE{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zb,"")}static parseTrackName(e){const t=iE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);rE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=sE;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Up=new Ke;class oE{constructor(e,t,n=0,i=1/0){this.ray=new $o(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(Op),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Fh(e[i],this,n,t);return n.sort(Op),n}}function Op(s,e){return s.distance-e.distance}function Fh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Fh(r[o],e,t,!0)}}class Fp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aE extends Hs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const Bp={type:"change"},Fd={type:"start"},E_={type:"end"},Lc=new $o,kp=new dr,cE=Math.cos(70*Xi.DEG2RAD),Jt=new I,kn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6;class lE extends aE{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:po.ROTATE,TWO:po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ji,this._lastTargetPosition=new I,this._quat=new ji().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fp,this._sphericalDelta=new Fp,this._scale=1,this._panOffset=new I,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new I,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hE.bind(this),this._onPointerDown=uE.bind(this),this._onPointerUp=dE.bind(this),this._onContextMenu=vE.bind(this),this._onMouseWheel=mE.bind(this),this._onKeyDown=_E.bind(this),this._onTouchStart=gE.bind(this),this._onTouchMove=xE.bind(this),this._onMouseDown=fE.bind(this),this._onMouseMove=pE.bind(this),this._interceptControlDown=yE.bind(this),this._interceptControlUp=ME.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bp),this.update(),this.state=Et.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=kn:n>Math.PI&&(n-=kn),i<-Math.PI?i+=kn:i>Math.PI&&(i-=kn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Jt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<cE?this.object.lookAt(this.target):(kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(kp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(Bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?kn/60*this.autoRotateSpeed*e:kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Jt.copy(i).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-kn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/t.clientHeight),this._rotateUp(kn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function uE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function hE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E_),this.state=Et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Et.DOLLY;break;case vo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Et.ROTATE}break;case vo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Fd)}function pE(s){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function mE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(s.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(E_))}function _E(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function gE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Et.TOUCH_ROTATE;break;case po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Et.TOUCH_DOLLY_PAN;break;case po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(Fd)}function xE(s){switch(this._trackPointer(s),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Et.NONE}}function vE(s){this.enabled!==!1&&s.preventDefault()}function yE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ME(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class SE extends m_{constructor(){super();const e=new jo;e.deleteAttribute("uv");const t=new Tr({side:Fn}),n=new Tr,i=new b_(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new bt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new bt(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new bt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new bt(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new bt(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new bt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new bt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new bt(e,oo(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new bt(e,oo(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new bt(e,oo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new bt(e,oo(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new bt(e,oo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new bt(e,oo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function oo(s){const e=new xr;return e.color.setScalar(s),e}function zp(s,e){if(e===B0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Lh||e===Zm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Lh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class bE extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new VE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Aa.extractUrlBase(e);o=Aa.resolveURL(l,this.path)}else o=Aa.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new pl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===T_){try{o[ot.KHR_BINARY_GLTF]=new GE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new nT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:o[h]=new AE;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[h]=new WE(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[h]=new XE;break;case ot.KHR_MESH_QUANTIZATION:o[h]=new qE;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function EE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TE{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],bn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Nd(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new b_(u),l.distance=h;break;case"spot":l=new Yb(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ur(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class AE{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return xr}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(i)}}class wE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class RE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(r)}}class CE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class PE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Xt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class IE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],bn),Promise.all(r)}}class NE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class UE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],bn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Xt)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Qi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class BE{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class kE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zE{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class HE{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class VE{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Ke,m=new I,p=new ji,M=new I(1,1,1),S=new Cb(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,_.compose(m,p,M));for(const x in c)if(x==="_COLOR_0"){const w=c[x];S.instanceColor=new Uh(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ut.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const T_="glTF",ha=12,Hp={JSON:1313821514,BIN:5130562};class GE{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==T_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ha,r=new DataView(e,ha);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hp.JSON){const l=new Uint8Array(e,ha+o,a);this.content=n.decode(l)}else if(c===Hp.BIN){const l=ha+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class WE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Bh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bh[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Eo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,bn,d)})})}}class XE{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qE{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class A_ extends Qa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,M=1-m,S=p-d+h;for(let x=0;x!==a;x++){const w=o[_+x+a],A=o[_+x+c]*u,b=o[g+x+a],R=o[g+x]*u;r[x]=M*w+S*A+m*b+p*R}return r}}const YE=new ji;class $E extends A_{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return YE.fromArray(r).normalize().toArray(r),r}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Eo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vp={9728:Bn,9729:ii,9984:Hm,9985:qc,9986:ma,9987:_r},Gp={33071:Hr,33648:ul,10497:Is},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jE={CUBICSPLINE:void 0,LINEAR:Ha,STEP:za},Eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),s.DefaultMaterial}function fs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ur(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZE(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function JE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QE(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Tu(t.attributes):e=s.indices+":"+Tu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Tu(s.targets[n]);return e}function Tu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function kh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tT=new Ke;class nT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new EE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new S_(this.options.manager):this.textureLoader=new Kb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fs(r,a,i),ur(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Aa.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=bu[i.type],a=Eo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Bt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=bu[i.type],l=Eo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(M);S||(_=new l(a,p*f,i.count*f/u),S=new Eb(_,f/u),t.cache.add(M,S)),m=new wd(S,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Bt(_,c,g);if(i.sparse!==void 0){const p=bu.SCALAR,M=Eo[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new M(o[1],S,i.sparse.count*p),A=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,R=w.length;b<R;b++){const y=w[b];if(m.setX(y,A[b*c]),c>=2&&m.setY(y,A[b*c+1]),c>=3&&m.setZ(y,A[b*c+2]),c>=4&&m.setW(y,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Vp[d.magFilter]||ii,u.minFilter=Vp[d.minFilter]||_r,u.wrapS=Gp[d.wrapS]||Is,u.wrapT=Gp[d.wrapT]||Is,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bn&&u.minFilter!==ii,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new cn(_);m.needsUpdate=!0,d(m)}),t.load(Aa.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ur(h,o),h.userData.mimeType=o.mimeType||eT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ld,qi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Cd,qi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Tr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const h=i[ot.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],bn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ci);const u=r.alphaMode||Eu.OPAQUE;if(u===Eu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Eu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xr&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==xr&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xr){const h=r.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],bn)}return r.emissiveTexture!==void 0&&o!==xr&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ur(h,r),t.associations.set(h,{materials:e}),r.extensions&&fs(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wp(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=QE(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Wp(new En,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?KE(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const M=l[f];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ab(_,M):new bt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=zp(p.geometry,Zm):m.mode===ui.TRIANGLE_FAN&&(p.geometry=zp(p.geometry,Lh));else if(m.mode===ui.LINES)p=new x_(_,M);else if(m.mode===ui.LINE_STRIP)p=new Pd(_,M);else if(m.mode===ui.LINE_LOOP)p=new Pb(_,M);else if(m.mode===ui.POINTS)p=new v_(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&JE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ur(p,r),m.extensions&&fs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&fs(i,h[0],r),h[0];const d=new vr;r.extensions&&fs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new In(Xi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ed(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ur(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Rd(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let M=0,S=d.length;M<S;M++){const x=d[M],w=f[M],A=g[M],b=_[M],R=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,w,A,b,R);if(y)for(let v=0;v<y.length;v++)p.push(y[v])}return new Bb(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tT)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new __:l.length>1?u=new vr:l.length===1?u=l[0]:u=new Ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ur(u,r),r.extensions&&fs(n,u,r),r.matrix!==void 0){const h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new vr;n.name&&(r.name=i.createUniqueName(n.name)),ur(r,n),n.extensions&&fs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof qi||d instanceof cn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Fr[r.path]===Fr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Fr[r.path]){case Fr.weights:l=ko;break;case Fr.rotation:l=zo;break;case Fr.position:case Fr.scale:l=Ho;break;default:switch(n.itemSize){case 1:l=ko;break;case 2:case 3:default:l=Ho;break}break}const u=i.interpolation!==void 0?jE[i.interpolation]:Ha,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Fr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof zo?$E:A_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iT(s,e,t){const n=e.attributes,i=new Ni;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=kh(Eo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=kh(Eo[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ji;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Wp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Bh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),ur(s,e),iT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ZE(s,e.targets,t):s})}const Au=new WeakMap;class rT extends Vs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new pl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Xt,n).catch(n)}decodeDracoFile(e,t,n,i,r=bn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Au.has(e)){const c=Au.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Au.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new En;e.index&&t.setIndex(new Bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new Bt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Xt)return;const n=new Ue;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),at.toWorkingColorSpace(n,Xt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new pl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=sT.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function sT(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let M,S;if(l.useUniqueIDs)S=u[m],M=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[u[m]]),S===-1)continue;M=a.GetAttribute(d,S)}const x=i(o,a,d,m,p,M);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,c){const u=c.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(c,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,u,h){const d=h.num_components(),g=c.num_points()*d,_=g*u.BYTES_PER_ELEMENT,m=r(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,h,m,_,p);const M=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:M,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function hr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function w_(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vo={duration:.5,overwrite:!1,delay:0},Bd,Mn,Nt,_i=1e8,Pt=1/_i,zh=Math.PI*2,oT=zh/4,aT=0,R_=Math.sqrt,cT=Math.cos,lT=Math.sin,un=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},kd=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},zd=function(){return typeof window<"u"},Dc=function(e){return Vt(e)||un(e)},C_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,Hh=/(?:-?\.?\d|\.)+/gi,P_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,L_=/[+-]=-?[.\d]+/,D_=/[^,'"\[\]\s]+/gi,uT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Fi,Vh,Hd,oi={},ml={},I_,N_=function(e){return(ml=Os(e,oi))&&Yn},Vd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ga=function(e,t){return!t&&console.warn(e)},U_=function(e,t){return e&&(oi[e]=t)&&ml&&(ml[e]=t)||oi},Wa=function(){return 0},hT={suppressEvents:!0,isStart:!0,kill:!1},Qc={suppressEvents:!0,kill:!1},dT={suppressEvents:!0},Gd={},Zr=[],Gh={},O_,ei={},Ru={},Xp=30,el=[],Wd="",Xd=function(e){var t=e[0],n,i;if(Zi(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(t););n=el[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new og(e[i],n)))||e.splice(i,1);return e},Ts=function(e){return e._gsap||Xd(gi(e))[0]._gsap},F_=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():kd(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},an=function(e){return Math.round(e*1e7)/1e7||0},To=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_l=function(){var e=Zr.length,t=Zr.slice(0),n,i;for(Gh={},Zr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},B_=function(e,t,n,i){Zr.length&&!Mn&&_l(),e.render(t,n,Mn&&t<0&&(e._initted||e._startAt)),Zr.length&&!Mn&&_l()},k_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(D_).length<2?t:un(e)?e.trim():e},z_=function(e){return e},yi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},pT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Os=function(e,t){for(var n in t)e[n]=t[n];return e},qp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},gl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Ft,n=e.keyframes?pT(Sn(e.keyframes)):yi;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},mT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},H_=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ul=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},is=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},As=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wh=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert(Qc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},gT=function s(e){return!e||e._ts&&s(e.parent)},Yp=function(e){return e._repeat?Go(e._tTime,e=e.duration()+e._rDelay)*e:0},Go=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ol=function(e){return e._end=an(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=an(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ol(e),n._dirty||As(n,e)),e},V_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=xl(e.rawTime(),t),(!t._dur||ec(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),As(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Hi=function(e,t,n,i){return t.parent&&is(t),t._start=an((Ar(n)?n:n||e!==Ft?li(e,n,t):e._time)+t._delay),t._end=an(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),H_(e,t,"_first","_last",e._sort?"_start":0),Xh(t)||(e._recent=t),i||V_(e,t),e._ts<0&&Fl(e,e._tTime),e},G_=function(e,t){return(oi.ScrollTrigger||Vd("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},W_=function(e,t,n,i,r){if(Yd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&O_!==ti.frame)return Zr.push(e),e._lazy=[r,i],1},xT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},vT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&xT(e)&&!(!e._initted&&Xh(e))||(e._ts<0||e._dp._ts<0)&&!Xh(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=ec(0,e._tDur,t),u=Go(c,a),e._yoyo&&u&1&&(o=1-o),u!==Go(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Mn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&W_(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&Wh(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&is(e,1),!n&&!Mn&&(ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wo=function(e,t,n,i){var r=e._repeat,o=an(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:an(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Fl(e,e._tTime=e._tDur*a),e.parent&&Ol(e),n||As(e.parent,e),e},$p=function(e){return e instanceof Nn?As(e):Wo(e,e._dur)},MT={_start:0,endTime:Wa,totalDuration:Wa},li=function s(e,t,n){var i=e.labels,r=e._recent||MT,o=e.duration()>=_i?r.endTime(!1):e._dur,a,c,l;return un(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Sn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ra=function(e,t,n){var i=Ar(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Gn(c.vars.inherit)&&c.parent;o.immediateRender=Gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Kt(t[0],o,t[r+1])},os=function(e,t){return e||e===0?t(e):t},ec=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!un(e)||!(t=uT.exec(e))?"":t[1]},ST=function(e,t,n){return os(n,function(i){return ec(e,t,i)})},qh=[].slice,X_=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Fi},bT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return un(i)&&!t||X_(i,1)?(r=n).push.apply(r,gi(i)):n.push(i)})||n},gi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):un(e)&&!n&&(Vh||!Xo())?qh.call((t||Hd).querySelectorAll(e),0):Sn(e)?bT(e,n):X_(e)?qh.call(e,0):e?[e]:[]},Yh=function(e){return e=gi(e)[0]||Ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?Ga("Invalid scope")||Hd.createElement("div"):e)}},q_=function(e){return e.sort(function(){return .5-Math.random()})},Y_=function(e){if(Vt(e))return e;var t=Zi(e)?e:{each:e},n=ws(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return un(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,M,S,x,w,A,b,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,_i])[1],!y){for(b=-_i;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=c?Math.min(y,_)*u-.5:i%y,M=y===_i?0:c?_*h/y-.5:i/y|0,b=0,R=_i,A=0;A<_;A++)S=A%y-p,x=M-(A/y|0),m[A]=w=l?Math.abs(l==="y"?x:S):R_(S*S+x*x),w>b&&(b=w),w<R&&(R=w);i==="random"&&q_(m),m.max=b-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:l?l==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=vn(t.amount||t.each)||0,n=n&&_<0?ig(n):n}return _=(m[d]-m.min)/m.max||0,an(m.b+(n?n(_):_)*m.v)+m.u}},$h=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=an(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ar(n)?0:vn(n))}},$_=function(e,t){var n=Sn(e),i,r;return!n&&Zi(e)&&(i=n=e.radius||_i,e.values?(e=gi(e.values),(r=!Ar(e[0]))&&(i*=i)):e=$h(e.increment)),os(t,n?Vt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=_i,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:o,r||u===o||Ar(o)?u:u+vn(o)}:$h(e))},j_=function(e,t,n,i){return os(Sn(e)?!t:n===!0?!!(n=0):!i,function(){return Sn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ET=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},TT=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},AT=function(e,t,n){return Z_(e,t,0,1,n)},K_=function(e,t,n){return os(n,function(i){return e[~~t(i)]})},wT=function s(e,t,n){var i=t-e;return Sn(e)?K_(e,s(0,e.length),t):os(n,function(r){return(i+(r-e)%i)%i+e})},RT=function s(e,t,n){var i=t-e,r=i*2;return Sn(e)?K_(e,s(0,e.length-1),t):os(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Xa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?D_:Hh),n+=e.substr(t,i-t)+j_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Z_=function(e,t,n,i,r){var o=t-e,a=i-n;return os(r,function(c){return n+((c-e)/o*a||0)})},CT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=un(e),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Sn(e)&&!Sn(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Os(Sn(e)?[]:{},e));if(!u){for(c in t)qd.call(a,e,c,"get",t[c]);r=function(g){return Kd(g,a)||(o?e.p:e)}}}return os(n,r)},jp=function(e,t,n){var i=e.labels,r=_i,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},ri=function(e,t,n){var i=e.vars,r=i[t],o=Nt,a=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Zr.length&&_l(),a&&(Nt=a),u=c?r.apply(l,c):r.call(l),Nt=o,u},xa=function(e){return is(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&ri(e,"onInterrupt"),e},go,J_=[],Q_=function(e){if(e)if(e=!e.name&&e.default||e,zd()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Wa,render:Kd,add:qd,kill:XT,modifier:WT,rawVars:0},o={targetTest:0,get:0,getSetter:jd,aliases:{},register:0};if(Xo(),e!==i){if(ei[t])return;yi(i,yi(gl(e,r),o)),Os(i.prototype,Os(r,gl(e,o))),ei[i.prop=t]=i,e.targetTest&&(el.push(i),Gd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}U_(t,i),e.register&&e.register(Yn,i,Xn)}else J_.push(e)},Rt=255,va={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},Cu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Rt+.5|0},eg=function(e,t,n){var i=e?Ar(e)?[e>>16,e>>8&Rt,e&Rt]:0:va.black,r,o,a,c,l,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Rt,i&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Hh),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Cu(c+1/3,r,o),i[1]=Cu(c,r,o),i[2]=Cu(c-1/3,r,o);else if(~e.indexOf("="))return i=e.match(P_),n&&i.length<4&&(i[3]=1),i}else i=e.match(Hh)||va.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Rt,o=i[1]/Rt,a=i[2]/Rt,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},tg=function(e){var t=[],n=[],i=-1;return e.split(Jr).forEach(function(r){var o=r.match(_o)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Kp=function(e,t,n){var i="",r=(e+i).match(Jr),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!r)return e;if(r=r.map(function(d){return(d=eg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=tg(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Jr,"1").split(_o),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Jr),h=l.length-1;a<h;a++)i+=l[a]+r[a];return i+l[h]},Jr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),PT=/hsl[a]?\(/,ng=function(e){var t=e.join(" "),n;if(Jr.lastIndex=0,Jr.test(t))return n=PT.test(t),e[1]=Kp(e[1],n),e[0]=Kp(e[0],n,tg(e[1])),!0},qa,ti=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,u,h,d,f,g=function _(m){var p=s()-i,M=m===!0,S,x,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-o,(S>0||M)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=S+(S>=r?4:r-S),x=1),M||(c=l(_)),x)for(f=0;f<a.length;f++)a[f](w,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){I_&&(!Vh&&zd()&&(Fi=Vh=window,Hd=Fi.document||{},oi.gsap=Yn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(Yn.version),N_(ml||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),J_.forEach(Q_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},qa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),qa=0,l=Wa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,M){var S=p?function(x,w,A,b){m(x,w,A,b),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),Xo(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Xo=function(){return!qa&&ti.wake()},ut={},LT=/^[\d.\-M][\d.\-,\s]/,DT=/["']/g,IT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(DT,"").trim():+l,i=c.substr(a+1).trim();return t},NT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},UT=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[IT(t[1])]:NT(e).split(",").map(k_)):ut._CE&&LT.test(e)?ut._CE("",e):n},ig=function(e){return function(t){return 1-e(1-t)}},rg=function s(e,t){for(var n=e._first,i;n;)n instanceof Nn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ws=function(e,t){return e&&(Vt(e)?e:ut[e]||UT(e))||t},Gs=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Wn(e,function(a){ut[a]=oi[a]=r,ut[o=a.toLowerCase()]=n;for(var c in r)ut[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ut[a+"."+c]=r[c]}),r},sg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/zh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*lT((u-o)*r)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:sg(a);return r=zh/r,c.config=function(l,u){return s(e,l,u)},c},Lu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:sg(n);return i.config=function(r){return s(e,r)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Gs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Gs("Elastic",Pu("in"),Pu("out"),Pu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Gs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Gs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Gs("Circ",function(s){return-(R_(1-s*s)-1)});Gs("Sine",function(s){return s===1?1:-cT(s*oT)+1});Gs("Back",Lu("in"),Lu("out"),Lu());ut.SteppedEase=ut.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Pt;return function(a){return((i*ec(0,o,a)|0)+r)*n}}};Vo.ease=ut["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Wd+=s+","+s+"Params,"});var og=function(e,t){this.id=aT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:F_,this.set=t?t.getSetter:jd},Ya=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wo(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),qa||ti.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fl(this,n),!r._dp||r.parent||V_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),B_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Go(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime(ec(-Math.abs(this._delay),this._tDur,r),i!==!1),Ol(this),_T(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dT);var i=Mn;return Mn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$p(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$p(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(li(this,n),Gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Vt(n)?n:z_,a=function(){var l=i.then;i.then=null,Vt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){xa(this)},s}();yi(Ya.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Nn=function(s){w_(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Gn(n.sortChildren),Ft&&Hi(n.parent||Ft,hr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&G_(hr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Ra(0,arguments,this),this},t.from=function(i,r,o){return Ra(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Ra(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,wa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Kt(i,r,li(this,o),1),this},t.call=function(i,r,o){return Hi(this,Kt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,c,l,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Kt(i,o,li(this,c)),this},t.staggerFrom=function(i,r,o,a,c,l,u){return o.runBackwards=1,wa(o).immediateRender=Gn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,u)},t.staggerFromTo=function(i,r,o,a,c,l,u,h){return a.startAt=o,wa(a).immediateRender=Gn(a.immediateRender),this.staggerTo(i,r,a,c,l,u,h)},t.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:an(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,m,p,M,S,x,w,A,b;if(this!==Ft&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,S=this._ts,p=!S,h&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=an(u%m),u===c?(_=this._repeat,d=l):(_=~~(u/m),_&&_===u/m&&(d=l,_--),d>l&&(d=l)),w=Go(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=l-d,b=1),_!==w&&!this._lock){var R=A&&w&1,y=R===(A&&_&1);if(_<w&&(R=!R),a=R?0:u%l?l:u,this._lock=1,this.render(a||(b?0:an(_*m)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;rg(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=yT(this,an(a),an(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!_&&(ri(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-Pt);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,r,o||Mn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=v?-Pt:Pt);break}}f=g}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-Pt)._zTime=d>=a?1:-1,this._ts))return this._start=x,Ol(this),this.render(i,r,o);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&is(this,1),!r&&!(i<0&&!a)&&(u||a||!c)&&(ri(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Ar(r)||(r=li(this,r,i)),!(i instanceof Ya)){if(Sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(un(i))return this.addLabel(i,r);if(Vt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Hi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-_i);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Kt?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return un(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(Ul(this,i),i===this._recent&&(this._recent=this._last),As(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=an(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=li(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Kt.delayedCall(0,r||Wa,o);return a.data="isPause",this._hasPause=1,Hi(this,a,li(this,i))},t.removePause=function(i){var r=this._first;for(i=li(this,i);r;)r._start===i&&r.data==="isPause"&&is(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Gr!==a[c]&&a[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=gi(i),c=this._first,l=Ar(r),u;c;)c instanceof Kt?fT(c._targets,a)&&(l?(!Gr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(u=c.getTweensOf(a,r)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=li(o,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,g=Kt.to(o,yi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&Wo(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,yi({startAt:{time:li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jp(this,li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jp(this,li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return As(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),As(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,c=_i,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hi(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;Wo(o,o===Ft&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(B_(Ft,xl(i,Ft)),O_=ti.frame),ti.frame>=Xp){Xp+=si.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&si.autoSleep&&ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ti.sleep()}}},e}(Ya);yi(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var OT=function(e,t,n,i,r,o,a){var c=new Xn(this._pt,e,t,0,1,dg,null,r),l=0,u=0,h,d,f,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Xa(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(wu)||[];h=wu.exec(i);)g=h[0],_=i.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?To(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=wu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(L_.test(i)||p)&&(c.e=0),this._pt=c,c},qd=function(e,t,n,i,r,o,a,c,l,u){Vt(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Vt(h)?l?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Vt(h)?l?HT:ug:$d,g;if(un(i)&&(~i.indexOf("random(")&&(i=Xa(i)),i.charAt(1)==="="&&(g=To(d,i)+(vn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||jh)return!isNaN(d*i)&&i!==""?(g=new Xn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?GT:hg,0,f),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Vd(t,i),OT.call(this,e,t,d,i,f,c||si.stringFilter,l))},FT=function(e,t,n,i,r){if(Vt(e)&&(e=Ca(e,r,t,n,i)),!Zi(e)||e.style&&e.nodeType||Sn(e)||C_(e))return un(e)?Ca(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Ca(e[a],r,t,n,i);return o},ag=function(e,t,n,i,r,o){var a,c,l,u;if(ei[e]&&(a=new ei[e]).init(r,a.rawVars?t[e]:FT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Xn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==go))for(l=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Gr,jh,Yd=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!Bd,x=e.timeline,w,A,b,R,y,v,P,N,B,W,X,q,Y;if(x&&(!d||!r)&&(r="none"),e._ease=ws(r,Vo.ease),e._yEase=h?ig(ws(h===!0?r:h,Vo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(N=m[0]?Ts(m[0]).harness:0,q=N&&i[N.prop],w=gl(i,Gd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Qc:hT),_._lazy=0),o){if(is(e._startAt=Kt.set(m,yi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Gn(c),startAt:null,delay:0,onUpdate:l&&function(){return ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!f)&&e._startAt.revert(Qc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=yi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Gn(c),immediateRender:a,stagger:0,parent:p},w),q&&(b[N.prop]=q),is(e._startAt=Kt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Qc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Gn(c)||c&&!g,A=0;A<m.length;A++){if(y=m[A],P=y._gsap||Xd(m)[A]._gsap,e._ptLookup[A]=W={},Gh[P.id]&&Zr.length&&_l(),X=M===m?A:M.indexOf(y),N&&(B=new N).init(y,q||w,e,X,M)!==!1&&(e._pt=R=new Xn(e._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){W[V]=R}),B.priority&&(v=1)),!N||q)for(b in w)ei[b]&&(B=ag(b,w,e,X,y,M))?B.priority&&(v=1):W[b]=R=qd.call(e,y,b,"get",w[b],X,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),S&&e._pt&&(Gr=e,Ft.killTweensOf(y,W,e.globalTime(t)),Y=!e.parent,Gr=0),e._pt&&c&&(Gh[P.id]=1)}v&&fg(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&x.render(_i,!0,!0)},BT=function(e,t,n,i,r,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return jh=1,e.vars[t]="+=0",Yd(e,a),jh=0,c?Ga(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Wt(n)+vn(h.e)),h.b&&(h.b=u.s+vn(h.b))},kT=function(e,t){var n=e[0]?Ts(e[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return t;r=Os({},t);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},zT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Sn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Ca=function(e,t,n,i,r){return Vt(e)?e.call(t,n,i,r):un(e)&&~e.indexOf("random(")?Xa(e):e},cg=Wd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lg={};Wn(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lg[s]=1});var Kt=function(s){w_(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:wa(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||Ft,S=(Sn(n)||C_(n)?Ar(n[0]):"length"in i)?[n]:gi(n),x,w,A,b,R,y,v,P;if(a._targets=S.length?Xd(S):Ga("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Dc(l)||Dc(u)){if(i=a.vars,x=a.timeline=new Nn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),x.kill(),x.parent=x._dp=hr(a),x._start=0,d||Dc(l)||Dc(u)){if(b=S.length,v=d&&Y_(d),Zi(d))for(R in d)~cg.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(w=0;w<b;w++)A=gl(i,lg),A.stagger=0,p&&(A.yoyoEase=p),P&&Os(A,P),y=S[w],A.duration=+Ca(l,hr(a),w,y,S),A.delay=(+Ca(u,hr(a),w,y,S)||0)-a._delay,!d&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(y,A,v?v(w,y,S):0),x._ease=ut.none;x.duration()?l=u=0:a.timeline=0}else if(g){wa(yi(x.vars.defaults,{ease:"none"})),x._ease=ws(g.ease||i.ease||"none");var N=0,B,W,X;if(Sn(g))g.forEach(function(q){return x.to(S,q,">")}),x.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||zT(R,g[R],A,g.easeEach);for(R in A)for(B=A[R].sort(function(q,Y){return q.t-Y.t}),N=0,w=0;w<B.length;w++)W=B[w],X={ease:W.e,duration:(W.t-(w?B[w-1].t:0))/100*l},X[R]=W.v,x.to(S,X,N),N+=X.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!Bd&&(Gr=hr(a),Ft.killTweensOf(S),Gr=0),Hi(M,hr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===an(M._time)&&Gn(h)&&gT(hr(a))&&M.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),m&&G_(hr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Pt&&!u?c:i<Pt?0:i,d,f,g,_,m,p,M,S,x;if(!l)vT(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,S=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(d=an(h%_),h===c?(g=this._repeat,d=l):(g=~~(h/_),g&&g===an(h/_)&&(d=l,g--),d>l&&(d=l)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=l-d),m=Go(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(S&&this._yEase&&rg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(an(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(W_(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/l),this._from&&(this.ratio=M=1-M),d&&!a&&!r&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Wh(this,i,r,o),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Wh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&is(this,1),!r&&!(u&&!a)&&(h||a||p)&&(ri(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,c){qa||ti.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yd(this,l),u=this._ease(l/this._dur),BT(this,i,r,o,a,u,l,c)?this.resetTo(i,r,o,a,1):(Fl(this,0),this.parent||H_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gr&&Gr.vars.overwrite!==!0)._first||xa(this),this.parent&&o!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?gi(i):a,l=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!r||r==="all")&&mT(a,c))return r==="all"&&(this._pt=0),xa(this);for(h=this._op=this._op||[],r!=="all"&&(un(r)&&(_={},Wn(r,function(M){return _[M]=1}),r=_),r=kT(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(h[p]=r,g=d,f={}):(f=h[p]=h[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ul(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&xa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ra(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Ra(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ft.killTweensOf(i,r,o)},e}(Ya);yi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(s){Kt[s]=function(){var e=new Nn,t=qh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var $d=function(e,t,n){return e[t]=n},ug=function(e,t,n){return e[t](n)},HT=function(e,t,n,i){return e[t](i.fp,n)},VT=function(e,t,n){return e.setAttribute(t,n)},jd=function(e,t){return Vt(e[t])?ug:kd(e[t])&&e.setAttribute?VT:$d},hg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},GT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Kd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},WT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},XT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ul(this,t,"_pt"):t.dep||(n=1),t=i;return!n},qT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Xn=function(){function s(t,n,i,r,o,a,c,l,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||hg,this.d=c||this,this.set=l||$d,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=qT,this.m=n,this.mt=r,this.tween=i},s}();Wn(Wd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Gd[s]=1});oi.TweenMax=oi.TweenLite=Kt;oi.TimelineLite=oi.TimelineMax=Nn;Ft=new Nn({sortChildren:!1,defaults:Vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=ng;var Rs=[],tl={},YT=[],Zp=0,$T=0,Du=function(e){return(tl[e]||YT).map(function(t){return t()})},Kh=function(){var e=Date.now(),t=[];e-Zp>2&&(Du("matchMediaInit"),Rs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),Du("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zp=e,Du("matchMedia"))},pg=function(){function s(t,n){this.selector=n&&Yh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$T++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Vt(n)&&(r=i,i=n,n=Vt);var o=this,a=function(){var l=Nt,u=o.selector,h;return l&&l!==o&&l.data.push(o),r&&(o.selector=Yh(r)),Nt=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),Nt=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Nn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Kt)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Rs.length;o--;)Rs[o].id===this.id&&Rs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),jT=function(){function s(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Zi(n)||(n={matches:n});var o=new pg(0,r||this.scope),a=o.conditions={},c,l,u;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Fi.matchMedia(n[l]),c&&(Rs.indexOf(o)<0&&Rs.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Kh):c.addEventListener("change",Kh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),vl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Q_(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=gi(e)[0]);var r=Ts(e||{}).get,o=n?z_:k_;return n==="native"&&(n=""),e&&(t?o((ei[t]&&ei[t].get||r)(e,t,n,i)):function(a,c,l){return o((ei[a]&&ei[a].get||r)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=ei[t],a=Ts(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;go._pt=0,h.init(e,n?u+n:u,go,0,[e]),h.render(1,h),go._pt&&Kd(1,go)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Yn.to(e,Os((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return r.resetTo(t,c,l,u)};return o.tween=r,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ws(e.ease,Vo.ease)),qp(Vo,e||{})},config:function(e){return qp(si,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ei[a]&&!oi[a]&&Ga(t+" effect requires "+a+" plugin.")}),Ru[t]=function(a,c,l){return n(gi(a),yi(c||{},r),l)},o&&(Nn.prototype[t]=function(a,c,l){return this.add(Ru[t](a,Zi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){ut[e]=ws(t)},parseEase:function(e,t){return arguments.length?ws(e,t):ut},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,r;for(n.smoothChildTiming=Gn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Hi(n,i,i._start-i._delay),i=r;return Hi(Ft,n,0),n},context:function(e,t){return e?new pg(e,t):Nt},matchMedia:function(e){return new jT(e)},matchMediaRefresh:function(){return Rs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Kh()},addEventListener:function(e,t){var n=tl[e]||(tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:wT,wrapYoyo:RT,distribute:Y_,random:j_,snap:$_,normalize:AT,getUnit:vn,clamp:ST,splitColor:eg,toArray:gi,selector:Yh,mapRange:Z_,pipe:ET,unitize:TT,interpolate:CT,shuffle:q_},install:N_,effects:Ru,ticker:ti,updateRoot:Nn.updateRoot,plugins:ei,globalTimeline:Ft,core:{PropTween:Xn,globals:U_,Tween:Kt,Timeline:Nn,Animation:Ya,getCache:Ts,_removeLinkedListItem:Ul,reverting:function(){return Mn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Bd=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return vl[s]=Kt[s]});ti.add(Nn.updateRoot);go=vl.to({},{duration:0});var KT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ZT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=KT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Iu=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(un(r)&&(c={},Wn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}ZT(a,r)}}}},Yn=vl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Iu("roundProps",$h),Iu("modifiers"),Iu("snap",$_))||vl;Kt.version=Nn.version=Yn.version="3.12.5";I_=1;zd()&&Xo();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jp,Wr,Ao,Zd,bs,Qp,Jd,JT=function(){return typeof window<"u"},wr={},xs=180/Math.PI,wo=Math.PI/180,ao=Math.atan2,em=1e8,Qd=/([A-Z])/g,QT=/(left|right|width|margin|padding|x)/i,e1=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},t1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},i1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_g=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},r1=function(e,t,n){return e.style[t]=n},s1=function(e,t,n){return e.style.setProperty(t,n)},o1=function(e,t,n){return e._gsap[t]=n},a1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},c1=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},l1=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},kt="transform",qn=kt+"Origin",u1=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in wr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=fr(i,a)}):this.tfm[e]=o.x?o[e]:fr(i,e),e===qn&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,t,"")),e=kt}(r||t)&&this.props.push(e,t,r[e])},gg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},h1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Qd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Jd(),(!r||!r.isStart)&&!n[kt]&&(gg(n),i.zOrigin&&n[qn]&&(n[qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xg=function(e,t){var n={target:e,props:[],revert:h1,save:u1};return e._gsap||Yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},vg,Jh=function(e,t){var n=Wr.createElementNS?Wr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wr.createElement(e);return n&&n.style?n:Wr.createElement(e)},Yi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Qd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,qo(t)||t,1)||""},tm="O,Moz,ms,Ms,Webkit".split(","),qo=function(e,t,n){var i=t||bs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(tm[o]+e in r););return o<0?null:(o===3?"ms":o>=0?tm[o]:"")+e},Qh=function(){JT()&&window.document&&(Jp=window,Wr=Jp.document,Ao=Wr.documentElement,bs=Jh("div")||{style:{}},Jh("div"),kt=qo(kt),qn=kt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vg=!!qo("perspective"),Jd=Yn.core.reverting,Zd=1)},Nu=function s(e){var t=Jh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Ao.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ao.removeChild(t),this.style.cssText=r,o},nm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},yg=function(e){var t;try{t=e.getBBox()}catch{t=Nu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nu||(t=Nu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+nm(e,["x","cx","x1"])||0,y:+nm(e,["y","cy","y1"])||0,width:0,height:0}:t},Mg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yg(e))},Fs=function(e,t){if(t){var n=e.style,i;t in wr&&t!==qn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Qd,"-$1").toLowerCase())):n.removeAttribute(t)}},Xr=function(e,t,n,i,r,o){var a=new Xn(e._pt,t,n,0,1,o?_g:mg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},im={deg:1,rad:1,turn:1},d1={grid:1,flex:1},rs=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=bs.style,c=QT.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||im[i]||im[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),p=e.getCTM&&Mg(e),(f||o==="%")&&(wr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[u],Wt(f?r/g*h:r/100*g);if(a[c?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Wr||!_.appendChild)&&(_=Wr.body),m=_._gsap,m&&f&&m.width&&c&&m.time===ti.time&&!m.uncache)return Wt(r/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Fs(e,t)}else(f||o==="%")&&!d1[Yi(_,"display")]&&(a.position=Yi(e,"position")),_===e&&(a.position="static"),_.appendChild(bs),g=bs[u],_.removeChild(bs),a.position="absolute";return c&&f&&(m=Ts(_),m.time=ti.time,m.width=_[u]),Wt(d?g*r/h:g&&r?h/g*r:0)},fr=function(e,t,n,i){var r;return Zd||Qh(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),wr[t]&&t!=="transform"?(r=ja(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ml(Yi(e,qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=yl[t]&&yl[t](e,t,n)||Yi(e,t)||F_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?rs(e,t,r,n)+n:r},f1=function(e,t,n,i){if(!n||n==="none"){var r=qo(t,e,1),o=r&&Yi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Yi(e,"borderTopColor"))}var a=new Xn(this._pt,e.style,t,0,1,dg),c=0,l=0,u,h,d,f,g,_,m,p,M,S,x,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Yi(e,t)||i,_?e.style[t]=_:Fs(e,t)),u=[n,i],ng(u),n=u[0],i=u[1],d=n.match(_o)||[],w=i.match(_o)||[],w.length){for(;h=_o.exec(i);)m=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=To(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),c=_o.lastIndex-S.length,S||(S=S||si.units[t]||x,c===i.length&&(i+=S,a.e+=S)),x!==S&&(f=rs(e,t,_,S)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?_g:mg;return L_.test(i)&&(a.e=0),this._pt=a,a},rm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},p1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=rm[n]||n,t[1]=rm[i]||i,t.join(" ")},m1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],wr[a]&&(c=1,a=a==="transformOrigin"?qn:kt),Fs(n,a);c&&(Fs(n,kt),o&&(o.svg&&n.removeAttribute("transform"),ja(n,1),o.uncache=1,gg(i)))}},yl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Xn(e._pt,t,n,0,0,m1);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},$a=[1,0,0,1,0,0],Sg={},bg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sm=function(e){var t=Yi(e,kt);return bg(t)?$a:t.substr(7).match(P_).map(Wt)},ef=function(e,t){var n=e._gsap||Ts(e),i=e.style,r=sm(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?$a:r):(r===$a&&!e.offsetParent&&e!==Ao&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,Ao.appendChild(e)),r=sm(e),c?i.display=c:Fs(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ao.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ed=function(e,t,n,i,r,o){var a=e._gsap,c=r||ef(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],S=t.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,A,b,R,y;n?c!==$a&&(b=f*m-g*_)&&(R=x*(m/b)+w*(-_/b)+(_*M-m*p)/b,y=x*(-g/b)+w*(f/b)-(f*M-g*p)/b,x=R,w=y):(A=yg(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(S[1]||S[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=x-l,M=w-u,a.xOffset=h+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[qn]="0px 0px",o&&(Xr(o,a,"xOrigin",l,x),Xr(o,a,"yOrigin",u,w),Xr(o,a,"xOffset",h,a.xOffset),Xr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},ja=function(e,t){var n=e._gsap||new og(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Yi(e,qn)||"0",u,h,d,f,g,_,m,p,M,S,x,w,A,b,R,y,v,P,N,B,W,X,q,Y,V,te,L,he,Ie,tt,j,ee;return u=h=d=_=m=p=M=S=x=0,f=g=1,n.svg=!!(e.getCTM&&Mg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[kt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[kt]!=="none"?c[kt]:"")),i.scale=i.rotate=i.translate="none"),b=ef(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),ed(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,A=n.yOrigin||0,b!==$a&&(P=b[0],N=b[1],B=b[2],W=b[3],u=X=b[4],h=q=b[5],b.length===6?(f=Math.sqrt(P*P+N*N),g=Math.sqrt(W*W+B*B),_=P||N?ao(N,P)*xs:0,M=B||W?ao(B,W)*xs+_:0,M&&(g*=Math.abs(Math.cos(M*wo))),n.svg&&(u-=w-(w*P+A*B),h-=A-(w*N+A*W))):(ee=b[6],tt=b[7],L=b[8],he=b[9],Ie=b[10],j=b[11],u=b[12],h=b[13],d=b[14],R=ao(ee,Ie),m=R*xs,R&&(y=Math.cos(-R),v=Math.sin(-R),Y=X*y+L*v,V=q*y+he*v,te=ee*y+Ie*v,L=X*-v+L*y,he=q*-v+he*y,Ie=ee*-v+Ie*y,j=tt*-v+j*y,X=Y,q=V,ee=te),R=ao(-B,Ie),p=R*xs,R&&(y=Math.cos(-R),v=Math.sin(-R),Y=P*y-L*v,V=N*y-he*v,te=B*y-Ie*v,j=W*v+j*y,P=Y,N=V,B=te),R=ao(N,P),_=R*xs,R&&(y=Math.cos(R),v=Math.sin(R),Y=P*y+N*v,V=X*y+q*v,N=N*y-P*v,q=q*y-X*v,P=Y,X=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Wt(Math.sqrt(P*P+N*N+B*B)),g=Wt(Math.sqrt(q*q+ee*ee)),R=ao(X,q),M=Math.abs(R)>2e-4?R*xs:0,x=j?1/(j<0?-j:j):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bg(Yi(e,kt)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Wt(f),n.scaleY=Wt(g),n.rotation=Wt(_)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[qn]=Ml(l)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?g1:vg?Eg:_1,n.uncache=0,n},Ml=function(e){return(e=e.split(" "))[0]+" "+e[1]},Uu=function(e,t,n){var i=vn(t);return Wt(parseFloat(t)+parseFloat(rs(e,"x",n+"px",i)))+i},_1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Eg(e,t)},ps="0deg",da="0px",ms=") ",Eg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==ps||u!==ps)){var A=parseFloat(u)*wo,b=Math.sin(A),R=Math.cos(A),y;A=parseFloat(h)*wo,y=Math.cos(A),o=Uu(M,o,b*y*-S),a=Uu(M,a,-Math.sin(A)*-S),c=Uu(M,c,R*y*-S+S)}m!==da&&(x+="perspective("+m+ms),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(w||o!==da||a!==da||c!==da)&&(x+=c!==da||w?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ms),l!==ps&&(x+="rotate("+l+ms),u!==ps&&(x+="rotateY("+u+ms),h!==ps&&(x+="rotateX("+h+ms),(d!==ps||f!==ps)&&(x+="skew("+d+", "+f+ms),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ms),M.style[kt]=x||"translate(0, 0)"},g1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,A,b,R,y;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=wo,l*=wo,w=Math.cos(c)*h,A=Math.sin(c)*h,b=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(u*=wo,y=Math.tan(l-u),y=Math.sqrt(1+y*y),b*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,A*=y)),w=Wt(w),A=Wt(A),b=Wt(b),R=Wt(R)):(w=h,R=d,A=b=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=rs(f,"x",o,"px"),x=rs(f,"y",a,"px")),(g||_||m||p)&&(S=Wt(S+g-(g*w+_*b)+m),x=Wt(x+_-(g*A+_*R)+p)),(i||r)&&(y=f.getBBox(),S=Wt(S+i/100*y.width),x=Wt(x+r/100*y.height)),y="matrix("+w+","+A+","+b+","+R+","+S+","+x+")",f.setAttribute("transform",y),M&&(f.style[kt]=y)},x1=function(e,t,n,i,r){var o=360,a=un(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?xs:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*em)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*em)%o-~~(l/o)*o)),e._pt=d=new Xn(e._pt,t,n,i,l,t1),d.e=u,d.u="deg",e._props.push(n),d},om=function(e,t){for(var n in t)e[n]=t[n];return e},v1=function(e,t,n){var i=om({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[kt]=t,a=ja(n,1),Fs(n,kt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[kt],o[kt]=t,a=ja(n,1),o[kt]=l);for(c in wr)l=i[c],u=a[c],l!==u&&r.indexOf(c)<0&&(f=vn(l),g=vn(u),h=f!==g?rs(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new Xn(e._pt,a,c,h,d-h,Zh),e._pt.u=g||0,e._props.push(c));om(a,i)};Wn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});yl[e>1?"border"+s:s]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return fr(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,h)}});var Tg={name:"css",register:Qh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,f,g,_,m,p,M,S,x,w,A,b,R;Zd||Qh(),this.styles=this.styles||xg(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ei[_]&&ag(_,t,n,i,e,r)))){if(f=typeof u,g=yl[_],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Xa(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Jr.lastIndex=0,Jr.test(l)||(m=vn(l),p=vn(u)),p?m!==p&&(l=rs(e,_,l,p)+p):m&&(u+=m),this.add(a,"setProperty",l,u,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,r):c[_],un(l)&&~l.indexOf("random(")&&(l=Xa(l)),vn(l+"")||l==="auto"||(l+=si.units[_]||vn(fr(e,_))||""),(l+"").charAt(1)==="="&&(l=fr(e,_))):l=fr(e,_),d=parseFloat(l),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Gi&&(_==="autoAlpha"&&(d===1&&fr(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,a.visibility),Xr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in wr,S){if(this.styles.save(_),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||ja(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Xn(this._pt,a,kt,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new Xn(this._pt,w,"scaleY",w.scaleY,(M?To(w.scaleY,M+h):h)-w.scaleY||0,Zh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(qn,0,a[qn]),u=p1(u),w.svg?ed(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Xr(this,w,"zOrigin",w.zOrigin,p),Xr(this,a,_,Ml(l),Ml(u)));continue}else if(_==="svgOrigin"){ed(e,u,1,A,0,this);continue}else if(_ in Sg){x1(this,w,_,d,M?To(d,M+u):u);continue}else if(_==="smoothOrigin"){Xr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){v1(this,u,e);continue}}else _ in a||(_=qo(_)||_);if(S||(h||h===0)&&(d||d===0)&&!e1.test(u)&&_ in a)m=(l+"").substr((d+"").length),h||(h=0),p=vn(u)||(_ in si.units?si.units[_]:m),m!==p&&(d=rs(e,_,l,p)),this._pt=new Xn(this._pt,S?w:a,_,d,(M?To(d,M+h):h)-d,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?i1:Zh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=n1);else if(_ in a)f1.call(this,e,_,l,M?M+u:u);else if(_ in e)this.add(e,_,l||e[_],M?M+u:u,i,r);else if(_!=="parseTransform"){Vd(_,u);continue}S||(_ in a?R.push(_,0,a[_]):R.push(_,1,l||e[_])),o.push(_)}}b&&fg(this)},render:function(e,t){if(t.tween._time||!Jd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:fr,aliases:Gi,getSetter:function(e,t,n){var i=Gi[t];return i&&i.indexOf(",")<0&&(t=i),t in wr&&t!==qn&&(e._gsap.x||fr(e,"x"))?n&&Qp===n?t==="scale"?a1:o1:(Qp=n||{})&&(t==="scale"?c1:l1):e.style&&!kd(e.style[t])?r1:~t.indexOf("-")?s1:jd(e,t)},core:{_removeProperty:Fs,_getMatrix:ef}};Yn.utils.checkPrefix=qo;Yn.core.getStyleSaver=xg;(function(s,e,t,n){var i=Wn(s+","+e+","+t,function(r){wr[r]=1});Wn(e,function(r){si.units[r]="deg",Sg[r]=1}),Gi[i[13]]=s+","+e,Wn(n,function(r){var o=r.split(":");Gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){si.units[s]="px"});Yn.registerPlugin(Tg);var ce=Yn.registerPlugin(Tg)||Yn;ce.core.Tween;function y1(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function M1(s,e,t){return e&&y1(s.prototype,e),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn,nl,ni,qr,Yr,Ro,Ag,vs,Pa,wg,yr,Ai,Rg,Cg=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},Pg=1,xo=[],st=[],$i=[],La=Date.now,td=function(e,t){return t},S1=function(){var e=Pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,$i),st=n,$i=i,td=function(o,a){return t[o](a)}},Qr=function(e,t){return~$i.indexOf(e)&&$i[$i.indexOf(e)+1][t]},Da=function(e){return!!~wg.indexOf(e)},Rn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},wn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ic="scrollLeft",Nc="scrollTop",nd=function(){return yr&&yr.isPressed||st.cache++},Sl=function(e,t){var n=function i(r){if(r||r===0){Pg&&(ni.history.scrollRestoration="manual");var o=yr&&yr.isPressed;r=i.v=Math.round(r)||(yr&&yr.iOS?1:0),e(r),i.cacheID=st.cache,o&&td("ss",r)}else(t||st.cache!==i.cacheID||td("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:Ic,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sl(function(s){return arguments.length?ni.scrollTo(s,en.sc()):ni.pageXOffset||qr[Ic]||Yr[Ic]||Ro[Ic]||0})},en={s:Nc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Sl(function(s){return arguments.length?ni.scrollTo(Un.sc(),s):ni.pageYOffset||qr[Nc]||Yr[Nc]||Ro[Nc]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ss=function(e,t){var n=t.s,i=t.sc;Da(e)&&(e=qr.scrollingElement||Yr);var r=st.indexOf(e),o=i===en.sc?1:2;!~r&&(r=st.push(e)-1),st[r+o]||Rn(e,"scroll",nd);var a=st[r+o],c=a||(st[r+o]=Sl(Qr(e,n),!0)||(Da(e)?i:Sl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),c},id=function(e,t,n){var i=e,r=e,o=La(),a=o,c=t||50,l=Math.max(500,c*3),u=function(g,_){var m=La();_||m-o>c?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},d=function(g){var _=a,m=r,p=La();return(g||g===0)&&g!==i&&u(g),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},fa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},am=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Lg=function(){Pa=pn.core.globals().ScrollTrigger,Pa&&Pa.core&&S1()},Dg=function(e){return pn=e||Cg(),!nl&&pn&&typeof document<"u"&&document.body&&(ni=window,qr=document,Yr=qr.documentElement,Ro=qr.body,wg=[ni,qr,Yr,Ro],pn.utils.clamp,Rg=pn.core.context||function(){},vs="onpointerenter"in Ro?"pointer":"mouse",Ag=qt.isTouch=ni.matchMedia&&ni.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ni||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=qt.eventTypes=("ontouchstart"in Yr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Yr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pg=0},500),Lg(),nl=1),nl};Un.op=en;st.cache=0;var qt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){nl||Dg(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Pa||Lg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,b=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,W=n.onHover,X=n.onHoverEnd,q=n.onMove,Y=n.ignoreCheck,V=n.isNormalizer,te=n.onGestureStart,L=n.onGestureEnd,he=n.onWheel,Ie=n.onEnable,tt=n.onDisable,j=n.onClick,ee=n.scrollSpeed,xe=n.capture,ne=n.allowClicks,Ee=n.lockAxis,we=n.onLockAxis;this.target=a=zn(a)||Yr,this.vars=n,f&&(f=pn.utils.toArray(f)),i=i||1e-9,r=r||0,g=g||1,ee=ee||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ni.getComputedStyle(Ro).lineHeight)||22);var Ve,nt,Xe,Le,U,Tt,Fe,k=this,Te=0,ct=0,Re=n.passive||!u,C=ss(a,Un),E=ss(a,en),G=C(),Q=E(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ai[0]==="pointerdown",K=Da(a),de=a.ownerDocument||qr,ae=[0,0,0],me=[0,0,0],$e=0,ie=function(){return $e=La()},oe=function(Ae,Je){return(k.event=Ae)&&f&&~f.indexOf(Ae.target)||Je&&J&&Ae.pointerType!=="touch"||Y&&Y(Ae,Je)},Ne=function(){k._vx.reset(),k._vy.reset(),nt.pause(),h&&h(k)},De=function(){var Ae=k.deltaX=am(ae),Je=k.deltaY=am(me),_e=Math.abs(Ae)>=i,qe=Math.abs(Je)>=i;P&&(_e||qe)&&P(k,Ae,Je,ae,me),_e&&(w&&k.deltaX>0&&w(k),A&&k.deltaX<0&&A(k),y&&y(k),N&&k.deltaX<0!=Te<0&&N(k),Te=k.deltaX,ae[0]=ae[1]=ae[2]=0),qe&&(R&&k.deltaY>0&&R(k),b&&k.deltaY<0&&b(k),v&&v(k),B&&k.deltaY<0!=ct<0&&B(k),ct=k.deltaY,me[0]=me[1]=me[2]=0),(Le||Xe)&&(q&&q(k),Xe&&(M(k),Xe=!1),Le=!1),Tt&&!(Tt=!1)&&we&&we(k),U&&(he(k),U=!1),Ve=0},ye=function(Ae,Je,_e){ae[_e]+=Ae,me[_e]+=Je,k._vx.update(Ae),k._vy.update(Je),l?Ve||(Ve=requestAnimationFrame(De)):De()},Ze=function(Ae,Je){Ee&&!Fe&&(k.axis=Fe=Math.abs(Ae)>Math.abs(Je)?"x":"y",Tt=!0),Fe!=="y"&&(ae[2]+=Ae,k._vx.update(Ae,!0)),Fe!=="x"&&(me[2]+=Je,k._vy.update(Je,!0)),l?Ve||(Ve=requestAnimationFrame(De)):De()},Oe=function(Ae){if(!oe(Ae,1)){Ae=fa(Ae,u);var Je=Ae.clientX,_e=Ae.clientY,qe=Je-k.x,Ce=_e-k.y,ze=k.isDragging;k.x=Je,k.y=_e,(ze||Math.abs(k.startX-Je)>=r||Math.abs(k.startY-_e)>=r)&&(M&&(Xe=!0),ze||(k.isDragging=!0),Ze(qe,Ce),ze||m&&m(k))}},ht=k.onPress=function(ve){oe(ve,1)||ve&&ve.button||(k.axis=Fe=null,nt.pause(),k.isPressed=!0,ve=fa(ve),Te=ct=0,k.startX=k.x=ve.clientX,k.startY=k.y=ve.clientY,k._vx.reset(),k._vy.reset(),Rn(V?a:de,Ai[1],Oe,Re,!0),k.deltaX=k.deltaY=0,S&&S(k))},D=k.onRelease=function(ve){if(!oe(ve,1)){wn(V?a:de,Ai[1],Oe,!0);var Ae=!isNaN(k.y-k.startY),Je=k.isDragging,_e=Je&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),qe=fa(ve);!_e&&Ae&&(k._vx.reset(),k._vy.reset(),u&&ne&&pn.delayedCall(.08,function(){if(La()-$e>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(de.createEvent){var Ce=de.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,ni,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ce)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Je&&!V&&nt.restart(!0),p&&Je&&p(k),x&&x(k,_e)}},ue=function(Ae){return Ae.touches&&Ae.touches.length>1&&(k.isGesturing=!0)&&te(Ae,k.isDragging)},$=function(){return(k.isGesturing=!1)||L(k)},Z=function(Ae){if(!oe(Ae)){var Je=C(),_e=E();ye((Je-G)*ee,(_e-Q)*ee,1),G=Je,Q=_e,h&&nt.restart(!0)}},le=function(Ae){if(!oe(Ae)){Ae=fa(Ae,u),he&&(U=!0);var Je=(Ae.deltaMode===1?c:Ae.deltaMode===2?ni.innerHeight:1)*g;ye(Ae.deltaX*Je,Ae.deltaY*Je,0),h&&!V&&nt.restart(!0)}},fe=function(Ae){if(!oe(Ae)){var Je=Ae.clientX,_e=Ae.clientY,qe=Je-k.x,Ce=_e-k.y;k.x=Je,k.y=_e,Le=!0,h&&nt.restart(!0),(qe||Ce)&&Ze(qe,Ce)}},Be=function(Ae){k.event=Ae,W(k)},dt=function(Ae){k.event=Ae,X(k)},zt=function(Ae){return oe(Ae)||fa(Ae,u)&&j(k)};nt=k._dc=pn.delayedCall(d||.25,Ne).pause(),k.deltaX=k.deltaY=0,k._vx=id(0,50,!0),k._vy=id(0,50,!0),k.scrollX=C,k.scrollY=E,k.isDragging=k.isGesturing=k.isPressed=!1,Rg(this),k.enable=function(ve){return k.isEnabled||(Rn(K?de:a,"scroll",nd),o.indexOf("scroll")>=0&&Rn(K?de:a,"scroll",Z,Re,xe),o.indexOf("wheel")>=0&&Rn(a,"wheel",le,Re,xe),(o.indexOf("touch")>=0&&Ag||o.indexOf("pointer")>=0)&&(Rn(a,Ai[0],ht,Re,xe),Rn(de,Ai[2],D),Rn(de,Ai[3],D),ne&&Rn(a,"click",ie,!0,!0),j&&Rn(a,"click",zt),te&&Rn(de,"gesturestart",ue),L&&Rn(de,"gestureend",$),W&&Rn(a,vs+"enter",Be),X&&Rn(a,vs+"leave",dt),q&&Rn(a,vs+"move",fe)),k.isEnabled=!0,ve&&ve.type&&ht(ve),Ie&&Ie(k)),k},k.disable=function(){k.isEnabled&&(xo.filter(function(ve){return ve!==k&&Da(ve.target)}).length||wn(K?de:a,"scroll",nd),k.isPressed&&(k._vx.reset(),k._vy.reset(),wn(V?a:de,Ai[1],Oe,!0)),wn(K?de:a,"scroll",Z,xe),wn(a,"wheel",le,xe),wn(a,Ai[0],ht,xe),wn(de,Ai[2],D),wn(de,Ai[3],D),wn(a,"click",ie,!0),wn(a,"click",zt),wn(de,"gesturestart",ue),wn(de,"gestureend",$),wn(a,vs+"enter",Be),wn(a,vs+"leave",dt),wn(a,vs+"move",fe),k.isEnabled=k.isPressed=k.isDragging=!1,tt&&tt(k))},k.kill=k.revert=function(){k.disable();var ve=xo.indexOf(k);ve>=0&&xo.splice(ve,1),yr===k&&(yr=0)},xo.push(k),V&&Da(a)&&(yr=k),k.enable(_)},M1(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();qt.version="3.12.5";qt.create=function(s){return new qt(s)};qt.register=Dg;qt.getAll=function(){return xo.slice()};qt.getById=function(s){return xo.filter(function(e){return e.vars.id===s})[0]};Cg()&&pn.registerPlugin(qt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Se,uo,lt,Ot,Ri,It,Ig,bl,Ka,Ia,ya,Uc,gn,Bl,rd,Ln,cm,lm,ho,Ng,Ou,Ug,Pn,sd,Og,Fg,Br,od,tf,Co,nf,El,ad,Fu,Oc=1,xn=Date.now,Bu=xn(),xi=0,Ma=0,um=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hm=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},b1=function s(){return Ma&&requestAnimationFrame(s)},dm=function(){return Bl=1},fm=function(){return Bl=0},Bi=function(e){return e},Sa=function(e){return Math.round(e*1e5)/1e5||0},Bg=function(){return typeof window<"u"},kg=function(){return Se||Bg()&&(Se=window.gsap)&&Se.registerPlugin&&Se},Bs=function(e){return!!~Ig.indexOf(e)},zg=function(e){return(e==="Height"?nf:lt["inner"+e])||Ri["client"+e]||It["client"+e]},Hg=function(e){return Qr(e,"getBoundingClientRect")||(Bs(e)?function(){return al.width=lt.innerWidth,al.height=nf,al}:function(){return mr(e)})},E1=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Qr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?zg(r):e["client"+r])||0}},T1=function(e,t){return!t||~$i.indexOf(e)?Hg(e):function(){return al}},Wi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Qr(e,n))?o()-Hg(e)()[r]:Bs(e)?(Ri[n]||It[n])-zg(i):e[n]-e["offset"+i])},Fc=function(e,t){for(var n=0;n<ho.length;n+=3)(!t||~t.indexOf(ho[n+1]))&&e(ho[n],ho[n+1],ho[n+2])},Qn=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},ba=function(e){return typeof e=="number"},ys=function(e){return typeof e=="object"},pa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ku=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},co=Math.abs,Vg="left",Gg="top",rf="right",sf="bottom",Cs="width",Ps="height",Na="Right",Ua="Left",Oa="Top",Fa="Bottom",jt="padding",di="margin",Yo="Width",of="Height",Qt="px",fi=function(e){return lt.getComputedStyle(e)},A1=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},pm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mr=function(e,t){var n=t&&fi(e)[rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Wg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},w1=function(e){return function(t){return Se.utils.snap(Wg(e),t)}},af=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},R1=function(e){return function(t,n){return af(Wg(e))(t,n.direction)}},Bc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},on=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},sn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},kc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},mm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zc={toggleActions:"play",anticipatePin:0},Al={top:0,left:0,center:.5,bottom:1,right:1},il=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Al?Al[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hc=function(e,t,n,i,r,o,a,c){var l=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,g=Ot.createElement("div"),_=Bs(n)||Qr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?It:n,M=e.indexOf("start")!==-1,S=M?l:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||c)&&_?"fixed;":"absolute;"),(m||c||!_)&&(x+=(i===en?rf:sf)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],rl(g,0,i,M),g},rl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Yo]=1,r["border"+a+Yo]=0,r[n.p]=t+"px",Se.set(e,r)},rt=[],cd={},Za,_m=function(){return xn()-xi>34&&(Za||(Za=requestAnimationFrame(Sr)))},lo=function(){(!Pn||!Pn.isPressed||Pn.startX>It.clientWidth)&&(st.cache++,Pn?Za||(Za=requestAnimationFrame(Sr)):Sr(),xi||zs("scrollStart"),xi=xn())},zu=function(){Fg=lt.innerWidth,Og=lt.innerHeight},Ea=function(){st.cache++,!gn&&!Ug&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!sd||Fg!==lt.innerWidth||Math.abs(lt.innerHeight-Og)>lt.innerHeight*.25)&&bl.restart(!0)},ks={},C1=[],Xg=function s(){return sn(He,"scrollEnd",s)||Es(!0)},zs=function(e){return ks[e]&&ks[e].map(function(t){return t()})||C1},Jn=[],qg=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},cf=function(e,t){var n;for(Ln=0;Ln<rt.length;Ln++)n=rt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));El=!0,t&&qg(t),t||zs("revert")},Yg=function(e,t){st.cache++,(t||!Dn)&&st.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(lt.history.scrollRestoration=tf=e)},Dn,Ls=0,gm,P1=function(){if(gm!==Ls){var e=gm=Ls;requestAnimationFrame(function(){return e===Ls&&Es(!0)})}},$g=function(){It.appendChild(Co),nf=!Pn&&Co.offsetHeight||lt.innerHeight,It.removeChild(Co)},xm=function(e){return Ka(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Es=function(e,t){if(xi&&!e&&!El){on(He,"scrollEnd",Xg);return}$g(),Dn=He.isRefreshing=!0,st.forEach(function(i){return On(i)&&++i.cacheID&&(i.rec=i())});var n=zs("refreshInit");Ng&&He.sort(),t||cf(),st.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),El=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),ad=1,xm(!0),rt.forEach(function(i){var r=Wi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),xm(!1),ad=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Yg(tf,1),bl.pause(),Ls++,Dn=2,Sr(2),rt.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=He.isRefreshing=!1,zs("refresh")},ld=0,sl=1,Ba,Sr=function(e){if(e===2||!Dn&&!El){He.isUpdating=!0,Ba&&Ba.update(0);var t=rt.length,n=xn(),i=n-Bu>=50,r=t&&rt[0].scroll();if(sl=ld>r?-1:1,Dn||(ld=r),i&&(xi&&!Bl&&n-xi>200&&(xi=0,zs("scrollEnd")),ya=Bu,Bu=n),sl<0){for(Ln=t;Ln-- >0;)rt[Ln]&&rt[Ln].update(0,i);sl=1}else for(Ln=0;Ln<t;Ln++)rt[Ln]&&rt[Ln].update(0,i);He.isUpdating=!1}Za=0},ud=[Vg,Gg,sf,rf,di+Fa,di+Na,di+Oa,di+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ol=ud.concat([Cs,Ps,"boxSizing","max"+Yo,"max"+of,"position",di,jt,jt+Oa,jt+Na,jt+Fa,jt+Ua]),L1=function(e,t,n){Po(n);var i=e._gsap;if(i.spacerIsNative)Po(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Hu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=ud.length,o=t.style,a=e.style,c;r--;)c=ud[r],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[sf]=a[rf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Cs]=Tl(e,Un)+Qt,o[Ps]=Tl(e,en)+Qt,o[jt]=a[di]=a[Gg]=a[Vg]="0",Po(i),a[Cs]=a["max"+Yo]=n[Cs],a[Ps]=a["max"+of]=n[Ps],a[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},D1=/([A-Z])/g,Po=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(D1,"-$1").toLowerCase())}},Vc=function(e){for(var t=ol.length,n=e.style,i=[],r=0;r<t;r++)i.push(ol[r],n[ol[r]]);return i.t=e,i},I1=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},al={left:0,top:0},vm=function(e,t,n,i,r,o,a,c,l,u,h,d,f,g){On(e)&&(e=e(c)),Qn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?il("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),ba(e))f&&(e=Se.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&rl(a,n,i,!0);else{On(t)&&(t=t(c));var S=(e||"0").split(" "),x,w,A,b;M=zn(t,c)||It,x=mr(M)||{},(!x||!x.left&&!x.top)&&fi(M).display==="none"&&(b=M.style.display,M.style.display="block",x=mr(M),b?M.style.display=b:M.style.removeProperty("display")),w=il(S[0],x[i.d]),A=il(S[1]||"0",n),e=x[i.p]-l[i.p]-u+w+r-A,a&&rl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(c[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,y=o._isStart;m="scroll"+i.d2,rl(o,R,i,y&&R>20||!y&&(h?Math.max(It[m],Ri[m]):o.parentNode[m])<=R+1),h&&(l=mr(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Qt))}return f&&M&&(m=mr(M),f.seek(d),p=mr(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},N1=/(webkit|moz|length|cssText|inset)/i,ym=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===It){e._stOrig=r.cssText,a=fi(e);for(o in a)!+o&&!N1.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},jg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Gc=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Mm=function(e,t){var n=ss(e,t),i="_scroll"+t.p2,r=function o(a,c,l,u,h){var d=o.tween,f=c.onComplete,g={};l=l||n();var _=jg(n,l,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=g,g[i]=function(){return _(l+u*d.ratio+h*d.ratio*d.ratio)},c.onUpdate=function(){st.cache++,o.tween&&Sr()},c.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Se.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},on(e,"wheel",n.wheelHandler),He.isTouch&&on(e,"touchmove",n.wheelHandler),r},He=function(){function s(t,n){uo||s.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),od(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Bi;return}n=pm(Qn(n)||ba(n)||n.nodeType?{trigger:n}:n,zc);var r=n,o=r.onUpdate,a=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,M=r.onSnapComplete,S=r.once,x=r.snap,w=r.pinReparent,A=r.pinSpacer,b=r.containerAnimation,R=r.fastScrollEnd,y=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:en,P=!h&&h!==0,N=zn(n.scroller||lt),B=Se.core.getCache(N),W=Bs(N),X=("pinType"in n?n.pinType:Qr(N,"pinType")||W&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:zc.markers,te=W?0:parseFloat(fi(N)["border"+v.p2+Yo])||0,L=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ie=E1(N,W,v),tt=T1(N,W),j=0,ee=0,xe=0,ne=ss(N,v),Ee,we,Ve,nt,Xe,Le,U,Tt,Fe,k,Te,ct,Re,C,E,G,Q,J,K,de,ae,me,$e,ie,oe,Ne,De,ye,Ze,Oe,ht,D,ue,$,Z,le,fe,Be,dt;if(L._startClamp=L._endClamp=!1,L._dir=v,m*=45,L.scroller=N,L.scroll=b?b.time.bind(b):ne,nt=ne(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ng=1,n.refreshPriority===-9999&&(Ba=L)),B.tweenScroll=B.tweenScroll||{top:Mm(N,en),left:Mm(N,Un)},L.tweenTo=Ee=B.tweenScroll[v.p],L.scrubDuration=function(_e){ue=ba(_e)&&_e,ue?D?D.duration(_e):D=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(L)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Oe=0,c||(c=i.vars.id)),x&&((!ys(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in It.style&&Se.set(W?[It,Ri]:N,{scrollBehavior:"auto"}),st.forEach(function(_e){return On(_e)&&_e.target===(W?Ot.scrollingElement||Ri:N)&&(_e.smooth=!1)}),Ve=On(x.snapTo)?x.snapTo:x.snapTo==="labels"?w1(i):x.snapTo==="labelsDirectional"?R1(i):x.directional!==!1?function(_e,qe){return af(x.snapTo)(_e,xn()-ee<500?0:qe.direction)}:Se.utils.snap(x.snapTo),$=x.duration||{min:.1,max:2},$=ys($)?Ia($.min,$.max):Ia($,$),Z=Se.delayedCall(x.delay||ue/2||.1,function(){var _e=ne(),qe=xn()-ee<500,Ce=Ee.tween;if((qe||Math.abs(L.getVelocity())<10)&&!Ce&&!Bl&&j!==_e){var ze=(_e-Le)/C,Gt=i&&!P?i.totalProgress():ze,it=qe?0:(Gt-ht)/(xn()-ya)*1e3||0,Ct=Se.utils.clamp(-ze,1-ze,co(it/2)*it/.185),Zt=ze+(x.inertia===!1?0:Ct),At,wt,_t=x,$n=_t.onStart,Lt=_t.onInterrupt,Tn=_t.onComplete;if(At=Ve(Zt,L),ba(At)||(At=Zt),wt=Math.round(Le+At*C),_e<=U&&_e>=Le&&wt!==_e){if(Ce&&!Ce._initted&&Ce.data<=co(wt-_e))return;x.inertia===!1&&(Ct=At-ze),Ee(wt,{duration:$(co(Math.max(co(Zt-Gt),co(At-Gt))*.185/it/.05||0)),ease:x.ease||"power3",data:co(wt-_e),onInterrupt:function(){return Z.restart(!0)&&Lt&&Lt(L)},onComplete:function(){L.update(),j=ne(),i&&(D?D.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),Oe=ht=i&&!P?i.totalProgress():L.progress,M&&M(L),Tn&&Tn(L)}},_e,Ct*C,wt-_e-Ct*C),$n&&$n(L,Ee.tween)}}else L.isActive&&j!==_e&&Z.restart(!0)}).pause()),c&&(cd[c]=L),d=L.trigger=zn(d||f!==!0&&f),dt=d&&d._gsap&&d._gsap.stRevert,dt&&(dt=dt(L)),f=f===!0?d:zn(f),Qn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===di||(g=!g&&f.parentNode&&f.parentNode.style&&fi(f.parentNode).display==="flex"?!1:jt),L.pin=f,we=Se.core.getCache(f),we.spacer?E=we.pinState:(A&&(A=zn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),we.spacerIsNative=!!A,A&&(we.spacerState=Vc(A))),we.spacer=J=A||Ot.createElement("div"),J.classList.add("pin-spacer"),c&&J.classList.add("pin-spacer-"+c),we.pinState=E=Vc(f)),n.force3D!==!1&&Se.set(f,{force3D:!0}),L.spacer=J=we.spacer,Ze=fi(f),ie=Ze[g+v.os2],de=Se.getProperty(f),ae=Se.quickSetter(f,v.a,Qt),Hu(f,J,Ze),Q=Vc(f)),V){ct=ys(V)?pm(V,mm):mm,k=Hc("scroller-start",c,N,v,ct,0),Te=Hc("scroller-end",c,N,v,ct,0,k),K=k["offset"+v.op.d2];var zt=zn(Qr(N,"content")||N);Tt=this.markerStart=Hc("start",c,zt,v,ct,K,0,b),Fe=this.markerEnd=Hc("end",c,zt,v,ct,K,0,b),b&&(Be=Se.quickSetter([Tt,Fe],v.a,Qt)),!X&&!($i.length&&Qr(N,"fixedMarkers")===!0)&&(A1(W?It:N),Se.set([k,Te],{force3D:!0}),Ne=Se.quickSetter(k,v.a,Qt),ye=Se.quickSetter(Te,v.a,Qt))}if(b){var ve=b.vars.onUpdate,Ae=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),ve&&ve.apply(b,Ae||[])})}if(L.previous=function(){return rt[rt.indexOf(L)-1]},L.next=function(){return rt[rt.indexOf(L)+1]},L.revert=function(_e,qe){if(!qe)return L.kill(!0);var Ce=_e!==!1||!L.enabled,ze=gn;Ce!==L.isReverted&&(Ce&&(le=Math.max(ne(),L.scroll.rec||0),xe=L.progress,fe=i&&i.progress()),Tt&&[Tt,Fe,k,Te].forEach(function(Gt){return Gt.style.display=Ce?"none":"block"}),Ce&&(gn=L,L.update(Ce)),f&&(!w||!L.isActive)&&(Ce?L1(f,J,E):Hu(f,J,fi(f),oe)),Ce||L.update(Ce),gn=ze,L.isReverted=Ce)},L.refresh=function(_e,qe,Ce,ze){if(!((gn||!L.enabled)&&!qe)){if(f&&_e&&xi){on(s,"scrollEnd",Xg);return}!Dn&&he&&he(L),gn=L,Ee.tween&&!Ce&&(Ee.tween.kill(),Ee.tween=0),D&&D.pause(),_&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Gt=Ie(),it=tt(),Ct=b?b.duration():Wi(N,v),Zt=C<=.01,At=0,wt=ze||0,_t=ys(Ce)?Ce.end:n.end,$n=n.endTrigger||d,Lt=ys(Ce)?Ce.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Tn=L.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,L),T=d&&Math.max(0,rt.indexOf(L))||0,O=T,z,H,F,re,se,pe,Me,ke,Ye,be,je,ft,gt;for(V&&ys(Ce)&&(ft=Se.getProperty(k,v.p),gt=Se.getProperty(Te,v.p));O--;)pe=rt[O],pe.end||pe.refresh(0,1)||(gn=L),Me=pe.pin,Me&&(Me===d||Me===f||Me===Tn)&&!pe.isReverted&&(be||(be=[]),be.unshift(pe),pe.revert(!0,!0)),pe!==rt[O]&&(T--,O--);for(On(Lt)&&(Lt=Lt(L)),Lt=um(Lt,"start",L),Le=vm(Lt,d,Gt,v,ne(),Tt,k,L,it,te,X,Ct,b,L._startClamp&&"_startClamp")||(f?-.001:0),On(_t)&&(_t=_t(L)),Qn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Qn(Lt)?Lt.split(" ")[0]:"")+_t:(At=il(_t.substr(2),Gt),_t=Qn(Lt)?Lt:(b?Se.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Le):Le)+At,$n=d)),_t=um(_t,"end",L),U=Math.max(Le,vm(_t||($n?"100% 0":Ct),$n,Gt,v,ne()+At,Fe,Te,L,it,te,X,Ct,b,L._endClamp&&"_endClamp"))||-.001,At=0,O=T;O--;)pe=rt[O],Me=pe.pin,Me&&pe.start-pe._pinPush<=Le&&!b&&pe.end>0&&(z=pe.end-(L._startClamp?Math.max(0,pe.start):pe.start),(Me===d&&pe.start-pe._pinPush<Le||Me===Tn)&&isNaN(Lt)&&(At+=z*(1-pe.progress)),Me===f&&(wt+=z));if(Le+=At,U+=At,L._startClamp&&(L._startClamp+=At),L._endClamp&&!Dn&&(L._endClamp=U||-.001,U=Math.min(U,Wi(N,v))),C=U-Le||(Le-=.01)&&.001,Zt&&(xe=Se.utils.clamp(0,1,Se.utils.normalize(Le,U,le))),L._pinPush=wt,Tt&&At&&(z={},z[v.a]="+="+At,Tn&&(z[v.p]="-="+ne()),Se.set([Tt,Fe],z)),f&&!(ad&&L.end>=Wi(N,v)))z=fi(f),re=v===en,F=ne(),me=parseFloat(de(v.a))+wt,!Ct&&U>1&&(je=(W?Ot.scrollingElement||Ri:N).style,je={style:je,value:je["overflow"+v.a.toUpperCase()]},W&&fi(It)["overflow"+v.a.toUpperCase()]!=="scroll"&&(je.style["overflow"+v.a.toUpperCase()]="scroll")),Hu(f,J,z),Q=Vc(f),H=mr(f,!0),ke=X&&ss(N,re?Un:en)(),g?(oe=[g+v.os2,C+wt+Qt],oe.t=J,O=g===jt?Tl(f,v)+C+wt:0,O&&(oe.push(v.d,O+Qt),J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Qt)),Po(oe),Tn&&rt.forEach(function(Yt){Yt.pin===Tn&&Yt.vars.pinSpacing!==!1&&(Yt._subPinOffset=!0)}),X&&ne(le)):(O=Tl(f,v),O&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+Qt)),X&&(se={top:H.top+(re?F-Le:ke)+Qt,left:H.left+(re?ke:F-Le)+Qt,boxSizing:"border-box",position:"fixed"},se[Cs]=se["max"+Yo]=Math.ceil(H.width)+Qt,se[Ps]=se["max"+of]=Math.ceil(H.height)+Qt,se[di]=se[di+Oa]=se[di+Na]=se[di+Fa]=se[di+Ua]="0",se[jt]=z[jt],se[jt+Oa]=z[jt+Oa],se[jt+Na]=z[jt+Na],se[jt+Fa]=z[jt+Fa],se[jt+Ua]=z[jt+Ua],G=I1(E,se,w),Dn&&ne(0)),i?(Ye=i._initted,Ou(1),i.render(i.duration(),!0,!0),$e=de(v.a)-me+C+wt,De=Math.abs(C-$e)>1,X&&De&&G.splice(G.length-2,2),i.render(0,!0,!0),Ye||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ou(0)):$e=C,je&&(je.value?je.style["overflow"+v.a.toUpperCase()]=je.value:je.style.removeProperty("overflow-"+v.a));else if(d&&ne()&&!b)for(H=d.parentNode;H&&H!==It;)H._pinOffset&&(Le-=H._pinOffset,U-=H._pinOffset),H=H.parentNode;be&&be.forEach(function(Yt){return Yt.revert(!1,!0)}),L.start=Le,L.end=U,nt=Xe=Dn?le:ne(),!b&&!Dn&&(nt<le&&ne(le),L.scroll.rec=0),L.revert(!1,!0),ee=xn(),Z&&(j=-1,Z.restart(!0)),gn=0,i&&P&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe||0,!0).render(i.time(),!0,!0),(Zt||xe!==L.progress||b||_)&&(i&&!P&&i.totalProgress(b&&Le<-.001&&!xe?Se.utils.normalize(Le,U,0):xe,!0),L.progress=Zt||(nt-Le)/C===xe?0:xe),f&&g&&(J._pinOffset=Math.round(L.progress*$e)),D&&D.invalidate(),isNaN(ft)||(ft-=Se.getProperty(k,v.p),gt-=Se.getProperty(Te,v.p),Gc(k,v,ft),Gc(Tt,v,ft-(ze||0)),Gc(Te,v,gt),Gc(Fe,v,gt-(ze||0))),Zt&&!Dn&&L.update(),u&&!Dn&&!Re&&(Re=!0,u(L),Re=!1)}},L.getVelocity=function(){return(ne()-Xe)/(xn()-ya)*1e3||0},L.endAnimation=function(){pa(L.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||pa(i,L.direction<0,1):pa(i,i.reversed()))},L.labelToScroll=function(_e){return i&&i.labels&&(Le||L.refresh()||Le)+i.labels[_e]/i.duration()*C||0},L.getTrailing=function(_e){var qe=rt.indexOf(L),Ce=L.direction>0?rt.slice(0,qe).reverse():rt.slice(qe+1);return(Qn(_e)?Ce.filter(function(ze){return ze.vars.preventOverlaps===_e}):Ce).filter(function(ze){return L.direction>0?ze.end<=Le:ze.start>=U})},L.update=function(_e,qe,Ce){if(!(b&&!Ce&&!_e)){var ze=Dn===!0?le:L.scroll(),Gt=_e?0:(ze-Le)/C,it=Gt<0?0:Gt>1?1:Gt||0,Ct=L.progress,Zt,At,wt,_t,$n,Lt,Tn,T;if(qe&&(Xe=nt,nt=b?ne():ze,x&&(ht=Oe,Oe=i&&!P?i.totalProgress():it)),m&&f&&!gn&&!Oc&&xi&&(!it&&Le<ze+(ze-Xe)/(xn()-ya)*m?it=1e-4:it===1&&U>ze+(ze-Xe)/(xn()-ya)*m&&(it=.9999)),it!==Ct&&L.enabled){if(Zt=L.isActive=!!it&&it<1,At=!!Ct&&Ct<1,Lt=Zt!==At,$n=Lt||!!it!=!!Ct,L.direction=it>Ct?1:-1,L.progress=it,$n&&!gn&&(wt=it&&!Ct?0:it===1?1:Ct===1?2:3,P&&(_t=!Lt&&Y[wt+1]!=="none"&&Y[wt+1]||Y[wt],T=i&&(_t==="complete"||_t==="reset"||_t in i))),y&&(Lt||T)&&(T||h||!i)&&(On(y)?y(L):L.getTrailing(y).forEach(function(F){return F.endAnimation()})),P||(D&&!gn&&!Oc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",it,i._tTime/i._tDur):(D.vars.totalProgress=it,D.invalidate().restart())):i&&i.totalProgress(it,!!(gn&&(ee||_e)))),f){if(_e&&g&&(J.style[g+v.os2]=ie),!X)ae(Sa(me+$e*it));else if($n){if(Tn=!_e&&it>Ct&&U+1>ze&&ze+1>=Wi(N,v),w)if(!_e&&(Zt||Tn)){var O=mr(f,!0),z=ze-Le;ym(f,It,O.top+(v===en?z:0)+Qt,O.left+(v===en?0:z)+Qt)}else ym(f,J);Po(Zt||Tn?G:Q),De&&it<1&&Zt||ae(me+(it===1&&!Tn?$e:0))}}x&&!Ee.tween&&!gn&&!Oc&&Z.restart(!0),a&&(Lt||S&&it&&(it<1||!Fu))&&Ka(a.targets).forEach(function(F){return F.classList[Zt||S?"add":"remove"](a.className)}),o&&!P&&!_e&&o(L),$n&&!gn?(P&&(T&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),o&&o(L)),(Lt||!Fu)&&(l&&Lt&&ku(L,l),q[wt]&&ku(L,q[wt]),S&&(it===1?L.kill(!1,1):q[wt]=0),Lt||(wt=it===1?1:3,q[wt]&&ku(L,q[wt]))),R&&!Zt&&Math.abs(L.getVelocity())>(ba(R)?R:2500)&&(pa(L.callbackAnimation),D?D.progress(1):pa(i,_t==="reverse"?1:!it,1))):P&&o&&!gn&&o(L)}if(ye){var H=b?ze/b.duration()*(b._caScrollDist||0):ze;Ne(H+(k._isFlipped?1:0)),ye(H)}Be&&Be(-ze/b.duration()*(b._caScrollDist||0))}},L.enable=function(_e,qe){L.enabled||(L.enabled=!0,on(N,"resize",Ea),W||on(N,"scroll",lo),he&&on(s,"refreshInit",he),_e!==!1&&(L.progress=xe=0,nt=Xe=j=ne()),qe!==!1&&L.refresh())},L.getTween=function(_e){return _e&&Ee?Ee.tween:D},L.setPositions=function(_e,qe,Ce,ze){if(b){var Gt=b.scrollTrigger,it=b.duration(),Ct=Gt.end-Gt.start;_e=Gt.start+Ct*_e/it,qe=Gt.start+Ct*qe/it}L.refresh(!1,!1,{start:hm(_e,Ce&&!!L._startClamp),end:hm(qe,Ce&&!!L._endClamp)},ze),L.update()},L.adjustPinSpacing=function(_e){if(oe&&_e){var qe=oe.indexOf(v.d)+1;oe[qe]=parseFloat(oe[qe])+_e+Qt,oe[1]=parseFloat(oe[1])+_e+Qt,Po(oe)}},L.disable=function(_e,qe){if(L.enabled&&(_e!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,qe||D&&D.pause(),le=0,we&&(we.uncache=1),he&&sn(s,"refreshInit",he),Z&&(Z.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!W)){for(var Ce=rt.length;Ce--;)if(rt[Ce].scroller===N&&rt[Ce]!==L)return;sn(N,"resize",Ea),W||sn(N,"scroll",lo)}},L.kill=function(_e,qe){L.disable(_e,qe),D&&!qe&&D.kill(),c&&delete cd[c];var Ce=rt.indexOf(L);Ce>=0&&rt.splice(Ce,1),Ce===Ln&&sl>0&&Ln--,Ce=0,rt.forEach(function(ze){return ze.scroller===L.scroller&&(Ce=1)}),Ce||Dn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),qe||i.kill()),Tt&&[Tt,Fe,k,Te].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),Ba===L&&(Ba=0),f&&(we&&(we.uncache=1),Ce=0,rt.forEach(function(ze){return ze.pin===f&&Ce++}),Ce||(we.spacer=0)),n.onKill&&n.onKill(L)},rt.push(L),L.enable(!1,!1),dt&&dt(L),i&&i.add&&!C){var Je=L.update;L.update=function(){L.update=Je,Le||U||L.refresh()},Se.delayedCall(.01,L.update),C=.01,Le=U=0}else L.refresh();f&&P1()},s.register=function(n){return uo||(Se=n||kg(),Bg()&&window.document&&s.enable(),uo=Ma),uo},s.defaults=function(n){if(n)for(var i in n)zc[i]=n[i];return zc},s.disable=function(n,i){Ma=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(lt,"wheel",lo),sn(Ot,"scroll",lo),clearInterval(Uc),sn(Ot,"touchcancel",Bi),sn(It,"touchstart",Bi),Bc(sn,Ot,"pointerdown,touchstart,mousedown",dm),Bc(sn,Ot,"pointerup,touchend,mouseup",fm),bl.kill(),Fc(sn);for(var r=0;r<st.length;r+=3)kc(sn,st[r],st[r+1]),kc(sn,st[r],st[r+2])},s.enable=function(){if(lt=window,Ot=document,Ri=Ot.documentElement,It=Ot.body,Se&&(Ka=Se.utils.toArray,Ia=Se.utils.clamp,od=Se.core.context||Bi,Ou=Se.core.suppressOverwrites||Bi,tf=lt.history.scrollRestoration||"auto",ld=lt.pageYOffset,Se.core.globals("ScrollTrigger",s),It)){Ma=1,Co=document.createElement("div"),Co.style.height="100vh",Co.style.position="absolute",$g(),b1(),qt.register(Se),s.isTouch=qt.isTouch,Br=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sd=qt.isTouch===1,on(lt,"wheel",lo),Ig=[lt,Ot,Ri,It],Se.matchMedia?(s.matchMedia=function(c){var l=Se.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Se.addEventListener("matchMediaInit",function(){return cf()}),Se.addEventListener("matchMediaRevert",function(){return qg()}),Se.addEventListener("matchMedia",function(){Es(0,1),zs("matchMedia")}),Se.matchMedia("(orientation: portrait)",function(){return zu(),zu})):console.warn("Requires GSAP 3.11.0 or later"),zu(),on(Ot,"scroll",lo);var n=It.style,i=n.borderTopStyle,r=Se.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=mr(It),en.m=Math.round(o.top+en.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Uc=setInterval(_m,250),Se.delayedCall(.5,function(){return Oc=0}),on(Ot,"touchcancel",Bi),on(It,"touchstart",Bi),Bc(on,Ot,"pointerdown,touchstart,mousedown",dm),Bc(on,Ot,"pointerup,touchend,mouseup",fm),rd=Se.utils.checkPrefix("transform"),ol.push(rd),uo=xn(),bl=Se.delayedCall(.2,Es).pause(),ho=[Ot,"visibilitychange",function(){var c=lt.innerWidth,l=lt.innerHeight;Ot.hidden?(cm=c,lm=l):(cm!==c||lm!==l)&&Ea()},Ot,"DOMContentLoaded",Es,lt,"load",Es,lt,"resize",Ea],Fc(on),rt.forEach(function(c){return c.enable(0,1)}),a=0;a<st.length;a+=3)kc(sn,st[a],st[a+1]),kc(sn,st[a],st[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Fu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Uc)||(Uc=i)&&setInterval(_m,i),"ignoreMobileResize"in n&&(sd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fc(sn)||Fc(on,n.autoRefreshEvents||"none"),Ug=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=zn(n),o=st.indexOf(r),a=Bs(r);~o&&st.splice(o,a?6:2),i&&(a?$i.unshift(lt,i,It,i,Ri,i):$i.unshift(r,i))},s.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Qn(n)?zn(n):n).getBoundingClientRect(),a=o[r?Cs:Ps]*i||0;return r?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},s.positionInViewport=function(n,i,r){Qn(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[r?Cs:Ps],c=i==null?a/2:i in Al?Al[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+c)/lt.innerWidth:(o.top+c)/lt.innerHeight},s.killAll=function(n){if(rt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ks.killAll||[];ks={},i.forEach(function(r){return r()})}},s}();He.version="3.12.5";He.saveStyles=function(s){return s?Ka(s).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),od())}}):Jn};He.revert=function(s,e){return cf(!s,e)};He.create=function(s,e){return new He(s,e)};He.refresh=function(s){return s?Ea():(uo||He.register())&&Es(!0)};He.update=function(s){return++st.cache&&Sr(s===!0?2:0)};He.clearScrollMemory=Yg;He.maxScroll=function(s,e){return Wi(s,e?Un:en)};He.getScrollFunc=function(s,e){return ss(zn(s),e?Un:en)};He.getById=function(s){return cd[s]};He.getAll=function(){return rt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};He.isScrolling=function(){return!!xi};He.snapDirectional=af;He.addEventListener=function(s,e){var t=ks[s]||(ks[s]=[]);~t.indexOf(e)||t.push(e)};He.removeEventListener=function(s,e){var t=ks[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};He.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(l,u){var h=[],d=[],f=Se.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),r<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(r)&&(r=r(),on(He,"refresh",function(){return r=e.batchMax()})),Ka(s).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(He.create(l))}),t};var Sm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===Ri&&s(It,t)},Wc={auto:1,scroll:1},U1=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Se.core.getCache(r),a=xn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==It&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Wc[(c=fi(r)).overflowY]||Wc[c.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Bs(r)&&(Wc[(c=fi(r)).overflowY]||Wc[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Kg=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&U1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(Ot,qt.eventTypes[0],Em,!1,!0)},onDisable:function(){return sn(Ot,qt.eventTypes[0],Em,!0)}})},O1=/(input|label|select|textarea)/i,bm,Em=function(e){var t=O1.test(e.target.tagName);(t||bm)&&(e._gsapAllow=!0,bm=t)},F1=function(e){ys(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,c,l=zn(e.target)||Ri,u=Se.core.globals().ScrollSmoother,h=u&&u.get(),d=Br&&(e.content&&zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=ss(l,en),g=ss(l,Un),_=1,m=(qt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,M=On(i)?function(){return i(a)}:function(){return i||2.8},S,x,w=Kg(l,e.type,!0,r),A=function(){return x=!1},b=Bi,R=Bi,y=function(){c=Wi(l,en),R=Ia(Br?1:0,c),n&&(b=Ia(0,Wi(l,Un))),S=Ls},v=function(){d._gsap.y=Sa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var V=Sa(a.deltaY/2),te=R(f.v-V);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var L=Sa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=st.cache,Sr()}return!0}f.offset&&v(),x=!0},N,B,W,X,q=function(){y(),N.isActive()&&N.vars.scrollY>c&&(f()>c?N.progress(1)&&f(c):N.resetTo("scrollY",c))};return d&&Se.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Br&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){x=!1;var Y=_;_=Sa((lt.visualViewport&&lt.visualViewport.scale||1)/m),N.pause(),Y!==_&&Vu(l,_>1.01?!0:n?!1:"x"),B=g(),W=f(),y(),S=Ls},e.onRelease=e.onGestureStart=function(Y,V){if(f.offset&&v(),!V)X.restart(!0);else{st.cache++;var te=M(),L,he;n&&(L=g(),he=L+te*.05*-Y.velocityX/.227,te*=Sm(g,L,he,Wi(l,Un)),N.vars.scrollX=b(he)),L=f(),he=L+te*.05*-Y.velocityY/.227,te*=Sm(f,L,he,Wi(l,en)),N.vars.scrollY=R(he),N.invalidate().duration(te).play(.01),(Br&&N.vars.scrollY>=c||L>=c-1)&&Se.to({},{onUpdate:q,duration:te})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),xn()-p>1e3&&(S=0,p=xn())},e.onChange=function(Y,V,te,L,he){if(Ls!==S&&y(),V&&n&&g(b(L[2]===V?B+(Y.startX-Y.x):g()+V-L[1])),te){f.offset&&v();var Ie=he[2]===te,tt=Ie?W+Y.startY-Y.y:f()+te-he[1],j=R(tt);Ie&&tt!==j&&(W+=j-tt),f(j)}(te||V)&&Sr()},e.onEnable=function(){Vu(l,n?!1:"x"),He.addEventListener("refresh",q),on(lt,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Vu(l,!0),sn(lt,"resize",q),He.removeEventListener("refresh",q),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=Br,Br&&!f()&&f(1),Br&&Se.ticker.add(Bi),X=a._dc,N=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jg(f,f(),function(){return N.pause()})},onUpdate:Sr,onComplete:X.vars.onComplete}),a};He.sort=function(s){return rt.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};He.observe=function(s){return new qt(s)};He.normalizeScroll=function(s){if(typeof s>"u")return Pn;if(s===!0&&Pn)return Pn.enable();if(s===!1){Pn&&Pn.kill(),Pn=s;return}var e=s instanceof qt?s:F1(s);return Pn&&Pn.target===e.target&&Pn.kill(),Bs(e.target)&&(Pn=e),e};He.core={_getVelocityProp:id,_inputObserver:Kg,_scrollers:st,_proxies:$i,bridge:{ss:function(){xi||zs("scrollStart"),xi=xn()},ref:function(){return gn}}};kg()&&Se.registerPlugin(He);const Tm={chispa:'<path d="M12 3v5M12 16v5M3 12h5M16 12h5M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',cerrar:'<path d="M6 6l12 12M18 6L6 18"/>',abajo:'<path d="M12 5v14M6 13l6 6 6-6"/>',externo:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',izq:'<path d="M15 5l-7 7 7 7"/>',der:'<path d="M9 5l7 7-7 7"/>',flecha:'<path d="M4 12h16M14 6l6 6-6 6"/>',cruce:'<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',cubo3d:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',interferencia:'<path d="M3 9h18M3 15h18"/><path d="M9 3v18"/><circle cx="9" cy="9" r="2.6"/>',rfi:'<path d="M4 5h16v11H9l-5 4z"/><path d="M10 8.5a2 2 0 1 1 2.8 1.8c-.6.3-.8.7-.8 1.2M12 13.6v.1"/>',cambios:'<path d="M4 9a8 8 0 0 1 14-3l2 2M20 15a8 8 0 0 1-14 3l-2-2"/><path d="M20 4v4h-4M4 20v-4h4"/>',versiones:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5"/>',ocultas:'<path d="M3 3l18 18"/><path d="M10.6 6.2A9 9 0 0 1 21 12a14 14 0 0 1-2.4 3.2M6.2 7.6A14 14 0 0 0 3 12a9 9 0 0 0 12.7 5.3"/><path d="M9.9 10a3 3 0 0 0 4.2 4.2"/>',alturas:'<path d="M4 3h16M4 21h16"/><path d="M12 6v12M9 9l3-3 3 3M9 15l3 3 3-3"/>',pasos:'<path d="M10 3v18M14 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="2.5"/>',mantenimiento:'<path d="M14.5 6.5a4 4 0 0 0 5 5L11 20a2.1 2.1 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',constructibilidad:'<path d="M4 21V9l6-5 6 5"/><path d="M10 4v17M16 9h5v12M4 13h6M4 17h6"/>',registros:'<path d="M8 4h8v3H8z"/><path d="M6 5H5v16h14V5h-1"/><path d="M8 11h8M8 15h5"/>',archivo:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',coordenadas:'<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',alerta:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.1"/>',nota:'<path d="M5 4h14v12l-4 4H5z"/><path d="M15 20v-4h4M8 9h8M8 13h5"/>',manual:'<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12v4"/>',garantia:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',etiqueta:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.4"/>',ubicacion:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',calendario:'<path d="M4 6h16v15H4z"/><path d="M4 10h16M8 3v5M16 3v5"/>',plano:'<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',capas:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/>',casco:'<path d="M3 17h18M5 17a7 7 0 0 1 14 0"/><path d="M10 10V6h4v4"/><path d="M4 17v2h16v-2"/>',gemelo:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/><circle cx="12" cy="12" r="1.6"/>',escaner:'<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M4 12h16"/>',diseno:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',red:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M6 6.5l3.6 3.6M18 6.5l-3.6 3.6M6 17.5l3.6-3.6M18 17.5l-3.6-3.6"/>',propietario:'<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M9 10h.1M15 10h.1"/>',arquitectura:'<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-5h6v5M9 11h2M13 11h2"/>',estructura:'<path d="M3 5h18M3 19h18"/><path d="M6 5v14M18 5v14M12 5v14"/>',hidro:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>',rci:'<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-3 3.5-3 6-1-1-1.5-2-1.5-3C7 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',electrica:'<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',mecanica:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-6 4-6 2 0 2 3 0 5M14 12c4 0 6 1 6 4 0 2-3 2-5 0M12 14c0 4-1 6-4 6-2 0-2-3 0-5M10 12c-4 0-6-1-6-4 0-2 3-2 5 0"/>'};function Ds(s,e=""){const t=Tm[s]??Tm.chispa;return`<svg class="ico ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}function B1(s=document){s.querySelectorAll("i[data-i]").forEach(e=>{e.outerHTML=Ds(e.dataset.i,e.className)}),s.querySelectorAll("svg.ico").forEach(e=>e.querySelectorAll("path, circle").forEach(t=>t.setAttribute("pathLength","1")))}const k1="http://www.w3.org/2000/svg",cr=(s,e={})=>{const t=document.createElementNS(k1,s);for(const n in e)t.setAttribute(n,String(e[n]));return t},Gu=matchMedia("(prefers-reduced-motion: reduce)").matches;class z1{constructor(e,t){hn(this,"nodos",[]);hn(this,"enlaces",new Map);hn(this,"W",900);hn(this,"H",420);hn(this,"tiempo",0);hn(this,"gL",cr("g",{class:"r-enlaces"}));hn(this,"gP",cr("g",{class:"r-pulsos"}));hn(this,"gN",cr("g",{class:"r-nodos"}));hn(this,"visible",!1);hn(this,"raf",0);hn(this,"ultimo",0);hn(this,"arrastre",null);hn(this,"movido",!1);hn(this,"sobre",null);hn(this,"onCambio");hn(this,"onSel");this.svg=e,e.append(this.gL,this.gP,this.gN);const n=t.filter(r=>!r.hub).length;let i=0;this.nodos=t.map(r=>{const o=cr("g",{class:"r-nodo"+(r.hub?" hub":""),tabindex:0,role:"button","aria-label":r.label}),a=cr("rect",{rx:3}),c=cr("rect",{class:"r-dot",width:7,height:7,transform:"rotate(45)",fill:r.color}),l=cr("text",{"dominant-baseline":"middle"});l.textContent=r.label,o.append(a,c,l),this.gN.append(o);const u=r.hub?-Math.PI/2:-Math.PI/2+i++/n*Math.PI*2,h={...r,on:r.on??!0,x:0,y:0,vx:0,vy:0,ang:u,fase:Math.random()*10,vis:0,w:0,h:0,g:o,rect:a};return o.addEventListener("pointerdown",d=>this.agarrar(d,h)),o.addEventListener("pointerenter",()=>{var d;this.sobre=h,(d=this.onSel)==null||d.call(this,h,"hover"),this.resaltar()}),o.addEventListener("pointerleave",()=>{this.sobre=null,this.resaltar()}),o.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),this.alternar(h))}),h}),this.medir(),new ResizeObserver(()=>this.medir()).observe(e),new IntersectionObserver(([r])=>{this.visible=r.isIntersecting,this.visible&&this.arrancar()},{rootMargin:"100px"}).observe(e),addEventListener("pointermove",r=>this.mover(r)),addEventListener("pointerup",()=>this.soltar()),this.sincronizar(!1)}medir(){const e=this.svg.getBoundingClientRect();if(!e.width)return;const t=e.width/this.W,n=e.height/this.H;this.nodos.forEach(r=>{r.x*=t,r.y*=n}),this.W=e.width,this.H=e.height,this.svg.setAttribute("viewBox",`0 0 ${this.W} ${this.H}`);const i=this.W<520;this.nodos.forEach(r=>{const o=r.g.querySelector("text");o.textContent=i&&r.corto?r.corto:r.label,o.style.fontSize=(r.hub?i?12:14:i?11:13)+"px";const a=o.getComputedTextLength()||r.label.length*7;r.w=a+(i?30:40),r.h=r.hub?i?34:42:i?28:34,r.rect.setAttribute("x",String(-r.w/2)),r.rect.setAttribute("y",String(-r.h/2)),r.rect.setAttribute("width",String(r.w)),r.rect.setAttribute("height",String(r.h));const c=r.g.querySelector(".r-dot");c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("transform",`translate(${-r.w/2+(i?12:16)} 0) rotate(45) translate(-3.5 -3.5)`),o.setAttribute("x",String(-r.w/2+(i?21:27)))})}estrella(){const e=this.nodos.find(t=>t.hub);return!!e&&e.on}topologia(){const e=this.nodos.filter(i=>i.on&&!i.hub),t=this.nodos.find(i=>i.hub);if(t&&t.on)return e.map(i=>[t,i]);const n=[];return e.forEach((i,r)=>e.slice(r+1).forEach(o=>n.push([i,o]))),n}sincronizar(e=!0){var r;const t=new Map(this.topologia().map(([o,a])=>[o.id+"|"+a.id,[o,a]])),n=this.estrella();let i=0;t.forEach(([o,a],c)=>{const l=this.enlaces.get(c);if(l){l.vivo||(l.vivo=!0,ce.to(l,{t:1,duration:.7,ease:"power2.out",overwrite:!0}));return}const u=cr("line",{class:"r-enlace"});this.gL.append(u);const h=Array.from({length:n?2:1},(f,g)=>{const _=cr("circle",{r:n?2.6:2.2,class:"r-pulso"});return this.gP.append(_),{p:g/2+Math.random()*.2,v:n?.45:.25+Math.random()*.5,dir:n?-1:Math.random()<.5?1:-1,el:_}}),d={a:o,b:a,t:0,vivo:!0,el:u,pulsos:h};this.enlaces.set(c,d),ce.to(d,{t:1,duration:e?.9:0,delay:e?.15+i++*.05:0,ease:"power3.out"})}),this.enlaces.forEach((o,a)=>{t.has(a)||!o.vivo||(o.vivo=!1,ce.to(o,{t:0,duration:e?.5:0,ease:"power2.in",overwrite:!0,onComplete:()=>{o.vivo||(o.el.remove(),o.pulsos.forEach(c=>c.el.remove()),this.enlaces.delete(a))}}))}),this.svg.classList.toggle("estrella",n),this.svg.classList.toggle("malla",!n),this.nodos.forEach(o=>o.g.classList.toggle("off",!o.on)),e&&!Gu&&this.nodos.forEach(o=>{o.vx+=(Math.random()-.5)*6,o.vy+=(Math.random()-.5)*6}),(r=this.onCambio)==null||r.call(this,t.size,n,this.nodos.filter(o=>o.on&&!o.hub).length),this.resaltar(),this.arrancar()}alternar(e){var t;if(e.on&&!e.hub&&this.nodos.filter(n=>n.on&&!n.hub).length<=2){ce.fromTo(e.g,{x:-4},{x:0,duration:.4,ease:"elastic.out(1, 0.3)"});return}e.on=!e.on,(t=this.onSel)==null||t.call(this,e,"toggle"),this.sincronizar(!0)}setHub(e){const t=this.nodos.find(n=>n.hub);t&&t.on!==e&&(t.on=e,this.sincronizar(!0))}reiniciar(){this.medir(),this.nodos.forEach((e,t)=>{e.x=this.W/2+Math.cos(e.ang)*10,e.y=this.H/2+Math.sin(e.ang)*10,e.vx=Math.cos(e.ang)*9,e.vy=Math.sin(e.ang)*6,e.vis=0,ce.to(e,{vis:1,duration:.8,delay:.1+t*.07,ease:"back.out(1.8)"})}),this.enlaces.forEach((e,t)=>{ce.fromTo(e,{t:0},{t:e.vivo?1:0,duration:1,delay:.5+0+Math.random()*.5,ease:"power3.out"})}),this.arrancar()}resaltar(){const e=this.sobre;this.enlaces.forEach(t=>t.el.classList.toggle("hl",!!e&&(t.a===e||t.b===e))),this.nodos.forEach(t=>t.g.classList.toggle("hl",t===e))}punto(e){const t=this.svg.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}agarrar(e,t){e.preventDefault(),this.arrastre=t,this.movido=!1,e.pointerType==="mouse"&&this.svg.classList.add("arrastrando")}mover(e){const t=this.arrastre;if(!t)return;const n=this.punto(e);Math.hypot(n.x-t.x,n.y-t.y)>6&&(this.movido=!0),this.movido&&e.pointerType==="mouse"&&(t.x=n.x,t.y=n.y,t.vx=0,t.vy=0,this.arrancar())}soltar(){const e=this.arrastre;e&&(this.arrastre=null,this.svg.classList.remove("arrastrando"),this.movido||this.alternar(e))}arrancar(){!this.raf&&this.visible&&(this.ultimo=performance.now(),this.raf=requestAnimationFrame(e=>this.paso(e)))}paso(e){this.raf=0;const t=Math.min(.05,(e-this.ultimo)/1e3);this.ultimo=e,this.tiempo+=t;const n=t*60,{W:i,H:r}=this,o=i/2,a=this.estrella(),c=this.nodos,l=46,u=Math.max(...c.map(x=>x.hub?0:x.w)),h=(r-l)/2,d=Math.max(60,i/2-u/2-10),f=h-26,g=c.filter(x=>x.on&&!x.hub),_=c.filter(x=>!x.on),m=a?0:Math.PI/g.length,p=new Map;g.forEach((x,w)=>{const A=-Math.PI/2+m+w/g.length*Math.PI*2;p.set(x,[o+Math.cos(A)*d*(a?.92:1),h+Math.sin(A)*f*(a?.92:1)])});const M=_.reduce((x,w)=>x+w.w+14,-14);let S=o-M/2;_.forEach(x=>{p.set(x,[S+x.w/2,r-x.h/2-4]),S+=x.w+14}),c.forEach(x=>{x.hub&&x.on&&p.set(x,[o,h])}),c.forEach(x=>{let w=0,A=0;const[b,R]=p.get(x),y=x.on?.022:.04;w+=(b-x.x)*y,A+=(R-x.y)*y,x.on&&!Gu&&(w+=Math.sin(this.tiempo*.8+x.fase)*.09,A+=Math.cos(this.tiempo*.6+x.fase*1.3)*.09),c.forEach(v=>{if(v===x)return;const P=x.x-v.x,N=x.y-v.y,B=(x.w+v.w)/2+16-Math.abs(P),W=(x.h+v.h)/2+12-Math.abs(N);B>0&&W>0&&(B<W*2.2?w+=Math.sign(P||1)*B*.08:A+=Math.sign(N||1)*W*.08)}),x.fx=w,x.fy=A}),c.forEach(x=>{if(x===this.arrastre&&this.movido)return;x.vx=(x.vx+x.fx*n)*Math.pow(.86,n),x.vy=(x.vy+x.fy*n)*Math.pow(.86,n);const w=Math.hypot(x.vx,x.vy);w>14&&(x.vx*=14/w,x.vy*=14/w),x.x+=x.vx*n,x.y+=x.vy*n,x.x=Math.max(x.w/2+4,Math.min(i-x.w/2-4,x.x)),x.y=Math.max(x.h/2+4,Math.min(r-x.h/2-4,x.y))}),c.forEach(x=>x.g.setAttribute("transform",`translate(${x.x.toFixed(1)} ${x.y.toFixed(1)}) scale(${x.vis.toFixed(3)})`)),this.enlaces.forEach(x=>{const{a:w,b:A,t:b}=x,R=w.x+(A.x-w.x)*b,y=w.y+(A.y-w.y)*b;x.el.setAttribute("x1",w.x.toFixed(1)),x.el.setAttribute("y1",w.y.toFixed(1)),x.el.setAttribute("x2",R.toFixed(1)),x.el.setAttribute("y2",y.toFixed(1)),x.el.style.opacity=String(Math.min(1,b*1.5)),x.pulsos.forEach(v=>{Gu||(v.p+=v.v*t),v.p>1&&(v.p-=1,a||(v.dir=Math.random()<.5?1:-1));const P=v.dir===1?v.p:1-v.p;v.el.setAttribute("cx",(w.x+(A.x-w.x)*P).toFixed(1)),v.el.setAttribute("cy",(w.y+(A.y-w.y)*P).toFixed(1)),v.el.style.opacity=b>.98&&x.vivo?String(Math.sin(v.p*Math.PI)):"0"})}),this.visible&&(this.raf=requestAnimationFrame(x=>this.paso(x)))}}ce.registerPlugin(He);const pt=(s,e=document)=>e.querySelector(s),Ge=(s,e=document)=>[...e.querySelectorAll(s)],kl=matchMedia("(prefers-reduced-motion: reduce)").matches;function H1(s){if(s.dataset.partido)return;s.dataset.partido="1";const e=t=>{[...t.childNodes].forEach(n=>{if(n.nodeType===3){const i=document.createDocumentFragment();(n.textContent??"").split(/(\s+)/).forEach(r=>{if(r)if(/^\s+$/.test(r))i.appendChild(document.createTextNode(" "));else{const o=document.createElement("span");o.className="w",o.textContent=r,i.appendChild(o)}}),n.replaceWith(i)}else n.nodeType===1&&n.tagName!=="BR"&&e(n)})};e(s)}function V1(s,e=1.6,t=0){const n=+s.dataset.n,i=s.dataset.suf??"",r={v:0},o=a=>s.dataset.fmt==="m2"?Math.round(a).toLocaleString("es-CO")+" m²":Math.round(a).toLocaleString("es-CO")+i;ce.fromTo(r,{v:0},{v:n,duration:e,delay:t,ease:"power2.out",onUpdate:()=>s.textContent=o(r.v)})}function G1(s,e,t){return Array.from({length:s},(n,i)=>{const r=i*2.399963+.6,o=.45+.55*((i+1)/s);return{x:Math.cos(r)*e*o,y:Math.sin(r)*t*o}})}function W1(s){const e=ce.timeline({defaults:{ease:"power3.out"}});ce.set(Ge("[data-a]",s).filter(i=>!["chips","pills"].includes(i.dataset.a)),{clearProps:"transform,filter"});let t=0;Ge('[data-a="up"]',s).forEach((i,r)=>e.fromTo(i,{autoAlpha:0,y:36,filter:"blur(8px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:1},.1+r*.12)),Ge('[data-a="words"]',s).forEach(i=>{H1(i),ce.set(i,{autoAlpha:1}),e.fromTo(Ge(".w",i),{autoAlpha:0,yPercent:70,rotateX:-70,filter:"blur(14px)",transformPerspective:600},{autoAlpha:1,yPercent:0,rotateX:0,filter:"blur(0px)",duration:1.1,stagger:.07},.05),t=Math.max(t,.05+Ge(".w",i).length*.07+.6)});const n=pt('[data-a="strike"]',s);if(n){e.fromTo(n,{autoAlpha:0,x:-30,filter:"blur(10px)"},{autoAlpha:1,x:0,filter:"blur(0px)",duration:.8},t),e.fromTo(n,{"--s":0},{"--s":1,duration:.6,ease:"power2.inOut"},t+.9),e.to(n,{opacity:.4,duration:.5},t+1.4);const i=pt('[data-a="deblur"]',s);i&&e.fromTo(i,{autoAlpha:0,x:60,scale:1.25,filter:"blur(22px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:1.1},t+1.5)}return Ge('[data-a="fly"]',s).forEach((i,r)=>e.fromTo(i,{autoAlpha:0,z:-500,y:140,rotateX:38,rotateY:r%2?14:-14,filter:"blur(14px)",transformPerspective:1e3},{autoAlpha:1,z:0,y:0,rotateX:0,rotateY:0,filter:"blur(0px)",duration:1.3},.35+r*.14)),Ge('[data-a="flip"]',s).forEach((i,r)=>e.fromTo(i,{autoAlpha:0,rotateY:-95,x:-80,z:-300,transformPerspective:1400,transformOrigin:"left center"},{autoAlpha:1,rotateY:0,x:0,z:0,duration:1.2,ease:"power4.out"},.4+r*.22)),Ge('[data-a="tilt"]',s).forEach(i=>e.fromTo(i,{autoAlpha:0,rotateX:45,rotateY:-25,y:160,z:-300,transformPerspective:1600},{autoAlpha:1,rotateX:6,rotateY:-7,y:0,z:0,duration:1.6,ease:"power3.out"},.3)),Ge('[data-a="msg"]',s).forEach((i,r)=>e.fromTo(i,{autoAlpha:0,x:i.classList.contains("der")?70:-70,scale:.85,filter:"blur(8px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:.7,ease:"back.out(1.6)"},1.4+r*.75)),Ge('[data-a="stagger"]',s).forEach((i,r)=>{ce.set(i,{autoAlpha:1}),e.fromTo([...i.children],{autoAlpha:0,y:26,x:-16,scale:.9,filter:"blur(8px)"},{autoAlpha:1,y:0,x:0,scale:1,filter:"blur(0px)",duration:.7,stagger:.07,ease:"back.out(1.5)"},.5+r*.15)}),Ge('[data-a="pop"]',s).forEach((i,r)=>e.fromTo(i,{autoAlpha:0,scale:.6,y:20,filter:"blur(10px)"},{autoAlpha:1,scale:1,y:0,filter:"blur(0px)",duration:.8,ease:"back.out(1.8)"},.55+r*.12)),Ge('[data-a="red"]',s).forEach(i=>{ce.set(i,{autoAlpha:1}),e.fromTo(Ge(".red-ui > *, .red-ayuda",i),{autoAlpha:0,y:16},{autoAlpha:1,y:0,duration:.6,stagger:.12},.3),e.call(()=>{var r;return(r=i.__red)==null?void 0:r.reiniciar()},[],.35)}),Ge('[data-a="flujo"]',s).forEach(i=>{const r=Ge("li",i);r.forEach(o=>o.classList.remove("on")),ce.set(i,{autoAlpha:1,"--p":0}),e.to(i,{"--p":1,duration:.5*r.length,ease:"none"},.6),r.forEach((o,a)=>{e.fromTo(o,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.6},.6+a*.5),e.fromTo(o,{"--s":0},{"--s":1,duration:.5,ease:"back.out(3)"},.6+a*.5),e.call(()=>o.classList.add("on"),[],.8+a*.5)})}),Ge('[data-a="diag"]',s).forEach(i=>{ce.set(i,{autoAlpha:1});const r=Ge(".nd",i),o=Ge(".ln.r",i),a=Ge(".ln.o",i);e.fromTo(Ge("text.dt, .sep",i),{autoAlpha:0},{autoAlpha:1,duration:.6,stagger:.15},.3),e.fromTo(r,{autoAlpha:0,scale:.4,transformOrigin:"50% 50%"},{autoAlpha:1,scale:1,duration:.5,stagger:.05,ease:"back.out(2)"},.5),[...o,...a].forEach(c=>{const l=c.getTotalLength();ce.set(c,{strokeDasharray:l,strokeDashoffset:l})}),e.to(o,{strokeDashoffset:0,duration:.9,stagger:.06,ease:"power2.inOut"},1),e.to(a,{strokeDashoffset:0,duration:.8,stagger:.08,ease:"power2.out"},1.9),e.fromTo(Ge("figcaption span",i),{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.6,stagger:.2},2.5),e.call(()=>q1(i),[],2.8)}),Ge('[data-a="gantt"]',s).forEach(i=>{ce.set(i,{autoAlpha:1}),e.fromTo(Ge(".g-meses span",i),{autoAlpha:0,y:-10},{autoAlpha:1,y:0,duration:.4,stagger:.06},.3),Ge(".g-fila",i).forEach((r,o)=>{e.fromTo(r,{autoAlpha:0},{autoAlpha:1,duration:.4},.6+o*.25),e.fromTo(pt(".g-et",r),{autoAlpha:0,x:-24},{autoAlpha:1,x:0,duration:.6},.6+o*.25),e.fromTo(pt(".g-bar",r),{scaleX:0},{scaleX:1,duration:1,ease:"power3.inOut"},.8+o*.25),e.fromTo(pt(".g-bar span",r),{autoAlpha:0},{autoAlpha:1,duration:.4},1.6+o*.25)})}),Ge('[data-a="hub"]',s).forEach(i=>{ce.set(i,{autoAlpha:1});const r=innerWidth<900,o=pt(".n0",i),a=Ge(".actor:not(.n0)",i),c=r?{xPercent:0,yPercent:0,x:0,y:0}:{xPercent:-50,yPercent:-50,x:0,y:0};e.fromTo(o,{...c,autoAlpha:0,scale:.6},{...c,autoAlpha:1,scale:1,duration:.7,ease:"back.out(2)"},.4),Ge(".hub-l path",i).forEach(l=>{const u=l.getTotalLength();ce.set(l,{strokeDasharray:u,strokeDashoffset:u})}),e.to(Ge(".hub-l path",i),{strokeDashoffset:0,duration:.8,stagger:.12,ease:"power2.out"},.9),e.fromTo(a,{...c,autoAlpha:0,scale:.85},{...c,autoAlpha:1,scale:1,duration:.6,stagger:.12,ease:"power3.out"},1.3)}),Ge('[data-a="arbol"]',s).forEach(i=>{ce.set(i,{autoAlpha:1,"--p":0,"--q":0}),e.fromTo(pt(".raiz",i),{autoAlpha:0,x:-30},{autoAlpha:1,x:0,duration:.7},.4),e.to(pt("ul",i),{"--q":1,duration:.4,ease:"power2.out"},.9),e.to(pt("ul",i),{"--p":1,duration:.7,ease:"power2.inOut"},1.2),e.fromTo(Ge("li",i),{autoAlpha:0,x:-14},{autoAlpha:1,x:0,duration:.45,stagger:.12},1.5)}),Ge(".etapa",s).forEach((i,r)=>e.fromTo([...i.children],{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.5,stagger:.08},.9+r*.22)),Ge('[data-a="chips"], [data-a="pills"]',s).forEach(i=>{const r=Ge(":scope > *",i),o=i.clientWidth,a=i.clientHeight;if(innerWidth<900){r.forEach(l=>ce.killTweensOf(l)),e.fromTo(r,{xPercent:0,yPercent:0,x:0,y:28,z:0,scale:.7,autoAlpha:0,filter:"blur(10px)"},{y:0,scale:1,autoAlpha:1,filter:"blur(0px)",duration:.7,stagger:.06,ease:"back.out(1.6)"},.5);return}const c=G1(r.length,o*.46,a*.44);r.forEach((l,u)=>{ce.killTweensOf(l),e.fromTo(l,{xPercent:-50,yPercent:-50,x:0,y:0,z:-600,scale:.2,autoAlpha:0,filter:"blur(16px)"},{x:c[u].x,y:c[u].y,z:0,scale:1,autoAlpha:1,filter:"blur(0px)",duration:1.3,ease:"expo.out",onComplete:()=>{kl||ce.to(l,{y:c[u].y+(u%2?10:-10),x:c[u].x+(u%3?6:-6),duration:2.6+u%4*.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})}},.5+u*.07)})}),Ge("[data-n]",s).forEach(i=>e.call(()=>V1(i,i.closest(".leyendo")?2.4:1.6),[],.6)),Ge(".leyendo",s).forEach(i=>{e.fromTo(pt(".barra i",i),{width:"0%"},{width:"100%",duration:2.4,ease:"power2.out"},.6);const r=Ge(".checks span",i);r.forEach(o=>o.classList.remove("ok")),r.forEach((o,a)=>e.call(()=>o.classList.add("ok"),[],.9+a*(1.8/r.length)))}),e}const Wu=["Arq.","Estr.","Hidro","RCI","Eléc.","Mec."];function X1(){Ge('[data-a="diag"]').forEach(s=>{const e=(l,u,h,d=!1,f=70)=>`<g class="nd${d?" c":""}" transform="translate(${l},${u})"><rect x="${-f/2}" y="-15" width="${f}" height="30" rx="2"/><text>${h}</text></g>`,t=[[70,70],[330,60],[200,120],[60,200],[340,205],[210,225]];let n="";t.forEach((l,u)=>t.forEach((h,d)=>{d>u&&(u+d)%2&&(n+=`<path class="ln r" d="M${l[0]} ${l[1]} L${h[0]} ${h[1]}"/>`)}));const i=[700,140],r=Wu.map((l,u)=>{const h=-Math.PI/2+u*Math.PI*2/6;return[i[0]+Math.cos(h)*190,i[1]+Math.sin(h)*92]}),o=r.map(l=>`<path class="ln o" d="M${l[0]} ${l[1]} L${i[0]} ${i[1]}"/>`).join(""),a=s.querySelector(".nodos-a"),c=s.querySelector(".nodos-b");if(a.innerHTML=n+t.map((l,u)=>e(l[0],l[1],Wu[u])).join(""),c.innerHTML=o+r.map((l,u)=>e(l[0],l[1],Wu[u])).join("")+e(i[0],i[1],"BIM",!0,84),innerWidth<900){const l=s.querySelector("svg");l.setAttribute("viewBox","-15 0 480 520");const[u,h]=[...l.querySelectorAll("text.dt")];h.setAttribute("x","250"),h.setAttribute("y","288"),c.setAttribute("transform","translate(-450 270)"),l.querySelector(".sep").setAttribute("d","M40 262 H410")}})}function q1(s){if(kl||s.dataset.pulsos)return;s.dataset.pulsos="1";const e=s.querySelector("svg");Ge(".ln.o",s).forEach((t,n)=>{const i=t,r=i.getTotalLength(),o=document.createElementNS("http://www.w3.org/2000/svg","circle");o.setAttribute("r","3"),o.setAttribute("class","pulso-dot"),o.setAttribute("opacity","0"),e.appendChild(o);const a={t:0};ce.to(a,{t:1,duration:1.6,repeat:-1,delay:n*.27,ease:"power1.in",repeatDelay:.6,onUpdate:()=>{const c=i.getPointAtLength(a.t*r);o.setAttribute("cx",String(c.x)),o.setAttribute("cy",String(c.y)),o.setAttribute("opacity",String(a.t<.9?1:(1-a.t)*10))}})})}function Y1(){X1(),Ge("[data-escena]").forEach(s=>{const e=Ge("[data-a]",s).filter(o=>!["words","chips","pills"].includes(o.dataset.a));ce.set(e,{autoAlpha:0});let t=null;const n=()=>{t==null||t.kill(),t=W1(s)},i=o=>{t==null||t.kill(),ce.to(Ge("[data-a]",s).filter(a=>!["chips","pills"].includes(a.dataset.a)),{autoAlpha:0,y:-40*o,filter:"blur(10px)",duration:.5,ease:"power2.in",overwrite:"auto"})};s.dataset.escena==="hero"&&setTimeout(n,500);const r=s.dataset.escena==="capas";He.create({trigger:s,start:r?"top 40%":"top 68%",end:r?"bottom 60%":"bottom 32%",onEnter:n,onEnterBack:n,onLeave:()=>i(1),onLeaveBack:()=>i(-1)})}),$1(),ce.from("#top > *",{autoAlpha:0,y:-24,stagger:.1,duration:.9,ease:"power3.out",delay:.3,clearProps:"opacity,visibility,transform"}),ce.from("#dock",{autoAlpha:0,y:60,scale:.9,duration:1,ease:"back.out(1.6)",delay:.8}),ce.fromTo("#capas .capa",{autoAlpha:0,y:14},{autoAlpha:1,y:0,stagger:.07,duration:.5,delay:1.2,clearProps:"opacity,visibility,transform"})}function $1(){if(kl||matchMedia("(hover: none)").matches)return;const s=".tcapa, .grafico, .actor, .g-bar, .flujo li, .arbol .raiz, .frente .habs span, .alerta";document.addEventListener("pointermove",e=>{const t=e.target.closest(s);if(Ge(s).forEach(a=>{a!==t&&a.dataset.inclinada&&(delete a.dataset.inclinada,ce.to(a,{rotateX:0,rotateY:0,"--gx":"50%","--gy":"-20%",duration:.7,ease:"power3.out"}))}),!t)return;const n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,r=(e.clientY-n.top)/n.height-.5,o=t.classList.contains("grafico")?3:7;t.dataset.inclinada="1",ce.to(t,{rotateY:i*o,rotateX:-r*o,transformPerspective:900,"--gx":`${(i+.5)*100}%`,"--gy":`${(r+.5)*100}%`,duration:.5,ease:"power2.out"})})}function j1(){let s=!1;const e=a=>"$"+Math.round(a*1e6).toLocaleString("es-CO"),t={total:0,iva:0},n=pt("#barras"),i=["Implementación, BEP y requisitos BIM","Coordinación de diseños · 2 meses","Acompañamiento BIM en obra","Cierre as-built y gemelo digital"];n.innerHTML=["A","B","C","D"].map((a,c)=>`<div class="barra-et"><b><small>Etapa</small>${a}</b><div class="nom"><em>${i[c]}</em><div class="t"><i></i></div></div><span>—</span></div>`).join("");const r=pt("#curva"),o=(a=!0)=>{const c=+pt("#rMeses").value,l=s?13.8:23,u=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct"];pt("#vMeses").textContent=`${c} meses · feb – ${u[c]} 2027`;const h=[33,47,c*l,31],d=h.reduce((R,y)=>R+y,0);ce.to(t,{total:d,iva:d*1.19,duration:.8,ease:"power2.out",onUpdate:()=>{pt("#oTotal").textContent=e(t.total),pt("#oIva").textContent=e(t.iva)}});const f=23*9;pt(".barra-et:nth-child(3) em",n).textContent=`Acompañamiento BIM en obra · ${c} meses${s?" (−40%)":""}`,Ge(".barra-et",n).forEach((R,y)=>{ce.to(pt("i",R),{width:100*h[y]/f+"%",duration:a?1:0,ease:"power3.out",delay:a?y*.08:0}),pt("span",R).textContent=e(h[y])});const g=R=>{const y=[0,33];for(let v=1;v<=c;v++)y.push(y[y.length-1]+R+(v<=2?23.5:0)+(v===c?31:0));return y},_=600,m=230,p=c+2,M=340,S=R=>R.map((y,v)=>`${v?"L":"M"}${v/(p-1)*_},${m-y/M*m}`).join(" "),x=g(23),w=g(13.8);r.innerHTML=`
      <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".35"/><stop offset="1" stop-color="#D5BE91" stop-opacity="0"/></linearGradient></defs>
      ${[100,200,300].map(R=>`<line x1="0" x2="${_}" y1="${m-R/M*m}" y2="${m-R/M*m}" stroke="rgba(220,229,236,.08)"/><text x="${_}" y="${m-R/M*m-6}" text-anchor="end">$${R} M</text>`).join("")}
      <path d="${S(s?w:x)} L${_},${m} L0,${m} Z" fill="url(#gA)" class="area"/>
      <path d="${S(x)}" fill="none" stroke="${s?"rgba(220,229,236,.3)":"#D5BE91"}" stroke-width="${s?1.5:3}" class="ln"/>
      <path d="${S(w)}" fill="none" stroke="${s?"#D5BE91":"rgba(220,229,236,.3)"}" stroke-width="${s?3:1.5}" stroke-dasharray="${s?"":"5 6"}" class="ln2"/>
      <text x="6" y="${m+22}">Inicio · ene 2027</text><text x="${_}" y="${m+22}" text-anchor="end">Entrega · ${u[c]} 2027</text>`;const A=r.querySelector(".ln"),b=A.getTotalLength();a&&(ce.fromTo(A,{strokeDasharray:b,strokeDashoffset:b},{strokeDashoffset:0,duration:1.8,ease:"power2.inOut",onComplete:()=>{s||(A.style.strokeDasharray="")}}),ce.fromTo(r.querySelector(".area"),{opacity:0},{opacity:1,duration:1.2,delay:.8}))};pt("#rMeses").addEventListener("input",()=>o(!1)),pt("#segModo").addEventListener("click",a=>{const c=a.target.closest("button");c&&(s=c.dataset.m==="int",Ge("#segModo button").forEach(l=>l.classList.toggle("on",l===c)),o(!0))}),o(!1),He.create({trigger:'[data-escena="honorarios"]',start:"top 60%",onEnter:()=>o(!0),onEnterBack:()=>o(!0)})}const K1=[{f:"Frente 1",s:["214","215","216","217"],c:"1 JS + 3 estándar"},{f:"Frente 2",s:["225","218","219","220"],c:"1 JS + 3 estándar"},{f:"Frente 3",s:["223","222","224","221"],c:"3 JS + 1 estándar"}],Z1=[["01 sep","Inicio real","Entrega del piso e inspecciones preliminares en las doce habitaciones."],["03 sep","Inicio flujo productivo","Cuadrillas civiles, plomeros y eléctricos circulan por habitaciones."],["21 sep","Control de redes","Cada baño con redes y pruebas liberadas antes de autorizar enchapes."],["05 oct","Control de acabados","Enchape terminado antes de cielos RH y dilatación perimetral."],["31 oct","Cierre físico del piso","Pruebas, punch list, aseo y dossier terminados."],["02 nov","Entrega formal conjunta","Recepción consolidada del piso completo."]];function J1(){pt("#frentes").innerHTML=K1.map(i=>`<div class="frente"><b>${i.f}</b><div class="habs">${i.s.map(r=>`<span>${r}</span>`).join("<em>"+Ds("flecha")+"</em>")}</div></div>`).join(""),pt("#hitos").innerHTML='<i class="traz"></i>'+Z1.map(([i,r,o])=>`<div class="hito"><time>${i} · 2026</time><b>${r}</b><p>${o}</p></div>`).join("");const s=()=>{const i=ce.timeline({delay:.5});i.fromTo(".frente",{autoAlpha:0,x:-60,rotateY:25,transformPerspective:800},{autoAlpha:1,x:0,rotateY:0,stagger:.15,duration:.9,ease:"power3.out"},0),i.fromTo(".frente .habs span",{autoAlpha:0,scale:.4},{autoAlpha:1,scale:1,stagger:.04,duration:.4,ease:"back.out(2)"},.4),i.fromTo(".eje .traz",{height:0},{height:"calc(100% - 12px)",duration:2.6,ease:"power1.inOut"},.6),i.fromTo(".hito",{autoAlpha:0,x:40,filter:"blur(6px)"},{autoAlpha:1,x:0,filter:"blur(0px)",stagger:.4,duration:.6},.7),i.call(n,[],1.6)};let e=0,t=0;const n=()=>{t||kl||(t=window.setInterval(()=>{e=(e+1)%4,document.querySelectorAll(".frente").forEach(i=>i.querySelectorAll(".habs span").forEach((r,o)=>r.classList.toggle("act",o===e)))},1100))};ce.set(".hito, .frente",{autoAlpha:0}),He.create({trigger:'[data-escena="obra"]',start:"top 65%",onEnter:s,onEnterBack:s})}const Q1=[{id:"arq",corto:"Arquitectura",label:"Arquitectura",color:"#D5BE91"},{id:"est",corto:"Estructura",label:"Estructura",color:"#9fb6cc"},{id:"hid",corto:"Hidro",label:"Hidrosanitaria",color:"#3d8bff"},{id:"rci",corto:"RCI",label:"Red contra incendios",color:"#ff7a2f"},{id:"ele",corto:"Eléctrica",label:"Eléctrica",color:"#2fd0b5"},{id:"mec",corto:"Mecánica",label:"Mecánica",color:"#c3cbd4"},{id:"bim",corto:"BIM",label:"Modelo BIM federado",color:"#00234C",hub:!0,on:!1}],eA=[{id:"esc",corto:"Escaneo",label:"Proveedor de escaneo",color:"#9fb6cc",info:"Levantamiento 3D y entrega del modelo de condiciones existentes LOD 300 y soportes acordados."},{id:"dis",corto:"Diseñadores",label:"Diseñadores / especialistas",color:"#3d8bff",info:"Desarrollar, revisar y aprobar técnicamente sus modelos por especialidad, en LOD 400 según matriz pactada."},{id:"con",corto:"Contratistas",label:"Contratistas / fabricantes",color:"#ff7a2f",info:"Mantener modelos de fabricación/instalación, documentar cambios y suministrar as-built y datos de equipos."},{id:"pro",corto:"Propietario",label:"Propietario / gerencia",color:"#2fd0b5",info:"Contratar a responsables, tomar decisiones de aprobación, exigir cumplimiento y recibir los entregables."},{id:"baco",corto:"BACO",label:"BACO STUDIO",color:"#00234C",hub:!0,info:"Establecer requisitos, administrar BEP/CDE, coordinar, verificar entregas e integrar el cierre digital."}];function Am(s,e,t){const n=new z1(pt("svg.red",s),e);s.__red=n;const i=pt("[data-red-n]",s),r=pt("[data-red-arq]",s),o={n:+i.textContent};return n.onCambio=(a,c,l)=>{ce.to(o,{n:a,duration:.8,ease:"power2.out",overwrite:!0,onUpdate:()=>{i.textContent=String(Math.round(o.n))}}),ce.to(i,{color:c?"#D5BE91":"#ff8a77",duration:.6});const u=t(l,c);ce.to(r,{autoAlpha:0,y:-8,duration:.2,overwrite:!0,onComplete:()=>{r.textContent=u,ce.fromTo(r,{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.35})}}),s.classList.toggle("es-malla",!c),Ge(".red-modo button",s).forEach(h=>h.classList.toggle("on",h.dataset.m==="estrella"===c))},n.sincronizar(!1),Ge(".red-modo button",s).forEach(a=>a.addEventListener("click",()=>n.setHub(a.dataset.m==="estrella"))),n}function tA(){const s=pt('[data-red="reto"]');s&&Am(s,Q1,(i,r)=>r?`Estrella · ${i} especialidades conectadas al modelo BIM`:`Malla · ${i} especialidades todas contra todas`);const e=pt('[data-red="actores"]');if(!e)return;const t=Am(e,eA,(i,r)=>r?`Estrella · ${i} actores conectados a BACO`:`Malla · ${i} actores todos contra todos`),n=pt("#resp");t.onSel=(i,r)=>{if(!i.info)return;const o=r==="toggle"&&!t.nodos.find(a=>a.id===i.id).on;ce.to(n,{autoAlpha:0,y:10,duration:.18,overwrite:!0,onComplete:()=>{pt("small",n).textContent=o?`${i.label} · fuera de la red`:i.label,pt("p",n).textContent=i.info,ce.fromTo(pt("p",n),{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.6,ease:"power2.out"}),ce.to(n,{autoAlpha:1,y:0,duration:.35})}})}}ce.registerPlugin(He);const cl=["214","215","216","217","218","219","220","221","222","223","224","225"],nA=["215","216","217","218","219","220","221","222"],Xu="https://alejagoguti-cpu.github.io/planosfinales/assets/planos/",_s={arq:{nombre:"Arquitectónico",color:"#D5BE91",lam:cl.flatMap(s=>{const e=Xu+`arquitectonico/HLF-${s}-arquitectonico.pdf`;return nA.includes(s)?[{h:s,f:`arq-${s}-presentacion`,t:"Planta, sección y 3D",pdf:e},{h:s,f:`arq-${s}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e}]:[{h:s,f:`arq-${s}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e},{h:s,f:`arq-${s}-2`,t:"Pisos, enchapes y cielos",pdf:e}]})},agua:{nombre:"Agua fría y caliente",color:"#3d8bff",lam:cl.map(s=>({h:s,f:`agu-${s}-1`,t:"Red de agua fría y caliente · planta, axonometría y detalles",pdf:Xu+`agua/HLF-${s}-agua.pdf`}))},san:{nombre:"Desagües",color:"#c08a52",lam:cl.map(s=>({h:s,f:`san-${s}-1`,t:"Red sanitaria (desagües) · planta, axonometría y detalles",pdf:Xu+`desagues/HLF-${s}-desagues.pdf`}))}};function iA(s){const e=document.getElementById("pista"),t=document.getElementById("habsCarrusel"),n=document.getElementById("infoLamina"),i=document.getElementById("lightbox"),r=document.getElementById("tabsPlanos");r.innerHTML=Object.keys(_s).map(b=>`<button data-s="${b}" style="--c:${_s[b].color}" class="${b==="arq"?"on":""}"><i></i>${_s[b].nombre}<small>${_s[b].lam.length}</small></button>`).join(""),t.innerHTML=cl.map(b=>`<button data-h="${b}">${b}</button>`).join("");let o="arq",a=_s.arq.lam,c=[];const l=()=>{e.innerHTML=a.map((b,R)=>`<figure class="lamina" data-i="${R}" style="--c:${_s[o].color}"><img data-src="planos/${b.f}-t.webp" alt="Habitación ${b.h} · ${b.t}" draggable="false" /><figcaption><b>${b.h}</b>${b.t}</figcaption></figure>`).join(""),c=[...e.querySelectorAll(".lamina")]};l();let u=0,h,d=!1;r.addEventListener("click",b=>{var P;const R=b.target.closest("button");if(!R||R.dataset.s===o)return;const y=R.dataset.s,v=(P=a[u])==null?void 0:P.h;r.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N===R)),clearInterval(h),ce.to(c,{autoAlpha:0,rotateX:-70,y:160,z:-500,duration:.45,stagger:.012,ease:"power2.in",overwrite:!0,onComplete:()=>{o=y,a=_s[o].lam,l(),u=Math.max(0,a.findIndex(N=>N.h===v)),w(),m()}}),s==null||s(y)});const f=b=>{var y;const R=(y=c[(b+a.length)%a.length])==null?void 0:y.querySelector("img");R&&R.dataset.src&&(R.src=R.dataset.src,delete R.dataset.src)};function g(b=.9){const R=a.length,y=e.clientWidth,v=Math.min(300,y*.3);c.forEach((N,B)=>{let W=B-u;W>R/2&&(W-=R),W<-R/2&&(W+=R);const X=Math.abs(W);X<=3&&f(B),ce.to(N,{x:W*v*(X>1?.92:1),z:-X*220,rotateY:W*-28,scale:X===0?1:.86,autoAlpha:X>3?0:1-X*.22,filter:`blur(${X>1?(X-1)*2:0}px) brightness(${X===0?1:.7})`,zIndex:100-X,duration:b,ease:"power3.out",overwrite:"auto"}),N.classList.toggle("on",X===0)});const P=a[u];t.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N.dataset.h===P.h)),ce.fromTo(n,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.5}),n.innerHTML=`<b>Habitación ${P.h}</b><span>${P.t}</span><span class="num">${String(u+1).padStart(2,"0")} / ${a.length}</span><a href="${P.pdf}" target="_blank" rel="noopener">PDF ${Ds("externo")}</a>`}const _=b=>{u=(b+a.length)%a.length,g(),m()},m=()=>{clearInterval(h),d&&(h=window.setInterval(()=>{u=(u+1)%a.length,g(1.1)},3800))};document.getElementById("cPrev").addEventListener("click",()=>_(u-1)),document.getElementById("cNext").addEventListener("click",()=>_(u+1)),t.addEventListener("click",b=>{const R=b.target.closest("button");R&&_(a.findIndex(y=>y.h===R.dataset.h))}),e.addEventListener("click",b=>{const R=b.target.closest(".lamina");if(!R)return;const y=+R.dataset.i;if(y!==u)return _(y);S(y)});let p=0,M=!1;e.addEventListener("pointerdown",b=>{p=b.clientX,M=!0}),addEventListener("pointerup",b=>{if(!M)return;M=!1;const R=b.clientX-p;Math.abs(R)>50&&_(u+(R<0?1:-1))}),e.addEventListener("mouseenter",()=>clearInterval(h)),e.addEventListener("mouseleave",m),addEventListener("keydown",b=>{if(i.classList.contains("on")){b.key==="Escape"&&x(),b.key==="ArrowRight"&&S(u=(u+1)%a.length),b.key==="ArrowLeft"&&S(u=(u-1+a.length)%a.length);return}d&&(b.key==="ArrowRight"&&_(u+1),b.key==="ArrowLeft"&&_(u-1))});function S(b){const R=a[b];i.innerHTML=`<div class="lb-top"><b>Habitación ${R.h}</b><span>${R.t}</span><a href="${R.pdf}" target="_blank" rel="noopener">Abrir PDF ${Ds("externo")}</a><button class="lb-x" aria-label="Cerrar">${Ds("cerrar")}</button></div><div class="lb-img"><img src="planos/${R.f}-t.webp" alt="" /></div>`;const y=i.querySelector("img"),v=new Image;v.onload=()=>y.src=v.src,v.src=`planos/${R.f}.webp`,i.classList.add("on"),clearInterval(h),ce.fromTo(i.querySelector(".lb-img"),{scale:.7,rotateX:25,autoAlpha:0,transformPerspective:1200},{scale:1,rotateX:0,autoAlpha:1,duration:.7,ease:"power3.out"}),i.querySelector(".lb-x").addEventListener("click",x);let P=!1;y.addEventListener("click",N=>{P=!P;const B=y.getBoundingClientRect();y.style.transformOrigin=`${(N.clientX-B.left)/B.width*100}% ${(N.clientY-B.top)/B.height*100}%`,ce.to(y,{scale:P?2.6:1,duration:.6,ease:"power3.inOut"})})}function x(){i.classList.remove("on"),m(),g()}i.addEventListener("click",b=>{b.target===i&&x()}),addEventListener("resize",()=>g(0)),ce.set(c,{autoAlpha:0});const w=()=>{c.forEach((b,R)=>{let y=R-u;y>a.length/2&&(y-=a.length),Math.abs(y)<=3&&f(R)}),ce.fromTo(c,{x:0,y:0,z:-1400,rotateY:0,rotateX:60,autoAlpha:0,scale:.6},{x:0,z:-600,rotateX:0,autoAlpha:.9,scale:.7,duration:.7,stagger:.025,ease:"power2.out",onComplete:()=>g(1.2)})},A=b=>{d=!1,clearInterval(h),ce.to(c,{autoAlpha:0,z:-900,y:-120*b,rotateX:30*b,duration:.6,stagger:.015,ease:"power2.in",overwrite:"auto"})};g(0),ce.set(c,{autoAlpha:0}),He.create({trigger:'[data-escena="planos"]',start:"top 70%",end:"bottom 30%",onEnter:()=>{d=!0,w(),m()},onEnterBack:()=>{d=!0,w(),m()},onLeave:()=>A(1),onLeaveBack:()=>A(-1)})}const wm=["coordinar los diseños","controlar la obra","detectar interferencias","registrar cada cambio","entregar el gemelo digital"],rA=[["A","BEP y EIR/AIR"],["B","Federación de modelos"],["B","Control de interferencias"],["C","Mesa BIM semanal"],["C","RFI y cambios"],["C","Informe mensual"],["D","As-built"],["D","Gemelo digital"],["","ISO 19650"],["","IFC"],["","BIMForum LOD 2025"],["","CDE"]];function sA(){const s=rA.map(([i,r])=>`<span>${i?`<b>Etapa ${i}</b>`:""}${r}</span>`).join("");document.getElementById("marquee").innerHTML=s+s;const e=document.getElementById("rota");let t=0;setInterval(()=>{t=(t+1)%wm.length,ce.timeline().to(e,{autoAlpha:0,y:-18,filter:"blur(10px)",duration:.4,ease:"power2.in"}).call(()=>{e.textContent=wm[t]}).fromTo(e,{autoAlpha:0,y:18,filter:"blur(10px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.6,ease:"power3.out"})},2600);const n=[...document.querySelectorAll(".fl")].map(i=>({p:+(i.dataset.p??1),x:ce.quickTo(i,"x",{duration:1.2,ease:"power3.out"}),y:ce.quickTo(i,"y",{duration:1.2,ease:"power3.out"})}));addEventListener("pointermove",i=>{const r=i.clientX/innerWidth-.5,o=i.clientY/innerHeight-.5;n.forEach(a=>{a.x(-r*40*a.p),a.y(-o*30*a.p)})}),addEventListener("scroll",()=>{const i=Math.min(1,scrollY/innerHeight);document.querySelectorAll(".flotantes").forEach(r=>{r.style.opacity=String(1-i*1.4),r.style.transform=`translateY(${-i*120}px) scale(${1+i*.15})`})},{passive:!0}),document.querySelectorAll("[data-ir]").forEach(i=>i.addEventListener("click",()=>{const r=document.querySelector(`[data-escena="${i.dataset.ir}"]`);r&&window.scrollTo({top:r.offsetTop+10,behavior:"smooth"})}))}const oA="button, a, .chip, .glass, .capa, .actor, .tabs-planos button, .seg button, .btn-explorar";function aA(){if(matchMedia("(hover: none)").matches||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=null;addEventListener("pointermove",e=>{var n,i;const t=((i=(n=e.target).closest)==null?void 0:i.call(n,oA))??null;t!==s&&(s=t,t&&(t.classList.remove("brilla"),t.offsetWidth,t.classList.add("brilla")))},{passive:!0})}ce.registerPlugin(He);ce.ticker.lagSmoothing(0);const Vi=[{d:"Arquitectura",corto:"Arquitectura",color:"#D5BE91",texto:"Muros en ladrillo, fachadas, ventanería, puertas, barandas, escaleras y cubiertas de los siete niveles."},{d:"Estructura",corto:"Estructura",color:"#9fb6cc",texto:"Losas, columnas y vigas: la base para verificar alturas libres y pasos de instalaciones."},{d:"Hidrosanitaria",corto:"Hidro",color:"#3d8bff",texto:"Agua fría, agua caliente, red sanitaria y aparatos de los baños del Piso 2."},{d:"Red contra incendios",corto:"RCI",color:"#ff7a2f",texto:"Red de rociadores del Piso 2: ramales, bajantes y cabezas en habitaciones y pasillo."},{d:"Eléctrica",corto:"Eléctrica",color:"#2fd0b5",texto:"Conduit, cajas, tomas, aparatos y luminarias de cada habitación del Piso 2."},{d:"Mecánica",corto:"Mecánica",color:"#c3cbd4",texto:"Ductos de ventilación y extracción coordinados con las demás redes."}],cA={Arquitectura:"arquitectura",Estructura:"estructura",Hidrosanitaria:"hidro","Red contra incendios":"rci",Eléctrica:"electrica",Mecánica:"mecanica"},es={muros:{arq:"#dcae95",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Muros"},ventanas:{arq:"#7f98a6",tec:"#6f93b8",disc:"Arquitectura",cerr:!0,vidrio:!0,nombre:"Ventanas"},paneles:{arq:"#d8d2c6",tec:"#2f4a66",disc:"Arquitectura",cerr:!0,nombre:"Paneles"},puertas:{arq:"#8a5a3b",tec:"#3a5674",disc:"Arquitectura",nombre:"Puertas"},montantes:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Montantes"},barandas:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Barandas"},escaleras:{arq:"#b4afa5",tec:"#35516e",disc:"Arquitectura",nombre:"Escaleras"},cubiertas:{arq:"#ffffff",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Cubiertas"},losas:{arq:"#bcb7ae",tec:"#8aa2bb",disc:"Estructura",nombre:"Losas"},columnas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Columnas"},vigas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Vigas"},af:{arq:"#3d8bff",tec:"#3d8bff",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua fría"},acs:{arq:"#ff4b3e",tec:"#ff4b3e",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua caliente"},san:{arq:"#c08a52",tec:"#c08a52",disc:"Hidrosanitaria",mep:!0,rough:.6,nombre:"Sanitaria"},sanitarios:{arq:"#f4f4f2",tec:"#f4f4f2",disc:"Hidrosanitaria",mep:!0,rough:.25,nombre:"Aparatos sanitarios"},otras:{arq:"#8b8f96",tec:"#8b8f96",disc:"Hidrosanitaria",mep:!0,nombre:"Otras tuberías"},rci:{arq:"#ff7a2f",tec:"#ff7a2f",disc:"Red contra incendios",mep:!0,rough:.45,nombre:"Rociadores y red RCI"},conduit:{arq:"#2fd0b5",tec:"#2fd0b5",disc:"Eléctrica",mep:!0,rough:.5,nombre:"Conduit"},aparatos:{arq:"#7fb2ff",tec:"#7fb2ff",disc:"Eléctrica",mep:!0,nombre:"Tomas y aparatos"},luminarias:{arq:"#ffd447",tec:"#ffd447",disc:"Eléctrica",mep:!0,nombre:"Luminarias"},ductos:{arq:"#c3cbd4",tec:"#c3cbd4",disc:"Mecánica",mep:!0,metal:.5,rough:.4,nombre:"Ductos"}},zl=document.getElementById("gl"),Qo=matchMedia("(max-width: 900px), (hover: none) and (pointer: coarse)").matches,Ui=new bb({canvas:zl,antialias:!Qo,alpha:!0,powerPreference:"high-performance"});Ui.setPixelRatio(Math.min(Qo?1.5:2,devicePixelRatio));Ui.setSize(innerWidth,innerHeight);Ui.setClearColor(0,0);Ui.shadowMap.enabled=!Qo;Ui.shadowMap.type=Fm;Ui.toneMapping=km;Ui.toneMappingExposure=1;Ui.localClippingEnabled=!0;const Rr=new m_,lA=new Ih(Ui);Rr.environment=lA.fromScene(new SE,.04).texture;Rr.environmentIntensity=.55;const uA=new Xb("#dce5ec","#101d2c",.75);Rr.add(uA);const ea=new Nd("#ffe9c9",2.6);ea.position.set(70,110,50);ea.castShadow=!0;ea.shadow.mapSize.set(2048,2048);ea.shadow.bias=-5e-4;Object.assign(ea.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:10,far:320});Rr.add(ea);const Zg=new Nd("#5d8fd6",1.1);Zg.position.set(-80,40,-90);Rr.add(Zg);const hA=new Ad("#0a2a52",160,650);Rr.fog=hA;const dn=new In(35,innerWidth/innerHeight,.5,4e3),vi=new lE(dn,zl);vi.enableDamping=!0;vi.dampingFactor=.08;vi.maxPolarAngle=Math.PI*.495;vi.minDistance=4;vi.maxDistance=900;vi.enabled=!1;const Lo=new dr(new I(0,-1,0),999),Jg=new Ue("#D5BE91"),Ht={az:40,el:16,dist:125,tx:0,ty:10,tz:0,shift:.14,nube:1,bim:0,cerr:0,bordes:0,explode:0,corteY:999,verHasta:9,ctx:1,obra:1,alerta:0,giro:0},Hl={...Ht,nube:0},lf={Arquitectura:1,Estructura:1,Hidrosanitaria:0,"Red contra incendios":0,Eléctrica:0,Mecánica:0},$r=new Set(["Arquitectura","Estructura"]),hi={px:0,py:0,tpx:0,tpy:0,drift:0};let Mi="cine";const ln=[],uf=[],yn=s=>document.querySelector(s),Xc=(s,e,t)=>{const n=Xi.clamp((t-s)/(e-s),0,1);return n*n*(3-2*n)},dA=new S_;function ll(s,e,t=!0){const n=dA.load(s);return n.wrapS=n.wrapT=Is,n.repeat.set(1/e,1/e),n.colorSpace=t?Xt:pr,n.anisotropy=8,n}const Rm={ladrillo:{map:ll("ctx/tex_ladrillo_hlf.webp",1.28),normal:ll("ctx/tex_ladrillo_hlf_n.webp",1.28,!1)},teja:{map:ll("ctx/tex_teja.webp",1.5),normal:null}};function fA(s){const e={value:1};s.userData.uMapa=e,s.onBeforeCompile=t=>{t.uniforms.uMapa=e,t.fragmentShader=t.fragmentShader.replace("void main() {",`uniform float uMapa;
void main() {`).replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= mix(vec4(1.0), sampledDiffuseColor, uMapa);
#endif`)}}const wl=new vr;Rr.add(wl);const Qg=[];function pA(s,e,t){let n=!1;for(let i=0,r=s.length-1;i<s.length;r=i++){const[o,a]=s[i],[c,l]=s[r];a>t!=l>t&&e<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}async function mA(s){wl.position.set(-s.e,-s.z,s.n);const{huella:e}=await(await fetch("ctx/huella.json")).json(),t=(a,c)=>[[0,0],[1,0],[-1,0],[0,1],[0,-1]].some(([l,u])=>e.some(h=>pA(h,a+l,c+u))),n=new bE().setDRACOLoader(new rT().setDecoderPath("draco/")),i={Terreno:["ctx/tex_prado.webp",6],Vias:["ctx/tex_asfalto.webp",5],Andenes:["ctx/tex_anden.webp",2],Separadores:["ctx/tex_prado.webp",6],Ciclorrutas:["ctx/tex_ciclo.webp",3]},r=["T01","T02","T03","T10","T11","T12","T13","T20","T21","T22","T23","T30","T31","T32"],o=[...Object.keys(i).map(a=>"suelo_"+a),"hotel_plazoleta","hotel_fachadas","hotel_cubiertas","torres_vecinas",...Qo?[]:r.map(a=>"edificios_"+a)];await Promise.all(o.map(async a=>{let c;try{c=await n.loadAsync(`ctx/${a}.glb`)}catch{return}const l=a==="hotel_fachadas"||a==="hotel_cubiertas";c.scene.traverse(u=>{const h=u;if(!h.isMesh)return;const d=h.geometry,f=d.getAttribute("position");if(l&&d.index){const m=d.index.array,p=[];for(let M=0;M<m.length;M+=3){let S=0,x=0;for(let w=0;w<3;w++)S+=f.getX(m[M+w]),x+=f.getZ(m[M+w]);t(S/3,-x/3)||p.push(m[M],m[M+1],m[M+2])}d.setIndex(p)}const g=a.startsWith("suelo_")?a.slice(6):"";let _=h.material;if(g){const m=new Float32Array(f.count*2);for(let S=0;S<f.count;S++)m[S*2]=f.getX(S),m[S*2+1]=f.getZ(S);d.setAttribute("uv",new Bt(m,2));const[p,M]=i[g];_=new Tr({map:ll(p,M),roughness:.95,color:"#3b5677"}),(g==="Vias"||g==="Andenes"||g==="Ciclorrutas")&&(_.polygonOffset=!0,_.polygonOffsetFactor=-1,_.polygonOffsetUnits=-2),h.material=_}else a.startsWith("edificios_")&&(_=new Tr({color:"#2a4a70",roughness:.9,flatShading:!0}),h.material=_);_.userData.baseOp=_.transparent?_.opacity:1,Qg.push(_),h.receiveShadow=!0,h.castShadow=!g&&(a.startsWith("hotel")||a==="torres_vecinas"),h.raycast=()=>{}}),wl.add(c.scene)}))}const hf=new Ni,wi=new I;let e0=[];function Cm(s,e,t,n,i,r={}){const o=new bt(t,n);o.name=e,o.castShadow=!i.vidrio&&!i.mep,o.receiveShadow=!i.mep,o.userData={cat:e,...r},s.grupo.add(o),s.mats.set(e,n);const a=new x_(new Lb(t,28),s.lmat);a.raycast=()=>{},a.visible=!1,i.mep||(s.grupo.add(a),s.lineas.set(e,a))}async function _A(){const s=await(await fetch("data/manifest.json")).json();let e=0;await Promise.all(s.niveles.map(async n=>{const i=await(await fetch("data/"+n.archivo)).arrayBuffer(),r={info:n,grupo:new vr,mats:new Map,lineas:new Map,lmat:new Cd({color:Jg,transparent:!0,opacity:0,depthWrite:!1,clippingPlanes:[Lo]}),caja:new Ni,destino:0,vis:1};r.grupo.name=n.nombre;for(const o of n.cats){const a=es[o.nombre];if(!a)continue;const c=new En;c.setAttribute("position",new Bt(new Float32Array(i,o.vOff,o.vLen),3)),o.tOff!==void 0&&c.setIndex(new Bt(new Uint32Array(i,o.tOff,o.tLen),1)),o.uvOff!==void 0&&c.setAttribute("uv",new Bt(new Float32Array(i,o.uvOff,o.uvLen),2)),c.computeBoundingBox(),r.caja.union(c.boundingBox);const l=o.nombre==="muros"?Rm.ladrillo:o.nombre==="cubiertas"?Rm.teja:null,u=new Tr({color:a.arq,roughness:a.rough??(a.vidrio?.08:.88),metalness:a.metal??(a.vidrio?.3:0),flatShading:!l,side:Ci,transparent:!!a.vidrio,opacity:a.vidrio?.5:1,clippingPlanes:[Lo],map:(l==null?void 0:l.map)??null,normalMap:(l==null?void 0:l.normal)??null});l&&(c.computeVertexNormals(),fA(u)),u.userData.def=a,Cm(r,o.nombre,c,u,a,{tris:(o.tLen??o.vLen/3)/3})}ln[n.i]=r,Rr.add(r.grupo),e++,yn("#cargando i b").style.width=90*e/s.niveles.length+"%"}));const t=ln.find(n=>n.info.nombre==="PISO 2");try{const n=await(await fetch("data/mep.json")).json(),i=await(await fetch("data/mep.bin")).arrayBuffer();e0=n.cats;for(const r of n.cats){const o=es[r.nombre];if(!o||!t)continue;const a=new En;if(a.setAttribute("position",new Bt(new Float32Array(i,r.vOff,r.vLen),3)),a.setIndex(new Bt(new Uint32Array(i,r.tOff,r.tLen),1)),a.computeVertexNormals(),a.computeBoundingBox(),hf.union(a.boundingBox),["af","acs","san","rci","conduit"].includes(r.nombre)){const l=a.getAttribute("position");let u=0,h=0,d=0;for(let f=0;f<l.count;f++)l.getY(f)<6&&(u+=l.getX(f),h+=l.getZ(f),d++);d&&(wi.x+=u,wi.z+=h,wi.y+=d)}const c=new Tr({color:o.arq,roughness:o.rough??.6,metalness:o.metal??.05,clippingPlanes:[Lo],transparent:!0,opacity:0,emissive:new Ue(o.arq).multiplyScalar(.55)});c.userData.def=o,Cm(t,r.nombre,a,c,o,{elementos:r.elementos,tris:r.tLen/3,mep:!0}),t.grupo.children[t.grupo.children.length-1].renderOrder=2}}catch(n){console.warn("mep",n)}return wi.y>0&&wi.set(wi.x/wi.y,0,wi.z/wi.y),gA(),xA(),ln.forEach((n,i)=>{n.destino=i*9+(n.info.nombre==="CUBIERTA"?8:0),n.grupo.children.forEach(r=>{r.isMesh&&(r.userData.nivel=i,uf.push(r))})}),s}const t0=[];function gA(){const s=["muros","ventanas","losas","cubiertas","paneles","columnas"],e=new I,t=new I,n=new I,i=new I,r=new I;ln.forEach(o=>{const a=[];o.grupo.children.forEach(h=>{const d=h;if(!d.isMesh||!s.includes(d.name))return;const f=d.geometry,g=f.getAttribute("position"),_=f.index,m=_?_.count/3:g.count/3;for(let p=0;p<m;p++){const M=_?_.getX(p*3):p*3,S=_?_.getX(p*3+1):p*3+1,x=_?_.getX(p*3+2):p*3+2;e.fromBufferAttribute(g,M),t.fromBufferAttribute(g,S),n.fromBufferAttribute(g,x);let w=i.subVectors(t,e).cross(r.subVectors(n,e)).length()/2*(Qo?.8:2.2);for(;w>0&&!(w<1&&Math.random()>w);){let A=Math.random(),b=Math.random();A+b>1&&(A=1-A,b=1-b),a.push(e.x+(t.x-e.x)*A+(n.x-e.x)*b,e.y+(t.y-e.y)*A+(n.y-e.y)*b,e.z+(t.z-e.z)*A+(n.z-e.z)*b),w--}}});const c=new En;c.setAttribute("position",new Vn(a,3));const l=new Ld({color:"#e6cf9c",size:.16,transparent:!0,opacity:0,depthWrite:!1,blending:Yu}),u=new v_(c,l);u.raycast=()=>{},u.visible=!1,o.grupo.add(u),t0.push(u)})}const zi={p:new I,d:1/0,ok:!1};let Li=null;function xA(){const s=ln.find(u=>u.info.nombre==="PISO 2");if(!s)return;const e=u=>s.grupo.children.find(h=>h.name===u&&h.isMesh),t=e("rci"),n=e("conduit");if(!t||!n)return;const i=.25,r=new Map,o=n.geometry.getAttribute("position");for(let u=0;u<o.count;u++){const h=`${Math.floor(o.getX(u)/i)},${Math.floor(o.getY(u)/i)},${Math.floor(o.getZ(u)/i)}`;(r.get(h)??r.set(h,[]).get(h)).push(u)}const a=t.geometry.getAttribute("position"),c=new I,l=new I;for(let u=0;u<a.count;u++){if(c.fromBufferAttribute(a,u),c.y>6.5)continue;const h=Math.floor(c.x/i),d=Math.floor(c.y/i),f=Math.floor(c.z/i);for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++){const p=r.get(`${h+g},${d+_},${f+m}`);if(p)for(const M of p){l.fromBufferAttribute(o,M);const S=c.distanceTo(l);S<zi.d&&(zi.d=S,zi.p.copy(c).add(l).multiplyScalar(.5),zi.ok=!0)}}}zi.ok&&(Li=new bt(new Dd(.35,32,16),new xr({color:"#e0533f",transparent:!0,opacity:0,depthTest:!1})),Li.position.copy(zi.p),Li.renderOrder=10,Li.raycast=()=>{},s.grupo.add(Li))}const vA=new Ue,yA=new Ue,Hn={nivel:-1,cat:"",v:0,meta:0};function Pm(s){const e=s.explode,t=ln.length-1,n=ln.length,i=performance.now()/1e3;if(ln.forEach((r,o)=>{const a=o===t?Xc(.2,.45,e):o>=3?Xc(.45,.7,e):Xc(.7,1,e);r.grupo.position.y=r.destino*a,r.vis=Xi.clamp(s.verHasta-o+1,0,1),r.grupo.visible=r.vis>.01;const c=Xc(o/n,(o+1)/n,s.obra),l=Math.max(s.bim,1-c),u=Math.sin(Math.PI*c)*(s.obra<.999?1:0),h=1-s.nube;for(const[f,g]of r.mats){const _=g.userData.def,m=lf[_.disc];g.color.copy(vA.set(_.arq)).lerp(yA.set(_.tec),_.mep?0:l);let p=_.vidrio?Xi.lerp(.5,.4,l):1;(_.cerr||_.disc==="Arquitectura")&&(p*=Xi.lerp(1,_.vidrio?.18:.1,s.cerr)),p*=m*r.vis*h,g.opacity=p,g.transparent=p<.999,g.depthWrite=p>.6;const M=Hn.nivel===o&&Hn.cat===f?Hn.v*(.75+.25*Math.sin(i*7)):0;_.mep?g.emissive.set(_.arq).multiplyScalar(.55+1.2*M):g.emissive.copy(Jg).multiplyScalar(.55*u+.7*M),g.visible=p>.005,g.userData.uMapa&&(g.userData.uMapa.value=1-l,g.normalScale.setScalar(1-l));const S=r.lineas.get(f);if(S){const x=Math.max(s.bordes,.5*(1-c)*h)*r.vis*m*(_.disc==="Arquitectura"?1-.5*s.cerr:1);S.visible=x>.01}}r.lmat.opacity=Math.max(s.bordes,.5*(1-c)*(1-s.nube))*r.vis;const d=t0[o];if(d){const f=d.material;f.opacity=s.nube*r.vis*(.75+.25*Math.sin(i*2+o)),d.visible=f.opacity>.01}}),Li){const r=Li.material;r.opacity=s.alerta*(.55+.35*Math.sin(i*6)),Li.visible=r.opacity>.01,Li.scale.setScalar(1+.4*Math.sin(i*3))}Lo.constant=s.corteY,wl.visible=s.ctx>.01;for(const r of Qg){const o=r.userData.baseOp*s.ctx;r.opacity=o,r.transparent=o<.999,r.depthWrite=o>.5}}const fo=new I;function MA(s){fo.set(s.tx,s.ty,s.tz);const e=Xi.degToRad(s.az+s.giro),t=Xi.degToRad(s.el),n=s.dist;dn.position.set(fo.x+n*Math.cos(t)*Math.sin(e),fo.y+n*Math.sin(t),fo.z+n*Math.cos(t)*Math.cos(e)),dn.fov=35,dn.near=Math.max(.3,n*.01),dn.far=n*8+600,dn.updateProjectionMatrix(),dn.lookAt(fo);const i=innerWidth<900?0:s.shift;Math.abs(i)>.001?dn.setViewOffset(innerWidth,innerHeight,-innerWidth*i,innerWidth<900?innerHeight*.12:0,innerWidth,innerHeight):dn.clearViewOffset()}function ts(s,e=1.1){$r.clear(),s.forEach(t=>$r.add(t));for(const t of Vi)ce.to(lf,{[t.d]:$r.has(t.d)?1:0,duration:e,ease:"power2.inOut",overwrite:"auto"});df()}function df(){document.querySelectorAll("#capas .capa").forEach(s=>s.classList.toggle("on",$r.has(s.dataset.d)))}const n0=["Hidrosanitaria","Red contra incendios","Eléctrica","Mecánica"];let Lm;function SA(s,e){if(!Qo)return;let t=document.getElementById("avisoCapa");t||(t=document.createElement("div"),t.id="avisoCapa",document.body.appendChild(t));const n=Vi.find(i=>i.d===s);t.innerHTML=`<i style="background:${n.color}"></i>${s} · ${e?"prendida":"apagada"}`,t.classList.add("on"),clearTimeout(Lm),Lm=window.setTimeout(()=>t.classList.remove("on"),1600)}function bA(s){const e=!$r.has(s);SA(s,e),e?$r.add(s):$r.delete(s),ce.to(lf,{[s]:e?1:0,duration:.9,ease:"power2.inOut",overwrite:"auto"}),e&&n0.includes(s)&&(Mi==="libre"?mf("p2",!1):ce.to(Ht,{cerr:Math.max(Ht.cerr,.9),duration:1})),e&&s==="Estructura"&&!$r.has("Arquitectura")&&ce.to(Ht,{bim:1,duration:1}),df()}let ff={};const pf=[];function EA(){var c;const s=ln.findIndex(l=>l.info.nombre==="PISO 2"),e=((c=ln[s])==null?void 0:c.info.elev)??3,t=ln[s].caja.getCenter(new I),n=hf.isEmpty()?t:wi,i=zi.ok?zi.p:n,r={verHasta:s,corteY:e+2.75,cerr:.92,bim:1,bordes:.18,ctx:0,ty:e+1.5,tx:n.x,tz:n.z,explode:0,nube:0,obra:1},o=["Arquitectura","Estructura"];ff={hero:{st:{az:38,el:15,dist:158,ty:12,tx:0,tz:0,ctx:1,shift:.24},capas:o},problema:{st:{bim:1,bordes:.55,cerr:.55,az:-40,el:22,dist:150,ctx:.12,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica","Red contra incendios"],velo:"centro"},escaneo:{st:{nube:1,bim:1,ctx:0,az:70,el:16,dist:108,shift:.16},capas:o},critico:{st:{...r,tx:i.x,ty:i.y,tz:i.z,dist:8,el:34,az:40,alerta:1,shift:.18},capas:["Arquitectura","Red contra incendios","Eléctrica"]},etapas:{st:{bim:0,ctx:.6,az:-50,el:26,dist:170,ty:14,shift:0,cerr:0},capas:o,enter:()=>{ce.fromTo(Ht,{obra:0},{obra:1,duration:5,ease:"power1.inOut",overwrite:!1})}},obra:{st:{verHasta:s,corteY:e+1.4,bim:1,bordes:.6,cerr:0,ctx:0,el:62,dist:82,az:10,tx:t.x,tz:t.z,ty:e,shift:.2},capas:o},interior:{st:{bim:1,bordes:.25,ctx:.1,az:140,el:20,dist:220,ty:10,shift:0},capas:o,velo:"centro"},planos:{st:{verHasta:s,corteY:e+1.4,bim:1,bordes:.7,cerr:0,ctx:0,el:82,dist:120,az:0,tx:t.x,tz:t.z,ty:e,shift:0},capas:o,velo:"centro"},actores:{st:{explode:1,bim:1,bordes:.45,ctx:0,az:95,el:24,dist:190,ty:30,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica"],velo:"centro"},honorarios:{st:{bim:1,bordes:.3,ctx:.15,az:200,el:18,dist:210,ty:10,shift:0},capas:o,velo:"centro"},gemelo:{st:{cerr:.8,bim:0,bordes:.15,ctx:.25,az:55,el:30,dist:78,tx:t.x,tz:t.z,ty:8,shift:.18},capas:Vi.map(l=>l.d)},cierre:{st:{az:25,el:12,dist:140,ctx:1,ty:10,tx:0,tz:0,shift:0},capas:o,velo:"centro"}};const a=[{az:14,el:55,dist:66},{az:60,el:44,dist:58},{az:-30,el:50,dist:62},{az:100,el:40,dist:64}];pf.push({d:"Arquitectura",st:{az:30,el:18,dist:175,ty:10,tx:0,tz:0,ctx:.5,bim:0,cerr:0,bordes:0,verHasta:9,corteY:999,explode:0,shift:.03},capas:["Arquitectura"]},{d:"Estructura",st:{az:-35,el:24,dist:185,ty:16,tx:0,tz:0,ctx:0,bim:1,cerr:0,bordes:.4,verHasta:9,corteY:999,explode:.55,shift:.03},capas:["Estructura"]},...n0.map((l,u)=>({d:l,st:{...r,...a[u],shift:.03},capas:["Arquitectura","Estructura",l]})))}let Dm=!1;function hd(s){var t;const e=ff[s];if(!(!e||Mi!=="cine")){if(s==="hero"&&!Dm){Dm=!0;return}ce.to(Ht,{...Hl,alerta:0,...e.st,duration:1.9,ease:"power3.inOut",overwrite:"auto"}),ts(e.capas),document.body.dataset.velo=e.velo??"",(t=e.enter)==null||t.call(e)}}let kr=-1;function TA(){const s=r=>e0.filter(o=>{var a;return((a=es[o.nombre])==null?void 0:a.disc)===r});yn("#pasosCapas").innerHTML=Vi.map((r,o)=>`<li data-i="${o}" style="--c:${r.color}"><i></i><span class="t">${r.d}</span><span class="p"><b></b></span></li>`).join(""),yn("#tarjetasCapa").innerHTML=Vi.map((r,o)=>{let a;return o<2?a=Object.entries(es).filter(([,l])=>l.disc===r.d).map(([l,u])=>{const h=ln.reduce((d,f)=>d+(f.info.cats.find(g=>g.nombre===l)?1:0),0);return h?`<li>${u.nombre}<b>${h} niveles</b></li>`:""}).join(""):a=s(r.d).map(c=>`<li>${es[c.nombre].nombre}<b>${c.elementos.toLocaleString("es-CO")} elem.</b></li>`).join(""),`<div class="glass tcapa" style="--c:${r.color}"><span class="num">CAPA 0${o+1} / 06</span><h3><i></i>${r.d}</h3><p>${r.texto}</p><ul>${a}</ul></div>`}).join("");const e=[...document.querySelectorAll(".tcapa")],t=[...document.querySelectorAll("#pasosCapas .p b")],n=r=>{if(r===kr)return;const o=kr;if(kr=r,document.querySelectorAll("#pasosCapas li").forEach((a,c)=>a.classList.toggle("on",c===r)),o>=0&&ce.to(e[o],{autoAlpha:0,rotateY:r>o?-35:35,x:r>o?-120:120,z:-200,filter:"blur(10px)",duration:.6,ease:"power2.in",overwrite:!0}),ce.fromTo(e[r],{autoAlpha:0,rotateY:r>o?40:-40,x:r>o?160:-160,z:-260,filter:"blur(14px)"},{autoAlpha:1,rotateY:0,x:0,z:0,filter:"blur(0px)",duration:.95,ease:"power3.out",delay:o>=0?.2:0,overwrite:!0}),ce.fromTo(e[r].querySelectorAll("li"),{autoAlpha:0,x:30},{autoAlpha:1,x:0,stagger:.06,duration:.5,delay:.5}),Mi==="cine"){const a=pf[r];ce.to(Ht,{...Hl,...a.st,duration:1.7,ease:"power3.inOut",overwrite:"auto"}),ts(a.capas),document.body.dataset.velo=""}},i=He.create({trigger:".capas-sec",start:"top top",end:"bottom bottom",onUpdate:r=>{const o=r.progress*Vi.length,a=Math.min(Vi.length-1,Math.floor(o));t.forEach((c,l)=>c.style.width=Xi.clamp(o-l,0,1)*100+"%"),r.isActive&&n(a)},onEnter:()=>{kr=-1,n(0)},onEnterBack:()=>{const r=kr;kr=-1,n(Math.max(0,r))}});yn("#pasosCapas").addEventListener("click",r=>{const o=r.target.closest("li");if(!o)return;const a=+o.dataset.i;window.scrollTo({top:i.start+(i.end-i.start)*((a+.5)/Vi.length),behavior:"smooth"})})}let i0=0;function qu(s,e,t=1.5){ce.to(dn.position,{x:s.x,y:s.y,z:s.z,duration:t,ease:"power2.inOut"}),ce.to(vi.target,{x:e.x,y:e.y,z:e.z,duration:t,ease:"power2.inOut"})}function AA(){Mi!=="libre"&&(Mi="libre",document.body.dataset.modo="libre",i0=scrollY,document.documentElement.style.overflow="hidden",dn.clearViewOffset(),vi.target.copy(fo),vi.enabled=!0,vi.update(),ce.to(Ht,{nube:0,alerta:0,obra:1,explode:0,duration:.8}),mf("ext"))}function r0(){if(Mi==="cine")return;Mi="cine",document.body.dataset.modo="cine",vi.enabled=!1,yn("#ficha").classList.remove("on"),document.documentElement.style.overflow="",window.scrollTo(0,i0);const s=[...document.querySelectorAll("[data-escena]")].find(e=>{const t=e.getBoundingClientRect();return t.top<=innerHeight/2&&t.bottom>=innerHeight/2});if((s==null?void 0:s.dataset.escena)==="capas"){const e=kr;if(kr=-1,He.refresh(),e>=0){const t=pf[e];ce.to(Ht,{...Hl,...t.st,duration:1.5}),ts(t.capas)}}else hd((s==null?void 0:s.dataset.escena)??"hero")}function mf(s,e=!0){const t=ln.findIndex(r=>r.info.nombre==="PISO 2"),n=ln[t].info.elev,i=hf.isEmpty()?ln[t].caja.getCenter(new I):wi;if(s==="salir")return r0();if(s==="ext"&&(ce.to(Ht,{...Hl,ctx:1,duration:1.2}),e&&ts(["Arquitectura","Estructura"]),qu(new I(85,55,95),new I(0,9,0))),s==="rx"&&(ce.to(Ht,{cerr:.85,bim:1,bordes:.35,ctx:.2,verHasta:9,corteY:999,explode:0,duration:1.2}),e&&ts(Vi.map(r=>r.d))),s==="exp"){const r=Ht.explode<.5;ce.to(Ht,{explode:r?1:0,verHasta:9,corteY:999,duration:2,ease:"power1.inOut"}),qu(new I(110,r?90:60,120),new I(0,r?28:9,0),2)}s==="p2"&&(ce.to(Ht,{verHasta:t,corteY:n+2.75,cerr:.9,bim:1,bordes:.2,ctx:0,explode:0,duration:1.2}),qu(new I(i.x+22,n+30,i.z+26),new I(i.x,n+1.5,i.z)))}const Rl=new oE,Cl=new We;let s0=0;zl.addEventListener("pointerdown",()=>{s0=performance.now()});const zr=document.createElement("div");zr.id="tip3d";document.body.appendChild(zr);let Im=0,Nm;addEventListener("pointermove",function s(e){var a,c;const t=performance.now();if(t-Im<120){zr.style.transform=`translate(${e.clientX+16}px, ${e.clientY+16}px)`,clearTimeout(Nm),Nm=window.setTimeout(()=>s(e),130);return}Im=t;const n=(c=(a=e.target).closest)==null?void 0:c.call(a,".txt, .glass, button, a, .chip, .carrusel, .actores, .nube-chips, #dock, #top, .etapas, #lightbox, .flotantes .fcard, .red-wrap, .hub, .diag, .gantt, .flujo, .arbol, .alerta, .total, .grafico, .resp, .linea, .frente");if(matchMedia("(hover: none)").matches||Mi==="cine"&&n||!ln.length){Hn.meta=0,zr.classList.remove("on");return}Cl.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),Rl.setFromCamera(Cl,dn);const i=Rl.intersectObjects(uf.filter(l=>l.material.visible&&l.material.opacity>.25),!1).find(l=>l.point.y<=Lo.constant+.01);if(!i){Hn.meta=0,zr.classList.remove("on");return}const r=i.object.userData.nivel,o=i.object.userData.cat;(r!==Hn.nivel||o!==Hn.cat)&&(Hn.nivel=r,Hn.cat=o,Hn.v=0,dispatchEvent(new CustomEvent("destello",{detail:{x:e.clientX,y:e.clientY}}))),Hn.meta=1,zr.innerHTML=`<b>${es[o].nombre}</b>${ln[r].info.nombre} · ${es[o].disc}`,zr.style.transform=`translate(${e.clientX+16}px, ${e.clientY+16}px)`,zr.classList.add("on")},{passive:!0});zl.addEventListener("pointerup",s=>{if(Mi!=="libre"||performance.now()-s0>300)return;Cl.set(s.clientX/innerWidth*2-1,-(s.clientY/innerHeight)*2+1),Rl.setFromCamera(Cl,dn);const e=Rl.intersectObjects(uf.filter(r=>r.material.visible&&r.material.opacity>.3),!1).find(r=>r.point.y<=Lo.constant+.01);if(!e){yn("#ficha").classList.remove("on");return}const t=ln[e.object.userData.nivel],n=e.object.userData.cat,i=es[n];yn("#ficha").innerHTML=`<h4>${i.nombre}</h4><dl><dt>Capa</dt><dd>${i.disc}</dd><dt>Nivel</dt><dd>${t.info.nombre} (+${t.info.elev.toFixed(2)} m)</dd>
    <dt>Cota</dt><dd>${(e.point.y-t.grupo.position.y).toFixed(2)} m</dd>
    <dt>Fuente</dt><dd>${i.mep?"1001_Hotel_la_fotona_redes.rvt · "+e.object.userData.elementos+" elementos":"HLF_P2-P6.rvt"}</dd></dl>`,yn("#ficha").classList.add("on")});function wA(){yn("#capas").innerHTML=Vi.map(s=>`<button class="capa" data-d="${s.d}" style="--c:${s.color}" aria-label="${s.d}" title="${s.d}">${Ds(cA[s.d])}${s.corto}</button>`).join(""),yn("#capas").addEventListener("click",s=>{const e=s.target.closest(".capa");e&&bA(e.dataset.d)}),df(),document.querySelectorAll("[data-explorar]").forEach(s=>s.addEventListener("click",AA)),document.querySelectorAll("#vistasLibres button").forEach(s=>s.addEventListener("click",()=>mf(s.dataset.v))),addEventListener("keydown",s=>{s.key==="Escape"&&r0()}),addEventListener("pointermove",s=>{hi.tpx=s.clientX/innerWidth-.5,hi.tpy=s.clientY/innerHeight-.5}),document.querySelectorAll("[data-escena]").forEach(s=>{const e=s.dataset.escena;e!=="capas"&&He.create({trigger:s,start:"top 55%",end:"bottom 45%",onEnter:()=>hd(e),onEnterBack:()=>hd(e)})}),He.create({start:0,end:"max",onUpdate:s=>{yn("#barra i").style.width=s.progress*100+"%",hi.drift=s.progress}})}addEventListener("resize",()=>{dn.aspect=innerWidth/innerHeight,dn.updateProjectionMatrix(),Ui.setSize(innerWidth,innerHeight)});let Um=performance.now();function dd(){if(document.hidden){requestAnimationFrame(dd);return}const s=performance.now(),e=Math.min(.05,(s-Um)/1e3);Um=s,Hn.v+=(Hn.meta-Hn.v)*.12;const t={...Ht};if(Mi==="cine"?(hi.px+=(hi.tpx-hi.px)*.04,hi.py+=(hi.tpy-hi.py)*.04,Ht.giro+=e*1.6,t.az+=hi.px*8+hi.drift*40,t.el=Xi.clamp(t.el-hi.py*4,3,85),Pm(t),MA(t)):(Pm(t),vi.update()),Li){const n=yn("#etqCritico"),i=Li.getWorldPosition(new I).add(new I(0,.7,0)).project(dn);n.style.opacity=String(Mi==="cine"?Ht.alerta:0),n.style.left=(i.x+1)/2*innerWidth+"px",n.style.top=(1-i.y)/2*innerHeight-10+"px"}Ui.render(Rr,dn),requestAnimationFrame(dd)}(async()=>{const s=await _A();EA();const e=document.createElement("div");if(e.className="etq",e.id="etqCritico",e.innerHTML="Interferencia · RCI "+Ds("cruce")+" conduit",yn("#etiquetas").appendChild(e),zi.ok){const t=(zi.d*100).toFixed(1).replace(".",",")+" cm";yn("#dCritico").textContent=t;const n=document.getElementById("dCritico2");n&&(n.textContent=t)}sA(),wA(),TA(),B1(),aA(),Y1(),j1(),J1(),tA(),iA(t=>{Mi==="cine"&&(t==="arq"?(ts(["Arquitectura","Estructura"]),ce.to(Ht,{cerr:0,bordes:.7,duration:1})):(ts(["Arquitectura","Hidrosanitaria"]),ce.to(Ht,{cerr:.92,bordes:.2,dist:60,el:70,duration:1.4,ease:"power3.inOut"})))}),yn("#cargando i b").style.width="100%",setTimeout(()=>yn("#cargando").classList.add("fin"),250),dd(),Object.assign(Ht,{...ff.hero.st,nube:1}),ce.from(Ht,{az:120,el:58,dist:260,ty:22,duration:5,ease:"power3.inOut",delay:.2}),ce.to(Ht,{nube:0,duration:3.4,delay:1.4,ease:"power2.inOut"}),ts(["Arquitectura","Estructura"],0),mA(s.enu).catch(t=>console.warn("contexto",t)),He.refresh()})();
