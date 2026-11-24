(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="170",Ro={ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},W0=0,Wf=1,X0=2,g_=1,x_=2,fr=3,wr=0,kn=1,Di=2,Qr=0,Co=1,vh=2,Xf=3,$f=4,$0=5,ws=100,q0=101,Y0=102,j0=103,K0=104,Z0=200,J0=201,Q0=202,ex=203,yh=204,Mh=205,tx=206,nx=207,ix=208,rx=209,sx=210,ox=211,ax=212,cx=213,lx=214,Sh=0,bh=1,Eh=2,Wo=3,Th=4,Ah=5,wh=6,Rh=7,v_=0,ux=1,hx=2,es=0,dx=1,fx=2,px=3,y_=4,mx=5,_x=6,gx=7,qf="attached",xx="detached",M_=300,Xo=301,$o=302,Ch=303,Ph=304,iu=306,ks=1e3,Xr=1001,Il=1002,zn=1003,S_=1004,Pa=1005,si=1006,pl=1007,yr=1008,Rr=1009,b_=1010,E_=1011,rc=1012,zd=1013,zs=1014,Ui=1015,vc=1016,Hd=1017,Vd=1018,qo=1020,T_=35902,A_=1021,w_=1022,gi=1023,R_=1024,C_=1025,Po=1026,Yo=1027,Gd=1028,Wd=1029,P_=1030,Xd=1031,$d=1033,ml=33776,_l=33777,gl=33778,xl=33779,Lh=35840,Dh=35841,Ih=35842,Nh=35843,Uh=36196,Oh=37492,Fh=37496,Bh=37808,kh=37809,zh=37810,Hh=37811,Vh=37812,Gh=37813,Wh=37814,Xh=37815,$h=37816,qh=37817,Yh=37818,jh=37819,Kh=37820,Zh=37821,vl=36492,Jh=36494,Qh=36495,L_=36283,ed=36284,td=36285,nd=36286,sc=2300,oc=2301,mu=2302,Yf=2400,jf=2401,Kf=2402,vx=2500,yx=0,D_=1,id=2,Mx=3200,Sx=3201,I_=0,bx=1,xr="",Yt="srgb",Tn="srgb-linear",ru="linear",bt="srgb",Js=7680,Zf=519,Ex=512,Tx=513,Ax=514,N_=515,wx=516,Rx=517,Cx=518,Px=519,rd=35044,Jf="300 es",Mr=2e3,Nl=2001;class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qf=1234567;const Lo=Math.PI/180,jo=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function qd(r,e){return(r%e+e)%e}function Lx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dx(r,e,t){return r!==e?(t-r)/(e-r):0}function za(r,e,t){return(1-t)*r+t*e}function Ix(r,e,t,n){return za(r,e,1-Math.exp(-t*n))}function Nx(r,e=1){return e-Math.abs(qd(r,e*2)-e)}function Ux(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ox(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Fx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Bx(r,e){return r+Math.random()*(e-r)}function kx(r){return r*(.5-Math.random())}function zx(r){r!==void 0&&(Qf=r);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hx(r){return r*Lo}function Vx(r){return r*jo}function Gx(r){return(r&r-1)===0&&r!==0}function Wx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $x(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,c*h,c*d,a*l);break;case"YZY":r.set(c*d,a*u,c*h,a*l);break;case"ZXZ":r.set(c*h,c*d,a*u,a*l);break;case"XZX":r.set(a*u,c*_,c*f,a*l);break;case"YXY":r.set(c*f,a*u,c*_,a*l);break;case"ZYZ":r.set(c*_,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ki={DEG2RAD:Lo,RAD2DEG:jo,generateUUID:Fi,clamp:mn,euclideanModulo:qd,mapLinear:Lx,inverseLerp:Dx,lerp:za,damp:Ix,pingpong:Nx,smoothstep:Ux,smootherstep:Ox,randInt:Fx,randFloat:Bx,randFloatSpread:kx,seededRandom:zx,degToRad:Hx,radToDeg:Vx,isPowerOfTwo:Gx,ceilPowerOfTwo:Wx,floorPowerOfTwo:Xx,setQuaternionFromProperEuler:$x,normalize:Mt,denormalize:Ii};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,s,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],S=i[4],x=i[7],R=i[2],A=i[5],b=i[8];return s[0]=o*g+a*v+c*R,s[3]=o*m+a*S+c*A,s[6]=o*p+a*x+c*b,s[1]=l*g+u*v+h*R,s[4]=l*m+u*S+h*A,s[7]=l*p+u*x+h*b,s[2]=d*g+f*v+_*R,s[5]=d*m+f*S+_*A,s[8]=d*p+f*x+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_u.makeScale(e,t)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,t){return this.premultiply(_u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new Qe;function U_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ac(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qx(){const r=ac("canvas");return r.style.display="block",r}const ep={};function La(r){r in ep||(ep[r]=!0,console.warn(r))}function Yx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function jx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(r.r=Do(r.r),r.g=Do(r.g),r.b=Do(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?ru:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const tp=[.64,.33,.3,.6,.15,.06],np=[.2126,.7152,.0722],ip=[.3127,.329],rp=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[Tn]:{primaries:tp,whitePoint:ip,transfer:ru,toXYZ:rp,fromXYZ:sp,luminanceCoefficients:np,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:tp,whitePoint:ip,transfer:bt,toXYZ:rp,fromXYZ:sp,luminanceCoefficients:np,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let Qs;class Zx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=ac("canvas")),Qs.width=e.width,Qs.height=e.height;const n=Qs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jx=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(gu(i[o].image)):s.push(gu(i[o]))}else s=gu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function gu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qx=0;class hn extends Ys{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=Xr,i=Xr,s=si,o=yr,a=gi,c=Rr,l=hn.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Fi(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=M_;hn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,R=(p+1)/2,A=(u+d)/4,b=(h+g)/4,w=(_+m)/4;return S>x&&S>R?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=b/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=w/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ev extends Ys{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new O_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends ev{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class F_ extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tv extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==_){let m=1-a;const p=c*d+l*f+u*_+h*g,v=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*f-l*d,e[t+1]=c*_+u*d+l*h-a*f,e[t+2]=l*_+u*f+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h+d*f*_;break;case"YZX":this._x=d*u*h+l*f*_,this._y=l*f*h+d*u*_,this._z=l*u*_-d*f*h,this._w=l*u*h-d*f*_;break;case"XZY":this._x=d*u*h-l*f*_,this._y=l*f*h-d*u*_,this._z=l*u*_+d*f*h,this._w=l*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new I,op=new er;class Bi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ti):Ti.fromBufferAttribute(s,o),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sc.copy(n.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),bc.subVectors(this.max,ga),eo.subVectors(e.a,ga),to.subVectors(e.b,ga),no.subVectors(e.c,ga),Ur.subVectors(to,eo),Or.subVectors(no,to),fs.subVectors(eo,no);let t=[0,-Ur.z,Ur.y,0,-Or.z,Or.y,0,-fs.z,fs.y,Ur.z,0,-Ur.x,Or.z,0,-Or.x,fs.z,0,-fs.x,-Ur.y,Ur.x,0,-Or.y,Or.x,0,-fs.y,fs.x,0];return!vu(t,eo,to,no,bc)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,eo,to,no,bc))?!1:(Ec.crossVectors(Ur,Or),t=[Ec.x,Ec.y,Ec.z],vu(t,eo,to,no,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ar=[new I,new I,new I,new I,new I,new I,new I,new I],Ti=new I,Sc=new Bi,eo=new I,to=new I,no=new I,Ur=new I,Or=new I,fs=new I,ga=new I,bc=new I,Ec=new I,ps=new I;function vu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ps.fromArray(r,s);const a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),c=e.dot(ps),l=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const nv=new Bi,xa=new I,yu=new I;class ir{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(yu)),this.expandByPoint(xa.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cr=new I,Mu=new I,Tc=new I,Fr=new I,Su=new I,Ac=new I,bu=new I;class aa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Mu.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(Mu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),a=Fr.dot(this.direction),c=-Fr.dot(Tc),l=Fr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*c-a,d=o*a-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Mu).addScaledVector(Tc,d),f}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const n=cr.dot(this.direction),i=cr.dot(cr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,i,s){Su.subVectors(t,e),Ac.subVectors(n,e),bu.crossVectors(Su,Ac);let o=this.direction.dot(bu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const c=a*this.direction.dot(Ac.crossVectors(Fr,Ac));if(c<0)return null;const l=a*this.direction.dot(Su.cross(Fr));if(l<0||c+l>o)return null;const u=-a*Fr.dot(bu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,o,a,c,l,u,h,d,f,_,g,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,u,h,d,f,_,g,m)}set(e,t,n,i,s,o,a,c,l,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,_=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iv,e,rv)}lookAt(e,t,n){const i=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Br.crossVectors(n,Jn),Br.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Br.crossVectors(n,Jn)),Br.normalize(),wc.crossVectors(Jn,Br),i[0]=Br.x,i[4]=wc.x,i[8]=Jn.x,i[1]=Br.y,i[5]=wc.y,i[9]=Jn.y,i[2]=Br.z,i[6]=wc.z,i[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],S=n[7],x=n[11],R=n[15],A=i[0],b=i[4],w=i[8],y=i[12],M=i[1],P=i[5],N=i[9],B=i[13],W=i[2],X=i[6],$=i[10],q=i[14],V=i[3],te=i[7],L=i[11],he=i[15];return s[0]=o*A+a*M+c*W+l*V,s[4]=o*b+a*P+c*X+l*te,s[8]=o*w+a*N+c*$+l*L,s[12]=o*y+a*B+c*q+l*he,s[1]=u*A+h*M+d*W+f*V,s[5]=u*b+h*P+d*X+f*te,s[9]=u*w+h*N+d*$+f*L,s[13]=u*y+h*B+d*q+f*he,s[2]=_*A+g*M+m*W+p*V,s[6]=_*b+g*P+m*X+p*te,s[10]=_*w+g*N+m*$+p*L,s[14]=_*y+g*B+m*q+p*he,s[3]=v*A+S*M+x*W+R*V,s[7]=v*b+S*P+x*X+R*te,s[11]=v*w+S*N+x*$+R*L,s[15]=v*y+S*B+x*q+R*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*f-n*c*f)+g*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+n*o*f+s*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=h*m*l-g*d*l+g*c*f-a*m*f-h*c*p+a*d*p,S=_*d*l-u*m*l-_*c*f+o*m*f+u*c*p-o*d*p,x=u*g*l-_*h*l+_*a*f-o*g*f-u*a*p+o*h*p,R=_*h*c-u*g*c-_*a*d+o*g*d+u*a*m-o*h*m,A=t*v+n*S+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*b,e[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=S*b,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*b,e[6]=(_*c*s-o*m*s-_*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*f+t*c*f)*b,e[8]=x*b,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*b,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*f-t*a*f)*b,e[12]=R*b,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*b,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,v=c*l,S=c*u,x=c*h,R=n.x,A=n.y,b=n.z;return i[0]=(1-(g+p))*R,i[1]=(f+x)*R,i[2]=(_-S)*R,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(_+S)*b,i[9]=(m-v)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=io.set(i[0],i[1],i[2]).length();const o=io.set(i[4],i[5],i[6]).length(),a=io.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ai.copy(this);const l=1/s,u=1/o,h=1/a;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Mr){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Mr)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Nl)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Mr){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*l,f=(n+i)*u;let _,g;if(a===Mr)_=(o+s)*h,g=-2*h;else if(a===Nl)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const io=new I,Ai=new Ke,iv=new I(0,0,0),rv=new I(1,1,1),Br=new I,wc=new I,Jn=new I,ap=new Ke,cp=new er;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sv=0;const lp=new I,ro=new er,lr=new Ke,Rc=new I,va=new I,ov=new I,av=new er,up=new I(1,0,0),hp=new I(0,1,0),dp=new I(0,0,1),fp={type:"added"},cv={type:"removed"},so={type:"childadded",child:null},Eu={type:"childremoved",child:null};class Ft extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new I,t=new tr,n=new er,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Qe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rc.copy(e):Rc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(va,Rc,this.up):lr.lookAt(Rc,va,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),ro.setFromRotationMatrix(lr),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cv),Eu.child=e,this.dispatchEvent(Eu),Eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new I(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new I,ur=new I,Tu=new I,hr=new I,oo=new I,ao=new I,pp=new I,Au=new I,wu=new I,Ru=new I,Cu=new _t,Pu=new _t,Lu=new _t;class _i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wi.subVectors(i,t),ur.subVectors(n,t),Tu.subVectors(e,t);const o=wi.dot(wi),a=wi.dot(ur),c=wi.dot(Tu),l=ur.dot(ur),u=ur.dot(Tu),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,hr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hr.x),c.addScaledVector(o,hr.y),c.addScaledVector(a,hr.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return Cu.setScalar(0),Pu.setScalar(0),Lu.setScalar(0),Cu.fromBufferAttribute(e,t),Pu.fromBufferAttribute(e,n),Lu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cu,s.x),o.addScaledVector(Pu,s.y),o.addScaledVector(Lu,s.z),o}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),ur.subVectors(e,t),wi.cross(ur).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),wi.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;oo.subVectors(i,n),ao.subVectors(s,n),Au.subVectors(e,n);const c=oo.dot(Au),l=ao.dot(Au);if(c<=0&&l<=0)return t.copy(n);wu.subVectors(e,i);const u=oo.dot(wu),h=ao.dot(wu);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(oo,o);Ru.subVectors(e,s);const f=oo.dot(Ru),_=ao.dot(Ru);if(_>=0&&f<=_)return t.copy(s);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ao,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return pp.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(pp,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Du(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=qd(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Du(o,s,e+1/3),this.g=Du(o,s,e),this.b=Du(o,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=B_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return lt.fromWorkingColorSpace(xn.copy(this),e),Math.round(mn(xn.r*255,0,255))*65536+Math.round(mn(xn.g*255,0,255))*256+Math.round(mn(xn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Yt){lt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(Cc);const n=za(kr.h,Cc.h,t),i=za(kr.s,Cc.s,t),s=za(kr.l,Cc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Ue;Ue.NAMES=B_;let lv=0;class Zi extends Ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Fi(),this.name="",this.blending=Co,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==Mh&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sr extends Zi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new I,Pc=new Ge;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rd,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rd&&(e.usage=this.usage),e}}class k_ extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class z_ extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wn extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uv=0;const ui=new Ke,Iu=new Ft,co=new I,Qn=new Bi,ya=new Bi,an=new I;class An extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?z_:k_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wn(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Qn.min,ya.min),Qn.expandByPoint(an),an.addVectors(Qn.max,ya.max),Qn.expandByPoint(an)):(Qn.expandByPoint(ya.min),Qn.expandByPoint(ya.max))}Qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)an.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),an.add(co)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;const l=new I,u=new I,h=new I,d=new Ge,f=new Ge,_=new Ge,g=new I,m=new I;function p(w,y,M){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,w),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,M),u.sub(l),h.sub(l),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[w].add(g),a[y].add(g),a[M].add(g),c[w].add(m),c[y].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,y=v.length;w<y;++w){const M=v[w],P=M.start,N=M.count;for(let B=P,W=P+N;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new I,x=new I,R=new I,A=new I;function b(w){R.fromBufferAttribute(i,w),A.copy(R);const y=a[w];S.copy(y),S.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(A,y);const P=x.dot(c[w])<0?-1:1;o.setXYZW(w,S.x,S.y,S.z,P)}for(let w=0,y=v.length;w<y;++w){const M=v[w],P=M.start,N=M.count;for(let B=P,W=P+N;B<W;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let p=0;p<u;p++)d[_++]=l[f++]}return new zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new Ke,ms=new aa,Lc=new ir,_p=new I,Dc=new I,Ic=new I,Nc=new I,Nu=new I,Uc=new I,gp=new I,Oc=new I;class Et extends Ft{constructor(e=new An,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Uc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Nu.fromBufferAttribute(h,e),o?Uc.addScaledVector(Nu,u):Uc.addScaledVector(Nu.sub(t),u))}t.add(Uc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(Lc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Lc,_p)===null||ms.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(mp.copy(s).invert(),ms.copy(e.ray).applyMatrix4(mp),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=S;x<R;x+=3){const A=a.getX(x),b=a.getX(x+1),w=a.getX(x+2);i=Fc(this,p,e,n,l,u,h,A,b,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Fc(this,o,e,n,l,u,h,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=S;x<R;x+=3){const A=x,b=x+1,w=x+2;i=Fc(this,p,e,n,l,u,h,A,b,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,S=m+1,x=m+2;i=Fc(this,o,e,n,l,u,h,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function hv(r,e,t,n,i,s,o,a){let c;if(e.side===kn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===wr,a),c===null)return null;Oc.copy(a),Oc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Oc);return l<t.near||l>t.far?null:{distance:l,point:Oc.clone(),object:r}}function Fc(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Dc),r.getVertexPosition(c,Ic),r.getVertexPosition(l,Nc);const u=hv(r,e,t,n,Dc,Ic,Nc,gp);if(u){const h=new I;_i.getBarycoord(gp,Dc,Ic,Nc,h),i&&(u.uv=_i.getInterpolatedAttribute(i,a,c,l,h,new Ge)),s&&(u.uv1=_i.getInterpolatedAttribute(s,a,c,l,h,new Ge)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};_i.getNormal(Dc,Ic,Nc,d.normal),u.face=d,u.barycoord=h}return u}class ca extends An{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(h,2));function _(g,m,p,v,S,x,R,A,b,w,y){const M=x/b,P=R/w,N=x/2,B=R/2,W=A/2,X=b+1,$=w+1;let q=0,V=0;const te=new I;for(let L=0;L<$;L++){const he=L*P-B;for(let Ie=0;Ie<X;Ie++){const tt=Ie*M-N;te[g]=tt*v,te[m]=he*S,te[p]=W,l.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=A>0?1:-1,u.push(te.x,te.y,te.z),h.push(Ie/b),h.push(1-L/w),q+=1}}for(let L=0;L<w;L++)for(let he=0;he<b;he++){const Ie=d+he+X*L,tt=d+he+X*(L+1),j=d+(he+1)+X*(L+1),ee=d+(he+1)+X*L;c.push(Ie,tt,ee),c.push(tt,j,ee),V+=6}a.addGroup(f,V,y),f+=V,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ln(r){const e={};for(let t=0;t<r.length;t++){const n=Ko(r[t]);for(const i in n)e[i]=n[i]}return e}function dv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function H_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const fv={clone:Ko,merge:Ln};var pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends Zi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pv,this.fragmentShader=mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class V_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Mr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new I,xp=new Ge,vp=new Ge;class Un extends V_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,xp,vp),t.subVectors(vp,xp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,uo=1;class _v extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(lo,uo,e,t);i.layers=this.layers,this.add(i);const s=new Un(lo,uo,e,t);s.layers=this.layers,this.add(s);const o=new Un(lo,uo,e,t);o.layers=this.layers,this.add(o);const a=new Un(lo,uo,e,t);a.layers=this.layers,this.add(a);const c=new Un(lo,uo,e,t);c.layers=this.layers,this.add(c);const l=new Un(lo,uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Mr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class G_ extends hn{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Xo,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gv extends Hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new G_(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ca(5,5,5),s=new cs({name:"CubemapFromEquirect",uniforms:Ko(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Qr});s.uniforms.tEquirect.value=t;const o=new Et(i,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=si),new _v(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Uu=new I,xv=new I,vv=new Qe;class _r{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uu.subVectors(n,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vv.getNormalMatrix(e),i=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new ir,Bc=new I;class jd{constructor(e=new _r,t=new _r,n=new _r,i=new _r,s=new _r,o=new _r){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],v=i[13],S=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-p).normalize(),n[1].setComponents(c+s,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+u,m+_,x+v).normalize(),n[3].setComponents(c-o,d-u,m-_,x-v).normalize(),n[4].setComponents(c-a,d-h,m-g,x-S).normalize(),t===Mr)n[5].setComponents(c+a,d+h,m+g,x+S).normalize();else if(t===Nl)n[5].setComponents(a,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bc.x=i.normal.x>0?e.max.x:e.min.x,Bc.y=i.normal.y>0?e.max.y:e.min.y,Bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function yv(r){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,a),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class su extends An{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let S=0;S<l;S++){const x=S*h-s;_.push(x,-v,0),g.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const S=v+l*p,x=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;f.push(S,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
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
#endif`,Pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
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
#endif`,Uv=`#ifdef USE_BUMPMAP
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wv=`#define PI 3.141592653589793
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
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$v=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
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
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
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
#endif`,vy=`struct PhysicalMaterial {
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
}`,yy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Py=`#if defined( USE_POINTS_UV )
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
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gy=`#ifdef USE_NORMALMAP
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
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sM=`float getShadowMask() {
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
}`,oM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aM=`#ifdef USE_SKINNING
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
#endif`,cM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lM=`#ifdef USE_SKINNING
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
#endif`,uM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`#include <common>
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
}`,wM=`#if DEPTH_PACKING == 3200
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
}`,RM=`#define DISTANCE
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
}`,CM=`#define DISTANCE
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`uniform float scale;
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
}`,IM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 diffuse;
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
}`,OM=`#define LAMBERT
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
}`,FM=`#define LAMBERT
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
}`,BM=`#define MATCAP
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
}`,kM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,VM=`#define PHONG
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
}`,GM=`#define PHONG
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
}`,WM=`#define STANDARD
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
}`,XM=`#define STANDARD
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
}`,$M=`#define TOON
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
}`,qM=`#define TOON
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
}`,YM=`uniform float size;
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
}`,jM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 color;
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
}`,JM=`uniform float rotation;
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
}`,QM=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Mv,alphahash_pars_fragment:Sv,alphamap_fragment:bv,alphamap_pars_fragment:Ev,alphatest_fragment:Tv,alphatest_pars_fragment:Av,aomap_fragment:wv,aomap_pars_fragment:Rv,batching_pars_vertex:Cv,batching_vertex:Pv,begin_vertex:Lv,beginnormal_vertex:Dv,bsdfs:Iv,iridescence_fragment:Nv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Ov,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:zv,color_pars_fragment:Hv,color_pars_vertex:Vv,color_vertex:Gv,common:Wv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:$v,displacementmap_pars_vertex:qv,displacementmap_vertex:Yv,emissivemap_fragment:jv,emissivemap_pars_fragment:Kv,colorspace_fragment:Zv,colorspace_pars_fragment:Jv,envmap_fragment:Qv,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:fy,envmap_vertex:iy,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:cy,lightmap_pars_fragment:ly,lights_lambert_fragment:uy,lights_lambert_pars_fragment:hy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:_y,lights_phong_pars_fragment:gy,lights_physical_fragment:xy,lights_physical_pars_fragment:vy,lights_fragment_begin:yy,lights_fragment_maps:My,lights_fragment_end:Sy,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Ay,map_fragment:wy,map_pars_fragment:Ry,map_particle_fragment:Cy,map_particle_pars_fragment:Py,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Iy,morphcolor_vertex:Ny,morphnormal_vertex:Uy,morphtarget_pars_vertex:Oy,morphtarget_vertex:Fy,normal_fragment_begin:By,normal_fragment_maps:ky,normal_pars_fragment:zy,normal_pars_vertex:Hy,normal_vertex:Vy,normalmap_pars_fragment:Gy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:qy,opaque_fragment:Yy,packing:jy,premultiplied_alpha_fragment:Ky,project_vertex:Zy,dithering_fragment:Jy,dithering_pars_fragment:Qy,roughnessmap_fragment:eM,roughnessmap_pars_fragment:tM,shadowmap_pars_fragment:nM,shadowmap_pars_vertex:iM,shadowmap_vertex:rM,shadowmask_pars_fragment:sM,skinbase_vertex:oM,skinning_pars_vertex:aM,skinning_vertex:cM,skinnormal_vertex:lM,specularmap_fragment:uM,specularmap_pars_fragment:hM,tonemapping_fragment:dM,tonemapping_pars_fragment:fM,transmission_fragment:pM,transmission_pars_fragment:mM,uv_pars_fragment:_M,uv_pars_vertex:gM,uv_vertex:xM,worldpos_vertex:vM,background_vert:yM,background_frag:MM,backgroundCube_vert:SM,backgroundCube_frag:bM,cube_vert:EM,cube_frag:TM,depth_vert:AM,depth_frag:wM,distanceRGBA_vert:RM,distanceRGBA_frag:CM,equirect_vert:PM,equirect_frag:LM,linedashed_vert:DM,linedashed_frag:IM,meshbasic_vert:NM,meshbasic_frag:UM,meshlambert_vert:OM,meshlambert_frag:FM,meshmatcap_vert:BM,meshmatcap_frag:kM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:VM,meshphong_frag:GM,meshphysical_vert:WM,meshphysical_frag:XM,meshtoon_vert:$M,meshtoon_frag:qM,points_vert:YM,points_frag:jM,shadow_vert:KM,shadow_frag:ZM,sprite_vert:JM,sprite_frag:QM},ge={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Gi={basic:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ln([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ln([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ln([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Ln([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Ln([ge.lights,ge.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gi.physical={uniforms:Ln([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const kc={r:0,b:0,g:0},gs=new tr,eS=new Ke;function tS(r,e,t,n,i,s,o){const a=new Ue(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function _(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?t:e).get(S)),S}function g(v){let S=!1;const x=_(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,S){const x=_(S);x&&(x.isCubeTexture||x.mapping===iu)?(u===void 0&&(u=new Et(new ca(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Ko(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),gs.copy(S.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(gs)),u.material.toneMapped=lt.getTransfer(x.colorSpace)!==bt,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Et(new su(2,2),new cs({name:"BackgroundMaterial",uniforms:Ko(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=lt.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(kc,H_(r)),n.buffers.color.setClear(kc.r,kc.g,kc.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:g,addToRenderList:m}}function nS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,N,B,W){let X=!1;const $=h(B,N,P);s!==$&&(s=$,l(s.object)),X=f(M,B,N,W),X&&_(M,B,N,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(M,P,N,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,P,N){const B=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[P.id];X===void 0&&(X={},W[P.id]=X);let $=X[B];return $===void 0&&($=d(c()),X[B]=$),$}function d(M){const P=[],N=[],B=[];for(let W=0;W<t;W++)P[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,N,B){const W=s.attributes,X=P.attributes;let $=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){const L=W[V];let he=X[V];if(he===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),L===void 0||L.attribute!==he||he&&L.data!==he.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function _(M,P,N,B){const W={},X=P.attributes;let $=0;const q=N.getAttributes();for(const V in q)if(q[V].location>=0){let L=X[V];L===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(L=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(L=M.instanceColor));const he={};he.attribute=L,L&&L.data&&(he.data=L.data),W[V]=he,$++}s.attributes=W,s.attributesNum=$,s.index=B}function g(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const N=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;N[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(r.vertexAttribDivisor(M,P),W[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==M[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function S(M,P,N,B,W,X,$){$===!0?r.vertexAttribIPointer(M,P,N,W,X):r.vertexAttribPointer(M,P,N,B,W,X)}function x(M,P,N,B){g();const W=B.attributes,X=N.getAttributes(),$=P.defaultAttributeValues;for(const q in X){const V=X[q];if(V.location>=0){let te=W[q];if(te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const L=te.normalized,he=te.itemSize,Ie=e.get(te);if(Ie===void 0)continue;const tt=Ie.buffer,j=Ie.type,ee=Ie.bytesPerElement,xe=j===r.INT||j===r.UNSIGNED_INT||te.gpuType===zd;if(te.isInterleavedBufferAttribute){const ne=te.data,Ee=ne.stride,we=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve,ne.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,he/V.locationSize,j,L,Ee*ee,(we+he/V.locationSize*Ve)*ee,xe)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)p(V.location+ne,te.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let ne=0;ne<V.locationSize;ne++)S(V.location+ne,he/V.locationSize,j,L,he*ee,he/V.locationSize*ne*ee,xe)}}else if($!==void 0){const L=$[q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}v()}function R(){w();for(const M in n){const P=n[M];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const B=P[N];for(const W in B)u(B[W].object),delete B[W];delete P[N]}delete n[M.id]}function b(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const B=N[M.id];for(const W in B)u(B[W].object),delete B[W];delete N[M.id]}}function w(){y(),o=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function iS(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==gi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const w=b===vc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Rr&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ui&&!w)}function c(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function sS(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new _r,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,S=v*4;let x=p.clippingState||null;c.value=x,x=u(_,d,S,f);for(let R=0;R!==S;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==g;++S,x+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function oS(r){let e=new WeakMap;function t(o,a){return a===Ch?o.mapping=Xo:a===Ph&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ch||a===Ph)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gv(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Kd extends V_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bo=4,yp=[.125,.215,.35,.446,.526,.582],Rs=20,Ou=new Kd,Mp=new Ue;let Fu=null,Bu=0,ku=0,zu=!1;const bs=(1+Math.sqrt(5))/2,ho=1/bs,Sp=[new I(-bs,ho,0),new I(bs,ho,0),new I(-ho,0,bs),new I(ho,0,bs),new I(0,bs,-ho),new I(0,bs,ho),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Bu,ku),this._renderer.xr.enabled=zu,e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:vc,format:gi,colorSpace:Tn,depthBuffer:!1},i=bp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aS(s)),this._blurMaterial=cS(s,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Ou)}_sceneToCubeUV(e,t,n,i){const a=new Un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mp),u.toneMapping=es,u.autoClear=!1;const f=new Sr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),_=new Et(new ca,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Mp),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;zc(i,v*S,p>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Xo||e.mapping===$o;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;zc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ou)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sp[(i-s-1)%Sp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Rs;m>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let v=0;for(let b=0;b<Rs;++b){const w=b/g,y=Math.exp(-w*w/2);p.push(y),b===0?v+=y:b<m&&(v+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const x=this._sizeLods[i],R=3*x*(i>S-bo?i-S+bo:0),A=4*(this._cubeSize-x);zc(t,R,A,3*x,2*x),c.setRenderTarget(t),c.render(h,Ou)}}function aS(r){const e=[],t=[],n=[];let i=r;const s=r-bo+1+yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-bo?c=yp[o-r+bo-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),S=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,w=A>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(y,g*_*A),S.set(d,m*_*A);const M=[A,A,A,A,A,A];x.set(M,p*_*A)}const R=new An;R.setAttribute("position",new zt(v,g)),R.setAttribute("uv",new zt(S,m)),R.setAttribute("faceIndex",new zt(x,p)),e.push(R),i>bo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bp(r,e,t){const n=new Hs(r,e,t);return n.texture.mapping=iu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cS(r,e,t){const n=new Float32Array(Rs),i=new I(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Ep(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Tp(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Zd(){return`

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
	`}function lS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ch||c===Ph,u=c===Xo||c===$o;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sd(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new sd(r)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&La("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hS(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],r.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let S=0,x=v.length;S<x;S+=3){const R=v[S+0],A=v[S+1],b=v[S+2];d.push(R,A,A,b,b,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const R=S+0,A=S+1,b=S+2;d.push(R,A,A,b,b,R)}}else return;const m=new(U_(d)?z_:k_)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function dS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function pS(r,e,t){const n=new WeakMap,i=new _t;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*A*4*h),w=new F_(b,R,A,h);w.type=Ui,w.needsUpdate=!0;const y=x*4;for(let P=0;P<h;P++){const N=p[P],B=v[P],W=S[P],X=R*A*4*P;for(let $=0;$<N.count;$++){const q=$*y;_===!0&&(i.fromBufferAttribute(N,$),b[X+q+0]=i.x,b[X+q+1]=i.y,b[X+q+2]=i.z,b[X+q+3]=0),g===!0&&(i.fromBufferAttribute(B,$),b[X+q+4]=i.x,b[X+q+5]=i.y,b[X+q+6]=i.z,b[X+q+7]=0),m===!0&&(i.fromBufferAttribute(W,$),b[X+q+8]=i.x,b[X+q+9]=i.y,b[X+q+10]=i.z,b[X+q+11]=W.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new Ge(R,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function mS(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class X_ extends hn{constructor(e,t,n,i,s,o,a,c,l,u=Po){if(u!==Po&&u!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Po&&(n=zs),n===void 0&&u===Yo&&(n=qo),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=c!==void 0?c:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $_=new hn,Ap=new X_(1,1),q_=new F_,Y_=new tv,j_=new G_,wp=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Lp=new Float32Array(4);function la(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wp[i];if(s===void 0&&(s=new Float32Array(i),wp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ou(r,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _S(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function vS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function yS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Lp.set(n),r.uniformMatrix2fv(this.addr,!1,Lp),on(t,n)}}function MS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Pp.set(n),r.uniformMatrix3fv(this.addr,!1,Pp),on(t,n)}}function SS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Cp.set(n),r.uniformMatrix4fv(this.addr,!1,Cp),on(t,n)}}function bS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function AS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function wS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function CS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function PS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function LS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ap.compareFunction=N_,s=Ap):s=$_,t.setTexture2D(e||s,i)}function DS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Y_,i)}function IS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||j_,i)}function NS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||q_,i)}function US(r){switch(r){case 5126:return _S;case 35664:return gS;case 35665:return xS;case 35666:return vS;case 35674:return yS;case 35675:return MS;case 35676:return SS;case 5124:case 35670:return bS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return RS;case 36295:return CS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return NS}}function OS(r,e){r.uniform1fv(this.addr,e)}function FS(r,e){const t=la(e,this.size,2);r.uniform2fv(this.addr,t)}function BS(r,e){const t=la(e,this.size,3);r.uniform3fv(this.addr,t)}function kS(r,e){const t=la(e,this.size,4);r.uniform4fv(this.addr,t)}function zS(r,e){const t=la(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function HS(r,e){const t=la(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function VS(r,e){const t=la(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function GS(r,e){r.uniform1iv(this.addr,e)}function WS(r,e){r.uniform2iv(this.addr,e)}function XS(r,e){r.uniform3iv(this.addr,e)}function $S(r,e){r.uniform4iv(this.addr,e)}function qS(r,e){r.uniform1uiv(this.addr,e)}function YS(r,e){r.uniform2uiv(this.addr,e)}function jS(r,e){r.uniform3uiv(this.addr,e)}function KS(r,e){r.uniform4uiv(this.addr,e)}function ZS(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||$_,s[o])}function JS(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Y_,s[o])}function QS(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||j_,s[o])}function eb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||q_,s[o])}function tb(r){switch(r){case 5126:return OS;case 35664:return FS;case 35665:return BS;case 35666:return kS;case 35674:return zS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return $S;case 5125:return qS;case 36294:return YS;case 36295:return jS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=US(t.type)}}class ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function Dp(r,e){r.seq.push(e),r.map[e.id]=e}function sb(r,e,t){const n=r.name,i=n.length;for(Hu.lastIndex=0;;){const s=Hu.exec(n),o=Hu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Dp(t,l===void 0?new nb(a,r,e):new ib(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new rb(a),Dp(t,h)),t=h}}}class yl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);sb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ip(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const ob=37297;let ab=0;function cb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Np=new Qe;function lb(r){lt._getMatrix(Np,lt.workingColorSpace,r);const e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case ru:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Up(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+cb(r.getShaderSource(e),o)}else return i}function ub(r,e){const t=lb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hb(r,e){let t;switch(e){case dx:t="Linear";break;case fx:t="Reinhard";break;case px:t="Cineon";break;case y_:t="ACESFilmic";break;case _x:t="AgX";break;case gx:t="Neutral";break;case mx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hc=new I;function db(){lt.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function pb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Da(r){return r!==""}function Op(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _b=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(r){return r.replace(_b,xb)}const gb=new Map;function xb(r,e){let t=et[e];if(t===void 0){const n=gb.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(r){return r.replace(vb,yb)}function yb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function kp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===g_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xo:case $o:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case v_:e="ENVMAP_BLENDING_MULTIPLY";break;case ux:e="ENVMAP_BLENDING_MIX";break;case hx:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ab(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Mb(t),l=Sb(t),u=bb(t),h=Eb(t),d=Tb(t),f=fb(t),_=pb(s),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(m=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?et.tonemapping_pars_fragment:"",t.toneMapping!==es?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),db(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),o=od(o),o=Op(o,t),o=Fp(o,t),a=od(a),a=Op(a,t),a=Fp(a,t),o=Bp(o),a=Bp(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+o,x=v+p+a,R=Ip(i,i.VERTEX_SHADER,S),A=Ip(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(P){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(R).trim(),W=i.getShaderInfoLog(A).trim();let X=!0,$=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,R,A);else{const q=Up(i,R,"vertex"),V=Up(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&($=!1);$&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(R),i.deleteShader(A),w=new yl(i,g),y=mb(i,g)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,ob)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let wb=0;class Rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cb(e),t.set(e,n)),n}}class Cb{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Pb(r,e,t,n,i,s,o){const a=new Yd,c=new Rb,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,N,B){const W=N.fog,X=B.geometry,$=y.isMeshStandardMaterial?N.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),V=q&&q.mapping===iu?q.image.height:null,te=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=L!==void 0?L.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let tt,j,ee,xe;if(te){const ve=Gi[te];tt=ve.vertexShader,j=ve.fragmentShader}else tt=y.vertexShader,j=y.fragmentShader,c.update(y),ee=c.getVertexShaderID(y),xe=c.getFragmentShaderID(y);const ne=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,nt=!!y.map,We=!!y.matcap,Le=!!q,U=!!y.aoMap,At=!!y.lightMap,Be=!!y.bumpMap,k=!!y.normalMap,Te=!!y.displacementMap,ut=!!y.emissiveMap,Re=!!y.metalnessMap,C=!!y.roughnessMap,E=y.anisotropy>0,G=y.clearcoat>0,Q=y.dispersion>0,J=y.iridescence>0,K=y.sheen>0,de=y.transmission>0,ce=E&&!!y.anisotropyMap,me=G&&!!y.clearcoatMap,Ye=G&&!!y.clearcoatNormalMap,ie=G&&!!y.clearcoatRoughnessMap,ae=J&&!!y.iridescenceMap,Ne=J&&!!y.iridescenceThicknessMap,De=K&&!!y.sheenColorMap,ye=K&&!!y.sheenRoughnessMap,Ze=!!y.specularMap,Fe=!!y.specularColorMap,ft=!!y.specularIntensityMap,D=de&&!!y.transmissionMap,ue=de&&!!y.thicknessMap,Y=!!y.gradientMap,Z=!!y.alphaMap,le=y.alphaTest>0,fe=!!y.alphaHash,ke=!!y.extensions;let pt=es;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pt=r.toneMapping);const Vt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:j,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Tn,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:We,envMap:Le,envMapMode:Le&&q.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:At,bumpMap:Be,normalMap:k,displacementMap:d&&Te,emissiveMap:ut,normalMapObjectSpace:k&&y.normalMapType===bx,normalMapTangentSpace:k&&y.normalMapType===I_,metalnessMap:Re,roughnessMap:C,anisotropy:E,anisotropyMap:ce,clearcoat:G,clearcoatMap:me,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:J,iridescenceMap:ae,iridescenceThicknessMap:Ne,sheen:K,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:Ze,specularColorMap:Fe,specularIntensityMap:ft,transmission:de,transmissionMap:D,thicknessMap:ue,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Co&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:fe,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:At&&g(y.lightMap.channel),bumpMapUv:Be&&g(y.bumpMap.channel),normalMapUv:k&&g(y.normalMap.channel),displacementMapUv:Te&&g(y.displacementMap.channel),emissiveMapUv:ut&&g(y.emissiveMap.channel),metalnessMapUv:Re&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:ce&&g(y.anisotropyMap.channel),clearcoatMapUv:me&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(y.sheenRoughnessMap.channel),specularMapUv:Ze&&g(y.specularMap.channel),specularColorMapUv:Fe&&g(y.specularColorMap.channel),specularIntensityMapUv:ft&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ue&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(k||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(nt||Z),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===bt,decodeVideoTextureEmissive:ut&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===bt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Di,flipSided:y.side===kn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(r.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=_[y.type];let P;if(M){const N=Gi[M];P=fv.clone(N.uniforms)}else P=y.uniforms;return P}function R(y,M){let P;for(let N=0,B=u.length;N<B;N++){const W=u[N];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Ab(r,M,y,s),u.push(P)),P}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){c.remove(y)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:w}}function Lb(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Db(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Db),n.length>1&&n.sort(d||zp),i.length>1&&i.sort(d||zp)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function Ib(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Hp,r.set(n,[o])):i>=s.length?(o=new Hp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Nb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ob=0;function Fb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bb(r){const e=new Nb,t=Ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new Ke,o=new Ke;function a(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,v=0,S=0,x=0,R=0,A=0,b=0;l.sort(Fb);for(let y=0,M=l.length;y<M;y++){const P=l[y],N=P.color,B=P.intensity,W=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],B);b++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=$,f++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(N).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[g]=$;const q=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=X,x++}g++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(N).multiplyScalar(B),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const q=P.shadow,V=t.get(P);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=$,_++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(B),$.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=$,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==_||w.spotLength!==g||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==v||w.numPointShadows!==S||w.numSpotShadows!==x||w.numSpotMaps!==R||w.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,w.directionalLength=f,w.pointLength=_,w.spotLength=g,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=v,w.numPointShadows=S,w.numSpotShadows=x,w.numSpotMaps=R,w.numLightProbes=b,n.version=Ob++)}function c(l,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Vp(r){const e=new Bb(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function kb(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Vp(r),e.set(i,[a])):s>=o.length?(a=new Vp(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class zb extends Zi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hb extends Zi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
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
}`;function Wb(r,e,t){let n=new jd;const i=new Ge,s=new Ge,o=new _t,a=new zb({depthPacking:Sx}),c=new Hb,l={},u=t.maxTextureSize,h={[wr]:kn,[kn]:wr,[Di]:Di},d=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Vb,fragmentShader:Gb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Et(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let p=this.type;this.render=function(A,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Qr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==fr&&this.type===fr,W=p===fr&&this.type!==fr;for(let X=0,$=A.length;X<$;X++){const q=A[X],V=q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/te.x),i.x=s.x*te.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/te.y),i.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||B===!0||W===!0){const he=this.type!==fr?{minFilter:zn,magFilter:zn}:{};V.map!==null&&V.map.dispose(),V.map=new Hs(i.x,i.y,he),V.map.texture.name=q.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const L=V.getViewportCount();for(let he=0;he<L;he++){const Ie=V.getViewport(he);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),N.viewport(o),V.updateMatrices(q,he),n=V.getFrustum(),x(b,w,V.camera,q,this.type)}V.isPointLightShadow!==!0&&this.type===fr&&v(V,w),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,M,P)};function v(A,b){const w=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hs(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,w,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,w,f,g,null)}function S(A,b,w,y){let M=null;const P=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=w.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=M.uuid,B=b.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let X=W[B];X===void 0&&(X=M.clone(),W[B]=X,b.addEventListener("dispose",R)),M=X}if(M.visible=b.visible,M.wireframe=b.wireframe,y===fr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=r.properties.get(M);N.light=w}return M}function x(A,b,w,y,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===fr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const X=B.groups;for(let $=0,q=X.length;$<q;$++){const V=X[$],te=W[V.materialIndex];if(te&&te.visible){const L=S(A,te,y,M);A.onBeforeShadow(r,A,b,w,B,L,V),r.renderBufferDirect(w,null,B,L,A,V),A.onAfterShadow(r,A,b,w,B,L,V)}}}else if(W.visible){const X=S(A,W,y,M);A.onBeforeShadow(r,A,b,w,B,X,null),r.renderBufferDirect(w,null,B,X,A,null),A.onAfterShadow(r,A,b,w,B,X,null)}}const N=A.children;for(let B=0,W=N.length;B<W;B++)x(N[B],b,w,y,M)}function R(A){A.target.removeEventListener("dispose",R);for(const w in l){const y=l[w],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Xb={[Sh]:bh,[Eh]:wh,[Th]:Rh,[Wo]:Ah,[bh]:Sh,[wh]:Eh,[Rh]:Th,[Ah]:Wo};function $b(r,e){function t(){let D=!1;const ue=new _t;let Y=null;const Z=new _t(0,0,0,0);return{setMask:function(le){Y!==le&&!D&&(r.colorMask(le,le,le,le),Y=le)},setLocked:function(le){D=le},setClear:function(le,fe,ke,pt,Vt){Vt===!0&&(le*=pt,fe*=pt,ke*=pt),ue.set(le,fe,ke,pt),Z.equals(ue)===!1&&(r.clearColor(le,fe,ke,pt),Z.copy(ue))},reset:function(){D=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,Y=null,Z=null,le=null;return{setReversed:function(fe){if(ue!==fe){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const pt=le;le=null,this.setClear(pt)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?ne(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!D&&(r.depthMask(fe),Y=fe)},setFunc:function(fe){if(ue&&(fe=Xb[fe]),Z!==fe){switch(fe){case Sh:r.depthFunc(r.NEVER);break;case bh:r.depthFunc(r.ALWAYS);break;case Eh:r.depthFunc(r.LESS);break;case Wo:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case Ah:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=fe}},setLocked:function(fe){D=fe},setClear:function(fe){le!==fe&&(ue&&(fe=1-fe),r.clearDepth(fe),le=fe)},reset:function(){D=!1,Y=null,Z=null,le=null,ue=!1}}}function i(){let D=!1,ue=null,Y=null,Z=null,le=null,fe=null,ke=null,pt=null,Vt=null;return{setTest:function(ve){D||(ve?ne(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(ve){ue!==ve&&!D&&(r.stencilMask(ve),ue=ve)},setFunc:function(ve,Ae,Je){(Y!==ve||Z!==Ae||le!==Je)&&(r.stencilFunc(ve,Ae,Je),Y=ve,Z=Ae,le=Je)},setOp:function(ve,Ae,Je){(fe!==ve||ke!==Ae||pt!==Je)&&(r.stencilOp(ve,Ae,Je),fe=ve,ke=Ae,pt=Je)},setLocked:function(ve){D=ve},setClear:function(ve){Vt!==ve&&(r.clearStencil(ve),Vt=ve)},reset:function(){D=!1,ue=null,Y=null,Z=null,le=null,fe=null,ke=null,pt=null,Vt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,S=null,x=null,R=null,A=null,b=new Ue(0,0,0),w=0,y=!1,M=null,P=null,N=null,B=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=q>=2);let te=null,L={};const he=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),tt=new _t().fromArray(he),j=new _t().fromArray(Ie);function ee(D,ue,Y,Z){const le=new Uint8Array(4),fe=r.createTexture();r.bindTexture(D,fe),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<Y;ke++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(ue+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return fe}const xe={};xe[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(r.DEPTH_TEST),o.setFunc(Wo),Be(!1),k(Wf),ne(r.CULL_FACE),U(Qr);function ne(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Ee(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function we(D,ue){return h[D]!==ue?(r.bindFramebuffer(D,ue),h[D]=ue,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ve(D,ue){let Y=f,Z=!1;if(D){Y=d.get(ue),Y===void 0&&(Y=[],d.set(ue,Y));const le=D.textures;if(Y.length!==le.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,ke=le.length;fe<ke;fe++)Y[fe]=r.COLOR_ATTACHMENT0+fe;Y.length=le.length,Z=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Z=!0);Z&&r.drawBuffers(Y)}function nt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const We={[ws]:r.FUNC_ADD,[q0]:r.FUNC_SUBTRACT,[Y0]:r.FUNC_REVERSE_SUBTRACT};We[j0]=r.MIN,We[K0]=r.MAX;const Le={[Z0]:r.ZERO,[J0]:r.ONE,[Q0]:r.SRC_COLOR,[yh]:r.SRC_ALPHA,[sx]:r.SRC_ALPHA_SATURATE,[ix]:r.DST_COLOR,[tx]:r.DST_ALPHA,[ex]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[rx]:r.ONE_MINUS_DST_COLOR,[nx]:r.ONE_MINUS_DST_ALPHA,[ox]:r.CONSTANT_COLOR,[ax]:r.ONE_MINUS_CONSTANT_COLOR,[cx]:r.CONSTANT_ALPHA,[lx]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,ue,Y,Z,le,fe,ke,pt,Vt,ve){if(D===Qr){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(ne(r.BLEND),g=!0),D!==$0){if(D!==m||ve!==y){if((p!==ws||x!==ws)&&(r.blendEquation(r.FUNC_ADD),p=ws,x=ws),ve)switch(D){case Co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.ONE,r.ONE);break;case Xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $f:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $f:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,S=null,R=null,A=null,b.set(0,0,0),w=0,m=D,y=ve}return}le=le||ue,fe=fe||Y,ke=ke||Z,(ue!==p||le!==x)&&(r.blendEquationSeparate(We[ue],We[le]),p=ue,x=le),(Y!==v||Z!==S||fe!==R||ke!==A)&&(r.blendFuncSeparate(Le[Y],Le[Z],Le[fe],Le[ke]),v=Y,S=Z,R=fe,A=ke),(pt.equals(b)===!1||Vt!==w)&&(r.blendColor(pt.r,pt.g,pt.b,Vt),b.copy(pt),w=Vt),m=D,y=!1}function At(D,ue){D.side===Di?Ee(r.CULL_FACE):ne(r.CULL_FACE);let Y=D.side===kn;ue&&(Y=!Y),Be(Y),D.blending===Co&&D.transparent===!1?U(Qr):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function k(D){D!==W0?(ne(r.CULL_FACE),D!==P&&(D===Wf?r.cullFace(r.BACK):D===X0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),P=D}function Te(D){D!==N&&($&&r.lineWidth(D),N=D)}function ut(D,ue,Y){D?(ne(r.POLYGON_OFFSET_FILL),(B!==ue||W!==Y)&&(r.polygonOffset(ue,Y),B=ue,W=Y)):Ee(r.POLYGON_OFFSET_FILL)}function Re(D){D?ne(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+X-1),te!==D&&(r.activeTexture(D),te=D)}function E(D,ue,Y){Y===void 0&&(te===null?Y=r.TEXTURE0+X-1:Y=te);let Z=L[Y];Z===void 0&&(Z={type:void 0,texture:void 0},L[Y]=Z),(Z.type!==D||Z.texture!==ue)&&(te!==Y&&(r.activeTexture(Y),te=Y),r.bindTexture(D,ue||xe[D]),Z.type=D,Z.texture=ue)}function G(){const D=L[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){tt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function ye(D){j.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Ze(D,ue){let Y=l.get(ue);Y===void 0&&(Y=new WeakMap,l.set(ue,Y));let Z=Y.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(ue,D.name),Y.set(D,Z))}function Fe(D,ue){const Z=l.get(ue).get(D);c.get(ue)!==Z&&(r.uniformBlockBinding(ue,Z,D.__bindingPointIndex),c.set(ue,Z))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},te=null,L={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,S=null,x=null,R=null,A=null,b=new Ue(0,0,0),w=0,y=!1,M=null,P=null,N=null,B=null,W=null,tt.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Ee,bindFramebuffer:we,drawBuffers:Ve,useProgram:nt,setBlending:U,setMaterial:At,setFlipSided:Be,setCullFace:k,setLineWidth:Te,setPolygonOffset:ut,setScissorTest:Re,activeTexture:C,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:ae,texImage3D:Ne,updateUBOMapping:Ze,uniformBlockBinding:Fe,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:K,texSubImage3D:de,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:De,viewport:ye,reset:ft}}function Gp(r,e,t,n){const i=qb(n);switch(t){case A_:return r*e;case R_:return r*e;case C_:return r*e*2;case Gd:return r*e/i.components*i.byteLength;case Wd:return r*e/i.components*i.byteLength;case P_:return r*e*2/i.components*i.byteLength;case Xd:return r*e*2/i.components*i.byteLength;case w_:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case $d:return r*e*4/i.components*i.byteLength;case ml:case _l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gl:case xl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(r,16)*Math.max(e,8)/4;case Lh:case Ih:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case vl:case Jh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case L_:case ed:return Math.ceil(r/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qb(r){switch(r){case Rr:case b_:return{byteLength:1,components:1};case rc:case E_:case vc:return{byteLength:2,components:1};case Hd:case Vd:return{byteLength:2,components:4};case zs:case zd:case Ui:return{byteLength:4,components:1};case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Yb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):ac("canvas")}function g(C,E,G){let Q=1;const J=Re(C);if((J.width>G||J.height>G)&&(Q=G/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Q*J.width),de=Math.floor(Q*J.height);h===void 0&&(h=_(K,de));const ce=E?_(K,de):h;return ce.width=K,ce.height=de,ce.getContext("2d").drawImage(C,0,0,K,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+de+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,E,G,Q,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=E;if(E===r.RED&&(G===r.FLOAT&&(K=r.R32F),G===r.HALF_FLOAT&&(K=r.R16F),G===r.UNSIGNED_BYTE&&(K=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.R8UI),G===r.UNSIGNED_SHORT&&(K=r.R16UI),G===r.UNSIGNED_INT&&(K=r.R32UI),G===r.BYTE&&(K=r.R8I),G===r.SHORT&&(K=r.R16I),G===r.INT&&(K=r.R32I)),E===r.RG&&(G===r.FLOAT&&(K=r.RG32F),G===r.HALF_FLOAT&&(K=r.RG16F),G===r.UNSIGNED_BYTE&&(K=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RG8UI),G===r.UNSIGNED_SHORT&&(K=r.RG16UI),G===r.UNSIGNED_INT&&(K=r.RG32UI),G===r.BYTE&&(K=r.RG8I),G===r.SHORT&&(K=r.RG16I),G===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGB8UI),G===r.UNSIGNED_SHORT&&(K=r.RGB16UI),G===r.UNSIGNED_INT&&(K=r.RGB32UI),G===r.BYTE&&(K=r.RGB8I),G===r.SHORT&&(K=r.RGB16I),G===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),G===r.UNSIGNED_INT&&(K=r.RGBA32UI),G===r.BYTE&&(K=r.RGBA8I),G===r.SHORT&&(K=r.RGBA16I),G===r.INT&&(K=r.RGBA32I)),E===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),E===r.RGBA){const de=J?ru:lt.getTransfer(Q);G===r.FLOAT&&(K=r.RGBA32F),G===r.HALF_FLOAT&&(K=r.RGBA16F),G===r.UNSIGNED_BYTE&&(K=de===bt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(C,E){let G;return C?E===null||E===zs||E===qo?G=r.DEPTH24_STENCIL8:E===Ui?G=r.DEPTH32F_STENCIL8:E===rc&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zs||E===qo?G=r.DEPTH_COMPONENT24:E===Ui?G=r.DEPTH_COMPONENT32F:E===rc&&(G=r.DEPTH_COMPONENT16),G}function R(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==si?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&u.delete(E)}function b(C){const E=C.target;E.removeEventListener("dispose",b),M(E)}function w(C){const E=n.get(C);if(E.__webglInit===void 0)return;const G=C.source,Q=d.get(G);if(Q){const J=Q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(Q).length===0&&d.delete(G)}n.remove(C)}function y(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const G=C.source,Q=d.get(G);delete Q[E.__cacheKey],o.memory.textures--}function M(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let J=0;J<E.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(E.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,J=G.length;Q<J;Q++){const K=n.get(G[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let P=0;function N(){P=0}function B(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const G=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,C,E);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function $(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function q(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){j(G,C,E);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function V(C,E){const G=n.get(C);if(C.version>0&&G.__version!==C.version){ee(G,C,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const te={[ks]:r.REPEAT,[Xr]:r.CLAMP_TO_EDGE,[Il]:r.MIRRORED_REPEAT},L={[zn]:r.NEAREST,[S_]:r.NEAREST_MIPMAP_NEAREST,[Pa]:r.NEAREST_MIPMAP_LINEAR,[si]:r.LINEAR,[pl]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},he={[Ex]:r.NEVER,[Px]:r.ALWAYS,[Tx]:r.LESS,[N_]:r.LEQUAL,[Ax]:r.EQUAL,[Cx]:r.GEQUAL,[wx]:r.GREATER,[Rx]:r.NOTEQUAL};function Ie(C,E){if(E.type===Ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===si||E.magFilter===pl||E.magFilter===Pa||E.magFilter===yr||E.minFilter===si||E.minFilter===pl||E.minFilter===Pa||E.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==Pa&&E.minFilter!==yr||E.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function tt(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const K=W(E);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[K].usedTimes++;const de=J[C.__cacheKey];de!==void 0&&(J[C.__cacheKey].usedTimes--,de.usedTimes===0&&y(E)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return G}function j(C,E,G){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const J=tt(C,E),K=E.source;t.bindTexture(Q,C.__webglTexture,r.TEXTURE0+G);const de=n.get(K);if(K.version!==de.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const ce=lt.getPrimaries(lt.workingColorSpace),me=E.colorSpace===xr?null:lt.getPrimaries(E.colorSpace),Ye=E.colorSpace===xr||ce===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=g(E.image,!1,i.maxTextureSize);ie=ut(E,ie);const ae=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let De=S(E.internalFormat,ae,Ne,E.colorSpace,E.isVideoTexture);Ie(Q,E);let ye;const Ze=E.mipmaps,Fe=E.isVideoTexture!==!0,ft=de.__version===void 0||J===!0,D=K.dataReady,ue=R(E,ie);if(E.isDepthTexture)De=x(E.format===Yo,E.type),ft&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ne,null));else if(E.isDataTexture)if(Ze.length>0){Fe&&ft&&t.texStorage2D(r.TEXTURE_2D,ue,De,Ze[0].width,Ze[0].height);for(let Y=0,Z=Ze.length;Y<Z;Y++)ye=Ze[Y],Fe?D&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,ae,Ne,ye.data):t.texImage2D(r.TEXTURE_2D,Y,De,ye.width,ye.height,0,ae,Ne,ye.data);E.generateMipmaps=!1}else Fe?(ft&&t.texStorage2D(r.TEXTURE_2D,ue,De,ie.width,ie.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,ae,Ne,ie.data)):t.texImage2D(r.TEXTURE_2D,0,De,ie.width,ie.height,0,ae,Ne,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,Ze[0].width,Ze[0].height,ie.depth);for(let Y=0,Z=Ze.length;Y<Z;Y++)if(ye=Ze[Y],E.format!==gi)if(ae!==null)if(Fe){if(D)if(E.layerUpdates.size>0){const le=Gp(ye.width,ye.height,E.format,E.type);for(const fe of E.layerUpdates){const ke=ye.data.subarray(fe*le/ye.data.BYTES_PER_ELEMENT,(fe+1)*le/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,fe,ye.width,ye.height,1,ae,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ae,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,ie.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,ie.depth,ae,Ne,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,De,ye.width,ye.height,ie.depth,0,ae,Ne,ye.data)}else{Fe&&ft&&t.texStorage2D(r.TEXTURE_2D,ue,De,Ze[0].width,Ze[0].height);for(let Y=0,Z=Ze.length;Y<Z;Y++)ye=Ze[Y],E.format!==gi?ae!==null?Fe?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,ae,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,ae,Ne,ye.data):t.texImage2D(r.TEXTURE_2D,Y,De,ye.width,ye.height,0,ae,Ne,ye.data)}else if(E.isDataArrayTexture)if(Fe){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,De,ie.width,ie.height,ie.depth),D)if(E.layerUpdates.size>0){const Y=Gp(ie.width,ie.height,E.format,E.type);for(const Z of E.layerUpdates){const le=ie.data.subarray(Z*Y/ie.data.BYTES_PER_ELEMENT,(Z+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ae,Ne,le)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ne,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ae,Ne,ie.data);else if(E.isData3DTexture)Fe?(ft&&t.texStorage3D(r.TEXTURE_3D,ue,De,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,Ne,ie.data)):t.texImage3D(r.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ae,Ne,ie.data);else if(E.isFramebufferTexture){if(ft)if(Fe)t.texStorage2D(r.TEXTURE_2D,ue,De,ie.width,ie.height);else{let Y=ie.width,Z=ie.height;for(let le=0;le<ue;le++)t.texImage2D(r.TEXTURE_2D,le,De,Y,Z,0,ae,Ne,null),Y>>=1,Z>>=1}}else if(Ze.length>0){if(Fe&&ft){const Y=Re(Ze[0]);t.texStorage2D(r.TEXTURE_2D,ue,De,Y.width,Y.height)}for(let Y=0,Z=Ze.length;Y<Z;Y++)ye=Ze[Y],Fe?D&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ae,Ne,ye):t.texImage2D(r.TEXTURE_2D,Y,De,ae,Ne,ye);E.generateMipmaps=!1}else if(Fe){if(ft){const Y=Re(ie);t.texStorage2D(r.TEXTURE_2D,ue,De,Y.width,Y.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,Ne,ie)}else t.texImage2D(r.TEXTURE_2D,0,De,ae,Ne,ie);m(E)&&p(Q),de.__version=K.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ee(C,E,G){if(E.image.length!==6)return;const Q=tt(C,E),J=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const K=n.get(J);if(J.version!==K.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const de=lt.getPrimaries(lt.workingColorSpace),ce=E.colorSpace===xr?null:lt.getPrimaries(E.colorSpace),me=E.colorSpace===xr||de===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!Ye&&!ie?ae[Z]=g(E.image[Z],!0,i.maxCubemapSize):ae[Z]=ie?E.image[Z].image:E.image[Z],ae[Z]=ut(E,ae[Z]);const Ne=ae[0],De=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),Ze=S(E.internalFormat,De,ye,E.colorSpace),Fe=E.isVideoTexture!==!0,ft=K.__version===void 0||Q===!0,D=J.dataReady;let ue=R(E,Ne);Ie(r.TEXTURE_CUBE_MAP,E);let Y;if(Ye){Fe&&ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ze,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){Y=ae[Z].mipmaps;for(let le=0;le<Y.length;le++){const fe=Y[le];E.format!==gi?De!==null?Fe?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,De,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ze,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,fe.width,fe.height,De,ye,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ze,fe.width,fe.height,0,De,ye,fe.data)}}}else{if(Y=E.mipmaps,Fe&&ft){Y.length>0&&ue++;const Z=Re(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Fe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,De,ye,ae[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,ae[Z].width,ae[Z].height,0,De,ye,ae[Z].data);for(let le=0;le<Y.length;le++){const ke=Y[le].image[Z].image;Fe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,ke.width,ke.height,De,ye,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ze,ke.width,ke.height,0,De,ye,ke.data)}}else{Fe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ye,ae[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,De,ye,ae[Z]);for(let le=0;le<Y.length;le++){const fe=Y[le];Fe?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,De,ye,fe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ze,De,ye,fe.image[Z])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),K.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function xe(C,E,G,Q,J,K){const de=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),me=S(G.internalFormat,de,ce,G.colorSpace),Ye=n.get(E),ie=n.get(G);if(ie.__renderTarget=E,!Ye.__hasExternalTextures){const ae=Math.max(1,E.width>>K),Ne=Math.max(1,E.height>>K);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,K,me,ae,Ne,E.depth,0,de,ce,null):t.texImage2D(J,K,me,ae,Ne,0,de,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,ie.__webglTexture,0,Be(E)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,ie.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(C,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=x(E.stencilBuffer,J),de=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=Be(E);k(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,K,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,K,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,K,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,C)}else{const Q=E.textures;for(let J=0;J<Q.length;J++){const K=Q[J],de=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),me=S(K.internalFormat,de,ce,K.colorSpace),Ye=Be(E);G&&k(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,me,E.width,E.height):k(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,me,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,me,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const J=Q.__webglTexture,K=Be(E);if(E.depthTexture.format===Po)k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(E.depthTexture.format===Yo)k(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(C){const E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),ne(E.__webglDepthbuffer[Q],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ne(E.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(C,E,G){const Q=n.get(C);E!==void 0&&xe(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&we(C)}function nt(C){const E=C.texture,G=n.get(C),Q=n.get(E);C.addEventListener("dispose",b);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[ce][me]=r.createFramebuffer()}else G.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)G.__webglFramebuffer[ce]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(de)for(let ce=0,me=J.length;ce<me;ce++){const Ye=n.get(J[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&k(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const me=J[ce];G.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const Ye=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ae=S(me.internalFormat,Ye,ie,me.colorSpace,C.isXRRenderTarget===!0),Ne=Be(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)xe(G.__webglFramebuffer[ce][me],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else xe(G.__webglFramebuffer[ce],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,me=J.length;ce<me;ce++){const Ye=J[ce],ie=n.get(Ye);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Ie(r.TEXTURE_2D,Ye),xe(G.__webglFramebuffer,C,Ye,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),m(Ye)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),Ie(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)xe(G.__webglFramebuffer[me],C,E,r.COLOR_ATTACHMENT0,ce,me);else xe(G.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ce,0);m(E)&&p(ce),t.unbindTexture()}C.depthBuffer&&we(C)}function We(C){const E=C.textures;for(let G=0,Q=E.length;G<Q;G++){const J=E[G];if(m(J)){const K=v(C),de=n.get(J).__webglTexture;t.bindTexture(K,de),p(K),t.unbindTexture()}}}const Le=[],U=[];function At(C){if(C.samples>0){if(k(C)===!1){const E=C.textures,G=C.width,Q=C.height;let J=r.COLOR_BUFFER_BIT;const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(C),ce=E.length>1;if(ce)for(let me=0;me<E.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<E.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ye=n.get(E[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ye,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,J,r.NEAREST),c===!0&&(Le.length=0,U.length=0,Le.push(r.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push(K),U.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<E.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ye=n.get(E[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,Ye,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Be(C){return Math.min(i.maxSamples,C.samples)}function k(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ut(C,E){const G=C.colorSpace,Q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Tn&&G!==xr&&(lt.getTransfer(G)===bt?(Q!==gi||J!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=k}function jb(r,e){function t(n,i=xr){let s;const o=lt.getTransfer(i);if(n===Rr)return r.UNSIGNED_BYTE;if(n===Hd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vd)return r.UNSIGNED_SHORT_5_5_5_1;if(n===T_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===b_)return r.BYTE;if(n===E_)return r.SHORT;if(n===rc)return r.UNSIGNED_SHORT;if(n===zd)return r.INT;if(n===zs)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===vc)return r.HALF_FLOAT;if(n===A_)return r.ALPHA;if(n===w_)return r.RGB;if(n===gi)return r.RGBA;if(n===R_)return r.LUMINANCE;if(n===C_)return r.LUMINANCE_ALPHA;if(n===Po)return r.DEPTH_COMPONENT;if(n===Yo)return r.DEPTH_STENCIL;if(n===Gd)return r.RED;if(n===Wd)return r.RED_INTEGER;if(n===P_)return r.RG;if(n===Xd)return r.RG_INTEGER;if(n===$d)return r.RGBA_INTEGER;if(n===ml||n===_l||n===gl||n===xl)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Dh||n===Ih||n===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Oh||n===Fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uh||n===Oh)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bh||n===kh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===$h||n===qh||n===Yh||n===jh||n===Kh||n===Zh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===Jh||n===Qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vl)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===L_||n===ed||n===td||n===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Kb extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
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

}`;class eE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new hn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cs({vertexShader:Jb,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new su(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tE extends Ys{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,_=null;const g=new eE,m=t.getContextAttributes();let p=null,v=null;const S=[],x=[],R=new Ge;let A=null;const b=new Un;b.viewport=new _t;const w=new Un;w.viewport=new _t;const y=[b,w],M=new Kb;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=S[j];return ee===void 0&&(ee=new Vu,S[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=S[j];return ee===void 0&&(ee=new Vu,S[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=S[j];return ee===void 0&&(ee=new Vu,S[j]=ee),ee.getHandSpace()};function B(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const xe=S[ee];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let j=0;j<S.length;j++){const ee=x[j];ee!==null&&(x[j]=null,S[j].disconnect(ee))}P=null,N=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Hs(f.framebufferWidth,f.framebufferHeight,{format:gi,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,xe=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Yo:Po,xe=m.stencil?qo:zs);const Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Hs(d.textureWidth,d.textureHeight,{format:gi,type:Rr,depthTexture:new X_(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(j){for(let ee=0;ee<j.removed.length;ee++){const xe=j.removed[ee],ne=x.indexOf(xe);ne>=0&&(x[ne]=null,S[ne].disconnect(xe))}for(let ee=0;ee<j.added.length;ee++){const xe=j.added[ee];let ne=x.indexOf(xe);if(ne===-1){for(let we=0;we<S.length;we++)if(we>=x.length){x.push(xe),ne=we;break}else if(x[we]===null){x[we]=xe,ne=we;break}if(ne===-1)break}const Ee=S[ne];Ee&&Ee.connect(xe)}}const $=new I,q=new I;function V(j,ee,xe){$.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(xe.matrixWorld);const ne=$.distanceTo(q),Ee=ee.projectionMatrix.elements,we=xe.projectionMatrix.elements,Ve=Ee[14]/(Ee[10]-1),nt=Ee[14]/(Ee[10]+1),We=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],At=(we[8]+1)/we[0],Be=Ve*U,k=Ve*At,Te=ne/(-U+At),ut=Te*-U;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ut),j.translateZ(Te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Re=Ve+Te,C=nt+Te,E=Be-ut,G=k+(ne-ut),Q=We*nt/C*Re,J=Le*nt/C*Re;j.projectionMatrix.makePerspective(E,G,Q,J,Re,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,xe=j.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),M.near=w.near=b.near=ee,M.far=w.far=b.far=xe,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),b.layers.mask=j.layers.mask|2,w.layers.mask=j.layers.mask|4,M.layers.mask=b.layers.mask|w.layers.mask;const ne=j.parent,Ee=M.cameras;te(M,ne);for(let we=0;we<Ee.length;we++)te(Ee[we],ne);Ee.length===2?V(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),L(j,M,ne)};function L(j,ee,xe){xe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=jo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let he=null;function Ie(j,ee){if(u=ee.getViewerPose(l||o),_=ee,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ne=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let we=0;we<xe.length;we++){const Ve=xe[we];let nt=null;if(f!==null)nt=f.getViewport(Ve);else{const Le=h.getViewSubImage(d,Ve);nt=Le.viewport,we===0&&(e.setRenderTargetTextures(v,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(v))}let We=y[we];We===void 0&&(We=new Un,We.layers.enable(we),We.viewport=new _t,y[we]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),we===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(We)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=h.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let xe=0;xe<S.length;xe++){const ne=x[xe],Ee=S[xe];ne!==null&&Ee!==void 0&&Ee.update(ne,ee,l||o)}he&&he(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const tt=new W_;tt.setAnimationLoop(Ie),this.setAnimationLoop=function(j){he=j},this.dispose=function(){}}}const xs=new tr,nE=new Ke;function iE(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,H_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,xs.copy(x),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(xs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rE(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function l(v,S){let x=i[v.id];x===void 0&&(_(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function u(v){const S=h();v.__bindingPointIndex=S;const x=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=i[v.id],x=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,b=x.length;A<b;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,M=w.length;y<M;y++){const P=w[y];if(f(P,A,y,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let X=0;X<B.length;X++){const $=B[X],q=g($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,N+W,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,x,R){const A=v.value,b=S+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const w=R[b];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return R[b]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function _(v){const S=v.uniforms;let x=0;const R=16;for(let b=0,w=S.length;b<w;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,P=y.length;M<P;M++){const N=y[M],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,X=B.length;W<X;W++){const $=B[W],q=g($),V=x%R,te=V%q.boundary,L=V+te;x+=te,L!==0&&R-L<q.storage&&(x+=R-L),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=q.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function g(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class sE{constructor(e={}){const{canvas:t=qx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=es,this.toneMappingExposure=1;const x=this;let R=!1,A=0,b=0,w=null,y=-1,M=null;const P=new _t,N=new _t;let B=null;const W=new Ue(0);let X=0,$=t.width,q=t.height,V=1,te=null,L=null;const he=new _t(0,0,$,q),Ie=new _t(0,0,$,q);let tt=!1;const j=new jd;let ee=!1,xe=!1;const ne=new Ke,Ee=new Ke,we=new I,Ve=new _t,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Le(){return w===null?V:1}let U=n;function At(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),U===null){const O="webgl2";if(U=At(O,T),U===null)throw At(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,k,Te,ut,Re,C,E,G,Q,J,K,de,ce,me,Ye,ie,ae,Ne,De,ye,Ze,Fe,ft,D;function ue(){Be=new uS(U),Be.init(),Fe=new jb(U,Be),k=new rS(U,Be,e,Fe),Te=new $b(U,Be),k.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ut=new fS(U),Re=new Lb,C=new Yb(U,Be,Te,Re,k,Fe,ut),E=new oS(x),G=new lS(x),Q=new yv(U),ft=new nS(U,Q),J=new hS(U,Q,ut,ft),K=new mS(U,J,Q,ut),De=new pS(U,k,C),ie=new sS(Re),de=new Pb(x,E,G,Be,k,ft,ie),ce=new iE(x,Re),me=new Ib,Ye=new kb(Be),Ne=new tS(x,E,G,Te,K,f,c),ae=new Wb(x,K,k),D=new rE(U,ut,k,Te),ye=new iS(U,Be,ut),Ze=new dS(U,Be,ut),ut.programs=de.programs,x.capabilities=k,x.extensions=Be,x.properties=Re,x.renderLists=me,x.shadowMap=ae,x.state=Te,x.info=ut}ue();const Y=new tE(x,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize($,q,!1))},this.getSize=function(T){return T.set($,q)},this.setSize=function(T,O,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,q=O,t.width=Math.floor(T*V),t.height=Math.floor(O*V),z===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set($*V,q*V).floor()},this.setDrawingBufferSize=function(T,O,z){$=T,q=O,V=z,t.width=Math.floor(T*z),t.height=Math.floor(O*z),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,O,z,H){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,O,z,H),Te.viewport(P.copy(he).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,O,z,H){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,O,z,H),Te.scissor(N.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){Te.setScissorTest(tt=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,O=!0,z=!0){let H=0;if(T){let F=!1;if(w!==null){const re=w.texture.format;F=re===$d||re===Xd||re===Wd}if(F){const re=w.texture.type,oe=re===Rr||re===zs||re===rc||re===qo||re===Hd||re===Vd,pe=Ne.getClearColor(),Me=Ne.getClearAlpha(),ze=pe.r,$e=pe.g,be=pe.b;oe?(_[0]=ze,_[1]=$e,_[2]=be,_[3]=Me,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=ze,g[1]=$e,g[2]=be,g[3]=Me,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),me.dispose(),Ye.dispose(),Re.dispose(),E.dispose(),G.dispose(),K.dispose(),ft.dispose(),D.dispose(),de.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",_e),Y.removeEventListener("sessionend",Xe),Ce.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ut.autoReset,O=ae.enabled,z=ae.autoUpdate,H=ae.needsUpdate,F=ae.type;ue(),ut.autoReset=T,ae.enabled=O,ae.autoUpdate=z,ae.needsUpdate=H,ae.type=F}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const O=T.target;O.removeEventListener("dispose",ke),pt(O)}function pt(T){Vt(T),Re.remove(T)}function Vt(T){const O=Re.get(T).programs;O!==void 0&&(O.forEach(function(z){de.releaseProgram(z)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,z,H,F,re){O===null&&(O=nt);const oe=F.isMesh&&F.matrixWorld.determinant()<0,pe=Kn(T,O,z,H,F);Te.setMaterial(H,oe);let Me=z.index,ze=1;if(H.wireframe===!0){if(Me=J.getWireframeAttribute(z),Me===void 0)return;ze=2}const $e=z.drawRange,be=z.attributes.position;let je=$e.start*ze,mt=($e.start+$e.count)*ze;re!==null&&(je=Math.max(je,re.start*ze),mt=Math.min(mt,(re.start+re.count)*ze)),Me!==null?(je=Math.max(je,0),mt=Math.min(mt,Me.count)):be!=null&&(je=Math.max(je,0),mt=Math.min(mt,be.count));const xt=mt-je;if(xt<0||xt===1/0)return;ft.setup(F,H,pe,z,Me);let Kt,vt=ye;if(Me!==null&&(Kt=Q.get(Me),vt=Ze,vt.setIndex(Kt)),F.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Le()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(F.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*Le()),F.isLineSegments?vt.setMode(U.LINES):F.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else F.isPoints?vt.setMode(U.POINTS):F.isSprite&&vt.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)vt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,or=F._multiDrawCounts,yt=F._multiDrawCount,Ei=Me?Q.get(Me).bytesPerElement:1,Zs=Re.get(H).currentProgram.getUniforms();for(let Zn=0;Zn<yt;Zn++)Zs.setValue(U,"_gl_DrawID",Zn),vt.render(Pe[Zn]/Ei,or[Zn])}else if(F.isInstancedMesh)vt.renderInstances(je,xt,F.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,or=Math.min(z.instanceCount,Pe);vt.renderInstances(je,xt,or)}else vt.render(je,xt)};function ve(T,O,z){T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=kn,T.needsUpdate=!0,wt(T,O,z),T.side=wr,T.needsUpdate=!0,wt(T,O,z),T.side=Di):wt(T,O,z)}this.compile=function(T,O,z=null){z===null&&(z=T),p=Ye.get(z),p.init(O),S.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let oe=0;oe<re.length;oe++){const pe=re[oe];ve(pe,z,F),H.add(pe)}else ve(re,z,F),H.add(re)}),S.pop(),p=null,H},this.compileAsync=function(T,O,z=null){const H=this.compile(T,O,z);return new Promise(F=>{function re(){if(H.forEach(function(oe){Re.get(oe).currentProgram.isReady()&&H.delete(oe)}),H.size===0){F(T);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ae=null;function Je(T){Ae&&Ae(T)}function _e(){Ce.stop()}function Xe(){Ce.start()}const Ce=new W_;Ce.setAnimationLoop(Je),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(T){Ae=T,Y.setAnimationLoop(T),T===null?Ce.stop():Ce.start()},Y.addEventListener("sessionstart",_e),Y.addEventListener("sessionend",Xe),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,w),p=Ye.get(T,S.length),p.init(O),S.push(p),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(Ee),xe=this.localClippingEnabled,ee=ie.init(this.clippingPlanes,xe),m=me.get(T,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&He(re,O,-1/0,x.sortObjects)}He(T,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,L),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Ne.addToRenderList(m,T),this.info.render.frame++,ee===!0&&ie.beginShadows();const z=p.state.shadowsArray;ae.render(z,T,O),ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const re=O.cameras;if(F.length>0)for(let oe=0,pe=re.length;oe<pe;oe++){const Me=re[oe];it(H,F,T,Me)}We&&Ne.render(T);for(let oe=0,pe=re.length;oe<pe;oe++){const Me=re[oe];Xt(m,T,Me,Me.viewport)}}else F.length>0&&it(H,F,T,O),We&&Ne.render(T),Xt(m,T,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,O),ft.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function He(T,O,z,H){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){H&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const oe=K.update(T),pe=T.material;pe.visible&&m.push(T,oe,pe,z,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const oe=K.update(T),pe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ve.copy(oe.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const Me=oe.groups;for(let ze=0,$e=Me.length;ze<$e;ze++){const be=Me[ze],je=pe[be.materialIndex];je&&je.visible&&m.push(T,oe,je,z,Ve.z,be)}}else pe.visible&&m.push(T,oe,pe,z,Ve.z,null)}}const re=T.children;for(let oe=0,pe=re.length;oe<pe;oe++)He(re[oe],O,z,H)}function Xt(T,O,z,H){const F=T.opaque,re=T.transmissive,oe=T.transparent;p.setupLightsView(z),ee===!0&&ie.setGlobalState(x.clippingPlanes,z),H&&Te.viewport(P.copy(H)),F.length>0&&Lt(F,O,z),re.length>0&&Lt(re,O,z),oe.length>0&&Lt(oe,O,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function it(T,O,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Hs(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?vc:Rr,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],oe=H.viewport||P;re.setSize(oe.z,oe.w);const pe=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ne.render(z);const Me=x.toneMapping;x.toneMapping=es;const ze=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ee===!0&&ie.setGlobalState(x.clippingPlanes,H),Lt(T,z,H),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let be=0,je=O.length;be<je;be++){const mt=O[be],xt=mt.object,Kt=mt.geometry,vt=mt.material,Pe=mt.group;if(vt.side===Di&&xt.layers.test(H.layers)){const or=vt.side;vt.side=kn,vt.needsUpdate=!0,en(xt,z,H,Kt,vt,Pe),vt.side=or,vt.needsUpdate=!0,$e=!0}}$e===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(pe),x.setClearColor(W,X),ze!==void 0&&(H.viewport=ze),x.toneMapping=Me}function Lt(T,O,z){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,re=T.length;F<re;F++){const oe=T[F],pe=oe.object,Me=oe.geometry,ze=H===null?oe.material:H,$e=oe.group;pe.layers.test(z.layers)&&en(pe,O,z,Me,ze,$e)}}function en(T,O,z,H,F,re){T.onBeforeRender(x,O,z,H,F,re),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,O,z,H,T,re),F.transparent===!0&&F.side===Di&&F.forceSinglePass===!1?(F.side=kn,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,T,re),F.side=wr,F.needsUpdate=!0,x.renderBufferDirect(z,O,H,F,T,re),F.side=Di):x.renderBufferDirect(z,O,H,F,T,re),T.onAfterRender(x,O,z,H,F,re)}function wt(T,O,z){O.isScene!==!0&&(O=nt);const H=Re.get(T),F=p.state.lights,re=p.state.shadowsArray,oe=F.state.version,pe=de.getParameters(T,F.state,re,O,z),Me=de.getProgramCacheKey(pe);let ze=H.programs;H.environment=T.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(T.isMeshStandardMaterial?G:E).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",ke),ze=new Map,H.programs=ze);let $e=ze.get(Me);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===oe)return gt(T,pe),$e}else pe.uniforms=de.getUniforms(T),T.onBeforeCompile(pe,x),$e=de.acquireProgram(pe,Me),ze.set(Me,$e),H.uniforms=pe.uniforms;const be=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ie.uniform),gt(T,pe),H.needsLights=wn(T),H.lightsStateVersion=oe,H.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=$e,H.uniformsList=null,$e}function Rt(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=yl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function gt(T,O){const z=Re.get(T);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Kn(T,O,z,H,F){O.isScene!==!0&&(O=nt),C.resetTextureUnits();const re=O.fog,oe=H.isMeshStandardMaterial?O.environment:null,pe=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Tn,Me=(H.isMeshStandardMaterial?G:E).get(H.envMap||oe),ze=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,$e=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,mt=!!z.morphAttributes.color;let xt=es;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(xt=x.toneMapping);const Kt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=Kt!==void 0?Kt.length:0,Pe=Re.get(H),or=p.state.lights;if(ee===!0&&(xe===!0||T!==M)){const li=T===M&&H.id===y;ie.setState(H,T,li)}let yt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==or.state.version||Pe.outputColorSpace!==pe||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==Me||H.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==$e||Pe.morphTargets!==be||Pe.morphNormals!==je||Pe.morphColors!==mt||Pe.toneMapping!==xt||Pe.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,Pe.__version=H.version);let Ei=Pe.currentProgram;yt===!0&&(Ei=wt(H,O,F));let Zs=!1,Zn=!1,ma=!1;const Nt=Ei.getUniforms(),zi=Pe.uniforms;if(Te.useProgram(Ei.program)&&(Zs=!0,Zn=!0,ma=!0),H.id!==y&&(y=H.id,Zn=!0),Zs||M!==T){Te.buffers.depth.getReversed()?(ne.copy(T.projectionMatrix),jx(ne),Kx(ne),Nt.setValue(U,"projectionMatrix",ne)):Nt.setValue(U,"projectionMatrix",T.projectionMatrix),Nt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ir=Nt.map.cameraPosition;Ir!==void 0&&Ir.setValue(U,we.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Zn=!0,ma=!0)}if(F.isSkinnedMesh){Nt.setOptional(U,F,"bindMatrix"),Nt.setOptional(U,F,"bindMatrixInverse");const li=F.skeleton;li&&(li.boneTexture===null&&li.computeBoneTexture(),Nt.setValue(U,"boneTexture",li.boneTexture,C))}F.isBatchedMesh&&(Nt.setOptional(U,F,"batchingTexture"),Nt.setValue(U,"batchingTexture",F._matricesTexture,C),Nt.setOptional(U,F,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",F._indirectTexture,C),Nt.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",F._colorsTexture,C));const _a=z.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&De.update(F,z,Ei),(Zn||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,Nt.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zi.envMap.value=Me,zi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(zi.envMapIntensity.value=O.environmentIntensity),Zn&&(Nt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&It(zi,ma),re&&H.fog===!0&&ce.refreshFogUniforms(zi,re),ce.refreshMaterialUniforms(zi,H,V,q,p.state.transmissionRenderTarget[T.id]),yl.upload(U,Rt(Pe),zi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(yl.upload(U,Rt(Pe),zi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Nt.setValue(U,"center",F.center),Nt.setValue(U,"modelViewMatrix",F.modelViewMatrix),Nt.setValue(U,"normalMatrix",F.normalMatrix),Nt.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const li=H.uniformsGroups;for(let Ir=0,Nr=li.length;Ir<Nr;Ir++){const Gf=li[Ir];D.update(Gf,Ei),D.bind(Gf,Ei)}}return Ei}function It(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function wn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,z){Re.get(T.texture).__webglTexture=O,Re.get(T.depthTexture).__webglTexture=z;const H=Re.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const z=Re.get(T);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,z=0){w=T,A=O,b=z;let H=!0,F=null,re=!1,oe=!1;if(T){const Me=Re.get(T);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Me.__hasExternalTextures)C.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Me.__boundDepthTexture!==be){if(be!==null&&Re.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(oe=!0);const $e=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[O])?F=$e[O][z]:F=$e[O],re=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?F=Re.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?F=$e[z]:F=$e,P.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else P.copy(he).multiplyScalar(V).floor(),N.copy(Ie).multiplyScalar(V).floor(),B=tt;if(Te.bindFramebuffer(U.FRAMEBUFFER,F)&&H&&Te.drawBuffers(T,F),Te.viewport(P),Te.scissor(N),Te.setScissorTest(B),re){const Me=Re.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,z)}else if(oe){const Me=Re.get(T.texture),ze=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.__webglTexture,z||0,ze)}y=-1},this.readRenderTargetPixels=function(T,O,z,H,F,re,oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Te.bindFramebuffer(U.FRAMEBUFFER,pe);try{const Me=T.texture,ze=Me.format,$e=Me.type;if(!k.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-H&&z>=0&&z<=T.height-F&&U.readPixels(O,z,H,F,Fe.convert(ze),Fe.convert($e),re)}finally{const Me=w!==null?Re.get(w).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,O,z,H,F,re,oe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const Me=T.texture,ze=Me.format,$e=Me.type;if(!k.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-H&&z>=0&&z<=T.height-F){Te.bindFramebuffer(U.FRAMEBUFFER,pe);const be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,z,H,F,Fe.convert(ze),Fe.convert($e),0);const je=w!==null?Re.get(w).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,je);const mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Yx(U,mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(be),U.deleteSync(mt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,z=0){T.isTexture!==!0&&(La("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),F=Math.floor(T.image.width*H),re=Math.floor(T.image.height*H),oe=O!==null?O.x:0,pe=O!==null?O.y:0;C.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,oe,pe,F,re),Te.unbindTexture()},this.copyTextureToTexture=function(T,O,z=null,H=null,F=0){T.isTexture!==!0&&(La("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],O=arguments[2],F=arguments[3]||0,z=null);let re,oe,pe,Me,ze,$e,be,je,mt;const xt=T.isCompressedTexture?T.mipmaps[F]:T.image;z!==null?(re=z.max.x-z.min.x,oe=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Me=z.min.x,ze=z.min.y,$e=z.isBox3?z.min.z:0):(re=xt.width,oe=xt.height,pe=xt.depth||1,Me=0,ze=0,$e=0),H!==null?(be=H.x,je=H.y,mt=H.z):(be=0,je=0,mt=0);const Kt=Fe.convert(O.format),vt=Fe.convert(O.type);let Pe;O.isData3DTexture?(C.setTexture3D(O,0),Pe=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Pe=U.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const or=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ei=U.getParameter(U.UNPACK_SKIP_PIXELS),Zs=U.getParameter(U.UNPACK_SKIP_ROWS),Zn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Me),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const ma=T.isDataArrayTexture||T.isData3DTexture,Nt=O.isDataArrayTexture||O.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const zi=Re.get(T),_a=Re.get(O),li=Re.get(zi.__renderTarget),Ir=Re.get(_a.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,li.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Nr=0;Nr<pe;Nr++)ma&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,F,$e+Nr),T.isDepthTexture?(Nt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,F,mt+Nr),U.blitFramebuffer(Me,ze,re,oe,be,je,re,oe,U.DEPTH_BUFFER_BIT,U.NEAREST)):Nt?U.copyTexSubImage3D(Pe,F,be,je,mt+Nr,Me,ze,re,oe):U.copyTexSubImage2D(Pe,F,be,je,mt+Nr,Me,ze,re,oe);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Nt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pe,F,be,je,mt,re,oe,pe,Kt,vt,xt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,F,be,je,mt,re,oe,pe,Kt,xt.data):U.texSubImage3D(Pe,F,be,je,mt,re,oe,pe,Kt,vt,xt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,be,je,re,oe,Kt,vt,xt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,be,je,xt.width,xt.height,Kt,xt.data):U.texSubImage2D(U.TEXTURE_2D,F,be,je,re,oe,Kt,vt,xt);U.pixelStorei(U.UNPACK_ROW_LENGTH,or),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ei),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),F===0&&O.generateMipmaps&&U.generateMipmap(Pe),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,O,z=null,H=null,F=0){return T.isTexture!==!0&&(La("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],O=arguments[3],F=arguments[4]||0),La('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,z,H,F)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){A=0,b=0,w=null,Te.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class Jd{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Jd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class K_ extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class oE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rd,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new I;class Qd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wp=new I,Xp=new _t,$p=new _t,aE=new I,qp=new Ke,Vc=new I,Gu=new ir,Yp=new Ke,Wu=new aa;class cE extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qf,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vc),this.boundingBox.expandByPoint(Vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ir),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vc),this.boundingSphere.expandByPoint(Vc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(i),e.ray.intersectsSphere(Gu)!==!1&&(Yp.copy(i).invert(),Wu.copy(e.ray).applyMatrix4(Yp),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xp.fromBufferAttribute(i.attributes.skinIndex,e),$p.fromBufferAttribute(i.attributes.skinWeight,e),Wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=$p.getComponent(s);if(o!==0){const a=Xp.getComponent(s);qp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(aE.copy(Wp).applyMatrix4(qp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Z_ extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class J_ extends hn{constructor(e=null,t=1,n=1,i,s,o,a,c,l=zn,u=zn,h,d){super(null,o,a,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jp=new Ke,lE=new Ke;class ef{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:lE;jp.multiplyMatrices(a,t[s]),jp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ef(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new J_(t,e,e,gi,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Z_),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ad extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fo=new Ke,Kp=new Ke,Gc=[],Zp=new Bi,uE=new Ke,Ma=new Et,Sa=new ir;class hE extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ad(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,uE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),Zp.copy(e.boundingBox).applyMatrix4(fo),this.boundingBox.union(Zp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fo),Sa.copy(e.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),Kp.multiplyMatrices(n,fo),Ma.matrixWorld=Kp,Ma.raycast(e,Gc);for(let o=0,a=Gc.length;o<a;o++){const c=Gc[o];c.instanceId=s,c.object=this,t.push(c)}Gc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ad(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new J_(new Float32Array(i*this.count),i,this.count,Gd,Ui));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class tf extends Zi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ul=new I,Ol=new I,Jp=new Ke,ba=new aa,Wc=new ir,Xu=new I,Qp=new I;class nf extends Ft{constructor(e=new An,t=new tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ul.fromBufferAttribute(t,i-1),Ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ul.distanceTo(Ol);e.setAttribute("lineDistance",new Wn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wc.copy(n.boundingSphere),Wc.applyMatrix4(i),Wc.radius+=s,e.ray.intersectsSphere(Wc)===!1)return;Jp.copy(i).invert(),ba.copy(e.ray).applyMatrix4(Jp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=u.getX(g),v=u.getX(g+1),S=Xc(this,e,ba,c,p,v);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=Xc(this,e,ba,c,g,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=l){const p=Xc(this,e,ba,c,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Xc(this,e,ba,c,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xc(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Ul.fromBufferAttribute(o,i),Ol.fromBufferAttribute(o,s),t.distanceSqToSegment(Ul,Ol,Xu,Qp)>n)return;Xu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Xu);if(!(c<e.near||c>e.far))return{distance:c,point:Qp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const em=new I,tm=new I;class Q_ extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)em.fromBufferAttribute(t,i),tm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+em.distanceTo(tm);e.setAttribute("lineDistance",new Wn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dE extends nf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rf extends Zi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new Ke,cd=new aa,$c=new ir,qc=new I;class eg extends Ft{constructor(e=new An,t=new rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$c.copy(n.boundingSphere),$c.applyMatrix4(i),$c.radius+=s,e.ray.intersectsSphere($c)===!1)return;nm.copy(i).invert(),cd.copy(e.ray).applyMatrix4(nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=l.getX(_);qc.fromBufferAttribute(h,m),im(qc,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)qc.fromBufferAttribute(h,_),im(qc,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function im(r,e,t,n,i,s,o){const a=cd.distanceSqToPoint(r);if(a<t){const c=new I;cd.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}const Yc=new I,jc=new I,$u=new I,Kc=new _i;class fE extends An{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Lo*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=Kc;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Kc.getNormal($u),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const S=(v+1)%3,x=h[v],R=h[S],A=Kc[u[v]],b=Kc[u[S]],w=`${x}_${R}`,y=`${R}_${x}`;y in d&&d[y]?($u.dot(d[y].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(b.x,b.y,b.z)),d[y]=null):w in d||(d[w]={index0:l[v],index1:l[S],normal:$u.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];Yc.fromBufferAttribute(a,g),jc.fromBufferAttribute(a,m),f.push(Yc.x,Yc.y,Yc.z),f.push(jc.x,jc.y,jc.z)}this.setAttribute("position",new Wn(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class sf extends An{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,d=new I,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const v=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(A+x,1-S),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const S=u[p][v+1],x=u[p][v],R=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||c<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cr extends Zi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rr extends Cr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Zc(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function pE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function mE(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function tg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class yc{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _E extends yc{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yf,endingEnd:Yf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:s=e,a=2*t-n;break;case Kf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case jf:o=e,c=2*n-t;break;case Kf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let R=0;R!==a;++R)s[R]=p*o[u+R]+v*o[l+R]+S*o[c+R]+x*o[h+R];return s}}class gE extends yc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}}class xE extends yc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zc(t,this.TimeBufferType),this.values=Zc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zc(e.times,Array),values:Zc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _E(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case sc:t=this.InterpolantFactoryMethodDiscrete;break;case oc:t=this.InterpolantFactoryMethodLinear;break;case mu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sc;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&pE(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sr.prototype.TimeBufferType=Float32Array;sr.prototype.ValueBufferType=Float32Array;sr.prototype.DefaultInterpolation=oc;class ua extends sr{constructor(e,t,n){super(e,t,n)}}ua.prototype.ValueTypeName="bool";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=sc;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class ng extends sr{}ng.prototype.ValueTypeName="color";class Zo extends sr{}Zo.prototype.ValueTypeName="number";class vE extends yc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)er.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Jo extends sr{InterpolantFactoryMethodLinear(e){return new vE(this.times,this.values,this.getValueSize(),e)}}Jo.prototype.ValueTypeName="quaternion";Jo.prototype.InterpolantFactoryMethodSmooth=void 0;class ha extends sr{constructor(e,t,n){super(e,t,n)}}ha.prototype.ValueTypeName="string";ha.prototype.ValueBufferType=Array;ha.prototype.DefaultInterpolation=sc;ha.prototype.InterpolantFactoryMethodLinear=void 0;ha.prototype.InterpolantFactoryMethodSmooth=void 0;class Qo extends sr{}Qo.prototype.ValueTypeName="vector";class yE{constructor(e="",t=-1,n=[],i=vx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(SE(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(sr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=mE(c);c=rm(c,1,u),l=rm(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Zo(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,g){if(f.length!==0){const m=[],p=[];tg(f,m,p,_),m.length!==0&&g.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[_].morphTargets.length;++v){const S=d[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new Zo(".morphTargetInfluence["+g+"]",m,p))}c=f.length*o}else{const f=".bones["+t[h].name+"]";n(Qo,f+".position",d,"pos",i),n(Jo,f+".quaternion",d,"rot",i),n(Qo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ME(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zo;case"vector":case"vector2":case"vector3":case"vector4":return Qo;case"color":return ng;case"quaternion":return Jo;case"bool":case"boolean":return ua;case"string":return ha}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function SE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ME(r.type);if(r.times===void 0){const t=[],n=[];tg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const $r={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bE{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],_=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const EE=new bE;class js{constructor(e){this.manager=e!==void 0?e:EE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class TE extends Error{constructor(e,t){super(e),this.response=t}}class Fl extends js{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$r.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:n,onError:i});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=dr[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let A=0,b=u.length;A<b;A++){const w=u[A];w.onProgress&&w.onProgress(R)}p.enqueue(x),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new TE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{$r.add(e,l);const u=dr[e];delete dr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=dr[e];if(u===void 0)throw this.manager.itemError(e),l;delete dr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class AE extends js{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$r.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ac("img");function c(){u(),$r.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ig extends js{constructor(e){super(e)}load(e,t,n,i){const s=new hn,o=new AE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class au extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wE extends au{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qu=new Ke,sm=new I,om=new I;class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(om),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RE extends of{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class CE extends au{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new RE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const am=new Ke,Ea=new I,Yu=new I;class PE extends of{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ea),Yu.copy(n.position),Yu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yu),n.updateMatrixWorld(),i.makeTranslation(-Ea.x,-Ea.y,-Ea.z),am.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(am)}}class rg extends au{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LE extends of{constructor(){super(new Kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ha{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class DE extends js{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=$r.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return $r.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),$r.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});$r.add(e,c),s.manager.itemStart(e)}}const cf="\\[\\]\\.:\\/",IE=new RegExp("["+cf+"]","g"),lf="[^"+cf+"]",NE="[^"+cf.replace("\\.","")+"]",UE=/((?:WC+[\/:])*)/.source.replace("WC",lf),OE=/(WCOD+)?/.source.replace("WCOD",NE),FE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),BE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),kE=new RegExp("^"+UE+OE+FE+BE+"$"),zE=["material","materials","bones","map"];class HE{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IE,"")}static parseTrackName(e){const t=kE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);zE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=HE;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cm=new Ke;class VE{constructor(e,t,n=0,i=1/0){this.ray=new aa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(e,t=!0,n=[]){return ld(e,this,n,t),n.sort(lm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ld(e[i],this,n,t);return n.sort(lm),n}}function lm(r,e){return r.distance-e.distance}function ld(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ld(s[o],e,t,!0)}}class um{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GE extends Ys{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);const hm={type:"change"},uf={type:"start"},sg={type:"end"},Jc=new aa,dm=new _r,WE=Math.cos(70*Ki.DEG2RAD),tn=new I,Hn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ju=1e-6;class XE extends GE{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ro.ROTATE,MIDDLE:Ro.DOLLY,RIGHT:Ro.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new er,this._lastTargetPosition=new I,this._quat=new er().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new um,this._sphericalDelta=new um,this._scale=1,this._panOffset=new I,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new I,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qE.bind(this),this._onPointerDown=$E.bind(this),this._onPointerUp=YE.bind(this),this._onContextMenu=tT.bind(this),this._onMouseWheel=ZE.bind(this),this._onKeyDown=JE.bind(this),this._onTouchStart=QE.bind(this),this._onTouchMove=eT.bind(this),this._onMouseDown=jE.bind(this),this._onMouseMove=KE.bind(this),this._interceptControlDown=nT.bind(this),this._interceptControlUp=iT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hm),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Hn:n>Math.PI&&(n-=Hn),i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=tn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jc.origin.copy(this.object.position),Jc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jc.direction))<WE?this.object.lookAt(this.target):(dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jc.intersectPlane(dm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ju||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ju||this._lastTargetPosition.distanceToSquared(this.target)>ju?(this.dispatchEvent(hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;tn.copy(i).sub(this.target);let s=tn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Hn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $E(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function YE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sg),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Tt.DOLLY;break;case Ro.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Tt.ROTATE}break;case Ro.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(uf)}function KE(r){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ZE(r){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(r.preventDefault(),this.dispatchEvent(uf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(sg))}function JE(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function QE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Tt.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Tt.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(uf)}function eT(r){switch(this._trackPointer(r),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Tt.NONE}}function tT(r){this.enabled!==!1&&r.preventDefault()}function nT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class rT extends K_{constructor(){super();const e=new ca;e.deleteAttribute("uv");const t=new Cr({side:kn}),n=new Cr,i=new rg(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Et(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Et(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Et(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Et(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Et(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Et(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Et(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new Et(e,po(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Et(e,po(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const _=new Et(e,po(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new Et(e,po(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const m=new Et(e,po(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Et(e,po(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function po(r){const e=new Sr;return e.color.setScalar(r),e}function fm(r,e){if(e===yx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===id||e===D_){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===id)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class sT extends js{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new fT(t)}),this.register(function(t){return new pT(t)}),this.register(function(t){return new mT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new gT(t)}),this.register(function(t){return new dT(t)}),this.register(function(t){return new vT(t)}),this.register(function(t){return new xT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new ET(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ha.extractUrlBase(e);o=Ha.resolveURL(l,this.path)}else o=Ha.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Fl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===og){try{o[at.KHR_BINARY_GLTF]=new TT(e)}catch(h){i&&i(h);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new BT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new cT;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new AT(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new wT;break;case at.KHR_MESH_QUANTIZATION:o[h]=new RT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function oT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class aT{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new af(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new rg(u),l.distance=h;break;case"spot":l=new CE(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,pr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class cT{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Sr}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Tn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(i)}}class lT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class uT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class hT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class dT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class fT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class pT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class mT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Tn),Promise.all(s)}}class _T{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class gT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Tn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(s)}}class xT{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class vT{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class yT{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class MT{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ST{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bT{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class ET{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==di.TRIANGLES&&l.mode!==di.TRIANGLE_STRIP&&l.mode!==di.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const _ of h){const g=new Ke,m=new I,p=new er,v=new I(1,1,1),S=new hE(_.geometry,_.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),S.setMatrixAt(x,g.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const R=c[x];S.instanceColor=new ad(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,c[x]);Ft.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const og="glTF",Ta=12,pm={JSON:1313821514,BIN:5130562};class TT{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ta,s=new DataView(e,Ta);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===pm.JSON){const l=new Uint8Array(e,Ta+o,a);this.content=n.decode(l)}else if(c===pm.BIN){const l=Ta+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class AT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=ud[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ud[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Io[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(f)},a,l,Tn,d)})})}}class wT{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class RT{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class ag extends yc{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*l,g=_-l,m=-2*f+3*d,p=f-d,v=1-m,S=p-d+h;for(let x=0;x!==a;x++){const R=o[g+x+a],A=o[g+x+c]*u,b=o[_+x+a],w=o[_+x]*u;s[x]=v*R+S*A+m*b+p*w}return s}}const CT=new er;class PT extends ag{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return CT.fromArray(s).normalize().toArray(s),s}}const di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mm={9728:zn,9729:si,9984:S_,9985:pl,9986:Pa,9987:yr},_m={33071:Xr,33648:Il,10497:ks},Ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LT={CUBICSPLINE:void 0,LINEAR:oc,STEP:sc},Zu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Cr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wr})),r.DefaultMaterial}function vs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IT(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function NT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UT(r){let e;const t=r.extensions&&r.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ju(t.attributes):e=r.indices+":"+Ju(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ju(r.targets[n]);return e}function Ju(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function hd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const FT=new Ke;class BT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ig(this.options.manager):this.textureLoader=new DE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vs(s,a,i),pr(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ha.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ku[i.type],a=Io[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new zt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ku[i.type],l=Io[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(v);S||(g=new l(a,p*f,i.count*f/u),S=new oE(g,f/u),t.cache.add(v,S)),m=new Qd(S,c,d%f/u,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),m=new zt(g,c,_);if(i.sparse!==void 0){const p=Ku.SCALAR,v=Io[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new v(o[1],S,i.sparse.count*p),A=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,w=R.length;b<w;b++){const y=R[b];if(m.setX(y,A[b*c]),c>=2&&m.setY(y,A[b*c+1]),c>=3&&m.setZ(y,A[b*c+2]),c>=4&&m.setW(y,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=mm[d.magFilter]||si,u.minFilter=mm[d.minFilter]||yr,u.wrapS=_m[d.wrapS]||ks,u.wrapT=_m[d.wrapT]||ks,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zn&&u.minFilter!==si,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new hn(g);m.needsUpdate=!0,d(m)}),t.load(Ha.resolveURL(h,s.path),_,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),pr(h,o),h.userData.mimeType=o.mimeType||OT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new rf,Zi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tf,Zi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Cr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){const h=i[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Di);const u=s.alphaMode||Zu.OPAQUE;if(u===Zu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Zu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Sr&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Sr&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Sr){const h=s.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],Tn)}return s.emissiveTexture!==void 0&&o!==Sr&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),pr(h,s),t.associations.set(h,{materials:e}),s.extensions&&vs(i,h,s),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return gm(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=UT(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=gm(new An,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?DT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o[f];let p;const v=l[f];if(m.mode===di.TRIANGLES||m.mode===di.TRIANGLE_STRIP||m.mode===di.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new cE(g,v):new Et(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===di.TRIANGLE_STRIP?p.geometry=fm(p.geometry,D_):m.mode===di.TRIANGLE_FAN&&(p.geometry=fm(p.geometry,id));else if(m.mode===di.LINES)p=new Q_(g,v);else if(m.mode===di.LINE_STRIP)p=new nf(g,v);else if(m.mode===di.LINE_LOOP)p=new dE(g,v);else if(m.mode===di.POINTS)p=new eg(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&NT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),pr(p,s),m.extensions&&vs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&vs(i,h[0],s),h[0];const d=new br;s.extensions&&vs(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Un(Ki.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Kd(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new Ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ef(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let v=0,S=d.length;v<S;v++){const x=d[v],R=f[v],A=_[v],b=g[v],w=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,R,A,b,w);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new yE(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,FT)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Z_:l.length>1?u=new br:l.length===1?u=l[0]:u=new Ft,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),pr(u,s),s.extensions&&vs(n,u,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new br;n.name&&(s.name=i.createUniqueName(n.name)),pr(s,n),n.extensions&&vs(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Zi||d instanceof hn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];Hr[s.path]===Hr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Hr[s.path]){case Hr.weights:l=Zo;break;case Hr.rotation:l=Jo;break;case Hr.position:case Hr.scale:l=Qo;break;default:switch(n.itemSize){case 1:l=Zo;break;case 2:case 3:default:l=Qo;break}break}const u=i.interpolation!==void 0?LT[i.interpolation]:oc,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+Hr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Jo?PT:ag;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function kT(r,e,t){const n=e.attributes,i=new Bi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=hd(Io[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,c=new I;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=hd(Io[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ir;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=ud[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return lt.workingColorSpace!==Tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),pr(r,e),kT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?IT(r,e.targets,t):r})}const Qu=new WeakMap;class zT extends js{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Fl(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Yt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Tn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qu.has(e)){const c=Qu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[s]={resolve:l,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Qu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new An;e.index&&t.setIndex(new zt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new zt(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Yt)return;const n=new Ue;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),lt.toWorkingColorSpace(n,Yt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Fl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=HT.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function HT(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(c),l),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,f;const _=a.GetEncodedGeometryType(c);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let v,S;if(l.useUniqueIDs)S=u[m],v=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[u[m]]),S===-1)continue;v=a.GetAttribute(d,S)}const x=i(o,a,d,m,p,v);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,c){const u=c.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(c,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,u,h){const d=h.num_components(),_=c.num_points()*d,g=_*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,h,m,g,p);const v=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:l,array:v,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function mr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ea={duration:.5,overwrite:!1,delay:0},hf,bn,Ot,xi=1e8,Dt=1/xi,dd=Math.PI*2,VT=dd/4,GT=0,lg=Math.sqrt,WT=Math.cos,XT=Math.sin,fn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Pr=function(e){return typeof e=="number"},df=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Xn=function(e){return e!==!1},ff=function(){return typeof window<"u"},Qc=function(e){return Wt(e)||fn(e)},ug=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,fd=/(?:-?\.?\d|\.)+/gi,hg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dg=/[+-]=-?[.\d]+/,fg=/[^,'"\[\]\s]+/gi,$T=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Hi,pd,pf,ci={},Bl={},pg,mg=function(e){return(Bl=Vs(e,ci))&&jn},mf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cc=function(e,t){return!t&&console.warn(e)},_g=function(e,t){return e&&(ci[e]=t)&&Bl&&(Bl[e]=t)||ci},lc=function(){return 0},qT={suppressEvents:!0,isStart:!0,kill:!1},Ml={suppressEvents:!0,kill:!1},YT={suppressEvents:!0},_f={},ts=[],md={},gg,ni={},th={},xm=30,Sl=[],gf="",xf=function(e){var t=e[0],n,i;if(nr(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sl.length;i--&&!Sl[i].targetTest(t););n=Sl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hg(e[i],n)))||e.splice(i,1);return e},Ds=function(e){return e._gsap||xf(vi(e))[0]._gsap},xg=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():df(n)&&e.getAttribute&&e.getAttribute(t)||n},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},un=function(e){return Math.round(e*1e7)/1e7||0},No=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kl=function(){var e=ts.length,t=ts.slice(0),n,i;for(md={},ts.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vg=function(e,t,n,i){ts.length&&!bn&&kl(),e.render(t,n,bn&&t<0&&(e._initted||e._startAt)),ts.length&&!bn&&kl()},yg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fg).length<2?t:fn(e)?e.trim():e},Mg=function(e){return e},Si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},KT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vs=function(e,t){for(var n in t)e[n]=t[n];return e},vm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},zl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Va=function(e){var t=e.parent||kt,n=e.keyframes?KT(En(e.keyframes)):Si;if(Xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ZT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Sg=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},JT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(Ml):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},QT=function r(e){return!e||e._ts&&r(e.parent)},ym=function(e){return e._repeat?ta(e._tTime,e=e.duration()+e._rDelay)*e:0},ta=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Hl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lu=function(e){return e._end=un(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},uu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=un(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lu(e),n._dirty||Is(n,e)),e},bg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Hl(e.rawTime(),t),(!t._dur||Mc(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),Is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},$i=function(e,t,n,i){return t.parent&&ls(t),t._start=un((Pr(n)?n:n||e!==kt?hi(e,n,t):e._time)+t._delay),t._end=un(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sg(e,t,"_first","_last",e._sort?"_start":0),gd(t)||(e._recent=t),i||bg(e,t),e._ts<0&&uu(e,e._tTime),e},Eg=function(e,t){return(ci.ScrollTrigger||mf("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Tg=function(e,t,n,i,s){if(yf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gg!==ii.frame)return ts.push(e),e._lazy=[s,i],1},e1=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},gd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},t1=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&e1(e)&&!(!e._initted&&gd(e))||(e._ts<0||e._dp._ts<0)&&!gd(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Mc(0,e._tDur,t),u=ta(c,a),e._yoyo&&u&1&&(o=1-o),u!==ta(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||i||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&Tg(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&_d(e,t,n,!0),e._onUpdate&&!n&&oi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&oi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ls(e,1),!n&&!bn&&(oi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},n1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},na=function(e,t,n,i){var s=e._repeat,o=un(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:un(o*(s+1)+e._rDelay*s):o,a>0&&!i&&uu(e,e._tTime=e._tDur*a),e.parent&&lu(e),n||Is(e.parent,e),e},Mm=function(e){return e instanceof On?Is(e):na(e,e._dur)},i1={_start:0,endTime:lc,totalDuration:lc},hi=function r(e,t,n){var i=e.labels,s=e._recent||i1,o=e.duration()>=xi?s.endTime(!1):e._dur,a,c,l;return fn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},Ga=function(e,t,n){var i=Pr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Xn(c.vars.inherit)&&c.parent;o.immediateRender=Xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Qt(t[0],o,t[s+1])},ds=function(e,t){return e||e===0?t(e):t},Mc=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!fn(e)||!(t=$T.exec(e))?"":t[1]},r1=function(e,t,n){return ds(n,function(i){return Mc(e,t,i)})},xd=[].slice,Ag=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==Hi},s1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||Ag(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):fn(e)&&!n&&(pd||!ia())?xd.call((t||pf).querySelectorAll(e),0):En(e)?s1(e,n):Ag(e)?xd.call(e,0):e?[e]:[]},vd=function(e){return e=vi(e)[0]||cc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?cc("Invalid scope")||pf.createElement("div"):e)}},wg=function(e){return e.sort(function(){return .5-Math.random()})},Rg=function(e){if(Wt(e))return e;var t=nr(e)?e:{each:e},n=Ns(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,v,S,x,R,A,b,w,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,xi])[1],!y){for(b=-xi;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=c?Math.min(y,g)*u-.5:i%y,v=y===xi?0:c?g*h/y-.5:i/y|0,b=0,w=xi,A=0;A<g;A++)S=A%y-p,x=v-(A/y|0),m[A]=R=l?Math.abs(l==="y"?x:S):lg(S*S+x*x),R>b&&(b=R),R<w&&(w=R);i==="random"&&wg(m),m.max=b-w,m.min=w,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:l?l==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Mn(t.amount||t.each)||0,n=n&&g<0?Bg(n):n}return g=(m[d]-m.min)/m.max||0,un(m.b+(n?n(g):g)*m.v)+m.u}},yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=un(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Pr(n)?0:Mn(n))}},Cg=function(e,t){var n=En(e),i,s;return!n&&nr(e)&&(i=n=e.radius||xi,e.values?(e=vi(e.values),(s=!Pr(e[0]))&&(i*=i)):e=yd(e.increment)),ds(t,n?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=xi,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:o,s||u===o||Pr(o)?u:u+Mn(o)}:yd(e))},Pg=function(e,t,n,i){return ds(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},o1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},a1=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},c1=function(e,t,n){return Dg(e,t,0,1,n)},Lg=function(e,t,n){return ds(n,function(i){return e[~~t(i)]})},l1=function r(e,t,n){var i=t-e;return En(e)?Lg(e,r(0,e.length),t):ds(n,function(s){return(i+(s-e)%i)%i+e})},u1=function r(e,t,n){var i=t-e,s=i*2;return En(e)?Lg(e,r(0,e.length-1),t):ds(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},uc=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?fg:fd),n+=e.substr(t,i-t)+Pg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dg=function(e,t,n,i,s){var o=t-e,a=i-n;return ds(s,function(c){return n+((c-e)/o*a||0)})},h1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=fn(e),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(r(e[l-1],e[l]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Vs(En(e)?[]:{},e));if(!u){for(c in t)vf.call(a,e,c,"get",t[c]);s=function(_){return bf(_,a)||(o?e.p:e)}}}return ds(n,s)},Sm=function(e,t,n){var i=e.labels,s=xi,o,a,c;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},oi=function(e,t,n){var i=e.vars,s=i[t],o=Ot,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&ts.length&&kl(),a&&(Ot=a),u=c?s.apply(l,c):s.call(l),Ot=o,u},Ia=function(e){return ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&oi(e,"onInterrupt"),e},To,Ig=[],Ng=function(e){if(e)if(e=!e.name&&e.default||e,ff()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:lc,render:bf,add:vf,kill:w1,modifier:A1,rawVars:0},o={targetTest:0,get:0,getSetter:Sf,aliases:{},register:0};if(ia(),e!==i){if(ni[t])return;Si(i,Si(zl(e,s),o)),Vs(i.prototype,Vs(s,zl(e,o))),ni[i.prop=t]=i,e.targetTest&&(Sl.push(i),_f[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_g(t,i),e.register&&e.register(jn,i,qn)}else Ig.push(e)},Ct=255,Na={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},nh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},Ug=function(e,t,n){var i=e?Pr(e)?[e>>16,e>>8&Ct,e&Ct]:0:Na.black,s,o,a,c,l,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Na[e])i=Na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(fd),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=nh(c+1/3,s,o),i[1]=nh(c,s,o),i[2]=nh(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(hg),n&&i.length<4&&(i[3]=1),i}else i=e.match(fd)||Na.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Og=function(e){var t=[],n=[],i=-1;return e.split(ns).forEach(function(s){var o=s.match(Eo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},bm=function(e,t,n){var i="",s=(e+i).match(ns),o=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Ug(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Og(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(ns,"1").split(Eo),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(ns),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},ns=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Na)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),d1=/hsl[a]?\(/,Fg=function(e){var t=e.join(" "),n;if(ns.lastIndex=0,ns.test(t))return n=d1.test(t),e[1]=bm(e[1],n),e[0]=bm(e[0],n,Og(e[1])),!0},hc,ii=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,u,h,d,f,_=function g(m){var p=r()-i,v=m===!0,S,x,R,A;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,S=R-o,(S>0||v)&&(A=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=S+(S>=s?4:s-S),x=1),v||(c=l(g)),x)for(f=0;f<a.length;f++)a[f](R,d,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){pg&&(!pd&&ff()&&(Hi=pd=window,pf=Hi.document||{},ci.gsap=jn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(jn.version),mg(Bl||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Ig.forEach(Ng)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},hc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),hc=0,l=lc},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var S=p?function(x,R,A,b){m(x,R,A,b),h.remove(S)}:m;return h.remove(m),a[v?"unshift":"push"](S),ia(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),ia=function(){return!hc&&ii.wake()},dt={},f1=/^[\d.\-M][\d.\-,\s]/,p1=/["']/g,m1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(p1,"").trim():+l,i=c.substr(a+1).trim();return t},_1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},g1=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[m1(t[1])]:_1(e).split(",").map(yg)):dt._CE&&f1.test(e)?dt._CE("",e):n},Bg=function(e){return function(t){return 1-e(1-t)}},kg=function r(e,t){for(var n=e._first,i;n;)n instanceof On?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ns=function(e,t){return e&&(Wt(e)?e:dt[e]||g1(e))||t},Ks=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return $n(e,function(a){dt[a]=ci[a]=s,dt[o=a.toLowerCase()]=n;for(var c in s)dt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=dt[a+"."+c]=s[c]}),s},zg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/dd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*XT((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:zg(a);return s=dd/s,c.config=function(l,u){return r(e,l,u)},c},rh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zg(n);return i.config=function(s){return r(e,s)},i};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ks(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Ks("Elastic",ih("in"),ih("out"),ih());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ks("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ks("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ks("Circ",function(r){return-(lg(1-r*r)-1)});Ks("Sine",function(r){return r===1?1:-WT(r*VT)+1});Ks("Back",rh("in"),rh("out"),rh());dt.SteppedEase=dt.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Dt;return function(a){return((i*Mc(0,o,a)|0)+s)*n}}};ea.ease=dt["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gf+=r+","+r+"Params,"});var Hg=function(e,t){this.id=GT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xg,this.set=t?t.getSetter:Sf},dc=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,na(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),hc||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,na(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ia(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uu(this,n),!s._dp||s.parent||bg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Dt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ym(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ym(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ta(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(Mc(-Math.abs(this._delay),this._tDur,s),i!==!1),lu(this),JT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ia(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=YT);var i=bn;return bn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(hi(this,n),Xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Dt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Wt(n)?n:Mg,a=function(){var l=i.then;i.then=null,Wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ia(this)},r}();Si(dc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var On=function(r){cg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Xn(n.sortChildren),kt&&$i(n.parent||kt,mr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Eg(mr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ga(0,arguments,this),this},t.from=function(i,s,o){return Ga(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ga(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Va(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,hi(this,o),1),this},t.call=function(i,s,o){return $i(this,Qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Qt(i,o,hi(this,c)),this},t.staggerFrom=function(i,s,o,a,c,l,u){return o.runBackwards=1,Va(o).immediateRender=Xn(o.immediateRender),this.staggerTo(i,s,o,a,c,l,u)},t.staggerFromTo=function(i,s,o,a,c,l,u,h){return a.startAt=o,Va(a).immediateRender=Xn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:un(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,m,p,v,S,x,R,A,b;if(this!==kt&&u>c&&i>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,S=this._ts,p=!S,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=un(u%m),u===c?(g=this._repeat,d=l):(g=~~(u/m),g&&g===u/m&&(d=l,g--),d>l&&(d=l)),R=ta(this._tTime,m),!a&&this._tTime&&R!==g&&this._tTime-R*m-this._dur<=0&&(R=g),A&&g&1&&(d=l-d,b=1),g!==R&&!this._lock){var w=A&&R&1,y=w===(A&&g&1);if(g<R&&(w=!w),a=w?0:u%l?l:u,this._lock=1,this.render(a||(b?0:un(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&oi(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,a=w?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;kg(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=n1(this,un(a),un(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(oi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-Dt);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,o||bn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=M?-Dt:Dt);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Dt)._zTime=d>=a?1:-1,this._ts))return this._start=x,lu(this),this.render(i,s,o);this._onUpdate&&!s&&oi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&ls(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(oi(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Pr(s)||(s=hi(this,s,i)),!(i instanceof dc)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Wt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Qt?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(cu(this,i),i===this._recent&&(this._recent=this._last),Is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=hi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Qt.delayedCall(0,s||lc,o);return a.data="isPause",this._hasPause=1,$i(this,a,hi(this,i))},t.removePause=function(i){var s=this._first;for(i=hi(this,i);s;)s._start===i&&s.data==="isPause"&&ls(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)qr!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=vi(i),c=this._first,l=Pr(s),u;c;)c instanceof Qt?jT(c._targets,a)&&(l?(!qr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=hi(o,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,_=Qt.to(o,Si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Dt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&na(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Si({startAt:{time:hi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sm(this,hi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sm(this,hi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return Is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,c=xi,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;na(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&(vg(kt,Hl(i,kt)),gg=ii.frame),ii.frame>=xm){xm+=ai.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&ai.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e}(dc);Si(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var x1=function(e,t,n,i,s,o,a){var c=new qn(this._pt,e,t,0,1,qg,null,s),l=0,u=0,h,d,f,_,g,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=uc(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(eh)||[];h=eh.exec(i);)_=h[0],g=i.substring(l,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?No(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=eh.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(dg.test(i)||p)&&(c.e=0),this._pt=c,c},vf=function(e,t,n,i,s,o,a,c,l,u){Wt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Wt(h)?l?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=Wt(h)?l?b1:Xg:Mf,_;if(fn(i)&&(~i.indexOf("random(")&&(i=uc(i)),i.charAt(1)==="="&&(_=No(d,i)+(Mn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Md)return!isNaN(d*i)&&i!==""?(_=new qn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?T1:$g,0,f),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&mf(t,i),x1.call(this,e,t,d,i,f,c||ai.stringFilter,l))},v1=function(e,t,n,i,s){if(Wt(e)&&(e=Wa(e,s,t,n,i)),!nr(e)||e.style&&e.nodeType||En(e)||ug(e))return fn(e)?Wa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Wa(e[a],s,t,n,i);return o},Vg=function(e,t,n,i,s,o){var a,c,l,u;if(ni[e]&&(a=new ni[e]).init(s,a.rawVars?t[e]:v1(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new qn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==To))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},qr,Md,yf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!hf,x=e.timeline,R,A,b,w,y,M,P,N,B,W,X,$,q;if(x&&(!d||!s)&&(s="none"),e._ease=Ns(s,ea.ease),e._yEase=h?Bg(Ns(h===!0?s:h,ea.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(N=m[0]?Ds(m[0]).harness:0,$=N&&i[N.prop],R=zl(i,_f),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Ml:qT),g._lazy=0),o){if(ls(e._startAt=Qt.set(m,Si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Xn(c),startAt:null,delay:0,onUpdate:l&&function(){return oi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!f)&&e._startAt.revert(Ml),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=Si({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Xn(c),immediateRender:a,stagger:0,parent:p},R),$&&(b[N.prop]=$),ls(e._startAt=Qt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(Ml):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Xn(c)||c&&!_,A=0;A<m.length;A++){if(y=m[A],P=y._gsap||xf(m)[A]._gsap,e._ptLookup[A]=W={},md[P.id]&&ts.length&&kl(),X=v===m?A:v.indexOf(y),N&&(B=new N).init(y,$||R,e,X,v)!==!1&&(e._pt=w=new qn(e._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(V){W[V]=w}),B.priority&&(M=1)),!N||$)for(b in R)ni[b]&&(B=Vg(b,R,e,X,y,v))?B.priority&&(M=1):W[b]=w=vf.call(e,y,b,"get",R[b],X,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),S&&e._pt&&(qr=e,kt.killTweensOf(y,W,e.globalTime(t)),q=!e.parent,qr=0),e._pt&&c&&(md[P.id]=1)}M&&Yg(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&x.render(xi,!0,!0)},y1=function(e,t,n,i,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Md=1,e.vars[t]="+=0",yf(e,a),Md=0,c?cc(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=qt(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},M1=function(e,t){var n=e[0]?Ds(e[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return t;s=Vs({},t);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},S1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Wa=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?uc(e):e},Gg=gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wg={};$n(Gg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wg[r]=1});var Qt=function(r){cg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Va(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,v=i.parent||kt,S=(En(n)||ug(n)?Pr(n[0]):"length"in i)?[n]:vi(n),x,R,A,b,w,y,M,P;if(a._targets=S.length?xf(S):cc("GSAP target "+n+" not found. https://gsap.com",!ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Qc(l)||Qc(u)){if(i=a.vars,x=a.timeline=new On({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:S}),x.kill(),x.parent=x._dp=mr(a),x._start=0,d||Qc(l)||Qc(u)){if(b=S.length,M=d&&Rg(d),nr(d))for(w in d)~Gg.indexOf(w)&&(P||(P={}),P[w]=d[w]);for(R=0;R<b;R++)A=zl(i,Wg),A.stagger=0,p&&(A.yoyoEase=p),P&&Vs(A,P),y=S[R],A.duration=+Wa(l,mr(a),R,y,S),A.delay=(+Wa(u,mr(a),R,y,S)||0)-a._delay,!d&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(y,A,M?M(R,y,S):0),x._ease=dt.none;x.duration()?l=u=0:a.timeline=0}else if(_){Va(Si(x.vars.defaults,{ease:"none"})),x._ease=Ns(_.ease||i.ease||"none");var N=0,B,W,X;if(En(_))_.forEach(function($){return x.to(S,$,">")}),x.duration();else{A={};for(w in _)w==="ease"||w==="easeEach"||S1(w,_[w],A,_.easeEach);for(w in A)for(B=A[w].sort(function($,q){return $.t-q.t}),N=0,R=0;R<B.length;R++)W=B[R],X={ease:W.e,duration:(W.t-(R?B[R-1].t:0))/100*l},X[w]=W.v,x.to(S,X,N),N+=X.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!hf&&(qr=mr(a),kt.killTweensOf(S),qr=0),$i(v,mr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!_&&a._start===un(v._time)&&Xn(h)&&QT(mr(a))&&v.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-u)||0)),m&&Eg(mr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Dt&&!u?c:i<Dt?0:i,d,f,_,g,m,p,v,S,x;if(!l)t1(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,S=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=un(h%g),h===c?(_=this._repeat,d=l):(_=~~(h/g),_&&_===un(h/g)&&(d=l,_--),d>l&&(d=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=l-d),m=ta(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&kg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(un(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Tg(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/l),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!_&&(oi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_d(this,i,s,o),oi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&oi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&_d(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ls(this,1),!s&&!(u&&!a)&&(h||a||p)&&(oi(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,c){hc||ii.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yf(this,l),u=this._ease(l/this._dur),y1(this,i,s,o,a,u,l,c)?this.resetTo(i,s,o,a,1):(uu(this,0),this.parent||Sg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qr&&qr.vars.overwrite!==!0)._first||Ia(this),this.parent&&o!==this.timeline.totalDuration()&&na(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?vi(i):a,l=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&ZT(a,c))return s==="all"&&(this._pt=0),Ia(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},$n(s,function(v){return g[v]=1}),s=g),s=M1(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&cu(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Ia(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ga(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ga(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e}(dc);Si(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new On,t=xd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mf=function(e,t,n){return e[t]=n},Xg=function(e,t,n){return e[t](n)},b1=function(e,t,n,i){return e[t](i.fp,n)},E1=function(e,t,n){return e.setAttribute(t,n)},Sf=function(e,t){return Wt(e[t])?Xg:df(e[t])&&e.setAttribute?E1:Mf},$g=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A1=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},w1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},R1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},qn=function(){function r(t,n,i,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||$g,this.d=c||this,this.set=l||Mf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=R1,this.m=n,this.mt=s,this.tween=i},r}();$n(gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _f[r]=1});ci.TweenMax=ci.TweenLite=Qt;ci.TimelineLite=ci.TimelineMax=On;kt=new On({sortChildren:!1,defaults:ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ai.stringFilter=Fg;var Us=[],bl={},C1=[],Em=0,P1=0,sh=function(e){return(bl[e]||C1).map(function(t){return t()})},Sd=function(){var e=Date.now(),t=[];e-Em>2&&(sh("matchMediaInit"),Us.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=Hi.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),sh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,sh("matchMedia"))},jg=function(){function r(t,n){this.selector=n&&vd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=P1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var o=this,a=function(){var l=Ot,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=vd(s)),Ot=o,h=i.apply(o,arguments),Wt(h)&&o._r.push(h),Ot=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Wt?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof On?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Qt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Us.length;o--;)Us[o].id===this.id&&Us.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),L1=function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){nr(n)||(n={matches:n});var o=new jg(0,s||this.scope),a=o.conditions={},c,l,u;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?u=1:(c=Hi.matchMedia(n[l]),c&&(Us.indexOf(o)<0&&Us.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(Sd):c.addEventListener("change",Sd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Vl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ng(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=vi(e)[0]);var s=Ds(e||{}).get,o=n?Mg:yg;return n==="native"&&(n=""),e&&(t?o((ni[t]&&ni[t].get||s)(e,t,n,i)):function(a,c,l){return o((ni[a]&&ni[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ni[t],a=Ds(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var h=new o;To._pt=0,h.init(e,n?u+n:u,To,0,[e]),h.render(1,h),To._pt&&bf(1,To)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=jn.to(e,Vs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ns(e.ease,ea.ease)),vm(ea,e||{})},config:function(e){return vm(ai,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!ci[a]&&cc(t+" effect requires "+a+" plugin.")}),th[t]=function(a,c,l){return n(vi(a),Si(c||{},s),l)},o&&(On.prototype[t]=function(a,c,l){return this.add(th[t](a,nr(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){dt[e]=Ns(t)},parseEase:function(e,t){return arguments.length?Ns(e,t):dt},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=Xn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(kt,n,0),n},context:function(e,t){return e?new jg(e,t):Ot},matchMedia:function(e){return new L1(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sd()},addEventListener:function(e,t){var n=bl[e]||(bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:l1,wrapYoyo:u1,distribute:Rg,random:Pg,snap:Cg,normalize:c1,getUnit:Mn,clamp:r1,splitColor:Ug,toArray:vi,selector:vd,mapRange:Dg,pipe:o1,unitize:a1,interpolate:h1,shuffle:wg},install:mg,effects:th,ticker:ii,updateRoot:On.updateRoot,plugins:ni,globalTimeline:kt,core:{PropTween:qn,globals:_g,Tween:Qt,Timeline:On,Animation:dc,getCache:Ds,_removeLinkedListItem:cu,reverting:function(){return bn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return hf=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vl[r]=Qt[r]});ii.add(On.updateRoot);To=Vl.to({},{duration:0});var D1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},I1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=D1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},oh=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(fn(s)&&(c={},$n(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}I1(a,s)}}}},jn=Vl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oh("roundProps",yd),oh("modifiers"),oh("snap",Cg))||Vl;Qt.version=On.version=jn.version="3.12.5";pg=1;ff()&&ia();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tm,Yr,Uo,Ef,Cs,Am,Tf,N1=function(){return typeof window<"u"},Lr={},Es=180/Math.PI,Oo=Math.PI/180,mo=Math.atan2,wm=1e8,Af=/([A-Z])/g,U1=/(left|right|width|margin|padding|x)/i,O1=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},B1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},k1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},z1=function(e,t,n){return e.style[t]=n},H1=function(e,t,n){return e.style.setProperty(t,n)},V1=function(e,t,n){return e._gsap[t]=n},G1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},W1=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},X1=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Yn=Ht+"Origin",$1=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gr(i,a)}):this.tfm[e]=o.x?o[e]:gr(i,e),e===Yn&&(this.tfm.zOrigin=o.zOrigin);else return Yi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},Jg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},q1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Tf(),(!s||!s.isStart)&&!n[Ht]&&(Jg(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qg=function(e,t){var n={target:e,props:[],revert:q1,save:$1};return e._gsap||jn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},e0,Ed=function(e,t){var n=Yr.createElementNS?Yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yr.createElement(e);return n&&n.style?n:Yr.createElement(e)},Ji=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Af,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ra(t)||t,1)||""},Rm="O,Moz,ms,Ms,Webkit".split(","),ra=function(e,t,n){var i=t||Cs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rm[o]:"")+e},Td=function(){N1()&&window.document&&(Tm=window,Yr=Tm.document,Uo=Yr.documentElement,Cs=Ed("div")||{style:{}},Ed("div"),Ht=ra(Ht),Yn=Ht+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",e0=!!ra("perspective"),Tf=jn.core.reverting,Ef=1)},ah=function r(e){var t=Ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Uo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Uo.removeChild(t),this.style.cssText=s,o},Cm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},t0=function(e){var t;try{t=e.getBBox()}catch{t=ah.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ah||(t=ah.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cm(e,["x","cx","x1"])||0,y:+Cm(e,["y","cy","y1"])||0,width:0,height:0}:t},n0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&t0(e))},Gs=function(e,t){if(t){var n=e.style,i;t in Lr&&t!==Yn&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Af,"-$1").toLowerCase())):n.removeAttribute(t)}},jr=function(e,t,n,i,s,o){var a=new qn(e._pt,t,n,0,1,o?Zg:Kg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Pm={deg:1,rad:1,turn:1},Y1={grid:1,flex:1},us=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Cs.style,c=U1.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||Pm[i]||Pm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&n0(e),(f||o==="%")&&(Lr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],qt(f?s/_*h:s/100*_);if(a[c?"width":"height"]=h+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Yr||!g.appendChild)&&(g=Yr.body),m=g._gsap,m&&f&&m.width&&c&&m.time===ii.time&&!m.uncache)return qt(s/m.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,_=e[u],v?e.style[t]=v:Gs(e,t)}else(f||o==="%")&&!Y1[Ji(g,"display")]&&(a.position=Ji(e,"position")),g===e&&(a.position="static"),g.appendChild(Cs),_=Cs[u],g.removeChild(Cs),a.position="absolute";return c&&f&&(m=Ds(g),m.time=ii.time,m.width=g[u]),qt(d?_*s/h:_&&s?h/_*s:0)},gr=function(e,t,n,i){var s;return Ef||Td(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Lr[t]&&t!=="transform"?(s=pc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wl(Ji(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gl[t]&&Gl[t](e,t,n)||Ji(e,t)||xg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?us(e,t,s,n)+n:s},j1=function(e,t,n,i){if(!n||n==="none"){var s=ra(t,e,1),o=s&&Ji(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ji(e,"borderTopColor"))}var a=new qn(this._pt,e.style,t,0,1,qg),c=0,l=0,u,h,d,f,_,g,m,p,v,S,x,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Ji(e,t)||i,g?e.style[t]=g:Gs(e,t)),u=[n,i],Fg(u),n=u[0],i=u[1],d=n.match(Eo)||[],R=i.match(Eo)||[],R.length){for(;h=Eo.exec(i);)m=h[0],v=i.substring(c,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=No(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),c=Eo.lastIndex-S.length,S||(S=S||ai.units[t]||x,c===i.length&&(i+=S,a.e+=S)),x!==S&&(f=us(e,t,g,S)||0),a._pt={_next:a._pt,p:v||l===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Zg:Kg;return dg.test(i)&&(a.e=0),this._pt=a,a},Lm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},K1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Lm[n]||n,t[1]=Lm[i]||i,t.join(" ")},Z1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Lr[a]&&(c=1,a=a==="transformOrigin"?Yn:Ht),Gs(n,a);c&&(Gs(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),pc(n,1),o.uncache=1,Jg(i)))}},Gl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new qn(e._pt,t,n,0,0,Z1);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},fc=[1,0,0,1,0,0],i0={},r0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dm=function(e){var t=Ji(e,Ht);return r0(t)?fc:t.substr(7).match(hg).map(qt)},wf=function(e,t){var n=e._gsap||Ds(e),i=e.style,s=Dm(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?fc:s):(s===fc&&!e.offsetParent&&e!==Uo&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(l=1,a=e.nextElementSibling,Uo.appendChild(e)),s=Dm(e),c?i.display=c:Gs(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Uo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ad=function(e,t,n,i,s,o){var a=e._gsap,c=s||wf(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],v=c[5],S=t.split(" "),x=parseFloat(S[0])||0,R=parseFloat(S[1])||0,A,b,w,y;n?c!==fc&&(b=f*m-_*g)&&(w=x*(m/b)+R*(-g/b)+(g*v-m*p)/b,y=x*(-_/b)+R*(f/b)-(f*v-_*p)/b,x=w,R=y):(A=t0(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),R=A.y+(~(S[1]||S[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(p=x-l,v=R-u,a.xOffset=h+(p*f+v*g)-p,a.yOffset=d+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Yn]="0px 0px",o&&(jr(o,a,"xOrigin",l,x),jr(o,a,"yOrigin",u,R),jr(o,a,"xOffset",h,a.xOffset),jr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+R)},pc=function(e,t){var n=e._gsap||new Hg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Ji(e,Yn)||"0",u,h,d,f,_,g,m,p,v,S,x,R,A,b,w,y,M,P,N,B,W,X,$,q,V,te,L,he,Ie,tt,j,ee;return u=h=d=g=m=p=v=S=x=0,f=_=1,n.svg=!!(e.getCTM&&n0(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ht]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ht]!=="none"?c[Ht]:"")),i.scale=i.rotate=i.translate="none"),b=wf(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),l=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Ad(e,q||l,!!q||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,A=n.yOrigin||0,b!==fc&&(P=b[0],N=b[1],B=b[2],W=b[3],u=X=b[4],h=$=b[5],b.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(W*W+B*B),g=P||N?mo(N,P)*Es:0,v=B||W?mo(B,W)*Es+g:0,v&&(_*=Math.abs(Math.cos(v*Oo))),n.svg&&(u-=R-(R*P+A*B),h-=A-(R*N+A*W))):(ee=b[6],tt=b[7],L=b[8],he=b[9],Ie=b[10],j=b[11],u=b[12],h=b[13],d=b[14],w=mo(ee,Ie),m=w*Es,w&&(y=Math.cos(-w),M=Math.sin(-w),q=X*y+L*M,V=$*y+he*M,te=ee*y+Ie*M,L=X*-M+L*y,he=$*-M+he*y,Ie=ee*-M+Ie*y,j=tt*-M+j*y,X=q,$=V,ee=te),w=mo(-B,Ie),p=w*Es,w&&(y=Math.cos(-w),M=Math.sin(-w),q=P*y-L*M,V=N*y-he*M,te=B*y-Ie*M,j=W*M+j*y,P=q,N=V,B=te),w=mo(N,P),g=w*Es,w&&(y=Math.cos(w),M=Math.sin(w),q=P*y+N*M,V=X*y+$*M,N=N*y-P*M,$=$*y-X*M,P=q,X=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=qt(Math.sqrt(P*P+N*N+B*B)),_=qt(Math.sqrt($*$+ee*ee)),w=mo(X,$),v=Math.abs(w)>2e-4?w*Es:0,x=j?1/(j<0?-j:j):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!r0(Ji(e,Ht)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=qt(f),n.scaleY=qt(_),n.rotation=qt(g)+a,n.rotationX=qt(m)+a,n.rotationY=qt(p)+a,n.skewX=v+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yn]=Wl(l)),n.xOffset=n.yOffset=0,n.force3D=ai.force3D,n.renderTransform=n.svg?Q1:e0?s0:J1,n.uncache=0,n},Wl=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,n){var i=Mn(t);return qt(parseFloat(t)+parseFloat(us(e,"x",n+"px",i)))+i},J1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,s0(e,t)},ys="0deg",Aa="0px",Ms=") ",s0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,S=n.zOrigin,x="",R=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==ys||u!==ys)){var A=parseFloat(u)*Oo,b=Math.sin(A),w=Math.cos(A),y;A=parseFloat(h)*Oo,y=Math.cos(A),o=ch(v,o,b*y*-S),a=ch(v,a,-Math.sin(A)*-S),c=ch(v,c,w*y*-S+S)}m!==Aa&&(x+="perspective("+m+Ms),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(R||o!==Aa||a!==Aa||c!==Aa)&&(x+=c!==Aa||R?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ms),l!==ys&&(x+="rotate("+l+Ms),u!==ys&&(x+="rotateY("+u+Ms),h!==ys&&(x+="rotateX("+h+Ms),(d!==ys||f!==ys)&&(x+="skew("+d+", "+f+Ms),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Ms),v.style[Ht]=x||"translate(0, 0)"},Q1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,S=parseFloat(o),x=parseFloat(a),R,A,b,w,y;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Oo,l*=Oo,R=Math.cos(c)*h,A=Math.sin(c)*h,b=Math.sin(c-l)*-d,w=Math.cos(c-l)*d,l&&(u*=Oo,y=Math.tan(l-u),y=Math.sqrt(1+y*y),b*=y,w*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),R*=y,A*=y)),R=qt(R),A=qt(A),b=qt(b),w=qt(w)):(R=h,w=d,A=b=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=us(f,"x",o,"px"),x=us(f,"y",a,"px")),(_||g||m||p)&&(S=qt(S+_-(_*R+g*b)+m),x=qt(x+g-(_*A+g*w)+p)),(i||s)&&(y=f.getBBox(),S=qt(S+i/100*y.width),x=qt(x+s/100*y.height)),y="matrix("+R+","+A+","+b+","+w+","+S+","+x+")",f.setAttribute("transform",y),v&&(f.style[Ht]=y)},eA=function(e,t,n,i,s){var o=360,a=fn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Es:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),h==="cw"&&l<0?l=(l+o*wm)%o-~~(l/o)*o:h==="ccw"&&l>0&&(l=(l-o*wm)%o-~~(l/o)*o)),e._pt=d=new qn(e._pt,t,n,i,l,F1),d.e=u,d.u="deg",e._props.push(n),d},Im=function(e,t){for(var n in t)e[n]=t[n];return e},tA=function(e,t,n){var i=Im({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,h,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=pc(n,1),Gs(n,Ht),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ht],o[Ht]=t,a=pc(n,1),o[Ht]=l);for(c in Lr)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(f=Mn(l),_=Mn(u),h=f!==_?us(n,c,l,_):parseFloat(l),d=parseFloat(u),e._pt=new qn(e._pt,a,c,h,d-h,bd),e._pt.u=_||0,e._props.push(c));Im(a,i)};$n("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gl[e>1?"border"+r:r]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return gr(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,h)}});var o0={name:"css",register:Td,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,f,_,g,m,p,v,S,x,R,A,b,w;Ef||Td(),this.styles=this.styles||Qg(e),w=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ni[g]&&Vg(g,t,n,i,e,s)))){if(f=typeof u,_=Gl[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=uc(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ns.lastIndex=0,ns.test(l)||(m=Mn(l),p=Mn(u)),p?m!==p&&(l=us(e,g,l,p)+p):m&&(u+=m),this.add(a,"setProperty",l,u,i,s,0,0,g),o.push(g),w.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],fn(l)&&~l.indexOf("random(")&&(l=uc(l)),Mn(l+"")||l==="auto"||(l+=ai.units[g]||Mn(gr(e,g))||""),(l+"").charAt(1)==="="&&(l=gr(e,g))):l=gr(e,g),d=parseFloat(l),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in Yi&&(g==="autoAlpha"&&(d===1&&gr(e,"visibility")==="hidden"&&h&&(d=0),w.push("visibility",0,a.visibility),jr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Lr,S){if(this.styles.save(g),x||(R=e._gsap,R.renderTransform&&!t.parseTransform||pc(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,x=this._pt=new qn(this._pt,a,Ht,0,1,R.renderTransform,R,0,-1),x.dep=1),g==="scale")this._pt=new qn(this._pt,R,"scaleY",R.scaleY,(v?No(R.scaleY,v+h):h)-R.scaleY||0,bd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(Yn,0,a[Yn]),u=K1(u),R.svg?Ad(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&jr(this,R,"zOrigin",R.zOrigin,p),jr(this,a,g,Wl(l),Wl(u)));continue}else if(g==="svgOrigin"){Ad(e,u,1,A,0,this);continue}else if(g in i0){eA(this,R,g,d,v?No(d,v+u):u);continue}else if(g==="smoothOrigin"){jr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){tA(this,u,e);continue}}else g in a||(g=ra(g)||g);if(S||(h||h===0)&&(d||d===0)&&!O1.test(u)&&g in a)m=(l+"").substr((d+"").length),h||(h=0),p=Mn(u)||(g in ai.units?ai.units[g]:m),m!==p&&(d=us(e,g,l,p)),this._pt=new qn(this._pt,S?R:a,g,d,(v?No(d,v+h):h)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?k1:bd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=B1);else if(g in a)j1.call(this,e,g,l,v?v+u:u);else if(g in e)this.add(e,g,l||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){mf(g,u);continue}S||(g in a?w.push(g,0,a[g]):w.push(g,1,l||e[g])),o.push(g)}}b&&Yg(this)},render:function(e,t){if(t.tween._time||!Tf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gr,aliases:Yi,getSetter:function(e,t,n){var i=Yi[t];return i&&i.indexOf(",")<0&&(t=i),t in Lr&&t!==Yn&&(e._gsap.x||gr(e,"x"))?n&&Am===n?t==="scale"?G1:V1:(Am=n||{})&&(t==="scale"?W1:X1):e.style&&!df(e.style[t])?z1:~t.indexOf("-")?H1:Sf(e,t)},core:{_removeProperty:Gs,_getMatrix:wf}};jn.utils.checkPrefix=ra;jn.core.getStyleSaver=Qg;(function(r,e,t,n){var i=$n(r+","+e+","+t,function(s){Lr[s]=1});$n(e,function(s){ai.units[s]="deg",i0[s]=1}),Yi[i[13]]=r+","+e,$n(n,function(s){var o=s.split(":");Yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ai.units[r]="px"});jn.registerPlugin(o0);var se=jn.registerPlugin(o0)||jn;se.core.Tween;function nA(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function iA(r,e,t){return e&&nA(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n,El,ri,Kr,Zr,Fo,a0,Ts,Xa,c0,Er,Ri,l0,u0=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},h0=1,Ao=[],ot=[],Qi=[],$a=Date.now,wd=function(e,t){return t},rA=function(){var e=Xa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Qi),ot=n,Qi=i,wd=function(o,a){return t[o](a)}},is=function(e,t){return~Qi.indexOf(e)&&Qi[Qi.indexOf(e)+1][t]},qa=function(e){return!!~c0.indexOf(e)},Pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},el="scrollLeft",tl="scrollTop",Rd=function(){return Er&&Er.isPressed||ot.cache++},Xl=function(e,t){var n=function i(s){if(s||s===0){h0&&(ri.history.scrollRestoration="manual");var o=Er&&Er.isPressed;s=i.v=Math.round(s)||(Er&&Er.iOS?1:0),e(s),i.cacheID=ot.cache,o&&wd("ss",s)}else(t||ot.cache!==i.cacheID||wd("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:el,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xl(function(r){return arguments.length?ri.scrollTo(r,rn.sc()):ri.pageXOffset||Kr[el]||Zr[el]||Fo[el]||0})},rn={s:tl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:Xl(function(r){return arguments.length?ri.scrollTo(Fn.sc(),r):ri.pageYOffset||Kr[tl]||Zr[tl]||Fo[tl]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hs=function(e,t){var n=t.s,i=t.sc;qa(e)&&(e=Kr.scrollingElement||Zr);var s=ot.indexOf(e),o=i===rn.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Pn(e,"scroll",Rd);var a=ot[s+o],c=a||(ot[s+o]=Xl(is(e,n),!0)||(qa(e)?i:Xl(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),c},Cd=function(e,t,n){var i=e,s=e,o=$a(),a=o,c=t||50,l=Math.max(500,c*3),u=function(_,g){var m=$a();g||m-o>c?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=$a();return(_||_===0)&&_!==i&&u(_),o===a||p-a>l?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},wa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Nm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},d0=function(){Xa=_n.core.globals().ScrollTrigger,Xa&&Xa.core&&rA()},f0=function(e){return _n=e||u0(),!El&&_n&&typeof document<"u"&&document.body&&(ri=window,Kr=document,Zr=Kr.documentElement,Fo=Kr.body,c0=[ri,Kr,Zr,Fo],_n.utils.clamp,l0=_n.core.context||function(){},Ts="onpointerenter"in Fo?"pointer":"mouse",a0=jt.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ri=jt.eventTypes=("ontouchstart"in Zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return h0=0},500),d0(),El=1),El};Fn.op=rn;ot.cache=0;var jt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){El||f0(_n)||console.warn("Please gsap.registerPlugin(Observer)"),Xa||d0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,S=n.onPress,x=n.onRelease,R=n.onRight,A=n.onLeft,b=n.onUp,w=n.onDown,y=n.onChangeX,M=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,W=n.onHover,X=n.onHoverEnd,$=n.onMove,q=n.ignoreCheck,V=n.isNormalizer,te=n.onGestureStart,L=n.onGestureEnd,he=n.onWheel,Ie=n.onEnable,tt=n.onDisable,j=n.onClick,ee=n.scrollSpeed,xe=n.capture,ne=n.allowClicks,Ee=n.lockAxis,we=n.onLockAxis;this.target=a=Vn(a)||Zr,this.vars=n,f&&(f=_n.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ri.getComputedStyle(Fo).lineHeight)||22);var Ve,nt,We,Le,U,At,Be,k=this,Te=0,ut=0,Re=n.passive||!u,C=hs(a,Fn),E=hs(a,rn),G=C(),Q=E(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ri[0]==="pointerdown",K=qa(a),de=a.ownerDocument||Kr,ce=[0,0,0],me=[0,0,0],Ye=0,ie=function(){return Ye=$a()},ae=function(Ae,Je){return(k.event=Ae)&&f&&~f.indexOf(Ae.target)||Je&&J&&Ae.pointerType!=="touch"||q&&q(Ae,Je)},Ne=function(){k._vx.reset(),k._vy.reset(),nt.pause(),h&&h(k)},De=function(){var Ae=k.deltaX=Nm(ce),Je=k.deltaY=Nm(me),_e=Math.abs(Ae)>=i,Xe=Math.abs(Je)>=i;P&&(_e||Xe)&&P(k,Ae,Je,ce,me),_e&&(R&&k.deltaX>0&&R(k),A&&k.deltaX<0&&A(k),y&&y(k),N&&k.deltaX<0!=Te<0&&N(k),Te=k.deltaX,ce[0]=ce[1]=ce[2]=0),Xe&&(w&&k.deltaY>0&&w(k),b&&k.deltaY<0&&b(k),M&&M(k),B&&k.deltaY<0!=ut<0&&B(k),ut=k.deltaY,me[0]=me[1]=me[2]=0),(Le||We)&&($&&$(k),We&&(v(k),We=!1),Le=!1),At&&!(At=!1)&&we&&we(k),U&&(he(k),U=!1),Ve=0},ye=function(Ae,Je,_e){ce[_e]+=Ae,me[_e]+=Je,k._vx.update(Ae),k._vy.update(Je),l?Ve||(Ve=requestAnimationFrame(De)):De()},Ze=function(Ae,Je){Ee&&!Be&&(k.axis=Be=Math.abs(Ae)>Math.abs(Je)?"x":"y",At=!0),Be!=="y"&&(ce[2]+=Ae,k._vx.update(Ae,!0)),Be!=="x"&&(me[2]+=Je,k._vy.update(Je,!0)),l?Ve||(Ve=requestAnimationFrame(De)):De()},Fe=function(Ae){if(!ae(Ae,1)){Ae=wa(Ae,u);var Je=Ae.clientX,_e=Ae.clientY,Xe=Je-k.x,Ce=_e-k.y,He=k.isDragging;k.x=Je,k.y=_e,(He||Math.abs(k.startX-Je)>=s||Math.abs(k.startY-_e)>=s)&&(v&&(We=!0),He||(k.isDragging=!0),Ze(Xe,Ce),He||m&&m(k))}},ft=k.onPress=function(ve){ae(ve,1)||ve&&ve.button||(k.axis=Be=null,nt.pause(),k.isPressed=!0,ve=wa(ve),Te=ut=0,k.startX=k.x=ve.clientX,k.startY=k.y=ve.clientY,k._vx.reset(),k._vy.reset(),Pn(V?a:de,Ri[1],Fe,Re,!0),k.deltaX=k.deltaY=0,S&&S(k))},D=k.onRelease=function(ve){if(!ae(ve,1)){Cn(V?a:de,Ri[1],Fe,!0);var Ae=!isNaN(k.y-k.startY),Je=k.isDragging,_e=Je&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Xe=wa(ve);!_e&&Ae&&(k._vx.reset(),k._vy.reset(),u&&ne&&_n.delayedCall(.08,function(){if($a()-Ye>300&&!ve.defaultPrevented){if(ve.target.click)ve.target.click();else if(de.createEvent){var Ce=de.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,ri,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ve.target.dispatchEvent(Ce)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Je&&!V&&nt.restart(!0),p&&Je&&p(k),x&&x(k,_e)}},ue=function(Ae){return Ae.touches&&Ae.touches.length>1&&(k.isGesturing=!0)&&te(Ae,k.isDragging)},Y=function(){return(k.isGesturing=!1)||L(k)},Z=function(Ae){if(!ae(Ae)){var Je=C(),_e=E();ye((Je-G)*ee,(_e-Q)*ee,1),G=Je,Q=_e,h&&nt.restart(!0)}},le=function(Ae){if(!ae(Ae)){Ae=wa(Ae,u),he&&(U=!0);var Je=(Ae.deltaMode===1?c:Ae.deltaMode===2?ri.innerHeight:1)*_;ye(Ae.deltaX*Je,Ae.deltaY*Je,0),h&&!V&&nt.restart(!0)}},fe=function(Ae){if(!ae(Ae)){var Je=Ae.clientX,_e=Ae.clientY,Xe=Je-k.x,Ce=_e-k.y;k.x=Je,k.y=_e,Le=!0,h&&nt.restart(!0),(Xe||Ce)&&Ze(Xe,Ce)}},ke=function(Ae){k.event=Ae,W(k)},pt=function(Ae){k.event=Ae,X(k)},Vt=function(Ae){return ae(Ae)||wa(Ae,u)&&j(k)};nt=k._dc=_n.delayedCall(d||.25,Ne).pause(),k.deltaX=k.deltaY=0,k._vx=Cd(0,50,!0),k._vy=Cd(0,50,!0),k.scrollX=C,k.scrollY=E,k.isDragging=k.isGesturing=k.isPressed=!1,l0(this),k.enable=function(ve){return k.isEnabled||(Pn(K?de:a,"scroll",Rd),o.indexOf("scroll")>=0&&Pn(K?de:a,"scroll",Z,Re,xe),o.indexOf("wheel")>=0&&Pn(a,"wheel",le,Re,xe),(o.indexOf("touch")>=0&&a0||o.indexOf("pointer")>=0)&&(Pn(a,Ri[0],ft,Re,xe),Pn(de,Ri[2],D),Pn(de,Ri[3],D),ne&&Pn(a,"click",ie,!0,!0),j&&Pn(a,"click",Vt),te&&Pn(de,"gesturestart",ue),L&&Pn(de,"gestureend",Y),W&&Pn(a,Ts+"enter",ke),X&&Pn(a,Ts+"leave",pt),$&&Pn(a,Ts+"move",fe)),k.isEnabled=!0,ve&&ve.type&&ft(ve),Ie&&Ie(k)),k},k.disable=function(){k.isEnabled&&(Ao.filter(function(ve){return ve!==k&&qa(ve.target)}).length||Cn(K?de:a,"scroll",Rd),k.isPressed&&(k._vx.reset(),k._vy.reset(),Cn(V?a:de,Ri[1],Fe,!0)),Cn(K?de:a,"scroll",Z,xe),Cn(a,"wheel",le,xe),Cn(a,Ri[0],ft,xe),Cn(de,Ri[2],D),Cn(de,Ri[3],D),Cn(a,"click",ie,!0),Cn(a,"click",Vt),Cn(de,"gesturestart",ue),Cn(de,"gestureend",Y),Cn(a,Ts+"enter",ke),Cn(a,Ts+"leave",pt),Cn(a,Ts+"move",fe),k.isEnabled=k.isPressed=k.isDragging=!1,tt&&tt(k))},k.kill=k.revert=function(){k.disable();var ve=Ao.indexOf(k);ve>=0&&Ao.splice(ve,1),Er===k&&(Er=0)},Ao.push(k),V&&qa(a)&&(Er=k),k.enable(g)},iA(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();jt.version="3.12.5";jt.create=function(r){return new jt(r)};jt.register=f0;jt.getAll=function(){return Ao.slice()};jt.getById=function(r){return Ao.filter(function(e){return e.vars.id===r})[0]};u0()&&_n.registerPlugin(jt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Se,vo,ht,Bt,Li,Ut,p0,$l,mc,Ya,Ua,nl,vn,hu,Pd,In,Um,Om,yo,m0,lh,_0,Dn,Ld,g0,x0,Vr,Dd,Rf,Bo,Cf,ql,Id,uh,il=1,yn=Date.now,hh=yn(),yi=0,Oa=0,Fm=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Bm=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},sA=function r(){return Oa&&requestAnimationFrame(r)},km=function(){return hu=1},zm=function(){return hu=0},Vi=function(e){return e},Fa=function(e){return Math.round(e*1e5)/1e5||0},v0=function(){return typeof window<"u"},y0=function(){return Se||v0()&&(Se=window.gsap)&&Se.registerPlugin&&Se},Ws=function(e){return!!~p0.indexOf(e)},M0=function(e){return(e==="Height"?Cf:ht["inner"+e])||Li["client"+e]||Ut["client"+e]},S0=function(e){return is(e,"getBoundingClientRect")||(Ws(e)?function(){return Cl.width=ht.innerWidth,Cl.height=Cf,Cl}:function(){return vr(e)})},oA=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=is(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?M0(s):e["client"+s])||0}},aA=function(e,t){return!t||~Qi.indexOf(e)?S0(e):function(){return Cl}},ji=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=is(e,n))?o()-S0(e)()[s]:Ws(e)?(Li[n]||Ut[n])-M0(i):e[n]-e["offset"+i])},rl=function(e,t){for(var n=0;n<yo.length;n+=3)(!t||~t.indexOf(yo[n+1]))&&e(yo[n],yo[n+1],yo[n+2])},ti=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},Ba=function(e){return typeof e=="number"},As=function(e){return typeof e=="object"},Ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},dh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},_o=Math.abs,b0="left",E0="top",Pf="right",Lf="bottom",Os="width",Fs="height",ja="Right",Ka="Left",Za="Top",Ja="Bottom",Jt="padding",pi="margin",sa="Width",Df="Height",nn="px",mi=function(e){return ht.getComputedStyle(e)},cA=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Hm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vr=function(e,t){var n=t&&mi(e)[Pd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},T0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},lA=function(e){return function(t){return Se.utils.snap(T0(e),t)}},If=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},uA=function(e){return function(t,n){return If(T0(e))(t,n.direction)}},sl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ol=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},al={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},Tl=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in jl?jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},cl=function(e,t,n,i,s,o,a,c){var l=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Bt.createElement("div"),g=Ws(n)||is(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Ut:n,v=e.indexOf("start")!==-1,S=v?l:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(x+=(i===rn?Pf:Lf)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Al(_,0,i,v),_},Al=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+sa]=1,s["border"+a+sa]=0,s[n.p]=t+"px",Se.set(e,s)},rt=[],Nd={},_c,Gm=function(){return yn()-yi>34&&(_c||(_c=requestAnimationFrame(Ar)))},go=function(){(!Dn||!Dn.isPressed||Dn.startX>Ut.clientWidth)&&(ot.cache++,Dn?_c||(_c=requestAnimationFrame(Ar)):Ar(),yi||$s("scrollStart"),yi=yn())},fh=function(){x0=ht.innerWidth,g0=ht.innerHeight},ka=function(){ot.cache++,!vn&&!_0&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!Ld||x0!==ht.innerWidth||Math.abs(ht.innerHeight-g0)>ht.innerHeight*.25)&&$l.restart(!0)},Xs={},hA=[],A0=function r(){return cn(Oe,"scrollEnd",r)||Ps(!0)},$s=function(e){return Xs[e]&&Xs[e].map(function(t){return t()})||hA},ei=[],w0=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},Nf=function(e,t){var n;for(In=0;In<rt.length;In++)n=rt[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ql=!0,t&&w0(t),t||$s("revert")},R0=function(e,t){ot.cache++,(t||!Nn)&&ot.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(ht.history.scrollRestoration=Rf=e)},Nn,Bs=0,Wm,dA=function(){if(Wm!==Bs){var e=Wm=Bs;requestAnimationFrame(function(){return e===Bs&&Ps(!0)})}},C0=function(){Ut.appendChild(Bo),Cf=!Dn&&Bo.offsetHeight||ht.innerHeight,Ut.removeChild(Bo)},Xm=function(e){return mc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ps=function(e,t){if(yi&&!e&&!ql){ln(Oe,"scrollEnd",A0);return}C0(),Nn=Oe.isRefreshing=!0,ot.forEach(function(i){return Bn(i)&&++i.cacheID&&(i.rec=i())});var n=$s("refreshInit");m0&&Oe.sort(),t||Nf(),ot.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),ql=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Id=1,Xm(!0),rt.forEach(function(i){var s=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Xm(!1),Id=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),R0(Rf,1),$l.pause(),Bs++,Nn=2,Ar(2),rt.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=Oe.isRefreshing=!1,$s("refresh")},Ud=0,wl=1,Qa,Ar=function(e){if(e===2||!Nn&&!ql){Oe.isUpdating=!0,Qa&&Qa.update(0);var t=rt.length,n=yn(),i=n-hh>=50,s=t&&rt[0].scroll();if(wl=Ud>s?-1:1,Nn||(Ud=s),i&&(yi&&!hu&&n-yi>200&&(yi=0,$s("scrollEnd")),Ua=hh,hh=n),wl<0){for(In=t;In-- >0;)rt[In]&&rt[In].update(0,i);wl=1}else for(In=0;In<t;In++)rt[In]&&rt[In].update(0,i);Oe.isUpdating=!1}_c=0},Od=[b0,E0,Lf,Pf,pi+Ja,pi+ja,pi+Za,pi+Ka,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rl=Od.concat([Os,Fs,"boxSizing","max"+sa,"max"+Df,"position",pi,Jt,Jt+Za,Jt+ja,Jt+Ja,Jt+Ka]),fA=function(e,t,n){ko(n);var i=e._gsap;if(i.spacerIsNative)ko(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ph=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Od.length,o=t.style,a=e.style,c;s--;)c=Od[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lf]=a[Pf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Os]=Yl(e,Fn)+nn,o[Fs]=Yl(e,rn)+nn,o[Jt]=a[pi]=a[E0]=a[b0]="0",ko(i),a[Os]=a["max"+sa]=n[Os],a[Fs]=a["max"+Df]=n[Fs],a[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},pA=/([A-Z])/g,ko=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(pA,"-$1").toLowerCase())}},ll=function(e){for(var t=Rl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Rl[s],n[Rl[s]]);return i.t=e,i},mA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Cl={left:0,top:0},$m=function(e,t,n,i,s,o,a,c,l,u,h,d,f,_){Bn(e)&&(e=e(c)),ti(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Tl("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Ba(e))f&&(e=Se.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Al(a,n,i,!0);else{Bn(t)&&(t=t(c));var S=(e||"0").split(" "),x,R,A,b;v=Vn(t,c)||Ut,x=vr(v)||{},(!x||!x.left&&!x.top)&&mi(v).display==="none"&&(b=v.style.display,v.style.display="block",x=vr(v),b?v.style.display=b:v.style.removeProperty("display")),R=Tl(S[0],x[i.d]),A=Tl(S[1]||"0",n),e=x[i.p]-l[i.p]-u+R+s-A,a&&Al(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var w=e+n,y=o._isStart;m="scroll"+i.d2,Al(o,w,i,y&&w>20||!y&&(h?Math.max(Ut[m],Li[m]):o.parentNode[m])<=w+1),h&&(l=vr(a),h&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+nn))}return f&&v&&(m=vr(v),f.seek(d),p=vr(v),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},_A=/(webkit|moz|length|cssText|inset)/i,qm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Ut){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!_A.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},P0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},ul=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Ym=function(e,t){var n=hs(e,t),i="_scroll"+t.p2,s=function o(a,c,l,u,h){var d=o.tween,f=c.onComplete,_={};l=l||n();var g=P0(n,l,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-l,d&&d.kill(),c[i]=a,c.inherit=!1,c.modifiers=_,_[i]=function(){return g(l+u*d.ratio+h*d.ratio*d.ratio)},c.onUpdate=function(){ot.cache++,o.tween&&Ar()},c.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Se.to(e,c),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),Oe.isTouch&&ln(e,"touchmove",n.wheelHandler),s},Oe=function(){function r(t,n){vo||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Oa){this.update=this.refresh=this.kill=Vi;return}n=Hm(ti(n)||Ba(n)||n.nodeType?{trigger:n}:n,al);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,S=s.once,x=s.snap,R=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,w=s.fastScrollEnd,y=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:rn,P=!h&&h!==0,N=Vn(n.scroller||ht),B=Se.core.getCache(N),W=Ws(N),X=("pinType"in n?n.pinType:is(N,"pinType")||W&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=P&&n.toggleActions.split(" "),V="markers"in n?n.markers:al.markers,te=W?0:parseFloat(mi(N)["border"+M.p2+sa])||0,L=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ie=oA(N,W,M),tt=aA(N,W),j=0,ee=0,xe=0,ne=hs(N,M),Ee,we,Ve,nt,We,Le,U,At,Be,k,Te,ut,Re,C,E,G,Q,J,K,de,ce,me,Ye,ie,ae,Ne,De,ye,Ze,Fe,ft,D,ue,Y,Z,le,fe,ke,pt;if(L._startClamp=L._endClamp=!1,L._dir=M,m*=45,L.scroller=N,L.scroll=b?b.time.bind(b):ne,nt=ne(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(m0=1,n.refreshPriority===-9999&&(Qa=L)),B.tweenScroll=B.tweenScroll||{top:Ym(N,rn),left:Ym(N,Fn)},L.tweenTo=Ee=B.tweenScroll[M.p],L.scrubDuration=function(_e){ue=Ba(_e)&&_e,ue?D?D.duration(_e):D=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(L)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Fe=0,c||(c=i.vars.id)),x&&((!As(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Ut.style&&Se.set(W?[Ut,Li]:N,{scrollBehavior:"auto"}),ot.forEach(function(_e){return Bn(_e)&&_e.target===(W?Bt.scrollingElement||Li:N)&&(_e.smooth=!1)}),Ve=Bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?lA(i):x.snapTo==="labelsDirectional"?uA(i):x.directional!==!1?function(_e,Xe){return If(x.snapTo)(_e,yn()-ee<500?0:Xe.direction)}:Se.utils.snap(x.snapTo),Y=x.duration||{min:.1,max:2},Y=As(Y)?Ya(Y.min,Y.max):Ya(Y,Y),Z=Se.delayedCall(x.delay||ue/2||.1,function(){var _e=ne(),Xe=yn()-ee<500,Ce=Ee.tween;if((Xe||Math.abs(L.getVelocity())<10)&&!Ce&&!hu&&j!==_e){var He=(_e-Le)/C,Xt=i&&!P?i.totalProgress():He,it=Xe?0:(Xt-ft)/(yn()-Ua)*1e3||0,Lt=Se.utils.clamp(-He,1-He,_o(it/2)*it/.185),en=He+(x.inertia===!1?0:Lt),wt,Rt,gt=x,Kn=gt.onStart,It=gt.onInterrupt,wn=gt.onComplete;if(wt=Ve(en,L),Ba(wt)||(wt=en),Rt=Math.round(Le+wt*C),_e<=U&&_e>=Le&&Rt!==_e){if(Ce&&!Ce._initted&&Ce.data<=_o(Rt-_e))return;x.inertia===!1&&(Lt=wt-He),Ee(Rt,{duration:Y(_o(Math.max(_o(en-Xt),_o(wt-Xt))*.185/it/.05||0)),ease:x.ease||"power3",data:_o(Rt-_e),onInterrupt:function(){return Z.restart(!0)&&It&&It(L)},onComplete:function(){L.update(),j=ne(),i&&(D?D.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),Fe=ft=i&&!P?i.totalProgress():L.progress,v&&v(L),wn&&wn(L)}},_e,Lt*C,Rt-_e-Lt*C),Kn&&Kn(L,Ee.tween)}}else L.isActive&&j!==_e&&Z.restart(!0)}).pause()),c&&(Nd[c]=L),d=L.trigger=Vn(d||f!==!0&&f),pt=d&&d._gsap&&d._gsap.stRevert,pt&&(pt=pt(L)),f=f===!0?d:Vn(f),ti(a)&&(a={targets:d,className:a}),f&&(_===!1||_===pi||(_=!_&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:Jt),L.pin=f,we=Se.core.getCache(f),we.spacer?E=we.pinState:(A&&(A=Vn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),we.spacerIsNative=!!A,A&&(we.spacerState=ll(A))),we.spacer=J=A||Bt.createElement("div"),J.classList.add("pin-spacer"),c&&J.classList.add("pin-spacer-"+c),we.pinState=E=ll(f)),n.force3D!==!1&&Se.set(f,{force3D:!0}),L.spacer=J=we.spacer,Ze=mi(f),ie=Ze[_+M.os2],de=Se.getProperty(f),ce=Se.quickSetter(f,M.a,nn),ph(f,J,Ze),Q=ll(f)),V){ut=As(V)?Hm(V,Vm):Vm,k=cl("scroller-start",c,N,M,ut,0),Te=cl("scroller-end",c,N,M,ut,0,k),K=k["offset"+M.op.d2];var Vt=Vn(is(N,"content")||N);At=this.markerStart=cl("start",c,Vt,M,ut,K,0,b),Be=this.markerEnd=cl("end",c,Vt,M,ut,K,0,b),b&&(ke=Se.quickSetter([At,Be],M.a,nn)),!X&&!(Qi.length&&is(N,"fixedMarkers")===!0)&&(cA(W?Ut:N),Se.set([k,Te],{force3D:!0}),Ne=Se.quickSetter(k,M.a,nn),ye=Se.quickSetter(Te,M.a,nn))}if(b){var ve=b.vars.onUpdate,Ae=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),ve&&ve.apply(b,Ae||[])})}if(L.previous=function(){return rt[rt.indexOf(L)-1]},L.next=function(){return rt[rt.indexOf(L)+1]},L.revert=function(_e,Xe){if(!Xe)return L.kill(!0);var Ce=_e!==!1||!L.enabled,He=vn;Ce!==L.isReverted&&(Ce&&(le=Math.max(ne(),L.scroll.rec||0),xe=L.progress,fe=i&&i.progress()),At&&[At,Be,k,Te].forEach(function(Xt){return Xt.style.display=Ce?"none":"block"}),Ce&&(vn=L,L.update(Ce)),f&&(!R||!L.isActive)&&(Ce?fA(f,J,E):ph(f,J,mi(f),ae)),Ce||L.update(Ce),vn=He,L.isReverted=Ce)},L.refresh=function(_e,Xe,Ce,He){if(!((vn||!L.enabled)&&!Xe)){if(f&&_e&&yi){ln(r,"scrollEnd",A0);return}!Nn&&he&&he(L),vn=L,Ee.tween&&!Ce&&(Ee.tween.kill(),Ee.tween=0),D&&D.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Xt=Ie(),it=tt(),Lt=b?b.duration():ji(N,M),en=C<=.01,wt=0,Rt=He||0,gt=As(Ce)?Ce.end:n.end,Kn=n.endTrigger||d,It=As(Ce)?Ce.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),wn=L.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,L),T=d&&Math.max(0,rt.indexOf(L))||0,O=T,z,H,F,re,oe,pe,Me,ze,$e,be,je,mt,xt;for(V&&As(Ce)&&(mt=Se.getProperty(k,M.p),xt=Se.getProperty(Te,M.p));O--;)pe=rt[O],pe.end||pe.refresh(0,1)||(vn=L),Me=pe.pin,Me&&(Me===d||Me===f||Me===wn)&&!pe.isReverted&&(be||(be=[]),be.unshift(pe),pe.revert(!0,!0)),pe!==rt[O]&&(T--,O--);for(Bn(It)&&(It=It(L)),It=Fm(It,"start",L),Le=$m(It,d,Xt,M,ne(),At,k,L,it,te,X,Lt,b,L._startClamp&&"_startClamp")||(f?-.001:0),Bn(gt)&&(gt=gt(L)),ti(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(ti(It)?It.split(" ")[0]:"")+gt:(wt=Tl(gt.substr(2),Xt),gt=ti(It)?It:(b?Se.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Le):Le)+wt,Kn=d)),gt=Fm(gt,"end",L),U=Math.max(Le,$m(gt||(Kn?"100% 0":Lt),Kn,Xt,M,ne()+wt,Be,Te,L,it,te,X,Lt,b,L._endClamp&&"_endClamp"))||-.001,wt=0,O=T;O--;)pe=rt[O],Me=pe.pin,Me&&pe.start-pe._pinPush<=Le&&!b&&pe.end>0&&(z=pe.end-(L._startClamp?Math.max(0,pe.start):pe.start),(Me===d&&pe.start-pe._pinPush<Le||Me===wn)&&isNaN(It)&&(wt+=z*(1-pe.progress)),Me===f&&(Rt+=z));if(Le+=wt,U+=wt,L._startClamp&&(L._startClamp+=wt),L._endClamp&&!Nn&&(L._endClamp=U||-.001,U=Math.min(U,ji(N,M))),C=U-Le||(Le-=.01)&&.001,en&&(xe=Se.utils.clamp(0,1,Se.utils.normalize(Le,U,le))),L._pinPush=Rt,At&&wt&&(z={},z[M.a]="+="+wt,wn&&(z[M.p]="-="+ne()),Se.set([At,Be],z)),f&&!(Id&&L.end>=ji(N,M)))z=mi(f),re=M===rn,F=ne(),me=parseFloat(de(M.a))+Rt,!Lt&&U>1&&(je=(W?Bt.scrollingElement||Li:N).style,je={style:je,value:je["overflow"+M.a.toUpperCase()]},W&&mi(Ut)["overflow"+M.a.toUpperCase()]!=="scroll"&&(je.style["overflow"+M.a.toUpperCase()]="scroll")),ph(f,J,z),Q=ll(f),H=vr(f,!0),ze=X&&hs(N,re?Fn:rn)(),_?(ae=[_+M.os2,C+Rt+nn],ae.t=J,O=_===Jt?Yl(f,M)+C+Rt:0,O&&(ae.push(M.d,O+nn),J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+nn)),ko(ae),wn&&rt.forEach(function(Kt){Kt.pin===wn&&Kt.vars.pinSpacing!==!1&&(Kt._subPinOffset=!0)}),X&&ne(le)):(O=Yl(f,M),O&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=O+nn)),X&&(oe={top:H.top+(re?F-Le:ze)+nn,left:H.left+(re?ze:F-Le)+nn,boxSizing:"border-box",position:"fixed"},oe[Os]=oe["max"+sa]=Math.ceil(H.width)+nn,oe[Fs]=oe["max"+Df]=Math.ceil(H.height)+nn,oe[pi]=oe[pi+Za]=oe[pi+ja]=oe[pi+Ja]=oe[pi+Ka]="0",oe[Jt]=z[Jt],oe[Jt+Za]=z[Jt+Za],oe[Jt+ja]=z[Jt+ja],oe[Jt+Ja]=z[Jt+Ja],oe[Jt+Ka]=z[Jt+Ka],G=mA(E,oe,R),Nn&&ne(0)),i?($e=i._initted,lh(1),i.render(i.duration(),!0,!0),Ye=de(M.a)-me+C+Rt,De=Math.abs(C-Ye)>1,X&&De&&G.splice(G.length-2,2),i.render(0,!0,!0),$e||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lh(0)):Ye=C,je&&(je.value?je.style["overflow"+M.a.toUpperCase()]=je.value:je.style.removeProperty("overflow-"+M.a));else if(d&&ne()&&!b)for(H=d.parentNode;H&&H!==Ut;)H._pinOffset&&(Le-=H._pinOffset,U-=H._pinOffset),H=H.parentNode;be&&be.forEach(function(Kt){return Kt.revert(!1,!0)}),L.start=Le,L.end=U,nt=We=Nn?le:ne(),!b&&!Nn&&(nt<le&&ne(le),L.scroll.rec=0),L.revert(!1,!0),ee=yn(),Z&&(j=-1,Z.restart(!0)),vn=0,i&&P&&(i._initted||fe)&&i.progress()!==fe&&i.progress(fe||0,!0).render(i.time(),!0,!0),(en||xe!==L.progress||b||g)&&(i&&!P&&i.totalProgress(b&&Le<-.001&&!xe?Se.utils.normalize(Le,U,0):xe,!0),L.progress=en||(nt-Le)/C===xe?0:xe),f&&_&&(J._pinOffset=Math.round(L.progress*Ye)),D&&D.invalidate(),isNaN(mt)||(mt-=Se.getProperty(k,M.p),xt-=Se.getProperty(Te,M.p),ul(k,M,mt),ul(At,M,mt-(He||0)),ul(Te,M,xt),ul(Be,M,xt-(He||0))),en&&!Nn&&L.update(),u&&!Nn&&!Re&&(Re=!0,u(L),Re=!1)}},L.getVelocity=function(){return(ne()-We)/(yn()-Ua)*1e3||0},L.endAnimation=function(){Ra(L.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||Ra(i,L.direction<0,1):Ra(i,i.reversed()))},L.labelToScroll=function(_e){return i&&i.labels&&(Le||L.refresh()||Le)+i.labels[_e]/i.duration()*C||0},L.getTrailing=function(_e){var Xe=rt.indexOf(L),Ce=L.direction>0?rt.slice(0,Xe).reverse():rt.slice(Xe+1);return(ti(_e)?Ce.filter(function(He){return He.vars.preventOverlaps===_e}):Ce).filter(function(He){return L.direction>0?He.end<=Le:He.start>=U})},L.update=function(_e,Xe,Ce){if(!(b&&!Ce&&!_e)){var He=Nn===!0?le:L.scroll(),Xt=_e?0:(He-Le)/C,it=Xt<0?0:Xt>1?1:Xt||0,Lt=L.progress,en,wt,Rt,gt,Kn,It,wn,T;if(Xe&&(We=nt,nt=b?ne():He,x&&(ft=Fe,Fe=i&&!P?i.totalProgress():it)),m&&f&&!vn&&!il&&yi&&(!it&&Le<He+(He-We)/(yn()-Ua)*m?it=1e-4:it===1&&U>He+(He-We)/(yn()-Ua)*m&&(it=.9999)),it!==Lt&&L.enabled){if(en=L.isActive=!!it&&it<1,wt=!!Lt&&Lt<1,It=en!==wt,Kn=It||!!it!=!!Lt,L.direction=it>Lt?1:-1,L.progress=it,Kn&&!vn&&(Rt=it&&!Lt?0:it===1?1:Lt===1?2:3,P&&(gt=!It&&q[Rt+1]!=="none"&&q[Rt+1]||q[Rt],T=i&&(gt==="complete"||gt==="reset"||gt in i))),y&&(It||T)&&(T||h||!i)&&(Bn(y)?y(L):L.getTrailing(y).forEach(function(F){return F.endAnimation()})),P||(D&&!vn&&!il?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",it,i._tTime/i._tDur):(D.vars.totalProgress=it,D.invalidate().restart())):i&&i.totalProgress(it,!!(vn&&(ee||_e)))),f){if(_e&&_&&(J.style[_+M.os2]=ie),!X)ce(Fa(me+Ye*it));else if(Kn){if(wn=!_e&&it>Lt&&U+1>He&&He+1>=ji(N,M),R)if(!_e&&(en||wn)){var O=vr(f,!0),z=He-Le;qm(f,Ut,O.top+(M===rn?z:0)+nn,O.left+(M===rn?0:z)+nn)}else qm(f,J);ko(en||wn?G:Q),De&&it<1&&en||ce(me+(it===1&&!wn?Ye:0))}}x&&!Ee.tween&&!vn&&!il&&Z.restart(!0),a&&(It||S&&it&&(it<1||!uh))&&mc(a.targets).forEach(function(F){return F.classList[en||S?"add":"remove"](a.className)}),o&&!P&&!_e&&o(L),Kn&&!vn?(P&&(T&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(L)),(It||!uh)&&(l&&It&&dh(L,l),$[Rt]&&dh(L,$[Rt]),S&&(it===1?L.kill(!1,1):$[Rt]=0),It||(Rt=it===1?1:3,$[Rt]&&dh(L,$[Rt]))),w&&!en&&Math.abs(L.getVelocity())>(Ba(w)?w:2500)&&(Ra(L.callbackAnimation),D?D.progress(1):Ra(i,gt==="reverse"?1:!it,1))):P&&o&&!vn&&o(L)}if(ye){var H=b?He/b.duration()*(b._caScrollDist||0):He;Ne(H+(k._isFlipped?1:0)),ye(H)}ke&&ke(-He/b.duration()*(b._caScrollDist||0))}},L.enable=function(_e,Xe){L.enabled||(L.enabled=!0,ln(N,"resize",ka),W||ln(N,"scroll",go),he&&ln(r,"refreshInit",he),_e!==!1&&(L.progress=xe=0,nt=We=j=ne()),Xe!==!1&&L.refresh())},L.getTween=function(_e){return _e&&Ee?Ee.tween:D},L.setPositions=function(_e,Xe,Ce,He){if(b){var Xt=b.scrollTrigger,it=b.duration(),Lt=Xt.end-Xt.start;_e=Xt.start+Lt*_e/it,Xe=Xt.start+Lt*Xe/it}L.refresh(!1,!1,{start:Bm(_e,Ce&&!!L._startClamp),end:Bm(Xe,Ce&&!!L._endClamp)},He),L.update()},L.adjustPinSpacing=function(_e){if(ae&&_e){var Xe=ae.indexOf(M.d)+1;ae[Xe]=parseFloat(ae[Xe])+_e+nn,ae[1]=parseFloat(ae[1])+_e+nn,ko(ae)}},L.disable=function(_e,Xe){if(L.enabled&&(_e!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Xe||D&&D.pause(),le=0,we&&(we.uncache=1),he&&cn(r,"refreshInit",he),Z&&(Z.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!W)){for(var Ce=rt.length;Ce--;)if(rt[Ce].scroller===N&&rt[Ce]!==L)return;cn(N,"resize",ka),W||cn(N,"scroll",go)}},L.kill=function(_e,Xe){L.disable(_e,Xe),D&&!Xe&&D.kill(),c&&delete Nd[c];var Ce=rt.indexOf(L);Ce>=0&&rt.splice(Ce,1),Ce===In&&wl>0&&In--,Ce=0,rt.forEach(function(He){return He.scroller===L.scroller&&(Ce=1)}),Ce||Nn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Xe||i.kill()),At&&[At,Be,k,Te].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),Qa===L&&(Qa=0),f&&(we&&(we.uncache=1),Ce=0,rt.forEach(function(He){return He.pin===f&&Ce++}),Ce||(we.spacer=0)),n.onKill&&n.onKill(L)},rt.push(L),L.enable(!1,!1),pt&&pt(L),i&&i.add&&!C){var Je=L.update;L.update=function(){L.update=Je,Le||U||L.refresh()},Se.delayedCall(.01,L.update),C=.01,Le=U=0}else L.refresh();f&&dA()},r.register=function(n){return vo||(Se=n||y0(),v0()&&window.document&&r.enable(),vo=Oa),vo},r.defaults=function(n){if(n)for(var i in n)al[i]=n[i];return al},r.disable=function(n,i){Oa=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),cn(ht,"wheel",go),cn(Bt,"scroll",go),clearInterval(nl),cn(Bt,"touchcancel",Vi),cn(Ut,"touchstart",Vi),sl(cn,Bt,"pointerdown,touchstart,mousedown",km),sl(cn,Bt,"pointerup,touchend,mouseup",zm),$l.kill(),rl(cn);for(var s=0;s<ot.length;s+=3)ol(cn,ot[s],ot[s+1]),ol(cn,ot[s],ot[s+2])},r.enable=function(){if(ht=window,Bt=document,Li=Bt.documentElement,Ut=Bt.body,Se&&(mc=Se.utils.toArray,Ya=Se.utils.clamp,Dd=Se.core.context||Vi,lh=Se.core.suppressOverwrites||Vi,Rf=ht.history.scrollRestoration||"auto",Ud=ht.pageYOffset,Se.core.globals("ScrollTrigger",r),Ut)){Oa=1,Bo=document.createElement("div"),Bo.style.height="100vh",Bo.style.position="absolute",C0(),sA(),jt.register(Se),r.isTouch=jt.isTouch,Vr=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ld=jt.isTouch===1,ln(ht,"wheel",go),p0=[ht,Bt,Li,Ut],Se.matchMedia?(r.matchMedia=function(c){var l=Se.matchMedia(),u;for(u in c)l.add(u,c[u]);return l},Se.addEventListener("matchMediaInit",function(){return Nf()}),Se.addEventListener("matchMediaRevert",function(){return w0()}),Se.addEventListener("matchMedia",function(){Ps(0,1),$s("matchMedia")}),Se.matchMedia("(orientation: portrait)",function(){return fh(),fh})):console.warn("Requires GSAP 3.11.0 or later"),fh(),ln(Bt,"scroll",go);var n=Ut.style,i=n.borderTopStyle,s=Se.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=vr(Ut),rn.m=Math.round(o.top+rn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),nl=setInterval(Gm,250),Se.delayedCall(.5,function(){return il=0}),ln(Bt,"touchcancel",Vi),ln(Ut,"touchstart",Vi),sl(ln,Bt,"pointerdown,touchstart,mousedown",km),sl(ln,Bt,"pointerup,touchend,mouseup",zm),Pd=Se.utils.checkPrefix("transform"),Rl.push(Pd),vo=yn(),$l=Se.delayedCall(.2,Ps).pause(),yo=[Bt,"visibilitychange",function(){var c=ht.innerWidth,l=ht.innerHeight;Bt.hidden?(Um=c,Om=l):(Um!==c||Om!==l)&&ka()},Bt,"DOMContentLoaded",Ps,ht,"load",Ps,ht,"resize",ka],rl(ln),rt.forEach(function(c){return c.enable(0,1)}),a=0;a<ot.length;a+=3)ol(cn,ot[a],ot[a+1]),ol(cn,ot[a],ot[a+2])}},r.config=function(n){"limitCallbacks"in n&&(uh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(nl)||(nl=i)&&setInterval(Gm,i),"ignoreMobileResize"in n&&(Ld=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rl(cn)||rl(ln,n.autoRefreshEvents||"none"),_0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),o=ot.indexOf(s),a=Ws(s);~o&&ot.splice(o,a?6:2),i&&(a?Qi.unshift(ht,i,Ut,i,Li,i):Qi.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?Vn(n):n).getBoundingClientRect(),a=o[s?Os:Fs]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Vn(n));var o=n.getBoundingClientRect(),a=o[s?Os:Fs],c=i==null?a/2:i in jl?jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+c)/ht.innerWidth:(o.top+c)/ht.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xs.killAll||[];Xs={},i.forEach(function(s){return s()})}},r}();Oe.version="3.12.5";Oe.saveStyles=function(r){return r?mc(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),Dd())}}):ei};Oe.revert=function(r,e){return Nf(!r,e)};Oe.create=function(r,e){return new Oe(r,e)};Oe.refresh=function(r){return r?ka():(vo||Oe.register())&&Ps(!0)};Oe.update=function(r){return++ot.cache&&Ar(r===!0?2:0)};Oe.clearScrollMemory=R0;Oe.maxScroll=function(r,e){return ji(r,e?Fn:rn)};Oe.getScrollFunc=function(r,e){return hs(Vn(r),e?Fn:rn)};Oe.getById=function(r){return Nd[r]};Oe.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Oe.isScrolling=function(){return!!yi};Oe.snapDirectional=If;Oe.addEventListener=function(r,e){var t=Xs[r]||(Xs[r]=[]);~t.indexOf(e)||t.push(e)};Oe.removeEventListener=function(r,e){var t=Xs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Oe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var h=[],d=[],f=Se.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Bn(s)&&(s=s(),ln(Oe,"refresh",function(){return s=e.batchMax()})),mc(r).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(Oe.create(l))}),t};var jm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},mh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===Li&&r(Ut,t)},hl={auto:1,scroll:1},gA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=yn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ut&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hl[(c=mi(s)).overflowY]||hl[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ws(s)&&(hl[(c=mi(s)).overflowY]||hl[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},L0=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&gA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(Bt,jt.eventTypes[0],Zm,!1,!0)},onDisable:function(){return cn(Bt,jt.eventTypes[0],Zm,!0)}})},xA=/(input|label|select|textarea)/i,Km,Zm=function(e){var t=xA.test(e.target.tagName);(t||Km)&&(e._gsapAllow=!0,Km=t)},vA=function(e){As(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=Vn(e.target)||Li,u=Se.core.globals().ScrollSmoother,h=u&&u.get(),d=Vr&&(e.content&&Vn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=hs(l,rn),_=hs(l,Fn),g=1,m=(jt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,p=0,v=Bn(i)?function(){return i(a)}:function(){return i||2.8},S,x,R=L0(l,e.type,!0,s),A=function(){return x=!1},b=Vi,w=Vi,y=function(){c=ji(l,rn),w=Ya(Vr?1:0,c),n&&(b=Ya(0,ji(l,Fn))),S=Bs},M=function(){d._gsap.y=Fa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var V=Fa(a.deltaY/2),te=w(f.v-V);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var L=Fa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ot.cache,Ar()}return!0}f.offset&&M(),x=!0},N,B,W,X,$=function(){y(),N.isActive()&&N.vars.scrollY>c&&(f()>c?N.progress(1)&&f(c):N.resetTo("scrollY",c))};return d&&Se.set(d,{y:"+=0"}),e.ignoreCheck=function(q){return Vr&&q.type==="touchmove"&&P()||g>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){x=!1;var q=g;g=Fa((ht.visualViewport&&ht.visualViewport.scale||1)/m),N.pause(),q!==g&&mh(l,g>1.01?!0:n?!1:"x"),B=_(),W=f(),y(),S=Bs},e.onRelease=e.onGestureStart=function(q,V){if(f.offset&&M(),!V)X.restart(!0);else{ot.cache++;var te=v(),L,he;n&&(L=_(),he=L+te*.05*-q.velocityX/.227,te*=jm(_,L,he,ji(l,Fn)),N.vars.scrollX=b(he)),L=f(),he=L+te*.05*-q.velocityY/.227,te*=jm(f,L,he,ji(l,rn)),N.vars.scrollY=w(he),N.invalidate().duration(te).play(.01),(Vr&&N.vars.scrollY>=c||L>=c-1)&&Se.to({},{onUpdate:$,duration:te})}o&&o(q)},e.onWheel=function(){N._ts&&N.pause(),yn()-p>1e3&&(S=0,p=yn())},e.onChange=function(q,V,te,L,he){if(Bs!==S&&y(),V&&n&&_(b(L[2]===V?B+(q.startX-q.x):_()+V-L[1])),te){f.offset&&M();var Ie=he[2]===te,tt=Ie?W+q.startY-q.y:f()+te-he[1],j=w(tt);Ie&&tt!==j&&(W+=j-tt),f(j)}(te||V)&&Ar()},e.onEnable=function(){mh(l,n?!1:"x"),Oe.addEventListener("refresh",$),ln(ht,"resize",$),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){mh(l,!0),cn(ht,"resize",$),Oe.removeEventListener("refresh",$),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=Vr,Vr&&!f()&&f(1),Vr&&Se.ticker.add(Vi),X=a._dc,N=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:P0(f,f(),function(){return N.pause()})},onUpdate:Ar,onComplete:X.vars.onComplete}),a};Oe.sort=function(r){return rt.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Oe.observe=function(r){return new jt(r)};Oe.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof jt?r:vA(r);return Dn&&Dn.target===e.target&&Dn.kill(),Ws(e.target)&&(Dn=e),e};Oe.core={_getVelocityProp:Cd,_inputObserver:L0,_scrollers:ot,_proxies:Qi,bridge:{ss:function(){yi||$s("scrollStart"),yi=yn()},ref:function(){return vn}}};y0()&&Se.registerPlugin(Oe);const Jm={chispa:'<path d="M12 3v5M12 16v5M3 12h5M16 12h5M7.5 7.5l2 2M14.5 14.5l2 2M16.5 7.5l-2 2M9.5 14.5l-2 2"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',cerrar:'<path d="M6 6l12 12M18 6L6 18"/>',abajo:'<path d="M12 5v14M6 13l6 6 6-6"/>',externo:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',izq:'<path d="M15 5l-7 7 7 7"/>',der:'<path d="M9 5l7 7-7 7"/>',flecha:'<path d="M4 12h16M14 6l6 6-6 6"/>',cruce:'<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',cubo3d:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',interferencia:'<path d="M3 9h18M3 15h18"/><path d="M9 3v18"/><circle cx="9" cy="9" r="2.6"/>',rfi:'<path d="M4 5h16v11H9l-5 4z"/><path d="M10 8.5a2 2 0 1 1 2.8 1.8c-.6.3-.8.7-.8 1.2M12 13.6v.1"/>',cambios:'<path d="M4 9a8 8 0 0 1 14-3l2 2M20 15a8 8 0 0 1-14 3l-2-2"/><path d="M20 4v4h-4M4 20v-4h4"/>',versiones:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 17l9 5 9-5"/>',ocultas:'<path d="M3 3l18 18"/><path d="M10.6 6.2A9 9 0 0 1 21 12a14 14 0 0 1-2.4 3.2M6.2 7.6A14 14 0 0 0 3 12a9 9 0 0 0 12.7 5.3"/><path d="M9.9 10a3 3 0 0 0 4.2 4.2"/>',alturas:'<path d="M4 3h16M4 21h16"/><path d="M12 6v12M9 9l3-3 3 3M9 15l3 3 3-3"/>',pasos:'<path d="M10 3v18M14 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="2.5"/>',mantenimiento:'<path d="M14.5 6.5a4 4 0 0 0 5 5L11 20a2.1 2.1 0 0 1-3-3l8.5-8.5a4 4 0 0 0-2-2z"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',constructibilidad:'<path d="M4 21V9l6-5 6 5"/><path d="M10 4v17M16 9h5v12M4 13h6M4 17h6"/>',registros:'<path d="M8 4h8v3H8z"/><path d="M6 5H5v16h14V5h-1"/><path d="M8 11h8M8 15h5"/>',archivo:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',coordenadas:'<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',alerta:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.1"/>',nota:'<path d="M5 4h14v12l-4 4H5z"/><path d="M15 20v-4h4M8 9h8M8 13h5"/>',manual:'<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 1 2-2h12v4"/>',garantia:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',etiqueta:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.4"/>',ubicacion:'<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',calendario:'<path d="M4 6h16v15H4z"/><path d="M4 10h16M8 3v5M16 3v5"/>',plano:'<path d="M3 5l6-2 6 2 6-2v16l-6 2-6-2-6 2z"/><path d="M9 3v16M15 5v16"/>',capas:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/>',casco:'<path d="M3 17h18M5 17a7 7 0 0 1 14 0"/><path d="M10 10V6h4v4"/><path d="M4 17v2h16v-2"/>',gemelo:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/><circle cx="12" cy="12" r="1.6"/>',escaner:'<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><path d="M4 12h16"/>',diseno:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',red:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M6 6.5l3.6 3.6M18 6.5l-3.6 3.6M6 17.5l3.6-3.6M18 17.5l-3.6-3.6"/>',propietario:'<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M9 10h.1M15 10h.1"/>',arquitectura:'<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-5h6v5M9 11h2M13 11h2"/>',estructura:'<path d="M3 5h18M3 19h18"/><path d="M6 5v14M18 5v14M12 5v14"/>',hidro:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>',rci:'<path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-10-2 2-3 3.5-3 6-1-1-1.5-2-1.5-3C7 10 6 12.5 6 15a6 6 0 0 0 6 6z"/>',electrica:'<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',mecanica:'<circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-6 4-6 2 0 2 3 0 5M14 12c4 0 6 1 6 4 0 2-3 2-5 0M12 14c0 4-1 6-4 6-2 0-2-3 0-5M10 12c-4 0-6-1-6-4 0-2 3-2 5 0"/>'};function rs(r,e=""){const t=Jm[r]??Jm.chispa;return`<svg class="ico ${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}function yA(r=document){r.querySelectorAll("i[data-i]").forEach(e=>{e.outerHTML=rs(e.dataset.i,e.className)}),r.querySelectorAll("svg.ico").forEach(e=>e.querySelectorAll("path, circle").forEach(t=>t.setAttribute("pathLength","1")))}se.registerPlugin(Oe);const Pt=(r,e=document)=>e.querySelector(r),qe=(r,e=document)=>[...e.querySelectorAll(r)],du=matchMedia("(prefers-reduced-motion: reduce)").matches;function MA(r){if(r.dataset.partido)return;r.dataset.partido="1";const e=t=>{[...t.childNodes].forEach(n=>{if(n.nodeType===3){const i=document.createDocumentFragment();(n.textContent??"").split(/(\s+)/).forEach(s=>{if(s)if(/^\s+$/.test(s))i.appendChild(document.createTextNode(" "));else{const o=document.createElement("span");o.className="w",o.textContent=s,i.appendChild(o)}}),n.replaceWith(i)}else n.nodeType===1&&n.tagName!=="BR"&&e(n)})};e(r)}function SA(r,e=1.6,t=0){const n=+r.dataset.n,i=r.dataset.suf??"",s={v:0},o=a=>r.dataset.fmt==="m2"?Math.round(a).toLocaleString("es-CO")+" m²":Math.round(a).toLocaleString("es-CO")+i;se.fromTo(s,{v:0},{v:n,duration:e,delay:t,ease:"power2.out",onUpdate:()=>r.textContent=o(s.v)})}function bA(r,e,t){return Array.from({length:r},(n,i)=>{const s=i*2.399963+.6,o=.45+.55*((i+1)/r);return{x:Math.cos(s)*e*o,y:Math.sin(s)*t*o}})}function EA(r){const e=se.timeline({defaults:{ease:"power3.out"}});se.set(qe("[data-a]",r).filter(i=>!["chips","pills"].includes(i.dataset.a)),{clearProps:"transform,filter"});let t=0;qe('[data-a="up"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,y:36,filter:"blur(8px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:1},.1+s*.12)),qe('[data-a="words"]',r).forEach(i=>{MA(i),se.set(i,{autoAlpha:1}),e.fromTo(qe(".w",i),{autoAlpha:0,yPercent:70,rotateX:-70,filter:"blur(14px)",transformPerspective:600},{autoAlpha:1,yPercent:0,rotateX:0,filter:"blur(0px)",duration:1.1,stagger:.07},.05),t=Math.max(t,.05+qe(".w",i).length*.07+.6)});const n=Pt('[data-a="strike"]',r);if(n){e.fromTo(n,{autoAlpha:0,x:-30,filter:"blur(10px)"},{autoAlpha:1,x:0,filter:"blur(0px)",duration:.8},t),e.fromTo(n,{"--s":0},{"--s":1,duration:.6,ease:"power2.inOut"},t+.9),e.to(n,{opacity:.4,duration:.5},t+1.4);const i=Pt('[data-a="deblur"]',r);i&&e.fromTo(i,{autoAlpha:0,x:60,scale:1.25,filter:"blur(22px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:1.1},t+1.5)}return qe('[data-a="fly"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,z:-500,y:140,rotateX:38,rotateY:s%2?14:-14,filter:"blur(14px)",transformPerspective:1e3},{autoAlpha:1,z:0,y:0,rotateX:0,rotateY:0,filter:"blur(0px)",duration:1.3},.35+s*.14)),qe('[data-a="flip"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,rotateY:-95,x:-80,z:-300,transformPerspective:1400,transformOrigin:"left center"},{autoAlpha:1,rotateY:0,x:0,z:0,duration:1.2,ease:"power4.out"},.4+s*.22)),qe('[data-a="tilt"]',r).forEach(i=>e.fromTo(i,{autoAlpha:0,rotateX:45,rotateY:-25,y:160,z:-300,transformPerspective:1600},{autoAlpha:1,rotateX:innerWidth<900?0:6,rotateY:innerWidth<900?0:-7,y:0,z:0,duration:1.6,ease:"power3.out"},.3)),qe('[data-a="msg"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,x:i.classList.contains("der")?70:-70,scale:.85,filter:"blur(8px)"},{autoAlpha:1,x:0,scale:1,filter:"blur(0px)",duration:.7,ease:"back.out(1.6)"},1.4+s*.75)),qe('[data-a="stagger"]',r).forEach((i,s)=>{se.set(i,{autoAlpha:1}),e.fromTo([...i.children],{autoAlpha:0,y:26,x:-16,scale:.9,filter:"blur(8px)"},{autoAlpha:1,y:0,x:0,scale:1,filter:"blur(0px)",duration:.7,stagger:.07,ease:"back.out(1.5)"},.5+s*.15)}),qe('[data-a="pop"]',r).forEach((i,s)=>e.fromTo(i,{autoAlpha:0,scale:.6,y:20,filter:"blur(10px)"},{autoAlpha:1,scale:1,y:0,filter:"blur(0px)",duration:.8,ease:"back.out(1.8)"},.55+s*.12)),qe('[data-a="flujo"]',r).forEach(i=>{const s=qe("li",i);s.forEach(o=>o.classList.remove("on")),se.set(i,{autoAlpha:1,"--p":0}),e.to(i,{"--p":1,duration:.5*s.length,ease:"none"},.6),s.forEach((o,a)=>{e.fromTo(o,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.6},.6+a*.5),e.fromTo(o,{"--s":0},{"--s":1,duration:.5,ease:"back.out(3)"},.6+a*.5),e.call(()=>o.classList.add("on"),[],.8+a*.5)})}),qe('[data-a="diag"]',r).forEach(i=>{se.set(i,{autoAlpha:1});const s=qe(".nd",i),o=qe(".ln.r",i),a=qe(".ln.o",i);e.fromTo(qe("text.dt, .sep",i),{autoAlpha:0},{autoAlpha:1,duration:.6,stagger:.15},.3),e.fromTo(s,{autoAlpha:0,scale:.4,transformOrigin:"50% 50%"},{autoAlpha:1,scale:1,duration:.5,stagger:.05,ease:"back.out(2)"},.5),[...o,...a].forEach(c=>{const l=c.getTotalLength();se.set(c,{strokeDasharray:l,strokeDashoffset:l})}),e.to(o,{strokeDashoffset:0,duration:.9,stagger:.06,ease:"power2.inOut"},1),e.to(a,{strokeDashoffset:0,duration:.8,stagger:.08,ease:"power2.out"},1.9),e.fromTo(qe("figcaption span",i),{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.6,stagger:.2},2.5),e.call(()=>AA(i),[],2.8)}),qe('[data-a="gantt"]',r).forEach(i=>{se.set(i,{autoAlpha:1}),e.fromTo(qe(".g-meses span",i),{autoAlpha:0,y:-10},{autoAlpha:1,y:0,duration:.4,stagger:.06},.3),qe(".g-fila",i).forEach((s,o)=>{e.fromTo(s,{autoAlpha:0},{autoAlpha:1,duration:.4},.6+o*.25),e.fromTo(Pt(".g-et",s),{autoAlpha:0,x:-24},{autoAlpha:1,x:0,duration:.6},.6+o*.25),e.fromTo(Pt(".g-bar",s),{scaleX:0},{scaleX:1,duration:1,ease:"power3.inOut"},.8+o*.25),e.fromTo(Pt(".g-bar span",s),{autoAlpha:0},{autoAlpha:1,duration:.4},1.6+o*.25)})}),qe('[data-a="hub"]',r).forEach(i=>{se.set(i,{autoAlpha:1});const s=innerWidth<900,o=Pt(".n0",i),a=qe(".actor:not(.n0)",i),c=s?{xPercent:0,yPercent:0,x:0,y:0}:{xPercent:-50,yPercent:-50,x:0,y:0};e.fromTo(o,{...c,autoAlpha:0,scale:.6},{...c,autoAlpha:1,scale:1,duration:.7,ease:"back.out(2)"},.4),qe(".hub-l path",i).forEach(l=>{const u=l.getTotalLength();se.set(l,{strokeDasharray:u,strokeDashoffset:u})}),e.to(qe(".hub-l path",i),{strokeDashoffset:0,duration:.8,stagger:.12,ease:"power2.out"},.9),e.fromTo(a,{...c,autoAlpha:0,scale:.85},{...c,autoAlpha:1,scale:1,duration:.6,stagger:.12,ease:"power3.out"},1.3)}),qe('[data-a="arbol"]',r).forEach(i=>{se.set(i,{autoAlpha:1,"--p":0,"--q":0}),e.fromTo(Pt(".raiz",i),{autoAlpha:0,x:-30},{autoAlpha:1,x:0,duration:.7},.4),e.to(Pt("ul",i),{"--q":1,duration:.4,ease:"power2.out"},.9),e.to(Pt("ul",i),{"--p":1,duration:.7,ease:"power2.inOut"},1.2),e.fromTo(qe("li",i),{autoAlpha:0,x:-14},{autoAlpha:1,x:0,duration:.45,stagger:.12},1.5)}),qe(".etapa",r).forEach((i,s)=>e.fromTo([...i.children],{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.5,stagger:.08},.9+s*.22)),qe('[data-a="chips"], [data-a="pills"]',r).forEach(i=>{const s=qe(":scope > *",i),o=i.clientWidth,a=i.clientHeight;if(innerWidth<900){s.forEach(l=>se.killTweensOf(l)),e.fromTo(s,{xPercent:0,yPercent:0,x:0,y:28,z:0,scale:.7,autoAlpha:0,filter:"blur(10px)"},{y:0,scale:1,autoAlpha:1,filter:"blur(0px)",duration:.7,stagger:.06,ease:"back.out(1.6)"},.5);return}const c=bA(s.length,o*.46,a*.44);s.forEach((l,u)=>{se.killTweensOf(l),e.fromTo(l,{xPercent:-50,yPercent:-50,x:0,y:0,z:-600,scale:.2,autoAlpha:0,filter:"blur(16px)"},{x:c[u].x,y:c[u].y,z:0,scale:1,autoAlpha:1,filter:"blur(0px)",duration:1.3,ease:"expo.out",onComplete:()=>{du||se.to(l,{y:c[u].y+(u%2?10:-10),x:c[u].x+(u%3?6:-6),duration:2.6+u%4*.5,yoyo:!0,repeat:-1,ease:"sine.inOut"})}},.5+u*.07)})}),qe("[data-n]",r).forEach(i=>e.call(()=>SA(i,i.closest(".leyendo")?2.4:1.6),[],.6)),qe(".leyendo",r).forEach(i=>{e.fromTo(Pt(".barra i",i),{width:"0%"},{width:"100%",duration:2.4,ease:"power2.out"},.6);const s=qe(".checks span",i);s.forEach(o=>o.classList.remove("ok")),s.forEach((o,a)=>e.call(()=>o.classList.add("ok"),[],.9+a*(1.8/s.length)))}),e}const _h=["Arq.","Estr.","Hidro","RCI","Eléc.","Mec."],Qm=["arquitectura","estructura","hidro","rci","electrica","mecanica"],e_=["#D5BE91","#9fb6cc","#3d8bff","#ff7a2f","#2fd0b5","#c3cbd4"];function TA(){qe('[data-a="diag"]').forEach(r=>{r.querySelector("svg").setAttribute("viewBox","0 0 900 290");const e=(l,u,h,d,f,_=!1)=>{const g=_?32:24,m=_?28:22,p=rs(d).replace('<svg class="ico "',`<svg class="ic" x="${-m/2}" y="${-m/2}" width="${m}" height="${m}" style="color:${_?"#001b3b":f}"`);return`<g class="nd${_?" c":""}" transform="translate(${l},${u})"><circle r="${g}" style="--c:${f}"/>${p}<text y="${g+16}">${h}</text></g>`},t=[[70,70],[330,60],[200,125],[55,200],[345,205],[215,235]];let n="";t.forEach((l,u)=>t.forEach((h,d)=>{d>u&&(u+d)%2&&(n+=`<path class="ln r" d="M${l[0]} ${l[1]} L${h[0]} ${h[1]}"/>`)}));const i=[700,152],s=_h.map((l,u)=>{const h=-Math.PI/2+u*Math.PI*2/6;return[i[0]+Math.cos(h)*190,i[1]+Math.sin(h)*90]}),o=s.map(l=>`<path class="ln o" d="M${l[0]} ${l[1]} L${i[0]} ${i[1]}"/>`).join(""),a=r.querySelector(".nodos-a"),c=r.querySelector(".nodos-b");if(a.innerHTML=n+t.map((l,u)=>e(l[0],l[1],_h[u],Qm[u],e_[u])).join(""),c.innerHTML=o+s.map((l,u)=>e(l[0],l[1],_h[u],Qm[u],e_[u])).join("")+e(i[0],i[1],"BIM","cubo3d","#D5BE91",!0),innerWidth<900){const l=r.querySelector("svg");l.setAttribute("viewBox","-15 0 480 590");const[u,h]=[...l.querySelectorAll("text.dt")];h.setAttribute("x","250"),h.setAttribute("y","318"),c.setAttribute("transform","translate(-450 300)"),l.querySelector(".sep").setAttribute("d","M40 292 H410")}})}function AA(r){if(du||r.dataset.pulsos)return;r.dataset.pulsos="1";const e=r.querySelector("svg");qe(".ln.o",r).forEach((t,n)=>{const i=t,s=i.getTotalLength(),o=document.createElementNS("http://www.w3.org/2000/svg","circle");o.setAttribute("r","3"),o.setAttribute("class","pulso-dot"),o.setAttribute("opacity","0"),e.appendChild(o);const a={t:0};se.to(a,{t:1,duration:1.6,repeat:-1,delay:n*.27,ease:"power1.in",repeatDelay:.6,onUpdate:()=>{const c=i.getPointAtLength(a.t*s);o.setAttribute("cx",String(c.x)),o.setAttribute("cy",String(c.y)),o.setAttribute("opacity",String(a.t<.9?1:(1-a.t)*10))}})})}function wA(){TA(),qe("[data-escena]").forEach(r=>{const e=qe("[data-a]",r).filter(o=>!["words","chips","pills"].includes(o.dataset.a));se.set(e,{autoAlpha:0});let t=null;const n=()=>{t==null||t.kill(),t=EA(r)},i=o=>{t==null||t.kill(),se.to(qe("[data-a]",r).filter(a=>!["chips","pills"].includes(a.dataset.a)),{autoAlpha:0,y:-40*o,filter:"blur(10px)",duration:.5,ease:"power2.in",overwrite:"auto"})};r.dataset.escena==="hero"&&setTimeout(n,500);const s=r.dataset.escena==="capas";Oe.create({trigger:r,start:s?"top 40%":"top 68%",end:s?"bottom 60%":"bottom 32%",onEnter:n,onEnterBack:n,onLeave:()=>i(1),onLeaveBack:()=>i(-1)})}),RA(),se.from("#top > *",{autoAlpha:0,y:-24,stagger:.1,duration:.9,ease:"power3.out",delay:.3,clearProps:"opacity,visibility,transform"}),se.from("#dock",{autoAlpha:0,y:60,scale:.9,duration:1,ease:"back.out(1.6)",delay:.8}),se.fromTo("#capas .capa",{autoAlpha:0,y:14},{autoAlpha:1,y:0,stagger:.07,duration:.5,delay:1.2,clearProps:"opacity,visibility,transform"})}function RA(){if(du||matchMedia("(hover: none)").matches)return;const r=".tcapa, .grafico, .actor, .g-bar, .flujo li, .arbol .raiz, .frente .habs span, .alerta";document.addEventListener("pointermove",e=>{const t=e.target.closest(r);if(qe(r).forEach(a=>{a!==t&&a.dataset.inclinada&&(delete a.dataset.inclinada,se.to(a,{rotateX:0,rotateY:0,"--gx":"50%","--gy":"-20%",duration:.7,ease:"power3.out"}))}),!t)return;const n=t.getBoundingClientRect(),i=(e.clientX-n.left)/n.width-.5,s=(e.clientY-n.top)/n.height-.5,o=t.classList.contains("grafico")?3:7;t.dataset.inclinada="1",se.to(t,{rotateY:i*o,rotateX:-s*o,transformPerspective:900,"--gx":`${(i+.5)*100}%`,"--gy":`${(s+.5)*100}%`,duration:.5,ease:"power2.out"})})}function CA(){let r=!1;const e=a=>"$"+Math.round(a*1e6).toLocaleString("es-CO"),t={total:0,iva:0},n=Pt("#barras"),i=["Implementación, BEP y requisitos BIM","Coordinación de diseños · 2 meses","Acompañamiento BIM en obra","Cierre as-built y gemelo digital"];n.innerHTML=["A","B","C","D"].map((a,c)=>`<div class="barra-et"><b><small>Etapa</small>${a}</b><div class="nom"><em>${i[c]}</em><div class="t"><i></i></div></div><span>—</span></div>`).join("");const s=Pt("#curva"),o=(a=!0)=>{const c=+Pt("#rMeses").value,l=r?13.8:23,u=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct"];Pt("#vMeses").textContent=`${c} meses · feb – ${u[c]} 2027`;const h=[33,47,c*l,31],d=h.reduce((w,y)=>w+y,0);se.to(t,{total:d,iva:d*1.19,duration:.8,ease:"power2.out",onUpdate:()=>{Pt("#oTotal").textContent=e(t.total),Pt("#oIva").textContent=e(t.iva)}});const f=23*9;Pt(".barra-et:nth-child(3) em",n).textContent=`Acompañamiento BIM en obra · ${c} meses${r?" (−40%)":""}`,qe(".barra-et",n).forEach((w,y)=>{se.to(Pt("i",w),{width:100*h[y]/f+"%",duration:a?1:0,ease:"power3.out",delay:a?y*.08:0}),Pt("span",w).textContent=e(h[y])});const _=w=>{const y=[0,33];for(let M=1;M<=c;M++)y.push(y[y.length-1]+w+(M<=2?23.5:0)+(M===c?31:0));return y},g=600,m=230,p=c+2,v=340,S=w=>w.map((y,M)=>`${M?"L":"M"}${M/(p-1)*g},${m-y/v*m}`).join(" "),x=_(23),R=_(13.8);s.innerHTML=`
      <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".35"/><stop offset="1" stop-color="#D5BE91" stop-opacity="0"/></linearGradient></defs>
      ${[100,200,300].map(w=>`<line x1="0" x2="${g}" y1="${m-w/v*m}" y2="${m-w/v*m}" stroke="rgba(220,229,236,.08)"/><text x="${g}" y="${m-w/v*m-6}" text-anchor="end">$${w} M</text>`).join("")}
      <path d="${S(r?R:x)} L${g},${m} L0,${m} Z" fill="url(#gA)" class="area"/>
      <path d="${S(x)}" fill="none" stroke="${r?"rgba(220,229,236,.3)":"#D5BE91"}" stroke-width="${r?1.5:3}" class="ln"/>
      <path d="${S(R)}" fill="none" stroke="${r?"#D5BE91":"rgba(220,229,236,.3)"}" stroke-width="${r?3:1.5}" stroke-dasharray="${r?"":"5 6"}" class="ln2"/>
      <text x="6" y="${m+22}">Inicio · ene 2027</text><text x="${g}" y="${m+22}" text-anchor="end">Entrega · ${u[c]} 2027</text>`;const A=s.querySelector(".ln"),b=A.getTotalLength();a&&(se.fromTo(A,{strokeDasharray:b,strokeDashoffset:b},{strokeDashoffset:0,duration:1.8,ease:"power2.inOut",onComplete:()=>{r||(A.style.strokeDasharray="")}}),se.fromTo(s.querySelector(".area"),{opacity:0},{opacity:1,duration:1.2,delay:.8}))};Pt("#rMeses").addEventListener("input",()=>o(!1)),Pt("#segModo").addEventListener("click",a=>{const c=a.target.closest("button");c&&(r=c.dataset.m==="int",qe("#segModo button").forEach(l=>l.classList.toggle("on",l===c)),o(!0))}),o(!1),Oe.create({trigger:'[data-escena="honorarios"]',start:"top 60%",onEnter:()=>o(!0),onEnterBack:()=>o(!0)})}const PA=[{f:"Frente 1",s:["214","215","216","217"],c:"1 JS + 3 estándar"},{f:"Frente 2",s:["225","218","219","220"],c:"1 JS + 3 estándar"},{f:"Frente 3",s:["223","222","224","221"],c:"3 JS + 1 estándar"}],LA=[["01 sep","Inicio real","Entrega del piso e inspecciones preliminares en las doce habitaciones."],["03 sep","Inicio flujo productivo","Cuadrillas civiles, plomeros y eléctricos circulan por habitaciones."],["21 sep","Control de redes","Cada baño con redes y pruebas liberadas antes de autorizar enchapes."],["05 oct","Control de acabados","Enchape terminado antes de cielos RH y dilatación perimetral."],["31 oct","Cierre físico del piso","Pruebas, punch list, aseo y dossier terminados."],["02 nov","Entrega formal conjunta","Recepción consolidada del piso completo."]];function DA(){Pt("#frentes").innerHTML=PA.map(i=>`<div class="frente"><b>${i.f}</b><div class="habs">${i.s.map(s=>`<span>${s}</span>`).join("<em>"+rs("flecha")+"</em>")}</div></div>`).join(""),Pt("#hitos").innerHTML='<i class="traz"></i>'+LA.map(([i,s,o])=>`<div class="hito"><time>${i} · 2026</time><b>${s}</b><p>${o}</p></div>`).join("");const r=()=>{const i=se.timeline({delay:.5});i.fromTo(".frente",{autoAlpha:0,x:-60,rotateY:25,transformPerspective:800},{autoAlpha:1,x:0,rotateY:0,stagger:.15,duration:.9,ease:"power3.out"},0),i.fromTo(".frente .habs span",{autoAlpha:0,scale:.4},{autoAlpha:1,scale:1,stagger:.04,duration:.4,ease:"back.out(2)"},.4),i.fromTo(".eje .traz",{height:0},{height:"calc(100% - 12px)",duration:2.6,ease:"power1.inOut"},.6),i.fromTo(".hito",{autoAlpha:0,x:40,filter:"blur(6px)"},{autoAlpha:1,x:0,filter:"blur(0px)",stagger:.4,duration:.6},.7),i.call(n,[],1.6)};let e=0,t=0;const n=()=>{t||du||(t=window.setInterval(()=>{e=(e+1)%4,document.querySelectorAll(".frente").forEach(i=>i.querySelectorAll(".habs span").forEach((s,o)=>s.classList.toggle("act",o===e)))},1100))};se.set(".hito, .frente",{autoAlpha:0}),Oe.create({trigger:'[data-escena="obra"]',start:"top 65%",onEnter:r,onEnterBack:r})}function IA(){const r=Pt("#resp"),e=qe(".hub-l path"),t=qe(".actor"),n=i=>{t.forEach(o=>o.classList.toggle("on",o===i));const s=["n1","n2","n3","n4"].findIndex(o=>i.classList.contains(o));e.forEach((o,a)=>o.classList.toggle("on",a===s||s<0)),s>=0&&se.fromTo(e[s],{strokeDashoffset:e[s].getTotalLength()},{strokeDashoffset:0,duration:.6,ease:"power2.out"}),se.fromTo(i,{scale:.94},{scale:1,duration:.5,ease:"back.out(3)"}),se.to(r,{autoAlpha:0,y:10,duration:.2,onComplete:()=>{Pt("small",r).textContent=i.textContent.trim(),Pt("p",r).textContent=i.dataset.r,se.fromTo(Pt("p",r),{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:.7,ease:"power2.out"}),se.to(r,{autoAlpha:1,y:0,duration:.4})}})};t.forEach(i=>{i.addEventListener("click",()=>n(i)),i.addEventListener("pointerenter",()=>{matchMedia("(hover: hover)").matches&&n(i)})})}se.registerPlugin(Oe);const Pl=["214","215","216","217","218","219","220","221","222","223","224","225"],NA=["215","216","217","218","219","220","221","222"],gh="https://alejagoguti-cpu.github.io/planosfinales/assets/planos/",Ss={arq:{nombre:"Arquitectónico",color:"#D5BE91",lam:Pl.flatMap(r=>{const e=gh+`arquitectonico/HLF-${r}-arquitectonico.pdf`;return NA.includes(r)?[{h:r,f:`arq-${r}-presentacion`,t:"Planta, sección y 3D",pdf:e},{h:r,f:`arq-${r}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e}]:[{h:r,f:`arq-${r}-1`,t:"Planta arquitectónica y amoblamiento",pdf:e},{h:r,f:`arq-${r}-2`,t:"Pisos, enchapes y cielos",pdf:e}]})},agua:{nombre:"Agua fría y caliente",color:"#3d8bff",lam:Pl.map(r=>({h:r,f:`agu-${r}-1`,t:"Red de agua fría y caliente · planta, axonometría y detalles",pdf:gh+`agua/HLF-${r}-agua.pdf`}))},san:{nombre:"Desagües",color:"#c08a52",lam:Pl.map(r=>({h:r,f:`san-${r}-1`,t:"Red sanitaria (desagües) · planta, axonometría y detalles",pdf:gh+`desagues/HLF-${r}-desagues.pdf`}))}};function UA(r){const e=document.getElementById("pista"),t=document.getElementById("habsCarrusel"),n=document.getElementById("infoLamina"),i=document.getElementById("lightbox"),s=document.getElementById("tabsPlanos");s.innerHTML=Object.keys(Ss).map(b=>`<button data-s="${b}" style="--c:${Ss[b].color}" class="${b==="arq"?"on":""}"><i></i>${Ss[b].nombre}<small>${Ss[b].lam.length}</small></button>`).join(""),t.innerHTML=Pl.map(b=>`<button data-h="${b}">${b}</button>`).join("");let o="arq",a=Ss.arq.lam,c=[];const l=()=>{e.innerHTML=a.map((b,w)=>`<figure class="lamina" data-i="${w}" style="--c:${Ss[o].color}"><img data-src="planos/${b.f}-t.webp" alt="Habitación ${b.h} · ${b.t}" draggable="false" /><figcaption><b>${b.h}</b>${b.t}</figcaption></figure>`).join(""),c=[...e.querySelectorAll(".lamina")]};l();let u=0,h,d=!1;s.addEventListener("click",b=>{var P;const w=b.target.closest("button");if(!w||w.dataset.s===o)return;const y=w.dataset.s,M=(P=a[u])==null?void 0:P.h;s.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N===w)),clearInterval(h),se.to(c,{autoAlpha:0,rotateX:-70,y:160,z:-500,duration:.45,stagger:.012,ease:"power2.in",overwrite:!0,onComplete:()=>{o=y,a=Ss[o].lam,l(),u=Math.max(0,a.findIndex(N=>N.h===M)),R(),m()}}),r==null||r(y)});const f=b=>{var y;const w=(y=c[(b+a.length)%a.length])==null?void 0:y.querySelector("img");w&&w.dataset.src&&(w.src=w.dataset.src,delete w.dataset.src)};function _(b=.9){const w=a.length,y=e.clientWidth,M=Math.min(300,y*.3);c.forEach((N,B)=>{let W=B-u;W>w/2&&(W-=w),W<-w/2&&(W+=w);const X=Math.abs(W);X<=3&&f(B),se.to(N,{x:W*M*(X>1?.92:1),z:-X*220,rotateY:W*-28,scale:X===0?1:.86,autoAlpha:X>3?0:1-X*.22,filter:`blur(${X>1?(X-1)*2:0}px) brightness(${X===0?1:.7})`,zIndex:100-X,duration:b,ease:"power3.out",overwrite:"auto"}),N.classList.toggle("on",X===0)});const P=a[u];t.querySelectorAll("button").forEach(N=>N.classList.toggle("on",N.dataset.h===P.h)),se.fromTo(n,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.5}),n.innerHTML=`<b>Habitación ${P.h}</b><span>${P.t}</span><span class="num">${String(u+1).padStart(2,"0")} / ${a.length}</span><a href="${P.pdf}" target="_blank" rel="noopener">PDF ${rs("externo")}</a>`}const g=b=>{u=(b+a.length)%a.length,_(),m()},m=()=>{clearInterval(h),d&&(h=window.setInterval(()=>{u=(u+1)%a.length,_(1.1)},3800))};document.getElementById("cPrev").addEventListener("click",()=>g(u-1)),document.getElementById("cNext").addEventListener("click",()=>g(u+1)),t.addEventListener("click",b=>{const w=b.target.closest("button");w&&g(a.findIndex(y=>y.h===w.dataset.h))}),e.addEventListener("click",b=>{const w=b.target.closest(".lamina");if(!w)return;const y=+w.dataset.i;if(y!==u)return g(y);S(y)});let p=0,v=!1;e.addEventListener("pointerdown",b=>{p=b.clientX,v=!0}),addEventListener("pointerup",b=>{if(!v)return;v=!1;const w=b.clientX-p;Math.abs(w)>50&&g(u+(w<0?1:-1))}),e.addEventListener("mouseenter",()=>clearInterval(h)),e.addEventListener("mouseleave",m),addEventListener("keydown",b=>{if(i.classList.contains("on")){b.key==="Escape"&&x(),b.key==="ArrowRight"&&S(u=(u+1)%a.length),b.key==="ArrowLeft"&&S(u=(u-1+a.length)%a.length);return}d&&(b.key==="ArrowRight"&&g(u+1),b.key==="ArrowLeft"&&g(u-1))});function S(b){const w=a[b];i.innerHTML=`<div class="lb-top"><b>Habitación ${w.h}</b><span>${w.t}</span><a href="${w.pdf}" target="_blank" rel="noopener">Abrir PDF ${rs("externo")}</a><button class="lb-x" aria-label="Cerrar">${rs("cerrar")}</button></div><div class="lb-img"><img src="planos/${w.f}-t.webp" alt="" /></div>`;const y=i.querySelector("img"),M=new Image;M.onload=()=>y.src=M.src,M.src=`planos/${w.f}.webp`,i.classList.add("on"),clearInterval(h),se.fromTo(i.querySelector(".lb-img"),{scale:.7,rotateX:25,autoAlpha:0,transformPerspective:1200},{scale:1,rotateX:0,autoAlpha:1,duration:.7,ease:"power3.out"}),i.querySelector(".lb-x").addEventListener("click",x);let P=!1;y.addEventListener("click",N=>{P=!P;const B=y.getBoundingClientRect();y.style.transformOrigin=`${(N.clientX-B.left)/B.width*100}% ${(N.clientY-B.top)/B.height*100}%`,se.to(y,{scale:P?2.6:1,duration:.6,ease:"power3.inOut"})})}function x(){i.classList.remove("on"),m(),_()}i.addEventListener("click",b=>{b.target===i&&x()}),addEventListener("resize",()=>_(0)),se.set(c,{autoAlpha:0});const R=()=>{c.forEach((b,w)=>{let y=w-u;y>a.length/2&&(y-=a.length),Math.abs(y)<=3&&f(w)}),se.fromTo(c,{x:0,y:0,z:-1400,rotateY:0,rotateX:60,autoAlpha:0,scale:.6},{x:0,z:-600,rotateX:0,autoAlpha:.9,scale:.7,duration:.7,stagger:.025,ease:"power2.out",onComplete:()=>_(1.2)})},A=b=>{d=!1,clearInterval(h),se.to(c,{autoAlpha:0,z:-900,y:-120*b,rotateX:30*b,duration:.6,stagger:.015,ease:"power2.in",overwrite:"auto"})};_(0),se.set(c,{autoAlpha:0}),Oe.create({trigger:'[data-escena="planos"]',start:"top 70%",end:"bottom 30%",onEnter:()=>{d=!0,R(),m()},onEnterBack:()=>{d=!0,R(),m()},onLeave:()=>A(1),onLeaveBack:()=>A(-1)})}const t_=["coordinar los diseños","controlar la obra","detectar interferencias","registrar cada cambio","entregar el gemelo digital"],OA=[["A","BEP y EIR/AIR"],["B","Federación de modelos"],["B","Control de interferencias"],["C","Mesa BIM semanal"],["C","RFI y cambios"],["C","Informe mensual"],["D","As-built"],["D","Gemelo digital"],["","ISO 19650"],["","IFC"],["","BIMForum LOD 2025"],["","CDE"]];function FA(){const r=OA.map(([i,s])=>`<span>${i?`<b>Etapa ${i}</b>`:""}${s}</span>`).join("");document.getElementById("marquee").innerHTML=r+r;const e=document.getElementById("rota");let t=0;setInterval(()=>{t=(t+1)%t_.length,se.timeline().to(e,{autoAlpha:0,y:-18,filter:"blur(10px)",duration:.4,ease:"power2.in"}).call(()=>{e.textContent=t_[t]}).fromTo(e,{autoAlpha:0,y:18,filter:"blur(10px)"},{autoAlpha:1,y:0,filter:"blur(0px)",duration:.6,ease:"power3.out"})},2600);const n=[...document.querySelectorAll(".fl")].map(i=>({p:+(i.dataset.p??1),x:se.quickTo(i,"x",{duration:1.2,ease:"power3.out"}),y:se.quickTo(i,"y",{duration:1.2,ease:"power3.out"})}));addEventListener("pointermove",i=>{const s=i.clientX/innerWidth-.5,o=i.clientY/innerHeight-.5;n.forEach(a=>{a.x(-s*40*a.p),a.y(-o*30*a.p)})}),addEventListener("scroll",()=>{const i=Math.min(1,scrollY/innerHeight);document.querySelectorAll(".flotantes").forEach(s=>{s.style.opacity=String(1-i*1.4),s.style.transform=`translateY(${-i*120}px) scale(${1+i*.15})`})},{passive:!0}),document.querySelectorAll("[data-ir]").forEach(i=>i.addEventListener("click",()=>{const s=document.querySelector(`[data-escena="${i.dataset.ir}"]`);s&&window.scrollTo({top:s.offsetTop+10,behavior:"smooth"})}))}const BA="button, a, .chip, .glass, .capa, .actor, .tabs-planos button, .seg button, .btn-explorar";function kA(){if(matchMedia("(hover: none)").matches||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let r=null;addEventListener("pointermove",e=>{var n,i;const t=((i=(n=e.target).closest)==null?void 0:i.call(n,BA))??null;t!==r&&(r=t,t&&(t.classList.remove("brilla"),t.offsetWidth,t.classList.add("brilla")))},{passive:!0})}const ct=(r,e=document)=>e.querySelector(r),Wi=(r,e=document)=>[...e.querySelectorAll(r)],ec=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct"],xo={A:33,B:47,D:31},zA={solo:23,int:13.8},st={P:1e4,s:10,modo:"solo",meses:6,iva:!0},$t=r=>(r<0?"−":"")+"$"+Math.round(Math.abs(r)).toLocaleString("es-CO")+" M",Kl=r=>r.toLocaleString("es-CO",{minimumFractionDigits:1,maximumFractionDigits:1})+"x",Ll=(r,e=1)=>r.toLocaleString("es-CO",{minimumFractionDigits:e,maximumFractionDigits:e})+"%";function da(r=st){const e=r.iva?1.19:1,t=zA[r.modo],n=(xo.A+xo.B+xo.D+r.meses*t)*e,i=r.P*r.s/100,s=i-n,o=[xo.A*e];for(let h=1;h<=r.meses;h++)o.push((t+(h<=2?xo.B/2:0)+(h===r.meses?xo.D:0))*e);const a=h=>o.reduce((d,f,_)=>d+(h>=_?f:0),0),c=h=>i*Math.min(1,Math.max(0,(h-1)/r.meses));let l=null;for(let h=1;h<=1+r.meses+1e-9;h+=1/60)if(c(h)>=a(h)){l=h;break}const u=Math.round(r.meses*30*.1);return{I:n,A:i,N:s,roi:i/n,pctBim:n/r.P*100,pagos:o,inv:a,ah:c,pay:l,dias:u}}const tc=r=>r===null?{b:"No se recupera",e:"con estos supuestos"}:{b:`Día ${Math.max(1,Math.round((r-1)*30))}`,e:`de obra · ${ec[Math.floor(r)]??ec[st.meses]} 2027`},Ls={};function Ca(r,e,t,n,i=.8){if(!r)return;Ls[e]===void 0&&(Ls[e]=0);const s={v:Ls[e]};se.to(s,{v:t,duration:i,ease:"power3.out",overwrite:"auto",onUpdate:()=>{Ls[e]=s.v,r.textContent=n(s.v)}})}function nc(r){r&&se.fromTo(r,{color:"#ffffff"},{color:"",duration:.9,ease:"power2.out",clearProps:"color"})}const wo={A:0,I:0};function ic(){const r=ct("#cascada");if(!r)return;const e=600,t=210,n=26,{A:i,I:s}=wo,o=i-s,a=Math.max(i,s,1)*1.08,c=_=>t-(t-n)*_/a,l=120,u=[60,240,420],h=(_,g,m,p="")=>`<text x="${_+l/2}" y="${g}" text-anchor="middle" class="cv ${p}">${m}</text>`,d=o>=0?c(o):c(0),f=Math.abs(c(0)-c(Math.abs(o)));r.innerHTML=`
    <defs><linearGradient id="gA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#D5BE91" stop-opacity=".55"/><stop offset="1" stop-color="#D5BE91" stop-opacity=".08"/></linearGradient></defs>
    <line x1="30" x2="${e-10}" y1="${t}" y2="${t}" class="eje"/>
    <rect x="${u[0]}" y="${c(i)}" width="${l}" height="${t-c(i)}" class="b-a"/>
    ${h(u[0],c(i)-10,$t(i))}
    <line x1="${u[0]+l}" x2="${u[1]}" y1="${c(i)}" y2="${c(i)}" class="guia"/>
    <rect x="${u[1]}" y="${c(i)}" width="${l}" height="${Math.max(0,c(Math.max(i-s,0))-c(i))}" class="b-i"/>
    ${h(u[1],c(i)-10,"−"+$t(s),"neg")}
    <line x1="${u[1]+l}" x2="${u[2]}" y1="${c(Math.max(o,0))}" y2="${c(Math.max(o,0))}" class="guia"/>
    <rect x="${u[2]}" y="${o>=0?d:t}" width="${l}" height="${o>=0?t-d:Math.min(f,4)}" class="${o>=0?"b-n":"b-i"}"/>
    ${h(u[2],(o>=0?d:t)-10,$t(o),o>=0?"oro":"neg")}
    <text x="${u[0]+l/2}" y="${t+26}" text-anchor="middle" class="ce">Ahorro bruto</text>
    <text x="${u[1]+l/2}" y="${t+26}" text-anchor="middle" class="ce">Inversión BIM</text>
    <text x="${u[2]+l/2}" y="${t+26}" text-anchor="middle" class="ce oro">Ahorro neto</text>`}const ss=3e3,zo=4e4;let Ho={P:st.P};const qs={rev:1,revA:1};function Vo(){const r=ct("#curvaRoi");if(!r)return;const e=640,t=300,n=46,i=16,s=18,o=34,c=da().I,l=Math.ceil(zo*.14/c/2)*2+1,u=x=>n+(x-ss)/(zo-ss)*(e-n-i),h=x=>t-o-x/l*(t-s-o),d=x=>{const R=[];for(let A=ss;A<=zo;A+=500)R.push(`${u(A).toFixed(1)},${h(A*x/100/c).toFixed(1)}`);return R},f=d(6),_=d(14),g=d(st.s),m=Math.round(Ho.P/250)*250,p=m*st.s/100/c,v=Array.from({length:Math.floor(l/2)+1},(x,R)=>R*2).filter(x=>x<=l),S=[5e3,1e4,2e4,3e4,4e4];r.innerHTML=`
    ${v.map(x=>`<line x1="${n}" x2="${e-i}" y1="${h(x)}" y2="${h(x)}" class="grid"/><text x="${n-8}" y="${h(x)+4}" text-anchor="end" class="cx">${x}x</text>`).join("")}
    ${S.map(x=>`<text x="${u(x)}" y="${t-10}" text-anchor="middle" class="cx">$${(x/1e3).toLocaleString("es-CO")} mil M</text>`).join("")}
    <clipPath id="clipEsc"><rect x="${n}" y="0" width="${(e-n-i)*qs.rev}" height="${t}"/></clipPath>
    <g clip-path="url(#clipEsc)"><polygon points="${f.join(" ")} ${_.reverse().join(" ")}" class="banda"/>
    <line x1="${n}" x2="${e-i}" y1="${h(1)}" y2="${h(1)}" class="equilibrio"/>
    <text x="${e-i}" y="${h(1)-6}" text-anchor="end" class="cx rojo">1x · punto de equilibrio</text>
    <polyline points="${g.join(" ")}" class="linea-s"/><polyline points="${g.join(" ")}" class="linea-flujo"/></g>
    <g class="marcador" transform="translate(${u(m)} 0)">
      <line y1="${s}" y2="${t-o}" class="m-l"/>
      <circle cy="${h(p)}" r="7" class="m-c"/>
      <g transform="translate(${u(m)>e-170?-158:12} ${Math.max(s+4,h(p)-46)})">
        <rect width="146" height="42" rx="3" class="m-box"/>
        <text x="10" y="17" class="m-t1">${$t(m)}</text>
        <text x="10" y="33" class="m-t2">${Kl(p)} · neto ${$t(m*st.s/100-c)}</text>
      </g>
    </g>
    <rect x="${n}" y="${s}" width="${e-n-i}" height="${t-s-o}" fill="transparent" class="zona-arrastre"/>`}function HA(){const r=ct("#tablaRoi tbody");if(!r)return;const e=da(),t=(n,i="",s="")=>{const o=n*6/100-e.I,a=n*14/100-e.I;return`<tr class="${i}"><td><b>${s||$t(n)}</b>${s?`<small>${$t(n)}</small>`:""}</td><td>${Ll(e.I/n*100)}</td><td class="oro">${$t(o)} a ${$t(a)}</td><td><span class="badge-roi ${i?"oro":""}">${Kl(n*.06/e.I)} a ${Kl(n*.14/e.I)}</span></td></tr>`};r.innerHTML=t(st.P,"destacado","Tu proyecto")+[1e4,2e4,3e4].map(n=>t(n)).join("")}let oa=-1,dl=null;function Zl(){const r=ct("#amort");if(!r)return;const e=da(),t=640,n=300,i=54,s=16,o=18,a=34,c=1+st.meses,l=Math.max(e.A,e.I)*1.12,u=A=>i+A/c*(t-i-s),h=A=>n-a-A/l*(n-o-a),d=120,f=[],_=[];for(let A=0;A<=d;A++){const b=A/d*c;f.push(`${u(b).toFixed(1)},${h(e.inv(b)).toFixed(1)}`),_.push(`${u(b).toFixed(1)},${h(e.ah(b)).toFixed(1)}`)}const g=Array.from({length:c+1},(A,b)=>b),m=e.pay,p=oa>=0?Math.min(oa,c):-1;r.innerHTML=`
    ${g.map(A=>`<line x1="${u(A)}" x2="${u(A)}" y1="${o}" y2="${n-a}" class="grid"/>${A<c?`<text x="${(u(A)+u(A+1))/2}" y="${n-12}" text-anchor="middle" class="cx">${ec[A]}</text>`:""}`).join("")}
    <rect x="${u(1)}" y="${o}" width="${u(c)-u(1)}" height="${n-o-a}" class="zona-obra"/>
    <text x="${u(1)+6}" y="${o+14}" class="cx">Obra · ${st.meses} meses</text>
    <clipPath id="clipAm"><rect x="0" y="0" width="${i+(t-i-s)*qs.revA}" height="${n}"/></clipPath>
    <g clip-path="url(#clipAm)"><polygon points="${_.join(" ")} ${u(c)},${h(0)} ${u(0)},${h(0)}" class="area-ah"/>
    <polyline points="${f.join(" ")}" class="l-inv"/>
    <polyline points="${_.join(" ")}" class="l-ah"/><polyline points="${_.join(" ")}" class="l-flujo"/></g>
    ${m!==null?`<g class="pay" transform="translate(${u(m)} ${h(e.inv(m))})"><circle r="7" class="pay-c"/><circle r="7" class="pay-onda"/>
      <g transform="translate(${u(m)>t-190?-176:12} -44)"><rect width="164" height="36" rx="3" class="m-box"/><text x="10" y="15" class="m-t1">Se paga solo</text><text x="10" y="29" class="m-t2">${tc(m).b} ${tc(m).e}</text></g></g>`:""}
    ${p>=0?`<g class="cursor" transform="translate(${u(p)} 0)"><line y1="${o}" y2="${n-a}" class="c-l"/><circle cy="${h(e.ah(p))}" r="4.5" class="c-ah"/><circle cy="${h(e.inv(p))}" r="4.5" class="c-inv"/></g>`:""}`;const v=p>=0?p:c,S=e.inv(v),x=e.ah(v);ct("#aMes").textContent=p>=0?v<1?"Enero 2027 · antes de obra":`${ec[Math.min(Math.floor(v),c-1)]} 2027 · día ${Math.round((v-1)*30)} de obra`:`Cierre · ${ec[st.meses]} 2027`,ct("#aInv").textContent=$t(S),ct("#aAh").textContent=$t(x);const R=ct("#aBal");R.textContent=$t(x-S),R.classList.toggle("neg",x-S<0)}let Jl=!1,Ql=0;function Uf(){dl==null||dl.kill(),clearTimeout(Ql);const r={t:0},e=1+st.meses,t=da();let n=!1;dl=se.to(r,{t:e,duration:6,ease:"none",onUpdate:()=>{oa=r.t,qs.revA=Math.max(qs.revA,r.t/e),Zl(),!n&&t.pay!==null&&r.t>=t.pay&&(n=!0,nc(ct("#aBal")),se.fromTo("#aBal",{scale:1.25},{scale:1,duration:.7,ease:"back.out(3)"}))},onComplete:()=>{oa=-1,Zl(),Jl&&(Ql=window.setTimeout(Uf,2600))}})}function Ci(r=!0){const e=da(),t=r?.8:0;ct("#cP").textContent=$t(st.P),ct("#cS").textContent=Ll(st.s),Ca(ct("#cI"),"cI",e.I,$t,t),Ca(ct("#oNeto"),"oNeto",e.N,$t,t),Ca(ct("#oBruto"),"oBruto",e.A,$t,t),Ca(ct("#oRoi"),"oRoi",e.roi,Kl,t),Ca(ct("#oPct"),"oPct",e.pctBim,i=>Ll(i),t);const n=tc(e.pay);ct("#oPay").textContent=n.b,ct("#oPayE").textContent=n.e,ct("#oNeto").classList.toggle("neg",e.N<0),ct("#oFrase").innerHTML=`En una obra de <b>${$t(st.P)}</b>, coordinar con BIM evita <b>${$t(e.A)}</b> (${Ll(st.s,st.s%1?1:0)}). Restando la inversión de <b>${$t(e.I)}</b>${st.iva?" con IVA":""}, quedan <b class="oro">${$t(e.N)}</b> para el proyecto.`,se.to(wo,{A:e.A,I:e.I,duration:t,ease:"power3.out",overwrite:"auto",onUpdate:ic}),t||ic(),se.to(Ho,{P:st.P,duration:t*.8,ease:"power3.out",overwrite:"auto",onUpdate:Vo}),t||Vo(),HA(),Wi('[data-v="inv"]').forEach(i=>i.textContent=$t(e.I)),Wi('[data-v="pay"]').forEach(i=>i.textContent=e.pay===null?"más tiempo del que dura la obra":`el ${tc(e.pay).b.toLowerCase()} ${tc(e.pay).e}`),Wi('[data-v="dias"]').forEach(i=>i.textContent=`${e.dias} días`),oa<0&&Zl(),ct("#rP").style.setProperty("--f",`${(st.P-ss)/(zo-ss)*100}%`),ct("#rS").style.setProperty("--f",`${(st.s-6)/8*100}%`),Wi(".chips-esc button").forEach(i=>i.classList.toggle("on",+i.dataset.s===st.s))}function VA(){if(!ct("#rP"))return;const r=ct("#rP"),e=ct("#rS");r.addEventListener("input",()=>{st.P=+r.value,Ci(!0),nc(ct("#oNeto"))}),e.addEventListener("input",()=>{st.s=+e.value,Ci(!0),nc(ct("#oNeto"))}),Wi(".chips-esc button").forEach(s=>s.addEventListener("click",()=>{st.s=+s.dataset.s,e.value=String(st.s),Ci(!0),nc(ct("#oNeto"))})),Wi("#rModo button").forEach(s=>s.addEventListener("click",()=>{st.modo=s.dataset.m,Wi("#rModo button").forEach(o=>o.classList.toggle("on",o===s)),Ci(!0)})),Wi("#rMesesR button").forEach(s=>s.addEventListener("click",()=>{st.meses=+s.dataset.n,Wi("#rMesesR button").forEach(o=>o.classList.toggle("on",o===s)),Ci(!0)})),ct("#rIva").addEventListener("change",s=>{st.iva=s.target.checked,Ci(!0)}),Wi("[data-p]").forEach(s=>s.addEventListener("click",()=>{st.P=+s.dataset.p,r.value=String(st.P),Ci(!0)}));const t=ct("#curvaRoi");let n=!1;const i=s=>{const o=t.getBoundingClientRect(),a=(s.clientX-o.left)/o.width*640,c=Math.round((ss+(a-46)/578*(zo-ss))/500)*500;st.P=Math.min(zo,Math.max(ss,c)),r.value=String(st.P),Ci(!0)};t.addEventListener("pointerdown",s=>{n=!0,N0=!0,Oi==null||Oi.kill(),t.setPointerCapture(s.pointerId),i(s)}),t.addEventListener("pointermove",s=>{n&&i(s)}),t.addEventListener("pointerup",()=>n=!1),ct("#btnSimular").addEventListener("click",Uf),ct(".calc").addEventListener("pointerdown",i_,{capture:!0}),ct(".calc").addEventListener("keydown",i_,{capture:!0}),Ci(!1),Oe.create({trigger:'[data-escena="roi"]',start:"top 60%",end:"bottom 40%",onEnter:s_,onEnterBack:s_,onLeave:r_,onLeaveBack:r_}),Oe.create({trigger:'[data-escena="roi2"]',start:"top 60%",end:"bottom 40%",onEnter:a_,onEnterBack:a_,onLeave:o_,onLeaveBack:o_}),Oe.create({trigger:'[data-escena="roi3"]',start:"top 55%",end:"bottom 40%",onEnter:c_,onEnterBack:c_,onLeave:()=>{Jl=!1},onLeaveBack:()=>{Jl=!1}})}const n_=[{P:2e4,s:10},{P:3e4,s:14},{P:5e3,s:10},{P:15e3,s:8},{P:1e4,s:10}];let gc=!1,xc=0,GA=0;function D0(r,e){st.P=r,st.s=e,ct("#rP").value=String(r),ct("#rS").value=String(e),Ci(!0),nc(ct("#oNeto")),se.fromTo("#oNeto",{y:8,opacity:.6},{y:0,opacity:1,duration:.6,ease:"power3.out"})}function I0(){if(gc)return;const r=n_[GA++%n_.length];D0(r.P,r.s),xc=window.setTimeout(I0,3200)}function i_(){gc||(gc=!0,clearTimeout(xc),se.to(".demo-tag",{autoAlpha:0,y:-6,duration:.3}))}function r_(){clearTimeout(xc),!gc&&(st.P!==1e4||st.s!==10)&&D0(1e4,10)}function s_(){const r=da();Object.keys(Ls).forEach(e=>Ls[e]=0),wo.A=0,wo.I=0,ic(),se.timeline({delay:.6}).to(wo,{A:r.A,duration:1,ease:"power3.out",onUpdate:ic}).to(wo,{I:r.I,duration:.9,ease:"power2.inOut",onUpdate:ic},"+=0.1").call(()=>{["oNeto","oBruto","oRoi","oPct","cI"].forEach(e=>Ls[e]=0),Ci(!0)},[],0),se.fromTo(".res-kpis > div",{autoAlpha:0,y:16},{autoAlpha:1,y:0,stagger:.1,duration:.5,delay:.9}),gc||(clearTimeout(xc),se.fromTo(".demo-tag",{autoAlpha:0,y:6},{autoAlpha:1,y:0,duration:.5,delay:2}),xc=window.setTimeout(I0,4200))}let N0=!1,Oi=null;function o_(){Oi==null||Oi.kill(),Oi=null,se.to(Ho,{P:st.P,duration:.6,onUpdate:Vo})}function a_(){qs.rev=0,Vo(),se.to(qs,{rev:1,duration:1.8,delay:.5,ease:"power2.inOut",onUpdate:Vo}),se.fromTo("#tablaRoi tbody tr",{autoAlpha:0,x:-20},{autoAlpha:1,x:0,stagger:.12,duration:.5,delay:.8}),!N0&&(Oi==null||Oi.kill(),Oi=se.timeline({delay:2.6,repeat:-1,repeatDelay:1.2,defaults:{ease:"sine.inOut",onUpdate:Vo}}).to(Ho,{P:4e4,duration:3.2}).to(Ho,{P:3e3,duration:3.6},"+=0.8").to(Ho,{P:st.P,duration:2},"+=0.8"))}function c_(){Jl=!0,qs.revA=0,oa=0,Zl(),clearTimeout(Ql),Ql=window.setTimeout(Uf,700)}se.registerPlugin(Oe);se.ticker.lagSmoothing(0);const qi=[{d:"Arquitectura",corto:"Arquitectura",color:"#D5BE91",texto:"Muros en ladrillo, fachadas, ventanería, puertas, barandas, escaleras y cubiertas de los siete niveles."},{d:"Estructura",corto:"Estructura",color:"#9fb6cc",texto:"Losas, columnas y vigas: la base para verificar alturas libres y pasos de instalaciones."},{d:"Hidrosanitaria",corto:"Hidro",color:"#3d8bff",texto:"Agua fría, agua caliente, red sanitaria y aparatos de los baños del Piso 2."},{d:"Red contra incendios",corto:"RCI",color:"#ff7a2f",texto:"Red de rociadores del Piso 2: ramales, bajantes y cabezas en habitaciones y pasillo."},{d:"Eléctrica",corto:"Eléctrica",color:"#2fd0b5",texto:"Conduit, cajas, tomas, aparatos y luminarias de cada habitación del Piso 2."},{d:"Mecánica",corto:"Mecánica",color:"#c3cbd4",texto:"Ductos de ventilación y extracción coordinados con las demás redes."}],WA={Arquitectura:"arquitectura",Estructura:"estructura",Hidrosanitaria:"hidro","Red contra incendios":"rci",Eléctrica:"electrica",Mecánica:"mecanica"},os={muros:{arq:"#dcae95",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Muros"},ventanas:{arq:"#7f98a6",tec:"#6f93b8",disc:"Arquitectura",cerr:!0,vidrio:!0,nombre:"Ventanas"},paneles:{arq:"#d8d2c6",tec:"#2f4a66",disc:"Arquitectura",cerr:!0,nombre:"Paneles"},puertas:{arq:"#8a5a3b",tec:"#3a5674",disc:"Arquitectura",nombre:"Puertas"},montantes:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Montantes"},barandas:{arq:"#3a3d41",tec:"#5c7896",disc:"Arquitectura",metal:.6,rough:.4,nombre:"Barandas"},escaleras:{arq:"#b4afa5",tec:"#35516e",disc:"Arquitectura",nombre:"Escaleras"},cubiertas:{arq:"#ffffff",tec:"#2a4664",disc:"Arquitectura",cerr:!0,nombre:"Cubiertas"},losas:{arq:"#bcb7ae",tec:"#8aa2bb",disc:"Estructura",nombre:"Losas"},columnas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Columnas"},vigas:{arq:"#c8c3b9",tec:"#c9d6e3",disc:"Estructura",nombre:"Vigas"},af:{arq:"#3d8bff",tec:"#3d8bff",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua fría"},acs:{arq:"#ff4b3e",tec:"#ff4b3e",disc:"Hidrosanitaria",mep:!0,rough:.45,nombre:"Agua caliente"},san:{arq:"#c08a52",tec:"#c08a52",disc:"Hidrosanitaria",mep:!0,rough:.6,nombre:"Sanitaria"},sanitarios:{arq:"#f4f4f2",tec:"#f4f4f2",disc:"Hidrosanitaria",mep:!0,rough:.25,nombre:"Aparatos sanitarios"},otras:{arq:"#8b8f96",tec:"#8b8f96",disc:"Hidrosanitaria",mep:!0,nombre:"Otras tuberías"},rci:{arq:"#ff7a2f",tec:"#ff7a2f",disc:"Red contra incendios",mep:!0,rough:.45,nombre:"Rociadores y red RCI"},conduit:{arq:"#2fd0b5",tec:"#2fd0b5",disc:"Eléctrica",mep:!0,rough:.5,nombre:"Conduit"},aparatos:{arq:"#7fb2ff",tec:"#7fb2ff",disc:"Eléctrica",mep:!0,nombre:"Tomas y aparatos"},luminarias:{arq:"#ffd447",tec:"#ffd447",disc:"Eléctrica",mep:!0,nombre:"Luminarias"},ductos:{arq:"#c3cbd4",tec:"#c3cbd4",disc:"Mecánica",mep:!0,metal:.5,rough:.4,nombre:"Ductos"}},fu=document.getElementById("gl"),fa=matchMedia("(max-width: 900px), (hover: none) and (pointer: coarse)").matches,ki=new sE({canvas:fu,antialias:!fa,alpha:!0,powerPreference:"high-performance"});ki.setPixelRatio(Math.min(fa?1.5:2,devicePixelRatio));ki.setSize(innerWidth,innerHeight);ki.setClearColor(0,0);ki.shadowMap.enabled=!fa;ki.shadowMap.type=x_;ki.toneMapping=y_;ki.toneMappingExposure=1;ki.localClippingEnabled=!0;const Dr=new K_,XA=new sd(ki);Dr.environment=XA.fromScene(new rT,.04).texture;Dr.environmentIntensity=.55;const $A=new wE("#dce5ec","#101d2c",.75);Dr.add($A);const pa=new af("#ffe9c9",2.6);pa.position.set(70,110,50);pa.castShadow=!0;pa.shadow.mapSize.set(2048,2048);pa.shadow.bias=-5e-4;Object.assign(pa.shadow.camera,{left:-110,right:110,top:110,bottom:-110,near:10,far:320});Dr.add(pa);const U0=new af("#5d8fd6",1.1);U0.position.set(-80,40,-90);Dr.add(U0);const qA=new Jd("#0a2a52",160,650);Dr.fog=qA;const pn=new Un(35,innerWidth/innerHeight,.5,4e3),Mi=new XE(pn,fu);Mi.enableDamping=!0;Mi.dampingFactor=.08;Mi.maxPolarAngle=Math.PI*.495;Mi.minDistance=4;Mi.maxDistance=900;Mi.enabled=!1;const Go=new _r(new I(0,-1,0),999),O0=new Ue("#D5BE91"),Gt={az:40,el:16,dist:125,tx:0,ty:10,tz:0,shift:.14,nube:1,bim:0,cerr:0,bordes:0,explode:0,corteY:999,verHasta:9,ctx:1,obra:1,alerta:0,giro:0},pu={...Gt,nube:0},Of={Arquitectura:1,Estructura:1,Hidrosanitaria:0,"Red contra incendios":0,Eléctrica:0,Mecánica:0},Jr=new Set(["Arquitectura","Estructura"]),fi={px:0,py:0,tpx:0,tpy:0,drift:0};let bi="cine";const dn=[],Ff=[],Sn=r=>document.querySelector(r),fl=(r,e,t)=>{const n=Ki.clamp((t-r)/(e-r),0,1);return n*n*(3-2*n)},YA=new ig;function Dl(r,e,t=!0){const n=YA.load(r);return n.wrapS=n.wrapT=ks,n.repeat.set(1/e,1/e),n.colorSpace=t?Yt:xr,n.anisotropy=8,n}const l_={ladrillo:{map:Dl("ctx/tex_ladrillo_hlf.webp",1.28),normal:Dl("ctx/tex_ladrillo_hlf_n.webp",1.28,!1)},teja:{map:Dl("ctx/tex_teja.webp",1.5),normal:null}};function jA(r){const e={value:1};r.userData.uMapa=e,r.onBeforeCompile=t=>{t.uniforms.uMapa=e,t.fragmentShader=t.fragmentShader.replace("void main() {",`uniform float uMapa;
void main() {`).replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= mix(vec4(1.0), sampledDiffuseColor, uMapa);
#endif`)}}const eu=new br;Dr.add(eu);const F0=[];function KA(r,e,t){let n=!1;for(let i=0,s=r.length-1;i<r.length;s=i++){const[o,a]=r[i],[c,l]=r[s];a>t!=l>t&&e<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}async function ZA(r){eu.position.set(-r.e,-r.z,r.n);const{huella:e}=await(await fetch("ctx/huella.json")).json(),t=(a,c)=>[[0,0],[1,0],[-1,0],[0,1],[0,-1]].some(([l,u])=>e.some(h=>KA(h,a+l,c+u))),n=new sT().setDRACOLoader(new zT().setDecoderPath("draco/")),i={Terreno:["ctx/tex_prado.webp",6],Vias:["ctx/tex_asfalto.webp",5],Andenes:["ctx/tex_anden.webp",2],Separadores:["ctx/tex_prado.webp",6],Ciclorrutas:["ctx/tex_ciclo.webp",3]},s=["T01","T02","T03","T10","T11","T12","T13","T20","T21","T22","T23","T30","T31","T32"],o=[...Object.keys(i).map(a=>"suelo_"+a),"hotel_plazoleta","hotel_fachadas","hotel_cubiertas","torres_vecinas",...fa?[]:s.map(a=>"edificios_"+a)];await Promise.all(o.map(async a=>{let c;try{c=await n.loadAsync(`ctx/${a}.glb`)}catch{return}const l=a==="hotel_fachadas"||a==="hotel_cubiertas";c.scene.traverse(u=>{const h=u;if(!h.isMesh)return;const d=h.geometry,f=d.getAttribute("position");if(l&&d.index){const m=d.index.array,p=[];for(let v=0;v<m.length;v+=3){let S=0,x=0;for(let R=0;R<3;R++)S+=f.getX(m[v+R]),x+=f.getZ(m[v+R]);t(S/3,-x/3)||p.push(m[v],m[v+1],m[v+2])}d.setIndex(p)}const _=a.startsWith("suelo_")?a.slice(6):"";let g=h.material;if(_){const m=new Float32Array(f.count*2);for(let S=0;S<f.count;S++)m[S*2]=f.getX(S),m[S*2+1]=f.getZ(S);d.setAttribute("uv",new zt(m,2));const[p,v]=i[_];g=new Cr({map:Dl(p,v),roughness:.95,color:"#3b5677"}),(_==="Vias"||_==="Andenes"||_==="Ciclorrutas")&&(g.polygonOffset=!0,g.polygonOffsetFactor=-1,g.polygonOffsetUnits=-2),h.material=g}else a.startsWith("edificios_")&&(g=new Cr({color:"#2a4a70",roughness:.9,flatShading:!0}),h.material=g);g.userData.baseOp=g.transparent?g.opacity:1,F0.push(g),h.receiveShadow=!0,h.castShadow=!_&&(a.startsWith("hotel")||a==="torres_vecinas"),h.raycast=()=>{}}),eu.add(c.scene)}))}const Bf=new Bi,Pi=new I;let B0=[];function u_(r,e,t,n,i,s={}){const o=new Et(t,n);o.name=e,o.castShadow=!i.vidrio&&!i.mep,o.receiveShadow=!i.mep,o.userData={cat:e,...s},r.grupo.add(o),r.mats.set(e,n);const a=new Q_(new fE(t,28),r.lmat);a.raycast=()=>{},a.visible=!1,i.mep||(r.grupo.add(a),r.lineas.set(e,a))}async function JA(){const r=await(await fetch("data/manifest.json")).json();let e=0;await Promise.all(r.niveles.map(async n=>{const i=await(await fetch("data/"+n.archivo)).arrayBuffer(),s={info:n,grupo:new br,mats:new Map,lineas:new Map,lmat:new tf({color:O0,transparent:!0,opacity:0,depthWrite:!1,clippingPlanes:[Go]}),caja:new Bi,destino:0,vis:1};s.grupo.name=n.nombre;for(const o of n.cats){const a=os[o.nombre];if(!a)continue;const c=new An;c.setAttribute("position",new zt(new Float32Array(i,o.vOff,o.vLen),3)),o.tOff!==void 0&&c.setIndex(new zt(new Uint32Array(i,o.tOff,o.tLen),1)),o.uvOff!==void 0&&c.setAttribute("uv",new zt(new Float32Array(i,o.uvOff,o.uvLen),2)),c.computeBoundingBox(),s.caja.union(c.boundingBox);const l=o.nombre==="muros"?l_.ladrillo:o.nombre==="cubiertas"?l_.teja:null,u=new Cr({color:a.arq,roughness:a.rough??(a.vidrio?.08:.88),metalness:a.metal??(a.vidrio?.3:0),flatShading:!l,side:Di,transparent:!!a.vidrio,opacity:a.vidrio?.5:1,clippingPlanes:[Go],map:(l==null?void 0:l.map)??null,normalMap:(l==null?void 0:l.normal)??null});l&&(c.computeVertexNormals(),jA(u)),u.userData.def=a,u_(s,o.nombre,c,u,a,{tris:(o.tLen??o.vLen/3)/3})}dn[n.i]=s,Dr.add(s.grupo),e++,Sn("#cargando i b").style.width=90*e/r.niveles.length+"%"}));const t=dn.find(n=>n.info.nombre==="PISO 2");try{const n=await(await fetch("data/mep.json")).json(),i=await(await fetch("data/mep.bin")).arrayBuffer();B0=n.cats;for(const s of n.cats){const o=os[s.nombre];if(!o||!t)continue;const a=new An;if(a.setAttribute("position",new zt(new Float32Array(i,s.vOff,s.vLen),3)),a.setIndex(new zt(new Uint32Array(i,s.tOff,s.tLen),1)),a.computeVertexNormals(),a.computeBoundingBox(),Bf.union(a.boundingBox),["af","acs","san","rci","conduit"].includes(s.nombre)){const l=a.getAttribute("position");let u=0,h=0,d=0;for(let f=0;f<l.count;f++)l.getY(f)<6&&(u+=l.getX(f),h+=l.getZ(f),d++);d&&(Pi.x+=u,Pi.z+=h,Pi.y+=d)}const c=new Cr({color:o.arq,roughness:o.rough??.6,metalness:o.metal??.05,clippingPlanes:[Go],transparent:!0,opacity:0,emissive:new Ue(o.arq).multiplyScalar(.55)});c.userData.def=o,u_(t,s.nombre,a,c,o,{elementos:s.elementos,tris:s.tLen/3,mep:!0}),t.grupo.children[t.grupo.children.length-1].renderOrder=2}}catch(n){console.warn("mep",n)}return Pi.y>0&&Pi.set(Pi.x/Pi.y,0,Pi.z/Pi.y),QA(),ew(),dn.forEach((n,i)=>{n.destino=i*9+(n.info.nombre==="CUBIERTA"?8:0),n.grupo.children.forEach(s=>{s.isMesh&&(s.userData.nivel=i,Ff.push(s))})}),r}const k0=[];function QA(){const r=["muros","ventanas","losas","cubiertas","paneles","columnas"],e=new I,t=new I,n=new I,i=new I,s=new I;dn.forEach(o=>{const a=[];o.grupo.children.forEach(h=>{const d=h;if(!d.isMesh||!r.includes(d.name))return;const f=d.geometry,_=f.getAttribute("position"),g=f.index,m=g?g.count/3:_.count/3;for(let p=0;p<m;p++){const v=g?g.getX(p*3):p*3,S=g?g.getX(p*3+1):p*3+1,x=g?g.getX(p*3+2):p*3+2;e.fromBufferAttribute(_,v),t.fromBufferAttribute(_,S),n.fromBufferAttribute(_,x);let R=i.subVectors(t,e).cross(s.subVectors(n,e)).length()/2*(fa?.8:2.2);for(;R>0&&!(R<1&&Math.random()>R);){let A=Math.random(),b=Math.random();A+b>1&&(A=1-A,b=1-b),a.push(e.x+(t.x-e.x)*A+(n.x-e.x)*b,e.y+(t.y-e.y)*A+(n.y-e.y)*b,e.z+(t.z-e.z)*A+(n.z-e.z)*b),R--}}});const c=new An;c.setAttribute("position",new Wn(a,3));const l=new rf({color:"#e6cf9c",size:.16,transparent:!0,opacity:0,depthWrite:!1,blending:vh}),u=new eg(c,l);u.raycast=()=>{},u.visible=!1,o.grupo.add(u),k0.push(u)})}const Xi={p:new I,d:1/0,ok:!1};let Ni=null;function ew(){const r=dn.find(u=>u.info.nombre==="PISO 2");if(!r)return;const e=u=>r.grupo.children.find(h=>h.name===u&&h.isMesh),t=e("rci"),n=e("conduit");if(!t||!n)return;const i=.25,s=new Map,o=n.geometry.getAttribute("position");for(let u=0;u<o.count;u++){const h=`${Math.floor(o.getX(u)/i)},${Math.floor(o.getY(u)/i)},${Math.floor(o.getZ(u)/i)}`;(s.get(h)??s.set(h,[]).get(h)).push(u)}const a=t.geometry.getAttribute("position"),c=new I,l=new I;for(let u=0;u<a.count;u++){if(c.fromBufferAttribute(a,u),c.y>6.5)continue;const h=Math.floor(c.x/i),d=Math.floor(c.y/i),f=Math.floor(c.z/i);for(let _=-1;_<=1;_++)for(let g=-1;g<=1;g++)for(let m=-1;m<=1;m++){const p=s.get(`${h+_},${d+g},${f+m}`);if(p)for(const v of p){l.fromBufferAttribute(o,v);const S=c.distanceTo(l);S<Xi.d&&(Xi.d=S,Xi.p.copy(c).add(l).multiplyScalar(.5),Xi.ok=!0)}}}Xi.ok&&(Ni=new Et(new sf(.35,32,16),new Sr({color:"#e0533f",transparent:!0,opacity:0,depthTest:!1})),Ni.position.copy(Xi.p),Ni.renderOrder=10,Ni.raycast=()=>{},r.grupo.add(Ni))}const tw=new Ue,nw=new Ue,Gn={nivel:-1,cat:"",v:0,meta:0};function h_(r){const e=r.explode,t=dn.length-1,n=dn.length,i=performance.now()/1e3;if(dn.forEach((s,o)=>{const a=o===t?fl(.2,.45,e):o>=3?fl(.45,.7,e):fl(.7,1,e);s.grupo.position.y=s.destino*a,s.vis=Ki.clamp(r.verHasta-o+1,0,1),s.grupo.visible=s.vis>.01;const c=fl(o/n,(o+1)/n,r.obra),l=Math.max(r.bim,1-c),u=Math.sin(Math.PI*c)*(r.obra<.999?1:0),h=1-r.nube;for(const[f,_]of s.mats){const g=_.userData.def,m=Of[g.disc];_.color.copy(tw.set(g.arq)).lerp(nw.set(g.tec),g.mep?0:l);let p=g.vidrio?Ki.lerp(.5,.4,l):1;(g.cerr||g.disc==="Arquitectura")&&(p*=Ki.lerp(1,g.vidrio?.18:.1,r.cerr)),p*=m*s.vis*h,_.opacity=p,_.transparent=p<.999,_.depthWrite=p>.6;const v=Gn.nivel===o&&Gn.cat===f?Gn.v*(.75+.25*Math.sin(i*7)):0;g.mep?_.emissive.set(g.arq).multiplyScalar(.55+1.2*v):_.emissive.copy(O0).multiplyScalar(.55*u+.7*v),_.visible=p>.005,_.userData.uMapa&&(_.userData.uMapa.value=1-l,_.normalScale.setScalar(1-l));const S=s.lineas.get(f);if(S){const x=Math.max(r.bordes,.5*(1-c)*h)*s.vis*m*(g.disc==="Arquitectura"?1-.5*r.cerr:1);S.visible=x>.01}}s.lmat.opacity=Math.max(r.bordes,.5*(1-c)*(1-r.nube))*s.vis;const d=k0[o];if(d){const f=d.material;f.opacity=r.nube*s.vis*(.75+.25*Math.sin(i*2+o)),d.visible=f.opacity>.01}}),Ni){const s=Ni.material;s.opacity=r.alerta*(.55+.35*Math.sin(i*6)),Ni.visible=s.opacity>.01,Ni.scale.setScalar(1+.4*Math.sin(i*3))}Go.constant=r.corteY,eu.visible=r.ctx>.01;for(const s of F0){const o=s.userData.baseOp*r.ctx;s.opacity=o,s.transparent=o<.999,s.depthWrite=o>.5}}const Mo=new I;function iw(r){Mo.set(r.tx,r.ty,r.tz);const e=Ki.degToRad(r.az+r.giro),t=Ki.degToRad(r.el),n=r.dist;pn.position.set(Mo.x+n*Math.cos(t)*Math.sin(e),Mo.y+n*Math.sin(t),Mo.z+n*Math.cos(t)*Math.cos(e)),pn.fov=35,pn.near=Math.max(.3,n*.01),pn.far=n*8+600,pn.updateProjectionMatrix(),pn.lookAt(Mo);const i=innerWidth<900?0:r.shift;Math.abs(i)>.001?pn.setViewOffset(innerWidth,innerHeight,-innerWidth*i,innerWidth<900?innerHeight*.12:0,innerWidth,innerHeight):pn.clearViewOffset()}function as(r,e=1.1){Jr.clear(),r.forEach(t=>Jr.add(t));for(const t of qi)se.to(Of,{[t.d]:Jr.has(t.d)?1:0,duration:e,ease:"power2.inOut",overwrite:"auto"});kf()}function kf(){document.querySelectorAll("#capas .capa").forEach(r=>r.classList.toggle("on",Jr.has(r.dataset.d)))}const z0=["Hidrosanitaria","Red contra incendios","Eléctrica","Mecánica"];let d_;function rw(r,e){if(!fa)return;let t=document.getElementById("avisoCapa");t||(t=document.createElement("div"),t.id="avisoCapa",document.body.appendChild(t));const n=qi.find(i=>i.d===r);t.innerHTML=`<i style="background:${n.color}"></i>${r} · ${e?"prendida":"apagada"}`,t.classList.add("on"),clearTimeout(d_),d_=window.setTimeout(()=>t.classList.remove("on"),1600)}function sw(r){const e=!Jr.has(r);rw(r,e),e?Jr.add(r):Jr.delete(r),se.to(Of,{[r]:e?1:0,duration:.9,ease:"power2.inOut",overwrite:"auto"}),e&&z0.includes(r)&&(bi==="libre"?Vf("p2",!1):se.to(Gt,{cerr:Math.max(Gt.cerr,.9),duration:1})),e&&r==="Estructura"&&!Jr.has("Arquitectura")&&se.to(Gt,{bim:1,duration:1}),kf()}let zf={};const Hf=[];function ow(){var c;const r=dn.findIndex(l=>l.info.nombre==="PISO 2"),e=((c=dn[r])==null?void 0:c.info.elev)??3,t=dn[r].caja.getCenter(new I),n=Bf.isEmpty()?t:Pi,i=Xi.ok?Xi.p:n,s={verHasta:r,corteY:e+2.75,cerr:.92,bim:1,bordes:.18,ctx:0,ty:e+1.5,tx:n.x,tz:n.z,explode:0,nube:0,obra:1},o=["Arquitectura","Estructura"];zf={hero:{st:{az:38,el:15,dist:158,ty:12,tx:0,tz:0,ctx:1,shift:.24},capas:o},problema:{st:{bim:1,bordes:.55,cerr:.55,az:-40,el:22,dist:150,ctx:.12,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica","Red contra incendios"],velo:"centro"},escaneo:{st:{nube:1,bim:1,ctx:0,az:70,el:16,dist:108,shift:.16},capas:o},critico:{st:{...s,tx:i.x,ty:i.y,tz:i.z,dist:8,el:34,az:40,alerta:1,shift:.18},capas:["Arquitectura","Red contra incendios","Eléctrica"]},etapas:{st:{bim:0,ctx:.6,az:-50,el:26,dist:170,ty:14,shift:0,cerr:0},capas:o,enter:()=>{se.fromTo(Gt,{obra:0},{obra:1,duration:5,ease:"power1.inOut",overwrite:!1})}},obra:{st:{verHasta:r,corteY:e+1.4,bim:1,bordes:.6,cerr:0,ctx:0,el:62,dist:82,az:10,tx:t.x,tz:t.z,ty:e,shift:.2},capas:o},interior:{st:{bim:1,bordes:.25,ctx:.1,az:140,el:20,dist:220,ty:10,shift:0},capas:o,velo:"centro"},planos:{st:{verHasta:r,corteY:e+1.4,bim:1,bordes:.7,cerr:0,ctx:0,el:82,dist:120,az:0,tx:t.x,tz:t.z,ty:e,shift:0},capas:o,velo:"centro"},actores:{st:{explode:1,bim:1,bordes:.45,ctx:0,az:95,el:24,dist:190,ty:30,shift:0},capas:["Arquitectura","Estructura","Hidrosanitaria","Eléctrica"],velo:"centro"},roi:{st:{bim:1,bordes:.35,ctx:.12,az:160,el:20,dist:205,ty:12,shift:0},capas:o,velo:"centro"},roi2:{st:{bim:1,bordes:.4,ctx:.2,az:230,el:26,dist:230,ty:14,shift:0},capas:o,velo:"centro"},roi3:{st:{bim:1,bordes:.3,ctx:.15,az:300,el:16,dist:200,ty:10,shift:0},capas:o,velo:"centro"},honorarios:{st:{bim:1,bordes:.3,ctx:.15,az:200,el:18,dist:210,ty:10,shift:0},capas:o,velo:"centro"},gemelo:{st:{cerr:.8,bim:0,bordes:.15,ctx:.25,az:55,el:30,dist:78,tx:t.x,tz:t.z,ty:8,shift:.18},capas:qi.map(l=>l.d)},cierre:{st:{az:25,el:12,dist:140,ctx:1,ty:10,tx:0,tz:0,shift:0},capas:o,velo:"centro"}};const a=[{az:14,el:55,dist:66},{az:60,el:44,dist:58},{az:-30,el:50,dist:62},{az:100,el:40,dist:64}];Hf.push({d:"Arquitectura",st:{az:30,el:18,dist:175,ty:10,tx:0,tz:0,ctx:.5,bim:0,cerr:0,bordes:0,verHasta:9,corteY:999,explode:0,shift:.03},capas:["Arquitectura"]},{d:"Estructura",st:{az:-35,el:24,dist:185,ty:16,tx:0,tz:0,ctx:0,bim:1,cerr:0,bordes:.4,verHasta:9,corteY:999,explode:.55,shift:.03},capas:["Estructura"]},...z0.map((l,u)=>({d:l,st:{...s,...a[u],shift:.03},capas:["Arquitectura","Estructura",l]})))}let f_=!1;function Fd(r){var t;const e=zf[r];if(!(!e||bi!=="cine")){if(r==="hero"&&!f_){f_=!0;return}se.to(Gt,{...pu,alerta:0,...e.st,duration:1.9,ease:"power3.inOut",overwrite:"auto"}),as(e.capas),document.body.dataset.velo=e.velo??"",(t=e.enter)==null||t.call(e)}}let Gr=-1;function aw(){const r=s=>B0.filter(o=>{var a;return((a=os[o.nombre])==null?void 0:a.disc)===s});Sn("#pasosCapas").innerHTML=qi.map((s,o)=>`<li data-i="${o}" style="--c:${s.color}"><i></i><span class="t">${s.d}</span><span class="p"><b></b></span></li>`).join(""),Sn("#tarjetasCapa").innerHTML=qi.map((s,o)=>{let a;return o<2?a=Object.entries(os).filter(([,l])=>l.disc===s.d).map(([l,u])=>{const h=dn.reduce((d,f)=>d+(f.info.cats.find(_=>_.nombre===l)?1:0),0);return h?`<li>${u.nombre}<b>${h} niveles</b></li>`:""}).join(""):a=r(s.d).map(c=>`<li>${os[c.nombre].nombre}<b>${c.elementos.toLocaleString("es-CO")} elem.</b></li>`).join(""),`<div class="glass tcapa" style="--c:${s.color}"><span class="num">CAPA 0${o+1} / 06</span><h3><i></i>${s.d}</h3><p>${s.texto}</p><ul>${a}</ul></div>`}).join("");const e=[...document.querySelectorAll(".tcapa")],t=[...document.querySelectorAll("#pasosCapas .p b")],n=s=>{if(s===Gr)return;const o=Gr;if(Gr=s,document.querySelectorAll("#pasosCapas li").forEach((a,c)=>a.classList.toggle("on",c===s)),o>=0&&se.to(e[o],{autoAlpha:0,rotateY:s>o?-35:35,x:s>o?-120:120,z:-200,filter:"blur(10px)",duration:.6,ease:"power2.in",overwrite:!0}),se.fromTo(e[s],{autoAlpha:0,rotateY:s>o?40:-40,x:s>o?160:-160,z:-260,filter:"blur(14px)"},{autoAlpha:1,rotateY:0,x:0,z:0,filter:"blur(0px)",duration:.95,ease:"power3.out",delay:o>=0?.2:0,overwrite:!0}),se.fromTo(e[s].querySelectorAll("li"),{autoAlpha:0,x:30},{autoAlpha:1,x:0,stagger:.06,duration:.5,delay:.5}),bi==="cine"){const a=Hf[s];se.to(Gt,{...pu,...a.st,duration:1.7,ease:"power3.inOut",overwrite:"auto"}),as(a.capas),document.body.dataset.velo=""}},i=Oe.create({trigger:".capas-sec",start:"top top",end:"bottom bottom",onUpdate:s=>{const o=s.progress*qi.length,a=Math.min(qi.length-1,Math.floor(o));t.forEach((c,l)=>c.style.width=Ki.clamp(o-l,0,1)*100+"%"),s.isActive&&n(a)},onEnter:()=>{Gr=-1,n(0)},onEnterBack:()=>{const s=Gr;Gr=-1,n(Math.max(0,s))}});Sn("#pasosCapas").addEventListener("click",s=>{const o=s.target.closest("li");if(!o)return;const a=+o.dataset.i;window.scrollTo({top:i.start+(i.end-i.start)*((a+.5)/qi.length),behavior:"smooth"})})}let H0=0;function xh(r,e,t=1.5){se.to(pn.position,{x:r.x,y:r.y,z:r.z,duration:t,ease:"power2.inOut"}),se.to(Mi.target,{x:e.x,y:e.y,z:e.z,duration:t,ease:"power2.inOut"})}function cw(){bi!=="libre"&&(bi="libre",document.body.dataset.modo="libre",H0=scrollY,document.documentElement.style.overflow="hidden",pn.clearViewOffset(),Mi.target.copy(Mo),Mi.enabled=!0,Mi.update(),se.to(Gt,{nube:0,alerta:0,obra:1,explode:0,duration:.8}),Vf("ext"))}function V0(){if(bi==="cine")return;bi="cine",document.body.dataset.modo="cine",Mi.enabled=!1,Sn("#ficha").classList.remove("on"),document.documentElement.style.overflow="",window.scrollTo(0,H0);const r=[...document.querySelectorAll("[data-escena]")].find(e=>{const t=e.getBoundingClientRect();return t.top<=innerHeight/2&&t.bottom>=innerHeight/2});if((r==null?void 0:r.dataset.escena)==="capas"){const e=Gr;if(Gr=-1,Oe.refresh(),e>=0){const t=Hf[e];se.to(Gt,{...pu,...t.st,duration:1.5}),as(t.capas)}}else Fd((r==null?void 0:r.dataset.escena)??"hero")}function Vf(r,e=!0){const t=dn.findIndex(s=>s.info.nombre==="PISO 2"),n=dn[t].info.elev,i=Bf.isEmpty()?dn[t].caja.getCenter(new I):Pi;if(r==="salir")return V0();if(r==="ext"&&(se.to(Gt,{...pu,ctx:1,duration:1.2}),e&&as(["Arquitectura","Estructura"]),xh(new I(85,55,95),new I(0,9,0))),r==="rx"&&(se.to(Gt,{cerr:.85,bim:1,bordes:.35,ctx:.2,verHasta:9,corteY:999,explode:0,duration:1.2}),e&&as(qi.map(s=>s.d))),r==="exp"){const s=Gt.explode<.5;se.to(Gt,{explode:s?1:0,verHasta:9,corteY:999,duration:2,ease:"power1.inOut"}),xh(new I(110,s?90:60,120),new I(0,s?28:9,0),2)}r==="p2"&&(se.to(Gt,{verHasta:t,corteY:n+2.75,cerr:.9,bim:1,bordes:.2,ctx:0,explode:0,duration:1.2}),xh(new I(i.x+22,n+30,i.z+26),new I(i.x,n+1.5,i.z)))}const tu=new VE,nu=new Ge;let G0=0;fu.addEventListener("pointerdown",()=>{G0=performance.now()});const Wr=document.createElement("div");Wr.id="tip3d";document.body.appendChild(Wr);let p_=0,m_;addEventListener("pointermove",function r(e){var a,c;const t=performance.now();if(t-p_<120){Wr.style.transform=`translate(${e.clientX+16}px, ${e.clientY+16}px)`,clearTimeout(m_),m_=window.setTimeout(()=>r(e),130);return}p_=t;const n=(c=(a=e.target).closest)==null?void 0:c.call(a,".txt, .glass, button, a, .chip, .carrusel, .actores, .nube-chips, #dock, #top, .etapas, #lightbox, .flotantes .fcard, .hub, .diag, .gantt, .flujo, .arbol, .alerta, .total, .grafico, .resp, .linea, .frente");if(matchMedia("(hover: none)").matches||bi==="cine"&&n||!dn.length){Gn.meta=0,Wr.classList.remove("on");return}nu.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),tu.setFromCamera(nu,pn);const i=tu.intersectObjects(Ff.filter(l=>l.material.visible&&l.material.opacity>.25),!1).find(l=>l.point.y<=Go.constant+.01);if(!i){Gn.meta=0,Wr.classList.remove("on");return}const s=i.object.userData.nivel,o=i.object.userData.cat;(s!==Gn.nivel||o!==Gn.cat)&&(Gn.nivel=s,Gn.cat=o,Gn.v=0,dispatchEvent(new CustomEvent("destello",{detail:{x:e.clientX,y:e.clientY}}))),Gn.meta=1,Wr.innerHTML=`<b>${os[o].nombre}</b>${dn[s].info.nombre} · ${os[o].disc}`,Wr.style.transform=`translate(${e.clientX+16}px, ${e.clientY+16}px)`,Wr.classList.add("on")},{passive:!0});fu.addEventListener("pointerup",r=>{if(bi!=="libre"||performance.now()-G0>300)return;nu.set(r.clientX/innerWidth*2-1,-(r.clientY/innerHeight)*2+1),tu.setFromCamera(nu,pn);const e=tu.intersectObjects(Ff.filter(s=>s.material.visible&&s.material.opacity>.3),!1).find(s=>s.point.y<=Go.constant+.01);if(!e){Sn("#ficha").classList.remove("on");return}const t=dn[e.object.userData.nivel],n=e.object.userData.cat,i=os[n];Sn("#ficha").innerHTML=`<h4>${i.nombre}</h4><dl><dt>Capa</dt><dd>${i.disc}</dd><dt>Nivel</dt><dd>${t.info.nombre} (+${t.info.elev.toFixed(2)} m)</dd>
    <dt>Cota</dt><dd>${(e.point.y-t.grupo.position.y).toFixed(2)} m</dd>
    <dt>Fuente</dt><dd>${i.mep?"1001_Hotel_la_fotona_redes.rvt · "+e.object.userData.elementos+" elementos":"HLF_P2-P6.rvt"}</dd></dl>`,Sn("#ficha").classList.add("on")});function lw(){Sn("#capas").innerHTML=qi.map(r=>`<button class="capa" data-d="${r.d}" style="--c:${r.color}" aria-label="${r.d}" title="${r.d}">${rs(WA[r.d])}${r.corto}</button>`).join(""),Sn("#capas").addEventListener("click",r=>{const e=r.target.closest(".capa");e&&sw(e.dataset.d)}),kf(),document.querySelectorAll("[data-explorar]").forEach(r=>r.addEventListener("click",cw)),document.querySelectorAll("#vistasLibres button").forEach(r=>r.addEventListener("click",()=>Vf(r.dataset.v))),addEventListener("keydown",r=>{r.key==="Escape"&&V0()}),addEventListener("pointermove",r=>{fi.tpx=r.clientX/innerWidth-.5,fi.tpy=r.clientY/innerHeight-.5}),document.querySelectorAll("[data-escena]").forEach(r=>{const e=r.dataset.escena;e!=="capas"&&Oe.create({trigger:r,start:"top 55%",end:"bottom 45%",onEnter:()=>Fd(e),onEnterBack:()=>Fd(e)})}),Oe.create({start:0,end:"max",onUpdate:r=>{Sn("#barra i").style.width=r.progress*100+"%",fi.drift=r.progress}})}addEventListener("resize",()=>{pn.aspect=innerWidth/innerHeight,pn.updateProjectionMatrix(),ki.setSize(innerWidth,innerHeight)});let __=performance.now();function Bd(){if(document.hidden){requestAnimationFrame(Bd);return}const r=performance.now(),e=Math.min(.05,(r-__)/1e3);__=r,Gn.v+=(Gn.meta-Gn.v)*.12;const t={...Gt};if(bi==="cine"?(fi.px+=(fi.tpx-fi.px)*.04,fi.py+=(fi.tpy-fi.py)*.04,Gt.giro+=e*1.6,t.az+=fi.px*8+fi.drift*40,t.el=Ki.clamp(t.el-fi.py*4,3,85),h_(t),iw(t)):(h_(t),Mi.update()),Ni){const n=Sn("#etqCritico"),i=Ni.getWorldPosition(new I).add(new I(0,.7,0)).project(pn);n.style.opacity=String(bi==="cine"?Gt.alerta:0),n.style.left=(i.x+1)/2*innerWidth+"px",n.style.top=(1-i.y)/2*innerHeight-10+"px"}ki.render(Dr,pn),requestAnimationFrame(Bd)}(async()=>{const r=await JA();ow();const e=document.createElement("div");if(e.className="etq",e.id="etqCritico",e.innerHTML="Interferencia · RCI "+rs("cruce")+" conduit",Sn("#etiquetas").appendChild(e),Xi.ok){const t=(Xi.d*100).toFixed(1).replace(".",",")+" cm";Sn("#dCritico").textContent=t;const n=document.getElementById("dCritico2");n&&(n.textContent=t)}FA(),lw(),aw(),yA(),kA(),wA(),CA(),VA(),DA(),IA(),UA(t=>{bi==="cine"&&(t==="arq"?(as(["Arquitectura","Estructura"]),se.to(Gt,{cerr:0,bordes:.7,duration:1})):(as(["Arquitectura","Hidrosanitaria"]),se.to(Gt,{cerr:.92,bordes:.2,dist:60,el:70,duration:1.4,ease:"power3.inOut"})))}),Sn("#cargando i b").style.width="100%",setTimeout(()=>Sn("#cargando").classList.add("fin"),250),Bd(),Object.assign(Gt,{...zf.hero.st,nube:1}),se.from(Gt,{az:120,el:58,dist:260,ty:22,duration:5,ease:"power3.inOut",delay:.2}),se.to(Gt,{nube:0,duration:3.4,delay:1.4,ease:"power2.inOut"}),as(["Arquitectura","Estructura"],0),ZA(r.enu).catch(t=>console.warn("contexto",t)),Oe.refresh()})();
