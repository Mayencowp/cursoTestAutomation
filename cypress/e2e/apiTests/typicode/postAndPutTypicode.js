describe('Testing POST and PUT on Typicode', () => {

  it('Send first POST', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
        {
          userID: 1,
          title: 'API testing with cypress',
          body: 'Frist POST'
        }
      )
    });

 it('Send first POST', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/',
        {
          userID: 1,
          title: 'API testing with cypress',
          body: 'First POST'
        }
      ).then((response) => {
        cy.log(JSON.stringify(response.body));
      })
      
    });

  it('check deep.include on POST', () => {
        const postData = {
          userID: 1,
          body: 'Send body in a constant',
          title: 'API testing with cypress',
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', postData,
          ).then((response) => {
          const postBody = response.body
          expect(response.status).to.eq(201);
          expect(response.body).to.deep.include(postData);
        })
      });

  it('check deep.eq on POST', () => {
        const postData = {
          userID: 101,
          body: 'Send body in a constant',
          title: 'API testing with cypress',
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/', postData,
          ).then((response) => {
          const postBody = response.body
          expect(response.status).to.eq(201);
          expect(response.body).to.deep.eq(postData);
        })
      });

  it('Send first PUT', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/10',
        {
          "userId": 1,
          "id": 10,
          "title": "Update by PUT method",
          "body": "Changes for my body"
        }
        )
      })
  it('check deep contain on Put', () => {
        const putData = {
          userID: 1,
          body: 'Update body',
          title: 'change my body',
          id: 2
        }
        const putDataInclude = {
          userID: 1,
          body: 'Update body',
          title: 'change my body'
        }
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', putData,)
        .then((response) => {
            const res =  response.body
            expect(response.status).to.eq(200);
            expect(res).to.deep.eq(putData);
            expect(res).to.deep.include(putDataInclude);
        })
      });
  it('Send first PATCH and check the response', () => {
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',
          {
           userId:1 ,
           id: 5,
           title: 'news',
           body: 'first post',
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'news');
            expect(response.body.body).to.eq('first post');
            expect(response.body.userId).to.eq(1);
            expect(response.body.id).to.eq(5);
          });
       });
       //it('Send first DELETE method', () => {
       // cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
       //}); BORRA TODO SIN PREGUNTAR

       it('Add the body in a const and check all the response body with to.deep.include', () => {
        //Declaramos las variables a usar en los metodos POST, PUT y PATCH
        const postData = {
          "name": "Objeto creado por Javier Flores",
          "data": {
            "year": 2024,
            "price": 10,
            "CPU model": "Api testing with Cypress",
            "Hard disk size": "1 TB"
          }
        }
        const putData = {
          "name": "PUT update",
          "data": {
            "year": 2024,
            "price": 10,
            "CPU model": "PUT with Cypress",
            "Hard disk size": "1 TB"
          }
        }
        const patchData = {
          "name": "PATCH change",
          "data": {
            "CPU model": "Happy API testing with Cypress",
          }
        }
        cy.request('POST', 'https://api.restful-api.dev/objects', postData)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.include(postData);
            cy.wrap(response.body.id).as('objectID');
          });
        cy.get('@objectID').then((objectID) => {
          cy.log(objectID);
          cy.request('GET', `https://api.restful-api.dev/objects/${objectID}`)
            .then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.deep.include(postData);
          });
        cy.request('PUT', `https://api.restful-api.dev/objects/${objectID}`, putData)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(putData);
        });
        cy.wait(1000);
        cy.request('PATCH', `https://api.restful-api.dev/objects/${objectID}`, patchData)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.include(patchData);
        cy.request(`https://api.restful-api.dev/objects/${objectID}`)
        });
       });
      });

  it('check response for GET /objects/1', () => {
    cy.request('https://api.restful-api.dev/objects/1').then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response);         
          });  
  })

  it('check response after POST for /objects/2', () => {
    const newData = 
      {
        "name": "Mayenco",
        "data": {
          color: 'Cloudy White',
          capacity: '128 GB',
        }
      }
      const putNewData = 
      {
        "name": "Mayen",
        "data": {
          color: 'Cloudy heavy',
          capacity: '256 GB',
        }
      }
    cy.request('POST', 'https://api.restful-api.dev/objects', newData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(newData);
      const newId = response.body.id;
      cy.log(newId);
    
    cy.request('PUT', 'https://api.restful-api.dev/objects/' + newId, putNewData).then((response) =>{
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.include(putNewData)
    })
    })
    });

    let id

    it.only('POST', () => {
        const bodyCreate = {
            name: "Prueba",
            data: null
        };
        cy.request('POST', 'https://api.restful-api.dev/objects', bodyCreate)
        .then((response) => {
            const res = response.body
            id = res.id
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyCreate);
            cy.log(res.createdAt);
            cy.log(res.id);
        })
    });
    it('PATCH', () => {
        const bodyUpdate = {
            data: {
                year: 2019,
            }
        }
        cy.request('PATCH',  `https://api.restful-api.dev/objects/${id}`, bodyUpdate)
        .then((response) => {
            const res = response.body
            expect(response.status).to.eq(200);
            expect(res).to.deep.include(bodyUpdate);
            expect(res.id).to.deep.eq(id);
            expect(res.updatedAt).to.be.a('string');
        })
    })
    it('GET new product created', () => {
        const expectedBody = {
            id: id,
            name: "Prueba",
            data: {
                year: 2019,
            }
        }
        cy.request('GET', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });
    it('DELETE new product created', () => {
        const expectedBody = {
            message: `Object with id = ${id} has been deleted.`
        }
        cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(expectedBody);
        })
    });
  
  });









