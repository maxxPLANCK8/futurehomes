import React from 'react'
import { motion } from 'motion/react'

export function TestimonialsColumn({ className = '', testimonials, duration = 10 }) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="testimonials-motion-column"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, itemIndex) => (
              <article className="testimonials-quote-card" key={`${name}-${itemIndex}-${index}`}>
                <p>{text}</p>
                <div className="testimonials-person">
                  <img width={40} height={40} src={image} alt={name} className="testimonials-avatar" />
                  <div className="testimonials-person-copy">
                    <div className="testimonials-person-name">{name}</div>
                    <div className="testimonials-person-role">{role}</div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export function TestimonialsShowcase() {
  const testimonials = [
    {
      text: 'I like buying ready block of flats for investment. The team understands my investment requirements and connects me to the best market deals. Asanteni.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      name: 'Mathew Njogu',
      role: 'Repeat Client',
    },
    {
      text: 'I was looking for a serene place to call home and Future Homes made the entire process hustle free.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      name: 'Lucy Wangari',
      role: 'Client',
    },
    {
      text: 'After a whole year of property hunting, I met reliable partners who relieved me the entire burden and connected me to exactly what I wanted for my family.',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
      name: 'Cynthia Chebet',
      role: 'Client',
    },
  ]

  const firstColumn = testimonials
  const secondColumn = [...testimonials].reverse()
  const thirdColumn = testimonials

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-heading align-center">
          <p className="eyebrow">( 04 ) TESTIMONIALS</p>
          <h2>What our clients say</h2>
          <p className="section-copy">
            Real feedback from buyers and investors who worked directly with Future Homes
            Properties Ltd.
          </p>
        </div>
        <div className="testimonials-columns-wrap">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="testimonials-column-desktop-md"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="testimonials-column-desktop-lg"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
