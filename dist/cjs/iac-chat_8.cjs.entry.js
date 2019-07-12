'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-9d56b470.js');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var pubnub_min = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}function a(e){if(!navigator||!navigator.sendBeacon)return !1;navigator.sendBeacon(e);}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),l=n(40),h=r(l),f=n(41),p=r(f),d=n(42),y=(n(5),function(e){function t(e){i(this,t);var n=e.listenToBrowserNetworkEvents,r=void 0===n||n;e.db=p.default,e.sdkFamily="Web",e.networking=new h.default({del:d.del,get:d.get,post:d.post,sendBeacon:a});var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r&&(window.addEventListener("offline",function(){o.networkDownDetected();}),window.addEventListener("online",function(){o.networkUpDetected();})),o}return o(t,e),t}(c.default));t.default=y,e.exports=t.default;},function(e,t,n){function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=i(a),c=n(6),l=i(c),h=n(8),f=i(h),p=n(9),d=i(p),y=n(16),g=i(y),b=n(17),v=r(b),_=n(18),m=r(_),k=n(19),P=r(k),O=n(20),T=r(O),S=n(21),w=r(S),C=n(22),M=r(C),E=n(23),x=r(E),N=n(24),R=r(N),A=n(25),D=r(A),K=n(26),j=r(K),G=n(27),U=r(G),I=n(28),H=r(I),B=n(29),L=r(B),q=n(30),F=r(q),z=n(31),X=r(z),W=n(32),J=r(W),V=n(33),$=r(V),Q=n(34),Y=r(Q),Z=n(35),ee=r(Z),te=n(36),ne=r(te),re=n(37),ie=r(re),se=n(38),oe=r(se),ae=n(12),ue=r(ae),ce=n(39),le=r(ce),he=n(13),fe=i(he),pe=n(10),de=i(pe),ye=(n(5),n(3)),ge=i(ye),be=function(){function e(t){var n=this;s(this,e);var r=t.db,i=t.networking,o=this._config=new u.default({setup:t,db:r}),a=new l.default({config:o});i.init(o);var c={config:o,networking:i,crypto:a},h=g.default.bind(this,c,ue),p=g.default.bind(this,c,j),y=g.default.bind(this,c,H),b=g.default.bind(this,c,F),_=g.default.bind(this,c,le),k=this._listenerManager=new d.default,O=new f.default({timeEndpoint:h,leaveEndpoint:p,heartbeatEndpoint:y,setStateEndpoint:b,subscribeEndpoint:_,crypto:c.crypto,config:c.config,listenerManager:k});this.addListener=k.addListener.bind(k),this.removeListener=k.removeListener.bind(k),this.removeAllListeners=k.removeAllListeners.bind(k),this.channelGroups={listGroups:g.default.bind(this,c,T),listChannels:g.default.bind(this,c,w),addChannels:g.default.bind(this,c,v),removeChannels:g.default.bind(this,c,m),deleteGroup:g.default.bind(this,c,P)},this.push={addChannels:g.default.bind(this,c,M),removeChannels:g.default.bind(this,c,x),deleteDevice:g.default.bind(this,c,D),listChannels:g.default.bind(this,c,R)},this.hereNow=g.default.bind(this,c,X),this.whereNow=g.default.bind(this,c,U),this.getState=g.default.bind(this,c,L),this.setState=O.adaptStateChange.bind(O),this.grant=g.default.bind(this,c,$),this.audit=g.default.bind(this,c,J),this.publish=g.default.bind(this,c,Y),this.fire=function(e,t){return e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.history=g.default.bind(this,c,ee),this.deleteMessages=g.default.bind(this,c,ne),this.messageCounts=g.default.bind(this,c,ie),this.fetchMessages=g.default.bind(this,c,oe),this.time=h,this.subscribe=O.adaptSubscribeChange.bind(O),this.presence=O.adaptPresenceChange.bind(O),this.unsubscribe=O.adaptUnsubscribeChange.bind(O),this.disconnect=O.disconnect.bind(O),this.reconnect=O.reconnect.bind(O),this.destroy=function(e){O.unsubscribeAll(e),O.disconnect();},this.stop=this.destroy,this.unsubscribeAll=O.unsubscribeAll.bind(O),this.getSubscribedChannels=O.getSubscribedChannels.bind(O),this.getSubscribedChannelGroups=O.getSubscribedChannelGroups.bind(O),this.encrypt=a.encrypt.bind(a),this.decrypt=a.decrypt.bind(a),this.getAuthKey=c.config.getAuthKey.bind(c.config),this.setAuthKey=c.config.setAuthKey.bind(c.config),this.setCipherKey=c.config.setCipherKey.bind(c.config),this.getUUID=c.config.getUUID.bind(c.config),this.setUUID=c.config.setUUID.bind(c.config),this.getFilterExpression=c.config.getFilterExpression.bind(c.config),this.setFilterExpression=c.config.setFilterExpression.bind(c.config),this.setHeartbeatInterval=c.config.setHeartbeatInterval.bind(c.config),i.hasModule("proxy")&&(this.setProxy=function(e){c.config.setProxy(e),n.reconnect();});}return o(e,[{key:"getVersion",value:function(){return this._config.getVersion()}},{key:"networkDownDetected",value:function(){this._listenerManager.announceNetworkDown(),this._config.restore?this.disconnect():this.destroy(!0);}},{key:"networkUpDetected",value:function(){this._listenerManager.announceNetworkUp(),this.reconnect();}}],[{key:"generateUUID",value:function(){return ge.default.createUUID()}}]),e}();be.OPERATIONS=fe.default,be.CATEGORIES=de.default,t.default=be,e.exports=t.default;},function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(s),a=(n(5),function(){function e(t){var n=t.setup,i=t.db;r(this,e),this._db=i,this.instanceId="pn-"+o.default.createUUID(),this.secretKey=n.secretKey||n.secret_key,this.subscribeKey=n.subscribeKey||n.subscribe_key,this.publishKey=n.publishKey||n.publish_key,this.sdkName=n.sdkName,this.sdkFamily=n.sdkFamily,this.partnerId=n.partnerId,this.setAuthKey(n.authKey),this.setCipherKey(n.cipherKey),this.setFilterExpression(n.filterExpression),this.origin=n.origin||"ps.pndsn.com",this.secure=n.ssl||!1,this.restore=n.restore||!1,this.proxy=n.proxy,this.keepAlive=n.keepAlive,this.keepAliveSettings=n.keepAliveSettings,this.autoNetworkDetection=n.autoNetworkDetection||!1,this.dedupeOnSubscribe=n.dedupeOnSubscribe||!1,this.maximumCacheSize=n.maximumCacheSize||100,this.customEncrypt=n.customEncrypt,this.customDecrypt=n.customDecrypt,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=n.logVerbosity||!1,this.suppressLeaveEvents=n.suppressLeaveEvents||!1,this.announceFailedHeartbeats=n.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=n.announceSuccessfulHeartbeats||!1,this.useInstanceId=n.useInstanceId||!1,this.useRequestId=n.useRequestId||!1,this.requestMessageCountThreshold=n.requestMessageCountThreshold,this.setTransactionTimeout(n.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(n.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(n.useSendBeacon||!0),this.setPresenceTimeout(n.presenceTimeout||300),null!=n.heartbeatInterval&&this.setHeartbeatInterval(n.heartbeatInterval),this.setUUID(this._decideUUID(n.uuid));}return i(e,[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set(this.subscribeKey+"uuid",e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return this._presenceTimeout=e,this.setHeartbeatInterval(this._presenceTimeout/2-1),this}},{key:"setProxy",value:function(e){this.proxy=e;}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return "4.24.3"}},{key:"_decideUUID",value:function(e){return e||(this._db&&this._db.get&&this._db.get(this.subscribeKey+"uuid")?this._db.get(this.subscribeKey+"uuid"):"pn-"+o.default.createUUID())}}]),e}());t.default=a,e.exports=t.default;},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={createUUID:function(){return i.default.uuid?i.default.uuid():(0, i.default)()}},e.exports=t.default;},function(e,t,n){var r,i,s;!function(n,o){i=[t],r=o,void 0!==(s="function"==typeof r?r.apply(t,i):r)&&(e.exports=s);}(0,function(e){function t(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}function n(e,t){var n=r[t||"all"];return n&&n.test(e)||!1}var r={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};t.isUUID=n,t.VERSION="0.1.0",e.uuid=t,e.isUUID=n;});},function(e,t){e.exports={};},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=(r(o),n(7)),u=r(a),c=function(){function e(t){var n=t.config;i(this,e),this._config=n,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"};}return s(e,[{key:"HMACSHA256",value:function(e){return u.default.HmacSHA256(e,this._config.secretKey).toString(u.default.enc.Base64)}},{key:"SHA256",value:function(e){return u.default.SHA256(e).toString(u.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),-1===this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())&&(t.keyEncoding=this._defaultOptions.keyEncoding),-1===this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))&&(t.keyLength=this._defaultOptions.keyLength),-1===this._allowedModes.indexOf(t.mode.toLowerCase())&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return "base64"===t.keyEncoding?u.default.enc.Base64.parse(e):"hex"===t.keyEncoding?u.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?u.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return "ecb"===e.mode?u.default.mode.ECB:u.default.mode.CBC}},{key:"_getIV",value:function(e){return "cbc"===e.mode?u.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){return this._config.customEncrypt?this._config.customEncrypt(e):this.pnEncrypt(e,t,n)}},{key:"decrypt",value:function(e,t,n){return this._config.customDecrypt?this._config.customDecrypt(e):this.pnDecrypt(e,t,n)}},{key:"pnEncrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);return u.default.AES.encrypt(e,s,{iv:r,mode:i}).ciphertext.toString(u.default.enc.Base64)||e}},{key:"pnDecrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);try{var o=u.default.enc.Base64.parse(e),a=u.default.AES.decrypt({ciphertext:o},s,{iv:r,mode:i}).toString(u.default.enc.Utf8);return JSON.parse(a)}catch(e){return null}}}]),e}();t.default=c,e.exports=t.default;},function(e,t){var n=n||function(e,t){var n={},r=n.lib={},i=function(){},s=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments);}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString);},clone:function(){return this.init.prototype.extend(this)}},o=r.WordArray=s.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length;},toString:function(e){return (e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4);},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new o.init(n,t)}}),a=n.enc={},u=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16));}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new o.init(n,t/2)}},c=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new o.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=r.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0;},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes;},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0);if(t=a*s,i=e.min(4*t,i),t){for(var u=0;u<t;u+=s)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=i;}return new o.init(u,i)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=h.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset();},reset:function(){h.reset.call(this),this._doReset();},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}});var f=n.algo={};return n}(Math);!function(e){for(var t=n,r=t.lib,i=r.WordArray,s=r.Hasher,r=t.algo,o=[],a=[],u=function(e){return 4294967296*(e-(0|e))|0},c=2,l=0;64>l;){var h;e:{h=c;for(var f=e.sqrt(h),p=2;p<=f;p++)if(!(h%p)){h=!1;break e}h=!0;}h&&(8>l&&(o[l]=u(e.pow(c,.5))),a[l]=u(e.pow(c,1/3)),l++),c++;}var d=[],r=r.SHA256=s.extend({_doReset:function(){this._hash=new i.init(o.slice(0));},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],o=n[3],u=n[4],c=n[5],l=n[6],h=n[7],f=0;64>f;f++){if(16>f)d[f]=0|e[t+f];else{var p=d[f-15],y=d[f-2];d[f]=((p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3)+d[f-7]+((y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10)+d[f-16];}p=h+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&c^~u&l)+a[f]+d[f],y=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&s^i&s),h=l,l=c,c=u,u=o+p|0,o=s,s=i,i=r,r=p+y|0;}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+u|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0;},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=s._createHelper(r),t.HmacSHA256=s._createHmacHelper(r);}(Math),function(){var e=n,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),a=s.words,u=o.words,c=0;c<r;c++)a[c]^=1549556828,u[c]^=909522486;s.sigBytes=o.sigBytes=i,this.reset();},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey);},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}});}(),function(){var e=n,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var s=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,o=0;4>o&&i+.75*o<n;o++)e.push(r.charAt(s>>>6*(3-o)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64);i&&-1!=(i=e.indexOf(i))&&(n=i);for(var i=[],s=0,o=0;o<n;o++)if(o%4){var a=r.indexOf(e.charAt(o-1))<<o%4*2,u=r.indexOf(e.charAt(o))>>>6-o%4*2;i[s>>>2]|=(a|u)<<24-s%4*8,s++;}return t.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};}(),function(e){function t(e,t,n,r,i,s,o){return ((e=e+(t&n|~t&r)+i+o)<<s|e>>>32-s)+t}function r(e,t,n,r,i,s,o){return ((e=e+(t&r|n&~r)+i+o)<<s|e>>>32-s)+t}function i(e,t,n,r,i,s,o){return ((e=e+(t^n^r)+i+o)<<s|e>>>32-s)+t}function s(e,t,n,r,i,s,o){return ((e=e+(n^(t|~r))+i+o)<<s|e>>>32-s)+t}for(var o=n,a=o.lib,u=a.WordArray,c=a.Hasher,a=o.algo,l=[],h=0;64>h;h++)l[h]=4294967296*e.abs(e.sin(h+1))|0;a=a.MD5=c.extend({_doReset:function(){this._hash=new u.init([1732584193,4023233417,2562383102,271733878]);},_doProcessBlock:function(e,n){for(var o=0;16>o;o++){var a=n+o,u=e[a];e[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8);}var o=this._hash.words,a=e[n+0],u=e[n+1],c=e[n+2],h=e[n+3],f=e[n+4],p=e[n+5],d=e[n+6],y=e[n+7],g=e[n+8],b=e[n+9],v=e[n+10],_=e[n+11],m=e[n+12],k=e[n+13],P=e[n+14],O=e[n+15],T=o[0],S=o[1],w=o[2],C=o[3],T=t(T,S,w,C,a,7,l[0]),C=t(C,T,S,w,u,12,l[1]),w=t(w,C,T,S,c,17,l[2]),S=t(S,w,C,T,h,22,l[3]),T=t(T,S,w,C,f,7,l[4]),C=t(C,T,S,w,p,12,l[5]),w=t(w,C,T,S,d,17,l[6]),S=t(S,w,C,T,y,22,l[7]),T=t(T,S,w,C,g,7,l[8]),C=t(C,T,S,w,b,12,l[9]),w=t(w,C,T,S,v,17,l[10]),S=t(S,w,C,T,_,22,l[11]),T=t(T,S,w,C,m,7,l[12]),C=t(C,T,S,w,k,12,l[13]),w=t(w,C,T,S,P,17,l[14]),S=t(S,w,C,T,O,22,l[15]),T=r(T,S,w,C,u,5,l[16]),C=r(C,T,S,w,d,9,l[17]),w=r(w,C,T,S,_,14,l[18]),S=r(S,w,C,T,a,20,l[19]),T=r(T,S,w,C,p,5,l[20]),C=r(C,T,S,w,v,9,l[21]),w=r(w,C,T,S,O,14,l[22]),S=r(S,w,C,T,f,20,l[23]),T=r(T,S,w,C,b,5,l[24]),C=r(C,T,S,w,P,9,l[25]),w=r(w,C,T,S,h,14,l[26]),S=r(S,w,C,T,g,20,l[27]),T=r(T,S,w,C,k,5,l[28]),C=r(C,T,S,w,c,9,l[29]),w=r(w,C,T,S,y,14,l[30]),S=r(S,w,C,T,m,20,l[31]),T=i(T,S,w,C,p,4,l[32]),C=i(C,T,S,w,g,11,l[33]),w=i(w,C,T,S,_,16,l[34]),S=i(S,w,C,T,P,23,l[35]),T=i(T,S,w,C,u,4,l[36]),C=i(C,T,S,w,f,11,l[37]),w=i(w,C,T,S,y,16,l[38]),S=i(S,w,C,T,v,23,l[39]),T=i(T,S,w,C,k,4,l[40]),C=i(C,T,S,w,a,11,l[41]),w=i(w,C,T,S,h,16,l[42]),S=i(S,w,C,T,d,23,l[43]),T=i(T,S,w,C,b,4,l[44]),C=i(C,T,S,w,m,11,l[45]),w=i(w,C,T,S,O,16,l[46]),S=i(S,w,C,T,c,23,l[47]),T=s(T,S,w,C,a,6,l[48]),C=s(C,T,S,w,y,10,l[49]),w=s(w,C,T,S,P,15,l[50]),S=s(S,w,C,T,p,21,l[51]),T=s(T,S,w,C,m,6,l[52]),C=s(C,T,S,w,h,10,l[53]),w=s(w,C,T,S,v,15,l[54]),S=s(S,w,C,T,u,21,l[55]),T=s(T,S,w,C,g,6,l[56]),C=s(C,T,S,w,O,10,l[57]),w=s(w,C,T,S,d,15,l[58]),S=s(S,w,C,T,k,21,l[59]),T=s(T,S,w,C,f,6,l[60]),C=s(C,T,S,w,_,10,l[61]),w=s(w,C,T,S,c,15,l[62]),S=s(S,w,C,T,b,21,l[63]);o[0]=o[0]+T|0,o[1]=o[1]+S|0,o[2]=o[2]+w|0,o[3]=o[3]+C|0;},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296);for(n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),t=this._hash,n=t.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),o.MD5=c._createHelper(a),o.HmacMD5=c._createHmacHelper(a);}(Math),function(){var e=n,t=e.lib,r=t.Base,i=t.WordArray,t=e.algo,s=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e);},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,a=n.keySize,n=n.iterations;o.length<a;){u&&r.update(u);var u=r.update(e).finalize(t);r.reset();for(var c=1;c<n;c++)u=r.finalize(u),r.reset();s.concat(u);}return s.sigBytes=4*a,s}});e.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)};}(),n.lib.Cipher||function(e){var t=n,r=t.lib,i=r.Base,s=r.WordArray,o=r.BufferedBlockAlgorithm,a=t.enc.Base64,u=t.algo.EvpKDF,c=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset();},reset:function(){o.reset.call(this),this._doReset();},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return {encrypt:function(t,n,r){return ("string"==typeof n?y:d).encrypt(e,t,n,r)},decrypt:function(t,n,r){return ("string"==typeof n?y:d).decrypt(e,t,n,r)}}}});r.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},h=function(e,t,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var i=0;i<n;i++)e[t+i]^=r[i];},f=(r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t;}})).extend();f.Encryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;h.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r);}}),f.Decryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),h.call(this,e,t,r),this._prevBlock=i;}}),l=l.CBC=f,f=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,n=n-e.sigBytes%n,r=n<<24|n<<16|n<<8|n,i=[],o=0;o<n;o+=4)i.push(r);n=s.create(i,n),e.concat(n);},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2];}},r.BlockCipher=c.extend({cfg:c.cfg.extend({mode:l,padding:f}),reset:function(){c.reset.call(this);var e=this.cfg,t=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words);},_doProcessBlock:function(e,t){this._mode.processBlock(e,t);},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0);}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var p=r.CipherParams=i.extend({init:function(e){this.mixIn(e);},toString:function(e){return (e||this.formatter).stringify(this)}}),l=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return e=e.salt,(e?s.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){e=a.parse(e);var t=e.words;if(1398893684==t[0]&&1701076831==t[1]){var n=s.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16;}return p.create({ciphertext:e,salt:n})}},d=r.SerializableCipher=i.extend({cfg:i.extend({format:l}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,p.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return "string"==typeof e?t.parse(e,this):e}}),t=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=s.random(8)),e=u.create({keySize:t+n}).compute(e,r),n=s.create(e.words.slice(t),4*n),e.sigBytes=4*t,p.create({key:e,iv:n,salt:r})}},y=r.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:t}),encrypt:function(e,t,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,e=d.encrypt.call(this,e,t,n.key,r),e.mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,d.decrypt.call(this,e,t,n.key,r)}});}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,i=[],s=[],o=[],a=[],u=[],c=[],l=[],h=[],f=[],p=[],d=[],y=0;256>y;y++)d[y]=128>y?y<<1:y<<1^283;for(var g=0,b=0,y=0;256>y;y++){var v=b^b<<1^b<<2^b<<3^b<<4,v=v>>>8^255&v^99;i[g]=v,s[v]=g;var _=d[g],m=d[_],k=d[m],P=257*d[v]^16843008*v;o[g]=P<<24|P>>>8,a[g]=P<<16|P>>>16,u[g]=P<<8|P>>>24,c[g]=P,P=16843009*k^65537*m^257*_^16843008*g,l[v]=P<<24|P>>>8,h[v]=P<<16|P>>>16,f[v]=P<<8|P>>>24,p[v]=P,g?(g=_^d[d[d[k^_]]],b^=d[d[b]]):g=b=1;}var O=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,e=4*((this._nRounds=n+6)+1),r=this._keySchedule=[],s=0;s<e;s++)if(s<n)r[s]=t[s];else{var o=r[s-1];s%n?6<n&&4==s%n&&(o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o]):(o=o<<8|o>>>24,o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o],o^=O[s/n|0]<<24),r[s]=r[s-n]^o;}for(t=this._invKeySchedule=[],n=0;n<e;n++)s=e-n,o=n%4?r[s]:r[s-4],t[n]=4>n||4>=s?o:l[i[o>>>24]]^h[i[o>>>16&255]]^f[i[o>>>8&255]]^p[i[255&o]];},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,a,u,c,i);},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,h,f,p,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n;},_doCryptBlock:function(e,t,n,r,i,s,o,a){for(var u=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],h=e[t+2]^n[2],f=e[t+3]^n[3],p=4,d=1;d<u;d++)var y=r[c>>>24]^i[l>>>16&255]^s[h>>>8&255]^o[255&f]^n[p++],g=r[l>>>24]^i[h>>>16&255]^s[f>>>8&255]^o[255&c]^n[p++],b=r[h>>>24]^i[f>>>16&255]^s[c>>>8&255]^o[255&l]^n[p++],f=r[f>>>24]^i[c>>>16&255]^s[l>>>8&255]^o[255&h]^n[p++],c=y,l=g,h=b;y=(a[c>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&f])^n[p++],g=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[f>>>8&255]<<8|a[255&c])^n[p++],b=(a[h>>>24]<<24|a[f>>>16&255]<<16|a[c>>>8&255]<<8|a[255&l])^n[p++],f=(a[f>>>24]<<24|a[c>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[p++],e[t]=y,e[t+1]=g,e[t+2]=b,e[t+3]=f;},keySize:8});e.AES=t._createHelper(r);}(),n.mode.ECB=function(){var e=n.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t);}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t);}}),e}(),e.exports=n;},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(6),a=(r(o),n(2)),u=(r(a),n(9)),c=(r(u),n(11)),l=r(c),h=n(14),f=r(h),p=n(15),d=r(p),y=(n(5),n(10)),g=r(y),b=function(){function e(t){var n=t.subscribeEndpoint,r=t.leaveEndpoint,s=t.heartbeatEndpoint,o=t.setStateEndpoint,a=t.timeEndpoint,u=t.config,c=t.crypto,h=t.listenerManager;i(this,e),this._listenerManager=h,this._config=u,this._leaveEndpoint=r,this._heartbeatEndpoint=s,this._setStateEndpoint=o,this._subscribeEndpoint=n,this._crypto=c,this._channels={},this._presenceChannels={},this._heartbeatChannels={},this._heartbeatChannelGroups={},this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._currentTimetoken=0,this._lastTimetoken=0,this._storedTimetoken=null,this._subscriptionStatusAnnounced=!1,this._isOnline=!0,this._reconnectionManager=new l.default({timeEndpoint:a}),this._dedupingManager=new f.default({config:u});}return s(e,[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,s=void 0===i?[]:i,o=e.channelGroups,a=void 0===o?[]:o;return s.forEach(function(e){e in n._channels&&(n._channels[e].state=r);}),a.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r);}),this._setStateEndpoint({state:r,channels:s,channelGroups:a},t)}},{key:"adaptPresenceChange",value:function(e){var t=this,n=e.connected,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s;n?(i.forEach(function(e){t._heartbeatChannels[e]={state:{}};}),o.forEach(function(e){t._heartbeatChannelGroups[e]={state:{}};})):(i.forEach(function(e){e in t._heartbeatChannels&&delete t._heartbeatChannels[e];}),o.forEach(function(e){e in t._heartbeatChannelGroups&&delete t._heartbeatChannelGroups[e];}),!1===this._config.suppressLeaveEvents&&this._leaveEndpoint({channels:i,channelGroups:o},function(e){t._listenerManager.announceStatus(e);})),this.reconnect();}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,a=e.withPresence,u=void 0!==a&&a,c=e.withHeartbeats,l=void 0!==c&&c;if(!this._config.subscribeKey||""===this._config.subscribeKey)return void(console&&console.log&&console.log("subscribe key missing; aborting subscribe"));n&&(this._lastTimetoken=this._currentTimetoken,
this._currentTimetoken=n),"0"!==this._currentTimetoken&&0!==this._currentTimetoken&&(this._storedTimetoken=this._currentTimetoken,this._currentTimetoken=0),i.forEach(function(e){t._channels[e]={state:{}},u&&(t._presenceChannels[e]={}),(l||t._config.getHeartbeatInterval())&&(t._heartbeatChannels[e]={}),t._pendingChannelSubscriptions.push(e);}),o.forEach(function(e){t._channelGroups[e]={state:{}},u&&(t._presenceChannelGroups[e]={}),(l||t._config.getHeartbeatInterval())&&(t._heartbeatChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e);}),this._subscriptionStatusAnnounced=!1,this.reconnect();}},{key:"adaptUnsubscribeChange",value:function(e,t){var n=this,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,a=[],u=[];i.forEach(function(e){e in n._channels&&(delete n._channels[e],a.push(e),e in n._heartbeatChannels&&delete n._heartbeatChannels[e]),e in n._presenceChannels&&(delete n._presenceChannels[e],a.push(e));}),o.forEach(function(e){e in n._channelGroups&&(delete n._channelGroups[e],u.push(e),e in n._heartbeatChannelGroups&&delete n._heartbeatChannelGroups[e]),e in n._presenceChannelGroups&&(delete n._channelGroups[e],u.push(e));}),0===a.length&&0===u.length||(!1!==this._config.suppressLeaveEvents||t||this._leaveEndpoint({channels:a,channelGroups:u},function(e){e.affectedChannels=a,e.affectedChannelGroups=u,e.currentTimetoken=n._currentTimetoken,e.lastTimetoken=n._lastTimetoken,n._listenerManager.announceStatus(e);}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._lastTimetoken=0,this._currentTimetoken=0,this._storedTimetoken=null,this._region=null,this._reconnectionManager.stopPolling()),this.reconnect());}},{key:"unsubscribeAll",value:function(e){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()},e);}},{key:"getHeartbeatChannels",value:function(){return Object.keys(this._heartbeatChannels)}},{key:"getHeartbeatChannelGroups",value:function(){return Object.keys(this._heartbeatChannelGroups)}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer();}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer(),this._reconnectionManager.stopPolling();}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),0!==this._config.getHeartbeatInterval()&&(this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval()));}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null);}},{key:"_performHeartbeatLoop",value:function(){var e=this,t=this.getHeartbeatChannels(),n=this.getHeartbeatChannelGroups(),r={};if(0!==t.length||0!==n.length){this.getSubscribedChannels().forEach(function(t){var n=e._channels[t].state;Object.keys(n).length&&(r[t]=n);}),this.getSubscribedChannelGroups().forEach(function(t){var n=e._channelGroups[t].state;Object.keys(n).length&&(r[t]=n);});var i=function(t){t.error&&e._config.announceFailedHeartbeats&&e._listenerManager.announceStatus(t),t.error&&e._config.autoNetworkDetection&&e._isOnline&&(e._isOnline=!1,e.disconnect(),e._listenerManager.announceNetworkDown(),e.reconnect()),!t.error&&e._config.announceSuccessfulHeartbeats&&e._listenerManager.announceStatus(t);};this._heartbeatEndpoint({channels:t,channelGroups:n,state:r},i.bind(this));}}},{key:"_startSubscribeLoop",value:function(){var e=this;this._stopSubscribeLoop();var t={},n=[],r=[];if(Object.keys(this._channels).forEach(function(r){var i=e._channels[r].state;Object.keys(i).length&&(t[r]=i),n.push(r);}),Object.keys(this._presenceChannels).forEach(function(e){n.push(e+"-pnpres");}),Object.keys(this._channelGroups).forEach(function(n){var i=e._channelGroups[n].state;Object.keys(i).length&&(t[n]=i),r.push(n);}),Object.keys(this._presenceChannelGroups).forEach(function(e){r.push(e+"-pnpres");}),0!==n.length||0!==r.length){var i={channels:n,channelGroups:r,state:t,timetoken:this._currentTimetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(i,this._processSubscribeResponse.bind(this));}}},{key:"_processSubscribeResponse",value:function(e,t){var n=this;if(e.error)return void(e.category===g.default.PNTimeoutCategory?this._startSubscribeLoop():e.category===g.default.PNNetworkIssuesCategory?(this.disconnect(),e.error&&this._config.autoNetworkDetection&&this._isOnline&&(this._isOnline=!1,this._listenerManager.announceNetworkDown()),this._reconnectionManager.onReconnection(function(){n._config.autoNetworkDetection&&!n._isOnline&&(n._isOnline=!0,n._listenerManager.announceNetworkUp()),n.reconnect(),n._subscriptionStatusAnnounced=!0;var t={category:g.default.PNReconnectedCategory,operation:e.operation,lastTimetoken:n._lastTimetoken,currentTimetoken:n._currentTimetoken};n._listenerManager.announceStatus(t);}),this._reconnectionManager.startPolling(),this._listenerManager.announceStatus(e)):e.category===g.default.PNBadRequestCategory?(this._stopHeartbeatTimer(),this._listenerManager.announceStatus(e)):this._listenerManager.announceStatus(e));if(this._storedTimetoken?(this._currentTimetoken=this._storedTimetoken,this._storedTimetoken=null):(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=t.metadata.timetoken),!this._subscriptionStatusAnnounced){var r={};r.category=g.default.PNConnectedCategory,r.operation=e.operation,r.affectedChannels=this._pendingChannelSubscriptions,r.subscribedChannels=this.getSubscribedChannels(),r.affectedChannelGroups=this._pendingChannelGroupSubscriptions,r.lastTimetoken=this._lastTimetoken,r.currentTimetoken=this._currentTimetoken,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(r),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[];}var i=t.messages||[],s=this._config,o=s.requestMessageCountThreshold,a=s.dedupeOnSubscribe;if(o&&i.length>=o){var u={};u.category=g.default.PNRequestMessageCountExceededCategory,u.operation=e.operation,this._listenerManager.announceStatus(u);}i.forEach(function(e){var t=e.channel,r=e.subscriptionMatch,i=e.publishMetaData;if(t===r&&(r=null),a){if(n._dedupingManager.isDuplicate(e))return;n._dedupingManager.addEntry(e);}if(d.default.endsWith(e.channel,"-pnpres")){var s={};s.channel=null,s.subscription=null,s.actualChannel=null!=r?t:null,s.subscribedChannel=null!=r?r:t,t&&(s.channel=t.substring(0,t.lastIndexOf("-pnpres"))),r&&(s.subscription=r.substring(0,r.lastIndexOf("-pnpres"))),s.action=e.payload.action,s.state=e.payload.data,s.timetoken=i.publishTimetoken,s.occupancy=e.payload.occupancy,s.uuid=e.payload.uuid,s.timestamp=e.payload.timestamp,e.payload.join&&(s.join=e.payload.join),e.payload.leave&&(s.leave=e.payload.leave),e.payload.timeout&&(s.timeout=e.payload.timeout),n._listenerManager.announcePresence(s);}else{var o={};o.channel=null,o.subscription=null,o.actualChannel=null!=r?t:null,o.subscribedChannel=null!=r?r:t,o.channel=t,o.subscription=r,o.timetoken=i.publishTimetoken,o.publisher=e.issuingClientId,e.userMetadata&&(o.userMetadata=e.userMetadata),n._config.cipherKey?o.message=n._crypto.decrypt(e.payload):o.message=e.payload,n._listenerManager.announceMessage(o);}}),this._region=t.metadata.region,this._startSubscribeLoop();}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&("function"==typeof this._subscribeCall.abort&&this._subscribeCall.abort(),this._subscribeCall=null);}}]),e}();t.default=b,e.exports=t.default;},function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(n(5),n(10)),o=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(){r(this,e),this._listeners=[];}return i(e,[{key:"addListener",value:function(e){this._listeners.push(e);}},{key:"removeListener",value:function(e){var t=[];this._listeners.forEach(function(n){n!==e&&t.push(n);}),this._listeners=t;}},{key:"removeAllListeners",value:function(){this._listeners=[];}},{key:"announcePresence",value:function(e){this._listeners.forEach(function(t){t.presence&&t.presence(e);});}},{key:"announceStatus",value:function(e){this._listeners.forEach(function(t){t.status&&t.status(e);});}},{key:"announceMessage",value:function(e){this._listeners.forEach(function(t){t.message&&t.message(e);});}},{key:"announceNetworkUp",value:function(){var e={};e.category=o.default.PNNetworkUpCategory,this.announceStatus(e);}},{key:"announceNetworkDown",value:function(){var e={};e.category=o.default.PNNetworkDownCategory,this.announceStatus(e);}}]),e}();t.default=a,e.exports=t.default;},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory",PNRequestMessageCountExceededCategory:"PNRequestMessageCountExceededCategory"},e.exports=t.default;},function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(12),o=(function(e){e&&e.__esModule;}(s),n(5),function(){function e(t){var n=t.timeEndpoint;r(this,e),this._timeEndpoint=n;}return i(e,[{key:"onReconnection",value:function(e){this._reconnectionCallback=e;}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3);}},{key:"stopPolling",value:function(){clearInterval(this._timeTimer);}},{key:"_performTimeLoop",value:function(){var e=this;this._timeEndpoint(function(t){t.error||(clearInterval(e._timeTimer),e._reconnectionCallback());});}}]),e}());t.default=o,e.exports=t.default;},function(e,t,n){function r(){return h.default.PNTimeOperation}function i(){return "/time/0"}function s(e){return e.config.getTransactionTimeout()}function o(){return {}}function a(){return !1}function u(e,t){return {timetoken:t[0]}}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.getURL=i,t.getRequestTimeout=s,t.prepareParams=o,t.isAuthSupported=a,t.handleResponse=u,t.validateParams=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNDeleteMessagesOperation:"PNDeleteMessagesOperation",PNFetchMessagesOperation:"PNFetchMessagesOperation",PNMessageCounts:"PNMessageCountsOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerAudit:"PNAccessManagerAudit"},e.exports=t.default;},function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),o=(function(e){e&&e.__esModule;}(s),n(5),function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n+=1){t=(t<<5)-t+e.charCodeAt(n),t&=t;}return t}),a=function(){function e(t){var n=t.config;r(this,e),this.hashHistory=[],this._config=n;}return i(e,[{key:"getKey",value:function(e){var t=o(JSON.stringify(e.payload)).toString();return e.publishMetaData.publishTimetoken+"-"+t}},{key:"isDuplicate",value:function(e){return this.hashHistory.includes(this.getKey(e))}},{key:"addEntry",value:function(e){this.hashHistory.length>=this._config.maximumCacheSize&&this.hashHistory.shift(),this.hashHistory.push(this.getKey(e));}},{key:"clearHistory",value:function(){this.hashHistory=[];}}]),e}();t.default=a,e.exports=t.default;},function(e,t){function n(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}function r(e){return encodeURIComponent(e).replace(/[!~*'()]/g,function(e){return "%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return n(e).sort()}function s(e){return i(e).map(function(t){return t+"="+r(e[t])}).join("&")}function o(e,t){return -1!==e.indexOf(t,this.length-t.length)}function a(){var e=void 0,t=void 0;return {promise:new Promise(function(n,r){e=n,t=r;}),reject:t,fulfill:e}}e.exports={signPamFromParams:s,endsWith:o,createPromise:a,encodeString:r};},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}function a(e,t){return e.type=t,e.error=!0,e}function u(e){return a({message:e},"validationError")}function c(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.getURL(t,n)}function l(e){if(e.sdkName)return e.sdkName;var t="PubNub-JS-"+e.sdkFamily;return e.partnerId&&(t+="-"+e.partnerId),t+="/"+e.getVersion()}function h(e,t,n){var r=e.config,i=e.crypto;n.timestamp=Math.floor((new Date).getTime()/1e3);var s=r.subscribeKey+"\n"+r.publishKey+"\n"+t+"\n";s+=y.default.signPamFromParams(n);var o=i.HMACSHA256(s);o=o.replace(/\+/g,"-"),o=o.replace(/\//g,"_"),n.signature=o;}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.networking,r=e.config,i=null,s=null,o={};t.getOperation()===v.default.PNTimeOperation||t.getOperation()===v.default.PNChannelGroupsOperation?i=arguments.length<=2?void 0:arguments[2]:(o=arguments.length<=2?void 0:arguments[2],i=arguments.length<=3?void 0:arguments[3]),"undefined"==typeof Promise||i||(s=y.default.createPromise());var a=t.validateParams(e,o);if(!a){var f=t.prepareParams(e,o),d=c(t,e,o),g=void 0,b={url:d,operation:t.getOperation(),timeout:t.getRequestTimeout(e)};f.uuid=r.UUID,f.pnsdk=l(r),r.useInstanceId&&(f.instanceid=r.instanceId),r.useRequestId&&(f.requestid=p.default.createUUID()),t.isAuthSupported()&&r.getAuthKey()&&(f.auth=r.getAuthKey()),r.secretKey&&h(e,d,f);var m=function(n,r){if(n.error)return void(i?i(n):s&&s.reject(new _("PubNub call failed, check status for details",n)));var a=t.handleResponse(e,r,o);i?i(n,a):s&&s.fulfill(a);};if(t.usePost&&t.usePost(e,o)){var k=t.postPayload(e,o);g=n.POST(f,k,b,m);}else g=t.useDelete&&t.useDelete()?n.DELETE(f,b,m):n.GET(f,b,m);return t.getOperation()===v.default.PNSubscribeOperation?g:s?s.promise:void 0}return i?i(u(a)):s?(s.reject(new _("Validation failed, check status for details",u(a))),s.promise):void 0};var f=n(3),p=r(f),d=(n(5),n(15)),y=r(d),g=n(2),b=(r(g),n(13)),v=r(b),_=function(e){function t(e,n){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.name=r.constructor.name,r.status=n,r.message=e,r}return o(t,e),t}(Error);e.exports=t.default;},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAddChannelsToGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return "/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+d.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.channels;return {add:(void 0===n?[]:n).join(",")}}function l(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveChannelsFromGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return "/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+d.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.channels;return {remove:(void 0===n?[]:n).join(",")}}function l(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return "/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+d.default.encodeString(n)+"/remove"}function a(){return !0}function u(e){return e.config.getTransactionTimeout()}function c(){return {}}function l(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(){return h.default.PNChannelGroupsOperation}function i(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function s(e){return "/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group"}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(){return {}}function c(e,t){return {groups:t.payload.groups}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNChannelsForGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return "/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+d.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(){return {}}function l(e,t){return {channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return "/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(e,t){var n=t.pushGateway,r=t.channels;return {type:n,add:(void 0===r?[]:r).join(",")}}function c(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return "/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(e,t){var n=t.pushGateway,r=t.channels;return {type:n,remove:(void 0===r?[]:r).join(",")}}function c(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return "/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(e,t){return {type:t.pushGateway}}function c(e,t){return {channels:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(){return h.default.PNRemoveAllPushNotificationsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return "/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n+"/remove"}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(e,t){return {type:t.pushGateway}}function c(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNUnsubscribeOperation}function s(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return "/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+d.default.encodeString(s)+"/leave"}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(){return h.default.PNWhereNowOperation}function i(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return "/v2/presence/sub-key/"+n.subscribeKey+"/uuid/"+i}function o(e){return e.config.getTransactionTimeout()}function a(){return !0}function u(){return {}}function c(e,t){return t.payload?{channels:t.payload.channels}:{channels:[]}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHeartbeatOperation}function s(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return "/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+d.default.encodeString(s)+"/heartbeat"}function a(){return !0}function u(e){return e.config.getTransactionTimeout()}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,s=void 0===i?{}:i,o=e.config,a={};return r.length>0&&(a["channel-group"]=r.join(",")),a.state=JSON.stringify(s),a.heartbeat=o.getPresenceTimeout(),a}function l(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNGetStateOperation}function s(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,s=t.channels,o=void 0===s?[]:s,a=o.length>0?o.join(","):",";return "/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+d.default.encodeString(a)+"/uuid/"+i}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a={};return 1===i.length&&0===o.length?a[i[0]]=t.payload:a=t.payload,{channels:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSetStateOperation}function s(e,t){var n=e.config,r=t.state,i=t.channels,s=void 0===i?[]:i,o=t.channelGroups,a=void 0===o?[]:o;return r?n.subscribeKey?0===s.length&&0===a.length?"Please provide a list of channels and/or channel-groups":void 0:"Missing Subscribe Key":"Missing State"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return "/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+d.default.encodeString(s)+"/uuid/"+n.UUID+"/data"}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,s={};return s.state=JSON.stringify(n),i.length>0&&(s["channel-group"]=i.join(",")),s}function l(e,t){return {state:t.payload}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHereNowOperation}function s(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=t.channelGroups,o=void 0===s?[]:s,a="/v2/presence/sub-key/"+n.subscribeKey;if(i.length>0||o.length>0){var u=i.length>0?i.join(","):",";a+="/channel/"+d.default.encodeString(u);}return a}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,s=void 0===i||i,o=t.includeState,a=void 0!==o&&o,u={};return s||(u.disable_uuids=1),a&&(u.state=1),r.length>0&&(u["channel-group"]=r.join(",")),u}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a=n.includeUUIDs,u=void 0===a||a,c=n.includeState,l=void 0!==c&&c;return i.length>1||o.length>0||0===o.length&&0===i.length?function(){var e={};return e.totalChannels=t.payload.total_channels,e.totalOccupancy=t.payload.total_occupancy,e.channels={},Object.keys(t.payload.channels).forEach(function(n){var r=t.payload.channels[n],i=[];return e.channels[n]={occupants:i,name:n,occupancy:r.occupancy},u&&r.uuids.forEach(function(e){l?i.push({state:e.state,uuid:e.uuid}):i.push({state:null,uuid:e});}),e}),e}():function(){var e={},n=[];return e.totalChannels=1,e.totalOccupancy=t.occupancy,e.channels={},e.channels[i[0]]={occupants:n,name:i[0],occupancy:t.occupancy},u&&t.uuids&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e});}),e}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(){return h.default.PNAccessManagerAudit}function i(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function s(e){return "/v2/auth/audit/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function a(){return !1}function u(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,s=void 0===i?[]:i,o={};return n&&(o.channel=n),r&&(o["channel-group"]=r),s.length>0&&(o.auth=s.join(",")),o}function c(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(){return h.default.PNAccessManagerGrant}function i(e){var t=e.config;return t.subscribeKey?t.publishKey?t.secretKey?void 0:"Missing Secret Key":"Missing Publish Key":"Missing Subscribe Key"}function s(e){return "/v2/auth/grant/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function a(){return !1}function u(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,s=void 0===i?[]:i,o=t.ttl,a=t.read,u=void 0!==a&&a,c=t.write,l=void 0!==c&&c,h=t.manage,f=void 0!==h&&h,p=t.authKeys,d=void 0===p?[]:p,y={};return y.r=u?"1":"0",y.w=l?"1":"0",y.m=f?"1":"0",r.length>0&&(y.channel=r.join(",")),
s.length>0&&(y["channel-group"]=s.join(",")),d.length>0&&(y.auth=d.join(",")),(o||0===o)&&(y.ttl=o),y}function c(){return {}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(5),n(13)),h=function(e){return e&&e.__esModule?e:{default:e}}(l);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function s(){return b.default.PNPublishOperation}function o(e,t){var n=e.config,r=t.message;return t.channel?r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing Message":"Missing Channel"}function a(e,t){var n=t.sendByPost;return void 0!==n&&n}function u(e,t){var n=e.config,r=t.channel,s=t.message,o=i(e,s);return "/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0/"+_.default.encodeString(o)}function c(e,t){var n=e.config,r=t.channel;return "/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0"}function l(e){return e.config.getTransactionTimeout()}function h(){return !0}function f(e,t){return i(e,t.message)}function p(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,s=t.storeInHistory,o=t.ttl,a={};return null!=s&&(a.store=s?"1":"0"),o&&(a.ttl=o),!1===i&&(a.norep="true"),n&&"object"===(void 0===n?"undefined":y(n))&&(a.meta=JSON.stringify(n)),a}function d(e,t){return {timetoken:t[2]}}Object.defineProperty(t,"__esModule",{value:!0});var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getOperation=s,t.validateParams=o,t.usePost=a,t.getURL=u,t.postURL=c,t.getRequestTimeout=l,t.isAuthSupported=h,t.postPayload=f,t.prepareParams=p,t.handleResponse=d;var g=(n(5),n(13)),b=r(g),v=n(15),_=r(v);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return p.default.PNHistoryOperation}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function a(e,t){var n=t.channel;return "/v2/history/sub-key/"+e.config.subscribeKey+"/channel/"+y.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function c(){return !0}function l(e,t){var n=t.start,r=t.end,i=t.reverse,s=t.count,o=void 0===s?100:s,a=t.stringifiedTimeToken,u=void 0!==a&&a,c={include_token:"true"};return c.count=o,n&&(c.start=n),r&&(c.end=r),u&&(c.string_message_token="true"),null!=i&&(c.reverse=i.toString()),c}function h(e,t){var n={messages:[],startTimeToken:t[1],endTimeToken:t[2]};return t[0].forEach(function(t){var r={timetoken:t.timetoken,entry:i(e,t.message)};n.messages.push(r);}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(5),n(13)),p=r(f),d=n(15),y=r(d);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return p.default.PNDeleteMessagesOperation}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function o(){return !0}function a(e,t){var n=t.channel;return "/v3/history/sub-key/"+e.config.subscribeKey+"/channel/"+y.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function c(){return !0}function l(e,t){var n=t.start,r=t.end,i={};return n&&(i.start=n),r&&(i.end=r),i}function h(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.useDelete=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(5),n(13)),p=r(f),d=n(15),y=r(d);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return p.default.PNMessageCounts}function s(e,t){var n=t.channels,r=t.timetoken,i=t.channelTimetokens,s=e.config;return n?r&&i?"timetoken and channelTimetokens are incompatible together":r&&i&&i.length>1&&n.length!==i.length?"Length of channelTimetokens and channels do not match":s.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function o(e,t){var n=t.channels,r=e.config,i=n.join(",");return "/v3/history/sub-key/"+r.subscribeKey+"/message-counts/"+y.default.encodeString(i)}function a(e){return e.config.getTransactionTimeout()}function u(){return !0}function c(e,t){var n=t.timetoken,r=t.channelTimetokens,i={};if(r&&1===r.length){var s=h(r,1),o=s[0];i.timetoken=o;}else r?i.channelsTimetoken=r.join(","):n&&(i.timetoken=n);return i}function l(e,t){return {channels:t.channels}}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e;}finally{try{!r&&a.return&&a.return();}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var f=n(13),p=r(f),d=n(15),y=r(d);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return p.default.PNFetchMessagesOperation}function o(e,t){var n=t.channels,r=e.config;return n&&0!==n.length?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channels"}function a(e,t){var n=t.channels,r=void 0===n?[]:n,i=e.config,s=r.length>0?r.join(","):",";return "/v3/history/sub-key/"+i.subscribeKey+"/channel/"+y.default.encodeString(s)}function u(e){return e.config.getTransactionTimeout()}function c(){return !0}function l(e,t){var n=t.start,r=t.end,i=t.count,s=t.stringifiedTimeToken,o=void 0!==s&&s,a={};return i&&(a.max=i),n&&(a.start=n),r&&(a.end=r),o&&(a.string_message_token="true"),a}function h(e,t){var n={channels:{}};return Object.keys(t.channels||{}).forEach(function(r){n.channels[r]=[],(t.channels[r]||[]).forEach(function(t){var s={};s.channel=r,s.subscription=null,s.timetoken=t.timetoken,s.message=i(e,t.message),n.channels[r].push(s);});}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(5),n(13)),p=r(f),d=n(15),y=r(d);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSubscribeOperation}function s(e){if(!e.config.subscribeKey)return "Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return "/v2/subscribe/"+n.subscribeKey+"/"+d.default.encodeString(s)+"/0"}function a(e){return e.config.getSubscribeTimeout()}function u(){return !0}function c(e,t){var n=e.config,r=t.state,i=t.channelGroups,s=void 0===i?[]:i,o=t.timetoken,a=t.filterExpression,u=t.region,c={heartbeat:n.getPresenceTimeout()};return s.length>0&&(c["channel-group"]=s.join(",")),a&&a.length>0&&(c["filter-expr"]=a),Object.keys(r).length&&(c.state=JSON.stringify(r)),o&&(c.tt=o),u&&(c.tr=u),c}function l(e,t){var n=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},r={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,userMetadata:e.u,publishMetaData:t};n.push(r);});var r={timetoken:t.t.t,region:t.t.r};return {messages:n,metadata:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(5),n(13)),f=r(h),p=n(15),d=r(p);},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=(r(o),n(10)),u=r(a),c=(n(5),function(){function e(t){var n=this;i(this,e),this._modules={},Object.keys(t).forEach(function(e){n._modules[e]=t[e].bind(n);});}return s(e,[{key:"init",value:function(e){this._config=e,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin();}},{key:"nextOrigin",value:function(){if(-1===this._providedFQDN.indexOf("ps."))return this._providedFQDN;var e=void 0;return this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("ps.","ps"+e+".")}},{key:"hasModule",value:function(e){return e in this._modules}},{key:"shiftStandardOrigin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._standardOrigin=this.nextOrigin(e),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"POST",value:function(e,t,n,r){return this._modules.post(e,t,n,r)}},{key:"GET",value:function(e,t,n){return this._modules.get(e,t,n)}},{key:"DELETE",value:function(e,t,n){return this._modules.del(e,t,n)}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNREFUSED"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNRESET"===e.code)return u.default.PNNetworkIssuesCategory;if("EAI_AGAIN"===e.code)return u.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&void 0===e.status)return u.default.PNNetworkIssuesCategory;if(e.timeout)return u.default.PNTimeoutCategory;if("ETIMEDOUT"===e.code)return u.default.PNNetworkIssuesCategory;if(e.response){if(e.response.badRequest)return u.default.PNBadRequestCategory;if(e.response.forbidden)return u.default.PNAccessDeniedCategory}return u.default.PNUnknownCategory}}]),e}());t.default=c,e.exports=t.default;},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}},e.exports=t.default;},function(e,t,n){function r(e){var t=(new Date).getTime(),n=(new Date).toISOString(),r=function(){return console&&console.log?console:window&&window.console&&window.console.log?window.console:console}();r.log("<<<<<"),r.log("["+n+"]","\n",e.url,"\n",e.qs),r.log("-----"),e.on("response",function(n){var i=(new Date).getTime(),s=i-t,o=(new Date).toISOString();r.log(">>>>>>"),r.log("["+o+" / "+s+"]","\n",e.url,"\n",e.qs,"\n",n.text),r.log("-----");});}function i(e,t,n){var i=this;return this._config.logVerbosity&&(e=e.use(r)),this._config.proxy&&this._modules.proxy&&(e=this._modules.proxy.call(this,e)),this._config.keepAlive&&this._modules.keepAlive&&(e=this._modules.keepAlive(e)),e.timeout(t.timeout).end(function(e,r){var s=void 0,o={};if(o.error=null!==e,o.operation=t.operation,r&&r.status&&(o.statusCode=r.status),e){if(e.response&&e.response.text&&!i._config.logVerbosity)try{o.errorData=JSON.parse(e.response.text);}catch(t){o.errorData=e;}else o.errorData=e;return o.category=i._detectErrorCategory(e),n(o,null)}try{s=JSON.parse(r.text);}catch(e){return o.errorData=r,o.error=!0,n(o,null)}return s.error&&1===s.error&&s.status&&s.message&&s.service?(o.errorData=s,o.statusCode=s.status,o.error=!0,o.category=i._detectErrorCategory(o),n(o,null)):n(o,s)})}function s(e,t,n){var r=c.default.get(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}function o(e,t,n,r){var s=c.default.post(this.getStandardOrigin()+n.url).query(e).send(t);return i.call(this,s,n,r)}function a(e,t,n){var r=c.default.delete(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.get=s,t.post=o,t.del=a;var u=n(43),c=function(e){return e&&e.__esModule?e:{default:e}}(u);n(5);},function(e,t,n){function r(){}function i(e){if(!y(e))return e;var t=[];for(var n in e)s(t,n,e[n]);return t.join("&")}function s(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){s(e,t,n);});else if(y(n))for(var r in n)s(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t));}function o(e){for(var t,n,r={},i=e.split("&"),s=0,o=i.length;s<o;++s)t=i[s],n=t.indexOf("="),-1==n?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function a(e){for(var t,n,r,i,s=e.split(/\r?\n/),o={},a=0,u=s.length;a<u;++a)n=s[a],-1!==(t=n.indexOf(":"))&&(r=n.slice(0,t).toLowerCase(),i=_(n.slice(t+1)),o[r]=i);return o}function u(e){return /[\/+]json($|[^-\w])/.test(e)}function c(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null;}function l(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new c(n);}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,n.xhr?(e.rawResponse=void 0===n.xhr.responseType?n.xhr.responseText:n.xhr.response,e.status=n.xhr.status?n.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),n.callback(e)}n.emit("response",t);var r;try{n._isResponseOK(t)||(r=new Error(t.statusText||"Unsuccessful HTTP response"));}catch(e){r=e;}r?(r.original=e,r.response=t,r.status=t.status,n.callback(r,t)):n.callback(null,t);});}function h(e,t,n){var r=v("DELETE",e);return "function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}var f;"undefined"!=typeof window?f=window:"undefined"!=typeof self?f=self:(console.warn("Using browser-only version of superagent in non-browser environment"),f=this);var p=n(44),d=n(45),y=n(46),g=n(47),b=n(49),v=t=e.exports=function(e,n){return "function"==typeof n?new t.Request("GET",e).end(n):1==arguments.length?new t.Request("GET",e):new t.Request(e,n)};t.Request=l,v.getXHR=function(){if(!(!f.XMLHttpRequest||f.location&&"file:"==f.location.protocol&&f.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only version of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};v.serializeObject=i,v.parseString=o,v.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},v.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},v.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},g(c.prototype),c.prototype._parseBody=function(e){var t=v.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&u(this.type)&&(t=v.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null)},c.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},v.Response=c,p(l.prototype),d(l.prototype),l.prototype.type=function(e){return this.set("Content-Type",v.types[e]||e),this},l.prototype.accept=function(e){return this.set("Accept",v.types[e]||e),this},l.prototype.auth=function(e,t,n){1===arguments.length&&(t=""),"object"==typeof t&&null!==t&&(n=t,t=""),n||(n={type:"function"==typeof btoa?"basic":"auto"});var r=function(e){if("function"==typeof btoa)return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(e,t,n,r)},l.prototype.query=function(e){return "string"!=typeof e&&(e=i(e)),e&&this._query.push(e),this},l.prototype.attach=function(e,t,n){if(t){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,n||t.name);}return this},l.prototype._getFormData=function(){return this._formData||(this._formData=new f.FormData),this._formData},l.prototype.callback=function(e,t){if(this._shouldRetry(e,t))return this._retry();var n=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),n(e,t);},l.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e);},l.prototype.buffer=l.prototype.ca=l.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},l.prototype.pipe=l.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},l.prototype._isHost=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},l.prototype.end=function(e){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||r,this._finalizeQueryString(),this._end()},l.prototype._end=function(){var e=this,t=this.xhr=v.getXHR(),n=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=function(){var n=t.readyState;if(n>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4==n){var r;try{r=t.status;}catch(e){r=0;}if(!r){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end");}};var r=function(t,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=t,e.emit("progress",n);};if(this.hasListeners("progress"))try{t.onprogress=r.bind(null,"download"),t.upload&&(t.upload.onprogress=r.bind(null,"upload"));}catch(e){}try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0);}catch(e){return this.callback(e)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof n&&!this._isHost(n)){var i=this._header["content-type"],s=this._serializer||v.serialize[i?i.split(";")[0]:""];!s&&u(i)&&(s=v.serialize["application/json"]),s&&(n=s(n));}for(var o in this.header)null!=this.header[o]&&this.header.hasOwnProperty(o)&&t.setRequestHeader(o,this.header[o]);return this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0!==n?n:null),this},v.agent=function(){return new b},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(e){b.prototype[e.toLowerCase()]=function(t,n){var r=new v.Request(e,t);return this._setDefaults(r),n&&r.end(n),r};}),b.prototype.del=b.prototype.delete,v.get=function(e,t,n){var r=v("GET",e);return "function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},v.head=function(e,t,n){var r=v("HEAD",e);return "function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},v.options=function(e,t,n){var r=v("OPTIONS",e);return "function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.del=h,v.delete=h,v.patch=function(e,t,n){var r=v("PATCH",e);return "function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.post=function(e,t,n){var r=v("POST",e);return "function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},v.put=function(e,t,n){var r=v("PUT",e);return "function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r};},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments);}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t);}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return !!this.listeners(e).length};},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}var s=n(46);e.exports=r,r.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},r.prototype.parse=function(e){return this._parser=e,this},r.prototype.responseType=function(e){return this._responseType=e,this},r.prototype.serialize=function(e){return this._serializer=e,this},r.prototype.timeout=function(e){if(!e||"object"!=typeof e)return this._timeout=e,this._responseTimeout=0,this;for(var t in e)switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;default:console.warn("Unknown timeout option",t);}return this},r.prototype.retry=function(e,t){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this._retryCallback=t,this};var o=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];r.prototype._shouldRetry=function(e,t){if(!this._maxRetries||this._retries++>=this._maxRetries)return !1;if(this._retryCallback)try{var n=this._retryCallback(e,t);if(!0===n)return !0;if(!1===n)return !1}catch(e){console.error(e);}if(t&&t.status&&t.status>=500&&501!=t.status)return !0;if(e){if(e.code&&~o.indexOf(e.code))return !0;if(e.timeout&&"ECONNABORTED"==e.code)return !0;if(e.crossDomain)return !0}return !1},r.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},r.prototype.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(e,t){n.end(function(n,r){n?t(n):e(r);});});}return this._fullfilledPromise.then(e,t)},r.prototype.catch=function(e){return this.then(void 0,e)},r.prototype.use=function(e){return e(this),this},r.prototype.ok=function(e){if("function"!=typeof e)throw Error("Callback required");return this._okCallback=e,this},r.prototype._isResponseOK=function(e){return !!e&&(this._okCallback?this._okCallback(e):e.status>=200&&e.status<300)},r.prototype.get=function(e){return this._header[e.toLowerCase()]},r.prototype.getHeader=r.prototype.get,r.prototype.set=function(e,t){if(s(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},r.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},r.prototype.field=function(e,t){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),s(e)){for(var n in e)this.field(n,e[n]);return this}if(Array.isArray(t)){for(var r in t)this.field(e,t[r]);return this}if(null===t||void 0===t)throw new Error(".field(name, val) val can not be empty");return "boolean"==typeof t&&(t=""+t),this._getFormData().append(e,t),this},r.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},r.prototype._auth=function(e,t,n,r){switch(n.type){case"basic":this.set("Authorization","Basic "+r(e+":"+t));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer "+e);}return this},r.prototype.withCredentials=function(e){return void 0==e&&(e=!0),this._withCredentials=e,this},r.prototype.redirects=function(e){return this._maxRedirects=e,this},r.prototype.maxResponseSize=function(e){if("number"!=typeof e)throw TypeError("Invalid argument");return this._maxResponseSize=e,this},r.prototype.toJSON=function(){return {method:this.method,url:this.url,data:this._data,headers:this._header}},r.prototype.send=function(e){var t=s(e),n=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(t&&s(this._data))for(var r in e)this._data[r]=e[r];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return !t||this._isHost(e)?this:(n||this.type("json"),this)},r.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},r.prototype._finalizeQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+e),this._query.length=0,this._sort){var t=this.url.indexOf("?");if(t>=0){var n=this.url.substring(t+1).split("&");"function"==typeof this._sort?n.sort(this._sort):n.sort(),this.url=this.url.substring(0,t)+"?"+n.join("&");}}},r.prototype._appendQueryString=function(){console.trace("Unsupported");},r.prototype._timeoutError=function(e,t,n){if(!this._aborted){var r=new Error(e+t+"ms exceeded");r.timeout=t,r.code="ECONNABORTED",r.errno=n,this.timedout=!0,this.abort(),this.callback(r);}},r.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){e._timeoutError("Timeout of ",e._timeout,"ETIME");},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT");},this._responseTimeout));};},function(e,t){function n(e){return null!==e&&"object"==typeof e}e.exports=n;},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}var s=n(48);e.exports=r,r.prototype.get=function(e){return this.header[e.toLowerCase()]},r.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=s.type(t);var n=s.params(t);for(var r in n)this[r]=n[r];this.links={};try{e.link&&(this.links=s.parseLinks(e.link));}catch(e){}},r.prototype._setStatusProperties=function(e){var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.redirect=3==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.created=201==e,this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.forbidden=403==e,this.notFound=404==e,this.unprocessableEntity=422==e;};},function(e,t){t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})},t.parseLinks=function(e){return e.split(/ *, */).reduce(function(e,t){var n=t.split(/ *; */),r=n[0].slice(1,-1);return e[n[1].split(/ *= */)[1].slice(1,-1)]=r,e},{})},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&(delete e.authorization,delete e.cookie),e};},function(e,t){function n(){this._defaults=[];}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert"].forEach(function(e){n.prototype[e]=function(){return this._defaults.push({fn:e,arguments:arguments}),this};}),n.prototype._setDefaults=function(e){this._defaults.forEach(function(t){e[t.fn].apply(e,t.arguments);});},e.exports=n;}])});
});

