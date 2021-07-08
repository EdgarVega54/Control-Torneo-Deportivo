'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var marcadorSchema = Schema ({
    jornada: Number;
    equipo1:{type: Schema.Types.Object}
    equipo2
    
});