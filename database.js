/* * COPYRIGHT (C) 2026 R4 - ALL RIGHTS RESERVED */

const siteData = [
  {
    "id": 1,
    "name": "Mellifont Abbey",
    "bucket": "Cistercian",
    "plan_url": "mellifont.jpg",
    "synthesis": "90° Refectory alignment + Square Apse. Typical Cistercian austerity.",
    "labels": [
      {
        "name": "CHURCH",
        "prop": "1:3 Axis",
        "parts": [
          { "x": 45, "y": 10, "w": 10, "h": 60 },
          { "x": 25, "y": 30, "w": 50, "h": 15 }
        ]
      },
      { "x": 41, "y": 75, "w": 18, "h": 18, "name": "GARTH", "prop": "1:1 Square" },
      { "x": 44, "y": 95, "w": 12, "h": 25, "name": "REFECTORY", "prop": "1:√2 Ratio" }
    ]
  },
  {
    "id": 2,
    "name": "Cluny Abbey III",
    "bucket": "Benedictine",
    "plan_url": "cluny.jpg",
    "synthesis": "Parallel Refectory + Radiating Chevet. Focus on monumental liturgical scale.",
    "labels": [
      { "x": 10, "y": 5, "w": 80, "h": 22, "name": "CHURCH", "prop": "1:5 Axis" },
      { "x": 32, "y": 32, "w": 36, "h": 24, "name": "GARTH", "prop": "1:1.5 Ratio" },
      { "x": 30, "y": 60, "w": 40, "h": 8, "name": "REFECTORY", "prop": "1:4 Ratio" }
    ]
  }
];

const cloisterData = [
  {
    "id": 1,
    "name": "Example Cloister",
    "bucket": "Cloister",
    "plan_url": "cloister.jpg",
    "synthesis": "Arcade analysis.",
    "labels": [
      { "x": 20, "y": 20, "w": 50, "h": 50, "name": "ARCADE", "prop": "1:1" }
    ]
  }
];
