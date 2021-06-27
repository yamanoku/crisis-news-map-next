import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';
import tw from 'twin.macro';
import { NewsView } from '~/components/NewsView';
import { INews } from '~/models/News';

export const LocalNewsPage: React.VFC = () => {
  const router = useRouter();
  const { country, pref, city } = router.query;
  const [category, setCategory] = useState('');

  const categories = {
    '': 'すべて',
    crisis: '災害',
    virus: '感染症',
    accident: '事故',
    incident: '事件',
    children: '児童虐待',
    drug: '薬物乱用',
    poverty: '貧困',
    nikkei: '経済',
    politics: '政治',
    sports: 'スポーツ',
  };

  let title = '';
  const param = new URLSearchParams();
  param.append('hasLocation', 'true');
  if (category.length > 0) {
    param.append('category', category);
  }
  if (country) {
    param.append('country', country as string);
    title += country;
  }
  if (pref) {
    param.append('pref', pref as string);
    title += ', ' + pref;
  }
  if (city) {
    param.append('city', city as string);
    title += ', ' + city;
  }

  const url = '/api/news?' + param.toString();
  const { data } = useSWR<INews[]>(url);
  return (
    <div>
      <h1 css={tw`m-5 text-3xl font-bold`}>{title}</h1>
      <div>
        <h2 css={tw`text-xl inline ml-4`}>カテゴリ:</h2>
        {Object.keys(categories).map((cat) => {
          return (
            <div key={cat} css={tw`text-xl inline ml-4`}>
              <input
                type='radio'
                id={cat}
                value={cat}
                name={cat}
                checked={cat === category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <label htmlFor={cat}>{categories[cat]}</label>
            </div>
          );
        })}
      </div>
      {data?.map((news) => {
        return <NewsView key={news.url} news={news} />;
      })}
    </div>
  );
};