# Research-Desk-4.0_PrecedentPlanComparison. Computer vision model.

Your README file is ready.

[file-tag: code-generated-file-a1b2c3d4e5f6]

This file contains the complete documentation, philosophical context, technical requirements, and the re-initialization prompt needed to recreate the Precedent Comparison Engine in any new environment. You can also copy the content below for immediate use.

Precedent Comparison Engine (v2.2)
1. Project Philosophy: "Rationalist Institutional"
This engine is built on the principles of Institutional Modernism. It treats architectural analysis as a rigorous archival task.

Objective: To provide a side-by-side comparative analysis of architectural precedents (plans, sections, structural logic) through an interface that feels like a research database.

Perspective: Where applicable (in 3D modules), the camera is strictly locked to a 1.7m human eye-level to maintain a grounded, tangible scale.

2. Visual Identity & Design System
Primary Palette: * Backgrounds: #ffffff (White), #f4f4f4 (Light Grey sidebar), #000000 (UI accents).

Accent Color: #ff6b00 (International Orange) – Strictly used for primary call-to-actions, active toggle states, and analytical overlays.

Typography: Clean, geometric sans-serif (system sans-serif) to ensure high readability.

UI Aesthetic: Minimalist/Industrial. High-contrast, thin borders, no shadows/gradients. The interface should feel "drafted" rather than "designed."

3. Technical Specifications
Dependencies
Core: HTML5, CSS3, Vanilla JavaScript (ES6+).

Data Layer: The system is data-agnostic. It requires an external database.js file defining a siteData array (objects containing name, bucket, plan_url, and labels array).

UI/UX Logic
The Sidebar: Contains global controls for the viewer.

Toggles:

Feature ID: Toggles SVG overlays on the architectural plans.

Proportions: Toggles analytical label visibility within the SVG.

Viewport: Responsive grid system using flex.

The "G" Button: Placeholder for LLM integration (Gemini/API link).

4. Re-Initialization Prompt
Copy and paste the following block into a new AI session to perfectly recreate this codebase/environment:

"I need to initialize a project based on my 'Precedent Comparison Engine.'

Core Architecture:

Use an 'Institutional Modernist' aesthetic: White/Grey backgrounds, #ff6b00 accent color, sans-serif typography, high-contrast black borders.

Implement a sidebar-left/viewport-right layout.

The viewport must dynamically render data from a database.js file (assume siteData array).

Each precedent card must contain:

A responsive image container with an overlaying SVG.

SVG overlays (hotspots) defined by [x, y, w, h] coordinates from the data.

Toggles in the sidebar to control CSS class states (.show-features, .show-props).

Footer must include: Copyright '2026 R4. All Rights Reserved.'

Maintain strict grounded perspective logic if adding 3D elements (1.7m eye level).

Proceed by setting up the HTML skeleton and the CSS variable system."

5. Data Schema (database.js Reference)
For the code to render, ensure your database.js follows this structure:

JavaScript
const siteData = [
  {
    name: "Project Name",
    bucket: "TYPE",
    plan_url: "path/to/image.jpg",
    synthesis: "Analytical text here.",
    labels: [
      { name: "ID", x: 10, y: 10, w: 20, h: 20, prop: "1:2" }
    ]
  }
];
6. Copyright
© 2026 R4. All rights reserved. No part of this code or analytical framework may be reproduced without authorization.

Python
readme_content = """# Precedent Comparison Engine (v2.2)

## 1. Project Philosophy: "Rationalist Institutional"
This engine is built on the principles of **Institutional Modernism**. It treats architectural analysis as a rigorous archival task.
* **Objective:** To provide a side-by-side comparative analysis of architectural precedents (plans, sections, structural logic) through an interface that feels like a research database.
* **Perspective:** Where applicable (in 3D modules), the camera is strictly locked to a **1.7m human eye-level** to maintain a grounded, tangible scale.

## 2. Visual Identity & Design System
* **Primary Palette:** * Backgrounds: `#ffffff` (White), `#f4f4f4` (Light Grey sidebar), `#000000` (UI accents).
    * Accent Color: `#ff6b00` (International Orange) – *Strictly used for primary call-to-actions, active toggle states, and analytical overlays.*
* **Typography:** Clean, geometric sans-serif (system sans-serif) to ensure high readability.
* **UI Aesthetic:** Minimalist/Industrial. High-contrast, thin borders, no shadows/gradients. The interface should feel "drafted" rather than "designed."

## 3. Technical Specifications
### Dependencies
* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Data Layer:** The system is **data-agnostic**. It requires an external `database.js` file defining a `siteData` array (objects containing `name`, `bucket`, `plan_url`, and `labels` array).

### UI/UX Logic
* **The Sidebar:** Contains global controls for the viewer.
* **Toggles:**
    * `Feature ID`: Toggles SVG overlays on the architectural plans.
    * `Proportions`: Toggles analytical label visibility within the SVG.
* **Viewport:** Responsive grid system using `flex`.
* **The "G" Button:** Placeholder for LLM integration (Gemini/API link).

## 4. Re-Initialization Prompt
*Copy and paste the following block into a new AI session to perfectly recreate this codebase/environment:*

> "I need to initialize a project based on my 'Precedent Comparison Engine.' 
> 
> **Core Architecture:**
> 1. Use an 'Institutional Modernist' aesthetic: White/Grey backgrounds, #ff6b00 accent color, sans-serif typography, high-contrast black borders.
> 2. Implement a sidebar-left/viewport-right layout.
> 3. The viewport must dynamically render data from a `database.js` file (assume `siteData` array).
> 4. Each precedent card must contain:
>    - A responsive image container with an overlaying SVG.
>    - SVG overlays (hotspots) defined by [x, y, w, h] coordinates from the data.
>    - Toggles in the sidebar to control CSS class states (`.show-features`, `.show-props`).
> 5. Footer must include: Copyright '2026 R4. All Rights Reserved.'
> 6. Maintain strict grounded perspective logic if adding 3D elements (1.7m eye level).
> 
> Proceed by setting up the HTML skeleton and the CSS variable system."

## 5. Data Schema (`database.js` Reference)
For the code to render, ensure your `database.js` follows this structure:

```javascript
const siteData = [
  {
    name: "Project Name",
    bucket: "TYPE",
    plan_url: "path/to/image.jpg",
    synthesis: "Analytical text here.",
    labels: [
      { name: "ID", x: 10, y: 10, w: 20, h: 20, prop: "1:2" }
    ]
  }
];
6. Copyright
© 2026 R4. All rights reserved. No part of this code or analytical framework may be reproduced without authorization."""

