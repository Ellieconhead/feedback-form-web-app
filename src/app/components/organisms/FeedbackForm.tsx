import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import FormLabel from '../atoms/FormLabel';
import { Header } from '../atoms/Header';
import { TextButton } from '../atoms/TextButton';
import { useRouter } from 'next/navigation';

interface FeedbackFormInput {
  name: string;
  email: string;
  rating: string;
  comment: string;
}

export const FeedbackForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FeedbackFormInput>();

  async function onSubmit(data: FeedbackFormInput) {
    router.push(`/view-feedback?rating=${data.rating}`);
  }

  return (
    <div className='h-screen flex items-center flex-col justify-center'>
      <div>
        <Header text={'Feedback Form'} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='font-normal text-[0.9375rem] flex flex-col items-center mt-[10px]'
      >
        <FormLabel text='Name' inputName={''} />
        {errors.name?.type === 'required' && (
          <p className='text-white'>Required</p>
        )}
        {errors.name?.type === 'pattern' && (
          <p className='text-white'>Your name can only be composed of letters</p>
        )}
        <input
          data-testid='name'
          type='text'
          className='text-black w-64 rounded'
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        <FormLabel text={'Email'} inputName={''} />
        {errors.email?.type === 'required' && (
          <p className='text-white'>Required</p>
        )}
        {errors.email?.type === 'pattern' && (
          <p className='text-white'>Please enter a valid email address</p>
        )}
        <input
          data-testid='email'
          type='text'
          className='text-black w-64 rounded'
          {...register('email', {
            required: true,
            pattern: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i
          })}
        />
        <FormLabel text={'Rating (1-5)'} inputName={''} />
        {errors.rating?.type === 'required' && (
          <p className='text-white'>Required</p>
        )}
        {(errors.rating?.type === 'min' || errors.rating?.type === 'max') && (
          <p className='text-white'>Please enter a rating between 1 and 5</p>
        )}
        <input
          data-testid='rating'
          type='text'
          className='text-black w-64 rounded'
          {...register('rating', {
            required: true,
            min: 1,
            max: 5
          })}
        />
        <FormLabel text={'Comment'} inputName={''} />
        {errors.comment?.type === 'required' && (
          <p className='text-white'>Required</p>
        )}
        {errors.comment?.type === 'pattern' && (
          <p className='text-white'>Please enter a valid comment</p>
        )}
        <input
          data-testid='comment'
          type='text'
          className='text-black w-64 rounded'
          {...register('comment', {
            required: true,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        <div>
          <TextButton text={'Submit'} />
        </div>
      </form>
    </div>
  );
};
