import server from "@/api";
export const homeApi = {
  getThemes: async () => {
    const data = await server.get("/themes");
    console.log(data);
    return data;
  },
};
