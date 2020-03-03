import React from "react";
import {Button, InputNumber, Select} from 'antd';
import {useExercisesQuery} from "../../Generated/graphql";
import {useMutation} from "@apollo/react-hooks";

interface Props {
}

export const ActivityView: React.FC<Props> = () => {
    const Option = Select.Option
    const {loading, error, data} = useExercisesQuery();
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <>
            <Select placeholder={"Select exercise"}>
                {data?.exercises.map(ex => {
                    return <Option key={ex.id} value={ex.multiplier}>
                        {ex.description}
                    </Option>
                })});
            </Select>
			<br/>
            <InputNumber type={"number"} placeholder={"How long?"} max={180} min={1}>
            </InputNumber>
            <br/>
            <Button onClick={handleClick}>Add</Button>
        </>
    );
};

export default ActivityView;
