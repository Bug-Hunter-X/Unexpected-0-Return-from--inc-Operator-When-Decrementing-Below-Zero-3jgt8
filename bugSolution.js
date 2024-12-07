```javascript
db.collection('counters').findOneAndUpdate( { _id: 'myCounter' }, { $inc: { count: -1 } }, { returnOriginal: false } ).then(result => {
  if (result.value.count < 0) {
    //Handle negative counter values appropriately.  Reset to 0, throw error, etc.
    db.collection('counters').updateOne({_id: 'myCounter'}, {$set: {count: 0}});
    console.log('Counter decremented below zero, reset to 0');
  } else {
    console.log('Counter successfully decremented:', result.value.count);
  }
});
```