const PubNub = unwrapExports(pubnub_min);
var pubnub_min_1 = pubnub_min.PubNub;

function getUserAvatarUrl(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.image;
    }
}
function getUserName(users, uuid) {
    const user = getUser(users, uuid);
    if (user) {
        return user.name;
    }
}
function styleForMessageSender(senderId, uuid) {
    return uuid === senderId ? 'senderMessage' : senderId;
}
function getUser(users, uuid) {
    return users.find(element => element.uuid === uuid);
}
function getTime(timetoken) {
    return new Date(parseInt(timetoken.substring(0, 13))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}
function getWeekday(timetoken) {
    return new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { weekday: 'long' });
}
function getDate(timetoken, messageType, index = 0) {
    const messageWeekday = getWeekday(timetoken);
    const date = new Date(parseInt(timetoken.substring(0, 13))).toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    switch (messageType) {
        case 'historyMessage':
            console.log(index);
            // TODO commented until we have a state
            // if (this.state.messageSentDate[index - 1] !== messageWeekday) {
            return `${date}, ${messageWeekday}`;
        // }
        // break;
        case 'senderMessage':
            // if (this.state.lastMessageWeekday !== messageWeekday) {
            return `${date}, ${messageWeekday}`;
        // }
        // break;
        default:
            return;
    }
}

