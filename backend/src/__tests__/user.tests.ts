import app from "../app";
import request from "supertest";

jest.useFakeTimers()

describe("Usuario", () => {
    test("Create - Caso o Nome estiver vazio retorna um erro", async ()=> {
        const result = await request(app)
        .post("/users")
        .send({name: ''})
        .set('Accept', 'application/json');
        console.log(result)
        expect(result.status).toEqual(400);
    })
    test("Create - Caso o Email estiver vazio retorna um erro", async ()=> {
        const result = await request(app)
        .post("/users")
        .send({email: ''})
        .set('Accept', 'application/json');
        console.log(result)
        expect(result.status).toEqual(400);
    })
    test("Create - Caso o Password estiver vazio retorna um erro", async ()=> {
        const result = await request(app)
        .post("/users")
        .send({password: ''})
        .set('Accept', 'application/json');
        console.log(result)
        expect(result.status).toEqual(400);
    })
    test("Put - Caso o Email estiver vazio retorna um erro", async ()=> {
        const result = await request(app)
        .put("/users/1")
        .send({email: ''})
        .set('Accept', 'application/json');
        console.log(result)
        expect(result.status).toEqual(400);
    })
    test("Put - Caso o Usuario não existir retorna um erro", async ()=> {
        const result = await request(app)
        .put("/users/0")
        .send({email: 'teste@teste.com'})
        .set('Accept', 'application/json');
        console.log(result)
        expect(result.status).toEqual(400);
    })
})