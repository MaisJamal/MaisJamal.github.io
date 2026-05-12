---
layout: page
title: CARLA-Apollo Bridge
description: Open-source bidirectional interface between the CARLA simulator and Apollo Auto, enabling seamless sim-to-real autonomous driving development.
img:
importance: 2
category: Autonomous Systems
tags: [Software, Open Source]
github: https://github.com/MaisJamal/carla_apollo_bridge
---

Built and maintained an open-source bridge connecting the **CARLA simulator** to the **Apollo Auto** autonomous driving platform. The bridge enables bidirectional communication — sensor data flows from CARLA into Apollo's perception stack, while Apollo's planning and control commands drive the simulated vehicle.

**Key contributions:**
- Designed the message translation layer between CARLA and Apollo, covering LiDAR, camera, GNSS, IMU, and vehicle control interfaces
- Enabled hardware-in-the-loop testing workflows, reducing the gap between simulation and real-world deployment
- Adopted by the community for autonomous driving research and education

**Stack:** ROS, Python, C++, CARLA, Apollo Auto

[GitHub Repository](https://github.com/MaisJamal/carla_apollo_bridge){:target="_blank"}
