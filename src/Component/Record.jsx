import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Record = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className="bg-[#4542E9] flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-around">

      {/* Project Delivered */}
      <div className='flex gap-4 items-center text-white' ref={ref1}>
        <h1 className='text-3xl font-bold'>
          {inView1 && <CountUp start={0} end={10} duration={1.5} />}+
        </h1>
        <p>Project <br /> Delivered</p>
      </div>

      {/* Client Worldwide */}
      <div className='flex gap-4 items-center text-white' ref={ref2}>
        <h1 className='text-3xl font-bold'>
          {inView2 && <CountUp start={0} end={10} duration={1.5} />}+
        </h1>
        <p>Client <br /> Worldwide</p>
      </div>

      {/* Client Satisfaction */}
      <div className='flex gap-4 items-center text-white' ref={ref3}>
        <h1 className='text-3xl font-bold'>
          {inView3 && <CountUp start={0} end={100} duration={2} />}%
        </h1>
        <p>Client <br /> Satisfaction</p>
      </div>

    </div>
  );
};

export default Record;