// screening adapter
import ApplicationAdapter from 'flix-with-friends/application/adapter';

export default ApplicationAdapter.extend({
  createRecord (store, type, screening) {
    console.log('in the screening adapter create record');
    console.log('store is', store);
    console.log('type is', type);
    console.log('screening is', screening);
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the
    // sibling serializer
    // let serialized = this.serialize(record, { includeId: true });
    // let listId = serialized.list_id;
    let data = { screening };
    let url = `${api}/screenings`;
    //
    console.log('data to send is', data);
    return this.ajax(url, 'POST', data);
  },
});
