const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
}
function findById(id) {
    return db('schemes').where({ id });
}
function findSteps(id) {
    return db('steps as st')
    .innerJoin('schemes ', 'st.scheme_id', '=', 'schemes.id')
    .select('schemes.scheme_name as Scheme', 'st.step_number', 'st.instructions')
        .where({ scheme_id: id});
}
function add(scheme) {
    return db('schemes').insert(scheme);
}
function update(changes, id) {
    return db('schemes')
      .where({ id })
      .update(changes);
}
function remove(id) {
    return db('schemes')
      .where({ id })
      .del();
} 