import React from "react"
import { createStyles } from "@material-ui/core"

const colours = {
    dark: {
        pickledBluewood: "#2c3e50",
        cocoaBrown: "#342224", 
        woodyBrown: "#472E32", 
        totemPole: "#990A05",
        cinnabar: "#e74c3c", 
        eminence: "#5d2574", 
        sanFelix: "0A4805"
    },
    
    light: {
        bittersweet:"#FB6964", 
        butterCup: "#f39c12",
        mountainMeadow: "#16a085", 
        jungleGreen: "#27ae60",
        heatheredGrey: "#BDBB99", 
        gulfStream: "#77B1A9", 
        chelseaCucumber: "#73A857"
    }
}

export default function(type) {
    return {
        "@global": {
            palette: {
                "type": type
            },
            body: {
              backgroundColor: type === "light" ? colours.light[Math.floor(Math.random() * colours.light.length)] : colours.dark[Math.floor(Math.random() * colours.dark.length)]
            }
        }
    }
} 