'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipoSchema = Schema({
    nameEquipo: String,
    stockJugadores: String,
    imageEquipo: String,
    jugador:[{type: Schema.ObjectId, ref: 'jugador'}]
});

module.exports = mongoose.model('equipo',equipoSchema);