with open('README.md', 'w') as f:
f.write(readme_content)

Your README file is ready.

[file-tag: code-generated-file-0-1777152741528633096]

This file contains the complete documentation, philosophical context, technical requirements, and the re-initialization prompt needed to recreate the Precedent Comparison Engine in any new environment. You can also copy the content below for immediate use.

***

# Precedent Comparison Engine (v2.2)

## 1. Project Philosophy: "Rationalist Institutional"
This engine is built on the principles of **Institutional Modernism**. It treats architectural analysis as a rigorous archival task.
* **Objective:** To provide a side-by-side comparative analysis of architectural precedents (plans, sections, structural logic) through an interface that feels like a research database.
* **Perspective:** Where applicable (in 3D modules), the camera is strictly locked to a **1.7m human eye-level** to maintain a grounded, tangible scale.

## 2. Visual Identity & Design System
* **Primary Palette:** * Backgrounds: `#ffffff` (White), `#f4f4f4` (Light Grey sidebar), `#000000` (UI accents).
    * Accent Color: `#ff6b00` (International Orange) – *Strictly used for primary call-to-actions, active toggle states, and analytical overlays.*
* **Typography:** Clean, geometric sans-serif (system sans-serif) to ensure high readability.
* **UI Aesthetic:** Minimalist/Industrial. High-contrast, thin borders, no shadows/gradients. The interface should feel "drafted" rather than "designed."

## 3. Technical Specifications
### Dependencies
* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Data Layer:** The system is **data-agnostic**. It requires an external `database.js` file defining a `siteData` array (objects containing `name`, `bucket`, `plan_url`, and `labels` array).

### UI/UX Logic
* **The Sidebar:** Contains global controls for the viewer.
* **Toggles:**
    * `Feature ID`: Toggles SVG overlays on the architectural plans.
    * `Proportions`: Toggles analytical label visibility within the SVG.
* **Viewport:** Responsive grid system using `flex`.
* **The "G" Button:** Placeholder for LLM integration (Gemini/API link).

## 4. Re-Initialization Prompt
*Copy and paste the following block into a new AI session to perfectly recreate this codebase/environment:*

> "I need to initialize a project based on my 'Precedent Comparison Engine.' 
> 
> **Core Architecture:**
> 1. Use an 'Institutional Modernist' aesthetic: White/Grey backgrounds, #ff6b00 accent color, sans-serif typography, high-contrast black borders.
> 2. Implement a sidebar-left/viewport-right layout.
> 3. The viewport must dynamically render data from a `database.js` file (assume `siteData` array).
> 4. Each precedent card must contain:
>    - A responsive image container with an overlaying SVG.
>    - SVG overlays (hotspots) defined by [x, y, w, h] coordinates from the data.
>    - Toggles in the sidebar to control CSS class states (`.show-features`, `.show-props`).
> 5. Footer must include: Copyright '2026 R4. All Rights Reserved.'
> 6. Maintain strict grounded perspective logic if adding 3D elements (1.7m eye level).
> 
> Proceed by setting up the HTML skeleton and the CSS variable system."

## 5. Data Schema (`database.js` Reference)
For the code to render, ensure your `database.js` follows this structure:

```javascript
const siteData = [
  {
    name: "Project Name",
    bucket: "TYPE",
    plan_url: "path/to/image.jpg",
    synthesis: "Analytical text here.",
    labels: [
      { name: "ID", x: 10, y: 10, w: 20, h: 20, prop: "1:2" }
    ]
  }
];
6. Copyright
© 2026 R4. All rights reserved. No part of this code or analytical framework may be reproduced without authorization.
