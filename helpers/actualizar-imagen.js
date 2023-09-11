const fs = require('fs');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');

const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';

    switch( tipo ) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if ( !medico ) {
                console.log('No es un médico por id')
                return false;
            }

            pathViejo = `./uploads/medicos/${medico.img}`;
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
            const hospital = await Hospital.findById(id);
            if ( !hospital ) {
                console.log('No es un hospital por id')
                return false;
            }

            pathViejo = `./uploads/hospitales/${hospital.img}`;
            if ( fs.existsSync(pathViejo) ) {
                // borrar la imagen anterior
                fs.unlinkSync(pathViejo);
            }

            hospital.img = nombreArchivo;
            await hospital.save();
            return true;

            break;
        case 'usuarios':
            const usuario = await Usuario.findById(id);
            if ( !usuario ) {
                console.log('No es un usuario por id')
                return false;
            }

            pathViejo = `./uploads/usuarios/${usuario.img}`;
            if ( fs.existsSync(pathViejo) ) {
                // borrar la imagen anterior
                fs.unlinkSync(pathViejo);
            }

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

            break;
        
    }



}

module.exports = {
    actualizarImagen
}