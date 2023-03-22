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


const SupplierSelect: React.FC = (props: any) => {
    const { url, onChange, value } = props
    console.log('value', value)
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
                        label: v.supplierName,
                        value: v.supplierCode,
                        businessName: v.businessName,
                        businessCode: v.businessCode,
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

    const handleSelect = (value) => {
        value = value || []
        const result = value.map(v=> {
            const option = options.find(o=>o.value === v.value)
            return {
                ...option,
                businessName: option.label,
                businessCode: option.value,
            }
        })
        onChange(result)
    }

    return (
        <Select
            value={value}
            placeholder="请输入名称搜索"
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            labelInValue
            allowClear
            clearable={true}
            onChange={value=>handleSelect(value)}
            options={options}
            filterOption
        />
    );
};

export { SupplierSelect }


