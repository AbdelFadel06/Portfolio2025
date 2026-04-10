import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
    const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold, rootMargin }
        )
        const el = ref.current
        if (el) observer.observe(el)
        return () => { if (el) observer.unobserve(el) }
    }, [threshold, rootMargin])

    return { ref, isVisible }
}

// Animation classes helper
export const fadeUp = (visible, delay = 0) => ({
    className: `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    style: { transitionDelay: `${delay}ms` }
})

export const fadeIn = (visible, delay = 0) => ({
    className: `transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`,
    style: { transitionDelay: `${delay}ms` }
})
