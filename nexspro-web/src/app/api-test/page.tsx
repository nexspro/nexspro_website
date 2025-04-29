'use client'

import { useEffect, useState } from 'react'

export default function ApiTestPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/ping')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Erreur API Rails:', err))
  }, [])

  return (
    <main>
      <h1>Test API Rails</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
