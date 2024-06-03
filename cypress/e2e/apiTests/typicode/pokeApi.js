describe('Exploring pokeApi', () =>{

  it('check for pikachu values', () => {
    cy.request("https://pokeapi.co/api/v2/pokemon/pikachu/").should((response) =>{
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.a('number');
        //expect(response.body).to.be.a('number'); si lo ejecuto me da error...., el de abajo igual
        //expect(response.body).to.be.a('string');
        expect(response.body).to.not.be.a('string');
        expect(response.body).to.include.all.keys(['id','base_experience','height'])
        
    });
  });

  it('checks for pikachu vlues with body', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu/').its('body').should((body) => {
    expect(body.status).to.eq(200);
    expect(body).not.to.be.a('string');
    expect(body).to.include.all.keys(['id','base_experience','height']);
    expect(body).to.have.property('id',25);
    expect(body).to.have.property('base_experience', 112); // numero aleatorio primero
    expect(body).to.have.property('height', 4); // primero probe con un numero aletorio y me devolvio, 4
  })
});
it('check for pikachu values', () => {
  cy.request("https://pokeapi.co/api/v2/pokemon/5").should((response) =>{
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.a('number');
      //expect(response.body).to.be.a('number'); si lo ejecuto me da error...., el de abajo igual
      //expect(response.body).to.be.a('string');
      expect(response.body).to.not.be.a('string');
      expect(response.body).to.include.all.keys(['id','base_experience','height','name']);
      expect(response.body).to.have.property('id', 5);
      expect(response.body).to.have.property('base_experience',142);
      expect(response.body).to.have.property('height',11);
      expect(response.body).to.have.property('name',"charmeleon");
})
});

it('extract all information from the endpoint "/pokemon/{id or name}"', () => {
  const pokemonNameOrId = "pikachu"
  cy.request("https://pokeapi.co/api/v2/pokemon/5").should((response) =>{
    expect(response.status).to.eq(200);
    const pokemonInfo = response.body;
    expect(pokemonInfo).to.eq(25);
    expect(pokemonInfo).to.have.property('name', pokemonNameOrId);
    
})
})
})