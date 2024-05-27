import { useEffect } from "react";
import { useSearchTerm } from "../contexts/SearchTermProvider";
import HTTPService from "../http/HTTPService";

type BraveEndpointType = "web" | "images" | "videos" | "news";
const getBraveEndpointFor = (type: BraveEndpointType) =>
  `https://api.search.brave.com/res/v1/${type}/search`;

const BraveAPI = {
  useWebSearchResults: () => {
    const endpoint = getBraveEndpointFor("web");
    const [searchTerm] = useSearchTerm();
    const queryParams = { q: searchTerm };

    useEffect(() => {
      const callEndpoint = async () => {
        const result = await HTTPService.get(endpoint, { params: queryParams });
        return result.data;
      };

      callEndpoint();
    }, []);
  },
  useImageSearchResults: () => {},
  useVideoSearchResults: () => {},
  useNewsSearchResults: () => {},
};

export default BraveAPI;

BraveAPI.useWebSearchResults();
