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


const BillTypeSelect: React.FC = (props: any) => {
    const { url, onChange, value, valueEnum } = props
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        if(!valueEnum) {
            setOptions([])
            return
        }
        setOptions(Object.keys(valueEnum).map(value=>{
            return {
                label: valueEnum[value].text,
                value: value,
                businessName: valueEnum[value].text,
                businessCode: value,
            }
        }))
    },[valueEnum])

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
            filterOption={true}
            {...props}
            clearable={true}
            labelInValue={true}
            onChange={value=>handleSelect(value)}
            options={options}
        />
    );
};

export { BillTypeSelect }


