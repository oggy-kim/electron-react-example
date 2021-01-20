import { RestoreRounded } from '@material-ui/icons';
import { ReactWrapper } from 'enzyme';
import React, { useEffect, useState } from 'react';
import getLottoResult from '../api/lottoAPI';

function Lotto() {
  const [res, setRes] = useState({});
  const getLotto = async () => {
    const result = await getLottoResult();
    setRes(result);
  };

  useEffect(() => {
    getLotto();
  }, []);

  const defineBallColor = (num) => {
    if (num > 40) return 5;
    else if (num > 30) return 4;
    else if (num > 20) return 3;
    else if (num > 10) return 2;
    return 1;
  };

  return (
    <div className="lotto">
      <h1>{res.drwNo}회 당첨결과</h1>
      <p>{res.drwNoDate}</p>
      <p>
        {[
          res.drwtNo1,
          res.drwtNo2,
          res.drwtNo3,
          res.drwtNo4,
          res.drwtNo5,
          res.drwtNo6,
        ].map((num) => (
          <span id={num} className={`ball_645 ball${defineBallColor(num)}`}>
            {num}
          </span>
        ))}
        +
        <span
          id={res.bnusNo}
          className={`ball_645 ball${defineBallColor(res.bnusNo)}`}
        >
          {res.bnusNo}
        </span>
      </p>
      <p>
        1인당 당첨금액 :{' '}
        {Intl.NumberFormat('ko-KR', {
          style: 'currency',
          currency: 'KRW',
        }).format(res.firstWinamnt)}
      </p>
    </div>
  );
}

export default Lotto;
