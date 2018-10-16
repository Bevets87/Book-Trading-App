import { TweenMax, TimelineMax } from 'gsap'


const duration = 0.2

const stagger = 0.1

export const fadeIn = (target) => {
  return TweenMax.from(
    target,
    duration,
    {
      opacity: 0 
    }
  )
}

export const fadeOut = (target) => {
  return TweenMax.to(
    target,
    duration,
    {
      opacity: 0
    }
  )
}

export const fadeInFromSide = (target) => {
  return TweenMax.from(
    target, 
    duration, 
    { 
      opacity: 0, 
      width: 0,
    }
  )
}

export const fadeOutToSide = (target) => {
  return TweenMax.to(
    target,
    duration,
    {
      opacity: 0,
      width: 0,
    }
  )
}

export const fadeInStaggered = (targets) => {
  return TweenMax.staggerFrom(
    targets,
    duration,
    {
      opacity: 0
    },
    stagger
  )
}

export const fadeOutStaggered = (targets) => {
  return TweenMax.staggerTo(
    targets,
    duration,
    {
      opacity: 0
    },
    -stagger
  )
}

export const animationSequence = (props) => new TimelineMax({ ...props })