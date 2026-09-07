---
title: CARLA–Apollo Bridge
description: A bidirectional interface connecting simulated sensors and vehicle control to the Apollo stack.
category: Open-source infrastructure
context: Open source · Simulation and system integration
importance: 3
featured: true
technologies:
  - CARLA
  - Apollo
  - Docker
  - C++
  - Python
placeholder: CARLA + Apollo · synchronized views
media_note: A side-by-side view of simulation and the autonomous driving stack.
result: Closed-loop simulation and validation
problem: Testing autonomy software requires realistic sensor inputs and a reliable path for control commands to reach the simulated vehicle.
contributions:
  - Built a bidirectional interface for sensor-data exchange and control integration.
  - Tuned integration for vehicle dynamics and closed-loop scenario testing.
  - Supported workflows spanning simulation, hardware-in-the-loop testing, and deployment.
approach: Sensor data travels from CARLA to Apollo, while control commands return to the simulated vehicle. This connection enables repeatable
  testing of the driving stack.
results: The open-source bridge supports reproducible scenario testing and has been used by the research community.
results_placeholder: Sensor/control architecture diagram
links:
  - label: GitHub repository
    url: https://github.com/MaisJamal/carla_apollo_bridge
  - label: Watch demo
    url: https://youtu.be/2dQC3ToJGJU
layout: portfolio-project
portfolio: true
img: /assets/img/projects/carla-apollo/ground-truth-obstacles.gif
image_alt: CARLA simulation alongside Apollo visualization of ground-truth obstacles and planned paths.
video: ""
poster: ""
result_image: ""
result_image_alt: ""
demos_heading: CARLA–Apollo integration demonstrations
demos:
  - title: Ground-truth obstacles
    img: /assets/img/projects/carla-apollo/ground-truth-obstacles.gif
    image_alt: CARLA simulation alongside Apollo visualization of ground-truth obstacles and planned paths.
    caption: Ground-truth obstacle visualization in Apollo alongside the CARLA simulation.
  - title: Stopping at a red light
    img: /assets/img/projects/carla-apollo/red-light-stop.gif
    image_alt: CARLA and Apollo views of a red-light stopping scenario.
    caption: A red-light stopping scenario shown in the connected CARLA and Apollo environments.
  - title: Signalized T-intersection
    img: /assets/img/projects/carla-apollo/signalized-t-intersection.gif
    image_alt: Apollo route and traffic-signal visualization with a CARLA view of a T-intersection.
    caption: A signalized T-intersection scenario with the simulator and Apollo views displayed together.
---
