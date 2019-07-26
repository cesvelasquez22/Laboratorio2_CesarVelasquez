//Crear función para llamar funciones y calcular áreas

let calcSurface = (figure) => {
    const  surfaces  = require('./surfaces.js')

    process.stdin.resume();
    process.stdin.setEncoding('utf8')

    //Validar la figura a calcular
    switch (figure){
        case 'square':
            process.stdout.write('Por favor ingrese el lado de un cuadrado: ');
            process.stdin.on('data', (chunk) =>{
                let side = parseFloat(chunk);
                let surface = surfaces.square(side);
                process.stdout.write(`La superficie del cuadrado es ${surface.toFixed(2)} metros cuadrados\n`);
                process.stdin.destroy();
            })
            break;
        case 'triangle':
            process.stdout.write('Por favor ingrese la base y la altura del triangulo separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base = parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.triangle(base, height)

                process.stdout.write(`La superficie del triangulo es ${surface.toFixed(2)} metros cuadrados\n`)
                process.stdin.destroy();
            })
            break;
        case 'rectangle':
            process.stdout.write('Ingrese el largo y el ancho del rectangulo separado por un espacio: ');
            process.stdin.on('data', (chunk) => {
                let baseAndHeight = chunk.split(' ');
                let base =  parseFloat(baseAndHeight[0]);
                let height = parseFloat(baseAndHeight[1]);
                let surface = surfaces.rectangle(base, height);
                
                process.stdout.write(`La superficie del rectangulo es ${surface.toFixed(2)} metros cuadrados\n`);
                process.stdin.destroy();
            })
            break;
        case 'circle':
            process.stdout.write('Ingrese el radio del círculo: ');
            process.stdin.on('data', (chunk) => {
                let surface = surfaces.circle(parseFloat(chunk));

                process.stdout.write(`La superficie del círculo es ${surface.toFixed(2)} metros cuadrados\n`);
                process.stdin.destroy();
            })
            break;
        case 'ellipse':
            break;
        default:
            process.stdout.write('Opción incorrecta, por favor intente de nuevo\n');
            process.exit();
            break;
    }
}

calcSurface(process.argv[2]);
process.on('exit', () => {
    process.stdout.write('Hasta la próxima');
});