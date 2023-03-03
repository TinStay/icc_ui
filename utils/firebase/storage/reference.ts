import firebase from "@/firebase-client";

// console.log('storage', storage)
export var storage = firebase.storage();

// export var gsReference = storage.refFromURL('gs://icc-realm-dev.appspot.com');


// gsReference.child("/zoltanImg.png").getDownloadURL().then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'
//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     console.log('url', url)
   
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log('error', error)
//   });

