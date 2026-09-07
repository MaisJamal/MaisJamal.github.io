---
title: FFStreams / FFStreams++
description: From FFStreams task-and-motion planning to FFStreams++ prediction-aware maneuver planning, developed during my Ph.D.
category: Flagship research
context: Ph.D. research · MIPT · Algorithm developer · First author
importance: 1
featured: true
technologies:
  - TAMP
  - QCNet
  - CommonRoad
  - C++
  - Python
placeholder: Intersection and overtaking visualization
media_note: FFStreams++ intersection-passing simulation from my Ph.D. research.
result: Evaluated on CommonRoad driving scenarios
problem: Autonomous vehicles must choose safe maneuvers while accounting for vehicle constraints and the possible future movements of surrounding
  traffic.
contributions:
  - I developed FFStreams during my Ph.D., combining heuristic search with Streams for task-and-motion planning.
  - I then developed FFStreams++, extending the approach with QCNet multi-agent trajectory prediction for prediction-aware maneuver planning.
  - I evaluated maneuver planning in driving scenarios, including intersection passing and unprotected left turns.
approach: I first developed FFStreams to connect high-level maneuver decisions with low-level motion planning through heuristic search and Streams.
  I then developed FFStreams++, incorporating predicted trajectories of surrounding vehicles into maneuver planning. The demonstrations and experiment
  plots below show the FFStreams++ stage of this research.
results: These two FFStreams++ experiments show intersection passing and an unprotected left turn. Each result figure pairs the maneuver sequence
  with velocity, acceleration, and jerk over time, with YIELD and FOLLOW decision annotations. They illustrate behavior in individual scenarios;
  the linked papers provide the broader experimental evaluation.
results_placeholder: Benchmark plots and scenario comparisons
links:
  - label: FFStreams paper
    url: https://doi.org/10.1109/LRA.2024.3412633
  - label: FFStreams++ preprint
    url: https://arxiv.org/abs/2409.10165
layout: portfolio-project
portfolio: true
img: /assets/img/projects/ffstreams/passing-intersection.gif
image_alt: FFStreams++ simulation of a vehicle passing through an intersection with surrounding traffic.
video: ""
poster: ""
result_image: ""
result_image_alt: ""
demos_heading: FFStreams++ demonstrations
demos:
  - title: Passing an intersection
    img: /assets/img/projects/ffstreams/passing-intersection.gif
    image_alt: Animated FFStreams++ intersection-passing scenario showing vehicle motion and trajectories.
    caption: FFStreams++ plans the vehicle’s passage through an intersection while accounting for surrounding traffic.
  - title: Unprotected left turn
    img: /assets/img/projects/ffstreams/unprotected-left-turn.gif
    image_alt: Animated FFStreams++ unprotected left-turn scenario showing vehicle motion and trajectories.
    caption: FFStreams++ plans an unprotected left turn in the presence of another vehicle.
result_figures:
  - title: Intersection passing — experiment results
    img: /assets/img/projects/ffstreams/passing-intersection-results.png
    image_alt: "Intersection-passing experiment: velocity, acceleration, jerk, YIELD and FOLLOW decisions, and four scenario snapshots at 1.4, 2.8,
      4.2, and 7.0 seconds."
    caption: Velocity, acceleration, and jerk are shown alongside planner decisions and scenario snapshots at 1.4, 2.8, 4.2, and 7.0 seconds.
  - title: Unprotected left turn — experiment results
    img: /assets/img/projects/ffstreams/unprotected-left-turn-results.png
    image_alt: "Unprotected left-turn experiment: velocity, acceleration, jerk, YIELD and FOLLOW decisions, and four scenario snapshots at 1.6,
      3.4, 4.6, and 6.6 seconds."
    caption: Velocity, acceleration, and jerk are shown alongside planner decisions and scenario snapshots at 1.6, 3.4, 4.6, and 6.6 seconds.
---
