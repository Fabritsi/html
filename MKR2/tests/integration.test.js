const supertest = require("supertest");
const app = require("../src");

const wordInTitlePhoto = {
    id: 1,
    author: "Yana",
    title: "My Dinner",
    description: "Food",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/1a/f4/e2/my-dinner.jpg",
    hashtags: "#food, #dinner",
    published: new Date(2021, 5, 10),
    likes: 5003
};

describe("Integration test Photo API", () => {

    it("should get photo with my word in title", async() => {
        const response = await supertest(app).get("/photo/title");
        const data = JSON.parse(response.text);
        data.published = new Date(data.published);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(wordInTitlePhoto);
    });

});