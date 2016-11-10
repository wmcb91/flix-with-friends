[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


## Will McBride

# Flix With Friends - A better way to pick movies 

This game has been created for General Assembly's Web Development Immersive.
HTML, SCSS, JavaScript, Ember, Ruby on Rails, and Bootstrap were used to
complete this project.

Client URL: https://wmcb91.github.io/flix-with-friends/

Client-Repo URL: https://github.com/wmcb91/flix-with-friends

API-Repo URL: https://github.com/wmcb91/flix-with-friends-api

Wireframe: http://imgur.com/a/FOffG

ERD: http://imgur.com/a/8W8FG


# User Stories:

- As a user, I want to be able to log in with Facebook
- As a user, I want to be able to change my password periodically
- As a user, I want to see a relevant dashboard when I sign in to my account
- As a user, I want to be able to easily give ratings to movies and see my past ratings
- As a user, I want to be able to find my friends who also use the app
- As a user, I want to be able to see the movies they have rated and want to see
- As a user, I want the app to compare our movies for me so we can compare our lists.

# Planning

I started my planning by writing user stories and whiteboarding a wireframe.
After I had an idea of the basic features and functions of the app I was able
to start my ERD. I wanted a user to have the ability to add ratings to movies
and save movies to watch for later.  Users would have a profile and also have
many movies, through either a screenings join table (ratings) or a queued-films
join table (wish-list). Users would also eventually have to be a self join in
order to have friendships be a feature.

# Development Story

On day 1, I spent most of the day planning because I knew I went in to last
project with less of a plan and it hindered my progress.


Over the weekend I was when I created my API and tested it thoroughly to make sure users
owned their data.  I also spent a good deal of time making wireframes online in
more detail than what I did on the whiteboard. I also started making progress in my client, but things were slow going
while I was still very much learning Ember. Rendering my sample data was very easy
thanks to the powers of Ember but getting actions back up from my components was
much more difficult than with vanilla JavaScript.

The beginning of the week was very slow going since my ability to debug in Ember was weak.
However, I know I could make as much progress as I did in my first five days in just one day on my
sixth day of learning Ember.



# Future Changes
- Add the ability to log in the facebook or google.

- Improve styling and UX to explain to the user how they can use the app

- Add a wish-list for movies you want to watch.

- Add the ability to make friendships with other users so you can compare your watching history.

- Connect to a third party movie database API.
