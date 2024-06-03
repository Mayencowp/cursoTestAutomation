describe('Use GET method on typicode', () =>{

    it('First visit and request', () =>{
        cy.visit('https://jsonplaceholder.typicode.com');
        cy.request('GET', '/posts');
    })

    it('First only request', () =>{
        //una request sin método indicado siempre hace un GET
        cy.request('https://jsonplaceholder.typicode.co');
    });

    it('endpoint "post" respond with status 200', () => {
        cy.request({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/posts'
        }).then((response) => {
          expect(response.status).to.eq(200)
     })
    });

    it('Check the lenght for the endpoint "/posts"', () => {
        cy.request ('GET', 'https://jsonplaceholder.typicode.com/posts').its('body').should('have.length', 100);
    });

    it('Check both status and lenght for the endpoint "/posts"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) =>{
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(100);
     })
    });

    it('Check that the response for the endpoint "/posts" should be an array, and have length 100, and include the jey user', () =>{
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
            expect(response.body).to.be.an('array');
     })
    });

    it('check that the response fot the endpoint "/posts" should be an array, and have lenght 100, and include the key user', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
          response.body.forEach((array) => {
            expect(array).to.include.all.keys(['userId', 'id', 'title', 'body']);
          })
        })
      });

    it('find the value for userID on an element from the array on the endpoint "/posts"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').should((response) => {
          expect(response.status).to.eq(200)
          const userIDValue = response.body.find(userIDValue => userIDValue.id === 43)
          expect(userIDValue).to.have.property('body', 'similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis');
        })
      });

    it('Validate the title of the endpoint "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body')
        .should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
      });
    
    it('Validate keys and values on the "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body').should((body) => {
          expect(body).to.include.all.keys(['userId', 'id', 'title', 'body']);
          expect(body).to.contain.keys('userId');
          expect(body).to.include.keys('userId');
          expect(body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(body.title).to.include('sunt aut facere repellat');
          expect(body.title).to.contain('excepturi optio reprehenderit');
          expect(body.userId).to.be.a('number' || 'string')
          expect(body.userId).to.not.be.a("string")
          expect(body.title).to.be.a("string")
          expect(body.title).to.not.be.a('number')
        })
      });

    it('Validate key properties for the "/posts/1"', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').its('body').should((body) => {
          expect(body).to.have.property('userId', 1);
          expect(body).to.have.property('id', 1);
          expect(body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          expect(body).to.have.property('body', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');
        })
      });
      it.only('validate number of array for the endpoint ', () => {
        cy.request("https://jsonplaceholder.typicode.com/posts/1/comments").should((response) =>{
            expect(response.body).to.have.length(5);
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("Array");
            expect(response.body).to.not.be.a('string');
            const userIDValue = response.body.find(userIDValue => userIDValue.id === 4)
            expect(userIDValue).to.have.property('email', "Lew@alysha.tv");
        })    
        });
      


})