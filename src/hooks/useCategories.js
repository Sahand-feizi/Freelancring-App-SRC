import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/categoriesServices";

export default function useCategories() {
    const { isPending: isLoading, data } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategoriesApi
    })

    const { categories: rowCategories = [] } = data || {}

    const categories = rowCategories.map(item => ({
        title: item.title,
        value: item._id
    }))

    return { categories }
}