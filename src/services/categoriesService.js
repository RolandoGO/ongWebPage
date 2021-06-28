import axiosInstance from ".apiService";

export const listCategories = async () => {
	try {
		const categories = await axiosInstance.get("/categories");
		return categories;
	} catch (error) {
		console.log(error);
	}
};

export const createCategory = async (category) => {
	try {
		await axiosInstance.post("/categories", {
			name: category._name,
			description: category.description,
		});
	} catch (error) {
		console.log(error);
	}
};

export const editCategories = async (id) => {
	try {
		await axiosInstance.put(`/categories/${id}`);
	} catch (error) {
		console.log(error);
	}
};

export const deleteCategories = async (id) => {
	try {
		await axiosInstance.delete(`/categories/${id}`);
	} catch (error) {
		console.log(error);
	}
};
