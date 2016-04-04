var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Robin Run",
            image: "https://farm1.staticflickr.com/742/21988196478_75cd1300b5.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas maximus libero, a vulputate felis pretium sed. Donec vitae efficitur massa, a bibendum mauris. Morbi ac imperdiet libero, at gravida massa. Pellentesque dolor mauris, ultrices ut ultricies non, pellentesque in eros. Sed malesuada diam quam, eu gravida quam aliquet ac. Donec consectetur vulputate ipsum tempus ultricies. Curabitur fringilla at neque ut ornare. Nulla facilisi. Praesent a fringilla lectus, quis commodo tortor. Sed elementum, ipsum at pulvinar posuere, sem nulla sollicitudin velit, at condimentum dui dui a massa. Quisque sed vehicula purus, porttitor faucibus mi. Quisque non metus sit amet arcu ultricies hendrerit nec sed lectus."
        },        {
            name: "Camp Trexler",
            image: "https://farm8.staticflickr.com/7174/6655837043_6b4948557f.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas maximus libero, a vulputate felis pretium sed. Donec vitae efficitur massa, a bibendum mauris. Morbi ac imperdiet libero, at gravida massa. Pellentesque dolor mauris, ultrices ut ultricies non, pellentesque in eros. Sed malesuada diam quam, eu gravida quam aliquet ac. Donec consectetur vulputate ipsum tempus ultricies. Curabitur fringilla at neque ut ornare. Nulla facilisi. Praesent a fringilla lectus, quis commodo tortor. Sed elementum, ipsum at pulvinar posuere, sem nulla sollicitudin velit, at condimentum dui dui a massa. Quisque sed vehicula purus, porttitor faucibus mi. Quisque non metus sit amet arcu ultricies hendrerit nec sed lectus."
        },        {
            name: "Lake Ontelaunee",
            image: "https://farm8.staticflickr.com/7441/11281671695_3f5b89888c.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas maximus libero, a vulputate felis pretium sed. Donec vitae efficitur massa, a bibendum mauris. Morbi ac imperdiet libero, at gravida massa. Pellentesque dolor mauris, ultrices ut ultricies non, pellentesque in eros. Sed malesuada diam quam, eu gravida quam aliquet ac. Donec consectetur vulputate ipsum tempus ultricies. Curabitur fringilla at neque ut ornare. Nulla facilisi. Praesent a fringilla lectus, quis commodo tortor. Sed elementum, ipsum at pulvinar posuere, sem nulla sollicitudin velit, at condimentum dui dui a massa. Quisque sed vehicula purus, porttitor faucibus mi. Quisque non metus sit amet arcu ultricies hendrerit nec sed lectus."
        }
    ];

function seedDB() {
    // remove campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err);
        // } else {
        //     console.log("REMOVED CAMPGROUNDS!");
        //     // add campgrounds
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if(err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("CAMPGROUND ADDED!");
        //                 Comment.create(
        //                     {
        //                         text: "No beer and TV make Homer go crazy!",
        //                         author: "Homer"
        //                     }, function(err, comment) {
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("CREATED NEW COMMENT!");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;