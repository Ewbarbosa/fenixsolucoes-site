"use client"

import style from './style.module.scss'

import { Header } from '../../components/Header/page'
import { Footer } from '../../components/Footer/page'
import { Input } from '@/components/Input/page'
import { TextArea } from '@/components/Input/page'
import { Button } from '@/components/Button/page'
import { FormEvent, useState, useRef } from 'react'

import emailjs from '@emailjs/browser'

import React from 'react'
import { toast } from 'react-toastify';

import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {

  const form = useRef<any>(null);
  const captcha = useRef<any>(null);

  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);

  const notify = () => toast.success('Facil');

  function handleMessage(event: FormEvent) {
    event.preventDefault();

    if (name === '' || telephone === '' || message === '') {
      alert('Preencha todos os campos.');
      return;
    }

    setLoading(true);
    setChecked(true);

    emailjs.sendForm('service_iey6xm9', 'template_j9wqaj2', form.current, 'Zp7aBTSa1P_siICgq')
      .then((result) => {
        console.log(result.text);
        setName('');
        setTelephone('');
        setMessage('');

        captcha.current.reset();

        setLoading(false);
        setChecked(true);

      }, (error) => {
        console.log(error.text)
        setLoading(false);
        setChecked(false);
      })
  }

  function onChange(value: any) {

    //console.log('Capt', value)
    setChecked(false);
  }

  return (
    <div className={style.container}>
      <Header />
      <p className={style.title}>Preencha o formulário com seus dados e em breve retornaremos o contato!</p>

      <form ref={form} className={style.form} onSubmit={handleMessage}>

        <Input
          placeholder='Nome'
          value={name}
          name={'from_name'}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder='Telefone'
          type='number'
          value={telephone}
          name={'contact'}
          onClick={notify}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <Input
          placeholder='E-mail'
          type='email'
          value={telephone}
          name={'contact'}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <TextArea
          placeholder='Digite aqui sua mensagem'
          value={message}
          name={'message'}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          type='submit'
          className={style.buttonSend}
          loading={loading}
          disabled={checked}
        >
          Enviar
        </Button>

        <ReCAPTCHA
          ref={captcha}
          sitekey='6Lf8Y0InAAAAACXg65E_o9yRPrUqNatnzn9Ax9-y'
          onChange={onChange}
          size={'compact'}
          theme={'dark'}
        />

      </form>

      <Footer />

    </div>
  )
}