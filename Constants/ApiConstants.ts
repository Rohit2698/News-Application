import { apiKey } from "./ApiKey"

export const allNewsApi = () => {
    return `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
}

export const newsByCategoryApi = (category: string) => {
    return `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
}

export const newsByCategoryAndCountryApi = (country: string, category: string) => {
    return `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
}