import {getHost} from './Host';

export const handlePath = (value: string) => {
    if(value.indexOf('http')<0) return `${getHost()}${value}`
    return value
};
