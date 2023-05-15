import { Component, createSignal } from 'solid-js';

const ExerciseForm: Component = () => {

    const [form, setForm] = createSignal({
        name: "",
        weight: 0,
        reps:0,
        sets:0,
        day:'',
    })
    const submit = async (event: Event) => {
        event.preventDefault();
        console.log(JSON.stringify(form()))
    };

    return (
        <>
            <form>
                <label class="text-slate-300 text-xl font-semibold" for="exercise">Exercise:</label>
                <select onInput={(e) =>{
                    const key = e.currentTarget.name;
                    setForm({...form(), [key]:e.currentTarget.value})
                    console.log(e.currentTarget.value)
                }} required name="exercise" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2 cursor-pointer " autofocus >
                    <option value="Biceps-Curl">Biceps curl</option>
                    <option value="Squat">Squat</option>
                    <option value="Bench-press">Bench press</option>
                    <option value="Deadlift">Deadlift</option>
                    <option value="Bulgarian-Squat">Bulgarian squat</option>
                    <option value="Cardio">Cardio</option>
                </select>
                <label class="text-slate-300 text-xl font-semibold" for="day">Day:</label>
                <select onInput={(e) => {
                    const key = e.currentTarget.name;
                    setForm({ ...form(), [key]: e.currentTarget.value })
                }} name="day" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2 cursor-pointer">
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miercoles">Miercoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sabado">Sabado</option>
                    <option value="domingo">Domingo</option>
                </select>
                <label class="text-slate-300 text-xl font-semibold" for="reps">Reps:</label>
                <input onInput={(e)=> {
                    setForm({...form(), reps: Number(e.currentTarget.value)})
                }}  name="reps" id="reps" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2" type="number" />
                <label class="text-slate-300 text-xl font-semibold" for="weight">Weight(kg):</label>
                <input onInput={(e)=> {
                    setForm({ ...form(), weight: Number(e.currentTarget.value)})
                }} name="weight" id="weight" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2" type="number" />
                <label class="text-slate-300 text-xl font-semibold" for="sets">Sets:</label>
                <input onInput={(e)=> {
                    setForm({ ...form(), sets: Number(e.currentTarget.value)})
                }} name="sets" id="sets" class="outline-none flex rounded-md h-9 w-80 px-4 font-medium my-2" type="number" />
                <button type="button" onClick={submit} class="h-9 w-80 rounded-md bg-sky-600 text-slate-50 font-semibold my-4">Done</button>
                <button type="button" class="h-9 w-80 rounded-md bg-pink-700 text-slate-50 font-semibold my-2">Cancel</button>
            </form>
        </>
    )
}

export default ExerciseForm