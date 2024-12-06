import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "55dfbda229955ae4c4efd2d50dedd1ab",
        language: "ko-KR",
    },
});

export default instance;