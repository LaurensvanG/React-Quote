const colours = {
    dark: [
        "#2c3e50",
        "#342224", 
        "#472e32", 
        "#700a07",
        "#5d2574", 
        "#0f4805"
    ],
    
    light: [
        "#e74c3c",
        "#fb6964", 
        "#f39c12",
        "#16a085", 
        "#27ae60",
        "#bdbb99", 
        "#77b1A9", 
        "#73a857"
    ]
}

export default function() {
    return ([
            colours.light[Math.floor(Math.random() * colours.light.length)],
            colours.dark[Math.floor(Math.random() * colours.dark.length)]
        ])
} 