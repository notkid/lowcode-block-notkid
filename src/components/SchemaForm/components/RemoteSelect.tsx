import React, { useMemo, useRef, useState } from 'react';
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

const DebounceSelect = ({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps<any>) => {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState<any[]>([]);
    const fetchRef = useRef(0);
    const debounceFetcher: any = useMemo(() => {
        const loadOptions = (value: string) => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then((newOptions) => {
                if (fetchId !== fetchRef.current) {
                    // for fetch callback order
                    return;
                }

                setOptions(newOptions);
                setFetching(false);
            });
        };

        return loadOptions;
    }, [fetchOptions]);

    return (
        <Select
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size="small" /> : null}
            {...props}
            options={options}
        />
    );
}



const RemoteSelect: React.FC = (props: any) => {
    const [value, setValue] = useState<UserValue[]>([]);
    const { url, onChange } = props
    const fetchUserList = (username: string): Promise<UserValue[]> => {
        debugger
        return window?.request(url, {
            method: 'POST',
            data: {
                appId: "1196271598647115866",
                isPage: false,
                tenantId:"default_tenant",
                type: 1,
                isEnabled: 1,
                storeName: username
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


    return (
        <DebounceSelect
            mode="multiple"
            value={value}
            placeholder="请输入门店名称搜索"
            fetchOptions={fetchUserList}
            onChange={(newValue) => {
                setValue(newValue as UserValue[]);
                onChange(newValue)
            }}
            style={{ width: '100%' }}
        />
    );
};

export { RemoteSelect }