var lodash_uniqby = createCommonjsModule(function (module, exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity]
 *  The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length)
    ? baseUniq(array, baseIteratee(iteratee))
    : [];
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = uniqBy;
});

class Chat {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.parsedUsers = [];
        this.channelName = "test-channel";
        this.onlineUsersCount = 0;
        this.messageReceived = __chunk_1.createEvent(this, "messageReceived", 7);
    }
    componentWillLoad() {
        this.parsedUsers = JSON.parse(this.users);
        this.parsedUsers = lodash_uniqby(this.parsedUsers, "uuid");
        this.pubnub = new PubNub({
            publishKey: "pub-c-2c10eb4d-5066-4241-99f9-d82430455cf9",
            subscribeKey: "sub-c-a6263802-9dd9-11e9-8df4-32dd89bcc96f",
            // uuid: this.uuid, //Get from Mange
            autoNetworkDetection: true,
            restore: true,
        });
        // this.designation = randomUser.designation;
        this.sendersInfo = [];
        this.lastMessageWeekday = '';
        this.messageSentDate = [];
        this.historyLoaded = false;
        this.historyMessages = [];
        this.onlineUsers = [];
        this.onlineUsersCount = 0;
        this.networkErrorStatus = false;
        this.networkErrorImg = null;
    }
    componentDidLoad() {
        // const networkError = new Image();
        // networkError.src = networkErrorImg;
        // this.setState({networkErrorImg: networkError});
        this.pubnub.subscribe({ channels: [this.channelName], withPresence: true });
        this.pubnub.addListener({
            status: (status) => {
                if (status.category === 'PNConnectedCategory') {
                    this.hereNow();
                    this.pubnub.history({
                        channel: this.channelName,
                        count: 50,
                        reverse: false,
                        stringifiedTimeToken: true,
                    }).then((response) => {
                        const lastMessageWeekday = getWeekday(response.endTimeToken);
                        this.historyLoaded = true;
                        this.historyMessages = response.messages;
                        this.lastMessageWeekday = lastMessageWeekday;
                        let messageSentDate = this.historyMessages.map(message => getWeekday(message.timetoken));
                        this.messageSentDate = messageSentDate;
                        this.scrollToBottom();
                    }).catch((error) => {
                        console.log(error);
                    });
                }
                if (status.category === 'PNNetworkDownCategory') {
                    // this.setState({networkErrorStatus: true});
                    this.networkErrorStatus = true;
                }
                if (status.category === 'PNNetworkUpCategory') {
                    // this.setState({networkErrorStatus: false});
                    this.networkErrorStatus = false;
                    this.pubnub.reconnect();
                    this.scrollToBottom();
                }
            },
            message: (m) => {
                this.sendersInfo = [
                    ...this.sendersInfo,
                    {
                        senderId: m.message.senderId,
                        text: m.message.text,
                        timetoken: m.timetoken,
                    }
                ];
                const lastMessageWeekday = getWeekday(m.timetoken);
                this.lastMessageWeekday = lastMessageWeekday;
                this.scrollToBottom();
            },
            presence: (presence) => {
                if (presence.action === 'join') {
                    this.onlineUsers = [
                        ...this.onlineUsers,
                        {
                            state: presence.state,
                            uuid: presence.uuid
                        }
                    ];
                    // this.onlineUsers = users,
                    this.onlineUsersCount = this.onlineUsersCount + 1;
                }
                if ((presence.action === 'leave') || (presence.action === 'timeout')) {
                    let leftUsers = this.onlineUsers.filter(users => users.uuid !== presence.uuid);
                    this.onlineUsers = leftUsers;
                    const length = this.onlineUsers.length;
                    this.onlineUsersCount = length;
                }
                if (presence.action === 'interval') {
                    if (presence.join || presence.leave || presence.timeout) {
                        let onlineUsers = this.onlineUsers;
                        let onlineUsersCount = this.onlineUsersCount;
                        if (presence.join) {
                            presence.join.map(user => (user !== this.uuid &&
                                onlineUsers.push({
                                    state: presence.state,
                                    uuid: user
                                })));
                            onlineUsersCount += presence.join.length;
                        }
                        if (presence.leave) {
                            presence.leave.map(leftUser => onlineUsers.splice(onlineUsers.indexOf(leftUser), 1));
                            onlineUsersCount -= presence.leave.length;
                        }
                        if (presence.timeout) {
                            presence.timeout.map(timeoutUser => onlineUsers.splice(onlineUsers.indexOf(timeoutUser), 1));
                            onlineUsersCount -= presence.timeout.length;
                        }
                        this.onlineUsers = onlineUsers;
                        this.onlineUsersCount = onlineUsersCount;
                    }
                }
            }
        });
        window.addEventListener('beforeunload', this.leaveChat);
    }
    componentWillUnmount() {
        this.leaveChat();
    }
    subscribe() {
        this.pubnub.subscribe({
            channels: this.channelName,
            withPresence: true
        });
    }
    ;
    hereNow() {
        this.pubnub.hereNow({
            channels: [this.channelName],
            includeUUIDs: true,
            includeState: false
        }, (_status, response) => {
            this.onlineUsers = response.channels[this.channelName].occupants;
            this.hydrateUsers();
            // this.onlineUsersCount = response.channels[this.channelName].occupancy;
        });
    }
    ;
    // Adds extra info to users (name, image, etc)
    hydrateUsers() {
        console.log("hydrateUsers");
        this.onlineUsers = this.parsedUsers.concat(this.onlineUsers);
        this.onlineUsers = this.onlineUsers.map((onlineUser) => {
            return {
                uuid: onlineUser.uuid,
                name: getUserName(this.parsedUsers, onlineUser.uuid),
                image: getUserAvatarUrl(this.parsedUsers, onlineUser.uuid)
            };
        })
            .filter((onlineUser) => {
            return onlineUser.name && onlineUser.name.length > 1;
        });
        this.onlineUsersCount = this.onlineUsers.length;
        console.log("done", this.onlineUsers);
    }
    leaveChat() {
        this.pubnub.unsubscribeAll();
    }
    ;
    scrollToBottom() {
        const elToScroll = this.messageList.shadowRoot.querySelector(".messageDialog");
        if (elToScroll) {
            setTimeout(() => {
                elToScroll.scrollTop = elToScroll.scrollHeight;
            }, 100);
        }
    }
    ;
    render() {
        return (__chunk_1.h("div", { class: "grid" }, __chunk_1.h("iac-header", { userProfile: this.userProfile, onlineUsersCount: this.onlineUsersCount }), __chunk_1.h("iac-message-list", { sendersInfo: this.sendersInfo, messageSentDate: "July 12, 2019", historyLoaded: this.historyLoaded, historyMessages: this.historyMessages, users: this.parsedUsers, uuid: this.uuid, ref: (el) => this.messageList = el }), __chunk_1.h("iac-message-body", { pubnub: this.pubnub, uuid: this.uuid, channelName: this.channelName }), __chunk_1.h("iac-online-users", { loggedInUser: "x9skdkdkslsddkjfsk", onlineUsers: this.onlineUsers })));
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return ":host{width:100vw;height:85vh;position:relative;margin-bottom:0}\@media (max-width:850px){:host{height:81vh}}:host .grid{display:grid;width:100%;grid-template-rows:70px 700px 60px;grid-template-columns:280px 1fr}"; }
}

