import { CONTENIDO } from '../src/data/contenido/index.js';
let tot=0;
for (const [k,v] of Object.entries(CONTENIDO)){const d=v.desglose; const docs=d.documentos.reduce((s,x)=>s+x.horas,0); const sum=d.video+d.lectura+docs+d.practica+d.evidencia+d.kc; tot+=d.palabras; console.log(k,d.palabras,'lect',d.lectura,'docs',docs,'prac',d.practica,'evid',d.evidencia,'kc',d.kc,'=',sum,'/',d.total, Math.abs(sum-d.total)<1e-9?'OK':'XX')}
console.log('total words',tot)
