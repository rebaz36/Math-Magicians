import React from 'react';
import History from '../../assets/history.jpg';
import Importance from '../../assets/Importance.jpeg';
import './Home.css';

export default function Home() {
  return (
    <div className="Home-Container">
      <h1 className="Home-Title">Welcome to our Page</h1>
      <div className="Section">
        <h2 className="Section-Title"> A breif into Mathematics</h2>
        <div className="Section-sub">
          <p className="Home-Description1">
            Mathematics (from Ancient Greek μάθημα; máthēma: knowledge, study,
            learning) is an area of knowledge that includes such topics as
            numbers (arithmetic and number theory), formulas and related
            structures (algebra), shapes and the spaces in which they are
            contained (geometry), and quantities and their changes (calculus and
            analysis). Most mathematical activity involves the discovery of
            properties of abstract objects and the use of pure reason to prove
            them. These objects consist of either abstractions from nature or—in
            modern mathematics—entities that are stipulated with certain
            properties, called axioms. A proof consists of a succession of
            applications of deductive rules to already established results.
            These results include previously proved theorems, axioms, and—in
            case of abstraction from nature—some basic properties that are
            considered as true starting points of the theory under
            consideration.
          </p>
          <img className="Home-Image1" src={History} alt="History" />
        </div>
      </div>

      <div className="Section">
        <h2 className="Section-Title"> The Importance of Mathematics</h2>
        <div className="Section-sub">
          <p className="Home-Description2">
            Mathematics is used in science for modeling phenomena, which then
            allows predictions to be made from experimental laws. The
            independence of mathematical truth from any experimentation implies
            that the accuracy of such predictions depends only on the adequacy
            of the model. Inaccurate predictions, rather than being caused by
            incorrect mathematics, imply the need to change the mathematical
            model used. For example, the perihelion precession of Mercury could
            only be explained after the emergence of Einstein`s general
            relativity, which replaced Newton`s law of gravitation as a better
            mathematical model. Mathematics is essential in the sciences,
            engineering, medicine, finance, computer science and the social
            sciences. Some areas of mathematics, such as statistics and game
            theory, are developed in close correlation with their applications
            and are often grouped under applied mathematics. Other mathematical
            areas are developed independently from any application (and are
            therefore called pure mathematics), but practical applications are
            often discovered later. A fitting example is the problem of integer
            factorization, which goes back to Euclid, but which had no practical
            application before its use in the RSA cryptosystem (for the security
            of computer networks).
          </p>
          <img className="Home-Image2" src={Importance} alt="Importance" />
        </div>
      </div>
    </div>
  );
}
