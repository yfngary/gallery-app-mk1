const db = require('../../data/dbConfig');

function getAll() {
    return db('art')
}

function getById(id) {
    return db('art').where('id', id).first();
};

function create(art) {
    return db('art').insert(art)
        .then(([id]) => {
            return db('art').where('id', id).first()
        });
};

module.exports = {
    getAll,
    getById,
    create
}