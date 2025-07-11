// particles.js
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" },
    shape: {
      type: "polygon",
      options: {
        sides: 5
      }
    },
    opacity: { value: 0.3 },
    size: { value: 4 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outMode: "bounce"
    },
    links: {
      enable: true,
      color: "#00ffff",
      distance: 150,
      opacity: 0.2,
      width: 1
    }
  },
  background: {
    color: "#000"
  }
});
