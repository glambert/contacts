# Contacts [![Build Status](https://travis-ci.org/glambertmtl/contacts.svg?branch=master)](https://travis-ci.org/glambertmtl/contacts)

JavaScript single page web application that lists a user's contacts.

## Data API

For now API is mocked with an initial state inside the Redux store, and
all operations are applied on the client, not the server. This section
outlines what the app expects. 

**The API must be RESTful, have the following endpoints, and returns JSON:**

### **GET** `/contacts`

Returns a list of all available contacts:
  
```
[
  {
    "id": 1,
    "name": "Guillaume Lambert",
    "jobTitle": "Senior Front-End Developer",
    "address": "2675 Basile-Routhier, Laval, QC. Canada",
    "email": "glambertmtl@gmail.com",
    "picture": "http://placehold.it/200x200&text=Picture",
    "note": "Building the Web since 1996"
  },
  ...
]
```
  
### **GET** `/contacts/{id}`

Returns a contact by ID:

```
{
  "id": 1,
  "name": "Guillaume Lambert",
  "jobTitle": "Senior Front-End Developer",
  "address": "2675 Basile-Routhier, Laval, QC. Canada",
  "email": "glambertmtl@gmail.com",
  "picture": "http://placehold.it/200x200&text=Picture",
  "note": "Building the Web since 1996"
}
```

### **POST** `/contacts`

Creates a contact, the following parameters are expected:

- name (required)
- jobTitle
- address
- email
- picture
- note

Must return same data format as **GET** `/contacts/{id}`.

### **PUT** `/contacts/{id}`

Edits a contact by sending the entire data back to the server, the following 
parameters are expected:

- name (required)
- jobTitle
- address
- email
- picture
- note

Must return same data format as **GET** `/contacts/{id}`.

### **DELETE** `/contacts/{id}`

Deletes a contact by ID, returns `true` if successful, `false` if an error occured.

## Installation

The following are required:

* Node Stable LTS (`6.9.1` as of writing this)
* NPM (`3.10.8` as of writing this)

The easiest way to install Node is to use [nvm](https://github.com/creationix/nvm), 
which enables you to install multiple `node` versions on the same machine.

Once nvm is installed, run the following command in your terminal:

```sh
nvm install v6.9.1 && nvm alias default v6.9.1
```

You can now run the node modules installation from the project root:

```sh
npm install
```

## Development

Start the development task by running the following command. 
It will give you a http://localhost:3000 URL with file change live-reloading 
and hot-reloading for CSS & React components:

```sh
npm start
```

## Building

Run the following command in order to build the CSS and JS:

```sh
npm run build
```

### Next steps

- [ ] Use real API, consider all possible cases (errors, timeouts etc.)
- [ ] Fine-tune UI responsiveness & UX
- [ ] Add inline form validation
- [ ] Use CSS modules to encapsulate components-specific styles
- [ ] Add routing for direct access to contacts
- [ ] Save app state in storage
- [ ] Add state transitions & animations
- [ ] Tests!
