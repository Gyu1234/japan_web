const express = require('express');
const cors = require('cors');
const db = require('./db'); // 같은 폴더의 db.js 불러오기
const app = express();

app.use(cors());
app.use(express.json());

// 1. 지역 정보 API
app.get('/api/regions', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM regions');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. 문화/역사/음식 테마 API (좋아요 순 정렬)
app.get('/api/contents/:theme', async (req, res) => {
    const { theme } = req.params; // URL에서 테마 이름을 받아옴
    try {
        const [rows] = await db.query(
            'SELECT * FROM travel_contents WHERE theme_type = ? ORDER BY like_count DESC',
            [theme]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});