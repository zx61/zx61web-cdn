import{S as M,k as _}from"./chunk-D9wEq4bu.js";import{b as h,h as g,a as l}from"./chunk-Cc-YmMIf.js";import{c0 as y,cJ as p,cK as E,cj as C,cr as m,c1 as I}from"./chunk-bN8bH30D.js";var L=1,d=2;function D(n,r,e,t){var i=e.length,o=i,A=!t;if(n==null)return!o;for(n=Object(n);i--;){var f=e[i];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<o;){f=e[i];var u=f[0],s=n[u],a=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var R=new M;if(t)var c=t(s,a,u,n,r,R);if(!(c===void 0?h(a,s,L|d,t,R):c))return!1}}return!0}function O(n){return n===n&&!y(n)}function G(n){for(var r=_(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,O(i)]}return r}function P(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function w(n){var r=G(n);return r.length==1&&r[0][2]?P(r[0][0],r[0][1]):function(e){return e===n||D(e,n,r)}}var F=1,S=2;function K(n,r){return p(n)&&O(r)?P(E(n),r):function(e){var t=C(e,n);return t===void 0&&t===r?g(e,n):h(r,t,F|S)}}function b(n){return function(r){return r==null?void 0:r[n]}}function x(n){return function(r){return m(r,n)}}function N(n){return p(n)?b(E(n)):x(n)}function q(n){return typeof n=="function"?n:n==null?l:typeof n=="object"?I(n)?K(n[0],n[1]):w(n):N(n)}export{q as b};
