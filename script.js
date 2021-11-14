//console.log("hello world");




// How do I change the text color of the name to green?
// How do I access the name?
// How do I change the style?
// How do I change the value of the style?  with DOM



// document.querySelector('h1', container).style.color = 'green';

// document.getElementById("myH1").style.color = "green";

// /////style.backgroundImage 

// How do I change my profile picture to steve's?

// How do I access the image?
// What property do I want to change?
// What do I want to change that property too?

let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: 'images/stevephoto.jpg',     
     //   'https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
  
    bannerImg: 'green' ,
        //"url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: '#00FFFF',
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}
// document.getElementsbyClassName('profile').innerHTML = "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80";

console.log('HELLO');

//How do I get the profile picture of the dog?

//// document.getElementById('fullname').getClickEventListener("click" function() {
////     document.getElementById('fullname').style.com = 'green'


    // const curColour = document.body.style.backgroundColor;

    // document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
// });

// document.getElementById('fullname').innerText = dog.name
console.log(document.getElementById('fullname').innerText)    // )  .innerText = dog.name
document.getElementById('fullname').innerText = dog.name
document.getElementById('age').innerText = dog.age
document.getElementById('location').innerText = dog.location
document.getElementsByClassName("photo").src = dog.profileImg
document.getElementsByClassName("top")[0].style.backgroundColor = dog.bannerImg
document.getElementsByClassName("mid")[0].style.backgroundColor = dog.bannerImg
document.getElementsByClassName("mid-bottom")[0].style.backgroundColor = dog.bannerImg
document.body.style.background = dog.backgroundColor;
document.getElementsByClassName('one1')[0].innerText = dog.stats.followers;
document.getElementsByClassName('one1')[1].innerText = dog.stats.likes;
document.getElementsByClassName('one1')[2].innerText = dog.stats.posts;