// import animalForestChatLogo from '../../global/styles/avatars/45px/logo.png';
// import onlineUsersLogo from '../../global/styles/avatars/45px/onlineUsersLogo.png';
class Header {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.parsedUserProfile = JSON.parse(this.userProfile);
    }
    render() {
        return (__chunk_1.h("div", { class: 'header' }, __chunk_1.h("div", { class: 'onlineUsersInfo' }, __chunk_1.h("img", { class: 'onlineUsersLogo', width: '45', height: '45', alt: 'Online users logo', src: "https://picsum.photos/id/641/45/45" }), __chunk_1.h("div", { class: 'onlineUsersCount' }, this.onlineUsersCount, " members"), __chunk_1.h("span", null, "Online"), __chunk_1.h("span", { class: 'onlineIndicator' })), __chunk_1.h("img", { class: 'animalForestChatLogo', width: '45', height: '45', alt: 'Animal Forest Chat logo', src: "https://picsum.photos/id/641/45/45" }), __chunk_1.h("h1", null, "Clio Chat"), __chunk_1.h("h2", null, "In-App Firm Chat"), __chunk_1.h("div", { class: 'loggedInUser' }, __chunk_1.h("div", { class: 'userWelcome' }, __chunk_1.h("span", { class: 'hello' }, "Hello, "), __chunk_1.h("span", { class: 'user' }, this.parsedUserProfile.name)), __chunk_1.h("img", { width: '45', height: '45', alt: `Avatar for ${this.parsedUserProfile.name}`, src: this.parsedUserProfile.image }))));
    }
    static get style() { return ":host{grid-row:1;grid-column:1/3;width:100%;position:relative;border:1px solid hsla(0,0%,50.2%,.164)}:host .onlineUsersInfo{width:278px;height:70px;position:relative;font-size:17px;font-weight:700;border-right:1px solid hsla(0,0%,50.2%,.164)}:host .onlineUsersInfo .onlineUsersLogo{position:absolute;top:10px;left:10px;border-radius:50%}:host .onlineUsersInfo .onlineUsersCount{position:relative;top:14px;left:68px}:host .onlineUsersInfo span{position:absolute;top:33px;left:80px;color:grey;font-weight:400;display:block}:host .onlineUsersInfo .onlineIndicator{width:8px;height:8px;position:absolute;top:40px;left:68px;border-radius:50%;background-color:#0ccc0c}:host .animalForestChatLogo{display:none!important;position:absolute;top:12px;left:290px}:host h1{font-weight:700;font-size:17px;top:2px}:host h1,:host h2{position:absolute;left:295px}:host h2{font-weight:400;font-size:15px;top:20px}:host .loggedInUser{display:none!important;position:absolute;top:12px;right:20px;color:grey}:host .loggedInUser .userWelcome .user{display:block;color:#000;font-weight:700}:host .loggedInUser img{position:absolute;top:0;left:-50px}"; }
}

