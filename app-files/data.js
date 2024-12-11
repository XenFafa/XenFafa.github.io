var APP_DATA = {
  "scenes": [
    {
      "id": "0-salle-de-classe",
      "name": "Salle de classe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": 0.9814377263856766,
        "pitch": 0.16554546296193884,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 1.2721959715239333,
          "pitch": 0.016349253973110933,
          "rotation": 0,
          "target": "1-couloir"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7609480354132998,
          "pitch": 0.10389671668107603,
          "title": "<div>Faga</div>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.3481777997547901,
        "pitch": 0.31736345520866394,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.5948083672055624,
          "pitch": 0.6448131977311462,
          "rotation": 0,
          "target": "2-exterieur-bat-b"
        },
        {
          "yaw": -1.203274213947651,
          "pitch": -0.07681338796757586,
          "rotation": 5.497787143782138,
          "target": "0-salle-de-classe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5070925309361733,
          "pitch": 0.03423819543101558,
          "title": "Nale Arlimane<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-exterieur-bat-b",
      "name": "Exterieur (bat B)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.2835886064488644,
        "pitch": -0.7547420379294767,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.014684917631131,
          "pitch": -0.046253992580140846,
          "rotation": 5.497787143782138,
          "target": "3-exterieur-bat-d"
        },
        {
          "yaw": -1.5617750286573369,
          "pitch": -0.01304281587881917,
          "rotation": 0,
          "target": "6-statue"
        },
        {
          "yaw": -2.095439629621918,
          "pitch": 0.05711540144594984,
          "rotation": 0,
          "target": "1-couloir"
        },
        {
          "yaw": 0.44937251999582273,
          "pitch": -0.019255399646461058,
          "rotation": 5.497787143782138,
          "target": "5-escaliers-bat-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2227688974747739,
          "pitch": -0.036950040545594476,
          "title": "<div>Nale fouille la poubelle</div><div>(il aime bien)<br></div>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-exterieur-bat-d",
      "name": "Exterieur (bat D)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -2.63651448803202,
        "pitch": 0.1056688219817481,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -0.3715365448096186,
          "pitch": 0.045623065049355205,
          "rotation": 0,
          "target": "2-exterieur-bat-b"
        },
        {
          "yaw": 0.1078905140101103,
          "pitch": 0.21492310949241222,
          "rotation": 0.7853981633974483,
          "target": "4-maison-des-lycens"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8970580767071885,
          "pitch": 0.017112297555552658,
          "title": "Etang",
          "text": "<br>"
        },
        {
          "yaw": 0.7377609211164042,
          "pitch": 0.09881209616792219,
          "title": "<div>Geoanne</div>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "4-maison-des-lycens",
      "name": "Maison des lycéens",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.9915018780086964,
        "pitch": 0.10778187387299276,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": -1.692765161028678,
          "pitch": 0.07451793676594853,
          "rotation": 5.497787143782138,
          "target": "6-statue"
        },
        {
          "yaw": 0.13869955262175893,
          "pitch": 0.13030493611345229,
          "rotation": 1.5707963267948966,
          "target": "3-exterieur-bat-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2250414331323327,
          "pitch": 0.05648522716207083,
          "title": "Nale et Etang (ils ne savent pas lire)<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "5-escaliers-bat-d",
      "name": "Escaliers (bat D)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9891544047013685,
          "pitch": 0.5813194366002357,
          "rotation": 5.497787143782138,
          "target": "2-exterieur-bat-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-statue",
      "name": "Statue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.6395599084585548,
        "pitch": -0.4168468655940103,
        "fov": 1.3274289077235746
      },
      "linkHotspots": [
        {
          "yaw": 0.7003727758997442,
          "pitch": 0.18884639159270478,
          "rotation": 0.7853981633974483,
          "target": "4-maison-des-lycens"
        },
        {
          "yaw": 3.1256174605009885,
          "pitch": 0.08209462027499725,
          "rotation": 0,
          "target": "2-exterieur-bat-b"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.32636172392035334,
          "pitch": 0.06506378422433556,
          "title": "Geoanne (il a froid)<br>",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
