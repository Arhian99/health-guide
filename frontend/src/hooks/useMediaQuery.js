import React, { useEffect, useState } from 'react'

function useMediaQuery(query) {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        mediaMatch.addListener(event => setMatches(event.matches));
        return () => mediaMatch.removeListener(event => setMatches(event.matches));
    }, [])

    return matches;
}

export default useMediaQuery