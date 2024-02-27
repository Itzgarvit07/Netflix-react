import React from "react";
import Header from "./Header";
import Row from "./Row";
import endpoints from "./endpoints";


function Main() {
  return (
    <>
      <section id="originals">
        <Header/>
          <Row endpoint = {endpoints.fetchNetflixOriginals} heading = "Netflix Originals"/>
          <Row endpoint = {endpoints.fetchTrending} heading= "Trending Now"/>
          <Row endpoint = {endpoints.fetchTopRated} heading= "Top Rated"/>
          <Row endpoint = {endpoints.fetchActionMovies} heading= "Action Movies"/>
          <Row endpoint = {endpoints.fetchComedyMovies} heading= "Comedy Movies"/>
          <Row endpoint = {endpoints.fetchHorrorMovies} heading= "Horror Movies"/>
          <Row endpoint = {endpoints.fetchRomanceMovies} heading= "Romantic Movies"/>
          <Row endpoint = {endpoints.fetchDocumentaries} heading= "Documentaries"/>


        
      </section>
    </>
  );
}

export default Main;
