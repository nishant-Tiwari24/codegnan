'use client'
import { DeleteFilled } from '@ant-design/icons'
import React from 'react';
import { Button, Card, Flex, Progress, Statistic, Typography } from 'antd';
import { ContributionCalendar } from 'react-contribution-calendar';
import Footer from '@/components/nonauthenticated/Footer';
import Navbar from '@/components/authenticated/Navbar';
import { PageLayout } from '../pageLayout/pageLayout';

const data = [
    { '2020-04-20': { level: 2 } },
    { '2023-07-08': { level: 1 } },
    { '2023-07-09': { level: 4, data: {} } },
    { '2023-03-31': { level: 3, data: { myKey: 'my data' } } },
  ];
  
const Profile = () => {
  return (
    <div className='min-h-screen min-w-screen flex flex-col overflow-x-hidden justify-center w-[100%] z-0' style={{ display: 'flex', alignItems: 'center', width:'100%' }}>
    <Navbar/>
    <div className='min-h-screen min-w-screen flex flex-col justify-center w-[100%] z-0' style={{ display: 'flex', alignItems: 'center', marginTop: '4rem' }}>
    <PageLayout layout="full-width">
      <Card className="bg-zinc-900 mx-8 border-zinc-600">
        <Flex
          className="flex flex-row justify-around align-middle"
          style={{ backgroundColor: '' }}
        >
          <div>
            <p className='text-zinc-200 text-xl font-semibold'>Total Progress</p>
            <Statistic
              value={34}
              valueStyle={{ color: '#fff' }}
              suffix="%"
            />
          </div>
          <div>
          <p className='text-zinc-200 text-xl font-semibold'>Total Progress</p>
            <Statistic
              value={28}
              valueStyle={{ color: '#fff' }}
            />
          </div>
          <div>
          <p className='text-zinc-200 text-xl font-semibold'>Total Progress</p>
            <Statistic
              value={14}
              valueStyle={{ color: '#fff' }}
            />
          </div>
        </Flex>
      </Card>

      <Flex className="flex flex-col md:flex-row justify-around items-center h-96 mt-8 md:mt-0">
        <div className="mb-6 md:mb-0 md:mr-8 text-center">
          <Progress
            percent={70}
            className='text-gray-300'
            type="circle"
            strokeColor="puple"
            width={230}
            trailColor="gray"
            strokeLinecap="butt"
          />
          <Typography.Text style={{ marginTop: '10px', display: 'block' }} className='text-zinc-200'>
            Total Questions Solved
          </Typography.Text>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <Progress
              percent={70}
              strokeColor={'green'}
              style={{ marginRight: '10px' }}
              width={200}
            />
            <Typography.Text className="text-green-400">Easy</Typography.Text>
          </div>
          <div className="mb-4">
            <Progress
              percent={60}
              strokeColor={'yellow'}
              style={{ marginRight: '10px' }}
            />
            <Typography.Text className="text-yellow-400">
              Medium
            </Typography.Text>
          </div>
          <div className="">
            <Progress
              percent={70}
              strokeColor={'red'}
              style={{ marginRight: '10px' }}
              width={200}
            />
            <Typography.Text className="text-red-400">Hard</Typography.Text>
          </div>
        </div>
      </Flex>

      <Card className='bg-black mx-8 border-zinc-600'>
        <ContributionCalendar
          start="2023-04-04"
          end="2024-10-19"
          daysOfTheWeek={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
          textColor="gray"
          startsOnSunday={true}
          includeBoundary={true}
          theme="dark_grass"
          cx={18}
          cy={18}
          cr={4}
          onCellClick={(e, data) => console.log(data)}
          scroll={false}
        />
      </Card>
      <h1 className="text-3xl text-zinc-400 font-semibold font-mono mt-8 mx-8 md:mt-12 px-4">
        Question solved by user
      </h1>

      <div className="mt-4 px-4 md:px-0 flex flex-col gap-4">
          <div
            className="flex justify-between items-center w-full gap-4"
          >
            <div className="w-full">
            <Card className='bg-zinc-900 mx-8 border-zinc-600'>
                <Flex justify="space-between" className="p-2">
                  <h1 className="text-xl md:text-2xl text-yellow-300 inline-block">
                    Question name:
                    <p className="text-xl text-gray-200">description of the question</p>
                  </h1>
                  <div className="flex align-middle justify-around">
                    <Button className="bg-black text-zinc-200">
                      {' '}
                      Delete
                      <DeleteFilled
                        style={{ color: 'red' }}
                      />
                    </Button>
                  </div>
                </Flex>
              </Card>
            </div>
          </div>
          <div
            className="flex justify-between items-center w-full gap-4"
          >
            <div className="w-full">
            <Card className='bg-zinc-900 mx-8 border-zinc-600'>
                <Flex justify="space-between" className="p-2">
                  <h1 className="text-xl md:text-2xl text-yellow-300 inline-block">
                    Question name:
                    <p className="text-xl text-gray-200">description of the question</p>
                  </h1>
                  <div className="flex align-middle justify-around">
                    <Button className="bg-black text-zinc-200">
                      {' '}
                      Delete
                      <DeleteFilled
                        style={{ color: 'red' }}
                      />
                    </Button>
                  </div>
                </Flex>
              </Card>
            </div>
          </div>
          <div
            className="flex justify-between items-center w-full gap-4"
          >
            <div className="w-full">
              <Card className='bg-zinc-900 mx-8 border-zinc-600'>
                <Flex justify="space-between" className="p-2">
                  <h1 className="text-xl md:text-2xl text-yellow-300 inline-block">
                    Question name:
                    <p className="text-xl text-gray-200">description of the question</p>
                  </h1>
                  <div className="flex align-middle justify-around">
                    <Button className="bg-black text-zinc-200">
                      {' '}
                      Delete
                      <DeleteFilled
                        style={{ color: 'red' }}
                      />
                    </Button>
                  </div>
                </Flex>
              </Card>
            </div>
          </div>
      </div>
    </PageLayout>
    <Footer />
  </div>
  </div>
  )
}

export default Profile
