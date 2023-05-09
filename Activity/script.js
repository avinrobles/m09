let trainer = {
    name: 'Avin Robles',
    age: 20,
    pokemon: ["Pikachu", "Snorlax", "Bulbasaur", "Arceus"],
    friends: {
        allies:['Ash Ketchup', 'May July'],
        rivals: ['Gary Newman', 'Morgan Freeman']
    },

    dot: function (){
        console.log(`Result of dot notation: `)
        console.log(trainer.name)
    },

    squareBracket: function (){
        console.log(`Result of square bracket notation: `)
        console.log(trainer.pokemon)
    },

    talk: function (){
        console.log('Result of talk method: ')
        console.log('Pikachu! I choose you!')
    },
  }

  trainer.dot();
  trainer.squareBracket();
  trainer.talk();
  
  function Pokemon(name, level) {
        this.name = name;
        this.level = level;
        this.health = level * 3;
        this.attack = level;
  
        this.tackle = function (pokemon) {
            if (pokemon.health > 0 && this.health > 0) {
                console.log(`${this.name} tackled ${pokemon.name}`);
                console.log(`${pokemon.name}'s health is now reduced to ${pokemon.health}`);
                pokemon.health -= this.attack;
  
            } else if (pokemon.health <= 0) {
                pokemon.faint();
            }
        };

        this.faint = function () {
            console.log(`${this.name} fainted.`);
        };
    }
  
  
  const pikachu = new Pokemon('Pikachu', 25);
  const bulbasaur = new Pokemon('Bulbasaur', 5);
  
  pikachu.tackle(bulbasaur);
  pikachu.tackle(bulbasaur);
