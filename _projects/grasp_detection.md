---
title: "CNN Grasp Detection"
description: "Learning grasp position, angle, and width from depth images for an ABB YuMi manipulator."
category: "Manipulation robotics"
context: "M.Sc. thesis · Bauman Moscow State Technical University"
importance: 5
featured: false
technologies: ["PyTorch", "ROS", "MoveIt", "CoppeliaSim"]
placeholder: "Depth image → grasp prediction → action"
media_note: "Depth inputs, grasp predictions, and a simulated pick-and-place sequence."
result: "Perception-to-action pipeline on ABB YuMi"
problem: "Robotic pick-and-place requires converting visual observations into grasp parameters that a manipulator can execute."
contributions:
  [
    "Trained a CNN on depth images to predict grasp position, angle, and width.",
    "Connected grasp predictions to a pick-and-place pipeline.",
    "Validated the approach in CoppeliaSim with the ABB YuMi dual-arm manipulator.",
  ]
approach: "Depth observations feed a learned grasp detector. Its predicted grasp parameters inform the manipulation pipeline for simulated execution."
results: "The system was evaluated on test objects. The evaluation material will specify the success metric, test set, and experimental conditions."
results_placeholder: "Grasp overlays and evaluation results"
links: []
layout: "portfolio-project"
portfolio: true
img: ""
image_alt: ""
video: ""
poster: ""
result_image: ""
result_image_alt: ""
---