class HistoryMessageList {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", null, (this.historyLoaded &&
            __chunk_1.h("div", { class: 'historyMessageDialog' }, this.historyMessages.map((m, index) => __chunk_1.h("li", { class: styleForMessageSender(m.entry.senderId, this.uuid), key: m.timetoken }, __chunk_1.h("div", { class: 'message' }, __chunk_1.h("img", { width: '28', height: '28', alt: 'Sender avatar', src: getUserAvatarUrl(this.users, m.entry.senderId) }), __chunk_1.h("div", { class: 'name' }, getUserName(this.users, m.entry.senderId)), __chunk_1.h("div", { class: 'time' }, getTime(m.timetoken), __chunk_1.h("div", { class: "date" }, "\u00A0on\u00A0", getDate(m.timetoken, 'historyMessage', index))), __chunk_1.h("div", { class: 'text' }, m.entry.text))))))));
    }
    static get style() { return ".historyMessageDialog{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.historyMessageDialog li{position:relative;margin-top:40px;margin-left:8px;width:100%;margin-bottom:18px}.historyMessageDialog li img{border-radius:50%;vertical-align:middle;margin-right:12px}.historyMessageDialog li .message{position:relative;word-break:break-word;word-wrap:break-word}.historyMessageDialog li .message .name,.historyMessageDialog li .message .time{right:5px;font-size:12px;color:grey;font-weight:700;position:absolute}.historyMessageDialog li .message .text{max-width:270px;padding:15px;display:inline-block;border-radius:10px;background-color:#1f9efc;color:#fff}.messageSentDay{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;position:relative;width:100%;top:-20px;margin-top:0;margin-bottom:30px;color:grey;font-size:13px}.messageSentDay:empty{display:none}.name,.time{left:5px}.name{top:-18px}.time{width:100%;bottom:-18px}.time .date{opacity:.5;display:inline}.text{background-color:hsla(0,0%,50.2%,.164)}"; }
}

