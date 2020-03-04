import React from "react";
import {Button, InputNumber, Select} from 'antd';
import {useExercisesQuery} from "../../Generated/graphql";
import {useMutation} from "@apollo/react-hooks";
import Styles from "./Activity.module.scss";
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
            <div className={Styles.activity__element}>
            <Select placeholder={"Select exercise"} size={"large"}>
                {data?.exercises.map(ex => {
                    return <Option key={ex.id} value={ex.multiplier}>
                        {ex.description}
                    </Option>
                })});
            </Select>
            </div>

            <div className={Styles.activity__element}>
			<br/>
            <InputNumber className={Styles.duration__input} type={"number"} placeholder={"How long?"} size={"large"} max={180} min={1} />
            </div>

            <div className={Styles.activity__element}>
            <Button size={"large"} onClick={handleClick}>Add</Button>
            </div>
        </>
    );
};

export default ActivityView;
