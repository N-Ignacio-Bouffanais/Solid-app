import { useFormHandler } from 'solid-form-handler';
import { zodSchema } from 'solid-form-handler/zod';
import { Component } from 'solid-js';
import { z } from "zod";

type User = {
    name: string;
    weight: number;
    reps: number;
    sets: number;
    day: string;
    done: boolean;
};

export const userSchema: z.Schema<User> = z.object({
    name: z.string().nonempty(),
    weight: z
        .number()
        .nonnegative('Required field'),
    reps: z.number(),
    sets: z.number(),
    day: z.string().min(5),
    done: z.boolean()
});


const Home: Component = () => {
    const formHandler = useFormHandler(zodSchema(userSchema));
    const { formData } = formHandler;

    const submit = async (event: Event) => {
        event.preventDefault();
        try {
            await formHandler.validateForm();
            alert('Data sent with success: ' + JSON.stringify(formData()));
            formHandler.resetForm();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onsubmit={submit}>
                <label class="text-slate-300 text-xl font-semibold" for="exercise">Exercise:</label>
                <select required name="exercise" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2 cursor-pointer " autofocus >
                    <option value="Biceps-Curl">Biceps curl</option>
                    <option value="Squat">Squat</option>
                    <option value="Bench-press">Bench press</option>
                    <option value="Deadlift">Deadlift</option>
                    <option value="Bulgarian-Squat">Bulgarian squat</option>
                    <option value="Cardio">Cardio</option>
                </select>
                <button>save</button>
            </form>
        </>
    )
}

export default Home