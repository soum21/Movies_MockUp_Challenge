import ApiService from './apiService';

export const API_KEY = process.env.REACT_APP_API_KEY || "";
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";  
export const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL || "";


export const getBaseUrl = (relativePath) =>{
        var baseUrl = `${API_BASE_URL}${relativePath}?api_key=${API_KEY}`;
        return baseUrl;
}

export const getListingUrl = (query,page) =>{
    var relativePath= "discover/movie";
    var queryParams = `&primary_release_date.gte=1971-12-31&sort_by=${query}&page=${page}`
    var listingUrl = getBaseUrl(relativePath) + queryParams;
    return listingUrl;

}

export const getImagePath = (size, imagePath) =>{
    var imagePath = `${API_IMAGE_URL}${size}${imagePath}`;
    return imagePath;
}

export const getDetailUrl = (query) =>{
    var relativePath = `movie/${query}`
    var requestUrl = getBaseUrl(relativePath)
    return requestUrl;
}



const viewApiLog = false; 
export const HttpService = new ApiService(viewApiLog);