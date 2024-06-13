import useLyricsFetcher from "@/app/hooks/useLyricsFetcher"
import axios from "axios";

// Here I am mocking the API call
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockImplementation(() =>
    Promise.resolve({ data: { lyrics: "Darling, just dive right in, follow my lead" }, status: 200, }))
// This is the actual test, to see if calling the helper function for the API gives the expected result
describe("useLyricsFetcher hook", () => {
    test("should return the text lyrics for Ed sheeran's Perfect", async () => {
        const { fetchLyrics } = useLyricsFetcher();
        const result = await fetchLyrics("Ed Sheeran", "Perfect");
        console.log(result);
        expect(result).toContain("Darling, just dive right in, follow my lead");
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    })
})