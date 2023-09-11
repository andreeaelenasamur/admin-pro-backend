const fs = require('fs');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const actualizarImagen = async(tipo, id, nombreArchivo) => {

    switch( tipo ) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if ( !medico ) {
                console.log('No es un médico por id')
                return false;
            }

            const pathViejo = `./uploads/medicos/${medico.img}`;
            console.log(fs.existsSync(pathViejo))
            console.log(pathViejo);
            if ( fs.existsSync(pathViejo) ) {
                // borrar la imagen anterior
                fs.unlinkSync(pathViejo);
            }

            medico.img = nombreArchivo;
            await medico.save();
            return true;

            break;
        case 'hospitales':

            break;
        case 'usuarios':

            break;
        
    }



}

module.exports = {
    actualizarImagen
}