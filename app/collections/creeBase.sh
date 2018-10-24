 #!/bin/bash
 mongoimport --db DB_TROC --collection Membres --file Membres.json --jsonArray --drop
 mongoimport --db DB_TROC --collection Competences --file Competences.json --jsonArray --drop
 mongoimport --db DB_TROC --collection Biens --file Biens.json --jsonArray --drop
 mongoimport --db DB_TROC --collection Reservations --file Reservations.json --jsonArray --drop
 mongo

