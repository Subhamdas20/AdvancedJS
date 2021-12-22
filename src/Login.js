
var promise = new Promise(function(resolve, reject) {
  const authorisation = true

  if(authorisation == true) {
    resolve();
  } else {
    reject();
  }
});
   
promise.
    then(()=> {
        console.log('login success');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });


