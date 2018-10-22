"use strict";
var assert = require('assert');
var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017"
let cors = require("cors");
app.use(cors());

//___________AFFICHER MEMBRE (nom et prénom)___________//
let showMembre = function(db, callback){
    db.collection("Membres").find().toArray((err, documents) => {
	let html = '<html><body><ul>';
	let listeNoms = "";
	for (let doc of documents){
	    listeNoms+='<li>'+doc.prenom+" "+doc.nom+"</li>"
	}
	html += '</ul></body></html>';
	callback(listeNoms);
    });
}

//___________AFFICHER TOUS LES BIENS DUN UTIISATEUR (nom et prénom)___________//
let showProprio = function(db, prenomM, callback){
    //CHERCHER DANS MEMBRES
    db.collection("Membres").find().toArray((err, documents) => {
	
	let listeNoms = "";
	let emailM=[];
	//RECHERCHE TOUS LES JAMES DANS MEMBRE
	for (let doc of documents){
	    if (doc.prenom == prenomM) {
		//listeNoms+='<li>'+doc.prenom+" "+doc.nom+"</li>";
		emailM.push(doc.email);
	    }
	}
	//console.log("LISTE EMAIL : "+emailM);
    });
}

//CHERCHE DANS BIENS
let researchBiensMembre = function(db, email, callback){
    db.collection("Biens").find().toArray((err, JSONBiens) => {
	let html = '<html><body><ul>';
	let listeBiens = "";
	console.log("reserch biens");
	for (let em in email){
	    for (let doc in JSONBiens){
		if (doc.email == email) {
		listeBiens+='<li>'+doc.email+" <br>ID BIENS : "+doc.id+" <br>Nom bien : "+doc.biens+"</li>";    
		}
	    }
	}
	html += '</ul></body></html>';
	callback(listeBiens);
	
});

}


	    //MAIN
MongoClient.connect(url, {useNewUrlParser: true},(err, client) => {
    let db = client.db("DB_TROC");
    assert.equal(null, err);
    
    app.get('/membres', function(req, res){
    	//affiche tous les prenoms

        db.collection("Membres").find().toArray((err, documents) => {
        	res.setHeader('Access-Control-Allow-Origin', '*');	    
        	res.setHeader('Content-type', 'application/json');
	    res.end(JSON.stringify(documents));	
    	});
	    // showMembre(db, function(html){
    });

    app.get('/biens/:prenomM', function(req, res){
	res.setHeader('Content-type', 'text/html');
	//affiche tous les prenoms
	//console.log(req.params.prenomM);
	showProprio(db, req.params.prenomM, researchBiensMembre(db, emailM, function(html){
	     res.end(html);
	}));
 	
    });
});

app.listen(8888);
