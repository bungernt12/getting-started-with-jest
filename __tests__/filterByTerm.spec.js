function filterByTerm(inputArr, searchTerm) {
    if (searchTerm === "") {
        return "Error: Search term is empty."
    }
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayelement) {
        return arrayelement.url.match(regex);
    });
}

describe("Filter function", () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];

    test("it should filter by a search term (link)", () => {
        const output = [{id:3, url: "https://www.link3.dev"}];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "Link")).toEqual(output);
    })
    test("it should filter by a search term (url)", () => {        
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
          ];

        expect(filterByTerm(input, "url")).toEqual(output);

        expect(filterByTerm(input, "uRl")).toEqual(output);
    })
    test("it should return empty search term error", () => {        
        const output = "Error: Search term is empty.";

        expect(filterByTerm(input, "")).toEqual(output);
    })
    
})