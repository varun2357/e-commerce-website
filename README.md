# Install Dependencies

**For Backend** - `npm i`

**For Frontend** - `cd frontend` ` npm i`

## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**

PORT=

DB_URI =

STRIPE_API_KEY=

STRIPE_SECRET_KEY=

JWT_SECRET=

JWT_EXPIRE=

COOKIE_EXPIRE=

SMPT_SERVICE =

SMPT_MAIL=

SMPT_PASSWORD=

SMPT_HOST=

SMPT_PORT=

CLOUDINARY_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

_fill each filed with your info respectively_

## Essential Variables explanation
### PORT and DB_URI
they stand for the for sytem port and mongodb database id

For port i used 4000

for DB_URI make a new cluster,give it ip permissions and the copy the id here.dont forget to replace <password> in the link

### Stride
  
Stride is used for the payment system.
  
Make a account and enter the data
  
### JWT
  
JWT is used for encrpt and decrpt
  
make a random value in JWT_SECRET and and its expiration time in JWT_EXPIRE
  
### Cookie
In COOKIE_EXPIRE add expiration time
### SMPT
add this according to your preferred service
### Cloudinary
Used for storing image data

Make an account and add the data here  

# Run the code

**For Backend** - `npm start`

**For Frontend** - `cd frontend` ` npm start`
