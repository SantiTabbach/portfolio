/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { formatShortDate, getElapsedTime } from '../../../utils/utils';
import { Section } from '../../common';
import ExperienceItem from './components/ExperienceItem';
import { StyledLine } from './components/StyledExperienceItem';
import { WORK_EXPERIENCE } from './consts';
import useTranslation from '../../../hooks/useTranslation';
import { TFunction } from 'i18next';

const calculateFormattedTime = (
	time: string,
	t: TFunction<'translation', undefined>
) => {
	const [start, end] = time.split(' - ');

	const calcTime = getElapsedTime(start, end, t);
	return `${formatShortDate(start)} - ${formatShortDate(end)} · ${calcTime}`;
};

const WorkExperience = () => {
	const { t } = useTranslation();

	return (
		<Section title={t('work-experience.title')}>
			<div style={{ position: 'relative' }}>
				<StyledLine />
				{WORK_EXPERIENCE.map((item, index) => {
					const { time, ...rest } = item;
					const formattedTime = calculateFormattedTime(t(time), t);

					return <ExperienceItem key={index} time={formattedTime} {...rest} />;
				})}
			</div>
		</Section>
	);
};

export default React.memo(WorkExperience);
