import { MoreSharp } from '@mui/icons-material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    faculty_name: yup.string().required(),
    AjouterDiplome: yup.number().positive().integer().required(),
}).required();

const AjouterDiplome = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div>
            <header className='flex align-items-center gap-1'>
                <h2>Mes diplomes</h2><MoreSharp />
                <span>Ajouter un diplome</span>
            </header>
            <div>
                <form action="" className='gap-1 flex flex-column'>
                    <div className="form-row flex gap-1">
                        <input
                            type="text"
                            placeholder='Nom de la filiere'
                            minLength={2}
                            maxLength={60}
                            required
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        <select name="" id="">
                            <option value="">Selectionner une faculte</option>
                        </select>
                        <input
                            {...register("mail", { required: "Email Address is required" })}
                            aria-invalid="true"
                            type="text"
                            placeholder="Diplomes obtenus(BTS,LICENCE,MASTER...)"
                        />
                    </div>
                    <div className="form-row flex align-items-center gap-1">
                        {/* <select name="" id="">
                            <option value="">Dilome requis</option>
                        </select> */}
                        <select name="" id="">
                            <option value="">Duree formation</option>
                        </select>
                        <div>
                            Accrediter par:
                            <div className="flex">
                                <div className="flex checkbox-container align-items-center">
                                    <input id='anaqsup' type="checkbox" />
                                    <label htmlFor="anaqsup" className='flex'>ANAQ SUP</label>
                                </div>
                                <div className='flex align-items-center'>
                                    <input id='cames' type="checkbox" />
                                    <label htmlFor="cames" className='flex'>CAMES</label>
                                </div>
                                <div className='flex align-items-center'>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label htmlFor="scales">Scales</label>
                                </div>
                            </div>
                        </div>
                        {/* <fieldset>
                            <legend>Choose your interests</legend>
                            <div>
                                <input type="checkbox" id="coding" name="interest" value="coding" />
                                <label htmlFor="coding">Coding</label>
                            </div>
                            <div>
                                <input type="checkbox" id="music" name="interest" value="music" />
                                <label htmlFor="music">Music</label>
                            </div>
                        </fieldset> */}

                    </div>
                    <div className="form-row flex gap-1">
                        <textarea name="prerequises" id="prerequises" cols={30} rows={10} placeholder="Prerequis"></textarea>
                        <textarea name="debouches" id="debouches" cols={30} rows={10} placeholder="Debouches"></textarea>
                        <textarea name="avantages" id="avantages" cols={30} rows={10} placeholder="Avantages"></textarea>
                    </div>
                    <button className='btn btn-secondary' type='submit'>Ajouter</button>
                </form>
            </div>
        </div>
    )
}

export default AjouterDiplome