class MessageBody {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.messageContent = "";
    }
    ;
    handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            this.sendMessage();
        }
    }
    onChange(e) {
        this.messageContent = e.target.value;
    }
    ;
    onSubmit(e) {
        e.preventDefault();
        this.sendMessage();
    }
    ;
    sendMessage() {
        if (!this.messageContent.length) {
            return;
        }
        this.pubnub.publish({
            message: {
                senderId: this.uuid,
                text: this.messageContent,
            },
            channel: this.channelName
        });
        setTimeout(() => {
            this.messageContent = '';
        }, 0);
    }
    render() {
        return (__chunk_1.h("div", { class: 'messageBody' }, __chunk_1.h("form", { class: 'messageForm' }, __chunk_1.h("input", { class: 'messageInput', value: this.messageContent, onChange: (event) => this.onChange(event), placeholder: 'Type your message here . . .' }), __chunk_1.h("button", { class: 'submitBtn', onClick: (event) => this.onSubmit(event), type: 'submit' }, "Send"))));
    }
    static get style() { return ":host{grid-row:3;grid-column:2;position:relative}\@media (max-width:770px){:host{grid-column:1/3}}:host .messageForm{width:calc(100% - 24px);position:absolute;z-index:100;border-top:1px solid hsla(0,0%,50.2%,.164);border-bottom:1px solid hsla(0,0%,50.2%,.164);left:0;bottom:0;right:0;padding:12px;background:#fff;display:-ms-flexbox;display:flex}\@media (max-width:440px){:host .messageForm{bottom:10px}}:host .messageForm .messageInput{height:35px;border:none;font-size:15px;-ms-flex:1;flex:1;margin-right:12px}:host .messageForm .messageInput:focus{outline:none}:host .messageForm .submitBtn{position:relative;display:inline-block;height:35px;padding:0 12px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;font-weight:600;font-size:14px;font-family:Proxima Nova,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:30px;color:#263238;vertical-align:middle;cursor:pointer;border:1px solid transparent;border-radius:3px;text-decoration:none;white-space:nowrap;font-weight:700;color:#fff;background-color:#1f9efc;background-image:-webkit-gradient(linear,left top,left bottom,from(#4ab2fd),to(#1e9efc));background-image:linear-gradient(-180deg,#4ab2fd,#1e9efc);border-color:#0075bb}:host .messageForm .submitBtn:hover{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(2%,#2d9def),to(#007dd9));background-image:linear-gradient(-180deg,#2d9def 2%,#007dd9)}:host .messageForm .submitBtn:active{background-image:none;background-color:#0769b0;border-color:#0769b0;-webkit-box-shadow:inset 0 1px 3px 0 #004670;box-shadow:inset 0 1px 3px 0 #004670}:host .messageForm .submitBtn:focus{outline:none}"; }
}

