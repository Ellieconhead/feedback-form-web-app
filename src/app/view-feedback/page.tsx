'use client';
import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BarChart from '../components/organisms/BarChart';
import { TextButton } from '../components/atoms/TextButton';


export const ViewFeedback = () => {
  const searchParams = useSearchParams();
  const rating = (searchParams.get('rating'));

  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <><title>View Feedback</title><><div>
      <BarChart rating={rating}/>
    </div><div>
      <TextButton text={'Return to Feedback Form'} onClick={handleClick} classNames='w-60' />
    </div></></>
  );
};
export default ViewFeedback;


