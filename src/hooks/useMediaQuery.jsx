import { useState, useEffect } from 'react'

const useMediaQuery = query => {
   const [matches, setMatches] = useState(false)

   useEffect(() => {
      const updateMatches = () => {
         setMatches(window.matchMedia(query).matches)
      }

      updateMatches()

      window.addEventListener('resize', updateMatches)

      return () => {
         window.removeEventListener('resize', updateMatches)
      }
   }, [query])

   return matches
}

export default useMediaQuery
