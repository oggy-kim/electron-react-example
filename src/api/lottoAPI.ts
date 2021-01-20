import axios from 'axios';
import moment from 'moment';

const getLottoResult = async () => {
    const getWeek = () => {
        const t1 = moment('20021207');
        const t2 = moment();
        const dff = moment.duration(t2.diff(t1)).asDays();
        return Math.floor(dff/7)+1;
    }

    const val = getWeek();
    const url = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${val}`;
    
    const res = await axios.get(url);
    if(res) {
        console.log(res.data);
        return res.data;
    }
}

export default getLottoResult;