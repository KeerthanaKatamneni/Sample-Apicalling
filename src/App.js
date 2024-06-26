import { useState} from 'react';

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/avatar/info');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      setData(err.message);
    }
  }


  return (
    <>
    <button onClick={getData}>Fetch Data</button>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    </>
  )
}