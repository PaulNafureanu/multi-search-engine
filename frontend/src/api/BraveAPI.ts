import { useEffect } from "react";
import { useSearchTerm } from "../contexts/SearchTermProvider";
// import HTTPService from "../http/HTTPService";
import axios from "axios";

type BraveEndpointType = "web" | "images" | "videos" | "news";
const getEndpoint = (type: BraveEndpointType) =>
  `https://api.search.brave.com/res/v1/${type}/search`;

const BraveAPI = {
  useWebSearchResults: () => {
    const endpoint = getEndpoint("web");
    const [searchTerm] = useSearchTerm();
    const queryParams = { q: "home" };

    useEffect(() => {
      const callEndpoint = async () => {
        const result = await axios.get(endpoint, { params: queryParams });
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
