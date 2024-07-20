import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Component mounted", count)
        return () => {
            console.log("component removed")
        }
    }, [count])
  return (
    <div>UseEffectExample {count}
    <button onClick={() => setCount(count + 1)}>Update</button></div>
  )
}

export default UseEffectExample