class MessageList {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("div", { class: "messageList" }, __chunk_1.h("ul", { class: "messageDialog" }, this.messageSentDate.length > 0 &&
            __chunk_1.h("iac-history-message-list", { historyMessages: this.historyMessages, historyLoaded: this.historyMessages, uuid: this.uuid, users: this.users }), __chunk_1.h("iac-sender-message-list", { sendersInfo: this.sendersInfo, uuid: this.uuid, users: this.users }))));
    }
    static get style() { return ":host{grid-row:2;grid-column:2;width:100%;height:100%;border-right:1px solid hsla(0,0%,50.2%,.164);border-bottom:1px solid hsla(0,0%,50.2%,.164)}\@media (max-width:770px){:host{grid-column:1/3}}:host .messageList{height:calc(800px - 104px)}:host .networkErrorImg{width:80%;height:100%;position:relative;left:100px}:host .messageDialog{height:inherit;margin-top:0;overflow-y:auto;overflow-x:hidden;position:relative;list-style:none}:host .messageDialog .text{max-width:270px;padding:15px;display:inline-block;border-radius:10px}:host .messageDialog .name,:host .messageDialog .time{font-size:15px;color:grey;font-weight:700;position:absolute}:host .messageDialog li{width:300px;position:relative;margin-top:40px;margin-left:8px}:host .messageDialog li .messageSentDay{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;position:relative;width:100%;top:-20px;margin-top:0;margin-bottom:30px;color:grey;font-size:13px;text-align:center}:host .messageDialog li .messageSentDay:empty{display:none}:host .messageDialog li img{position:absolute;bottom:0;left:-30px}:host .messageDialog li .message{position:relative;word-break:break-word;word-wrap:break-word}:host .messageDialog li .name,:host .messageDialog li .time{left:5px}:host .messageDialog li .name{top:-18px}:host .messageDialog li .time{bottom:-18px}:host .messageDialog .historyMessageDialog,:host .messageDialog .senderMessageDialog{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}:host .messageDialog .historyMessageDialog .senderMessage,:host .messageDialog .senderMessageDialog .senderMessage{-ms-flex-item-align:end;align-self:flex-end;margin-right:50px;color:#fff;text-align:right}:host .messageDialog .historyMessageDialog .senderMessage img,:host .messageDialog .senderMessageDialog .senderMessage img{left:305px}:host .messageDialog .historyMessageDialog .senderMessage .text,:host .messageDialog .senderMessageDialog .senderMessage .text{background-color:#1f9efc;text-align:left}:host .messageDialog .historyMessageDialog .senderMessage .name,:host .messageDialog .historyMessageDialog .senderMessage .time,:host .messageDialog .senderMessageDialog .senderMessage .name,:host .messageDialog .senderMessageDialog .senderMessage .time{left:unset;right:5px}"; }
}

