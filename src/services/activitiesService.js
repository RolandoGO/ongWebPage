import axiosInstance from "./apiService";

const ACTIVITIES_PATH = "/activities";

export async function listActivities() {
  const { success, data, message } = await axiosInstance.get(ACTIVITIES_PATH);
  return { success, data, message };
}

export async function createActivity({ name, description, image }) {
  const { success, data, message } = await axiosInstance.post(ACTIVITIES_PATH, {
    name,
    description,
    image,
  });
  return { success, data, message };
}

export async function editActivity({ id, name, description, image }) {
  const { success, data, message } = await axiosInstance.put(
    `${ACTIVITIES_PATH}/${id}`,
    { name, description, image }
  );
  return { success, data, message };
}

export async function deleteActivity(id) {
  const { success, data, message } = await axiosInstance.delete(
    `${ACTIVITIES_PATH}/${id}`
  );
  return { success, data, message };
}
