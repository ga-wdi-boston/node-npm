## Practice: Install a Package for Enumeration

- What package did you install for enumeration?
- enum

## Research: Popular NPM Packages

Package 1: nodemailer

1.  What problem does this package solve?
      Sends emails from node
1.  How can I use this package in my own code? What steps are involved?

      ````js
      npm install nodemailer

      let nodemailer = require('nodemailer');

      // create reusable transporter object using the default SMTP transport
      let  transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

      // setup e-mail data with unicode symbols
      let mailOptions = {
          from: '"Bob 👥" <bob@aol.com>', // sender address
          to: 'tom@aol.com, mom@aol.com', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world 🐴', // plaintext body
          html: '<b>Hello world 🐴</b>' // html body
          };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

````
1.  How well-maintained is this package? What criteria did I use to decide?
      Last commit 5 days ago,  5k stars in gitHub , 700 commits, build is passing

Package 2: Mongoose

1.  What problem does this package solve?
      mongoose is mongoDBs object modeling tool to work in an async environment

1.  How can I use this package in my own code? What steps are involved?

      npm install mongoose

      ````js

          let mongoose = require('mongoose');

          mongoose.connect('mongodb://localhost/my_database');

          let Schema = mongoose.Schema,
            ObjectId = Schema.ObjectId;

          let BlogPost = new Schema({
              author    : ObjectId,
              title     : String,
              body      : String,
              date      : Date
          });

          let Comment = new Schema({
              name: { type: String, default: 'hahaha' },
              age: { type: Number, min: 18, index: true },
              bio: { type: String, match: /[a-z]/ },
              date: { type: Date, default: Date.now },
              buff: Buffer
            });


      ````
1.  How well-maintained is this package? What criteria did I use to decide?
      Mainted very well, 6k commits, 9k starts on gitHub last commit was 2 hours ago

Package 3: React

1.  What problem does this package solve?
      Builds user interfaces

1.  How can I use this package in my own code? What steps are involved?

    npm install react

    ````html

          <!-- The core React library -->
      <script src="https://fb.me/react-15.0.2.js"></script>
      <!-- The ReactDOM Library -->
      <script src="https://fb.me/react-dom-15.0.2.js"></script>

    ````

    ````js

      //render Hello World into a container on the page
      let HelloMessage = React.createClass({
      render: function() {
      return <div>Hello {this.props.name}</div>;
    }
    });

    ````

1.  How well-maintained is this package? What criteria did I use to decide?
      Well maintained, 6k commits,  42k stars, last commit 2 hours ago
