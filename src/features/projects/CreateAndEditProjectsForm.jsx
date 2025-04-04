import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField'
import { TagsInput } from 'react-tag-input-component'
import useCategories from '../../hooks/useCategories'
import RHFselect from '../../ui/RHFselect'
import DatePickerField from '../../ui/DatePickerField'
import useCreateNewProject from './useCreateNewProject'
import useEditProject from './useEditProject'
import Loading from '../../ui/Loading'

function CreateAndEditProjectsForm({ onClose, project = {} }) {
    const { _id: editId } = project;
    const isEditing = Boolean(editId);

    const {
        title,
        description,
        tags: prevTags,
        category,
        budget,
        deadline
    } = project;
    let editValues = {};
    if (isEditing) {
        editValues = {
            title,
            description,
            category,
            budget
        }
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: editValues })
    const [tags, setTags] = useState(prevTags || [])
    const { categories } = useCategories()
    const [date, setDate] = useState(deadline || new Date())
    const { isCreating, createNewProject } = useCreateNewProject()
    const { isEditing: isLoading, editProject } = useEditProject()

    const onSubmit = (data) => {
        const newProject = {
            ...data,
            tags,
            deadline: new Date(date).toISOString()
        }

        if (isEditing) {
            editProject({ id: project._id, data: newProject }, {
                onSuccess: () => {
                    onClose()
                    reset()
                }
            })
        } else {
            createNewProject(newProject, {
                onSuccess: () => {
                    onClose()
                    reset()
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 pt-4'>
            <TextField
                labelValue='عنوان پروژه'
                name='title'
                register={register}
                validationSchema={{
                    required: 'عنوان پروژه ضروری است',
                    minLength: {
                        value: 8,
                        message: 'عنوان پروژه حداقل باید 8 کاراکتر باشد'
                    },
                    maxLength: {
                        value: 15,
                        message: 'عنوان پروژه حداکثر باید 15 کاراکتر باشد'
                    }
                }}
                errors={errors}
                required
            />
            <TextField
                labelValue='توضیحات'
                name='description'
                register={register}
                validationSchema={{
                    required: 'توضیحات ضروری است',
                    minLength: {
                        value: 8,
                        message: 'توضیحات حداقل باید 8 کاراکتر باشد'
                    },
                    maxLength: {
                        value: 15,
                        message: 'توضیحات حداکثر باید 30 کاراکتر باشد'
                    }
                }}
                errors={errors}
                required
            />
            <div className='space-y-2'>
                <span className='font-thin text-secondary-800'>تگ ها</span>
                <TagsInput
                    value={tags}
                    onChange={setTags}
                    name='tags'
                />
            </div>
            <RHFselect
                labelValue='دسته بندی ها'
                name='category'
                register={register}
                options={categories}
                validationSchema={{
                    required: 'دسته بندی ضروری است',
                }}
                errors={errors}
                required
            />
            <TextField
                labelValue='بودجه'
                name='budget'
                type='number'
                register={register}
                validationSchema={{
                    required: 'بودجه ضروری است'
                }}
                errors={errors}
                required
            />
            <DatePickerField value={date} setValue={setDate} />
            <div className='flex items-center justify-between gap-x-2 pt-2'>
                {
                    isCreating ? (
                        <Loading width={80} height={80} />
                    ) : (
                        <>
                            <button type='submit' className='btn btn--primary flex-1'>تایید</button>
                            <button onClick={onClose} className='btn btn--danger flex-1'>لغو</button>
                        </>
                    )
                }
            </div>
        </form>
    )
}

export default CreateAndEditProjectsForm
