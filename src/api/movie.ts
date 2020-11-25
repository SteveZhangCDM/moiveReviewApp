import request from "@/utils/request";

//Get current movie
export const getInTheaters = ({ start = 0, count = 5 }) => {
  return request({
    url: `in_theaters?start=${start}&count=${count}`,
  });
};

//get  coming soon movie
export const getComingSoon = ({ start = 0, count = 5 }) => {
  return request({
    url: `coming_soon?start=${start}&count=${count}`,
  });
};

//get top 250 movie data
export const getTop250 = ({ start = 0, count = 5 }) => {
  return request({
    url: `top250?start=${start}&count=${count}`,
  });
};

//Get movie list
export const getMovieList = ({ type = "", start = 0, count = 5 }) => {
  return request({
    url: `${type}?start=${start}&count=${count}`,
  });
};

//get movie's info
export const getMovieInfo = (id: string) => {
  return request({
    url: `/subject/${id}`,
  });
};
