import ApplicationAdapter from 'flix-with-friends/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    console.log('in the screening adapter create record');
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the
    // sibling serializer
    // let serialized = this.serialize(record, { includeId: true });
    // let listId = serialized.list_id;
    let data = { screening };
    let url = `${api}/screenings`;

    return this.ajax(url, 'POST', { data });
  },
});
