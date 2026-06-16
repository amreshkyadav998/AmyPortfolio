import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineLinkedin} from "react-icons/ai";
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode,SiCodeforces,SiCodechef} from 'react-icons/si';

const data = [
    {id: 1, icon: <HiOutlineMail/>, link: 'mailto:amresh.2022ug2028@iiitranchi.ac.in', name: 'Email'},
    {id: 2, link: 'https://www.linkedin.com/in/amresh-yadav-223656257', icon: <AiOutlineLinkedin/>, name: 'LinkedIn'},
    {id: 3, link: 'https://github.com/amreshkyadav998', icon: <AiFillGithub/>, name: 'GitHub'},
    {id: 4, link: 'https://x.com/amreshky997?s=08', icon: <AiOutlineTwitter/>, name: 'Twitter'},
    {id: 5, link: 'http://leetcode.com/amreshky/', icon: <SiLeetcode/>, name: 'LeetCode'},
    {id: 6, link: 'https://codeforces.com/profile/amy999', icon: <SiCodeforces/>, name: 'Codeforces'},
    {id: 7, link: 'https://www.codechef.com/users/amreshky997', icon: <SiCodechef/>, name: 'CodeChef'}
]

export default data
