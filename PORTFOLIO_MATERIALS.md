# Adding portfolio materials

The six case studies live in `_projects/`: `ffstreams.md`, `autonomous_car.md`, `carla_apollo_bridge.md`, `cleaning_robot.md`, `grasp_detection.md`, and `quadcopter.md`.

Each file contains the case-study copy and media settings in its YAML front matter. Empty media fields show an intentional “Visual coming soon” panel. No stock photos or simulated results are presented as project evidence.

## Replace a visual

Put an original image under `assets/img/projects/` and set these fields in the relevant project:

```yaml
img: /assets/img/projects/kia-soul.jpg
image_alt: Kia Soul autonomous test vehicle viewed from the side
media_note: Kia Soul autonomous vehicle used for planning validation.
```

Use a landscape image, ideally around 1600 pixels wide. Images are contained rather than cropped so diagrams remain readable. Write captions that describe the actual scene.

## Add a demo

For a self-hosted MP4, set `video` and optionally `poster` to site-relative paths. Videos use click-to-play controls; the cover image remains on the listing card. For example:

```yaml
video: /assets/video/projects/overtaking.mp4
poster: /assets/img/projects/overtaking-poster.jpg
```

For YouTube or another hosted demo, add a working URL to the `links` list instead. The CARLA–Apollo page already links to the supplied demo and repository. Do not add empty link buttons.

## Add results and galleries

Replace the `results` text with verified evaluation details. Set `result_image` to your result figure’s site-relative path and `result_image_alt` to a meaningful description to replace the results placeholder. You can also supply additional result figures through the Markdown body below the closing `---`. The shared layout is `_layouts/portfolio-project.liquid`; the body renders after the results section. Additional images can use normal Markdown syntax.

Before publishing quantitative results, define the vehicle's 10% improvement metric and baseline, and clarify whether YuMi's 97% is grasp detection or executed-grasp success. Confirm which research components were deployed on the real vehicle, and the quadcopter's individual/team contributions and control methods.

## Material checklist

- FFStreams: intersection/overtaking demo, benchmark plot, architecture diagram.
- Vehicle: original Kia Soul photo, maneuver clip, scenario breakdown.
- Bridge: CARLA/Apollo screenshot, sensor and control flow diagram.
- Cleaning robot: outdoor operation, Trash Hunter sequence.
- YuMi: depth input, grasp overlay, execution clip, evaluation definition.
- Quadcopter: build photos, tethered flight, control plots, publication link.

The old phone number is not included. Add a portfolio PDF download only after its contact details are updated.

The homepage highlights are controlled by `featured_projects` in `_pages/about.md` and `featured` on each project. Portfolio order uses `importance`; only projects with `portfolio: true` appear in the main grid. Theme demo projects are excluded. Existing project URLs are preserved.

## FFStreams materials added

The FFStreams page now identifies Mais as the algorithm developer during her Ph.D., with FFStreams preceding FFStreams++. Both supplied GIF demonstrations and both original PNG experiment figures are stored under `assets/img/projects/ffstreams/`. The supplied demonstrations and results are labeled FFStreams++.

Use the `demos` list for titled animations with captions, and `result_figures` for multiple full-resolution result plots. These replace the single hero and results placeholder on this project; the other case studies retain their existing layouts. Each result plot can be opened at its original resolution. The intersection GIF also serves as the project card visual.

## Autonomous driving materials added

The vehicle page uses `assets/img/projects/autonomous-car/mais-and-kia-soul.png` as its cover and project-card image. Four original MP4s are stored in `assets/video/projects/autonomous-car/` and listed under `demos` in `_projects/autonomous_car.md`.

The Kia Soul video is labeled **Real vehicle**. Behavior-tree overtaking, Apollo parallel parking, and reinforcement-learning parking are labeled **Maneuver algorithm demo**; these labels do not imply that those algorithms were demonstrated on the real vehicle.

Demo entries can contain `video` and an optional `poster`, or `img` and `image_alt` for GIFs. All videos have playback controls and load on demand (`preload="none"`); they do not autoplay. Use `show_cover_with_demos: true` to retain the cover photo above the demos. Quantitative results remain a separate placeholder until scenario breakdowns and performance measurements are provided.

## Quadcopter flight clip added

The quadcopter card and detail page now use the existing animated flight clip at `assets/img/publication_preview/autonomous_drone.gif` (400 × 225 pixels). It is reused directly without duplicating the asset. The caption describes the outdoor flight demonstration; control plots and indoor-localization evaluation remain to be added.

The real Kia Soul driving video is now the main player directly below the project introduction (`video`), with a visible title and direct video link. The three other maneuver videos remain in `demos`. The photo remains the project-card image. The main player loads metadata to show the actual video frame rather than reusing the still photograph.

## Additional vehicle, cleaning robot, and bridge materials

The car card now uses `assets/img/projects/autonomous-car/kia-soul.png`. Both car photos appear in a compact `gallery` on the vehicle page; the main real-driving video remains directly below the introduction.

The cleaning robot uses `assets/img/projects/cleaning-robot/mais-and-cleaning-robot.png` on its card and detail page. Its caption identifies the indoor setting accurately.

Three original bridge GIFs are stored under `assets/img/projects/carla-apollo/`: ground-truth obstacles, red-light stopping, and a signalized T-intersection. They use the existing compact `demos` grid with links to the original animations. The ground-truth demo also replaces the bridge card placeholder.

For additional photographs, use a `gallery` list with `title`, `img`, `image_alt`, and `caption`. Galleries reuse the responsive demo-grid sizing, with contained images and links to full-resolution originals.
