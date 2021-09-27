const write = step => document.getElementById('ans').innerHTML+=step+'<br>';
const clear =()=> document.getElementById('ans').innerHTML="";

export {write,clear};