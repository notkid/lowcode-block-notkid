import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { request } from '../../../request';

interface UserValue {
    label: string;
    value: string;
}

export interface DebounceSelectProps<ValueType = any>
    extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
    fetchOptions: (search: string) => Promise<ValueType[]>;
    debounceTimeout?: number;
}


const SingleSelect: React.FC = (props: any) => {
    const { url, onChange, value } = props
    const fetchUserList = (username: string): Promise<UserValue[]> => {
        if(!window.request){
            return Promise.resolve([])
        }
        return window?.request(url, {
            method: 'POST',
            data: {
                name: username,
                size: 9999
            }
        })
            .then((data: any) => {
                return data?.payload?.content?.map(
                    (v: any) => ({
                        label: v.storeName,
                        value: v.id,
                    }),
                )
            }

            );
    }

    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState<any[]>([]);
    const fetchRef = useRef(0);

    useEffect(() => {
        setOptions([]);
        setFetching(true);

        fetchUserList('').then((newOptions) => {
            setOptions(newOptions);
            setFetching(false);
        });
    },[])

    return (
        <Select
            value={value}
            placeholder="请输入名称搜索"
            filterOption={true}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            clearable={true}
            onChange={value=>onChange(value)}
            options={options}
        />
    );
};

export { SingleSelect }


