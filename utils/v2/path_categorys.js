import { FaBook, FaRegEdit } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { LuFileInput } from "react-icons/lu";
import { PiCalculatorLight } from "react-icons/pi";

const path_categorys = [
    {
        title: '',
        paths: [
            {
                path: '/v2/recipe/',
                name: 'Recipe Book',
                icon: <GiBlackBook />
            },
            {
                path: '/v2/calculation/',
                name: 'Stock recieved consumption',
                icon: <FaBook />
            },
        ]
    },
    {
        title: 'Raw Materials',
        paths: [
            {
                path: '/v2/recieved/rm/',
                name: 'Insert daily recieved',
                icon: <LuFileInput />
            },
            {
                path: '/v2/consumption/rm/',
                name: 'Daily consumption calculation',
                icon: <PiCalculatorLight />
            },
            {
                path: '/v2/update/recieved/rm/',
                name: 'Update daily recieved',
                icon: <FaRegEdit />
            },
            {
                path: '/v2/update/consumption/rm/',
                name: 'Update daily consumption',
                icon: <FaRegEdit />
            },
        ]
    },
    {
        title: 'Packing Materials',
        paths: [
            {
                path: '/v2/recieved/pm/',
                name: 'Insert daily recieved',
                icon: <LuFileInput />
            },

            {
                path: '/v2/consumption/pm/',
                name: 'Daily consumption calculation',
                icon: <PiCalculatorLight />
            },

            {
                path: '/v2/update/recieved/pm/',
                name: 'Update daily recieved',
                icon: <FaRegEdit />
            },

            {
                path: '/v2/update/consumption/pm/',
                name: 'Update daily consumption',
                icon: <FaRegEdit />
            },
        ]
    }
]

export default path_categorys