///<reference types = "Cypress" />

describe.skip('POST request', ()=>{
    it('test01: Create alien', ()=>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/aliens',
        body: {
            "name": "Robin Hood",
            "tech": "MongoDB Atlas"
        }

    }).then((response)=>{
        expect(response.status).to.eq(200)
        // expect(response.body).to.be.a('array')
        expect(response.body).to.not.be.null
        expect(response.body).has.property('name','Robin Hood')
        expect(response.body).has.property('tech','MongoDB Atlas')
        // expect(response.body).to.be.null         //intenstionally to fail the assertion
        console.log(response)
        cy.log(JSON.stringify(response))   //get details from API call response 
        })
    })
})


//passing test data from fixture file
const testData = require('../fixtures/createAlien.json')

describe('POST request- testData from fixture file', ()=>{
    it('test03: Create alien', ()=>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/aliens',
        body: {
            "name": testData.name,
            "tech": testData.tech
        }

    }).then((response)=>{
        expect(response.status).to.eq(200)
        // assert.equal(response.status, 200)       //we can use this also for assertion step
        expect(response.body).to.not.be.null
        expect(response.body).has.property('tech',testData.tech)
        expect(response.body).has.property('name',testData.name)
        // expect(response.body).to.be.null         //intenstionally to fail the assertion
        console.log(response)
        cy.log(JSON.stringify(response))
        })
    })

})

// Randomizing User Name and User Email ID
describe.skip('POST request - Random Alien Name & Tech', ()=>{
    //to genearte random mail id
    let randomText = ""
    let testName = ""
    let testTech = ""

    it('test02: Create alien', ()=>{
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testName = randomText
        testTech = randomText + ' Cypress'
        
        cy.request({
        method: 'POST',
        url: 'http://localhost:8000/aliens',
        body: {
            "name": testName,
            "tech": testTech
        }

    }).then((response)=>{
        expect(response.status).to.eq(200)
        // assert.equal(response.status, 200)       //we can use this also for assertion step
        expect(response.body).to.not.be.null
        expect(response.body).has.property('tech',testTech)
        expect(response.body).has.property('name',testName)
        // expect(response.body).to.be.null         //intenstionally to fail the assertion
        console.log(response)
        cy.log(JSON.stringify(response))   //get details from API call response 
        })
    })

})