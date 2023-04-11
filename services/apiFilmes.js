import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTZmNjNlZjZlZGQ5N2E4ODgyZDlkNmM4MWZiMGI5MyIsInN1YiI6IjY0MzVlMDM4YWVkZTU5MDBmNDA4NzE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkgWWXNBHCTHykw7GG2XiVFiRIFoN6jbxpW6aMt6xMs",
  },
});

export default apiFilmes;