class OnlineUsers {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    putLoggedInUserFirst(arr) {
        if (arr.length) {
            const loggedInUserIndex = arr.map(elem => elem.uuid).indexOf(this.loggedInUser);
            if (loggedInUserIndex !== -1) {
                [arr[0], arr[loggedInUserIndex]] = [arr[loggedInUserIndex], arr[0]];
            }
        }
    }
    ;
    componentWillLoad() {
    }
    render() {
        return (__chunk_1.h("div", { class: 'onlineUsers' }, this.putLoggedInUserFirst(this.onlineUsers), __chunk_1.h("ul", { class: 'onlineUserList' }, this.onlineUsers.map((user, _index) => __chunk_1.h("iac-user", { user: JSON.stringify(user), loggedInUser: this.loggedInUser })))));
    }
    static get style() { return ":host{grid-row:2/4;grid-column:1;position:relative;overflow-y:auto;overflow-x:hidden;height:100%;border:1px solid hsla(0,0%,50.2%,.164);border-top:unset}\@media (max-width:770px){:host{display:none}}:host .onlineUserList{list-style:none;position:relative;left:-30px}:host .onlineUserList li{margin-bottom:40px;position:relative}:host .onlineUserList li img{position:absolute;left:0}:host .onlineUserList li .userName{position:relative;display:inline;top:0;left:60px;font-size:.9em;font-weight:700}:host .onlineUserList li .userName .youSign{position:absolute;top:0;right:-40px;font-weight:700}:host .onlineUserList li .designation{position:absolute;top:20px;left:60px;font-size:.9em;color:grey}"; }
}

class SenderMessageList {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        console.log(this.sendersInfo);
    }
    render() {
        return (__chunk_1.h("div", { class: 'senderMessageDialog' }, this.sendersInfo.map((m, index) => __chunk_1.h("li", { class: styleForMessageSender(m.senderId, this.uuid), key: index }, __chunk_1.h("div", { class: 'messageSentDay' }, getDate(m.timetoken, 'senderMessage')), __chunk_1.h("div", { class: 'message' }, __chunk_1.h("div", { class: 'name' }, getUserName(this.users, m.senderId)), __chunk_1.h("div", { class: 'time' }, getTime(m.timetoken), __chunk_1.h("div", { class: "date" }, "\u00A0on\u00A0", getDate(m.timetoken, 'historyMessage', index))), __chunk_1.h("div", { class: 'text' }, m.text), __chunk_1.h("img", { width: '28', height: '28', alt: 'Sender avatar', src: getUserAvatarUrl(this.users, m.senderId) }))))));
    }
    static get style() { return ":host .senderMessageDialog{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host .senderMessageDialog li{position:relative;margin-top:40px;margin-left:8px;width:100%;margin-bottom:18px}:host .senderMessageDialog li img{border-radius:50%;vertical-align:middle;margin-left:12px}:host .senderMessageDialog .senderMessage{-ms-flex-item-align:end;align-self:flex-end;margin-right:50px;color:grey;text-align:right}:host .senderMessageDialog .senderMessage .messageSentDay{display:none}:host .senderMessageDialog .senderMessage img{left:305px}:host .senderMessageDialog .senderMessage .message{position:relative;word-break:break-word;word-wrap:break-word}:host .senderMessageDialog .name,:host .senderMessageDialog .time{left:unset;right:5px;font-size:11px;color:grey;font-weight:700;position:absolute}:host .senderMessageDialog .name{top:-18px}:host .senderMessageDialog .time{bottom:-18px}:host .senderMessageDialog .text{max-width:270px;padding:15px;display:inline-block;border-radius:10px;background-color:#999;color:#fff}.time .date{opacity:.5;display:inline}"; }
}

class User {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.parsedUser = JSON.parse(this.user);
    }
    render() {
        return (__chunk_1.h("li", null, __chunk_1.h("img", { width: '45', height: '45', alt: 'Online users', src: this.parsedUser.image }), __chunk_1.h("div", { class: 'userName' }, this.parsedUser.name, " ", this.parsedUser.uuid === this.loggedInUser && __chunk_1.h("div", { class: 'youSign' }, "(You)"))));
    }
    static get style() { return "img{border-radius:50%;height:45px;width:45px}li{display:-ms-flexbox;display:flex;margin-bottom:12px}.userName{margin-left:12px;font-size:.9em;font-weight:700;line-height:45px}.userName .youSign{position:absolute;top:0;right:-40px;font-weight:700}.designation{position:absolute;top:20px;left:60px;font-size:.9em;color:grey}"; }
}

exports.iac_chat = Chat;
exports.iac_header = Header;
exports.iac_history_message_list = HistoryMessageList;
exports.iac_message_body = MessageBody;
exports.iac_message_list = MessageList;
exports.iac_online_users = OnlineUsers;
exports.iac_sender_message_list = SenderMessageList;
exports.iac_user = User;
