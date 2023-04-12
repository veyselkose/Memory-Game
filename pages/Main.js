import Card from '@/components/Card';
import React from 'react'
import { useSelector } from 'react-redux';

function Main() {
  const { cards, point, mode } = useSelector((state) => state.game);

  return (
    <div className={`main ${mode}`}>
    {cards.map((flag) => {
      return <Card flag={flag} key={flag.id} />;
    })}
  </div>
  )
}

export default Main