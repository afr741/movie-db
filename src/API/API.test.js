import apiSettings from "./API";
import { POPULAR_BASE_URL, API_URL, API_KEY } from "../config/config";

// Mock the global fetch function
global.fetch = jest.fn();

describe("apiSettings", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("fetches movies with searchTerm and page", async () => {
    const mockedData = { results: [{ id: 1, title: "Movie 1" }] };
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockedData),
    });

    const searchTerm = "avengers";
    const page = 1;
    const result = await apiSettings.fetchMovies(searchTerm, page);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
    );
    expect(result).toEqual(mockedData);
  });

  it("fetches movies with no searchTerm and page", async () => {
    const mockedData = { results: [{ id: 2, title: "Movie 2" }] };
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockedData),
    });

    const page = 2;
    const result = await apiSettings.fetchMovies(null, page);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${POPULAR_BASE_URL}&page=${page}`
    );
    expect(result).toEqual(mockedData);
  });

  it("fetches a movie by ID", async () => {
    const mockedData = { id: 123, title: "Test Movie" };
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockedData),
    });

    const movieId = 123;
    const result = await apiSettings.fetchMovie(movieId);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    expect(result).toEqual(mockedData);
  });
});
