"use strict";
var assert = require('assert');
var express = require('express');
var app = express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017"



// Fonction de recherche dans Biens d'un bien avec son un id

function rechercheBienParId(db, id, callback) {
	let resBien = [] ;
	db.collection("Biens").find({"id":id}).toArray((err, documents)=> {
		resBien.push(documents[0]);
		//console.log("recherche bien fct :" + JSON.stringify(documents[0]) );
		callback(JSON.stringify(resBien));
	});
	
}


// Fonction de recherche dans Competences d'une competence avec son un id

function rechercheCompetenceParId(db, id, callback) {
	let resComp = [] ;
	db.collection("Competences").find({"id":id}).toArray((err, documents)=> {
		resComp.push(documents[0]);
		callback(JSON.stringify(resComp));
	});
	
}

// Fonction de recherche dans Membres d'un membre avec son email

function rechercheMembreParEmail(db, email, callback) {
	let resM = [] ;
	db.collection("Membres").find({"email":email}).toArray((err, documents)=> {
		resM.push(documents[0]);
		callback(JSON.stringify(resM));
	});
	
}

// Fonction de recherche dans Reservations d'une reservation avec email Proprio

function rechercheReservationParId(db, id, callback) {
	let resR = [] ;
	db.collection("Reservations").find({"emailProprio":id}).toArray((err, documents)=> {
		resR.push(documents[0]);
		callback(JSON.stringify(resR));
	});
	
}

function rechercheBienParMotCle(db, motCle, resServices, callback){
    let resB = [] ;
    //Rzchercher les biens par mots clés pb car le champ mot clé du JSON est un tableau
    for( i<4)
    {
	db.collection("Biens").find("motCle":motCle[i]).toArray((err, documents)=> {
		resR.push(documents[0]);
		callback(JSON.stringify(resR));
	});
    }
}


// Recherche d'un service via un mot clé


MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("DB_TROC");
    assert.equal(null, err);
    
	app.get("/biens/:id", (req, res) => {
	    rechercheBienParId(db, req.params.id, (resBien)=> {
	    	res.setHeader("Content-type", "application/json");
	    	//console.log("Deux : " + resBien) ;
	        res.end(resBien) ;
	    });
    });
    
    app.get("/competences/:id", (req, res) => {
	    rechercheCompetenceParId(db, req.params.id, (resComp)=> {
	    	res.setHeader("Content-type", "application/json");
	        res.end(resComp) ;
	    });
    });
    
    app.get("/reservations/:id", (req, res) => {
	    rechercheReservationParId(db, req.params.id, (resR)=> {
	    	res.setHeader("Content-type", "application/json");
	        res.end(resR) ;
	    });
    });
    
    app.get("/membres/:email", (req, res) => {
	    rechercheMembreParEmail(db, req.params.email, (resM)=> {
	    	res.setHeader("Content-type", "application/json");
	        res.end(resM) ;
	    });
    });

    app.get("/rechercheService/:motCle", (req, res) => {
	rechercheServiceParMotCle(db, req.params.motCle, (res)=> {
	    res.setHeader("Content-type", "application/json");
	    let resServices=[];
	    //Recherche dans les biens
	    rechercheBienParMotCle(db, req.params.motCle, resServices, (resBiens)=>{
		resServices.push(resBiens);
	    });
	    //Recherche dans les competences
	    res.end(resMotCle);
	});
    });
    
});

app.listen(8888);
