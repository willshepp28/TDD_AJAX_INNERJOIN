
const API_URL = 'http://localhost:3000/api/v1/users';
const API_POST = 'http://localhost:3000/api/v1/posts';
const API_AGREE = 'http://localhost:3000/api/v1/agree';
const API_DISAGREE = 'http://localhost:3000/api/v1/disagree';

$(() => {

    // get users
    $.get(API_URL)
    .then(user => {
        console.log("______ User: ");
        user.forEach(i => {
            console.log(i);
        })
       
    })


    // get posts
    $.get(API_POST)
    .then(post => {
        console.log("______ Post: ");
        post.forEach(i => {
            console.log(i)
        })
       
    });


     // get posts
     $.get(API_AGREE)
     .then(agree => {
        console.log("______ Agree: ");
         agree.forEach(i => {
             console.log(i)
         })
        
     });


      // get posts
      $.get(API_AGREE)
      .then(agree => {
         console.log("______ Disagree: ");
          agree.forEach(i => {
              console.log(i)
          })
         
      });
  
 

});





// $(() => {

//      // get posts
//      $.get(API_AGREE)
//      .then(agree => {
//          agree.forEach(i => {
//              console.log(i)
//          })
//          console.log("______");
//      });
// });


// $(() => {


//         // get posts
//         $.get(API_DISAGREE)
//         .then(disagree => {
//             disagree.forEach(i => {
//                 console.log(i)
//             })
//             console.log("______");
//         });
// })