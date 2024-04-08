'use client'
import React, { useState } from 'react';
import { Statistic, Typography, Select, Card, Row, Col, Button } from 'antd';
import Footer from '@/components/nonauthenticated/Footer';
import { CodeOutlined, HeartFilled } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;
const { Option } = Select;

const staticChallenges = [
  {
    id: 1,
    name: 'Challenge 1',
    description: 'Description of Challenge 1',
    difficultyLevel: 'Easy',
    programmingLanguage: 'Python'
  },
  {
    id: 2,
    name: 'Challenge 2',
    description: 'Description of Challenge 2',
    difficultyLevel: 'Medium',
    programmingLanguage: 'JavaScript'
  },
  {
    id: 3,
    name: 'Challenge 3',
    description: 'Description of Challenge 3',
    difficultyLevel: 'Hard',
    programmingLanguage: 'Java'
  },
  {
    id: 4,
    name: 'Challenge 3',
    description: 'Description of Challenge 3',
    difficultyLevel: 'Hard',
    programmingLanguage: 'Java'
  },
  {
    id: 5,
    name: 'Challenge 3',
    description: 'Description of Challenge 3',
    difficultyLevel: 'Hard',
    programmingLanguage: 'Java'
  },
  {
    id: 6,
    name: 'Challenge 3',
    description: 'Description of Challenge 3',
    difficultyLevel: 'Hard',
    programmingLanguage: 'Java'
  }
];

export default function ExploreChallengesPage() {
  const router = useRouter()
  const [challenges, setChallenges] = useState(staticChallenges);
  const [difficulty, setDifficulty] = useState('');
  const [language, setLanguage] = useState('');

  const handleLike = () => {
    // Handle like action
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* <h1 className='text-zinc-200 mt-10'>Explore Coding Challenges</h1>
        <p className='text-zinc-300'>
          Discover challenges posted by the community, filter by difficulty or
          programming language.
        </p> */}
<div className="mt-14 flex w-96 gap-2">
<select
      className="w-48 py-2 pl-3 pr-2 mt-1 block bg-black border border-zinc-700 text-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
    >
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
    <select
      className="w-48 py-2 pl-3 pr-8 mt-1 block bg-black border border-zinc-700 text-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
    >
      <option value="Easy">Javascript</option>
      <option value="Medium">Python</option>
      <option value="Hard">Typescript</option>
    </select>
</div>

      </div>
      <div className="max-w-screen-xl  mx-auto px-4 mt-4">
        <Row gutter={[16, 16]}>
          {challenges?.map(challenge => (
            <Col key={challenge.id} xs={24} sm={24} md={24} lg={24}>
              <Card className='bg-zinc-900 border-zinc-700 hover:border-zinc-600'>
      <div>
        <h1 className="text-3xl text-zinc-100">{challenge.name}</h1>
        <Text className="text- text-zinc-200">
          Description: {challenge.description}
        </Text>
        <div className="mt-2">
        <p className="text-lg text-zinc-200">
          <strong className="text-zinc-500">Difficulty:</strong> {challenge.difficultyLevel}
          <br />
          <strong className="text-zinc-500">Language:</strong> {challenge.programmingLanguage}
        </p>
        </div>
        <div className="mt-4 flex float-end justify-between">
          <Button href='/solve' className='bg-yellow-400 hover:bg-yellow-600 border-transparent text-black'>
            Solve Question
          </Button>
        </div>
      </div>
    </Card>

            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}