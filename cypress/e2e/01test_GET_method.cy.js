///<reference types = "Cypress" />

describe('GET request', ()=>{
    
    // let accessToken = 'c7f0aaeacaf27a1e9d7bf666d905e49e170c53f19735ded8b0d8e2cbfa5d85fc' //we can call this in tests
    it('test01: GET all aliens', ()=>{
    cy.request({
        method: 'GET',
        url: 'http://localhost:8000/aliens',
        // headers: {
        //     'authorization': "Bearer " + accessToken
        // }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        // assert.equal(response.status, 200)       //we can use this also for assertion step
        // expect(response.body).to.be.a('array')
        expect(response.body).to.not.be.null
        // expect(response.body).to.have.lengthOf(63)
        // expect(response.body).to.be.null         //intenstionally to fail the assertion
        // console.log(response)
        })
    })

    it('test02: GET alien by ID', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://localhost:8000/aliens/63374c8bac8ad45f0203beb8',

        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            // expect(response.body).to.be.a('array')
            // expect(response.body).to.have.lengthOf(1)
            // expect(response.body.data.id).contains('63374c8bac8ad45f0203beb8')
            // expect(response.body.data.name).to.eq('Leo Pedro')
            })
        })

})