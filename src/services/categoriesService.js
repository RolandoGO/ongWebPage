import axiosInstance from ".apiService";

export const listCategories = async () => {
	const categories = await axiosInstance.get("/categories");
	return categories;
};

export const createCategory = async (category) => {
	await axiosInstance.post("/categories", {
		name: category._name,
		description: category.description,
	});
};

export const editCategories = async (id, category) => {
	await axiosInstance.put(`/categories/${id}`, {
		name: `${category.name}`,
		description: `${category.description}`,
	});
};

export const deleteCategories = async (id) => {
	await axiosInstance.delete(`/categories/${id}`);
};
