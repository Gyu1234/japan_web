
import axios from 'axios';

const API_URL = 'http://localhost:8081/api/spots';

export const getSpots = async (region) => {
    try {
        // region이 있으면 ?region=간사이, 없으면 전체 호출
        const response = await axios.get(`${API_URL}/destination`, {
            params: { region: region === 'all' ? null : region }
        });
        return response.data;
    } catch (error) {
        console.error("데이터를 가져오는데 실패했습니다.", error);
        return [];
    }
};