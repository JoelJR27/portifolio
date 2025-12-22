import gsap from 'gsap';

export function animateStackCard(
    card: HTMLElement,
    image: HTMLElement,
    text: HTMLElement,
    index: number,
    isMobile: boolean
) {
    return gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
            trigger: card,
            start: isMobile ? 'top 90%' : 'top 85%',
            end: 'bottom 40%',
            toggleActions: 'play reverse play reverse',
        },
    })
        .from(card, {
            opacity: 0,
            y: isMobile ? 30 : 50,
            duration: 0.5,
            delay: index * 0.05,
        })
        .from(
            image,
            {
                scale: 0.6,
                opacity: 0,
                duration: 0.45,
                ease: 'back.out(1.8)',
            },
            '-=0.25'
        )
        .from(
            text,
            {
                y: 10,
                opacity: 0,
                duration: 0.3,
            },
            '-=0.2'
        );
}
