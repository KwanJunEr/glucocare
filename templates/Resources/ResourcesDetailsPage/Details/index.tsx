'use client';
import Image from '@/components/Image';
import Icon from '@/components/Icon';

import { useEffect, useState } from 'react';

const details = [
	{
		title: 'Resource Type',
		content: 'Educational Guide',
		icon: 'book',
	},
	{
		title: 'Time to Read',
		content: 'Approx. 2 hours',
		icon: 'clock',
	},
	{
		title: 'Language',
		content: 'Available in English, French, German',
		icon: 'earth',
	},
];

const initialData = {
	title: 'Managing Blood Glucose with Technology',
	description: 'Learn how to monitor and control blood glucose levels using modern technology and devices.',
	users: '50K users',
	detailDescription: 'This resource is designed for individuals who want to learn effective blood glucose management using available health technologies.',
	buttonText: 'Add to Library',
};

interface InitialData {
	title: string;
	description: string;
	users: string;
	detailDescription: string;
	buttonText: string;
}
interface InitialDetails {
	title: string;
	background: string;
	content: {
		about: {
			overview: string;
			responsibilities: string[];
		};
		key_topics_covered: {
			text: string;
			skills: string[];
		};
		find: string[];
		resource_outcomes: {
			description: string;
			outcomes: {
				content: string;
				progressValue: number;
				progressColor?: string;
			}[];
		};
	};
	[key: string]: any;
}

