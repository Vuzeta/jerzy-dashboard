import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Strona Główna',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'Kalkulator',
		path: '/calculator',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text',
	},
];
