import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Part from './particlesjs-config (2).json'
import Img from '../assets/react.svg'

const ParticlesSt = () => {

  const [particles, setParticles] = useState()

  useEffect(() => {
    // setParticles(Part)
    // Part.particles.shape.image.src = Img
    // Part.particles.color.value = 'white'
  }, [])

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);


  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Part}
      />
    </>
  );
};

export default ParticlesSt;