const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    findStepById,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db('schemes as sc')
        .join('steps as st', 'sc.id', 'st.scheme_id')
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('sc.id', id).orderBy('st.step_number');
}

function findStepById(id) {
    return db('steps').where({ id }).first();
}

function add(scheme) {
    return db('schemes').insert(scheme).then(ids => {
        return findById(ids[0]);
    }).catch(err => {
        console.log(err);
    });
}

function addStep(step, scheme_id) {
    return db('steps').insert({ scheme_id, ...step }).then(ids => {
        return findStepById(ids[0]);
    }).catch(err => {
        console.log(err);
    });
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes).then(count => {
        return findById(id);
    }).catch(err => {
        console.log(err);
    });
}

function remove(id) {
    return findById(id).then(scheme => {
        return db('schemes').where({ id }).del().then(count => {
            return scheme;
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}