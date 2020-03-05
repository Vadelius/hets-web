import React, {useState} from "react";

import {useExercisesQuery} from "../../Generated/graphql";
import Styles from "./Activity.module.scss";
import {Button, Classes, Dialog, FormGroup, HTMLSelect, Icon, InputGroup, NumericInput} from "@blueprintjs/core";

interface Props {
}

interface ExerciseForm {
    duration: number;
    description: string;
    multiplier: number;
    exerciseId: string;
}

interface State {
    isOpen: boolean;
    formData: ExerciseForm;
}

export const ActivityView: React.FC<Props> = () => {
    const [state, setState] = useState<State>({
        isOpen: false,
        formData: {
            description: "",
            duration: 0,
            exerciseId: "",
            multiplier: 0,
        }
    })
    const {loading, error, data} = useExercisesQuery();
    const openDialog = (e: React.MouseEvent<HTMLElement>) => {
        setState({isOpen: true, formData: {...state.formData}});
        console.log(e);
    }
    const dialogConfirm = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        console.log(state);
    }

    const dialogClose = () => {
        setState({isOpen: false, formData: {...state.formData}})
    };

    const handleChange = (e: any) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    return (
        <>
            <div className={Styles.activity__element}>
                <FormGroup
                    label="Description"
                    labelFor="text-input"
                >
                    <InputGroup id="text-input" placeholder="Description of your exercise."
                                value={state.formData.description}
                                onChange={handleChange}/>
                </FormGroup>
                <FormGroup
                    label="What type?"
                >
                    <HTMLSelect id="exercise-select">

                        <Icon icon={"walk"}/>
                        {data?.exercises.map(ex => {
                            return <option key={ex.id} value={ex.multiplier}>
                                {ex.description} * ({ex.multiplier})
                            </option>

                        })});
                    </HTMLSelect>
                </FormGroup>
                <FormGroup
                    label="Duration"
                    labelFor="duration-input"
                    labelInfo={"(minutes)"}
                >
                    <NumericInput id={"duration-input"} placeholder={"For how long?"} majorStepSize={10} min={1}
                                  max={300} stepSize={5} leftIcon={"time"}/>
                </FormGroup>
            </div>


            <div className={Styles.activity__element}>
                <Button onClick={openDialog}>Add exercise</Button>
            </div>
            <Dialog
                className={Classes.DARK}
                icon="info-sign"
                title="Are you sure?"
                isOpen={state.isOpen}
                onClose={dialogClose}
            >
                <span>You will receive X points</span>
                <Button onClick={dialogConfirm}>Yes</Button>
            </Dialog>
        </>
    );
};

export default ActivityView;
