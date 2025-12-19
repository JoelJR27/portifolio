import gsap from 'gsap';

export function animateExperienceCard(
    card: HTMLElement,
    index: number
) {
    return gsap.fromTo(
        card,
        {
            opacity: 0,
            y: 40,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            delay: index * 0.08,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 40%',
                toggleActions: 'play reverse play reverse',
            },
        }
    );
}
