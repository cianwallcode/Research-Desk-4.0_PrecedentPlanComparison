/* * COPYRIGHT (C) 2026 [YOUR NAME] - ALL RIGHTS RESERVED */
const siteData = [
  {
    "id": 1,
    "name": "Mellifont Abbey",
    "bucket": "Cistercian",
    "plan_url": "mellifont.jpg",
    "proportions": {
        "cloister": "1:1 Square",
        "refectory": "1:√2 Ratio"
    },
    "labels": {
        "cloister": { "x": 35, "y": 35, "w": 30, "h": 30 },
        "refectory": { "x": 42, "y": 65, "w": 16, "h": 22.6 } // 16 * 1.414 = 22.6
    }
  },
  {
    "id": 2,
    "name": "Cluny Abbey III",
    "bucket": "Benedictine",
    "plan_url": "cluny.jpg",
    "proportions": {
        "cloister": "1:1.2 Ratio",
        "refectory": "1:3 Extended"
    },
    "labels": {
        "cloister": { "x": 35, "y": 35, "w": 36, "h": 30 },
        "refectory": { "x": 30, "y": 65, "w": 40, "h": 13 }
    }
  }
];
