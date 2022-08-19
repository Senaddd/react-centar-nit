import React, { useState } from "react";
import "./App.css";
import TeamCard from "./TeamCard/TeamCard";

const favoriteTeams = [
  { id: 0, name: "Arsenal", points: 6 },
  { id: 1, name: "Man. City", points: 6 },
  { id: 2, name: "Man. United", points: 2 },
  { id: 3, name: "Liverpool", points: 2 },
  { id: 4, name: "Pazar", points: 9 },
  { id: 5, name: "Partizan", points: 5 },
];

export default function DrugaKomp() {
  const [teams, setTeams] = useState(favoriteTeams);

  const deleteTeam = (id) => {
    const newTeams = teams.filter((team) => team.id != id);
    setTeams(newTeams);
  };

  return (
    <div className="card-container">
      <button
        onClick={() =>
          setTeams((prev) => [
            ...prev,
            {
              id: Math.random(),
              name: "Novi Tim",
              points: 4,
            },
          ])
        }
      >
        Dodaj novi team
      </button>
      {teams.map((team) => (
        <div key={team.id}>
          <TeamCard
            name={team.name}
            points={team.points}
            onDeleteTeam={() => deleteTeam(team.id)}
          />
        </div>
      ))}
    </div>
  );
}

//pravimo komponentu koja se zove cryptoForm treba da sadrzi ime valute i cenu,i dugme pored koje dodaje unutar komponente crypto form pravi se nova komponenta koja se naziva crypro list,koja treba da ima unutar nje komponentu,
//crypro forma treba da ima ime valute, cenu u dolare,i treba da ima x dugme ukoliko zelimo da izbrisemo