type InitialDetailsProps = {
	initialText: InitialDetails;
	text: InitialDetails;
	setTranslated: (item: InitialDetails) => void;
	setParentLang: (lang: string) => void;
};
const Details = ({ setParentLang, initialText, text, setTranslated }: InitialDetailsProps) => {
	const [buffer, setBuffer] = useState<any>(initialText);
	const [detailData, setDetailData] = useState<{ title: string; content: string; kandungan?: string }[]>(details);
	const [data, setData] = useState<InitialData>(initialData);
	const [language, setLanguage] = useState<string>('en');
	const [loading, setLoading] = useState<boolean>(false);
	const [overview, setOverview] = useState<string>(initialText.content.about.overview);
	const [responsibilites, setResponsibilites] = useState<string[]>(initialText.content.about.responsibilities);
	const [keyTopicsText, setKeyTopicsText] = useState<string>(initialText.content.key_topics_covered.text);
	const [keyTopicsSkills, setKeyTopicsSkills] = useState<string[]>(initialText.content.key_topics_covered.skills);
	const [find, setFind] = useState<string[]>(initialText.content.find);
	const [resourceOutcomeDescription, setResourceOutcomeDescription] = useState<string>(initialText.content.resource_outcomes.description);
	const [resourceOutcome, setResourceOutcome] = useState<{ content: string; progressValue: number; progressColor?: string }[]>(initialText.content.resource_outcomes.outcomes);

	useEffect(() => {
		setTranslated(buffer);
	}, [buffer]);

	const submitData = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (language === 'en') {
			setData(initialData);
			setDetailData(details);
			return;
		}
		const content = text.content;
		setOverview(content.about.overview);
		setResponsibilites(content.about.responsibilities);
		setKeyTopicsText(content.key_topics_covered.text);
		setKeyTopicsSkills(content.key_topics_covered.skills);
		setFind(content.find);
		setResourceOutcomeDescription(content.resource_outcomes.description);
		setResourceOutcome(content.resource_outcomes.outcomes);

		let outcomeArr: string[] = [];
		resourceOutcome.forEach((element) => {
			outcomeArr.push(JSON.stringify(element));
		});

		let detailDataArr: string[] = [];
		resourceOutcome.forEach((element) => {
			detailDataArr.push(JSON.stringify(detailData));
		});

		let dataArr: string[] = [];
		resourceOutcome.forEach((element) => {
			dataArr.push(JSON.stringify(data));
		});

		const textToTranslate = overview + '&' + responsibilites + '&' + keyTopicsText + '&' + keyTopicsSkills + '&' + find + '&' + resourceOutcomeDescription + '&' + outcomeArr.join('$') + '&' + JSON.stringify(detailData) + '&' + JSON.stringify(data);

		const formData = new FormData(e.currentTarget);

		formData.append('text', textToTranslate);
		formData.append('language', language);

		const response: Response = await fetch('http://localhost:3000/api/translate/', {
			method: 'POST',
			body: formData,
			headers: {
				accept: 'application/json',
			},
		});

		if (response) {
			try {
				response.json().then((val) => {
					const translatedText = val.split('&');
					console.log('translated text', translatedText);

					setBuffer((prevState: any) => ({
						title: 'Resource details',
						background: 'back',
						content: {
							about: {
								...content.about,
								overview: translatedText[0],
								responsibilities: translatedText[1].split(','),
							},
							key_topics_covered: {
								...content.key_topics_covered,
								text: translatedText[2],
								skills: translatedText[3].split(','),
							},
							find: translatedText[4].split(','),
							resource_outcomes: {
								...content.resource_outcomes,
								description: translatedText[5],
								outcomes: translatedText[6].split('$').map((item: string) => JSON.parse(item)),
							},
						},
					}));

					setDetailData(JSON.parse(translatedText[7]));
					setData(JSON.parse(translatedText[8]));
				});
			} catch (e) {
				console.log(e);
			}
		}
	};

	return (
		<>
			<div className='flex justify-center items-center w-21 h-21 mb-2.5 p-4 border border-n-1 rounded-full dark:bg-white dark:border-white'>
				<Image className='w-full' src='/images/diabetes-logo.svg' width={48} height={48} alt='Diabetes Resource Logo' />
			</div>
			<div className='mb-1.5 text-h4'>{data.title}</div>
			<div className='mb-6 text-sm'>{data.description}</div>
			<div className='flex items-center text-xs'>
				<div className='shrink-0 w-4 -mt-0.5 mr-1.5'>
					<Image className='w-full' src='/images/star.svg' width={16} height={16} alt='Rating Star' />
				</div>
				<div className='mr-1.5 font-bold'>4.8</div>
				<div className=''>(3,000) {data.users}</div>
			</div>
			<div className='mt-5 pt-5 border-t border-dashed border-n-1 dark:border-white'>
				<div className='mb-1.5 font-bold'>Resource Details</div>
				<div className='mb-4 text-sm'>{data.detailDescription}</div>
				<div className=''>
					{detailData.map((item, index) => (
						<div className='flex items-center mb-4 text-sm last:mb-0' key={index}>
							<div className='flex justify-center items-center w-10 h-10 mr-4 border border-n-1 dark:border-white dark:bg-white'>
								<Icon name={details[index].icon} />
							</div>
							<div className='grow'>
								<div className='font-bold'>{item.title}</div>
								<div>{item.content ? item.content : item.kandungan}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='flex mt-5 pt-5 border-t border-dashed border-n-1 dark:border-white'>
				<button className='btn-blue btn-medium grow dark:border-transparent'>
					<Icon name='bookmark' />
					<span>{data.buttonText}</span>
				</button>
				<button className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'>
					<Icon name='email' />
				</button>
				<button className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'>
					<Icon name='share' />
				</button>
			</div>
			<form onSubmit={submitData}>
				<div className='flex mt-5 pt-5 border-t border-dashed border-n-1 dark:border-white'>
					<button
						type='submit'
						onClick={() => {
							setLoading(true);
							setLanguage('en');
							setParentLang('en');
						}}
						className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'
					>
						EN
					</button>
					<button
						type='submit'
						onClick={() => {
							setLoading(true);
							setLanguage('zh');
							setParentLang('zh');
						}}
						className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'
					>
						CN
					</button>
					<button
						type='submit'
						onClick={() => {
							setLoading(true);
							setLanguage('ms');
							setParentLang('ms');
						}}
						className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'
					>
						MS
					</button>
					<button
						type='submit'
						onClick={() => {
							setLoading(true);
							setLanguage('ta');
							setParentLang('ta');
						}}
						className='btn-stroke btn-medium btn-square shrink-0 ml-1.5'
					>
						TA
					</button>
				</div>
			</form>
		</>
	);
};

export default Details;
