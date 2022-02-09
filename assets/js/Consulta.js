//http://localhost:5500/dbz.json

let personajesData = (async () => {
    const url = "http://localhost:5500/dbz.json"
    const res = await fetch("/dbz.json");
    const data = await res.json();
    return data;
})();
  
export default personajesData;
  